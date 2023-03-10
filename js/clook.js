const showTime = () => {
    let date = new Date();
    let h = date.getHours(); // 0 - 23
    let m = date.getMinutes(); // 0 - 59
    let s = date.getSeconds(); // 0 - 59
    let session = "AM";
    let day = date.getDay();

    if (h == 0) {
        h = 12;
    }

    if (h > 12) {
        h = h - 12;
        session = "PM";
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    let time = h + " : " + m + " : " + s + " " + session;
    document.getElementById("clockDisplay").innerText = time;
    document.getElementById("clockDisplay").textContent = time;

    setTimeout(showTime, 1000);

}
showTime();

function saludoFinal () {document.getElementById("submit"),
     swal.fire({
        title: 'Gracias por contactarte, Sludos!',
        icon: 'success',
        text: 'Estamos en contacto 👍'
    });
}
document.getElementById("submit").onclick = function() {
    saludoFinal();
}