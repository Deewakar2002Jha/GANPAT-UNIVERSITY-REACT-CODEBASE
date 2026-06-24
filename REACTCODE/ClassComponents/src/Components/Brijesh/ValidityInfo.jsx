function ValidityInfo(props) {
  return (
    <div className="mt-1">
      <p className="text-sm"><span className="font-semibold">Valid Till :</span>{" "}{props.validity}</p>
    </div>
  );
}

export default ValidityInfo;