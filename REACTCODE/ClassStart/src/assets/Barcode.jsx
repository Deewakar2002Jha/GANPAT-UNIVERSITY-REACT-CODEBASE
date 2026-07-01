import React from 'react';

const Barcode = () => {
  // Mock array random thicknesses ke liye taaki exact barcode pattern dikhe
  const barcodePattern = [1,3,1,2,4,1,3,2,1,4,2,1,3,1,2,4,1,2,3,1,4,2,1,3,1,2];

  return (
    <div className="w-full flex flex-col items-center mt-2 pt-1 border-t border-gray-100">
      <div className="flex items-end h-7 w-[95%] justify-between px-1 bg-white">
        {barcodePattern.map((weight, idx) => (
          <div 
            key={idx} 
            className="bg-black h-full" 
            style={{ width: `${weight}px` }}
          />
        ))}
      </div>
    </div>
  );
};

export default Barcode;