import React from 'react';

const StudentDetails = ({ data }) => {
  return (
    <div className="text-[12px] font-medium text-gray-900 px-1 flex flex-col gap-1 mt-1">
      <div className="flex">
        <span className="w-20 font-bold">College</span>
        <span className="mr-2">:</span>
        <span className="font-semibold">{data.college}</span>
      </div>
      <div className="flex">
        <span className="w-20 font-bold">{data.course}</span>
      </div>
      <div className="flex">
        <span className="w-20 font-bold">B.Group</span>
        <span className="mr-2">:</span>
        <span className="font-semibold">{data.bloodGroup}</span>
      </div>
      <div className="flex">
        <span className="w-20 font-bold">Mobile</span>
        <span className="mr-2">:</span>
        <span className="font-semibold">{data.mobile}</span>
      </div>
      <div className="flex">
        <span className="w-20 font-bold">Validity</span>
        <span className="mr-2">:</span>
        <span className="font-semibold">{data.validity}</span>
      </div>
    </div>
  );
};

export default StudentDetails;