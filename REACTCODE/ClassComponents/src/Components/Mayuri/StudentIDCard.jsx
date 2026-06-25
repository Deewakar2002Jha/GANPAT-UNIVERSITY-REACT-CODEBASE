import UniversityLogo from "./UniversityLogo";
import StudentPhoto from "./StudentPhoto";
import StudentName from "./StudentName";
import EnrollmentNo from "./EnrollmentNo";
import CollegeInfo from "./CollegeInfo";
import CourseInfo from "./CourseInfo";
import BloodGroup from "./BloodGroup";
import MobileInfo from "./MobileInfo";
import HostelInfo from "./HostelInfo";
import BarcodeSection from "./BarcodeSection";

function StudentIDCard() {
  return (
    <div className="flex justify-center mt-10 mb-10">
      <div className="flex bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-300">

        <div className="bg-blue-700 w-16 flex items-center justify-center">
          <h1
            className="text-white font-bold text-2xl tracking-widest"
            style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
          >
            STUDENT
          </h1>
        </div>

        <div className="w-80 p-4">

          <UniversityLogo />

          <h2 className="text-center font-bold mb-2">
            GANPAT UNIVERSITY
          </h2>

          <StudentPhoto />

          <StudentName name="MS. MAYURI KUMARI" />

          <EnrollmentNo enrollment="24032211193" />

          <CollegeInfo college="AMPICS" />

          <CourseInfo course="BCA (Hons.)" />

          <BloodGroup bloodGroup="O+" />

          <MobileInfo mobile="7357475401" />

          <HostelInfo hostel="BLOCK - A " />

          <BarcodeSection />

        </div>
      </div>
    </div>
  );
}

export default StudentIDCard;