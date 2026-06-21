import React from 'react'
import Stories from './Stories'

const InstagramCard = () => {
    return (
        <div className="w-full min-h-screen flex justify-center items-center gap-4">
            <Stories />
            <Stories />
            <Stories />
            <Stories />
            <Stories />
            <Stories />
        </div>
    )
}

export default InstagramCard