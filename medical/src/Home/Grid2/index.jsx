import React from 'react'

const Grid2 = () => {
    return (
        <div className="w-full bg-orange-100 flex justify-center">
            <div className="mt-32 w-9/12 flex flex-col items-center">
                <div className="text-indigo-900 text-3xl font-bold">Our Services</div>
                <div className="text-gray-500 mt-4">We offer complete healthcare to individuals with various health concerns</div>
                <div>
                    <div className="-mb-16 grid grid-cols-2 gap-20 sm:grid-cols-3 md:grid-cols-3 xl:grid-cols-3 xl:grid-cols-4">
                        <div className="flex flex-col shadow-lg w-full rounded aspect-auto bg-white mt-6 hover:cursor-pointer">
                            <div>
                                <img className="w-full h-40 rounded-t " src="./images/heart.jpeg" alt=""/>
                            </div>
                            <div className="p-4">
                                <div className="text-xl text-sky-400 mt-4">HeartCare Programs</div>
                                <div className="text-sm text-gray-500 mt-4">Comprehensive heart care programs tailored to individual needs.</div>
                            </div>
                        </div>
                        <div className="flex flex-col shadow-lg w-full rounded aspect-auto bg-white mt-6 hover:cursor-pointer">
                            <div>
                                <img className="w-full h-40 rounded-t" src="./images/family2.avif" alt=""/>
                            </div>
                            <div className="bg-orange-300 p-4">
                                <div className="text-xl text-white mt-4">Pregnancy & Child Birth</div>
                                <div className="text-sm text-white mt-4">Expert care and support for expectant mothers and newborns.</div>
                            </div>
                        </div>
                        <div className="flex flex-col shadow-lg w-full rounded aspect-auto bg-white mt-6 hover:cursor-pointer">
                            <div>
                                <img className="w-full h-40 rounded-t" src="./images/lab.jpeg" alt=""/>
                            </div>
                            <div className="p-4">
                                <div className="text-xl text-sky-400 mt-4">Laboratory Analysis</div>
                                <div className="text-sm text-gray-500 mt-4">State-of-the-art laboratory services for accurate diagnosis.</div>
                            </div>
                        </div>
                        <div className="flex flex-col shadow-lg w-full rounded aspect-auto bg-white mt-6 hover:cursor-pointer">
                            <div>
                                <img className="w-full h-40 rounded-t" src="./images/imaging.jpeg" alt=""/>
                            </div>
                            <div className="p-4 bg-indigo-900">
                                <div className="text-xl text-white mt-4">Imaging & Diagnostics</div>
                                <div className="text-sm text-white mt-4">Advanced imaging and diagnostic technologies for precise evaluation.</div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Grid2
