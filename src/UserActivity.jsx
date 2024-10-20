
const UserActivity = ({ user, textColor, idx }) => {
  return (
    <div>
      <h1 style={{ color: textColor }}>User {idx + 1}: {user}</h1>
    </div>
  );
};

export default UserActivity;
