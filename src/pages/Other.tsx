import React, { useState } from "react";

const Other = () => {
  const [codeVerifier, setCodeVerifier] = useState("");
  const [codeChallenge, setCodeChallenge] = useState("");
  async function generateRandomString(length: number): Promise<string> {
    const array = new Uint32Array(Math.ceil(length / 2));
    window.crypto.getRandomValues(array);
    const randomString = Array.from(array, (dec) =>
      ("0" + dec.toString(16)).substr(-2)
    )
      .join("")
      .slice(0, length);
    return randomString;
  }

  async function sha256(plain: string): Promise<ArrayBuffer> {
    const encoder = new TextEncoder();
    const data = encoder.encode(plain);
    return await crypto.subtle.digest("SHA-256", data);
  }

  function base64urlencode(buffer: ArrayBuffer): string {
    let binary = "";
    const bytes = new Uint8Array(buffer);
    for (let i = 0; i < bytes.byteLength; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return btoa(binary)
      .replace(/\+/g, "-")
      .replace(/\//g, "_")
      .replace(/=+$/, "");
  }

  async function generatePKCEChallengePair(): Promise<string> {
    const codeVerifier = await generateRandomString(64);
    setCodeVerifier(codeVerifier);
    const hashedCodeVerifier = await sha256(codeVerifier);
    const codeChallenge1 = base64urlencode(hashedCodeVerifier);
    setCodeChallenge(codeChallenge1);
    return codeChallenge1;
  }

  const authApiUrl = "https://staging.api.myinfo.gov.sg/com/v4/authorize";
  const clientId = "PROD-R28SM8022K-DEEMYINFOTESTAPP";
  const redirectUrl = "https://lovecarelearn4all.netlify.app/callback";
  const purpose_id = "demonstration";
  const scope = "uinfin name";
  const method = "S256";

  //   const handleButtonClick = async () => {
  //     try {
  //         setLoading(true);
  //         const codeChallenge = await generatePKCEChallengePair();
  //         // Redirect to the desired location with the code challenge
  //         window.location.href = `YOUR_AUTHORIZATION_URL?code_challenge=${codeChallenge}`;
  //     } catch (error) {
  //         console.error("Error generating PKCE pair:", error);
  //         // Handle error if needed
  //     } finally {
  //         setLoading(false);
  //     }
  // };

  const handleButtonClick = async () => {
    const code = await generatePKCEChallengePair();
    //Redirect to authorize url after generating code challenge
    const authorizeUrl =
      authApiUrl +
      "?client_id=" +
      clientId +
      "&scope=" +
      scope +
      "&purpose_id=" +
      purpose_id +
      "&code_challenge=" +
      code +
      "&code_challenge_method=" +
      method +
      "&redirect_uri=" +
      redirectUrl;
    console.log(authorizeUrl);
    window.location.href = authorizeUrl;
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Generate PKCE Code Pair</button>
      <p>Code Verifier: {codeVerifier}</p>
      <p>Code Challenge: {codeChallenge}</p>
    </div>
  );
};

export default Other;
