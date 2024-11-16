import api from "./baseAPI";

export async function GetWeather(storeId) {

    try {
        const requestBody = {
            storeId: storeId
        }

        const response = await api.get(
            `/admin/waether`,
            requestBody,
            {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        var weatherChar = ''
        var weatherIconUrl = ''


        if ((199 < response.data.weather[0].id) && (response.data.weather[0].id < 299)) {
            weatherChar = '폭풍우'
            weatherIconUrl ='https://openweathermap.org/img/wn/11d@4x.png'
        }
        else if ((299 < response.data.weather[0].id) && (response.data.weather[0].id < 599)) {
            weatherChar = '비'
            weatherIconUrl = 'https://openweathermap.org/img/wn/09d@4x.png'
        }
        else if ((599 < response.data.weather[0].id) && (response.data.weather[0].id < 699)) {
            weatherChar = '안개'
            weatherIconUrl = 'https://openweathermap.org/img/wn/50d@4x.png'
        }
        else if ( response.data.weather[0].id == 800) {
            weatherChar = '맑음'
            weatherIconUrl = 'https://openweathermap.org/img/wn/01d@4x.png'
        }
        else if ((800 < response.data.weather[0].id) && (response.data.weather[0].id < 803)) {
            weatherChar = '대체로 맑음'
            weatherIconUrl = 'https://openweathermap.org/img/wn/02d@4x.png'
        }
        else {
            weatherChar = '흐림'
            weatherIconUrl = 'https://openweathermap.org/img/wn/04d@4x.png'
        }

        const preprocessed = {
            'temp_now': response.data.main.temp,
            'temp_min': response.data.main.temp_min,
            'temp_max': response.data.main.temp_max,
            'weatherChar' : weatherChar,
            'weatherIconUrl' : weatherIconUrl
        }
        return preprocessed
    } catch (error) {
        throw error;
    }

}

