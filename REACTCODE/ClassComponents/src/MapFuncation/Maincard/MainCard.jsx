import React from 'react'
import logo from '../../assets/Mayuri/logo.png'
import photo from '../../assets/Mayuri/profile.jpg'

const MainCard = ({
    name,
    enrollment,
    college,
    course,
    bloodGroup,
    mobile,
    hostel
}) => {
    return (
        <>
            <div className="flex justify-center mt-10 mb-10">
                <div className="flex bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-300">

                    <div className="bg-blue-700 w-16 flex items-center justify-center">
                        <h1
                            className="text-white font-bold text-2xl tracking-widest"
                            style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
                        >
                            STUDENT
                        </h1>
                    </div>

                    <div className="w-80 p-4">

                        <div className="flex justify-center mb-2">
                            <img
                                src={logo}
                                alt="Ganpat University"
                                className="w-24 object-contain"
                            />
                        </div>

                        <h2 className="text-center font-bold mb-2">
                            GANPAT UNIVERSITY
                        </h2>

                        <div className="flex justify-center ">
                            <img
                                src={photo}
                                alt="Mayuri Kumari"
                                className="w-28 h-32 border-2 border-red-500 object-cover rounded"
                            />
                        </div>

                        <div className="text-center mt-2">
                            <h2 className="text-sm font-bold text-red-600 uppercase">
                                {name}
                            </h2>
                        </div>

                        <div className="text-center mt-1">
                            <p className="font-semibold text-sm">
                                Enrollment No: {enrollment}
                            </p>
                        </div>

                        <div className="text-center mt-1">
                            <p className="text-sm font-medium">
                                {college}
                            </p>
                        </div>

                        <div className="text-center mt-1">
                            <p className="text-sm">
                                {course}
                            </p>
                        </div>

                        <div className="text-center mt-1">
                            <p className="text-sm">
                                Blood Group: {bloodGroup}
                            </p>
                        </div>

                        <div className="text-center mt-1">
                            <p className="text-sm">
                                Mobile: {mobile}
                            </p>
                        </div>

                        <div className="text-center mt-1">
                            <p className="text-sm">
                                Hostel: {hostel}
                            </p>
                        </div>

                        <div className="mt-3 border-t pt-2">
                            <div className="h-10 bg-gray-300 rounded"></div>
                            <p className="text-center text-xs mt-1">
                                Barcode
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default MainCard