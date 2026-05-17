//Class cha
class BasePage {
  header = "#thanhMenuTrenCung";

  bamNutTrangChu() {
    console.log(`Đã click nút Home trên thanh ${this.header}`);
  }

  chupManHinh(tenFile) {
    console.log(`Đã cjupj màn hình và lưu thành ${tenFile}.png`);
  }
}

//class con
class LoginPage extends BasePage {
  nutDangNhap = "#loginButton";

  dienMatKhau() {
    console.log(`Đã điền mật khẩu vào nút ${this.nutDangNhap}`);
    this.chupManHinh("sau khi dien pass");
  }
}

let trangDangNhap = new LoginPage();

trangDangNhap.bamNutTrangChu();
trangDangNhap.dienMatKhau();

// super
//TH1: Không cần truyền gì, cũng ko cần viết constructor ở con
//Khi cha ko cần dữ liệu bên ngoài, hoặc cha có constructor() nhưng ko nhận tham số
// con thường ko cần viết gì nữa

//TH2: Con truyền giá trị cố định lên cho cha
// class BasePage2 {
//   url = "";
//   constructor(url) {
//     this.url = url;
//   }
//   moTrang() {
//     console.log(`Mở trang ${this.url}`);
//   }
// }

// //class con
// class LoginPage2 extends BasePage2 {
//   nutDangNhap = "#loginButton";
//   constructor() {
//     super("/login");
//   }
// }
// let login2 = new LoginPage2();
// login2.moTrang();

//TH3: Ci nhận 1 tham số -> rồi truyền tham số lên cho cha
// class BasePage3 {
//   url = "";
//   constructor(url) {
//     this.url = url;
//   }
//   moTrang() {
//     console.log(`Mở trang ${this.url}`);
//   }
// }
// //class con
// class LoginPage3 extends BasePage3 {
//   nutDangNhap = "#loginButton";
//   constructor(url) {
//     super(url);
//   }
// }

// let login3 = new LoginPage3("/login");
// login3.moTrang();

//khi mà khởi tạo thằng con kế thừa cha
// -> vào construct

class BasePage4 {
  chupManHinh(url) {
    console.log(`Chụp mành hình ${url}`);
  }
}
//class con
class MobilePage extends BasePage4 {
  //ghi đè hoàn toàn hàm cha (Override)

  chupManHinh(tenFile) {
    console.log(`Chụp nguyên trang mobile ${tenFile}`);
  }
}
let mobile = new MobilePage();
mobile.chupManHinh("123");

//extend  - Giữ nguyên hàm cha _ thêm logic, -> gọi super.tenHam()

class SreenPage extends BasePage4 {
  chupManHinh(tenFile) {
    //Gọi hàm gốc của cha trước
    //Thêm logic riêng của con
    console.log(`Chụp nguyên trang Screen ${tenFile}`);
    super.chupManHinh(tenFile);
  }
}

let screenTest = new SreenPage();
screenTest.chupManHinh("lỗi đăng nhập");

//BT: Gom báo cáo tét bằng kế thừa
//Tạo class BaseSuite nhận tenSuite làm tham số
//BaseSuite có method inTieuDe() in ra tên suite
//BaseSuite óc method inKetQua(danhsachCase) dùng for ... of và destructoring để in từng tcs
//Tạo LoginSuite extends BaseSuite,
/// loginsuite extends inTieuDe() rồi in thêm "Trang kiểm thử /login"
//Data test
// let loginCases = [
//   { ten: "Đăng nhập đúng tài khoản", trangThai: "passed", thoiGian: 12000 },
//   { ten: "Sai mật khẩu", trangThai: "failed", thoiGian: 5000 },
//   { ten: "Email rỗng", trangThai: "passed", thoiGian: 8000 },
// ];

class BaseSuite {
  tenSuite = "";
  constructor(tenSuite) {
    this.tenSuite = tenSuite;
  }
  inTieuDe() {
    console.log(`=== Suite: ${this.tenSuite} ===`);
  }
  inKetQua(danhSachCase) {
    for (const testcase of danhSachCase) {
      const { ten, trangThai, thoiGian } = testcase;
      console.log(`Test: ${ten} | Status: ${trangThai} | Time: ${thoiGian}ms`);
    }
  }
}
class LoginSuite extends BaseSuite {
  constructor(tenSuite) {
    super(tenSuite);
  }
  inTieuDe() {
    super.inTieuDe();
    console.log("Trang kiểm thử: /login");
  }
}
let loginSuite = new LoginSuite("Login Test Suite");
loginSuite.inTieuDe();
loginSuite.inKetQua(loginCases);

// check lại
// class BaseSuite {

//  tenSuite;

// constructor(tenSuite) {

// this.tenSuite = tenSuite;

//  }

// inTieuDe() {

// console.log(`=== ${this.tenSuite} ===`);

//  }

// inKetQua(danhSachCase) {

// for (const { ten, trangThai, thoiGian } of danhSachCase) {

// console.log(

// `TC: ${ten} | Status: ${trangThai} | Time: ${thoiGian}ms`

//  );

//  }

//  }

// }

// class LoginSuite extends BaseSuite {

// inTieuDe() {

// super.inTieuDe();

// console.log("Trang kiểm thử: /login");

//  }

// }

// let loginCases = [

//  { ten: "Đăng nhập đúng tài khoản", trangThai: "passed", thoiGian: 12000 },

//  { ten: "Sai mật khẩu", trangThai: "failed", thoiGian: 5000 },

//  { ten: "Email rỗng", trangThai: "passed", thoiGian: 8000 },

// ];

// const loginSuite = new LoginSuite("Login Test Suite");

// loginSuite.inTieuDe();

// loginSuite.inKetQua(loginCases);





