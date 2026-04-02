import React from 'react'

const About = () => {
    const education = [
        {
            university: "South East Asian College of Science, Commerce and Arts. [Bengaluru, India]",
            course: "B.Sc. in Computer Science",
            cgpa: "9.22 / 10.0",
            status: "[2021 - 2024]"
        },
        {
            university: "The New SUMMIT Secondary School. [Kathmandu, Nepal]",
            course: "11/12 - Computer Science",
            cgpa: "2.86 / 4.0",
            status: "[2018 - 2020]"
        }
    ];

    return (
        <section id="about" className="py-10 bg-[#0f172a] text-white px-6 md:px-28">

            {/* Section Header */}
            <div className='flex justify-center mb-12'>
                <h2 className='text-4xl text-white font-bold uppercase tracking-tighter border-b-4 border-orange-500 pb-2'>
                    About Me
                </h2>
            </div>

            <div className='max-w-7xl mx-auto space-y-12'>

                {/* Sort Description */}
                <div className="relative group">
                    <div className="absolute inset-0 bg-orange-500 translate-x-2 translate-y-2"></div>
                    <div className="relative bg-[#1e293b] border-2 border-white p-8 transition-transform hover:-translate-x-1 hover:-translate-y-1">
                        <h2 className="text-3xl font-black text-white uppercase mb-4 tracking-tight">
                            Santosh Khatri<span className='text-orange-500'>.</span>
                        </h2>
                        <p className="text-slate-300 font-medium leading-relaxed text-lg">
                            A <span className=' text-orange-400 px-1 border border-white'>Web Developer </span>
                            based in Nepal who loves building fast, easy-to-use websites. Building upon my formal Computer Science background,
                            I am a self-driven learner who taught myself modern web technologies. I focus on writing clean code, crafting great user experiences,
                            and constantly expanding my technical skills. I am actively seeking opportunities to contribute to real-world projects and eager to
                            learn how things are built and scaled in a professional team environment.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    {/* Education */}
                    <div className="relative group h-full">
                        <div className="absolute inset-0 bg-white translate-x-2 translate-y-2"></div>
                        <div className="relative h-full border-2 border-white p-6 bg-[#1e293b] hover:-translate-x-1 hover:-translate-y-1 transition-transform">
                            <h2 className="text-xl font-black text-orange-500 uppercase mb-4">Education</h2>

                            <div className="space-y-4">
                                {education.map((edu, index) => (
                                    <div key={index} className="border-l-2 border-orange-500 pl-4">
                                        <h3 className="text-sm font-black text-white uppercase">{edu.university}</h3>
                                        <p className="text-xs text-slate-300 font-bold">{edu.course}</p>
                                        <div className="flex justify-between items-center mt-2">
                                            <span className="text-[10px] bg-white text-[#1e293b] px-2 py-0.5 font-black uppercase">
                                                CGPA: {edu.cgpa}
                                            </span>
                                            <span className="text-[10px] text-orange-400 italic font-bold">
                                                {edu.status}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Philosophy Card */}
                    {/* <div className="relative group h-full">
                        <div className="absolute inset-0 bg-white translate-x-2 translate-y-2"></div>
                        <div className="relative h-full border-2 border-white p-6 bg-[#1e293b] hover:-translate-x-1 hover:-translate-y-1 transition-transform">
                            <h2 className="text-xl font-black text-orange-500 uppercase mb-3">Philosophy</h2>
                            <p className="text-sm font-semibold text-slate-300">
                                I believe in "Code for Humans." Writing clean, maintainable, and scalable
                                code is my top priority. I build for longevity and performance.
                            </p>
                        </div>
                    </div> */}

                    {/* Tech Stacks */}
                    <div className="relative group h-full">
                        <div className="absolute inset-0 bg-white translate-x-2 translate-y-2"></div>
                        <div className="relative h-full border-2 border-white p-6 bg-[#1e293b] hover:-translate-x-1 hover:-translate-y-1 transition-transform">
                            <h2 className="text-xl font-black text-orange-500 uppercase mb-3">Tech Stacks</h2>
                            <div className='flex flex-wrap gap-2'>
                                {['React', 'Node.js', 'Tailwind', 'MongoDB'].map(item => (
                                    <span key={item} className='text-[10px] bg-slate-800 text-orange-400 border border-white px-2 py-1 font-bold'>
                                        {item}
                                    </span>
                                ))}
                            </div>
                            <p className="text-xs mt-4 text-slate-500 font-bold italic">And always learning more...</p>
                        </div>
                    </div>
                </div>
                {/* Achievements */}
                <div className="relative group">
                    <div className="absolute inset-0 bg-orange-500 translate-x-2 translate-y-2"></div>
                    <div className="relative bg-[#1e293b] border-2 border-white p-8 transition-transform hover:-translate-x-1 hover:-translate-y-1">
                        <h2 className="text-xl font-black text-orange-500 uppercase mb-6">Achievements </h2>

                        <div className="space-y-6">
                            {/* Award 1 */}
                            <div className="border-l-2 border-white pl-4">
                                <h3 className="text-sm md:text-base font-black text-white uppercase">
                                    Best Outgoing Student <span className="text-orange-400 lowercase italic text-xs md:text-sm font-bold tracking-normal">(2021–2024)</span>
                                </h3>
                                <p className="text-sm text-slate-300 font-medium mt-1.5 leading-relaxed">
                                    Awarded for overall merit and outstanding academic performance among the graduating Computer Science batch.
                                </p>
                            </div>

                            {/* Award 2 */}
                            <div className="border-l-2 border-white pl-4">
                                <h3 className="text-sm md:text-base font-black text-white uppercase">
                                    1st Place, Coding & Debugging <span className="text-orange-400 lowercase italic text-xs md:text-sm font-bold tracking-normal">('Vitrina 2023')</span>
                                </h3>
                                <p className="text-sm text-slate-300 font-medium mt-1.5 leading-relaxed">
                                    Demonstrated proficiency in algorithmic problem-solving and rapid error identification during the competition.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default About