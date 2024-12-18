'use client';

import Breadcrumb from "../Breadcrumb";

type TopCategoryProps = {
    title: string
}

const TopCategory = ({ title }: TopCategoryProps) => {
    return (
        <div className="w-full h-72 bg-light-purple flex items-center">
            <div className="container-base">
                <h2 className="font-bold text-navy-blue text-4xl mb-2">{title}</h2>
                <Breadcrumb />
            </div>
        </div>
    )
}

export default TopCategory;