function CourseInfo(props) {
  return (
    <div className="text-center mt-1">
      <p className="text-sm">
        {props.course}
      </p>
    </div>
  );
}

export default CourseInfo;