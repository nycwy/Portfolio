import React from 'react'
import Typewriter from 'typewriter-effect';
import avatar from '../assets/avatar.png'

const Home = () => {
    return (
        <main id="home" className="relative flex flex-col md:flex-row justify-center items-center min-h-screen bg-[#0f172a] px-6 md:px-10 md:gap-20 overflow-hidden">

            <div className="flex md:hidden flex-col items-center justify-center w-full min-h-screen relative">
                <div className="relative z-0">
                    <img
                        src={avatar}
                        className="h-[70vh] w-auto object-contain opacity-30"
                        alt="Santosh Khatri Avatar"
                    />
                </div>

                <div className="absolute inset-0 flex flex-col items-start justify-center pb-28 z-10 text-white px-6">
                    <h1 className="flex gap-2 text-3xl font-black uppercase tracking-tighter leading-none">
                        SANTOSH <br />
                        <span className="text-orange-500">KHATRI</span>
                    </h1>

                    <h2 className="flex gap-2 text-start text-lg font-bold mt-4">
                        <span className="text-slate-400">I am a</span>
                        <span className='text-white border-b-3 border-orange-500'>
                            <Typewriter options={{
                                strings: ["Frontend Developer", "Backend Developer", "Fullstack Developer"],
                                autoStart: true,
                                loop: true,
                                delay: 75,
                                deleteSpeed: 50,
                                pauseFor: 2000
                            }} />
                        </span>
                    </h2>

                    {/* Download Resume */}
                    <div className="mt-6 relative group w-fit">
                        <div className="absolute inset-0 bg-orange-500 translate-x-1 translate-y-1"></div>
                        <a href="/Resume.pdf" download="Santosh_Khatri_Resume.pdf" className="relative block bg-white text-black font-black uppercase px-5 py-2 text-xs border-2 border-black hover:-translate-x-1 hover:-translate-y-1 transition-transform active:translate-x-0 active:translate-y-0">
                            Download Resume
                        </a>
                    </div>
                </div>

                {/* Social Icons below avatar on mobile */}
                <div className=" flex gap-4 z-10">
                    {/* GitHub */}
                    <a href="https://github.com/nycwy" target="_blank" rel="noreferrer"
                        className="border-2 p-3 bg-black border-white transition-all duration-300 -translate-y-1">
                        <svg className="w-5 h-5 fill-white" viewBox="0 0 640 640" xmlns="http://www.w3.org/2000/svg">
                            <path d="M237.9 461.4C237.9 463.4 235.6 465 232.7 465C229.4 465.3 227.1 463.7 227.1 461.4C227.1 459.4 229.4 457.8 232.3 457.8C235.3 457.5 237.9 459.1 237.9 461.4zM206.8 456.9C206.1 458.9 208.1 461.2 211.1 461.8C213.7 462.8 216.7 461.8 217.3 459.8C217.9 457.8 216 455.5 213 454.6C210.4 453.9 207.5 454.9 206.8 456.9zM251 455.2C248.1 455.9 246.1 457.8 246.4 460.1C246.7 462.1 249.3 463.4 252.3 462.7C255.2 462 257.2 460.1 256.9 458.1C256.6 456.2 253.9 454.9 251 455.2zM316.8 72C178.1 72 72 177.3 72 316C72 426.9 141.8 521.8 241.5 555.2C254.3 557.5 258.8 549.6 258.8 543.1C258.8 536.9 258.5 502.7 258.5 481.7C258.5 481.7 188.5 496.7 173.8 451.9C173.8 451.9 162.4 422.8 146 415.3C146 415.3 123.1 399.6 147.6 399.9C147.6 399.9 172.5 401.9 186.2 425.7C208.1 464.3 244.8 453.2 259.1 446.6C261.4 430.6 267.9 419.5 275.1 412.9C219.2 406.7 162.8 398.6 162.8 302.4C162.8 274.9 170.4 261.1 186.4 243.5C183.8 237 175.3 210.2 189 175.6C209.9 169.1 258 202.6 258 202.6C278 197 299.5 194.1 320.8 194.1C342.1 194.1 363.6 197 383.6 202.6C383.6 202.6 431.7 169 452.6 175.6C466.3 210.3 457.8 237 455.2 243.5C471.2 261.2 481 275 481 302.4C481 398.9 422.1 406.6 366.2 412.9C375.4 420.8 383.2 435.8 383.2 459.3C383.2 493 382.9 534.7 382.9 542.9C382.9 549.4 387.5 557.3 400.2 555C500.2 521.8 568 426.9 568 316C568 177.3 455.5 72 316.8 72zM169.2 416.9C167.9 417.9 168.2 420.2 169.9 422.1C171.5 423.7 173.8 424.4 175.1 423.1C176.4 422.1 176.1 419.8 174.4 417.9C172.8 416.3 170.5 415.6 169.2 416.9zM158.4 408.8C157.7 410.1 158.7 411.7 160.7 412.7C162.3 413.7 164.3 413.4 165 412C165.7 410.7 164.7 409.1 162.7 408.1C160.7 407.5 159.1 407.8 158.4 408.8zM190.8 444.4C189.2 445.7 189.8 448.7 192.1 450.6C194.4 452.9 197.3 453.2 198.6 451.6C199.9 450.3 199.3 447.3 197.3 445.4C195.1 443.1 192.1 442.8 190.8 444.4zM179.4 429.7C177.8 430.7 177.8 433.3 179.4 435.6C181 437.9 183.7 438.9 185 437.9C186.6 436.6 186.6 434 185 431.7C183.6 429.4 181 428.4 179.4 429.7z" />
                        </svg>
                    </a>
                    {/* LinkedIn */}
                    <a href="https://www.linkedin.com/in/santosh-khatri-54a68436b" target="_blank" rel="noreferrer"
                        className="border-2 p-3 bg-[#0077b5] border-white transition-all duration-300 -translate-y-1">
                        <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                    </a>
                    {/* X (Twitter) */}
                    <a href="https://x.com/frfrhahha" target="_blank" rel="noreferrer"
                        className="border-2 p-3 bg-black border-white transition-all duration-300 -translate-y-1">
                        <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.25 2.25h6.663l4.706 6.223L18.244 2.25Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
                        </svg>
                    </a>
                </div>
            </div>

            {/* Desktop */}

            <div className='hidden md:block z-10 text-white'>
                <h1 className="flex gap-2 text-6xl font-black uppercase tracking-tighter leading-none">
                    SANTOSH <br />
                    <span className="text-orange-500">KHATRI</span>
                </h1>

                <h2 className="flex gap-3 text-start text-4xl font-bold mt-6">
                    <span className="text-slate-400">I am a</span>
                    <span className='text-white border-b-4 border-orange-500'>
                        <Typewriter options={{
                            strings: ["Frontend Developer", "Backend Developer", "Fullstack Developer"],
                            autoStart: true,
                            loop: true,
                            delay: 75,
                            deleteSpeed: 50,
                            pauseFor: 2000
                        }} />
                    </span>
                </h2>

                <div className="mt-10 relative group w-fit">
                    <div className="absolute inset-0 bg-orange-500 translate-x-1 translate-y-1"></div>
                    <a href="/Resume.pdf" download="Santosh_Khatri_Resume.pdf" className="relative block bg-white text-black font-black uppercase px-8 py-3 border-2 border-black hover:-translate-x-1 hover:-translate-y-1 transition-transform active:translate-x-0 active:translate-y-0">
                        Download Resume
                    </a>
                </div>
            </div>

            <div className='hidden md:block relative group mt-12'>
                <div className="absolute inset-0 bg-orange-500 translate-x-2 translate-y-2 rounded-2xl transition-all duration-300"></div>
                <div className="relative border-4 border-white bg-slate-800 rounded-2xl overflow-hidden shadow-2xl transition-transform duration-300 group-hover:-translate-y-2 group-hover:-translate-x-2">
                    <img
                        src={avatar}
                        className="w-96 h-130 object-cover transition-all duration-500"
                        alt="Santosh Khatri Avatar"
                    />
                </div>
            </div>

        </main>
    )
}

export default Home