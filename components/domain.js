const getDomain = () => {
    if (typeof window !== "undefined") {
      let domain = window.location.hostname;
  
      if (domain === "localhost") {
        domain = "http://localhost:8000";
      } else {
        domain = "https://backend.farhyn.com";
      }
      
      return domain;
    }
    return ""; // Return an empty string or a default value if not in a browser environment
  };
  
  const domain = getDomain();
  
  const ImageDomain = ()=>{
    if (typeof window !== "undefined") {
    
    let domain = window.location.hostname;
  
    if (domain === "localhost") {
      domain = "http://localhost:8000";
    } else  {
      domain = "https://backend.farhyn.com";
    }  
    return domain
  }
  return "";
  }
  
  const ImgDomain =   ImageDomain()
  
  
  const getWSdomain = () => {
    if (typeof window !== "undefined") {
      let domain = window.location.hostname;
  
      if (domain === "localhost") {
        domain = "ws://localhost:8000";
      } else {
        domain = "wss://backend.farhyn.com";
      }
      
      return domain;
    }
    return ""; // Return an empty string or a default value if not in a browser environment
  };
  
  const wsDomain = getWSdomain()
  
  export { domain,ImgDomain, wsDomain };
  