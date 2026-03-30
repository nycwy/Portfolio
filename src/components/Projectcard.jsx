import React from 'react'

const Projectcard = ({ title, description, imgUrl, link }) => {
    return (
        <div className="relative w-full group z-0 h-full">
            <div className="absolute inset-0 bg-white translate-x-2 translate-y-2"></div>
            <div className="relative h-full w-full bg-[#1e293b] border-2 border-white overflow-hidden flex flex-col transition-transform hover:-translate-x-1 hover:-translate-y-1">

                {/* Image */}
                <div className="border-b-2 border-white overflow-hidden">
                    <img
                        className="w-full h-48 object-cover transition-all duration-500"
                        src={imgUrl || "https://via.placeholder.com/300"}
                        alt={title}
                    />
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col grow">
                    <h2 className="text-xl font-black text-orange-500 uppercase tracking-tighter leading-tight">
                        {title}
                    </h2>

                    <p className="text-sm text-slate-300 mt-3 leading-relaxed line-clamp-3 grow">
                        {description}
                    </p>

                    {/* Visit Site button */}
                    <div className="mt-4 pt-4 border-t border-white/10">
                        <a href={link} target="_blank" rel="noreferrer" className="text-xs font-bold uppercase tracking-widest text-white group-hover:text-orange-500 transition-colors">
                            Visit Site →
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projectcard