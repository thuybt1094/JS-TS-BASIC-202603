console.log(10 + 5);
// -> 15

console.log(Number("10") + 5);
// -> 105

console.log("10" - 5);
// -> 5
// js sẽ cố gắng ép kiểu thành Number khi gặp dấu trừ, nhân, chia

console.log("10" - 5);

console.log("Mười" - 5);

console.log("10" / 2);


// ------------------------------------------------------------------ //

//lúc đầu giỏ hàng rỗng
let tongTien = 0;

const giaAo = 25000;
// tongTien = 0 + 25000
tongTien += giaAo;

const giaQuan = 30000;
//tongTien = 25000 + 30000
tongTien += giaQuan;

console.log(`Tổng hóa đơn: ${tongTien}`);


// ------------------------------------------------------------------ //

let passwordLength = 5;

// let isPasswordValid = passwordLength >= 8;
// console.log(isPasswordValid);



// ------------------------------------------------------------------ //

console.log(10 == "10");
console.log(0 == false);

console.log(10 === "10");
console.log(0 === false);

let giaUI = "50000";
let giaMongDoi = 50000;

console.log(giaUI == giaMongDoi);
console.log(giaUI === giaMongDoi);


// ------------------------------------------------------------------ //

let isEmailCorrect = true;
let isPasswordCorrect = false;

let canLogin = isEmailCorrect && isPasswordCorrect;
console.log(canLogin);

//Nhap sai ten
let searchByName = false;

//Nhap dung ma san pham
let searchBySKU = true;

let isProductFound = searchByName || searchBySKU;

console.log(`Tìm thấy sản phẩm ${isProductFound}`);

//Mình cần test chức năng Đăng kí tk, nút đăng kí chỉ sáng lên (enable) khi thỏa mãn đồng thời
// //3 đkieen
// 1. tuổi người dùng phải từ 18 trở lên
// 2. mật khẩu phảu có đúng 8 kt
// 3. check box đồng ý phải đc tích

let userAge = 20;
let passwordInput = "Neko1234";
let isTermAccepted = true;

/// Yêu cầu
// 1. tao bien isAgeValid de kiem tra tuoi >=18 hay ko
// 2. tao bien isPasswordValid kie tra mk co dung 8kt
// ket hop toan bo dieu kien de tao bien isSubmitButtonEnabled
// in ra console,log

let isAgeValid = userAge >= 18;
let isPasswordValid = passwordInput.length === 8;
let isSubmitButtonEnabled = isAgeValid && isPasswordValid && isTermAccepted;

console.log(isSubmitButtonEnabled);

// ------------------------------------------------------------------ //

//postfix

let a = 5;
let ketQua1 = a++;

//biểu thức a++ trả ra 5
// sau khi dùng xong, a mới tăng lên
console.log(ketQua1);
console.log(a);

//prefix
let b = 5;
let ketQua2 = ++b;

console.log(ketQua2);
console.log(b);

// //giari thich
// b tang len 6 truoc
// bieu thuc ++b  tra ra 6

let x1 = 5;
console.log(x1++);

let count = 0;
// count++;
++count;
//++count, count += 1, count = count + 1
console.log(count);

// let i = 3;
// //vừa làm 2 việc 1 lúc
// // tính toán và cập nhật biến
// // -> lí do khó đọc. vì nhìn nhanh ko biết
// // nhân 3 hay 4
// //sau dòng này i còn giá trị nào
// //khó debug
// //6
// let resultPostFix = i++ * 2;

// console.log(resultPostFix);
// console.log(i);

let i = 3;
let resultPostFix = i * 2;
++i;

///
//ví dụ mình đang test logic retry của nút submit.
// 1 bạn mới trong team viết đoạn code sau để vừa log vừa giảm/tăng số lần thử

// let retries = 2;
// // retries = 2

// let firstLog = retries++;
// // firstLog = 2 ; retries = 3

// let secondLog = ++retries;
// // secondLog = 4 ; retries = 4

// let canRetry = retries-- > 3;
// canRetry = true ; retries = 3

//đoán output 4 dòng
//viết lại theo cách rõ ràng

let retries = 2;

let firstLog = retries;
console.log(firstLog);

retries++;

++retries;

let secondLog = retries;
console.log(secondLog);

let canRetry = retries > 3;
console.log(canRetry);


// Bài tập
//mình có 1 promotion -> Rule: Nếu KH > 18 tuổi và là thành viên VIP, thì đc giảm 30% giá vé. ngc lại vẫn giữ nguyên

let rawAge = " 25 tuổi";
let rawisVIP = "true";
let rawTicketPrice = "  500.000 đ ";

//yêu cầu
// 1. làm sạch và ép kiểu
// 2. kiểm tra điều kiện. Nếu đủ tính giá sau giảm 30% -> nếu ko giữ nguyên
// 3. in kết quả

let age = Number(rawAge.trim().replaceAll("tuổi", ""));

let isVIP = rawisVIP.trim() === "true";

let price = Number(rawTicketPrice.replace("đ", "").replaceAll(".", "").trim());

let isEligible = (age > 18 && isVIP); 

let finalPrice = price * (1 - isEligible * 0.3);

console.log(finalPrice);

