export function GetToken(data) {
    return fetch(process.env.REACT_APP_REST_API_LOCATION+'login',{
        mode: 'cors',
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
        }
    })
        .then((response) => response.json())
        .then(responseData =>{
            return responseData
        }).catch(err => err);
}
