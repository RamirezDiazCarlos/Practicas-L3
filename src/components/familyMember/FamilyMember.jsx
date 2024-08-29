import PropTypes from "prop-types";

const FamilyMember = ({ name, age }) => {
    return (
        <div>
            <h3>{name}</h3>
            <p>{age} años</p>
        </div>
    );
};

FamilyMember.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
};

export default FamilyMember;