# Egyptian ID Validator (JavaScript / Node.js)

[![Version](https://img.shields.io/npm/v/egyptian-id-validator)](https://www.npmjs.com/package/egyptian-id-validator)
[![Release](https://github.com/MohamedAAbdallah/Egyptian-ID-Validator-Npm/actions/workflows/release.yml/badge.svg)](https://github.com/MohamedAAbdallah/Egyptian-ID-Validator-Npm/releases)
[![CodeFactor](https://www.codefactor.io/repository/github/mohamedaabdallah/egyptian-id-validator-npm/badge)](https://www.codefactor.io/repository/github/mohamedaabdallah/egyptian-id-validator-npm)
[![Last Commit](https://img.shields.io/github/last-commit/MohamedAAbdallah/Egyptian-ID-Validator-Npm)](https://github.com/MohamedAAbdallah/Egyptian-ID-Validator-Npm/commits/main)
[![Open Issues](https://img.shields.io/github/issues/MohamedAAbdallah/Egyptian-ID-Validator-Npm)](https://github.com/MohamedAAbdallah/Egyptian-ID-Validator-Npm/issues)
[![License](https://img.shields.io/badge/license-MIT--Custom-blue)](LICENSE.md)

---

**Egyptian ID Validator** is a production-ready JavaScript module for validating and parsing Egyptian national ID numbers.  
It enforces the official structural rules defined by the Egyptian Ministry of Interior, including a verified but undisclosed checksum mechanism.

> ℹ️ This package is part of a broader multi-language validation system.  
> For other implementations (e.g., Python, Java), see the [Egyptian-ID-Validator](https://github.com/MohamedAAbdallah/Egyptian-ID-Validator) mother repository.

---

## 🔍 Features

- ✅ **Format Validation** – Ensures the ID is 14 digits and correctly structured.
- ✅ **Checksum Validation** – Verifies integrity using an official checksum method.
- ✅ **Component Extraction** – Parses the ID into:
  - Year, Month, and Day of Birth
  - Governorate Name and Code
  - Gender (Male/Female)

---

## 📦 Installation

Install via npm:

```bash
npm install egyptian-id-validator
````

> Requires Node.js ≥ 14

---

## 🚀 Quick Usage

```js
import { validate } from "egyptian-id-validator";

const id = "29805150102054"; // Replace with your ID
const result = validate(id);

if (result) {
  console.log("✅ Valid ID");
  console.log(result); // { valid: true, year, month, day, governorate, gender }
} else {
  console.log("❌ Invalid ID");
}
```

You can also use this in CommonJS projects:

```js
const { validate } = require("egyptian-id-validator");
```

---

## 📁 Project Status

This package is **stable** and actively maintained.
It is being used in production environments and adheres strictly to the official Egyptian national ID structure, including a private and verified checksum algorithm.

> 🔒 The checksum logic is intentionally obfuscated to comply with national data validation practices and prevent misuse.

---

## 🤝 Contributing

We welcome contributions to improve or extend this project.

### 🐞 Bug Reports

Please submit detailed reports via [GitHub Issues](https://github.com/MohamedAAbdallah/Egyptian-ID-Validator-Npm/issues), including:

* Clear title and description
* ID sample (if safe to share)
* Expected vs. actual result

### 💡 Feature Requests

Open an issue to suggest enhancements that support practical developer needs, especially around usability, edge cases, or new environments.

### 🧪 Code Contributions

1. Fork this repository
2. Create a branch: `git checkout -b feature/your-feature`
3. Make your changes with tests
4. Run `npm test` and lint if needed
5. Commit and push: `git commit -m "Describe feature"` → `git push origin feature/your-feature`
6. Open a Pull Request to `main`

---

## 📄 License

This project is licensed under a **custom MIT-based license with commercial use restrictions**.

You **may**:

* Use the package in personal or commercial apps
* Modify and extend it with proper attribution

You **may not**:

* Resell, redistribute, or package this code as a core business product without explicit written permission

See [LICENSE.md](LICENSE.md) for full terms.

---

## 👤 Author

**Mohamed A. Abdallah**
[GitHub](https://github.com/MohamedAAbdallah) · [Email](mailto:eng.mohamed.a.abdallah@gmail.com)
