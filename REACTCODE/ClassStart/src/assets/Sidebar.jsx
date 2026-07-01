import React from 'react';

const Sidebar = ({ label }) => {
  return (
    <div className="w-[18%] bg-[#9e1b22] relative flex flex-col items-center justify-end pb-8">
      <div 
        className="text-white font-black tracking-[0.35em] text-2xl uppercase [writing-mode:vertical-lr] transform rotate-180"
        style={{ fontFamily: "'Arial Black', Gadget, sans-serif" }}
      >
        {label}
      </div>
    </div>
  );
};

export default Sidebar;