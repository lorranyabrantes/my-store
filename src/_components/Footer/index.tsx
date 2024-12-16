'use client';

import Link from "next/link";
import Newsletter from "../Newsletter";

type NavSectionProps = {
    title: string;
    links: { href: string; label: string }[];
};

const NavSection = ({ title, links }: NavSectionProps) => (
    <div>
        <h3 className="mb-10 text-2xl font-semibold">{title}</h3>
        <ul className="flex flex-col gap-5">
            {links.map((link, index) => (
                <li key={index}>
                    <Link href={link.href} className="text-base hover:underline">
                        {link.label}
                    </Link>
                </li>
            ))}
        </ul>
    </div>
);

const Footer = () => {
    return (
        <footer className="bg-pantone-purple">
            <div className="container-base flex justify-between py-24">
                <div>
                    <h2 className="mb-8 text-4xl font-bold text-navy-blue">Stream</h2>
                    <Newsletter />
                    <p className="mt-6 text-base">Contact Info</p>
                    <p className="text-base">17 Princess Road, London, Greater London NW1 8JR, UK</p>
                </div>
                <nav className="flex gap-20">
                    <NavSection
                        title="Categories"
                        links={[
                            { href: "#", label: "Laptops & Computers" },
                            { href: "#", label: "Cameras & Photography" },
                            { href: "#", label: "Smart Phones & Tablets" },
                            { href: "#", label: "Video Games & Consoles" },
                            { href: "#", label: "Waterproof Headphones" },
                        ]}
                    />
                    <NavSection
                        title="Customer Care"
                        links={[
                            { href: "#", label: "My Account" },
                            { href: "#", label: "Discount" },
                            { href: "#", label: "Returns" },
                            { href: "#", label: "Orders History" },
                            { href: "#", label: "Order Tracking" },
                        ]}
                    />
                    <NavSection
                        title="Pages"
                        links={[
                            { href: "#", label: "Blog" },
                            { href: "#", label: "Browse the Shop" },
                            { href: "#", label: "Category" },
                            { href: "#", label: "Pre-Built Pages" },
                            { href: "#", label: "Visual Composer Elements" },
                            { href: "#", label: "WooCommerce Pages" },
                        ]}
                    />
                </nav>
            </div>
        </footer>
    );
};

export default Footer;