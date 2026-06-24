import React from 'react'
import { Button, Button1, Button2 } from './Components/Button'
// import { Button } from './Components/Button'
import Studentscard from './Components/Studentscard'
// import InstagramCard from './Components/InstagramCard'
// import NetflixSeries from './Components/NetflixCard'

const App = () => {
  return (
    <>
      <Button text="Add to Cart" />
      <Button2 text="Buy Now" />
      <Button1 text="Subscribe" />

      {/* <Button text=" Add to Cart" className="bg-green-500" />
      <Button text="Buy Now" className="bg-amber-500" />
      <Button text="Subscribe" className="bg-red-500" /> */}


      {/* <Button /> */}
      <Studentscard name="mohit" rollno="21" degree="bca" />
      {/* <InstagramCard /> */}
      {/* <NetflixSeries /> */}

    </>
  )
}

export default App