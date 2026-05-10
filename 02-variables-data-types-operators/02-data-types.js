// length
let matKhau = "123456";
console.log(matKhau.length);


// trim()
let emailWeb = "     user01  ";
let emailChuan = emailWeb.trim();
console.log(emailChuan);
console.log(emailChuan.length);


// toUpperCase() và toLowerCase()
let tenSanPham = "iPhOne 15";
console.log(tenSanPham.toLowerCase());


// includes
let thongBao = "Đăng nhập thất bại. Sai mật khẩu";
console.log(thongBao.includes("thành công"));
console.log(thongBao.includes("thất bại"));

let msg = "login Error : invalid password"
console.log(msg.includes("error"));

// replace
let giaTienString = "$1900";
let giaTienNumber = giaTienString.replace("$","")
console.log(giaTienNumber);

// index & subString, slice
let errorMsg = "Error 404: Page not found";
let indexOfHaiCham = errorMsg.indexOf(":");
let pageNotFound = errorMsg.slice(indexOfHaiCham + 2);
console.log(pageNotFound);

// y/c lấy ra đc ORD-2026-123. dùng indexOf + length + slice
let rawText = "     Order ID: ORD-2026-123 | Status: Success"
let trimmedText = rawText.trim();
// let textLength = trimmedText.length;
// console.log(textLength);

let start = trimmedText.indexOf(":");
let end = trimmedText.indexOf("|");
let orderId = trimmedText.slice(start + 1,end).trim();
console.log(orderId);


// Number()
let s1 = "100";
console.log(Number(s1));

let s2 = "100px";
console.log(Number(s2));
console.log(parseInt(s2));
console.log(parseInt("10.999"));
console.log(parseFloat("10.999kg"));


// toFixed()
console.log(19);

// padStart kết hợp dấu packstick
// thêm số 0 để orderNumber có 5 số
let orderNumber = 5;

 let orderNumberStr = String (orderNumber);

 let orderID = orderNumberStr.padStart(5,"0");

console.log(`SP-${orderID}`);

// thêm 20 dấu chấm ở cuối

// Nối chuỗi bằng dấu +
let userName = "neko";

let age = 18 ;

console.log("Tên: " + userName + "- Tuổi: " + age);

// Ngăn cách = dấu phẩy
console.log("Tên: ", userName, "- Tuổi: ",age);

// backtick
console.log(`Tên: ${userName} - Tuổi: ${age}`);

// chain method
let amount = 9.5;
// -> "009.50"
console.log(amount.toFixed(2).padStart(6,0));









