import { useEffect, useState } from "react";
import type { FormState } from "../types";
import { saveFileToDatabase } from "./utils/api";

function SaveJsonToDatabase({ data, fileName }: { data: FormState; fileName: string }) {
    const [status, setStatus] = useState<string>("");
    const [currentFileName, setCurrentFileName] = useState<string>(fileName);

    useEffect(() => {
        setCurrentFileName(fileName);
    }, [fileName]);


    return (
        <div className="bg-gray-900 p-4 rounded-2xl shadow-lg">
            <h2 className="text-xl font-bold text-green-400 mb-4">
                Save to Database
            </h2>
            
            <input
                type="text"
                value={currentFileName}
                onChange={(e) => setCurrentFileName(e.target.value)}
                className="mt-4 p-2 bg-gray-800 text-green-400 rounded-lg font-mono text-sm w-full outline-none focus:ring-2 focus:ring-green-400"
                placeholder={currentFileName || "Enter file name to save as..."}
            />

            <button
                onClick={
                    async () => {
                        setStatus("Saving...");
                        try {
                            await saveFileToDatabase(currentFileName, data);
                            setStatus("Saved successfully!");
                        } catch (error) {
                            setStatus("Error saving data");
                            console.error(error);
                        }
                    }
                }
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4"
            >
                Save Current JSON to Database
            </button>

            {status && <p className="mt-2 text-sm text-gray-300">{status}</p>}
        </div>
    );
}

export default SaveJsonToDatabase;