
import Products1 from "./components/products/Products1";
import Family from "./components/family/Family";

const products = ["table", "couch", "chair1", "chair2"];

const persons = [
  { name: "Juan", age: 26 },
  { name: "Gabriel", age: 27 },
  { name: "Valentina", age: 22 },
  { name: "Paula", age: 25 },
  { name: "Andrés", age: 20 },
];

function App() {
  return (
    <div>
      <h1>Product List</h1>
      <Products1 products={products} />
      <Family members={persons} />

    </div>
  );
}

export default App
