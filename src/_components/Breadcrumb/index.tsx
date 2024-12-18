import { generateBreadcrumb } from "@/_utils/generateBreadcrumb";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment } from "react";

const Separator = ({ char = "." }: { char?: string }) => (
    <li className="px-2 text-black">{char}</li>
);

const Breadcrumb = () => {
    const path = usePathname();
    const breadcrumb = generateBreadcrumb(path);

    const getLinkClass = (isActive: boolean) =>
        `capitalize hover:underline ${isActive ? "text-pink" : "text-black"}`;

    return (
        <nav aria-label="Breadcrumb">
            <ul className="flex items-center gap-1 text-sm">
                <li>
                    <Link href="/" className={getLinkClass(!breadcrumb.length)}>
                        Home
                    </Link>
                </li>

                {!!breadcrumb.length && <Separator />}

                {breadcrumb.map((item, index) => {
                    const isLastItem = breadcrumb.length === index + 1;

                    return (
                        <Fragment key={item.segment}>
                            <li>
                                <Link href={item.href} className={getLinkClass(isLastItem)}>
                                    {item.segment}
                                </Link>
                            </li>
                            {!isLastItem && <Separator />}
                        </Fragment>
                    );
                })}
            </ul>
        </nav>
    );
};

export default Breadcrumb;