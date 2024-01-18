import style from "./Profile.module.scss";
import exitIcon from "../../assets/exit.png";

export const Profile = ({ user, logout }) => {
  console.log("user data:", user);
  return (
    <div className={style.profileStyle}>
      <span>
        logout
        <img src={exitIcon} alt="logout" onClick={logout} />
      </span>
      <h2>You are logged in</h2>
      <p>User Name: {user?.name}</p>
      <p>User Email: {user?.email}</p>
    </div>
  );
};
