let search = document.getElementById("search");
let card2 = document.getElementById("card2");
let card3 = document.getElementById("card3");
let inputText = document.getElementById("inputText")
let tvalue = document.getElementById("Tvalue");
let hvalue = document.getElementById("hvalue");
let wvalue = document.getElementById("wvalue");

 
function data(event){
    //console.log(event.key)
    let name = inputText.value;
    let key = "9d4b4f7478e56f8f77e14321b20f1534";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${key}`;
    let getData = async ()=>{
        let insideData = await fetch(url);
        let objectData = await insideData.json();
        console.log(objectData)
         if (objectData.cod === "404") {
            alert("please enter valid name")
         }
        let temp = objectData.main.temp
        let wind = objectData.wind.speed
        let type = objectData.weather[0].description
        tvalue.innerHTML = Math.ceil(temp - 273) + " "+ "°C";
        let humid = objectData.main.humidity;
        hvalue.innerHTML = humid+"%"
        wvalue.innerHTML = wind+"Km/ph"
        card2.classList.add("visible");
        card3.classList.add("visible");
        inputText.onclick = function(){
            inputText.value = "";
         card2.classList.remove("visible");
        card3.classList.remove("visible");
        }
        
    }
    getData()

}


search.addEventListener("click",data)

