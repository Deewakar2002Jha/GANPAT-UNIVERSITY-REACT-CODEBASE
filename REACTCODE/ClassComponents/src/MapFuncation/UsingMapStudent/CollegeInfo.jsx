import React from 'react'

const CollegeInfo = () => {
    return (
        <div className="text-center mt-1">
            <p className="text-sm font-medium">
                {props.college}
            </p>
        </div>
    )
}

export default CollegeInfo