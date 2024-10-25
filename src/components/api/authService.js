import api from "./baseAPI";

export async function Login(email, password) {

    const loginFormData = {
        email: email,
        password: password
    }

    try {
        const response = await api.post('/auth/login', loginFormData, {
            headers: {
            'Content-Type': 'application/json'
            }
        });

        const { accessToken } = response.data;
        if (accessToken) {
          sessionStorage.setItem('accessToken', accessToken);
          return accessToken;
          
        } else {
          throw new Error('Access token not found in response');
        }
    } catch (error) {
        throw error;
    }
}

export function Logout(){
    sessionStorage.removeItem('accessToken');
}

