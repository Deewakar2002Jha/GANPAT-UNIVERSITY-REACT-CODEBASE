import React from 'react'

const Studentscard = () => {
    return (
        <div className="w-80 bg-white rounded-[10px] shadow-lg p-6 m-5">
            <div className="flex justify-center ">
                <img
                    src="https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Student"
                    className="w-32 h-32 rounded-full object-cover border-4 border-gray-500"
                />
            </div>

            <div className="mt-4 text-left">
                <h2 className="text-3xl font-bold text-gray-800">
                    John Doe
                </h2>

                <p className="mt-2 text-gray-600">
                    <span className="font-semibold">Roll No:</span> 101
                </p>

                <p className="text-gray-600">
                    <span className="font-semibold">Degree:</span> Bachelor of Computer Applications (BCA)
                </p>
            </div>
        </div>
    )
}

export default Studentscard