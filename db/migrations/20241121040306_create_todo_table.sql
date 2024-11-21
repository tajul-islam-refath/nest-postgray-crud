-- migrate:up
CREATE TABLE IF NOT EXISTS todos (
    id SERIAL PRIMARY KEY,
    task VARCHAR(100),
    description VARCHAR(250) UNIQUE,
    created_at TIMESTAMP DEFAULT NOW()
);

-- migrate:down