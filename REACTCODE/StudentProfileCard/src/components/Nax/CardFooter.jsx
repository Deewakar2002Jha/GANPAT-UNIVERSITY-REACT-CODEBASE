function CardFooter({ validTill }) {
  return (
    <div className="mt-5 pt-3 border-t border-gray-300">
      <div className="flex justify-between items-center">

        <div>
          <p className="text-xs text-gray-500 uppercase">
            Valid Till
          </p>

          <p className="font-semibold text-gray-800">
            {validTill}
          </p>
        </div>

        <div className="text-center">
          <div className="w-24 border-b border-gray-500 mb-1"></div>

          <p className="text-xs text-gray-600">
            Authorized Sign
          </p>
        </div>

      </div>
    </div>
  );
}

export default CardFooter;