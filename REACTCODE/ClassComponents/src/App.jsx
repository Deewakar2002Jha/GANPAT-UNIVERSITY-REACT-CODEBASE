import React from 'react'
import Button from './Components/Button'
import Studentscard from './Components/Studentscard'
import InstagramCard from './Components/InstagramCard'
import NetflixSeries from './Components/NetflixCard'
import StudentIDCard from "./Components/Mayuri/StudentIDCard";

const App = () => {
  return (
    <>
      {/* <Button text="Buy Now" /> */}
      {/* <Button text="Add to Cart" /> */}


      {/* <Button /> */}
      <Studentscard name="mohit" rollno="21" degree="bca" />
      {/* <InstagramCard /> */}
      {/* <NetflixSeries /> */}
       <StudentIDCard />

    </>
  )
}

export default App