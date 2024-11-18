import React from "react";
import { XIcon } from "lucide-react";
import { BsGithub, BsLinkedin, BsTwitterX } from "react-icons/bs";

export default function Hero() {
    return (
        <div className="flex flex-col justify-start items-start h-screen pt-24 px-8">
            <h1 className="text-5xl font-bold text-blue-500 py-2">Obidur Rahman</h1>
            <h2 className="text-3xl font-semibold py-4">Mathematician and Machine Learning Engineer</h2>
            <h2 className="text-xl">Doing research in Machine Learning, and contributing to open source and creating content about various math and tech topics</h2>

            <div className="flex space-x-2 py-8">
                <a href="">
                    <BsGithub />
                </a>
                <a href="">
                    <BsLinkedin />
                </a>
                <a href="">
                     <BsTwitterX />
                </a>
            </div>
        </div>
    )
}