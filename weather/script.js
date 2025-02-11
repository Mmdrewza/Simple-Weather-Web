let inputHDL = document.querySelector("input");
let nameHDL = document.querySelector(".any-where");
let searchHDL = document.querySelector("#search");
let tempHDL = document.querySelector('.temp')
let windHDL = document.querySelector('.wind')
let humidity = document.querySelector('.humidity')
let resultImg = document.querySelector('.result-img')
let msgHDL = document.querySelector('.msg')

const api = () => {
  const apiKey = "4d8fb5b93d4af21d66a2948710284366";
  const inputVal = inputHDL.value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`;

  let result = fetch(url);
  result
    .then((data) => {
      let result2 = data.json();
      console.log(result2);
      
      result2.then((data2) => {
        tempHDL.innerHTML = Math.round(data2.main.temp)
        humidity.innerHTML = Math.round(data2.main.humidity)
        windHDL.innerHTML = Math.round(data2.wind.speed)

        if (data2.weather[0].main =='Rain') {
            resultImg.setAttribute('src', "/images/rain.png")
        } else if (data2.weather[0].main =='Mist') {
            resultImg.setAttribute('src', "/images/mist.png")
        } else if (data2.weather[0].main =='Clouds') {
            resultImg.setAttribute('src', "/images/cloud.png")
        } else if (data2.weather[0].main =='Snow') {
            resultImg.setAttribute('src', "/images/snow.png")
        } else if (data2.weather[0].main =='Clear') {
            resultImg.setAttribute('src', "/images/clear.png")
        }
      });
    })
    .catch((err) => {
      console.log(err);
    });
};


inputHDL.addEventListener("keydown", (e) => {
  if (e.keyCode == 13) {
    nameHDL.innerHTML = inputHDL.value;
    api()
  }
});

searchHDL.addEventListener("click", () => {
  nameHDL.innerHTML = inputHDL.value;
  api()
});
