import React, { useState, useEffect, useRef } from 'react'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navRef = useRef(null);

    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [isOpen]);

    const closeMenu = () => setIsOpen(false);

    const scrollToSection = (e, id) => {
        e.preventDefault();
        closeMenu();
        const section = document.getElementById(id);
        if (section) {
            const navHeight = navRef.current?.offsetHeight || 60;
            const sectionTop = section.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({ top: sectionTop - navHeight, behavior: 'smooth' });
        }
    };

    return (
        <>
            <nav ref={navRef} className='fixed top-0 w-full flex justify-center items-center px-6 md:px-12 py-4 bg-[#0f172a]/90 backdrop-blur-md border-b-2 border-white/10 z-50'>
                <div className='flex justify-between items-center w-full max-w-7xl text-white'>

                    {/* LOGO */}
                    <div className='text-2xl font-black tracking-tighter cursor-default'>
                        <a href="#home" onClick={(e) => scrollToSection(e, 'home')}>
                            SANTOSH<span className='text-orange-500'>.</span>
                        </a>
                    </div>

                    {/* NAVIGATION LINKS */}
                    <div className='hidden md:flex space-x-10 items-center font-bold uppercase text-sm tracking-widest'>
                        <a href="#home" onClick={(e) => scrollToSection(e, 'home')} className='hover:text-orange-500 transition-colors duration-200'>Home</a>
                        <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className='hover:text-orange-500 transition-colors duration-200'>About</a>
                        <a href="#projects" onClick={(e) => scrollToSection(e, 'projects')} className='hover:text-orange-500 transition-colors duration-200'>Projects</a>
                    </div>

                    {/* CONTACT BUTTON */}
                    <div className='hidden md:block relative w-fit h-fit group'>
                        <div className="absolute inset-0 bg-orange-500 translate-x-1 translate-y-1 border-2 border-black"></div>
                        <div className='relative bg-white text-black px-5 py-2 border-2 border-black font-black uppercase text-xs tracking-tighter transition-all duration-100 
                                        group-hover:-translate-x-1 group-hover:-translate-y-1 
                                        active:translate-x-0 active:translate-y-0 cursor-pointer'>
                            <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className='block select-none'>
                                Contact Me
                            </a>
                        </div>
                    </div>

                    {/* MOBILE Responsive */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden relative z-60 w-10 h-10 flex flex-col justify-center items-center gap-1.5 group"
                        aria-label="Toggle menu"
                    >
                        <span className={`block w-7 h-[2.5px] bg-white transition-all duration-300 ease-in-out origin-center ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                        <span className={`block w-7 h-[2.5px] bg-white transition-all duration-300 ease-in-out ${isOpen ? 'opacity-0 scale-x-0' : 'opacity-100'}`}></span>
                        <span className={`block w-7 h-[2.5px] bg-white transition-all duration-300 ease-in-out origin-center ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                    </button>
                </div>
            </nav>

            <div
                className={`fixed inset-0 z-40 bg-[#0f172a]/98 backdrop-blur-xl flex flex-col items-center justify-center gap-8 transition-all duration-500 ease-in-out md:hidden ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
            >
                <div className={`flex flex-col items-center gap-6 transition-all duration-500 delay-100 ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                    <a href="#home" onClick={(e) => scrollToSection(e, 'home')} className='text-3xl font-black text-white uppercase tracking-tighter hover:text-orange-500 transition-colors'>
                        Home
                    </a>
                    <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className='text-3xl font-black text-white uppercase tracking-tighter hover:text-orange-500 transition-colors'>
                        About
                    </a>
                    <a href="#projects" onClick={(e) => scrollToSection(e, 'projects')} className='text-3xl font-black text-white uppercase tracking-tighter hover:text-orange-500 transition-colors'>
                        Projects
                    </a>
                </div>

                <div className={`relative group w-fit transition-all duration-500 delay-200 ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                    <div className="absolute inset-0 bg-orange-500 translate-x-1 translate-y-1 border-2 border-black"></div>
                    <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className='relative block bg-white text-black px-8 py-3 border-2 border-black font-black uppercase text-sm tracking-tighter transition-all hover:-translate-x-1 hover:-translate-y-1 active:translate-x-0 active:translate-y-0'>
                        Contact Me
                    </a>
                </div>
            </div>
        </>
    )
}

export default Navbar;