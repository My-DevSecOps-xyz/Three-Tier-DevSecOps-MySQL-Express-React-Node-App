CREATE DATABASE IF NOT EXISTS crud_app;

USE crud_app;

CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  role ENUM('admin', 'viewer') NOT NULL DEFAULT 'viewer',
  is_active TINYINT(1) DEFAULT 1,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


INSERT INTO users (name, email, password, role) 
VALUES ('Admin User', 'popo@popo.com', '$2a$10$qz8klo31TOUGIJv78sC5OegkdkOq/SqHhSMzYNUKn2FTm7WHwPfF.', 'admin');