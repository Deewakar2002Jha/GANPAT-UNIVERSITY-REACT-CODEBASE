import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import ProfilePhoto from './Profilephoto';
import StudentDetails from './Studentdetails';
import Barcode from './Barcode';

const StudentIDCard = () => {
  const studentData = {
    firstName: "MODI MITIKA",
    lastName: "VIMALKUMAR",
    rollNo1: "24032211191",
    rollNo2: "T24032211046",
    college: "AMPICS",
    course: "BCA(Hons.)",
    bloodGroup: "O +",
    mobile: "9574064188",
    validity: "10/05/2028",
    photoUrl: "https://via.placeholder.com/125x145"
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="w-[360px] h-[540px] bg-white border-[6px] border-gray-200 rounded-[24px] shadow-2xl relative overflow-hidden flex flex-col justify-between p-3 font-sans select-none">
        <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-12 h-2.5 border border-gray-300 rounded-full bg-gray-50"></div>
        <div className="flex h-full w-full border border-gray-100 rounded-[14px] overflow-hidden relative">
          
          <Sidebar label="STUDENT" />

          <div className="w-[82%] bg-white flex flex-col pt-3 px-3 pb-2 justify-between">
            <Header />
            
            <ProfilePhoto src={studentData.photoUrl} />
            
            <div className="text-center flex flex-col gap-0.5">
              <h2 className="text-[#9e1b22] font-bold text-base leading-tight tracking-wide uppercase">{studentData.firstName}</h2>
              <h2 className="text-[#9e1b22] font-bold text-base leading-tight tracking-wide uppercase">{studentData.lastName}</h2>
              <p className="text-gray-800 font-semibold text-[13px] mt-1">{studentData.rollNo1}</p>
              <p className="text-gray-800 font-semibold text-[13px]">{studentData.rollNo2}</p>
            </div>

            <StudentDetails data={studentData} />
            
            <Barcode />
          </div>

        </div>
      </div>
    </div>
  );
};

export default StudentIDCard;