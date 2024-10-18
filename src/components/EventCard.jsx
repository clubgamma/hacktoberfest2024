import React from 'react'
import ReactMarkdown from 'react-markdown';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock } from 'lucide-react';

const EventCard = ({ event }) => (
    <Card className="w-full mb-8 bg-[#2a2a2a] text-white overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#4e3535]">
        <CardHeader className="p-6 bg-[#4e3535]">
            <CardTitle className="text-3xl font-bold text-white mb-2">{event.title}</CardTitle>
            <div className="flex items-center text-gray-300 space-x-4">
                <span className="flex items-center">
                    <Calendar className="h-5 w-5 mr-2" />
                    {new Date(event.start_date || event.date).toLocaleDateString()}
                </span>
                <span className="flex items-center">
                    <Clock className="h-5 w-5 mr-2" />
                    {event.time || "TBA"}
                </span>
            </div>
        </CardHeader>
        <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-4 text-[#ff6b6b]">Event Overview</h3>
                    <p className="text-gray-300 mb-6">{event.description}</p>
                    <p className="mt-4 text-gray-300">
                        For more resources, visit this <a href="https://github.com/clubgamma/GitHub-Workshop" className="text-[#ff6b6b] hover:underline">Repository</a>
                    </p>
                </div>
                <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-4 text-[#ff6b6b]">Event Details</h3>
                    <div className="bg-[#222] p-4 rounded-lg">
                        <ReactMarkdown
                            components={{
                                h1: ({ children }) => <h1 className="text-xl font-bold text-[#ff6b6b] mb-3">{children}</h1>,
                                h2: ({ children }) => <h2 className="text-lg font-semibold text-[#ff9b9b] mb-2">{children}</h2>,
                                h3: ({ children }) => <h3 className="text-md font-medium text-[#ffcbcb] mb-2">{children}</h3>,
                                p: ({ children }) => <p className="mb-3 text-gray-300">{children}</p>,
                                a: ({ children, href }) => (
                                    <a className="text-[#ff6b6b] hover:underline" href={href} target="_blank" rel="noopener noreferrer">
                                        {children}
                                    </a>
                                ),
                                ul: ({ children }) => <ul className="list-disc list-inside mb-3">{children}</ul>,
                                li: ({ children }) => <li className="text-gray-300 mb-1">{children}</li>,
                            }}
                        >
                            {event.markdownContent}
                        </ReactMarkdown>
                    </div>
                </div>
            </div>
        </CardContent>
    </Card>
);

export default EventCard
