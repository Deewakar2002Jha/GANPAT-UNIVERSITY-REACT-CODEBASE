import React from 'react'
import '../css/Student.css'

const Student = ({ category, logo, studentPhoto, studentName, EnrollNo, TEnrollNo, college, bGroup, mobile, validity, barcode }) => {
  return (
    <div className="student-card">
      <div className="student-txt">
        <p>{category}</p>
      </div>
      <div className="student-info">
        <div className="logo">
          <img src={logo} alt="university-logo" />
        </div>
        <div className="student-photo">
          <img src={studentPhoto} alt="student-photo" />
        </div>
        <div className="student-name-no">
          <p className='student-name'>{studentName}</p>
          <div className='student-eno'>
            <p>{EnrollNo}</p>
            <p>{TEnrollNo}</p>
          </div>
        </div>
        <div className="student-details">
          <div className='college'>
            <p>College</p>
            <p>: {college}</p>
          </div>
          <div className='b-group'>
            <p>B.Group</p>
            <p>: {bGroup}</p>
          </div>
          <div className='mobile'>
            <p>Mobile</p>
            <p>: {mobile}</p>
          </div>
          <div className='validity'>
            <p>Validity</p>
            <p>: {validity}</p>
          </div>
        </div>
        <div className="barcode">
          <img src={barcode} alt="barcode" />
        </div>
      </div>
    </div>
  )
}

export default Student
