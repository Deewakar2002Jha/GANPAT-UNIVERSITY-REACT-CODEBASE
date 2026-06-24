function CollegeInfo(props) {
  return (
    <div className="mt-1">
      <p className="text-sm"><span className="font-semibold">College :</span>{" "}{props.college}</p>
    </div>
  );
}

export default CollegeInfo;