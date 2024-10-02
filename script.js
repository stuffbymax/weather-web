const apiKey = '63488c4cf694477ea04151457240210';  // Your WeatherAPI key

function getWeather() {
    const city = document.getElementById('city').value;
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data && data.current) {
                const temp = data.current.temp_c;
                const description = data.current.condition.text;
                const weatherResult = `
                    <h3>Weather in ${city}</h3>
                    <p>Temperature: ${temp}°C</p>
                    <p>Condition: ${description}</p>
                `;
                document.getElementById('weather-result').innerHTML = weatherResult;
            } else {
                document.getElementById('weather-result').innerHTML = `<p>City not found!</p>`;
            }
        })
        .catch(error => {
            document.getElementById('weather-result').innerHTML = `<p>Error fetching data!</p>`;
        });
}
