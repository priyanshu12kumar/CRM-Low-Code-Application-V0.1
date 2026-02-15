export const BASE_URL = "http://localhost:8080";
export const FILE_LIST_URL = `${BASE_URL}/api/files`;
export const FILE_CONTENT_URL = `${BASE_URL}/api/file-content`;
export const SAVE_FILE_URL = `${BASE_URL}/api/save-json`;
export const DELETE_FILE_URL = `${BASE_URL}/api/delete-file`;

export async function fetchFileList(): Promise<string[]> {
  const res = await fetch(FILE_LIST_URL);
  if (!res.ok) throw new Error("Failed to fetch file list");
  return res.json();
}

export async function fetchFileContent(name: string): Promise<any> {
  const res = await fetch(FILE_CONTENT_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name }),
  });
  if (!res.ok) throw new Error("Failed to fetch file content");
  return res.json();
}

export async function saveFileToDatabase(name: string, content: any): Promise<void> {
  const res = await fetch(SAVE_FILE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, content }),
  });
  if (!res.ok) throw new Error("Failed to save file to database");
}

export async function deleteFile(name: string): Promise<void> {
  const res = await fetch(DELETE_FILE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name }),
  });
  if (!res.ok) throw new Error("Failed to delete file");
}