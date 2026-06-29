function EnrollmentSection({ enrollmentNo, tempEnrollment }) {
  return (
    <div className="text-center mb-5">

      <h3 className="text-[18px] font-bold">
        {enrollmentNo}
      </h3>

      <p className="text-[16px] font-semibold mt-1">
        {tempEnrollment}
      </p>

    </div>
  );
}

export default EnrollmentSection;