const apiKey = 'b62c05e4901f593687f3f408ffc96654'


const inputElement = document.querySelector('.js-input-element')
const submitBtn = document.querySelector('.js-submit-btn')

submitBtn.addEventListener('click', () => {
    const cityValue = inputElement.value

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apiKey}&units=metric`)
    .then((weatherData) => {
        return weatherData.json()
    })
    .then((data) => {
        const outPutHTML = `<div class="icon">
        <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}.png" alt="weather icon">
        </div>
        <div class="temperature">${Math.round(data.main.temp)}°C</div>
        <div class="description">${data.weather[0].description}</div>
        <div class="other-info">
            <p class="feels-like-box">Feels Like: ${data.main.feels_like}</p>
            <p class="humidity-box">Humidity: ${data.main.humidity}%</p>
            <p class="wind-speed-box">Wind Speed: ${data.wind.speed} m/s</p>
        </div>`;
        document.querySelector('.output-container').innerHTML = outPutHTML;})
        .catch(() => {
        const errorHTML = `<h1>City Not Found</h1>`;
        document.querySelector('.output-container').innerHTML = errorHTML;
        
    })
})