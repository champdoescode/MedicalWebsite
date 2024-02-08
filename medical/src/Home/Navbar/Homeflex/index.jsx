import React from 'react'

const Homeflex = () => {
    return (
        <div className="w-full flex justify-center bg-sky-100">
            <div className="w-9/12 flex items-center justify-between">
                <div>
                    <div className="text-4xl text-indigo-900">Quality Medical</div>
                    <div className="text-4xl text-indigo-900">Treatment</div>
                    <div className="mt-4 text-2xl text-sky-400">For you and your Family</div>
                    <div className="mt-8 flex items-center">
                        <div className="">
                            <img className="p-[1px] border-2 rounded-full border-orange-300" src="./images/play-button.png" alt="Play"/>
                        </div>
                        <div className="ml-2">watch our Video</div>
                    </div>
                </div>
                <div className="-ml-10">
                    <img className="pt-16 w-96" src="./images/family.png" alt="Family"/>
                </div>
                <div>
                    <form className="-mb-48 w-96 shadow-lg rounded-lg bg-white flex flex-col justify-center items-center" action="appointment">
                        <div className="w-full bg-indigo-900 flex items-center justify-center rounded-t-lg">
                            <div className="text-2xl rounded-t-lg bg-indigo-900 text-white px-8 py-4 ">Make an appointment</div>
                        </div>
                        <div className="p-8">
                            <div className="text-gray-500">Enter Your Contact Information To book an Appointment</div>
                            <div className="w-min">
                                    <input className="w-72 my-2 bg-gray-200 rounded  text-sm border p-2 placeholder-[#666666]" type="text" placeholder="YOUR NAME"/>
                                    <input className="w-72 my-2 bg-gray-200  text-sm border p-2 placeholder-[#666666]" type="text" placeholder="YOUR EMAIL ADDRESS"/>
                                    <input className="w-72 my-2 bg-gray-200  text-sm border p-2 placeholder-[#666666]" type="text" placeholder="PHONE NUMBER"/>
                            </div>
                            <div>
                                <button className="bg-sky-400 text-white rounded px-8 py-2">Book now</button>
                            </div>
                            <div className="text-gray-500 mt-4">Hurry up We have only few numbers to full
                            </div>
                        </div>
                    </form>
                </div>
                
            </div>
        </div>
    )
}

export default Homeflex
