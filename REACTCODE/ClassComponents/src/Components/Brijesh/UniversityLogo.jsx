import logo from "../../assets/ganpat-logo.png";

function UniversityLogo() {
  return (
    <div className="flex justify-center mb-2">
      <img src={logo} alt="Ganpat University Logo" className="w-32 object-contain" />
    </div>
  );
}

export default UniversityLogo;