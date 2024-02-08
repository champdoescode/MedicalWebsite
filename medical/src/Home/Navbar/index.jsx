import React from 'react'

const Navbar = () => {
    return (
        <div>
            <div className="w-full shadow-lg flex justify-center">
                <nav className="w-9/12 flex justify-between items-center p-4">
                    <div className="flex items-center font-black text-3xl">
                        <div>
                            <span className="text-orange-300">M</span><span className="text-indigo-900">edical</span>
                        </div>
                        <div className="ml-16 flex">
                            <a className="mx-4 font-bold text-lg hover:text-sky-400" href="#">About</a>
                            <a className="mx-4 font-bold text-lg hover:text-sky-400" href="#">Services</a>
                            <a className="mx-4 font-bold text-lg hover:text-sky-400" href="#">Contact</a>
                            <a className="mx-4 font-bold text-lg hover:text-sky-400" href="#">Location</a>
                        </div>
                    </div>
                    <div className="">
                        <div class="">
                            <div className="text-sky-400">M- +914554554455</div>
                        </div>
                        <div className="text-gray-600">199,Jaipur,Rajasthan,Inida</div>
                    </div>
                    
                </nav>
            </div>
        </div>
    )
}

export default Navbar
