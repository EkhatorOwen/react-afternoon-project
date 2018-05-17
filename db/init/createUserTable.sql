CREATE TABLE products (

    product_id serial primary KEY,
    name VARCHAR(40),
    description VARCHAR(80),
    price integer,
    image_url text
)