import React, { useContext, useEffect, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { GlobalContext } from "../../../context/GlobalContext";
import Loading from "../../common/Loading";
import { ReactComponent as LoadingIcon } from "../../../assets/images/spinner.svg";
import { ReactComponent as GithubIcon } from "../../../assets/images/github.svg";

const Login = () => {
  let history = useHistory();
  const [status, setStatus] = useState("initial");
  const [error, setError] = useState(null);
  const { name, setName } = useContext(GlobalContext);

  const CLIENT_ID = "6c3d7a5fd595da076d04";
  const REDIRECT_URI = "http://localhost:3001/loggedin";
  useEffect(() => {
    const fetchUserData = async (token) => {
      setStatus("loading");
      const request = await fetch("https://api.github.com/user", {
        method: "GET",
        headers: {
          "Content-type": "application/json",
          Authorization: `token ${token}`,
        },
      });
      const json = await request.json();
      let userName = "";
      if (json.login) {
        userName = json.login;
      }
      if (json.name) {
        userName = json.name;
      }
      setName(userName);
      setStatus("initial");
      history.push("/list");
    };

    const params = new URLSearchParams(window.location.search);
    const accessToken = params.get("access_token");
    const tokenType = params.get("token_type");

    if (accessToken && tokenType) {
      // we can find the usename
      fetchUserData(accessToken);
    }
  }, []);
  return (
    <div className="login">
      {status !== "loading" && (
        <>
          <a
            href={`https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=user&redirect_uri=${REDIRECT_URI}`}
            className="button button--login"
          >
            <GithubIcon /> Login with github
          </a>
          <Link to="/list" className="link">
            Continue as anonimous user
          </Link>
        </>
      )}
      <Loading isLoading={status === "loading"} Icon={LoadingIcon}></Loading>
    </div>
  );
};

export default Login;
