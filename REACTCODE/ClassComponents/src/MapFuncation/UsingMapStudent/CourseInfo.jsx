import React from 'react'

const CourseInfo = () => {
    return (
        <div className="text-center mt-1">
            <p className="text-sm">
                {props.course}
            </p>
        </div>
    )
}

export default CourseInfo