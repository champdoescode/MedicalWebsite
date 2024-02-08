import React from 'react'

const Footer = () => {
    return (
        <div className="w-full flex justify-center">
            <div className="mt-48 w-9/12 flex flex-col">
                
                
                    <div className="w-full flex items-center my-8 grid grid-cols-1 gap-20 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-2">
                        <div className="flex flex-col w-full aspect-auto bg-white mt-6 hover:cursor-pointer">
                            <div className="relative">
                                <img className="rounded" src="./images/report.avif" alt=""/>
                                <div className="absolute top-1/2 left-1/2">
                                    <img className="border-4 transform -translate-x-1/2 -translate-y-1/2 rounded-full border-indigo-900" src="./images/play-button2.png" alt="Play"/>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col w-full aspect-auto bg-white mt-6 hover:cursor-pointer">
                                <div className="text-3xl text-indigo-900 font-bold">Watch This Video</div>
                                <div>Find out more about our clinic videos</div>
                        </div>
                        
                        
                    
                </div>
            </div>
            
        </div>
        
    )
}

export default Footer
