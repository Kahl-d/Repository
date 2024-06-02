from werkzeug.security import generate_password_hash

password = "testpassword"
hashed_password = generate_password_hash(password, method='pbkdf2:sha256')
print(hashed_password)
