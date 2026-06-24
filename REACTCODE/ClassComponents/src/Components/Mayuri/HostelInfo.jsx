function HostelInfo(props) {
  return (
    <div className="text-center mt-1">
      <p className="text-sm">
        Hostel: {props.hostel}
      </p>
    </div>
  );
}

export default HostelInfo;