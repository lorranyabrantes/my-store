import Link from "next/link"
import Search from "../Search"

type NavItemProps = {
    href: string;
    children: React.ReactNode;
}

const NavItem = ({ href, children }: NavItemProps) => (
    <li>
        <Link href={href} className="hover:text-pink">
            {children}
        </Link>
    </li>
);

const Header = () => {
    return (
        <header className="container-base h-20 flex justify-between items-center">
            <h1 className="font-bold text-navy-blue text-4xl">Stream</h1>
            <nav>
                <ul className="flex gap-10">
                    <NavItem href="/">Home</NavItem>
                    <NavItem href="/categories">Categories</NavItem>
                    <NavItem href="/products">Products</NavItem>
                </ul>
            </nav>
            <Search />
        </header>
    )
}

export default Header;