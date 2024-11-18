import React from "react";
import Image from "next/image";
import {
    Award,
    Book,
    Folders,
    GraduationCap,
  } from "lucide-react";
import Link from "next/link";

export default function Nav() {
    return (
        <div className="flex flex-row justify-between m-5">
            <div className="self-start">
                <Image src="/1.png" alt="logo" width={50} height={50} />
            </div>        

            <div className="flex flex-row space-x-4">
                <div className="flex">
                    <Folders />
                    <Link href="#proj">Projects</Link>
                </div>
                <div className="flex">
                    <GraduationCap />
                    <Link href="#edu">Education</Link>
                </div>
                <div className="flex">
                    <Award />
                    <Link href="#cert">Certifications</Link>
                </div>
                <div className="flex">
                    <Book />
                    <Link href="#skills">Skills</Link>
                </div>
            </div>
        </div>
    )
}
