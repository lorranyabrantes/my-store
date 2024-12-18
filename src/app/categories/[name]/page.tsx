import ShelfItem from "@/_components/ShelfItem";
import TopCategory from "@/_components/TopCategory";
import Image from "next/image";

type Product = {
    id: number;
    title: string;
    description: string;
    price: number;
    image: string;
};

async function getProductsByCategory(category: string | string[] | undefined): Promise<Product[]> {
    if (!category) return [];
    const res = await fetch(`https://fakestoreapi.com/products/category/${category}`);
    if (!res.ok) throw new Error("Error to search category.");
    return res.json();
}

const CategoryPage = async ({ params }: { params: { name: string } }) => {
    const { name } = await params;

    const products = await getProductsByCategory(name);

    return <>
        <TopCategory title="All Categories" />
        <div className="container-base py-20">
            <ul className="flex flex-wrap gap-8">
                {products.map((product) => (
                    <li key={product.id}>
                        <ShelfItem
                            image={
                                <Image
                                    src={product.image}
                                    width={288}
                                    height={288}
                                    className="w-auto h-auto max-h-[80%] max-w-[80%]"
                                    alt={product.title}
                                />
                            }
                            name={product.title}
                            price={product.price}
                            code={product.id}
                        />
                    </li>
                ))}
            </ul>
        </div>
    </>
};

export default CategoryPage;