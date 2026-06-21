import React from 'react'

const Button = () => {
    return (
        <div className="flex items-center justify-center gap-4 mt-5">
            <button className="px-6 py-3 bg-green-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
                Click Me
            </button>
        </div>
    )
}

export default Button