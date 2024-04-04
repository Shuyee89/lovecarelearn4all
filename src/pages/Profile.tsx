import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

export const Profile: React.FC = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const [NRIC, setNRIC] = useState(null);
  const code = queryParams.get("code");
  useEffect(() => {
    const getMessage = async () => {
      const url = `/.netlify/functions/getIDToken?code=${code}`;
      if (NRIC == null) {
        const { data } = await axios.get(url);
        setNRIC(data.data);
      }
    };

    getMessage();
  }, [code]);

  return <div>Hello, {NRIC}</div>;
};

export default Profile;
