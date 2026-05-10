// ===================================================================
// Bài 4: Phân tích kết quả chạy test có chạy lại
// ===================================================================

// ---- Bộ data test ----

const resultOptions = {
  slowThreshold: 2500,
};

const results = [
  {
    id: "TC_LOGIN_001",
    module: "login",
    statuses: ["fail", "pass"],
    durations: [1200, 800],
    owner: "an",
  },
  {
    id: "TC_SEARCH_002",
    module: "search",
    statuses: ["pass"],
    durations: [600],
    owner: "binh",
  },
  {
    id: "TC_CART_003",
    module: "cart",
    statuses: ["fail", "fail", "fail"],
    durations: [1500, 1700, 1600],
    owner: "",
  },
  {
    id: "TC_PAY_004",
    module: "payment",
    statuses: ["pass"],
    durations: [-50],
    owner: "chi",
  },
  {
    id: "TC_PROFILE_005",
    module: "profile",
    statuses: ["pass", "pass"],
    durations: [700, 650],
    owner: "duy",
  },
  {
    id: "",
    module: "report",
    statuses: ["pass"],
    durations: [300],
    owner: "ha",
  },
  {
    id: "TC_API_006",
    module: "api",
    statuses: ["fail", "unknown"],
    durations: [400, 500],
    owner: "linh",
  },
  {
    id: "TC_BILL_007",
    module: "billing",
    statuses: ["fail", "pass", "pass", "pass"],
    durations: [600, 700, 650, 620],
    owner: "minh",
  },
  {
    id: "TC_LOG_008",
    module: "log",
    statuses: ["skip"],
    durations: [100],
    owner: "nam",
  },
  {
    id: "TC_SYNC_009",
    module: "sync",
    statuses: ["fail", "pass"],
    durations: [1500],
    owner: "oanh",
  },
];

// ===================================================================
// Hàm chính
// ===================================================================

function phanTichKetQuaChay(results, options) {
  // ------------------------------------------------------------------
  // Destructuring options
  // ------------------------------------------------------------------
  const { slowThreshold } = options;

  const analyzed = [];
  const invalid = [];

  // ------------------------------------------------------------------
  // Duyệt từng kết quả test
  // ------------------------------------------------------------------
  for (let i = 0; i < results.length; i++) {
    // ----------------------------------------------------------------
    // YC bắt buộc 1: Destructuring từng result object
    // Bài 05: Object destructuring
    // ----------------------------------------------------------------
    const { id, module, statuses, durations, owner } = results[i];

    // ----------------------------------------------------------------
    // YC4: Kiểm tra invalid
    // - Thiếu id
    // - statuses.length !== durations.length
    // - Có duration âm
    // ----------------------------------------------------------------
    const invalidReasons = [];

    // Thiếu id (Bài 03: Truthy/Falsy -> chuỗi rỗng là falsy)
    if (!id) {
      invalidReasons.push("Thiếu id");
    }

    // statuses và durations không khớp số lượng
    if (statuses.length !== durations.length) {
      invalidReasons.push(
        `statuses (${statuses.length}) và durations (${durations.length}) không khớp số lượng`
      );
    }

    // Có duration âm
    // Bài 05: .find() để tìm phần tử đầu tiên thỏa điều kiện
    let hasNegativeDuration = false;
    for (let j = 0; j < durations.length; j++) {
      if (durations[j] < 0) {
        hasNegativeDuration = true;
        break; // Bài 04: break khi tìm thấy rồi
      }
    }
    if (hasNegativeDuration) {
      invalidReasons.push("Có duration âm");
    }

    // Nếu không hợp lệ -> đưa vào invalid rồi bỏ qua
    if (invalidReasons.length > 0) {
      invalid.push({
        id,
        module,
        owner,
        reasons: invalidReasons,
      });
      continue; // Bài 04: continue để bỏ qua lần lặp hiện tại
    }

    // ----------------------------------------------------------------
    // YC1: Tính toán cho mỗi test hợp lệ
    // ----------------------------------------------------------------

    // finalStatus: trạng thái của lần chạy cuối cùng
    const finalStatus = statuses[statuses.length - 1];

    // retryCount: số lần chạy lại (lần đầu không tính là retry)
    const retryCount = statuses.length - 1;

    // totalDuration: tổng thời gian tất cả các lần chạy
    // Bài 04: dùng for để cộng dồn
    let totalDuration = 0;
    for (let j = 0; j < durations.length; j++) {
      totalDuration += durations[j];
    }

    // ----------------------------------------------------------------
    // YC2: isFlaky - có ít nhất 1 lần fail VÀ lần cuối là pass
    // Bài 04: includes() kiểm tra phần tử trong mảng
    // Bài 03: toán tử && (AND)
    // ----------------------------------------------------------------
    const isFlaky = statuses.includes("fail") && finalStatus === "pass";

    // ----------------------------------------------------------------
    // YC3: isSlow - tổng duration > slowThreshold
    // ----------------------------------------------------------------
    const isSlow = totalDuration > slowThreshold;

    // Đưa vào mảng analyzed
    analyzed.push({
      id,
      module,
      owner,
      finalStatus,
      retryCount,
      totalDuration,
      isFlaky,
      isSlow,
    });
  }

  // ------------------------------------------------------------------
  // YC5 + YC bắt buộc 2: Tạo summary từ mảng analyzed/invalid
  // Không dùng biến global để cộng dồn -> tính từ mảng kết quả
  // Bài 05: .filter() để đếm số lượng theo điều kiện
  // ------------------------------------------------------------------
  const summary = {
    total: results.length,
    passed: analyzed.filter((t) => t.finalStatus === "pass").length,
    failed: analyzed.filter((t) => t.finalStatus === "fail").length,
    flaky: analyzed.filter((t) => t.isFlaky === true).length,
    slow: analyzed.filter((t) => t.isSlow === true).length,
    invalid: invalid.length,
  };

  return { analyzed, invalid, summary };
}

// ===================================================================
// Chạy test
// ===================================================================

const result = phanTichKetQuaChay(results, resultOptions);

console.log("========== ANALYZED ==========");
for (const t of result.analyzed) {
  const flags = [];
  if (t.isFlaky) flags.push("FLAKY");
  if (t.isSlow) flags.push("SLOW");
  const flagStr = flags.length > 0 ? ` [${flags.join(", ")}]` : "";

  console.log(
    `${t.id} | ${t.finalStatus} | retries: ${t.retryCount} | duration: ${t.totalDuration}ms${flagStr}`
  );
}

console.log("\n========== INVALID ==========");
for (const t of result.invalid) {
  console.log(`${t.id || "(no id)"} | ${t.module} | Lý do: ${t.reasons.join(", ")}`);
}

console.log("\n========== SUMMARY ==========");
console.log(result.summary);
