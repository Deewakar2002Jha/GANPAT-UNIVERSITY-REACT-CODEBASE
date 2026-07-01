import React from 'react';

const ProfilePhoto = ({ src }) => {
  return (
    <div className="flex justify-center my-2">
      <div className="w-[125px] h-[145px] border-[3px] border-[#9e1b22] rounded-[12px] overflow-hidden shadow-sm">
        <img 
          src="/miti.jpeg"
          alt="Student Profile" 
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default ProfilePhoto;