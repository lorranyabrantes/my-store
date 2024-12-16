'use client';

import { Mail, Phone, ShoppingBag } from "lucide-react"

type ContactItemProps = {
    href: string;
    icon: React.ReactNode;
    children: React.ReactNode;
}

const ContactItem = ({ href, icon, children }: ContactItemProps) => (
    <li>
        <a href={href} className="flex items-center gap-3 font-semibold hover:underline">
            {icon}
            {children}
        </a>
    </li>
);

const TopBar = () => {
    return (
        <div className="w-full h-11 bg-purple flex items-center">
            <nav className="container-base flex justify-between text-white text-sm">
                <ul className="flex items-center gap-12">
                    <ContactItem href="mailto:email@email.com" icon={<Mail className="icon-base" />}>
                        email@email.com
                    </ContactItem>
                    <ContactItem href="tel:+5511912345678" icon={<Phone className="icon-base" />}>
                        +55 11 9 1234-5678
                    </ContactItem>
                </ul>

                <button onClick={() => console.log('bag button')}>
                    <ShoppingBag className="icon-base" />
                </button>
            </nav>
        </div>
    )
}

export default TopBar;