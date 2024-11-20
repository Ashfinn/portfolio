import React from "react";
import Image from "next/image";
import { skills } from "../constants/details";

export default function Skills() {
    {/* The Skills component will contain a list of skills that I have */ }
    return (
        <div id="skills" className="flex flex-col">

            <h1 className="text-xl font-semibold">Skills</h1>
            <div className="flex flex-row items-center justify-center">
                {/* The skills are mapped over and displayed as images */}
                {
                    skills.map((skill) => (
                        <><Image className="group-hover:scale-[1.05]" key={skill.title} src={skill.url} alt={skill.title} width={100} height={100} />
                            <div className="group-hover:scale-100 scale-50 group-hover:opacity-100 group-hover:bg-base-100 rounded-md px-2 opacity-0 absolute bottom-2 right-2 block shadow-lg border border-base-300 group-hover:z-20 sm:text-sm md:text-xs lg:text-sm transition-all">
                            {skill.title}
                        </div></>
                    ))
                }
            </div>
        </div>


    )
}