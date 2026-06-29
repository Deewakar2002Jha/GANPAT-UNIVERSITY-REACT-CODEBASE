import UniversityHeader from "./UniversityHeader";
import PhotoSection from "./PhotoSection";
import NameSection from "./NameSection";
import EnrollmentSection from "./EnrollmentSection";
import CourseSection from "./CourseSection";
import ContactSection from "./ContactSection";
import BarcodeSection from "./BarcodeSection";

function IdentityCard(props) {
  return (
    <div className="flex justify-center items-center min-h-screen bg-slate-200 p-6">

      <div className="flex bg-white rounded-2xl overflow-hidden shadow-2xl border border-gray-300">

        {/* Yellow Strip */}

        <div className="relative w-16 bg-yellow-500 flex items-center justify-center overflow-hidden">

          {/* Pattern */}

          <div className="absolute inset-0 opacity-15">

            <div className="absolute w-44 h-44 border-[18px] border-white rounded-full -top-24 -left-20"></div>

            <div className="absolute w-40 h-40 border-[18px] border-white rounded-full bottom-[-70px] left-[-40px]"></div>

          </div>

          <h1
            className="text-white font-bold text-xl tracking-[8px] z-10"
            style={{
              writingMode: "vertical-rl",
              transform: "rotate(180deg)",
            }}
          >
           HOSTEL - STUDENT
          </h1>

        </div>

        {/* Right Card */}

        <div className="w-[320px] px-5 py-4">

          <UniversityHeader />

          <PhotoSection image={props.image} />

          <NameSection studentName={props.studentName} />

          <EnrollmentSection
            enrollmentNo={props.enrollmentNo}
            tempEnrollment={props.tempEnrollment}
          />

          <CourseSection
            college={props.college}
            course={props.course}
          />

          <ContactSection
            mobile={props.mobile}
            bloodGroup={props.bloodGroup}
          />

          <BarcodeSection
            enrollmentNo={props.enrollmentNo}
          />

        </div>

      </div>

    </div>
  );
}

export default IdentityCard;