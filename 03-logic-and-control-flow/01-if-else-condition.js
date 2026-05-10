let password = "1234";

if (password.length >= 6) {
  console.log("Hợp lệ");
} else {
  console.log("Không hợp lệ");
}

// let age = 20;
// let hasTicket = true;

// if (age > 18 && hasTicket) {
//   console.log("Được vào");
// }
//viết tách ra thành 1 biến
let age = 20;
let hasTicket = true;
let canEnterCinema = age >= 18 && hasTicket;

if (canEnterCinema) {
  console.log("Được vào");
}

if (age >= 18) {
  console.log("Đủ tuổi");
}

//ứng dụng ví dụ trong AT
// Dữ liệu từ UI
let successMessage = "Đăng nhập thành công";

if (successMessage === "Đăng nhập thành công!") {
  console.log("TEST PASS: Người dùng đc và trang chủ");
} else {
  console.log("TEST FAIL: Hiển thị sai thông báo hoặc đăng nhập thất bại");
}
//

let score = 95;

if (score >= 50) {
  console.log("Đậu");
} else if (score >= 90) {
  console.log("XS");
}

//Ứng dụng tron AT
let statusCode = 404;

if (statusCode === 200) {
  console.log("API hoạt động ok");
} else if (statusCode === 400) {
  console.log("Lỗi dữ liệu gửi lên (Bad Request)");
} else if (statusCode === 404) {
  console.log("Không tìm thấy dường dẫn, Not found");
} else {
  //Dành cho tất cả các TH còn lại (VD: 502, 503)
  console.log("Server đang gặp lỗi");
}

//BT nhỏ
let loginStatus = "locked";

//1. nếu loginStatus === 'sucess' -> in 'TEst pass: login thành công'
//2. nếu loginStatus  === 'locked' -> 'Tài khoản bị khóa'
//3. Các TH còn lại -> in 'Test fail: login thất bại'

//Bài Dương Nhi -> OK
// if (loginStatus === "success") {
//   console.log("Test pass: login thành công");
// } else if (loginStatus === "locked") {
//   console.log("Tài khoản bị khóa");
// } else {
//   console.log("Test fail: login thất bại");
// }

// //Bài Diễm Lê -> Ok
// if (loginStatus === "sucess") {
//   console.log("Test pass: Login thành công");
// } else if (loginStatus === "locked") {
//   console.log("Tài khoản bị khóa");
// } else {
//   console.log("Test fail: Login thất bại");
// }

//mình sẽ trả kết quả result dựa trên score2
let score2 = 95;
// let result;

if (score >= 90) {
  result = "XS";
} else if (score >= 50) {
  result = "ĐẬu";
} else {
  result = "Tèo";
}

// =================================================================== //

// Toán tử 3 ngôi

let result = score2 >= 90 ? "XS" : score2 >= 50 ? "Đậu" : "Tèo"; // Không nên viết toán tử 3 ngôi lồng nhau thế này

console.log(result);

let diem = 8;
// let trangThai;

// if (diem >= 5) {
//   trangThai = "PASS";
// } else {
//   trangThai = "FAIL";
// }

//viêt tắt
let trangThai = diem >= 5 ? "PASS" : "FAIL"; // best practice

console.log(trangThai);

//gán text
let isSaving = true;

let buttonText = isSaving ? "Đang lưu" : "Lưu";

//chọn config

let isCI = false;

let reportMode = isCI ? "html" : "list";

//hiển thị nhãn
let hasBug = true;
let statusLabel = hasBug ? "Có bug" : "Ổn";

//ví dụ sử dụng if/else ưu tiên
// if (isLoginSuccess) {
//   console.log("PASS");

//   takeScreenShot();
//   goToDashBoard();
// } else {
//   console.log("FAIL");
//   takseScreenshot();
// }

//
let failedTests = 2;
// let suiteStatus =
//   failedTests === 0 ? "PASS" : failedTests <= 2 ? "WARNING" : "FAIL";
// YC -> viết lại đoạn code trên bằng if/else if/else

let suiteStatus;

if (failedTests === 0){
    suiteStatus = "PASS";
    
} else if (failedTests <= 2) {
    suiteStatus = "WARNING";
} else {
    suiteStatus = "FAIL";
}

console.log(suiteStatus);

// =================================================================== //

// Truthy & Falsy

let age3 = 18;

if (age3) {
  console.log("Điều kiện đúng");
}

console.log(typeof age3);

if ("0") {
  console.log("Có chạy vào đây hay ko với string 0");
}
if (0) {
  console.log("Có chạy vào đây hay ko");
}

// let soLuong = "0";

// if (soLuong) {
//   console.log("Có sản phẩm");
// }
// // fix
// if (Number(soLuong)){
//     ...
// }else{
//     ...
// }
let userName = "    ";

if (userName) {
  console.log("Đã nhập username");
}

if (userName.trim()) {
  console.log("Đã nhập");
} else {
  console.log("username rỗng");
}

//Ví dụ AT
//
//Dữ liệu lấy từ web ("", hoặc 'https://github.com...')
let githubLink = "";

//người mới học
// if (githubLink !== "" && githubLink !== null && githubLink !== undefined) {
//   console.log("User đã upload github link");
// } else {
//   console.log("Chưa upload");
// }

if (githubLink) {
  console.log("User đã upload github link");
} else {
  console.log("Chưa upload");
}

// Bài tập
let rawUserName = "    ";

// mình cần check xem là rawUserName có hợp lệ hay ko  nếu rỗng là ko hợp lệ và ngực lại
// viết câu điều kiện để check xem

if (rawUserName.trim()) {
    console.log("Hợp lệ");
} else {
    console.log("Không hợp lệ");
}

// =================================================================== //

// switch case

let role = "admin";

switch (role) {
  case "admin":
    console.log("Cấp quyền truy cập vào toàn bộ hệ thống");
    break;
  case "editor":
    console.log("Cấp quyền chỉnh sửa");
    break;

  default:
    console.log("Lỗi role ko hợp lệ");
}

let denGiaoThong = "Đỏ";

switch (denGiaoThong) {
  case "Đỏ":
    console.log("Dừng lại");
  case "Vàng":
    console.log("Đi chậm lại");
  case "Xanh":
    console.log("Đi thôi");
    break;
}

// ko thể dùng switch vì suiwtch chỉ so sánh === chính xác
// nhưng iflse mình có thể check trong KHOẢNG
// let score5= 75

// if (score5 >= 90){
//     console.log();
// }else if (score5 > = 70){

// }

///
let httpStatus = 404;

switch (httpStatus) {
  case 200:
    console.log("OK");
    break;
  case 301:
    console.log("Redirect");
    break;
  default:
    console.log("Unknow status");
}

let isVip = true;

switch (isVip) {
  case true:
    console.log("VIP");
    break;
  case false:
    console.log("BT");
    break;
}

let browserName = "firefox";
switch (browserName) {
  case "chrome":
  case "edge" :
    // gom nhóm 
    console.log("VIP");
    break;
  case false:
    console.log("BT");
    break;
}
