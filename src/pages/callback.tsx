import React from 'react'
import { useLocation } from "react-router-dom";


export const Callback: React.FC = () => {
 const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const code = queryParams.get("code");
  console.log(code);
  return (
    <div>callback</div>
  )
}

export default Callback