function ProductCard({ name, price, img }) {
  return (
    <div className="bg-white p-4 rounded shadow-sm hover:shadow-md">
      <img src={img} alt={name} className="h-32 mx-auto" />
      <h2 className="mt-2 font-medium">{name}</h2>
      <p className="text-green-600 font-bold">₹{price}</p>
      <button className="mt-2 bg-green-500 text-white px-3 py-1 rounded">Add</button>
    </div>
  );
}

export default ProductCard;
