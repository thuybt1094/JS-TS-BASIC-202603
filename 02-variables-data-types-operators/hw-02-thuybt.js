// Bài 1
// Tình huống Automation: Bạn cần kiểm tra xem tính năng Giảm giá (Discount) trên trang Shopee hoạt động có đúng logic toán học không.

// Dữ liệu đầu vào:
// Giá gốc (Lấy từ UI - String): " 1.000.000 đ "
// Phần trăm giảm (Lấy từ DB - Number): 20 (tức là 20%)
// Giá sau giảm (Lấy từ UI - String): " 800.000 đ "
// Yêu cầu: Viết code để:

// Làm sạch và chuyển đổi Giá gốc về Number.
let stringPrice = " 1.000.000 đ ";
let numberPrice = Number(stringPrice.trim().slice(0,-1).replaceAll(".",""));
console.log(numberPrice);

// Tính toán giá mong đợi: Giá gốc * (100 - 20) / 100.
let salePrice = numberPrice * (100 - 20) / 100;
console.log(salePrice);

// ---------------------------------------------------------------------------------- //

// Bài 2
// Bạn đang viết script test cho trang thương mại điện tử. Bạn lấy được thông tin đơn hàng từ giao diện web, nhưng dữ liệu trả về rất “bẩn” (lẫn lộn chữ, số, ký tự lạ, khoảng trắng).
// Nhiệm vụ của bạn là làm sạch chúng, tính toán tổng tiền, và in ra một cái Hóa đơn (Receipt) chuẩn chỉnh.

// Dữ liệu đầu vào
// let tenSanPham = "   macbook pro m3   ";
// let giaGoc = "Price: 30,000,000 vnđ";
// let soLuong = "Sl: 2 máy";
// let maGiamGia = "DISCOUNT CODE: 10% OFF";

// Bạn phải viết code xử lý để khi chạy console.log, màn hình hiện ra y hệt như sau:
// HÓA ĐƠN THANH TOÁN - ID: #0002
// Sản phẩm: MACBOOK PRO M3
// Đơn giá: 30000000
// Số lượng: 2
// Tổng tiền (Gốc): 60000000
// Giảm giá: 10%
// THÀNH TIỀN: 54.000.000 VNĐ

let tenSanPham = "   macbook pro m3   ";
let giaGoc = "Price: 30,000,000 vnđ";
let soLuong = "Sl: 2 máy";
let maGiamGia = "DISCOUNT CODE: 10% OFF";

let unitPrice = Number(giaGoc.slice(7,-3).replaceAll(",","").trim());
// console.log(unitPrice);

let quantity = Number(soLuong.slice(4,-3).trim());
// console.log(quantity);

let subTotal = unitPrice * quantity;
// console.log(subTotal);

let discountPct = Number(maGiamGia.slice(15,-5).trim());
// console.log(discountPct);

let totalAmount = subTotal * (100 - discountPct) / 100;
// console.log(totalAmount);

let totalAmountVND = String(totalAmount).slice(0,2) + "." + String(totalAmount).slice(2,5) + "." + String(totalAmount).slice(-3) + " VNĐ";
// console.log(totalAmountVND);


console.log(`HÓA ĐƠN THANH TOÁN - ID: #0002`);
console.log(`Sản phẩm: ${tenSanPham.trim().toUpperCase()}`);
console.log(`Đơn giá: ${unitPrice}`);
console.log(`Số lượng: ${quantity}`);
console.log(`Tổng tiền (Gốc): ${subTotal}`);
console.log(`Giảm giá: ${discountPct}%`);
console.log(`THÀNH TIỀN: ${totalAmountVND}`);

// sửa bài tập
let price = 54000000;
console.log(price.toLocaleString("vi-VN"));
console.log(price.toLocaleString("en-US"));

let moneyText = price.toLocaleString("vi-VN", {
  style: "currency",
  currency: "VND",
});
console.log(moneyText);
// 54.000.000 ₫ 


// 54M -> 54.000.000 dùng slice
const finalPrice = "54000000";
const resultFinalPrice =
  String(finalPrice).slice(0, 2) +
  "." +
  String(finalPrice).slice(2, 5) +
  "." +
  String(finalPrice).slice(-3);

console.log(resultFinalPrice);

let formated = `${finalPrice.slice(0, -6)}.${finalPrice.slice(-6, -3)}.${finalPrice.slice(-3)}`;
console.log(formated);

// ======= //
// let maGiamGia = "DISCOUNT CODE: 10% OFF";
// //ddeer lấy
// let phanTramGiamGia = Number(
//   maGiamGia.slice(maGiamGia.indexOf(":") + 2, maGiamGia.indexOf("%")),
// );
// console.log(phanTramGiamGia);
// let phanTramGiamGia2 = Number(
//   maGiamGia.replace("DISCOUNT CODE:", "").replace("% OFF", ""),
// );

// console.log(phanTramGiamGia2);