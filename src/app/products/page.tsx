import ShelfItem from "@/_components/ShelfItem";
import TopCategory from "@/_components/TopCategory";
import Image from "next/image";

export const metadata = {
    title: 'Products - Stream',
    description: 'Products list.',
};

type Product = {
    id: number;
    title: string;
    description: string;
    price: number;
    image: string;
};

async function getProducts(): Promise<Product[]> {
    const res = await fetch('https://fakestoreapi.com/products');
    if (!res.ok) throw new Error('Error search products.');
    return res.json();
}

const ProductsPage = async () => {
    const products = await getProducts();

    return (
        <>
            <TopCategory title="All Products" />
            <div className="container-base py-20">
                <ul className="flex flex-wrap gap-8">
                    {products.map((product) => (
                        <li key={product.id}>
                            <ShelfItem
                                image={<Image src={product.image} width={288} height={288} className="w-auto h-auto max-h-[80%] max-w-[80%]" alt={product.title} />}
                                name={product.title}
                                price={product.price}
                                code={product.id}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default ProductsPage