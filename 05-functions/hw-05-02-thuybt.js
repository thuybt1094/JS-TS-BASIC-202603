// ===================================================================
// Bài 2: Chuẩn hóa dữ liệu test case import từ spreadsheet
// ===================================================================

// ---- Bộ data test ----

const testCaseConfig = {
  minPriority: 1,
  maxPriority: 5,
};

const rawRows = [
  [" TC_LOGIN_001 ", "login", "1", " smoke ", "active"],
  ["TC_LOGIN_001", "login", "2", "regression", "active"],
  ["TC_SEARCH_002", "search", "0", "smoke", "active"],
  ["TC_CART_003", "", "3", "checkout", "inactive"],
  ["TC_PAY_004", "payment", "2", " critical ", "ACTIVE"],
  ["TC_ORDER_005", "order", "5", "sanity", "inactive"],
  ["TC_ORDER_006", " order ", "4", " SANITY ", "active"],
  ["LOGIN_007", "login", "2", "smoke", "active"],
  ["TC_USER_008", "user", "6", "regression", "active"],
  ["TC_API_009", "api", "3", "api", "disabled"],
  ["TC_API_010", "api", "2", " api ", "active"],
  ["TC_API_010", "api", "2", " api ", "active"],
  ["TC_REPORT_011", "report", "1", " nightly ", "INACTIVE"],
  [" TC_EMPTY_012 ", "   ", "2", "misc", "active"],
];

// ===================================================================
// Hàm chính
// ===================================================================

function chuanHoaDanhSachTest(rawRows, config = {}) {
  // ------------------------------------------------------------------
  // Destructuring config + default value
  // ------------------------------------------------------------------
  const { minPriority = 1, maxPriority = 5 } = config;

  const validCases = [];
  const invalidCases = [];

  // Mảng lưu các id đã gặp -> dùng để phát hiện trùng lặp
  const seenIds = [];
  let duplicateCount = 0;

  // ------------------------------------------------------------------
  // Dùng for để duyệt rawRows (YC bắt buộc: không dùng map/filter/find)
  // ------------------------------------------------------------------
  for (let i = 0; i < rawRows.length; i++) {
    // ----------------------------------------------------------------
    // YC1: Array destructuring để bóc từng cột
    // ----------------------------------------------------------------
    const [rawId, rawModule, rawPriority, rawTag, rawStatus] = rawRows[i];

    // ----------------------------------------------------------------
    // YC2: Chuẩn hóa dữ liệu
    // - Bài 02: trim(), toUpperCase(), toLowerCase(), Number()
    // ----------------------------------------------------------------
    const id = rawId.trim().toUpperCase();
    const module = rawModule.trim().toLowerCase();
    const priority = Number(rawPriority.trim());
    const tag = rawTag.trim().toLowerCase();
    const status = rawStatus.trim().toLowerCase();

    // ----------------------------------------------------------------
    // YC3: Kiểm tra hợp lệ
    // - Bài 02: .startsWith() hoặc slice() để check prefix
    // - Bài 02: .includes() để check khoảng trắng
    // - Bài 03: if/else để rẽ nhánh
    // - Bài 04: array.includes() để check trùng id
    // ----------------------------------------------------------------
    const errors = [];

    // id phải bắt đầu bằng "TC_"
    if (id.slice(0, 3) !== "TC_") {
      errors.push(`ID "${id}" không bắt đầu bằng "TC_"`);
    }

    // module không được rỗng
    if (module === "") {
      errors.push("Module không được để trống");
    }

    // priority phải nằm trong khoảng minPriority đến maxPriority
    if (priority < minPriority || priority > maxPriority) {
      errors.push(
        `Priority ${priority} ngoài khoảng cho phép (${minPriority}-${maxPriority})`
      );
    }

    // status chỉ được là "active" hoặc "inactive"
    if (status !== "active" && status !== "inactive") {
      errors.push(`Status "${status}" không hợp lệ (chỉ chấp nhận: active, inactive)`);
    }

    // Kiểm tra trùng id
    let isDuplicate = false;
    if (seenIds.includes(id)) {
      isDuplicate = true;
      duplicateCount++;
      errors.push(`ID "${id}" bị trùng lặp`);
    }

    // ----------------------------------------------------------------
    // Phân loại: hợp lệ hay không hợp lệ
    // ----------------------------------------------------------------
    // Tạo object mới cho mỗi test case (YC bắt buộc 4)
    const testCaseObj = {
      id,
      module,
      priority,
      tag,
      status,
    };

    if (errors.length === 0) {
      validCases.push(testCaseObj);
      // Chỉ thêm vào seenIds khi test case hợp lệ
      // -> lần đầu gặp id sẽ valid, lần sau gặp lại sẽ bị duplicate
      seenIds.push(id);
    } else {
      invalidCases.push({
        ...testCaseObj,
        errors,
      });
    }
  }

  // ------------------------------------------------------------------
  // YC4: Trả về object kết quả
  // ------------------------------------------------------------------
  return {
    validCases,
    invalidCases,
    summary: {
      total: rawRows.length,
      valid: validCases.length,
      invalid: invalidCases.length,
      duplicateIds: duplicateCount,
    },
  };
}

// ===================================================================
// Chạy test
// ===================================================================

const result = chuanHoaDanhSachTest(rawRows, testCaseConfig);

console.log("========== VALID CASES ==========");
for (const tc of result.validCases) {
  console.log(tc);
}

console.log("\n========== INVALID CASES ==========");
for (const tc of result.invalidCases) {
  console.log(tc);
}

console.log("\n========== SUMMARY ==========");
console.log(result.summary);
