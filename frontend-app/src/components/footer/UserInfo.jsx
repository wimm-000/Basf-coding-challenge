import React from "react";
import { ReactComponent as GithubIcon } from "../../assets/images/github.svg";
import { ReactComponent as GoogleIcon } from "../../assets/images/google.svg";
import { ReactComponent as SmilieIcon } from "../../assets/images/smilie.svg";
import { ReactComponent as IngonitoIcon } from "../../assets/images/incognito.svg";

const UserInfo = ({ type, name }) => {
  let LoginTypeIcon = IngonitoIcon;
  if (type === "google") {
    LoginTypeIcon = GoogleIcon;
  }
  if (type === "login") {
    LoginTypeIcon = SmilieIcon;
  }
  if (type === "anomimous") {
    LoginTypeIcon = IngonitoIcon;
  }
  if (type === "github") {
    LoginTypeIcon = GithubIcon;
  }
  return (
    <div className="user-info">
      <LoginTypeIcon /> Welcome <strong> {name}</strong>
    </div>
  );
};

export default UserInfo;
