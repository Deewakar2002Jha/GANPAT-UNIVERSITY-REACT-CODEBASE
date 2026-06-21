import React from 'react'

const SeriesCard = (props) => {
    const { name
        , id
        , img_url
        , rating
        , description
        , cast
        , genre
        , watch_url } = props.data
    return (
        <li
            className='bg-red-400 rounded-xl p-4 w-72 shadow-lg'
        >
            <div>
                <img
                    src={img_url}
                    alt={name}
                    className='w-full h-48 object-cover rounded-lg'
                />
            </div>

            <h2 className='font-bold text-lg mt-2'>
                {name}
            </h2>

            <h3>⭐ {rating}</h3>

            <p className='text-sm mt-1'>
                {description}
            </p>

            <p className='mt-1'>
                <strong>Genre:</strong> {genre.join(", ")}
            </p>

            <p className='mt-1'>
                <strong>Cast:</strong> {cast.join(", ")}
            </p>

            <a
                href={watch_url}
                target="_blank"
                rel="noopener noreferrer"
            >
                <button className='mt-3 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800'>
                    Watch Now
                </button>
            </a>
        </li>
    )
}

export default SeriesCard