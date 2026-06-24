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
            className='  p-0 w-72 shadow-2xl '
        >
            <div>
                <img
                    src={img_url}
                    alt={name}
                    className='w-full h-48 object-cover '
                />
            </div>

            <h2 className='font-bold text-lg mt-2 p-2 ml-2'>
                {name}
            </h2>

            <h3>⭐ {rating}</h3>

            <p className='text-sm mt-1 ml-2'>
                {description}
            </p>

            <p className='mt-1 ml-2'>
                <strong>Genre:</strong> {genre.join(", ")}
            </p>

            <p className='mt-1 ml-2'>
                <strong>Cast:</strong> {cast.join(", ")}
            </p>

            <a
                href={watch_url}
                target="_blank"
                rel="noopener noreferrer"
            >
                <button className='mt-3 bg-black text-white px-4 py-2  hover:bg-gray-800 mb-4 ml-4'>
                    Watch Now
                </button>
            </a>
        </li>
    )
}

export default SeriesCard