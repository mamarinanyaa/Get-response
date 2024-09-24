fetch('https://petstore3.swagger.io/api/v3/pet/10', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
    }
}).then((response) => response.json()).then(data => {
    console.log(data);
}).catch((error) => console.log('error: ', error))