'use client';

import { Facebook, Instagram, Twitter } from "lucide-react";

type SocialLinkProps = {
    href: string;
    icon: React.ReactNode;
};

const SocialLink = ({ href, icon }: SocialLinkProps) => (
    <li>
        <a
            href={href}
            className="w-6 h-6 bg-navy-blue rounded-full flex justify-center items-center"
            target="_blank"
            rel="noopener noreferrer"
        >
            {icon}
        </a>
    </li>
);

const BottomBar = () => {
    return (
        <div className="bg-off-purple">
            <div className="container-base max-w-screen-lg flex justify-between items-center h-12">
                <p className="text-white">© Webecy - All Rights Reserved</p>
                <nav>
                    <ul className="flex gap-4">
                        <SocialLink href="https://facebook.com" icon={<Facebook className="icon-base" />} />
                        <SocialLink href="https://twitter.com" icon={<Twitter className="icon-base" />} />
                        <SocialLink href="https://instagram.com" icon={<Instagram className="icon-base" />} />
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default BottomBar;