import { useState } from "react";

const ResumeUpload = () => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (!file) return;
    // Upload logic will go here later
    console.log("Uploading", file.name);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 px-4">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
          📄 Upload Resume for Analysis
        </h2>

        <input
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={handleFileChange}
          className="w-full mb-4 text-sm text-gray-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-full file:border-0
            file:text-sm file:font-semibold
            file:bg-indigo-50 file:text-indigo-700
            hover:file:bg-indigo-100
          "
        />

        <button
          onClick={handleUpload}
          disabled={!file}
          className={`w-full py-2 px-4 mt-2 rounded-md font-medium text-white ${
            file
              ? "bg-indigo-600 hover:bg-indigo-700"
              : "bg-gray-400 cursor-not-allowed"
          } transition duration-200`}
        >
          Upload & Analyze
        </button>

        {file && (
          <p className="text-sm text-center text-gray-600 mt-4">
            Selected file: <span className="font-medium">{file.name}</span>
          </p>
        )}
      </div>
    </div>
  );
};

export default ResumeUpload;
