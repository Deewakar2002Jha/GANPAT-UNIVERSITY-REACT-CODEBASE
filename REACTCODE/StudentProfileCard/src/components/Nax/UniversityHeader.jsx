import universityLogo from "../../assets/ganpat-logo.png";

function UniversityHeader() {
  return (
    <div className="flex justify-center mb-3">
      <img
        src={universityLogo}
        alt="Ganpat University"
        className="w-44 object-contain"
      />
    </div>
  );
}

export default UniversityHeader;