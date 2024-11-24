// Hàm tính diện tích hình chữ nhật
function calculateRectangleArea() {
    const dai = parseFloat(document.getElementById('chieudai').value);
    const rong = parseFloat(document.getElementById('chieurong').value);

    if (isNaN(dai) || isNaN(rong) || dai <= 0 || rong <= 0) {
        alert("Vui lòng nhập chiều dài và chiều rộng hợp lệ!");
        return;
    }

    const dientich = dai * rong;
    document.getElementById('dientich_hcn').textContent = `Diện tích: ${dientich} m²`;
}

// Hàm tính diện tích hình tam giác
function calculateTriangleArea() {
    const day = parseFloat(document.getElementById('day').value);
    const cc = parseFloat(document.getElementById('ccao').value);

    if (isNaN(day) || isNaN(cc) || day <= 0 || cc <= 0) {
        alert("Vui lòng nhập cạnh đáy và chiều cao hợp lệ!");
        return;
    }

    const dientich = (day * cc) / 2;
    document.getElementById('dientich_tg').textContent = `Diện tích: ${dientich} m²`;
}

// Hàm tính diện tích hình vuông
function calculateSquareArea() {
    const canh = parseFloat(document.getElementById('canh').value);

    if (isNaN(canh) || canh <= 0) {
        alert("Vui lòng nhập độ dài cạnh hợp lệ!");
        return;
    }

    const dientich = canh * canh;
    document.getElementById('dientich_hv').textContent = `Diện tích: ${dientich} m²`;
}
