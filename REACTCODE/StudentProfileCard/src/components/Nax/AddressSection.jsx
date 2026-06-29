function AddressSection({ address }) {
  return (
    <div className="mt-4">
      <h3 className="text-sm font-semibold text-gray-700 border-b pb-1">
        Address
      </h3>

      <p className="mt-2 text-sm text-gray-800 leading-relaxed text-center">
        {address}
      </p>
    </div>
  );
}

export default AddressSection;