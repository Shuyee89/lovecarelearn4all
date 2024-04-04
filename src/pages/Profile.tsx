import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

export const Profile: React.FC = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  useEffect(() => {
    const getMessage = async () => {
      const code = queryParams.get("code");
      const url = `/.netlify/functions/getIDToken?code=${code}`;
      const data = await axios.get(url);
      console.log(data);
    };

    getMessage();
  });

  return <div>Profile</div>;
};

export default Profile;
