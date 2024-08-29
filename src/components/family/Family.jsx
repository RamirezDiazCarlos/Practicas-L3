import FamilyMember from "../familyMember/FamilyMember";
import PropTypes from "prop-types";
const Family = ({ members }) => {
    const sortedMembers = members.sort((a, b) => b.age - a.age);

    return (
        <div>
            {sortedMembers.map((member, index) => (
                <FamilyMember key={index} name={member.name} age={member.age} />
            ))}
        </div>
    );
};

Family.propTypes = {
    members: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            age: PropTypes.number.isRequired,
        })
    ).isRequired,
};

export default Family;