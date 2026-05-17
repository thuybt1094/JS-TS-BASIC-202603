## OOP và Class

### Object

Ví dụ: học sinh A

```js
{
  ten: "...",
  tuoi: ...
}
```

Ví dụ: học sinh B

```js
{
  ten: "...",
  tuoi: ...
}
```

### Class

Class có thể hiểu như một bản vẽ thiết kế hoặc nhà máy đúc khuôn.

Ví dụ:

- `class` là bản vẽ thiết kế ngôi nhà.
- Trên bản vẽ có thông tin:
  - Nhà có mấy cửa sổ.
  - Màu sơn là gì.
  - Cấu trúc ngôi nhà như thế nào.
- `object` là ngôi nhà thực tế được xây từ bản vẽ đó.
- Từ một bản thiết kế, có thể thuê thợ xây ra 100 ngôi nhà thật.

Mỗi ngôi nhà được gọi là một `object`, hay còn gọi là `instance` / thực thể.

Ví dụ:

- Nhà số 1 sơn màu xanh.
- Nhà số 2 sơn màu đỏ.
- Cả hai nhà có thể khác màu sơn, nhưng cấu trúc vẫn giống nhau.

### Cú pháp cốt lõi

Một `class` thường có 2 thành phần chính:

- Thuộc tính (`property`)
- Phương thức (`method`)

Tên `class` bắt buộc nên viết hoa chữ cái đầu theo kiểu `PascalCase` để phân biệt với biến thông thường.

Ví dụ:

```js
class HocVien {}
class LoginPage {}
class ShoppingCart {}
```

### Thuộc tính trong class

Có 2 cách khai báo thuộc tính trong `class`.

#### Cách 1: Gán trong `constructor()`

Cú pháp:

```js
this.ten = giaTri;
```

Vị trí:

- Nằm trong hàm `constructor()`.

Khi nào dùng:

- Khi giá trị phụ thuộc vào tham số truyền vào từ bên ngoài.

#### Cách 2: Class field

Cú pháp:

```js
ten = giaTri;
```

Lưu ý:

- Khai báo bên ngoài `constructor()`.
- Không cần dùng `this`.
- Thường đặt ở đầu `class`, trước `constructor()`.

Khi nào dùng:

- Khi giá trị cố định.
- Khi giá trị không thay đổi theo từng object.

### Nguyên tắc vàng

- Mọi thuộc tính nên được khai báo ở `class field` trước.
- `constructor()` chỉ dùng để gán lại giá trị cho những thuộc tính cần nhận tham số từ bên ngoài.
- Nếu `class` không cần:
  - Nhận tham số.
  - Gán lại giá trị.
  - Chạy logic khởi tạo.

=> Có thể bỏ `constructor()`.

### Luồng tạo một object từ class

Ví dụ:

```js
let hv = new HocVien("a", 10);
```

Các bước xảy ra:

1. Lệnh `new` tạo ra một object rỗng `{}` và gán `this` cho object đó.
2. `class fields` chạy trước, gán các giá trị cố định vào object.
3. `constructor()` chạy sau, gán lại các giá trị động từ tham số truyền vào.

### `constructor()` - Trái tim của class

`constructor()` là một hàm đặc biệt trong `class`.

Đặc điểm:

1. Tự động chạy:
   - JavaScript gọi `constructor()` ngay lập tức mỗi khi dùng từ khóa `new` để tạo object mới.
   - Không bao giờ cần gọi `constructor()` bằng tay.
2. Chỉ có duy nhất một:
   - Mỗi `class` chỉ được phép có một hàm `constructor()`.

Nhiệm vụ chính:

- Gán lại giá trị ban đầu cho các thuộc tính (`this.xxx`) của object đang được tạo ra.
- Có thể hiểu là bước lắp ráp linh kiện cho ngôi nhà.

### Phương thức (`method`)

Phương thức là hành động của object.

Object có thể có các hàm để mô tả hành động mà object thực hiện sau khi được tạo ra từ `class`.

Trong `method`, `this` chính là object hiện tại, tức là object đang gọi hàm.

### Hai cách viết method

```js
class ViDu {
  // Method thường - shorthand (khuyến nghị dùng)
  chaoHoi() {}

  // Arrow function gán vào class field
  tamBiet = () => {};
}
```

#### Method thường

- `this` phụ thuộc vào object gọi method.
- Bộ nhớ: dùng chung một bản cho mọi object, tiết kiệm hơn.
- Kế thừa: class con có thể override.

#### Arrow function

- `this` luôn bị khóa cứng vào object, không bị lạc `this`.
- Bộ nhớ: mỗi object tạo ra một bản riêng, tốn bộ nhớ hơn.
- Kế thừa: class con không thể override theo cách thông thường.

### Quy tắc đơn giản

- Mặc định luôn dùng method thường.
- Chỉ dùng arrow function khi chắc chắn method đó sẽ bị tách ra khỏi object để truyền vào hàm khác, ví dụ callback.

### Từ khóa `this` trong class

- `this` trong object là người gọi hàm.
- Trong class, nguyên tắc hoạt động của `this` cũng tương tự.
