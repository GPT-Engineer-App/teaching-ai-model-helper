import React, { useState } from "react";
import { FaFileUpload, FaSave, FaPlay, FaFolderOpen } from "react-icons/fa";

const Index = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleTrainModel = () => {
    // TODO: Implement training logic here
  };

  const handleSaveCheckpoint = () => {
    // TODO: Implement checkpoint saving logic here
  };

  const handleSaveModel = () => {
    // TODO: Implement model saving logic here
  };

  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold mb-6">Hugging Face Model Trainer</h1>
      <div className="mb-4">
        <label className="block mb-2 text-sm font-medium text-gray-900">Upload your dataset (csv, txt, json, jsonl)</label>
        <div className="flex items-center justify-center w-full">
          <label className="flex flex-col w-full h-32 border-4 border-dashed hover:bg-gray-100 hover:border-gray-300">
            <div className="flex flex-col items-center justify-center pt-7">
              <FaFileUpload className="text-4xl text-gray-400" />
              <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">{selectedFile ? selectedFile.name : "Attach a file"}</p>
            </div>
            <input type="file" className="opacity-0" onChange={handleFileChange} />
          </label>
        </div>
      </div>

      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center mb-4" onClick={handleTrainModel}>
        <FaPlay className="mr-2" /> Train Model
      </button>

      <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded inline-flex items-center mr-2" onClick={handleSaveCheckpoint}>
        <FaSave className="mr-2" /> Save Checkpoint
      </button>

      <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded inline-flex items-center" onClick={handleSaveModel}>
        <FaFolderOpen className="mr-2" /> Save Model
      </button>
    </div>
  );
};

export default Index;
