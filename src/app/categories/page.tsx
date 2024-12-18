import TopCategory from "@/_components/TopCategory";
import Link from "next/link";

export const metadata = {
    title: 'Categories - Stream',
    description: 'Categories list.',
};


async function getCategories(): Promise<string[]> {
    const res = await fetch('https://fakestoreapi.com/products/categories');
    if (!res.ok) throw new Error('Error to search categories.');
    return res.json();
}

const CategoriesPage = async () => {
    const categories = await getCategories();

    return (
        <>
            <TopCategory title="All Categories" />
            <div className="container-base py-20">
                <ul className="flex flex-wrap gap-8">
                    {categories.map((category) => (
                        <li><Link href={`/category/${category}`} className="capitalize">{category}</Link></li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default CategoriesPage