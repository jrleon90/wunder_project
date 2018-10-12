	
CREATE TABLE `customers` (
 `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
 `customer_id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
 `customer_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
 `customer_lastname` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
 `customer_telephone` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
 `customer_address_street` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
 `customer_address_number` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
 `customer_address_zip` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
 `customer_address_city` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
 `customer_owner_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
 `customer_iban` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
 `customer_paymentId` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
 `created_at` timestamp NULL DEFAULT NULL,
 `updated_at` timestamp NULL DEFAULT NULL,
 PRIMARY KEY (`id`)
) ENGINE=InnoDB 