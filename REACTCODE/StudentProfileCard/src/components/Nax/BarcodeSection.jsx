function BarcodeSection({ enrollmentNo }) {
  return (
    <div className="">

      {/* Barcode */}

      <div className="flex justify-center items-end h-8 gap-[2px]">

        {[3,1,2,1,3,2,1,3,2,1,4,1,2,3,1,2,4,1,3,2,1,4,2,1,3,2,4,1,2,3,1,4,2,1].map(
          (bar, index) => (
            <div
              key={index}
              className={`bg-black ${
                bar === 1
                  ? "w-[2px] h-6"
                  : bar === 2
                  ? "w-[3px] h-4"
                  : bar === 3
                  ? "w-[2px] h-3"
                  : "w-[4px] h-6"
              }`}
            />
          )
        )}

      </div>

      <p className="text-center text-xs mt-2 tracking-[3px]">
        {enrollmentNo}
      </p>

    </div>
  );
}

export default BarcodeSection;