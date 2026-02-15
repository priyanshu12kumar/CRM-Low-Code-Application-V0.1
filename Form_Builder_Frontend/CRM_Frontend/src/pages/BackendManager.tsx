import React, { useEffect, useState } from "react";
import FileList from "../backend/FileList";
import UploadSection from "../backend/UploadSection";
import JsonEditor from "../backend/JsonEditor";
import DownloadButton from "../backend/DownloadButton";
import { fetchFileList, fetchFileContent } from "../backend/utils/api";
import SaveJsonToDatabase from "../backend/SaveJsonToDatabase";
import type { FormState } from "../types";
import { useSystemState } from "../contexts/SystemStateContext";

const BackendManager: React.FC = () => {
  const [files, setFiles] = useState<string[]>([]);
  const [selected, setSelected] = useState<string>("");
  const [jsonData, setJsonData] = useState<FormState>({ fields: [], metadata: { name: "", description: "" }, selectedFieldId: null });
  const { setState : setSystemState } = useSystemState();

  useEffect(() => {
    fetchFileList().then(setFiles).catch(console.error);
  }, []);

  const handleSelect = async (name: string) => {
    setSelected(name);
    const data = await fetchFileContent(name);
    setJsonData(data);
  };

  const handleUpload = (data: FormState, name: string) => {
    setSelected(name);
    setJsonData(data);
    console.log(selected);
  };

  return (
  <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white p-6">
    <div className="flex items-center justify-between mb-6">
    <h1 className="text-3xl font-bold text-cyan-400">
      Backend Manager Dashboard
    </h1>

    <button onClick={() => setSystemState('login')} className="text-slate-400 font-medium px-4 py-2 hover:bg-slate-50 rounded-lg">Exit</button>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[calc(100vh-6rem)]">
      {/* Left side */}
      <div className="flex flex-col h-full gap-6">
        <div className="flex-[2] overflow-y-auto rounded-2xl shadow-lg p-4 bg-gray-900/50 backdrop-blur">
          <FileList files={files} selected={selected} onSelect={handleSelect} />
        </div>
        <div className="flex-[1] overflow-y-auto rounded-2xl shadow-lg p-4 bg-gray-900/50 backdrop-blur">
          <SaveJsonToDatabase data={jsonData} fileName={selected} />
        </div>
      </div>

      {/* Right side: span 3 columns */}
      <div className="lg:col-span-2 flex flex-col h-full gap-6">
        <div className="rounded-2xl shadow-lg p-4 bg-gray-900/50 backdrop-blur">
          <UploadSection onUpload={handleUpload} />
        </div>
        <div className="flex-1 overflow-y-auto rounded-2xl shadow-lg p-4 bg-gray-900/50 backdrop-blur">
          <JsonEditor data={jsonData} onChange={setJsonData} />
        </div>
        <div className="rounded-2xl shadow-lg p-4 bg-gray-900/50 backdrop-blur flex justify-center">
          <DownloadButton data={jsonData} fileName={selected} />
        </div>
      </div>
    </div>
  </div>
  );
};

export default BackendManager;
