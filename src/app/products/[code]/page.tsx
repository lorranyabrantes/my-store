import ShelfItem from "@/_components/ShelfItem";
import TopCategory from "@/_components/TopCategory";
import Image from "next/image";

type Product = {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    image: string;
};

async function getProduct(code: string): Promise<Product> {
    const res = await fetch(`https://fakestoreapi.com/products/${code}`);
    if (!res.ok) throw new Error("Error to search category.");
    return res.json();
}

const ProductPage = async ({ params }: { params: { code: string } }) => {
    const { code } = await params
    const product = await getProduct(code);


    return <>
        <TopCategory title="Product Details" />
        <div className="container-base py-20">
            <div className="max-w-screen-lg shadow-lg p-5 flex gap-11 mx-auto">
                <div className="w-2/4 relative">
                    <Image
                        src={product.image}
                        width={288}
                        height={288}
                        className="w-full h-auto"
                        alt={product.title}
                    />
                    <span className="bg-pink text-white text-xs py-1 px-2 rounded-full absolute top-0 right-0">{product.category}</span>
                </div>

                <div className="mt-10">
                    <h3 className="font-semibold text-4xl mb-4">{product.title}</h3>

                    <p className="text-base mb-6">{product.price}</p>

                    <h4 className="text-lg font-semibold mb-2">Description</h4>
                    <p>{product.description}</p>
                </div>
            </div>

        </div>
    </>
};

export default ProductPage;