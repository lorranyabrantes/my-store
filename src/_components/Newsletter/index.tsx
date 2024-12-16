'use client';

const Newsletter = () => {
    return (
        <div className="relative h-10 max-w-80">
            <input type="text" placeholder="Enter your email address" className="h-full rounded-full pl-3 pr-20 w-full" />
            <button className="bg-pink text-white h-8 rounded-full absolute right-1 px-3 top-2/4 -translate-y-2/4">Sign up</button>
        </div>
    )
}

export default Newsletter