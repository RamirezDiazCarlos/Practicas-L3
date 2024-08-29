import Product from "../product/product";
import PropTypes from "prop-types";

const Products1 = ({ products }) => {
    return (
        <div>
            {products.map((product, index) => (
                <Product key={index} name={product} />
            ))}
        </div>
    );
};

Products1.propTypes = {
    products: PropTypes.arrayOf(PropTypes.string),
};

export default Products1;