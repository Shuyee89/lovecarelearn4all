import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const Profile: React.FC = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const code = queryParams.get("code");
  console.log(code);
  useEffect(() => {
    const getMessage = async () => {
      const code = queryParams.get("code");
      const axios = require("axios");
      const url = `/.netlify/functions/getIDToken?code=${code}`;
      const data = await axios.get(url);
      console.log(data);
    };

    getMessage();
  });

  return <div>Profile</div>;
};

export default Profile;
