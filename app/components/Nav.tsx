import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFolder, FaGraduationCap, FaAward, FaBook } from 'react-icons/fa';

export default function Nav() {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <a className="btn btn-ghost" href="#">
                    <Image src="/logo_light.png" alt="logo" width={50} height={50} />
                </a>
            </div>

            <div className="flex-none menu menu-horizontal px-1">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <FaFolder className="mr-2" />
                        <Link href="#projects">Projects</Link>
                    </li>
                    <li>
                        <FaGraduationCap className="mr-2" />
                        <Link href="#education">Education</Link>
                    </li>
                    <li>
                        <FaAward className="mr-2" />
                        <Link href="#certification">Certifications</Link>
                    </li>
                    <li>
                        <FaBook className="mr-2" />
                        <Link href="#skills">Skills</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}
