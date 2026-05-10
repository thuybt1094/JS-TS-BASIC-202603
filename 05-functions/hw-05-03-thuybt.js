// ===================================================================
// Bài 3: Merge config chạy test và bắt lỗi cấu hình
// ===================================================================

// ---- Bộ data test ----

const configCase1 = {
  defaultConfig: {
    env: "local",
    baseUrl: "http://localhost:3000",
    timeout: 30000,
    retries: 0,
    headed: true,
    browsers: ["chromium"],
    reporter: {
      type: "html",
      output: "reports/default",
    },
  },
  envConfig: {
    env: "staging",
    baseUrl: "https://staging.neko.dev",
    retries: 1,
    browsers: ["chromium", "firefox"],
  },
  overrideConfig: {
    timeout: 500,
    headed: true,
    browsers: [" Chromium ", "chromium", "webkit"],
    reporter: {
      type: "html",
      output: "reports/custom",
    },
  },
};

const configCase2 = {
  defaultConfig: {
    env: "ci",
    baseUrl: "https://ci.neko.dev",
    timeout: 10000,
    retries: 2,
    headed: true,
    browsers: ["chromium"],
    reporter: {
      type: "html",
      output: "reports/ci",
    },
  },
  envConfig: {},
  overrideConfig: {},
};

const configCase3 = {
  defaultConfig: {
    env: "staging",
    baseUrl: "ftp://bad-url",
    timeout: 2000,
    retries: 1,
    headed: false,
    browsers: ["firefox"],
    reporter: {
      type: "json",
      output: "reports/json",
    },
  },
  envConfig: {},
  overrideConfig: {},
};

const configCase4 = {
  defaultConfig: {
    env: "test",
    baseUrl: "https://prod.neko.dev",
    timeout: 5000,
    retries: 1,
    headed: false,
    browsers: ["webkit"],
    reporter: {
      type: "html",
      output: "reports/test",
    },
  },
  envConfig: {},
  overrideConfig: {},
};

const configCase5 = {
  defaultConfig: {
    env: "local",
    baseUrl: "http://localhost:3000",
    timeout: 30000,
    retries: -1,
    headed: false,
    browsers: [],
    reporter: {
      type: "",
      output: "",
    },
  },
  envConfig: {},
  overrideConfig: {},
};

// ===================================================================
// Hàm 1: Merge config
// ===================================================================

function taoCauHinhCuoi(defaultConfig, envConfig, overrideConfig) {
  // ------------------------------------------------------------------
  // YC1 + YC2: Dùng spread để merge config theo thứ tự
  // defaultConfig -> envConfig -> overrideConfig
  //
  // - Spread chỉ sao chép nông
  // - Với property là object lồng, cần spread riêng
  //   để tránh mất field từ lớp config trước
  // ------------------------------------------------------------------

  // YC5 (Không sửa trực tiếp config đầu vào):
  // Spread tạo object mới, không ảnh hưởng object gốc
  const merged = {
    ...defaultConfig,
    ...envConfig,
    ...overrideConfig,
    // Merge riêng reporter (object lồng) để không mất field
    reporter: {
      ...(defaultConfig.reporter || {}),
      ...(envConfig.reporter || {}),
      ...(overrideConfig.reporter || {}),
    },
  };

  return merged;
}

// ===================================================================
// Hàm 2: Kiểm tra cấu hình
// ===================================================================

function kiemTraCauHinh(config) {
  // ------------------------------------------------------------------
  // Dùng object destructuring ít nhất 1 lần
  // ------------------------------------------------------------------
  const { env, baseUrl, timeout, retries, headed, browsers, reporter } =
    config;

  const errors = [];
  const warnings = [];

  // ------------------------------------------------------------------
  // Kiểm tra lỗi (errors)
  // ------------------------------------------------------------------

  // baseUrl phải bắt đầu bằng "http://" hoặc "https://"
  if (
    baseUrl.slice(0, 7) !== "http://" &&
    baseUrl.slice(0, 8) !== "https://"
  ) {
    errors.push(
      `baseUrl "${baseUrl}" không hợp lệ (phải bắt đầu bằng http:// hoặc https://)`
    );
  }

  // timeout phải từ 1000 trở lên
  if (timeout < 1000) {
    errors.push(
      `timeout = ${timeout} quá thấp (phải từ 1000 trở lên)`
    );
  }

  // retries không được âm
  if (retries < 0) {
    errors.push(`retries = ${retries} không được là số âm`);
  }

  // browsers không được rỗng
  if (browsers.length === 0) {
    errors.push("browsers không được rỗng");
  }

  // ------------------------------------------------------------------
  // YC3 + YC bắt buộc 3: Dùng map, filter, find cho browsers
  // ------------------------------------------------------------------

  // map: trim + lowercase từng browser
  const cleanBrowsers = browsers.map((b) => b.trim().toLowerCase());

  // filter: lọc ra các browser bị trùng
  // Logic: phần tử bị trùng khi indexOf (vị trí đầu tiên xuất hiện)
  //        khác với index hiện tại -> nghĩa là nó đã xuất hiện trước đó
  const duplicateBrowsers = cleanBrowsers.filter(
    (browser, index) => cleanBrowsers.indexOf(browser) !== index
  );

  // find: lấy browser trùng đầu tiên (nếu có)
  const firstDuplicate = cleanBrowsers.find(
    (browser, index) => cleanBrowsers.indexOf(browser) !== index
  );

  if (firstDuplicate !== undefined) {
    errors.push(
      `Browser bị trùng: "${firstDuplicate}" (tổng trùng: ${duplicateBrowsers.length})`
    );
  }

  // ------------------------------------------------------------------
  // Kiểm tra cảnh báo (warnings)
  // ------------------------------------------------------------------

  // env === "ci" mà headed === true -> warning
  if (env === "ci" && headed === true) {
    warnings.push(
      `env = "ci" nhưng headed = true (CI nên chạy headless)`
    );
  }

  // baseUrl chứa "prod" nhưng env !== "production" -> warning
  if (baseUrl.includes("prod") && env !== "production") {
    warnings.push(
      `baseUrl chứa "prod" nhưng env = "${env}" (không phải "production")`
    );
  }

  return { errors, warnings };
}

// ===================================================================
// Chạy test tất cả các case
// ===================================================================

const allCases = [configCase1, configCase2, configCase3, configCase4, configCase5];

for (let i = 0; i < allCases.length; i++) {
  const caseNumber = i + 1;
  const { defaultConfig, envConfig, overrideConfig } = allCases[i];

  console.log(`\n========== Config Case ${caseNumber} ==========`);

  // Bước 1: Merge config
  const finalConfig = taoCauHinhCuoi(defaultConfig, envConfig, overrideConfig);
  console.log("Final config:", finalConfig);

  // Bước 2: Kiểm tra config
  const result = kiemTraCauHinh(finalConfig);

  if (result.errors.length > 0) {
    console.log("ERRORS:");
    for (const err of result.errors) {
      console.log(`${err}`);
    }
  } else {
    console.log("ERRORS: (không có)");
  }

  if (result.warnings.length > 0) {
    console.log("WARNINGS:");
    for (const warn of result.warnings) {
      console.log(`${warn}`);
    }
  } else {
    console.log("WARNINGS: (không có)");
  }
}
