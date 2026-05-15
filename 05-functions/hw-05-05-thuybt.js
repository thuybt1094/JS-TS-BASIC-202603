// ===================================================================
// Bài 5: Lọc danh sách test cần chạy lại bằng map, filter, find
// ===================================================================

// ---- Bộ data test ----

const rawRuns = [
  { id: " tc_login_001 ", module: " login ", status: " FAIL ", owner: "an", priority: 1, enabled: true },
  { id: "TC_SEARCH_002", module: "search", status: "pass", owner: "binh", priority: 2, enabled: true },
  { id: " tc_cart_003 ", module: " cart ", status: " flaky ", owner: " chi ", priority: 1, enabled: true },
  { id: "TC_PAY_004", module: "payment", status: "fail", owner: "", priority: 1, enabled: true },
  { id: " TC_USER_005 ", module: " user ", status: " skip ", owner: "duy", priority: 3, enabled: true },
  { id: "TC_REPORT_006", module: "report", status: "fail", owner: "ha", priority: 2, enabled: false },
  { id: " ", module: "api", status: "fail", owner: "linh", priority: 1, enabled: true },
  { id: "TC_SYNC_007", module: " sync ", status: " FAIL ", owner: " minh ", priority: 2, enabled: true },
  { id: "TC_BILL_008", module: "billing", status: "pass", owner: "", priority: 1, enabled: true },
  { id: "TC_ORDER_009", module: " order ", status: " flaky ", owner: "nam", priority: 2, enabled: true },
];

// ===================================================================
// Hàm chính
// ===================================================================

function locDanhSachChayLai(rawRuns) {
  // ------------------------------------------------------------------
  // YC1 + YC2: Dùng map để tạo normalizedRuns
  // Dùng object destructuring trong map
  // Không sửa rawRuns -> map trả về mảng mới
  // ------------------------------------------------------------------
  const normalizedRuns = rawRuns.map((run) => {
    const { id, module, status, owner, priority, enabled } = run;

    return {
      id: id.trim().toUpperCase(),
      module: module.trim().toLowerCase(),
      status: status.trim().toLowerCase(),
      owner: owner.trim(),
      priority,
      enabled,
    };
  });

  // ------------------------------------------------------------------
  // YC3: Dùng filter để tạo rerunList
  // Test cần chạy lại khi:
  // - enabled === true
  // - id không rỗng
  // - status là "fail" hoặc "flaky"
  // ------------------------------------------------------------------
  const rerunList = normalizedRuns.filter((run) => {
    return (
      run.enabled === true &&
      run.id !== "" &&
      (run.status === "fail" || run.status === "flaky")
    );
  });

  // ------------------------------------------------------------------
  // YC4: Dùng filter để tạo missingOwnerList
  // Chỉ lấy test:
  // - enabled === true
  // - id không rỗng
  // - owner === ""
  // ------------------------------------------------------------------
  const missingOwnerList = normalizedRuns.filter((run) => {
    return (
      run.enabled === true &&
      run.id !== "" &&
      run.owner === ""
    );
  });

  // ------------------------------------------------------------------
  // YC5: Dùng find để tạo firstCriticalCase
  // Test đầu tiên thỏa:
  // - enabled === true
  // - id không rỗng
  // - priority === 1
  // - status === "fail"
  // ------------------------------------------------------------------
  const found = normalizedRuns.find((run) => {
    return (
      run.enabled === true &&
      run.id !== "" &&
      run.priority === 1 &&
      run.status === "fail"
    );
  });

  // Nếu find không tìm thấy -> trả về undefined -> gán null
  const firstCriticalCase = found !== undefined ? found : null;

  // ------------------------------------------------------------------
  // YC6: Trả về object kết quả
  // ------------------------------------------------------------------
  return {
    normalizedRuns,
    rerunList,
    missingOwnerList,
    firstCriticalCase,
  };
}

// ===================================================================
// Chạy test
// ===================================================================

const result = locDanhSachChayLai(rawRuns);

console.log("========== NORMALIZED RUNS ==========");
for (const run of result.normalizedRuns) {
  const tag = run.enabled ? "" : " [DISABLED]";
  console.log(
    `${run.id || "(no id)"} | ${run.module} | ${run.status} | owner: "${run.owner}" | P${run.priority}${tag}`
  );
}

console.log("\n========== RERUN LIST ==========");
if (result.rerunList.length === 0) {
  console.log("(không có test nào cần chạy lại)");
} else {
  for (const run of result.rerunList) {
    console.log(`${run.id} | ${run.module} | ${run.status} | P${run.priority}`);
  }
}

console.log("\n========== MISSING OWNER ==========");
if (result.missingOwnerList.length === 0) {
  console.log("(tất cả đều có owner)");
} else {
  for (const run of result.missingOwnerList) {
    console.log(`${run.id} | ${run.module} | ${run.status} | chưa có owner`);
  }
}

console.log("\n========== FIRST CRITICAL CASE ==========");
if (result.firstCriticalCase !== null) {
  const c = result.firstCriticalCase;
  console.log(`${c.id} | ${c.module} | ${c.status} | owner: "${c.owner}" | P${c.priority}`);
} else {
  console.log("(không tìm thấy test critical nào)");
}
