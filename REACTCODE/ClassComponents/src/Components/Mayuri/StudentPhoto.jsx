import photo from "../../assets/mayuri-photo.jpeg";

function StudentPhoto() {
  return (
    <div className="flex justify-center">
      <img
        src={photo}
        alt="Mayuri Kumari"
        className="w-28 h-32 border-2 border-red-500 object-cover rounded"
      />
    </div>
  );
}

export default StudentPhoto;