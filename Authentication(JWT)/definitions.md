# 🔐 Authentication Terms Explained

## 1. Hashing
Hashing is a one-way function that converts data (like a password) into a fixed-size string of characters.  
It **cannot be reversed** — once something is hashed, you can’t get the original value back.  
Used to securely store passwords.

- 🔄 Example: `"mypassword"` → `"5f4dcc3b5aa765d61d8327deb882cf99"`
- 🔐 Common algorithms: SHA-256, MD5 (not secure anymore), bcrypt.

---

## 2. JWT (JSON Web Token)
JWT stands for **JSON Web Token**. It's a compact, secure way to transmit data between parties as a **JSON object**.  
It’s **used for authentication** and authorization in web apps.

### A JWT has 3 parts:
- **Header** – metadata about the token (type and algorithm)
- **Payload** – the data (e.g., user ID, roles)
- **Signature** – verifies the token hasn’t been altered

📦 Format: `xxxxx.yyyyy.zzzzz`  
📤 Usually sent as a Bearer token in HTTP headers.

---

## 3. bcrypt
bcrypt is a password-hashing function designed to be slow and secure against brute-force attacks.  
It automatically adds a **salt** (random data) and allows comparison of a raw password to a hashed one.

- ✅ Used to hash passwords before saving to a database
- 🔐 Safer than plain hashing because it:
  - Adds salt automatically
  - Has an adjustable **cost factor** (controls difficulty)
- 🔄 You never decrypt a bcrypt hash — you **compare** passwords to it

---

## 🔄 Typical Authentication Flow:

1. **Registration**  
   - User submits password  
   - Password is **hashed with bcrypt** and saved to the database  

2. **Login**  
   - User submits password  
   - Password is **hashed and compared** to the stored hash  

3. **On Success**  
   - A **JWT is created** and sent to the client  

4. **Accessing Protected Routes**  
   - Client includes JWT in headers  
   - Backend **verifies** JWT before giving access  

