import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

export default function Modal({ isOpen, onClose, type }) {
  const [file, setFile] = useState(null);
  const [converted, setConverted] = useState(false);

  // Allowed file types based on card type
  const fileTypes =
    type === "pdf" ? "application/pdf" : "image/png, image/jpeg";

  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    if (selected) {
      setFile(selected);
      setConverted(false); // reset if new file selected
    }
  };

  const handleConvert = () => {
    if (!file) {
      alert("Please select a file first!");
      return;
    }
    // TODO: add real conversion logic here
    setTimeout(() => {
      alert(`Converted: ${file.name}`);
      setConverted(true);
    }, 800);
  };

  const handleDownload = () => {
    if (!converted) return;
    // TODO: replace with real download logic
    alert(`Downloading: ${file.name}`);
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/50" />
        </Transition.Child>

        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="w-full max-w-lg rounded-2xl bg-white dark:bg-gray-900 p-6 shadow-xl">
              <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                {type === "pdf" ? "Upload PDF" : "Upload Image"}
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                Only <b>{type === "pdf" ? "PDF" : "PNG or JPEG"}</b> files are
                supported.
              </p>

              {/* File Input */}
              <input
                type="file"
                accept={fileTypes}
                title={type === "pdf" ? "PDF Files" : "Image Files (PNG, JPG)"}
                onChange={handleFileChange}
                className="mb-4 w-full border p-2 rounded-md text-gray-900 dark:text-gray-100 dark:bg-gray-800"
              />

              {/* Preview Section */}
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

              {/* Action Buttons */}
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
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}
