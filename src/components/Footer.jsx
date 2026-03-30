import React from 'react'

const Footer = () => {
    return (
        <footer className='w-full bg-[#0f172a] border-t-2 border-white py-6'>
            <div className='max-w-7xl mx-auto flex flex-col items-center px-8 text-white'>
                <div className='flex flex-col md:flex-row items-center gap-2 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-slate-400'>
                    <p>
                        ©{new Date().getFullYear()} - ALL RIGHTS RESERVED
                    </p>
                    <span className='hidden md:inline text-orange-500'>|</span>
                    <p className='text-white hover:text-orange-500 transition-colors cursor-default'>
                        Designed & Built by Santosh Khatri
                    </p>
                </div>

                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className='mt-4 text-[9px] font-black uppercase tracking-widest border border-white px-3 py-1.5 hover:bg-orange-500 hover:text-black hover:border-black transition-all duration-300'
                >
                    Back to Top ↑
                </button>

            </div>
        </footer>
    )
}

export default Footer;