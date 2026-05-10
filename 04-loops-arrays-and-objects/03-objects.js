let userTest = {
  hoTen: "Neko Nguyen",
  tuoi: 30,
  isVip: true,
  quyenHan: ["read", "write"],
};

console.log(userTest);
console.log(userTest.hoTen);

let apiData = {
  "firt-name": "neko",
  "content-type": "text/html",
  "so dien thoai": "01234567",
};
console.log(apiData["firt-name"]);

//Trường hợp rất hay dùng trong AT: Khi key đc lưu trong 1 biến khac
// (dynamic key)

let userTest2 = {
  hoTen: "Neko Nguyen",
  email: "neko@gmail.com",
};

let thongTinCanLay = "email";

console.log(userTest2.thongTinCanLay);

console.log(userTest2[thongTinCanLay]);

let config = { browser: "Chrome", timeout: 5000 };
//Ko in ra dc
console.log(`Ban đầu ${config}`);

console.log("Ban đầu", config);

config.timeout = 10000;
console.log("Sau khi sửa timeout", config);

//thêm dữ liệu (gọi tên key chưa tồn tại + giá trị)
config.isHeadless = true;
console.log("Sau khi thêm isHeadless", config);

//Xóa dữ liệu (dùng từ khóa delete)
delete config.browser;

console.log("Sau khi xóa browser", config);

const user3 = { ten: "neko" };
//vẫn thêm sửa xóa đc ruột bên trong, const chỉ cấm bạn gán lại cả object bằng dấu bằng

user3.ten = "meo";
console.log(user3);

// user3 = { ten: "meo" };
// console.log(user3);


let spTiki = {id: "SP01", ten: "Bàn phím", gia: 50000 };

let danhSachKey = Object.keys(spTiki);
console.log(danhSachKey);

console.log(danhSachKey.includes("gia"));

let danhSachValue = Object.values(spTiki);
console.log(danhSachValue);
console.log(danhSachValue.includes("Bàn phím"));

let danhSachCap = Object.entries(spTiki);
console.log(danhSachCap);
// [ [ 'id', 'SP01' ], [ 'ten', 'Bàn phím' ], [ 'gia', 50000 ] ]
console.log(danhSachCap[0]);
// [ 'id', 'SP01' ]
console.log(danhSachCap[0][1]);
// 'SP01'
console.log(Object.hasOwn(spTiki, "id2"));

//Bài tập

let apiResponse = {
  userId: 9999,
  userName: "neko_auto",
  role: "admin",
  isActive: "yes",
};

//Dùng Objet.keys để đếm xem API trả về bao nhiêu trường
//Dùng Objet.hasOwn() để kiểm tra 3 trường require "userId", "email", "role"
// kiểm tra xem giá trị isActive có đúng kiểu boolean không (dùng typeof ) Nếu sai kiểu, in ra cảnh báo
// Dùng Object.values + includes đeer kieerm tra xem co gai tri nao la "admin"

let soTruong = Object.keys(apiResponse).length;

console.log(`Số trường API trả về ${soTruong}`);

console.log(`Có userId, ${Object.hasOwn(apiResponse, "userId")}`);
console.log(`Có email, ${Object.hasOwn(apiResponse, "email")}`);
console.log(`Có role, ${Object.hasOwn(apiResponse, "role")}`);

if (typeof apiResponse.isActive !== "boolean") {
  console.log("isActive không đún gkieeur boolean");
}

let hasAdmin = Object.values(apiResponse).includes("admin");
console.log(`Có chứa admin hay ko ${hasAdmin}`);

let danhSachUser = [
  { id: 2, ten: "teo", role: "user" },
  { id: 3, ten: "teo2", role: "user2" },
];