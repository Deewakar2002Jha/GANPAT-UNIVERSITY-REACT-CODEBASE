import React from 'react'

import Button from './Components/Button'
import Studentscard from './Components/Studentscard'
import InstagramCard from './Components/InstagramCard'
import NetflixSeries from './Components/NetflixCard'
import StudentIDCard from "./Components/Mayuri/StudentIDCard";

import { Button, Button1, Button2 } from './Components/Button'





const App = () => {
  return (
    <>
      <Button text="Add to Cart" />
      <Button1 text="Buy Now" />
      <Button2 text="Subscribe" />




      {/* <Button /> */}
      <Studentscard name="mohit" rollno="21" degree="bca" />
      {/* <InstagramCard /> */}
      {/* <NetflixSeries /> */}
       <StudentIDCard />



    </>
  )
}

export default App