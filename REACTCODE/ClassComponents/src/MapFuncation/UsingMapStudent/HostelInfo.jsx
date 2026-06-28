import React from 'react'

const HostelInfo = () => {
    return (
        <div className="text-center mt-1">
            <p className="text-sm">
                Hostel: {props.hostel}
            </p>
        </div>
    )
}

export default HostelInfo