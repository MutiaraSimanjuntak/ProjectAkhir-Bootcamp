# 🧪 OrangeHRM Automation Testing – Cypress

Automation testing untuk website OrangeHRM Demo menggunakan Cypress dengan pendekatan Page Object Model (POM) dan API Intercept. Project ini bertujuan untuk menguji alur utama aplikasi secara end-to-end, memastikan setiap fitur berjalan sesuai dengan expected behavior, serta meningkatkan efisiensi proses regression testing. Automation dibuat dengan struktur yang rapi, reusable, dan mudah dikembangkan untuk penambahan test case di masa mendatang. Project ini dibuat sebagai Project Akhir QA Automation Bootcamp.

🔗 Website Under Test
https://opensource-demo.orangehrmlive.com

---

## 🎯 Scope Pengujian
Automation dibuat untuk fitur utama berikut:
* Login
* Forgot Password
* Directory (Dashboard)

🧪 Test Case List
🔐 Login Test (TC01–TC12)
TC01 - Login dengan credential valid
TC02 - Login dengan password salah
TC03 - Login dengan username salah
TC04 - Login tanpa username dan password
TC05 - Login hanya mengisi username
TC06 - Login hanya mengisi password
TC07 - Login dengan username spasi
TC08 - Klik forgot password dari halaman login
TC09 - Login dengan username huruf kecil
TC10 - Login dengan password huruf besar
TC11 - Login dengan username panjang
TC12 - Login dengan tombol enter

🔁 Forgot Password Test (TC13–TC20)
TC13 - Reset password dengan username valid
TC14 - Reset password tanpa username
TC15 - Reset password username tidak terdaftar
TC16 - Reset password username spasi
TC17 - Klik cancel forgot password
TC18 - Refresh halaman forgot password
TC19 - Reset password username huruf kecil
TC20 - Reset password username panjang

📂 Directory Test (TC21–TC30)
TC21 - Membuka menu directory
TC22 - Search employee valid
TC23 - Search employee tanpa input
TC24 - Reset search directory
TC25 - Search employee partial name
TC26 - Reload halaman directory
TC27 - Search employee huruf kecil
TC28 - Search employee dengan angka
TC29 - Search employee dengan spasi
TC30 - Buka directory lalu refresh

---

## 🧱 Struktur Project

```
cypress
 ┣ e2e
 ┃ ┣ login.cy.js
 ┃ ┣ forgot.cy.js
 ┃ ┗ directory.cy.js
 ┣ fixtures
 ┃ ┗ user.json
 ┗ support
   ┣ commands.js
   ┗ pageObject.js
```

---

## ⚙️ Pendekatan yang Digunakan

Project ini dibuat dengan pendekatan:

* Page Object Model (POM)
* Cypress Intercept
* Custom Commands
* Fixture Data
* Reusable Selector
* Clean Test Case Structure

---

## 🌐 API Intercept

Beberapa API yang digunakan dalam automation:

Login
```
POST /auth/validate
```

Forgot Password
```
POST /auth/sendPasswordReset
```

Directory
```
GET /directory/employees
```

Setiap test case yang memicu request menggunakan `cy.intercept()`.

---

## ▶️ Menjalankan Automation

Install dependency

```
npm install
```

Open Cypress

```
npx cypress open
```

Run headless

```
npx cypress run
```

---

## 👩‍💻 Author

**Mutiara Simanjuntak**
