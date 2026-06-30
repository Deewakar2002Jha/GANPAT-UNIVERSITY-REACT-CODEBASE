import IdentityCard from "./components/Nax/IdentityCard";
import studentPhoto from "./assets/hero.png";

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200 p-8">
      <IdentityCard
        image={studentPhoto}
        studentName="CHAUDHARY NAX .P"
        enrollmentNo="24032211016"
        tempEnrollment="T24032211127"
        college="AMPICS"
        course="BCA (Hons.)"
        mobile="0123456789"
        bloodGroup="-"
      />
    </div>
  );
}

export default App;