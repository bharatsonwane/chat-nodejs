-- 
CREATE TABLE IF NOT EXISTS LookupType (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) UNIQUE NOT NULL,
    createdAt TIMESTAMP DEFAULT NOW() NOT NULL,
    updatedAt TIMESTAMP DEFAULT NOW() NOT NULL
);
-- 
CREATE TABLE IF NOT EXISTS Lookup (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) UNIQUE NOT NULL,
    label VARCHAR(255) NOT NULL,
    lookupTypeId INT NOT NULL,
    createdAt TIMESTAMP DEFAULT NOW() NOT NULL,
    updatedAt TIMESTAMP DEFAULT NOW() NOT NULL,
    CONSTRAINT fk_lookup_lookupType FOREIGN KEY (lookupTypeId) REFERENCES LookupType (id) ON DELETE CASCADE,
    CONSTRAINT unique_lookupTypeId_label UNIQUE (lookupTypeId, label)
);
-- 