let sanPham = ["AoThun", "AoSoMi", "MuLuoiTrai"];

console.log(sanPham[1]);
console.log(sanPham[2]);
console.log(sanPham[0]);

console.log(sanPham[10]);

let ketQuaTimKiem = ["iphone 13", "iphone 20"];

console.log(ketQuaTimKiem.length);

let danhSachLoi = [];

//chay test ... phat hien ra loi
danhSachLoi.push("Nút đăng nhập ko bấm đc");
danhSachLoi.push("sAi mầu chữ ở footer");

console.log(danhSachLoi);

let cacTrangThaiChoChoPhep = ["PENDING", "APPROVED", "SHIPPED"];

let trangThaiThucTe = "APPROVED";

if (cacTrangThaiChoChoPhep.includes(trangThaiThucTe)) {
  console.log("TEST PASS: TRANG THAI HIEN THI DUNG LOGIC");
} else {
  console.log("TEST FAIL");
}

let lichSuDuyetWeb = ["Trang chủ", "sản phẩm", "Giỏ hàng"];

let trangVuaThoat = lichSuDuyetWeb.pop();

console.log(lichSuDuyetWeb);

console.log(trangVuaThoat);

let hangChoHoTro = ["Khách A", "Khách B", "Khách C"];

let khachHangDuocXuLy = hangChoHoTro.shift();

console.log(hangChoHoTro);
console.log(khachHangDuocXuLy);

let danhSachUuTien = ["Bug Thuong", "Bug Giao dien"];

danhSachUuTien.unshift("BUG SIEU TO KHONG LO");
console.log(danhSachUuTien);

let gioHang = [
  "Bàn phím cơ",
  "Chuột gamin",
  "Màn hình 27 inch",
  "Tai nghe bluetooth",
];

//1. In ra tổng số sản phẩm
// 2. In ra sản phẩm đầu tiên
//3. In ra tên sản phẩm cuối cùng
//4. thêm 1 cái lót chuột vào cuối giỏ hàng

console.log(gioHang.length);
console.log(gioHang.shift());
console.log(gioHang.pop());
gioHang.push("lót chuột");
console.log(gioHang);


