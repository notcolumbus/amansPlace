import type { ReactNode } from 'react';

interface JobCardProps {
    company: string;
    position: string;
    duration: string;
    logo?: ReactNode;
    logoSrc?: string;
}

function JobCard({ company, position, duration, logo, logoSrc }: JobCardProps) {
    return (
        <div className="flex p-2 items-center min-w-0 atkinson-hyperlegible-next-regular h-30" style={{backgroundColor:"#fcecc9"}}>
            {logo && <div className="pr-2">{logo}</div>}
            {logoSrc && <img className="w-16 h-16 object-contain" src={logoSrc} alt={`${company} logo`} />}
            
            <div className="p-2 flex flex-col justify-center w-max">
                <h2 className="text-m text-left">{company}</h2>
                <h3 className="atkinson-hyperlegible-next-regular text-left">{position}</h3>
                <h4 className="text-black/70 atkinson-hyperlegible-next-regular text-left">{duration}</h4>
            </div>
        </div>
    );
}

export default JobCard;
