import React, { useContext, useEffect } from "react";
import { UserContext } from "../../Services/UserContext";

const UserProfile = () => {
  const { user, loading, error } = useContext(UserContext);

  useEffect(() => {
    console.log(user); // Check the structure of user object in console
    if (user) {
      console.log(user.provider); // Check if provider is accessible
    }
  }, [user]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      {user ? (
        <div>
          {user.provider === "JWT" ? (
            <div>
              <h1>{user.name}</h1>
              <p>Email: {user.email}</p>
              {/* Add more user details as needed */}
            </div>
          ) : (
            <div>
              <h1>{user.user.displayName}</h1>
              <p>Email: {user.user.email}</p>
              <img src={user.image} alt={user.displayName} />
              {/* Add more user details as needed */}
            </div>
          )}
          {/* Display additional user details based on the user object structure */}
          <pre>{JSON.stringify(user, null, 2)}</pre>
        </div>
      ) : (
        <div>User not found</div>
      )}
    </div>
  );
};

export default UserProfile;
