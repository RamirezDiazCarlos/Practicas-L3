import PropTypes from "prop-types";

const Product = ({ name }) => {
    return <div>{name}</div>;
};

Product.propTypes = {
    name: PropTypes.string,
};

export default Product;