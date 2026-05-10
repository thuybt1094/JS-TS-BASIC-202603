// Tình huống: Bạn đang viết một bản kiểm tra trước khi release. Hệ thống trả về dữ liệu thô từ UI và config. Bạn cần xử lý thành báo cáo rõ ràng.

// Dữ liệu đầu vào:

let rawProjectName = "   Neko CRM   ";
let rawEnvName = "   ";
let rawPassRate = "82";
let rawHasReport = "true";
let rawCriticalMessage = "   ";
let browserUsed = "chrome"; // "chrome", "firefox", "safari", "edge"


// Yêu cầu:
// Dùng .trim() để làm sạch rawProjectName và rawEnvName.
// Nếu rawEnvName sau khi trim() là rỗng -> gán environment = "Development". Nếu không rỗng -> dùng chính giá trị đã làm sạch.

let projectName = rawProjectName.trim();
let cleanEnvName = rawEnvName.trim();
let environment;

if (cleanEnvName) {
    environment = cleanEnvName;
} else {
    environment = "Development";
}
// console.log(environment);


// Ép rawPassRate sang Number.
let passRate = Number(rawPassRate);
// console.log passRate);

// Ép rawHasReport sang Boolean đúng cách.
let hasReport = rawHasReport === "true"
// console.log(hasReport);

// ------------------------------------------------------ //

// Tạo hasCriticalBug theo quy tắc:
// nếu message là null hoặc undefined -> false
// nếu sau trim() là rỗng -> false
// ngược lại -> true

let hasCriticalBug;

if (rawCriticalMessage === null || rawCriticalMessage === undefined) {
    hasCriticalBug = false;
} else if (rawCriticalMessage.trim() === "") {
    hasCriticalBug = false;
} else {
    hasCriticalBug = true;
}
// Thầy cho em hỏi nếu viết thế này thì có oke không ạ
// hasCriticalBug = rawCriticalMessage != null && rawCriticalMessage.trim() !== ""
// console.log(hasCriticalBug);

let criticalBugMessage = hasCriticalBug ? "Có bug nghiêm trọng" : "Không có bug nghiêm trọng";

// ------------------------------------------------------ //

// Dùng if / else if để xếp hạng:
// >= 95 -> "EXCELLENT"
// >= 80 -> "GOOD"
// >= 60 -> "NEEDS IMPROVEMENT"
// còn lại -> "CRITICAL"

let statusRank;
if  (passRate >= 95) {
    statusRank = "EXCELLENT";
} else if (passRate >= 80) {
    statusRank = "GOOD";
} else if (passRate >= 60) {
    statusRank = "NEEDS IMPROVEMENT";
} else {
    statusRank = "CRITICAL";
}
// console.log(statusRank);


// ------------------------------------------------------ //


// Dùng switch/case để gán tên engine cho browserUsed:
// chrome -> "Chromium"
// edge -> "Chromium"
// firefox -> "Gecko"
// safari -> "WebKit"
// Nếu không khớp -> "Unknown"
let engineName;
switch (browserUsed) {
  case "chrome":
  case "edge":
    engineName = "Chromium";
    break;
  case "firefox":
    engineName = "Gecko";
    break;
case "safari":
    engineName = "WebKit";
    break;
  default:
    engineName = "Unknown";
}
// console.log(browserUsed);

// ------------------------------------------------------ //

// Dùng toán tử 3 ngôi để tạo message cho report:
// nếu hasReport là true -> "Có report"
// ngược lại -> "Chưa có report"

let message = hasReport ? "Có report" : "Chưa có report";
// console.log(message);

// ------------------------------------------------------ //

// Tạo isReadyToRelease theo quy tắc:
// nếu pass rate dưới 80 -> false
// nếu có critical bug -> false
// nếu chưa có report -> false
// còn lại -> true
// In báo cáo ra console.

let isReadyToRelease;

if  (passRate < 80) {
    isReadyToRelease = false;
} else if (hasCriticalBug) {
    isReadyToRelease = false;
} else if (!hasReport) {
    isReadyToRelease = false;
} else {
    isReadyToRelease = true;
}
// console.log(isReadyToRelease);
let readyMessage = isReadyToRelease ? "YES" : "NO";

// ------------------------------------------------------ //

// Expected output
// Project:         Neko CRM
// Environment:     Development
// Browser:         chrome
// Engine:          Chromium

// Pass Rate:       82.00%
// Grade:           GOOD
// Report:          Có report
// Critical Bug:    Không có bug nghiêm trọng

// Ready:           YES

console.log(`Project: ${projectName}`);
console.log(`Environment: ${environment}`);
console.log(`Browser: ${browserUsed}`);
console.log(`Engine: ${engineName}`);
console.log("");
console.log(`Pass Rate: ${passRate.toFixed(2)}%`);
console.log(`Grade: ${statusRank}`);
console.log(`Report: ${message}`);
console.log(`Critical Bug: ${criticalBugMessage}`);
console.log("");
console.log(`Ready: ${readyMessage}`);
