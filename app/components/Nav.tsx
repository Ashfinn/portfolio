'use client'
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Nav() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className={`navbar sticky top-0 transition-all duration-7000 ease-in-out ${isScrolled ? 'h-16 bg-blue-400' : 'h-30 bg-base-100'}`}>
            <div className="flex-1">
                <a className="btn btn-ghost" href="#">
                    <Image src="/logo_light.png" alt="logo" width={50} height={50} />
                </a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <details>
                            <summary>Links</summary>
                            <ul className="bg-base-100 rounded-t-none p-5 ">
                                <li>
                                    <Link href="#projects">Projects</Link>
                                </li>
                                <li>
                                    <Link href="#education">Education</Link>
                                </li>
                                <li>
                                    <Link href="#certification">Certifications</Link>
                                </li>
                                <li>
                                    <Link href="#skills">Skills</Link>
                                </li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>
        </div>
    );
}
