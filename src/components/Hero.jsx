import Lottie from 'lottie-react'
import React from 'react'
import lottie from '@/assets/lottie.json'

const Hero = () => {
    const handleClick = () => {
        window.open('https://hacktoberfest.com/', '_blank');
    };

    return (
        <div className='w-full'>
            <section className="w-full flex  min-h-screen  items-center px-10">
                <div className="w-[50%] z-10 p-6">
                    <h1 className="text-white text-5xl font-bold font-dm-sans mb-6 leading-tight">
                        Club Gamma Represents <br />
                        <span className="text-red-500 font-extrabold relative after:block after:bg-red-600 after:w-full after:h-1 after:absolute after:bottom-[-4px] after:left-0 after:transform scale-x-0 after:transition-transform hover:after:scale-x-100">
                            &lt; HackToberFest /&gt;
                        </span>
                        for students who are looking for Open source contribution
                    </h1>
                    <button
                        className="relative font-poppins inline-block text-white py-3 px-8 border-2 border-red-500 rounded-xl font-bold hover:bg-red-500 hover:text-black transition-all duration-300 hover:scale-[0.97] shadow-lg hover:shadow-none"
                        onClick={handleClick}>
                        Register
                    </button>
                </div>
                <div className='w-[50%] '>
                    <div className='w-[80%] h-[80%] mx-auto'>
                        <Lottie animationData={lottie} loop={true} />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Hero
