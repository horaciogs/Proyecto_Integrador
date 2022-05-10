CREATE DATABASE hiboxDb;
USE hiboxDb;

CREATE TABLE `products` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `name` VARCHAR(30) NOT NULL,
   `price` DOUBLE NOT NULL,
   `priceBefore` DOUBLE,
   `detail` TEXT,
   `productImage` VARCHAR(255) NOT NULL,
   `stateId` INT NOT NULL,
   `categoryId` INT NOT NULL,
   `subCategoryId` INT NOT NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `users` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `firstName` VARCHAR(15) NOT NULL,
   `lastName` VARCHAR(15) NOT NULL,
   `email` VARCHAR(30) NOT NULL,
   `password` VARCHAR(100) NOT NULL,
   `userImage` VARCHAR(255) NOT NULL,
   `userPrivilege` INT NOT NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `subCategorys` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `subCategory` VARCHAR(30) NOT NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `categorys` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `category` VARCHAR(30) NOT NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `states` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `state` VARCHAR(30) NOT NULL,
   PRIMARY KEY (`id`)
);


ALTER TABLE `products` ADD CONSTRAINT `FK_subCat` FOREIGN KEY (`subCategoryId`) REFERENCES `subCategorys`(`id`)  ;

ALTER TABLE `products` ADD CONSTRAINT `FK_cat` FOREIGN KEY (`categoryId`) REFERENCES `categorys`(`id`)  ;

ALTER TABLE `products` ADD CONSTRAINT `FK_state` FOREIGN KEY (`stateId`) REFERENCES `states`(`id`)  ;