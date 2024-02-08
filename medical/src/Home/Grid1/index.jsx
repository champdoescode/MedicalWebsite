import React from 'react'

const Grid1 = () => {
    return (
        <div className="w-full flex justify-center">
            <div className="mt-32 w-9/12 flex flex-col">
                <div className="text-indigo-900 text-3xl">Why Choose Our Clinic</div>
                <div className="text-gray-500 mt-4 text-sm">Here are few reasons why our clinic is the area's healthcare provider of choice:</div>
                <div>
                    <div className="my-8 grid grid-cols-2 gap-20 sm:grid-cols-3 md:grid-cols-3 xl:grid-cols-3 xl:grid-cols-3">
                        <div className="flex flex-col w-full aspect-auto bg-white mt-6 hover:cursor-pointer">
                            <div>
                                <img className="h-16" src="./images/doctors.svg" alt=""/>
                            </div>
                            <div>
                                <div className="text-xl text-sky-400 mt-4">Professional Doctors</div>
                                <div className="text-sm text-gray-500 mt-4">Our team consist of highly skilled and experienced medical professionals</div>
                            </div>
                        </div>
                        <div className="flex flex-col w-full aspect-auto bg-white mt-6 hover:cursor-pointer">
                            <div>
                                <img className="h-16" src="./images/familyy.svg" alt=""/>
                            </div>
                            <div>
                                <div className="text-xl text-sky-400 mt-4">Family Medicine</div>
                                <div className="text-sm text-gray-500 mt-4">We provide comprehensive healthcare services for individuals and families.</div>
                            </div>
                        </div>
                        <div className="flex flex-col w-full aspect-auto bg-white mt-6 hover:cursor-pointer">
                            <div>
                                <img className="h-16" src="./images/time.svg" alt=""/>
                            </div>
                            <div>
                                <div className="text-xl text-sky-400 mt-4">24/7 Patient Support</div>
                                <div className="text-sm text-gray-500 mt-4">Our dedicated team is available round the clock to assist our patients.</div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Grid1
