// Switch to the Taaep database
use('Taeep');

// Insert a document into the User collection
db.User.insertOne({
  username: 'testuser',
  password: 'pbkdf2:sha256:600000$tjPnejUda6KX1UlK$8228e558cee8898b0a6ffb6a6f10b487d58f8f8651d3506239e581ef21570c62', 
  email: 'test@example.com',
  createdAt: new Date()
});

// Verify the insertion
db.User.find();
