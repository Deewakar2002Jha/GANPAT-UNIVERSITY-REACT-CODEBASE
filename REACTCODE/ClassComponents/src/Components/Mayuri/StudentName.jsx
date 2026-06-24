function StudentName(props) {
  return (
    <div className="text-center mt-2">
      <h2 className="text-sm font-bold text-red-600 uppercase">
        {props.name}
      </h2>
    </div>
  );
}

export default StudentName;