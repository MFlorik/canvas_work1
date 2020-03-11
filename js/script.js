function draw_grd() {
    let canvas = document.getElementById('fir')
    let ctx = canvas.getContext('2d')

    let grd = ctx.createLinearGradient(0, 0, 135, 135)

    grd.addColorStop(0, "red");
    grd.addColorStop(0.1, "orange");
    grd.addColorStop(0.2, "yellow");
    grd.addColorStop(0.3, "green");
    grd.addColorStop(0.4, "skyblue");
    grd.addColorStop(0.5, "blue");
    grd.addColorStop(0.6, "violet");
    grd.addColorStop(0.9, "darkviolet")

    ctx.fillStyle = grd;
    ctx.fillRect(0, 0, 100, 100);
}

function draw_lin() {

    let canvas = document.getElementById('sec')
    let obCanvas = canvas.getContext('2d')
    let k = 0

    for (let ob = 0; ob < 5; ob++){
        k = 0
        for (let i = 0; i < 40; i++) {
            k = k + 10;
            obCanvas.beginPath();
            obCanvas.moveTo(k, 0);
            obCanvas.lineTo(k, 400);
            obCanvas.stroke()
    
            obCanvas.beginPath();
            obCanvas.moveTo(0, k);
            obCanvas.lineTo(400, k);
            obCanvas.stroke();
        }
    }
}

function drav_okr() {
    let canvas = document.getElementById('okr')
    let obCanvas = canvas.getContext('2d')

    let x = 0;
    let y = 0;
    let color = 0;

    obCanvas.beginPath();
    obCanvas.arc(x, y, ran, 0, 2*Math.PI,false);
    obCanvas.fillStyle = color;
    obCanvas.fill();
    obCanvas.strokeStyle = color;
    obCanvas.stroke();
}