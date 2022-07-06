import React from "react";

function Display(props) {
  const users = props.users;
  const handleRemove = id => {
    props.deleteUser(id);
  };
  return (
    <div>
      {users.length > 0 ? (
        users.map((user, index) => (
          <div key={index} className="card">
            <div className="card__image">
              <img src={user.userProfile} alt={user} />
            </div>
            <div className="card__copy">
              <h1>Name {user.userName}</h1>
              <h2>Email {user.userEmail}</h2>
              <h2>Number {user.userPhone}</h2>
              <button className="deleteBtn" value={user.id} onClick={() => handleRemove(user.id)}>
                Delete
              </button>
            </div>
          </div>
        ))
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default Display;
