'use client';

import { SearchIcon } from "lucide-react";

const Search = () => {
    return (
        <div className="relative w-56 h-8">
            <SearchIcon className="icon-base text-pink absolute top-2/4 -translate-y-2/4 left-3" />
            <input type="search" placeholder="Search something here!" className="h-full border border-pantone-purple rounded-full pr-3 pl-10 w-full" />
        </div>
    )
}

export default Search