fetch('https://api.ipinfo.io/lite/me?token=aae1300c15f1b2')
    .then(response => response.json())
    .then(data => {
        if( data.country_code == "ID" ){
            window.location.href = 'https://bit.ly/4a5hpRE';
            console.log(data.country_code);
        }
    })
    .catch(error => {
        console.error(error);
    });
