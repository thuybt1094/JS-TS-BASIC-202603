//Yếu tố 1:
let soLanClick = 1;

//Yếu tố 2:
while (soLanClick <= 3) {
  //Thực hiện hành động
  console.log(`Đang click lần thứ ${soLanClick}`);

  //Yếu tố 3
  soLanClick++;
}

console.log("Đã click xong 3 lần. thoát vòng lặp");

//LƯU Ý: VÒNG LẶP VÔ TẠN
// let bungDoi = true;

// while (bungDoi === true) {
//   console.log("Đang ăn thịt nướng");
//   //Hậu quả: ăn mãi ko ngừng -> nổ bụng -> treo máy -> infinite loop vòng lặp
//   // vô tận
//   // bungdoi =false
// }

let miengThit = 5;

while (miengThit > 0) {
  console.log(`Đang ăn... Còn lại. ${miengThit} miếng`);

  miengThit--;
}
console.log("Đã ăn hết, no bụng");

// Trong AT sẽ có cơ chế retry - thử lại tối đa N lần
//Viết code tìm nút thanh toán, cứ 1sec tìm 1 lần, tìm tối đa 5 lầm. nếu thấy thì dừng. nếu quá 5 lần thì báo lỗi

let maxRetry = 5; //so lan thu toi da
let currentRetry = 1; //Lan thu hien tai
let isFound = false; //Trang thai tim thay nut

while (isFound === false && currentRetry <= maxRetry) {
  console.log(`Đang tìm nút thanh toán trên màn hình ...`);

  //Giả lập tìm kiếm (là cho tỉ lệ tìm kiếm  < 0.8)
  let toolGiaLap = Math.random();
  let searchResult = toolGiaLap > 0.3;

  console.log(`Search result : ${toolGiaLap}`);

  if (searchResult === true) {
    isFound = true; //Tìm thấy rồi. Đổi trạng thái để thoát vòng lặp
    console.log("NGON! Đã tìm thấy nút thanh toán. Bấm click ngay");
  } else {
    console.log("Khong thấy, chuẩn bị thử lại");
    currentRetry++; //Tăng số lần thử lên 1 (bước nhảy)
  }
}

//xử lý kết quả

if (isFound === false) {
  console.log(`TEST FAIL, Đã thử 5 lần nhưgn mạng lag quá, ko thấy nút đâu`);
}


//Bài tập nhỏ:
// Có 1 hệ thống đăng nhập. -> rule Là; hệ thốgn cho phép nhập sai MK tối đa 3 lần. nếu nhập đsung trước khi hết lượt
// -> hiển thị ĐĂng nhập thành công. Nếu sai -> khóa tài khoản

let matKhauDung = "1234";
let maxLanThu = 3;

//Yêu cầu:
//1 dùng while để mô phỏng quá trìngh nhập mậ khẩu (tối đa 3 lần)
//2. ở mỗi lần thử. giả lập người dùng nhập mật khẩu bàng cách, gán cứng giá trị cho biến matKhauNhap = "0000", matKhauNhap = "9999" (dùng if else if)
//Nếu nhập đúng in ra "Đăng nhập thành công"
//Nếu nhập sai in ra sai mật khẩu
// cheeck sau khi thoát vòng lặp. kiểm tra nếu đã dùng hết 3 lần mà vẫn sai -> in ra Tài khoản bị khóa

let lanThu = 0;
let dangNhapThanhCong = false;
while (lanThu < maxLanThu) {
    lanThu++;

    let matKhauNhap;

    if (lanThu === 1) {
        matKhauNhap = "0000";
    } else if (lanThu === 2) {
        matKhauNhap = "9999";
    } else if (lanThu === 3) {
        matKhauNhap = "1234";
    }

    if (matKhauNhap === matKhauDung) {
        console.log("Đăng nhập thành công");
        dangNhapThanhCong = true;
        // break; // thoát vòng lặp ngay khi đúng
    } else {
        console.log("Sai mật khẩu");
    }
}

if (!dangNhapThanhCong) {
    console.log("Tài khoản bị khóa");
}