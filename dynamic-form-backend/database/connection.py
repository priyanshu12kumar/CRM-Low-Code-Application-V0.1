
import sqlite3
import os

DB_PATH = "index.db"

def get_connection():
    """Returns a sqlite3 connection object."""
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    return conn

def init_db():
    """Creates the database and tables if they don't exist."""
    conn = get_connection()
    cursor = conn.cursor()
    
    # Table to store master files and full JSON content
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS forms (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT UNIQUE NOT NULL,
            description TEXT,
            raw_json TEXT NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    """)
    
    # Table to store individual fields for relational queries
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS form_fields (
            id TEXT PRIMARY KEY,
            form_name TEXT,
            input_type TEXT,
            label TEXT,
            is_mandatory BOOLEAN,
            FOREIGN KEY(form_name) REFERENCES forms(name) ON DELETE CASCADE
        )
    """)
    
    conn.commit()
    conn.close()
