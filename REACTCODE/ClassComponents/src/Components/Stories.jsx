import React from 'react'

const Stories = () => {
    return (
        <div className="flex flex-col items-center gap-2">
            <div className="p-1 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600">
                <img
                    src="https://plus.unsplash.com/premium_photo-1682089877310-b2308b0dc719?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                    className="w-16 h-16 rounded-full object-cover border-2 border-white"
                />
            </div>
            <p className="text-xs">Rahul</p>
        </div>
    )
}

export default Stories