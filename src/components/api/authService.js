import api from "./baseAPI";

export async function Login(email, password) {

    const loginFormData = {
        email: email,
        password: password
    }

    sessionStorage.setItem('userEmail', email);

    try {
        const response = await api.post('/auth/login', loginFormData, {
            headers: {
            'Content-Type': 'application/json'
            }
        });

        if (response.data.accessToken) {
          sessionStorage.setItem('accessToken', response.data.accessToken);
          sessionStorage.setItem('refreshToken', response.data.refreshToken);

          return response.data;
          
        } else {
          throw new Error('Access token not found in response');
        }
    } catch (error) {
        throw error;
    }
}

export function Logout(){
    sessionStorage.clear();
}

export async function GetProfile() {

    try {
        const response = await api.get('/auth/profile',{
            headers: {
            'Content-Type': 'application/json'
            }
        });

        return response.data;
    } catch (error) {
        throw error;
    }

}

