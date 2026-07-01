import React from 'react';

 

const Header = () => {
    return (
        <div className="w-full flex justify-center items-center p-2">
           
            <img 
                src="/guni.jpeg"
                alt="Ganpat University Header" 
                className="w-[100%] h-auto object-contain max-h-[130px]" 
            />
        </div>
    );
};

export default Header;