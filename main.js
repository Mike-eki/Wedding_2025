// Countdown Timer
function countDownTimer() {
    let weddingTime = new Date("19 Apr, 2025 12:00:00").getTime()
    let timer = setInterval(() => {
        let now = new Date().getTime()
        let distance = weddingTime - now

        let days = Math.floor(distance / (1000 * 60 * 60 * 24))
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
        let seconds = Math.floor((distance % (1000 * 60)) / 1000)

        document.getElementById("days").innerHTML = days
        document.getElementById("hours").innerHTML = hours
        document.getElementById("minutes").innerHTML = minutes
        document.getElementById("seconds").innerHTML = seconds

        if (distance < 0) {
            clearInterval(timer)
            document.getElementById("days").innerHTML = "00"
            document.getElementById("hours").innerHTML = "00"
            document.getElementById("minutes").innerHTML = "00"
            document.getElementById("seconds").innerHTML = "00"
        }
    }, 1000) 
}

async function copy(id){
    let element = document.getElementById(id)
    // Ask for user to have permission to copy
    navigator.permissions.query({ name: "write-on-clipboard" }).then((result) => {
        if (result.state == "granted" || result.state == "prompt") {
          alert("Write access granted!");
        }
      });
    // Copy process API
    try {
        await navigator.clipboard.writeText(element.textContent)
        alert('¡Texto copiado!')
    } catch(error) {
        alert('No se pudo copiar', error)
    }
}

countDownTimer()