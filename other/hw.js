// ============================================== //
// Viết 1 function nhận vào điểm 3 môn: Toán, Lý, Hóa.
// Tính tổng điểm.Xác định kết quả dựa trên điều kiện sau:Đỗ: Nếu tổng điểm >= 21 và không có môn nào dưới 5
// Trượt: Các trường hợp còn lại.
// ============================================== //

function tinhTongDiem1(toan, ly, hoa) {
    const scoreTotal = toan + ly + hoa;
    const aboveFive = toan >= 5 && ly >= 5 && hoa >=5;

    if (scoreTotal >= 21 && aboveFive) {
        console.log("Đỗ");
    } else {
        console.log("Trượt");
    }
}

tinhTongDiem1(1,2,3);
tinhTongDiem1(4,5,6);
tinhTongDiem1(7,8,9);

// ============================================== //
// Nếu tổng điểm >=21 HOẶC có một môn xuất sắc (>9 điểm) thì vẫn tính là Đỗ
// ============================================== //

function tinhTongDiem2(toan, ly, hoa) {
    const scoreTotal = toan + ly + hoa;
    const excellentScore = toan >= 9 || ly >= 9 || hoa >=9;

    if (scoreTotal >= 21 || excellentScore) {
        console.log("Đỗ");
    } else {
        console.log("Trượt");
    }
}

tinhTongDiem2(1,9,3);
tinhTongDiem2(4,5,6);
tinhTongDiem2(7,8,9);

// ============================================== //
// Viết chương trình nhập vào một tháng và một năm. Sử dụng cấu trúc switch-case để in ra số ngày của tháng đó.
// Tháng 1, 3, 5, 7, 8, 10, 12: Có 31 ngày.
// Tháng 4, 6, 9, 11: Có 30 ngày.
// Tháng 2:
// Nếu là năm nhuận: Có 29 ngày.
// Nếu không phải năm nhuận: Có 28 ngày.
// (Gợi ý: Năm nhuận là năm chia hết cho 400 hoặc chia hết cho 4
// ============================================== //

function printDays(month, year) {
    switch (month) {
        case 1: 
        case 3: 
        case 5: 
        case 7: 
        case 8:
        case 10:      
        case 12:      
        console.log("Có 31 ngày");
        break;
        
        case 4: 
        case 6: 
        case 9: 
        case 11:     
            console.log("Có 30 ngày");
        break;

        case 2:
            {const isNamNhuan = year % 400 === 0 || year % 4 === 0;
    
            if (isNamNhuan) {
                console.log("Có 29 ngày");
            } else {
                console.log("Có 28 ngày");
                }
        break;
            }
        default:
            console.log("Tháng không hợp lệ");
        }
}

printDays(3,1600)

// ============================================== //
// Cho trước số nguyên dương number. 
// Bạn hãy viết chương trình để in ra phép nhân từ 1 đến 10 của number cho trước (bảng cửu chương của number)
// ============================================== //

function inBangCuuChuong(number) {
    for (i = 1; i <= 10; i++) {
        console.log(`${number} x ${i} = ${i * number}`);
    }
}

inBangCuuChuong(5)

// ============================================== //
// in 10 bảng cửu chương 1 -> 10
// ============================================== //

function inBangCuuChuongFull() {
    for (number = 1; number <= 10; number++) {
        for (i = 1; i <= 10; i++) {
            console.log(`${number} x ${i} = ${i * number}`);
        }
    }
}

inBangCuuChuongFull()

// ============================================== //
// Viết chương trình giải bài toán sau:
// Vừa gà vừa chó. Bó lại cho tròn. Ba mươi sáu con, Một trăm chân chẵn. Hỏi có bao nhiêu con mỗi loại?
// ============================================== //

function tinhGaCho(){
    // ga 2 chan
    // cho 4 chan
    // tong 100 chan
    // 36 con
    // (n)gà x chân + (m)chó x chân = 100
    // n + m = 36 -> n = 36 - m
    // n x 2 + m x 4 = 100
    // (36 - m)x2 + mx4 = 100 -> 72 - 2m + 4m = 100 -> 72 + 2m = 100 -> m = (100 - 72)/2 = 14

    
    for (i = 1; i <= 36; i++) {
        if (i * 2 + (36-i) * 4 === 100) {
          console.log(`gà: ${i}`);
          console.log(`chó: ${36 - i}`);
          
            return;
        }
    }
}

tinhGaCho()

// ============================================== //
// Cho trước số nguyên number. Bạn hãy viết chương trình để in ra số lượng các số chia hết cho 3 trong các số từ 1 đến number
// ============================================== //

let countChiaHetCho3 = 0;

function print(number) {
    for (i = 1; i <= number; i++) {
        if (i % 3 === 0) {
            countChiaHetCho3++;
        }
    }

    console.log(`Tổng số lượng các số chia hết cho 3: ${countChiaHetCho3}`);
  
}

print(332)

// ============================================== //
// Cho một mảng số nguyên $A$ đã được sắp xếp theo thứ tự tăng dần và một số nguyên $x$. 
// Hãy chèn $x$ vào mảng sao cho sau khi chèn, mảng vẫn đảm bảo thứ tự tăng dần. 
// Ví dụ cho mảng: [1,2,3,5,6] và số 4 -> [1,2,3,4,5,6]
// ============================================== //

function printArrSplice(arr, number) {
    for (i = 0 ; i < arr.length; i++) {
        if (arr[i] >= number) {
            arr.splice(i, 0, number);
            console.log(arr);
            return; 
        }
    } 
}

printArrSplice([1,2,3,5,6],4)
