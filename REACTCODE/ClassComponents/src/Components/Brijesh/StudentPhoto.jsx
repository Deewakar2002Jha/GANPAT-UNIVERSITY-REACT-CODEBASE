import photo from "../../assets/brijesh-photo.jpg";

function StudentPhoto() {
  return (
    <div className="flex justify-center">
      <img src={photo} alt="Brijesh" className="w-32 h-36 object-cover"/>
    </div>
  );
}

export default StudentPhoto;