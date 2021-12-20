import React from "react";
import PropTypes from "prop-types";
const Profile = ({ name, bio, profession, children, alert }) => {
  return (
    <div>
      {alert()}
      {children}
      <h1>{name}</h1>
      <div>BIO :{bio} </div>
      <div>Profession :{profession} </div>
    </div>
  );
};
Profile.propTypes = {
  name: PropTypes.string,
  bio: PropTypes.string,
  profession: PropTypes.string,
};
Profile.defaultProps = {
  name: "name person",
  bio: "this is a bio",
  profession: "this is profession",
};
export default Profile;
