// ===================================================================
// Bài 1: Refactor hàm taoPayloadDangNhap()
// ===================================================================

// ---- Bộ data test ----

const loginOptions = {
  defaultRole: "guest",
  allowedRoles: ["admin", "tester", "viewer", "guest"],
  minPasswordLength: 8,
};

const loginTestData = [
  {
    name: "Case 1 - Hợp lệ cơ bản",
    formInput: {
      username: "  Neko_Admin  ",
      password: "  12345678  ",
      role: " tester ",
      rememberMe: "yes",
      device: "  chrome-win11  ",
    },
  },
  {
    name: "Case 2 - Role rỗng, phải dùng defaultRole",
    formInput: {
      username: "  guest_user  ",
      password: "  abcdefgh  ",
      role: "   ",
      rememberMe: "no",
      device: " firefox ",
    },
  },
  {
    name: "Case 3 - Username rỗng",
    formInput: {
      username: "    ",
      password: "12345678",
      role: "tester",
      rememberMe: "yes",
      device: "chrome",
    },
  },
  {
    name: "Case 4 - Username có khoảng trắng ở giữa",
    formInput: {
      username: "neko admin",
      password: "12345678",
      role: "tester",
      rememberMe: "yes",
      device: "chrome",
    },
  },
  {
    name: "Case 5 - Password quá ngắn",
    formInput: {
      username: "valid_user",
      password: "123",
      role: "tester",
      rememberMe: true,
      device: "chrome",
    },
  },
  {
    name: "Case 6 - Role không hợp lệ",
    formInput: {
      username: "valid_user",
      password: "12345678",
      role: "manager",
      rememberMe: "on",
      device: "chrome",
    },
  },
  {
    name: "Case 7 - rememberMe là boolean true",
    formInput: {
      username: "admin01",
      password: "abcdefgh",
      role: "admin",
      rememberMe: true,
      device: "edge",
    },
  },
  {
    name: "Case 8 - rememberMe là chuỗi lạ",
    formInput: {
      username: "viewer01",
      password: "abcdefgh",
      role: "viewer",
      rememberMe: "maybe",
      device: "safari",
    },
  },
];

// ===================================================================
// Hàm chính
// ===================================================================

function taoPayloadDangNhap(formInput, options = {}) {
  // ------------------------------------------------------------------
  // YC1: Destructuring formInput
  // ------------------------------------------------------------------
  const { username, password, role, rememberMe, device } = formInput;

  // ------------------------------------------------------------------
  // YC2: Destructuring options + default value
  // - defaultRole mặc định "guest", minPasswordLength mặc định 8
  // - allowedRoles lấy thẳng từ options, không tự thêm giá trị
  // ------------------------------------------------------------------
  const {
    defaultRole = "guest",
    allowedRoles,
    minPasswordLength = 8,
  } = options;

  // ------------------------------------------------------------------
  // YC3: Chuẩn hóa dữ liệu
  // - Bài 02: trim(), toLowerCase() là string methods
  // - rememberMe có thể là boolean hoặc string -> cần chuyển về boolean
  // ------------------------------------------------------------------
  const cleanUsername = username.trim().toLowerCase();
  const cleanPassword = password.trim();
  const cleanDevice = device.trim();

  // role: trim + lowercase, nếu sau khi trim là rỗng -> dùng defaultRole
  let cleanRole = role.trim().toLowerCase();
  if (cleanRole === "") {
    cleanRole = defaultRole;
  }

  // rememberMe: chuyển về boolean
  // - Nếu đã là boolean true -> giữ nguyên
  // - Nếu là string "yes", "on", "true" -> true
  // - Còn lại -> false
  let cleanRememberMe = false;
  if (rememberMe === true) {
    cleanRememberMe = true;
  } else if (typeof rememberMe === "string") {
    const lower = rememberMe.trim().toLowerCase();
    if (lower === "yes" || lower === "on" || lower === "true") {
      cleanRememberMe = true;
    }
  }

  // ------------------------------------------------------------------
  // YC4: Kiểm tra hợp lệ
  // - Bài 03: dùng if/else để kiểm tra điều kiện
  // - Bài 02: includes() để kiểm tra khoảng trắng ở giữa
  // - Bài 04: allowedRoles.includes() để kiểm tra role
  // ------------------------------------------------------------------
  const errors = [];

  // username không được rỗng
  if (cleanUsername === "") {
    errors.push("Username không được để trống");
  }

  // username không được chứa khoảng trắng ở giữa
  if (cleanUsername !== "" && cleanUsername.includes(" ")) {
    errors.push("Username không được chứa khoảng trắng ở giữa");
  }

  // password phải dài ít nhất minPasswordLength ký tự
  if (cleanPassword.length < minPasswordLength) {
    errors.push(
      `Password phải có ít nhất ${minPasswordLength} ký tự (hiện tại: ${cleanPassword.length})`
    );
  }

  // role phải nằm trong allowedRoles
  if (!allowedRoles.includes(cleanRole)) {
    errors.push(
      `Role "${cleanRole}" không hợp lệ. Chỉ chấp nhận: ${allowedRoles.join(", ")}`
    );
  }

  // ------------------------------------------------------------------
  // YC5: Không sửa trực tiếp formInput hoặc options
  //   -> Đã đảm bảo: chỉ đọc từ formInput qua destructuring,
  //      tạo biến mới (cleanXxx) để chuẩn hóa
  // ------------------------------------------------------------------

  // ------------------------------------------------------------------
  // YC6: Trả về object kết quả
  // - Bài 05: spread operator để tạo object mới
  // ------------------------------------------------------------------
  const isValid = errors.length === 0;

  return {
    isValid,
    payload: {
      username: cleanUsername,
      password: cleanPassword,
      role: cleanRole,
      rememberMe: cleanRememberMe,
      device: cleanDevice,
    },
    errors,
  };
}

// ===================================================================
// Chạy test tất cả các case
// ===================================================================

for (const testCase of loginTestData) {
  console.log(`\n========== ${testCase.name} ==========`);

  const result = taoPayloadDangNhap(testCase.formInput, loginOptions);

  console.log("isValid:", result.isValid);
  console.log("payload:", result.payload);

  if (result.errors.length > 0) {
    console.log("errors:");
    for (const err of result.errors) {
      console.log(`  - ${err}`);
    }
  } else {
    console.log("errors: []");
  }
}
