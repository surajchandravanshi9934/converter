import { useRef, useState } from "react";

export default function FileModal({ type = "image", isOpen, onClose }) {
  const fileInputRef = useRef(null);
  const [file, setFile] = useState(null);
  const [converted, setConverted] = useState(false);

  const handleOpenFileDialog = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setConverted(false);
    }
  };

  const handleConvert = () => {
    setTimeout(() => setConverted(true), 1000); // fake conversion
  };

  const handleDownload = () => {
    if (!converted) return;
    const link = document.createElement("a");
    link.href = URL.createObjectURL(file);
    link.download = file.name;
    link.click();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="w-full max-w-lg rounded-2xl bg-white dark:bg-gray-900 p-6 shadow-xl">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
          {type === "pdf" ? "Upload PDF" : "Upload Image"}
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
          Only <b>{type === "pdf" ? "PDF" : "PNG or JPEG"}</b> files are supported.
        </p>

        {/* Hidden input */}
        <input
          ref={fileInputRef}
          type="file"
          accept={type === "pdf" ? "application/pdf" : "image/png, image/jpeg"}
          onChange={handleFileChange}
          className="hidden"
        />

        {/* Open dialog btn */}
        <button
          onClick={handleOpenFileDialog}
          className="w-full px-4 py-2 mb-4 rounded-md bg-indigo-600 text-white hover:bg-indigo-700"
        >
          {file ? "Change File" : "Choose File"}
        </button>

        {/* Preview */}
        {file && (
          <div className="mb-4 border rounded-md p-3 bg-gray-100 dark:bg-gray-800">
            <p className="text-sm font-medium mb-2 text-gray-700 dark:text-gray-200">
              Preview: {file.name}
            </p>
            {type === "pdf" ? (
              <embed
                src={URL.createObjectURL(file)}
                type="application/pdf"
                className="w-full h-64 rounded-md"
              />
            ) : (
              <img
                src={URL.createObjectURL(file)}
                alt="preview"
                className="max-h-64 rounded-md mx-auto"
              />
            )}
          </div>
        )}

        {/* Action buttons */}
        <div className="flex justify-end gap-2">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600"
          >
            Close
          </button>
          <button
            onClick={handleConvert}
            className="px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700"
          >
            {converted ? "Re-Convert" : "Convert"}
          </button>
          <button
            onClick={handleDownload}
            disabled={!converted}
            className={`px-4 py-2 rounded-md ${
              converted
                ? "bg-green-600 text-white hover:bg-green-700"
                : "bg-gray-400 text-white cursor-not-allowed"
            }`}
          >
            Download
          </button>
        </div>
      </div>
    </div>
  );
}
