let m = Math.floor(Math.random() * 101);

for (let i = 1; i < 101; i++) {
    let n = Number(prompt("mời bạn đoán"));
    if (n > m) {
        alert("Nhỏ hơn chút");
	} else if (m > n) {
		alert("Lớn hơn chút");
	} else {
		alert("Đúng");
		break;
    }
    console.log(i);

}
console.log(m);





