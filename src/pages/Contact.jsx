import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
    const formRef = useRef()
    const [status, setStatus] = useState({ type: '', message: '' })
    const [isSending, setIsSending] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault()

        if (isSending) return
        setIsSending(true)
        setStatus({ type: '', message: '' })

        emailjs.sendForm(
            'service_uatj6zw',
            'template_05qjqze',
            formRef.current,
            { publicKey: 'Xgp_vhrldfa918wzZ' }
        )
            .then(() => {
                setStatus({ type: 'success', message: 'Message sent successfully! I\'ll get back to you soon.' })
                formRef.current.reset()
                setTimeout(() => setStatus({ type: '', message: '' }), 5000)
            })
            .catch((error) => {
                console.error('EmailJS Error:', error)
                setStatus({ type: 'error', message: 'Failed to send message. Please try again later.' })
                setTimeout(() => setStatus({ type: '', message: '' }), 5000)
            })
            .finally(() => {
                setIsSending(false)
            })
    }

    return (
        <section id='contact' className="bg-[#0f172a] min-h-screen py-10 px-4 md:px-12 lg:px-28 w-full overflow-hidden">
            {/* Section Header */}
            <div className='flex justify-center mb-10 md:mb-12'>
                <h2 className='text-3xl md:text-4xl text-white font-black uppercase tracking-tighter border-b-4 border-orange-500 pb-2 text-center'>
                    Contact Me
                </h2>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 max-w-7xl mx-auto items-start w-full'>

                {/* SEND A MESSAGE FORM */}
                <div className="relative group w-full">
                    <div className="absolute inset-0 bg-white translate-x-2 translate-y-2"></div>
                    <div className="relative bg-[#1e293b] border-2 border-white p-6 md:p-8 w-full">
                        <h2 className="text-xl md:text-2xl font-black text-orange-500 uppercase mb-6 tracking-tight">Send A Message</h2>

                        <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="flex flex-col gap-1">
                                    <label htmlFor="name" className="text-xs font-bold uppercase text-slate-400">Name</label>
                                    <input type="text" id='name' name='name' required className="bg-[#0f172a] border-2 border-slate-700 p-3 text-white focus:border-orange-500 outline-none transition-colors w-full" placeholder="eg. John Doe" />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <label htmlFor="email" className="text-xs font-bold uppercase text-slate-400">Email</label>
                                    <input type="email" id='email' name='email' required className="bg-[#0f172a] border-2 border-slate-700 p-3 text-white focus:border-orange-500 outline-none transition-colors w-full" placeholder="eg. xyz@gmail.com" />
                                </div>
                            </div>

                            <div className="flex flex-col gap-1">
                                <label htmlFor="sub" className="text-xs font-bold uppercase text-slate-400">Subject</label>
                                <input type="text" id="sub" name='sub' required className="bg-[#0f172a] border-2 border-slate-700 p-3 text-white focus:border-orange-500 outline-none transition-colors w-full" placeholder="Subject" />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label htmlFor="text" className="text-xs font-bold uppercase text-slate-400">Message</label>
                                <textarea id="text" name='text' rows="5" required className="bg-[#0f172a] border-2 border-slate-700 p-3 text-white focus:border-orange-500 outline-none transition-colors resize-none w-full" placeholder="Type your message here. . . "></textarea>
                            </div>

                            {/* Submit Button */}
                            <div className='relative w-full group mt-4'>
                                <div className="absolute inset-0 bg-orange-500 translate-x-1 translate-y-1"></div>
                                <button type="submit" disabled={isSending} className={`relative w-full bg-white text-black py-3 border-2 border-black font-black uppercase text-sm tracking-tight transition-transform hover:-translate-x-1 hover:-translate-y-1 active:translate-x-0 active:translate-y-0 ${isSending ? 'opacity-70 cursor-not-allowed' : ''}`}>
                                    {isSending ? 'Sending...' : 'Send Message'}
                                </button>
                            </div>

                            {/* Status Message */}
                            {status.message && (
                                <div className={`mt-4 p-3 border-l-4 font-bold text-sm uppercase tracking-wide ${status.type === 'success'
                                    ? 'border-green-500 bg-green-500/10 text-green-400'
                                    : 'border-red-500 bg-red-500/10 text-red-400'
                                    }`}>
                                    {status.message}
                                </div>
                            )}
                        </form>
                    </div>
                </div>

                {/* GET IN TOUCH */}
                <div className="relative group h-full w-full">
                    <div className="absolute inset-0 bg-orange-500 translate-x-2 translate-y-2"></div>
                    <div className="relative h-full bg-[#1e293b] border-2 border-white p-6 md:p-8 flex flex-col justify-between w-full">
                        <div>
                            <h2 className="text-xl md:text-2xl font-black text-white uppercase mb-8 tracking-tight border-l-4 border-orange-500 pl-4">Get In Touch</h2>

                            <div className="space-y-6 md:space-y-8">
                                {/* Email */}
                                <div className='flex items-center gap-4 md:gap-5 group/item'>
                                    <div className="p-2 md:p-3 bg-white border-2 border-black group-hover/item:bg-orange-500 transition-colors shrink-0">
                                        <svg className="w-5 h-5 md:w-6 md:h-6 fill-black" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" /></svg>
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <h3 className="text-xs font-bold uppercase text-orange-500">Email</h3>
                                        {/* break-all prevents long email from overflowing */}
                                        <p className="text-white font-medium text-sm md:text-base break-all">Khatrisantosh687@gmail.com</p>
                                    </div>
                                </div>

                                {/* Address */}
                                <div className='flex items-center gap-4 md:gap-5 group/item'>
                                    <div className="p-2 md:p-3 bg-white border-2 border-black group-hover/item:bg-orange-500 transition-colors shrink-0">
                                        <svg className="w-5 h-5 md:w-6 md:h-6 fill-black" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" /></svg>
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <h3 className="text-xs font-bold uppercase text-orange-500">Address</h3>
                                        <p className="text-white font-medium text-sm md:text-base">Gaushala, Kathmandu</p>
                                    </div>
                                </div>

                                {/* Phone */}
                                <div className='flex items-center gap-4 md:gap-5 group/item'>
                                    <div className="p-2 md:p-3 bg-white border-2 border-black group-hover/item:bg-orange-500 transition-colors shrink-0">
                                        <svg className="w-5 h-5 md:w-6 md:h-6 fill-black" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" /></svg>
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <h3 className="text-xs font-bold uppercase text-orange-500">Phone</h3>
                                        <p className="text-white font-medium text-sm md:text-base">+977 9743269692</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Availability Footer */}
                        <div className="mt-8 md:mt-12 bg-orange-500/10 border-l-4 border-orange-500 p-4">
                            <h2 className="text-sm font-black uppercase text-white tracking-widest">Availability</h2>
                            <p className="text-slate-400 text-xs mt-1">Open for freelance projects and full-time roles.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact