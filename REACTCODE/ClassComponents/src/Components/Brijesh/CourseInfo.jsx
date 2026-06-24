function CourseInfo(props) {
  return (
    <div className="mt-1">
      <p className="text-sm"><span className="font-semibold">Course :</span>{" "}{props.course}</p>
    </div>
  );
}

export default CourseInfo;