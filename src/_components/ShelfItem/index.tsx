type ShelfItem = {
    image: string
    name: string
    code: string
    price: string
}


const ShelfItem = ({
    image,
    name,
    code,
    price,

}: ShelfItem) => {
    return (
        <div className="max-w-72 w-full group">
            <div className="w-full relative">
                <div className="w-72 h-72">
                    {image}
                </div>
                <button className="bg-[#08D15F] px-3 h-10 rounded-full font-medium text-white absolute bottom-2 left-2/4 -translate-x-2/4 invisible group-hover:visible transition duration-200">View Details</button>
            </div>
            <div className="text-center group group-hover:bg-[#2F1AC4] transition duration-200 py-3">
                <h4 className="font-bold text-lg mb-3 text-pink transition duration-200 group-hover:text-white">
                    {name}
                </h4>
                <p className="mb-1 text-navy-blue transition duration-200 group-hover:text-white">
                    {code}
                </p>
                <p className="text-navy-blue transition duration-200 group-hover:text-white">
                    {price}
                </p>
            </div>
        </div>
    )
}

export default ShelfItem