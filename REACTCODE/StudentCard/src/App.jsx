import './css/App.css'
import Student from './components/Student'
import guniLogo from './assets/guni-logo.png'
import student0126 from './assets/student1126.jpg'
import student085 from './assets/student085.jpg'
import barcode0126 from './assets/stud-card-barcode.jpeg'

function App() {

  const studentDetails = [
    {category: 'STUDENT', logo: guniLogo, studentPhoto: student0126, studentName: 'PRAJAPATI HARSH DINESHKUMAR', EnrollNo: '24032211126', TEnrollNo: "T24032211095", college: 'AMPICS BCA(Hons.)', bGroup: '', mobile: '6356465555', validity: '27/05/2028', barcode: barcode0126},
    // {category: 'STUDENT', logo: guniLogo, studentPhoto: student085, studentName: 'PATEL BRIJESH ARAVINDBHAI', EnrollNo: '24032211085', TEnrollNo: "T24032211096", college: 'AMPICS BCA(Hons.)', bGroup: 'O +', mobile: '7867546862', validity: '23/05/2028', barcode: barcode0126}
  ]

  return (
    <div className='container'>
      {studentDetails.map((student) => (
        <Student category={student.category} logo={student.logo} studentPhoto={student.studentPhoto} studentName={student.studentName} EnrollNo={student.EnrollNo} TEnrollNo={student.TEnrollNo} college={student.college} bGroup={student.bGroup} mobile={student.mobile} validity={student.validity} barcode={student.barcode}/>
      ))}
    </div>
  )
}

export default App
