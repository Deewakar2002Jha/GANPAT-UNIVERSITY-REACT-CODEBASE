import React from 'react'


export const Button = ({ text }) => {
    return (
        <div className="flex items-center justify-center gap-4 mt-5">
            <button className="px-6 py-3 bg-green-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
                {text}
            </button>

        </div>
    )
}
export const Button1 = ({ text }) => {
    return (
        <div className="flex items-center justify-center gap-4 mt-5">
            <button className="px-6 py-3 bg-amber-300 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
                {text}
            </button>

        </div>
    )
}

export const Button2 = ({ text }) => {
    return (
        <div className="flex items-center justify-center gap-4 mt-5">
            <button className="px-6 py-3 bg-red-500 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
                {text}
            </button>

        </div>
    )
}







