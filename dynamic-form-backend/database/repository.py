
import json
from .connection import get_connection

def list_all_forms():
    conn = get_connection()
    cursor = conn.cursor()
    cursor.execute("SELECT name FROM forms")
    names = [row["name"] for row in cursor.fetchall()]
    conn.close()
    return names

def get_form_by_name(name: str):
    conn = get_connection()
    cursor = conn.cursor()
    cursor.execute("SELECT raw_json FROM forms WHERE name = ?", (name,))
    row = cursor.fetchone()
    conn.close()
    return json.loads(row["raw_json"]) if row else None

def delete_form(name: str):
    conn = get_connection()
    cursor = conn.cursor()
    cursor.execute("DELETE FROM forms WHERE name = ?", (name,))
    conn.commit()
    conn.close()

def save_form_data(name: str, content: dict):
    conn = get_connection()
    cursor = conn.cursor()
    raw_json = json.dumps(content)
    desc = content.get("metadata", {}).get("description", "")
    
    # Upsert into master table
    cursor.execute("""
        INSERT INTO forms (name, description, raw_json) 
        VALUES (?, ?, ?)
        ON CONFLICT(name) DO UPDATE SET 
            description=excluded.description, 
            raw_json=excluded.raw_json
    """, (name, desc, raw_json))
    
    # Optional: Logic to populate form_fields table can be added here
    conn.commit()
    conn.close()
