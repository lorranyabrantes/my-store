import Link from "next/link"

type ShelfItem = {
    image: React.ReactNode
    name: string
    code: number
    price: number
}


const ShelfItem = ({
    image,
    name,
    code,
    price,

}: ShelfItem) => {
    return (
        <div className="max-w-72 w-full group shadow-lg">
            <div className="w-full relative">
                <div className="w-72 h-72 bg-[#F6F7FB] flex justify-center items-center">
                    {image}
                </div>
                <Link href={`/products/${code}`} className="bg-[#08D15F] px-3 h-10 rounded-full font-medium text-white absolute bottom-2 left-2/4 -translate-x-2/4 invisible group-hover:visible transition duration-200 flex items-center">View Details</Link>
            </div>
            <div className="text-center group group-hover:bg-[#2F1AC4] transition duration-200 p-4">
                <h4 className="font-bold text-lg mb-3 text-pink transition duration-200 group-hover:text-white truncate"
                    title={name}>
                    {name}
                </h4>
                <p className="mb-1 text-navy-blue transition duration-200 group-hover:text-white">
                    Code: {code}
                </p>
                <p className="text-navy-blue transition duration-200 group-hover:text-white">
                    {price}
                </p>
            </div>
        </div>
    )
}

export default ShelfItem