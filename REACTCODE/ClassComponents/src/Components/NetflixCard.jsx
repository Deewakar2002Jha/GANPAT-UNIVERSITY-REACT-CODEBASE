import React from 'react'
import seriesdata from '../Api/Seriesdata.json'
import SeriesCard from './SeriesCard'

const NetflixSeries = () => {
    return (
        <ul className='p-5 flex flex-wrap gap-6 justify-center'>
            {seriesdata.map((currElem) => {
                return < SeriesCard key={currElem.id} data={currElem} />
            })}
        </ul>
    )
}

export default NetflixSeries