function PhotoSection({ image }) {
  return (
    <div className="flex justify-center mb-4">
      <div className="border-[3px] border-red-600 rounded-2xl p-1">
        <img
          src={image}
          alt="Student"
          className="w-36 h-44 object-cover rounded-lg"
        />
      </div>
    </div>
  );
}

export default PhotoSection;