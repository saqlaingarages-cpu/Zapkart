import ProductCard from "../components/ProductCard";

const products = [
  { name: "Tomatoes", price: 30, img: "https://via.placeholder.com/100" },
  { name: "Onions", price: 25, img: "https://via.placeholder.com/100" },
  { name: "Milk", price: 45, img: "https://via.placeholder.com/100" },
];

function Home() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {products.map((item, index) => (
        <ProductCard key={index} {...item} />
      ))}
    </div>
  );
}

export default Home;
