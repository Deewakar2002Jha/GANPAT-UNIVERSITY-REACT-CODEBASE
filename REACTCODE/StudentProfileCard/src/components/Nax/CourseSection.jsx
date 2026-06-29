function CourseSection({ college, course }) {
  return (
    <div  className=" mt-1">

      <div className="flex mb-2">
        <span className="font-bold w-28 pl-2 ">College</span>
        <span className="font-bold mr-2 ">:</span>
        <span className="font-bold  mr-2 pl-2 text-sm">{college}</span>
      </div>

      <div className="flex">
        <span className="w-1"></span>
        <span className="font-bold text-sm">{course}</span>
      </div>

    </div>
  );
}

export default CourseSection;