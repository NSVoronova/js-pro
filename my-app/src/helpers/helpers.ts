
const base64UrlDecode = (base64Url: string) => {
  const padding = '='.repeat((4 - (base64Url.length % 4)) % 4);
  const base64 = (base64Url + padding).replace(/-/g, '+').replace(/_/g,'/');
  const decoded = atob(base64);
  return Array.from(decoded).map((char) => char.charCodeAt(0));
};

export const decodeJwt = (jwtToken: string) => {
  console.log(jwtToken)
  const [headerBase64Url, payloadBase64Url, signatureBase64Url] = jwtToken.split(".");

  const header = JSON.parse(String.fromCharCode(...base64UrlDecode(headerBase64Url)));
  const payload = JSON.parse(String.fromCharCode(...base64UrlDecode(payloadBase64Url)));
  return { header, payload}
}

export const expToMinutes = (expTimestampInSeconds: number) => {
  const expTimestampInMillis = expTimestampInSeconds * 1000;
  const currentTimeInMills = Date.now();
  const timeDifferenceInMillis = expTimestampInMillis - currentTimeInMills;
  const timeDifferenceInMinutes = timeDifferenceInMillis / 60000;
  return timeDifferenceInMinutes;
}

export const  updateAccessToken = async () => {
  try {
    let token: string | null = localStorage.getItem("token");
    if (token) {
      let objectToken = JSON.parse(token);
      let response = await fetch(
        "https://studapi.teachmeskills.by/auth/jwt/refresh/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ refresh: objectToken.refresh }),
        }
      );
      let responseJson: { access: string } = await response.json();
      console.log(responseJson);
      if (responseJson.access) {
        let objectToken = JSON.parse(localStorage.getItem("token") || "{}");
        objectToken.access = responseJson.access;
        localStorage.setItem("token", JSON.stringify(objectToken));
      }
    }
  } catch (err) {
    console.log(err);
  }
};
