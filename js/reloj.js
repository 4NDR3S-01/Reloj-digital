let horas = document.getElementById("horas")
let minutos = document.getElementById("minutos")
let segundos = document.getElementById("segundos")

setInterval(()=>{
    let currentTime = new Date()

    horas.innerHTML = (currentTime.getHours()<10?"0":"") + currentTime.getHours()
    minutos. innerHTML = (currentTime.getMinutes()<10?"0":"") + currentTime.getMinutes()
    segundos.innerHTML = (currentTime.getSeconds()<10?"0":"") + currentTime.getSeconds()
},1000)

horas.innerHTML = currentTime.getHours()
minutos.innerHTML = currentTime.getMinutes()
segundos.innerHTML = currentTime.getSeconds()