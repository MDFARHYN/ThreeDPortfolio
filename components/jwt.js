import axios from 'axios';
import { domain } from './domain';

export const getCSRFTokenFromCookie = () => {
    const cookieString = document.cookie;
    const cookieArray = cookieString.split(';');
  
    for (let i = 0; i < cookieArray.length; i++) {
      const cookie = cookieArray[i].trim();
      // Check if the cookie starts with the name of your CSRF token
      if (cookie.startsWith('csrftoken=')) {
        // Extract and return the token value
        return cookie.substring('csrftoken='.length, cookie.length);
      }
    }
  
    // Return null if CSRF token is not found
    return null;
  };
  

function getAuthTokenFromCookie() {
  const cookieString = document.cookie;
  const cookies = cookieString.split(';');

  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    if (cookie.startsWith('jwt_token=')) {
      const token = cookie.substring('jwt_token='.length);
      return token;
    }
  }

  return null;
}

function getRefreshTokenFromCookie() {
  const cookieString = document.cookie;
  const cookies = cookieString.split(';');

  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    if (cookie.startsWith('refresh_token=')) {
      const token = cookie.substring('refresh_token='.length);
      return token;
    }
  }

  return null;
}


 
 



function setAuthTokenInCookie(token) {
  // Set the JWT token in the cookie
  document.cookie = `jwt_token=${token}; path=/`;
}

export async function handleAxois(url, method = 'get', options=null) {
  const token = getAuthTokenFromCookie();
  const refreshToken = getRefreshTokenFromCookie();
  const CSRF_TOKEN =  getCSRFTokenFromCookie()
  if (token) {
    const tokenParts = token.split('.');
    if (tokenParts.length === 3) {
      const payload = JSON.parse(atob(tokenParts[1]));
      const currentTimestamp = Math.floor(Date.now() / 1000);

      if (payload.exp < currentTimestamp) {
        console.log("payload", payload.exp)
        console.log("currentTimestamp", currentTimestamp)
        // Token has expired, refresh the token
        if (refreshToken) {
          return  axios
            .post(`${domain}/api/token/refresh/`, { refresh: refreshToken }) //here must be provide refresh url
            .then((response) => {
              const newToken = response.data.access;
              // Update the token in the cookie
              setAuthTokenInCookie(newToken);
              console.log("token expaired")
              let headers = {
                'Accept': 'application/json',
                'Authorization': `Bearer ${newToken}`,
                'Content-Type': 'multipart/form-data',
                'X-CSRFToken':CSRF_TOKEN,

              };
              

              return axios({
                method,
                url,
                withCredentials: true,
                headers,
                credentials: 'include',
                data:  options ,
              });
            });
        } else {
          // Handle the case when refresh token is missing
          console.log('Refresh token not found');
          return Promise.reject(new Error('Refresh token not found'));
        }
      } else {
        // Token is still valid, proceed with the request
        console.log("token not  expaired")
        let headers = {
          'Accept': 'application/json',
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
          'X-CSRFToken':CSRF_TOKEN,
        };

        return axios({
          method,
          url,
          withCredentials: true,
          headers,
          credentials: 'include',
          data:  options ,
        });
      }
    }
  }

  return Promise.reject(new Error('Token not found'));
}




export async function handleAxoisSecure(url, method = 'get', options=null) {
  const CSRF_TOKEN =  getCSRFTokenFromCookie()      
  let headers = {
          'Accept': 'application/json',
          'Content-Type': 'multipart/form-data',
          'X-CSRFToken':CSRF_TOKEN,
        };

        return axios({
          method,
          url,
          withCredentials: true,
          headers,
          credentials: 'include',
          data:  options ,
        });
    
}
