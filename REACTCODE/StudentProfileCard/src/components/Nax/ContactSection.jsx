function ContactSection({ mobile, bloodGroup }) {
  return (
    <div className="mb-5 text-[15px]  mt-1">

      <div className="flex mb-2">
        <span className="font-bold w-28 pl-2">Mobile</span>
        <span className="font-bold mr-2">:</span>
        <span className="font-bold">{mobile}</span>
      </div>

      <div className="flex mb-8">
        <span className="font-bold w-28">
          Blood Grp.
        </span>

        <span className="font-bold mr-2">:</span>

        <span>{bloodGroup}</span>
        
      </div>
      
      <div className="flex ">
        <span className="font-bold text-center w-full">
          VIRTUOUS ( )
        </span>

      </div>

    </div>
  );
}

export default ContactSection;