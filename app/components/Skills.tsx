import React from "react";
import Image from "next/image";
import { skills } from "../constants/details";

export default function Skills() {
    {/* The Skills component will contain a list of skills that I have */}
    return(
        <div id="skills" className="flex flex-col justify-center">

            <h1 className="py-4">Skills</h1>
            
            <div className="flex flex-row">

            {/* The skills are mapped over and displayed as images */}
            {
            skills.map((skill) => (
                <Image className="group-hover:scale-[1.05]" key={skill.title} src={skill.url} alt={skill.title} width={50} height={50} />
            ))
            }
            </div>
        </div>
    )
}