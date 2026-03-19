import { FaLinkedinIn } from "react-icons/fa";
import { PiGithubLogoFill } from "react-icons/pi";
import { SiDevpost } from "react-icons/si";
import { FaYoutube } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { RiInstagramFill } from "react-icons/ri";


function Header() {
    return (
        <div>
            <h2 className="text-xl atkinson-hyperlegible-next-regular text-[#fcecc9]">
                Hi, I'm Aman! Idk what I specifically do yet but I like making cool things. This page is my canvas, and I've painted it how I like! Check it out! </h2>
            <div className="flex flex-col gap-3 pt-6 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                    <a href="https://www.linkedin.com/in/aman-anwar-/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <FaLinkedinIn className="social-icon" />
                    </a>
                    <a href="https://github.com/notcolumbus" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <PiGithubLogoFill className="social-icon" />
                    </a>
                    <a href="https://devpost.com/aman-anwar18oct" target="_blank" rel="noopener noreferrer" aria-label="Devpost">
                        <SiDevpost className="social-icon" />
                    </a>
                    <a href="https://www.youtube.com/@amananwar7421" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                        <FaYoutube className="social-icon" />
                    </a>
                    <a href="https://x.com/Not_Columbus" target="_blank" rel="noopener noreferrer" aria-label="X">
                        <RiTwitterXLine className="social-icon" />
                    </a>
                    <a href="https://www.instagram.com/notorious.columbus/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                        <RiInstagramFill className="social-icon" />
                    </a>
                </div>
                <div className="flex items-center gap-2 self-start sm:ml-auto sm:gap-3 sm:self-auto">
                    <a href="https://ik.imagekit.io/sjuopypj1/aman%20resume%20(2).pdf" target="_blank" rel="noopener noreferrer"><span className="text-lg pt-2 atkinson-hyperlegible-next-regular text-[#fcecc9]">Resume</span></a>
                    <a href="https://ik.imagekit.io/sjuopypj1/amans_cv%20(1).pdf" target="_blank" rel="noopener noreferrer"><span className="text-lg pt-2 atkinson-hyperlegible-next-regular text-[#fcecc9]">CV</span></a>
                </div>
            </div>
        </div>
    )
}
export default Header
