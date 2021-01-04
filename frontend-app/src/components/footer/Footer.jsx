import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import SocialLinks from "./SocialLinks";
import UserInfo from "./UserInfo";

export default function Footer() {
  const { name } = useContext(GlobalContext);
  return (
    <footer className="footer">
      <UserInfo type={name ? "github" : "incognito"} name={name} />
      <SocialLinks />
    </footer>
  );
}
