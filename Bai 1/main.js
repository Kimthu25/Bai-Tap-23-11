function chuyendoi() {
    var doC = document.getElementById('nhapdoC').value;

    if (doC === "") {
        document.getElementById('ketqua').innerHTML = "Vui lòng nhập nhiệt độ °C!";
        return;
    }

    var doF = (doC * 9/5) + 32;

    document.getElementById('ketqua').innerHTML = doC + "°C = " + doF.toFixed(2) + "°F";
}
