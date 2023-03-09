-- Active: 1678169845281@@127.0.0.1@3307@ecommerce_evening
CREATE TABLE user(  
    userId VARCHAR(255) NOT NULL,
    firstname VARCHAR(255),
    lastname VARCHAR(255),
    birthdate DATE,
    email VARCHAR(255) UNIQUE,
    emailConfirmed boolean DEFAULT false,
    phone INT UNIQUE NOT NULL,
    phoneConfirmed boolean DEFAULT false,
    password VARCHAR(255) NOT NULL,
    imageUrl VARCHAR(1000),
    isAdmin boolean DEFAULT false,
    created VARCHAR(255),
    createdAt TIMESTAMP,
    updated VARCHAR(255),
    updatedAt TIMESTAMP,
    PRIMARY KEY(userId),
    FOREIGN KEY(created) REFERENCES user(userId) ON UPDATE CASCADE,
    FOREIGN KEY(updated) REFERENCES user(userId) ON UPDATE CASCADE
);

CREATE TABLE category(  
    categoryId VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    slug VARCHAR(255) NOT NULL UNIQUE,
    productCount INT DEFAULT 0,
    parent_id VARCHAR(255),
    created VARCHAR(255),
    createdAt TIMESTAMP,
    updated VARCHAR(255),
    updatedAt TIMESTAMP,
    PRIMARY KEY(categoryId),
    FOREIGN KEY(parent_id) REFERENCES category(categoryId) ON UPDATE CASCADE,
    FOREIGN KEY(created) REFERENCES user(userId) ON UPDATE CASCADE,
    FOREIGN KEY(updated) REFERENCES user(userId) ON UPDATE CASCADE
);

CREATE TABLE product(
    productId VARCHAR(255) NOT NULL,
    categoryId VARCHAR(255),
    name VARCHAR(255) NOT NULL,
    slug VARCHAR(255) NOT NULL,
    description VARCHAR(1000),
    imageUrl VARCHAR(1000),
    text TEXT,
    price INT,
    discountPrice INT,
    remaining INT DEFAULT 0,
    readCount INT DEFAULT 0,
    rating DECIMAL(2, 1),
    created VARCHAR(255),
    createdAt TIMESTAMP,
    updated VARCHAR(255),
    updatedAt TIMESTAMP,
    PRIMARY KEY(productId),
    Foreign Key (categoryId) REFERENCES category(categoryId) on UPDATE CASCADE,
    Foreign Key (created) REFERENCES user(userId) on UPDATE CASCADE,
    Foreign Key (updated) REFERENCES user(userId) on UPDATE CASCADE
)