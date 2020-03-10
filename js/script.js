function draw_grd() {
    let canvas = document.getElementById('fir')
    let ctx = canvas.getContext('2d')

    let grd = ctx.createLinearGradient(0,0,135,135)

    grd.addColorStop(0,"red");
    grd.addColorStop(0.1,"orange");
    grd.addColorStop(0.2,"yellow");
    grd.addColorStop(0.3,"green");
    grd.addColorStop(0.4,"skyblue");
    grd.addColorStop(0.5,"blue");
    grd.addColorStop(0.6,"violet");
    grd.addColorStop(0.9,"darkviolet")

    ctx.fillStyle = grd
    ctx.fillRect(0,0,100,100);
}

function draw_lin(){

}