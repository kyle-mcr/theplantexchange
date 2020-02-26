import React from "react";
import { useAuth0 } from "../react-auth0-spa";

const Profile = () => {
  const { loading, user } = useAuth0();

  if (loading || !user) {
    return <div>Loading...</div>;
  }

  return (
<div>
    <h1>Listings Works!</h1>
</div>
  );
};

export default Profile;