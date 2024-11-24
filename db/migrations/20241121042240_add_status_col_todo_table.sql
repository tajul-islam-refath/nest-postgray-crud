-- migrate:up
DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1
        FROM pg_type
        WHERE typname = 'todo_status'
    ) THEN
        CREATE TYPE todo_status AS ENUM ('Pending', 'Running', 'Done');
    END IF;
END $$;

-- Add the ENUM column
ALTER TABLE todos ADD COLUMN status todo_status;

-- migrate:down