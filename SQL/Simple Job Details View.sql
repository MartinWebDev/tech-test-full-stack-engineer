-- SELECT * FROM suburbs;
-- SELECT * FROM jobs;
-- SELECT * FROM categories;

-- Only include additional information if accepted for privacy
SELECT J.id, J.status, J.contact_name, J.price, J.description, J.created_at, 
	C.id AS category_id, C.name AS category_name, C.icon_filename, 
    S.id AS suburb_id, S.name AS suburb_name, S.postcode, 
    CASE WHEN J.status = 'accepted' THEN J.contact_phone ELSE NULL END AS contact_phone, 
    CASE WHEN J.status = 'accepted' THEN J.contact_email ELSE NULL END AS contact_email
FROM jobs J
INNER JOIN categories C ON C.id = J.category_id
INNER JOIN suburbs S ON S.id = J.suburb_id
