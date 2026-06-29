function NameSection({ studentName }) {
  return (
    <div className="text-center mb-4">
      <h2 className="text-red-700 font-bold text-[18px] uppercase tracking-wide">
        {studentName}
      </h2>
    </div>
  );
}

export default NameSection;