import { FaLinkedinIn } from "react-icons/fa";
import { PiGithubLogoFill } from "react-icons/pi";
import { SiDevpost } from "react-icons/si";
import { FaYoutube } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { RiInstagramFill } from "react-icons/ri";
import posthog from "posthog-js";

function Header() {
    return (
        <div>
            <h2 className="text-xl atkinson-hyperlegible-next-regular text-[#fcecc9]">
                Hi, I'm Aman! Idk what I specifically do yet but I like making cool things. This page is my canvas, and I've painted it how I like! Check it out! </h2>
            <div className="flex flex-col gap-3 pt-6 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                    <a href="https://www.linkedin.com/in/aman-anwar-/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" onClick={() => posthog.capture('social link clicked', { platform: 'linkedin' })}>
                        <FaLinkedinIn className="social-icon" />
                    </a>
                    <a href="https://github.com/notcolumbus" target="_blank" rel="noopener noreferrer" aria-label="GitHub" onClick={() => posthog.capture('social link clicked', { platform: 'github' })}>
                        <PiGithubLogoFill className="social-icon" />
                    </a>
                    <a href="https://devpost.com/aman-anwar18oct" target="_blank" rel="noopener noreferrer" aria-label="Devpost" onClick={() => posthog.capture('social link clicked', { platform: 'devpost' })}>
                        <SiDevpost className="social-icon" />
                    </a>
                    <a href="https://www.youtube.com/@amananwar7421" target="_blank" rel="noopener noreferrer" aria-label="YouTube" onClick={() => posthog.capture('social link clicked', { platform: 'youtube' })}>
                        <FaYoutube className="social-icon" />
                    </a>
                    <a href="https://x.com/Not_Columbus" target="_blank" rel="noopener noreferrer" aria-label="X" onClick={() => posthog.capture('social link clicked', { platform: 'x' })}>
                        <RiTwitterXLine className="social-icon" />
                    </a>
                    <a href="https://www.instagram.com/notorious.columbus/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" onClick={() => posthog.capture('social link clicked', { platform: 'instagram' })}>
                        <RiInstagramFill className="social-icon" />
                    </a>
                </div>
                <div className="flex items-center gap-2 self-start sm:ml-auto sm:gap-3 sm:self-auto">
                    <a href="https://ik.imagekit.io/sjuopypj1/aman%20resume%20(2).pdf" target="_blank" rel="noopener noreferrer" onClick={() => posthog.capture('resume downloaded')} className="inline-block transition-transform duration-100 ease-out active:scale-[0.97]"><span className="text-lg pt-2 atkinson-hyperlegible-next-regular text-[#fcecc9]">Resume</span></a>
                    <a href="https://ik.imagekit.io/sjuopypj1/amans_cv%20(1).pdf" target="_blank" rel="noopener noreferrer" onClick={() => posthog.capture('cv downloaded')} className="inline-block transition-transform duration-100 ease-out active:scale-[0.97]"><span className="text-lg pt-2 atkinson-hyperlegible-next-regular text-[#fcecc9]">CV</span></a>
                </div>
            </div>
        </div>
    )
}
export default Header
