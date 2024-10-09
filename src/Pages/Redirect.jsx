import React, { useEffect, useState } from 'react';
import { Terminal } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import Global from '@/Global';

export default function RedirectPage() {
    const [dots, setDots] = useState('');
    const [currentLine, setCurrentLine] = useState(0);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();

    const codeLines = [
        'Initializing authentication protocol...',
        'Verifying OAuth credentials...',
        'Establishing secure connection...',
        'Generating session token...',
        'Mapping user permissions...',
        'Redirecting to secure endpoint...'
    ];

    useEffect(() => {
        const dotInterval = setInterval(() => {
            setDots(prev => prev.length < 3 ? prev + '.' : '');
        }, 500);

        const lineInterval = setInterval(() => {
            setCurrentLine(prev => (prev < codeLines.length - 1 ? prev + 1 : prev));
        }, 1000);

        return () => {
            clearInterval(dotInterval);
            clearInterval(lineInterval);
        };
    }, []);

    useEffect(() => {
        const handleAuth = async () => {
            const searchParams = new URLSearchParams(location.search);
            const code = searchParams.get('code');

            if (!code) {
                setError('No authentication code found');
                setTimeout(() => navigate('/'), 3000);
                return;
            }

            try {
                const response = await Global.httpGet('/auth/access_token?code=' + code);
                const token = response.token;
                localStorage.setItem('token', token);
                await Global.getUser();

                // Wait for animation to complete before redirecting
                setTimeout(() => {
                    navigate('/');
                }, 6000);
            } catch (err) {
                console.error(err);
                setError('Authentication failed');
                setTimeout(() => navigate('/'), 3000);
            }
        };

        handleAuth();
    }, [navigate, location]);

    return (
        <div className="min-h-screen bg-black text-green-500 font-mono p-8 flex flex-col items-center justify-center">
            <div className="w-full max-w-2xl">
                <div className="flex items-center mb-4">
                    <Terminal className="mr-2" />
                    <h1 className="text-xl">System Authentication</h1>
                </div>

                <div className="bg-gray-900 p-4 rounded-lg border border-green-500">
                    {error ? (
                        <div className="text-red-500">
                            Error: {error}
                            <div className="mt-2 text-sm">Redirecting to homepage...</div>
                        </div>
                    ) : (
                        <>
                            <div className="mb-4">
                                {codeLines.map((line, index) => (
                                    <div key={index} className={`${index <= currentLine ? 'opacity-100' : 'opacity-0'} 
                    transition-opacity duration-500`}>
                                        <span className="text-blue-400">$</span> {line}
                                        {index === currentLine && <span>{dots}</span>}
                                        {index < currentLine && <span className="text-yellow-400"> [OK]</span>}
                                    </div>
                                ))}
                            </div>

                            <div className="mt-6 flex items-center">
                                <div className="animate-spin mr-3 h-4 w-4 border-2 border-green-500 rounded-full border-t-transparent"></div>
                                <div className="text-sm text-gray-400">
                                    Processing authentication{dots}
                                </div>
                            </div>
                        </>
                    )}
                </div>

                <div className="mt-4 text-sm text-center text-gray-500">
                    <p>{error ? 'Redirecting to homepage...' : 'Hold tight! We\'re ensuring a secure connection.'}</p>
                    {!error && (
                        <p className="mt-2">
                            <span className="text-green-500">&lt;</span>
                            Redirecting you to the application
                            <span className="text-green-500">/&gt;</span>
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}
