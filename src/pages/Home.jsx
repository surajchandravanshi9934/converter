import React, { useState } from "react";
import RadialButton from "../components/RadialButton";
import Card from "../components/Card";
import Modal from "../components/Model";
import Step from "../components/Step";
export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  // Handle file select
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (
      file.type === "image/png" ||
      file.type === "image/jpeg" ||
      file.type === "application/pdf" // ✅ PDF bhi allow
    ) {
      console.log("Selected file:", file.name);
      setSelectedFile(file);
    } else {
      alert("Only PNG, JPEG, or PDF files are allowed.");
    }
  };

  // Handle convert button
  const handleConvert = () => {
    if (!selectedFile) {
      alert("Please upload a file first.");
      return;
    }
    alert(`Converting file: ${selectedFile.name}`);
    // ✅ Yaha tum apna conversion logic call kar sakte ho
    // e.g., API call ya local processing
    setIsOpen(false); // close modal after action
  };

  return (
    <main
      id="home"
      onMouseMove={(e) => {
        document.documentElement.style.setProperty("--x", e.clientX + "px");
        document.documentElement.style.setProperty("--y", e.clientY + "px");
      }}
    >
      <section className="relative overflow-hidden">
        {/* Background glows */}
        <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-indigo-400/40 blur-3xl animate-glow" />
        <div className="absolute top-10 right-0 w-96 h-96 rounded-full bg-fuchsia-500/40 blur-3xl animate-glow" />
        <div className="absolute bottom-[-60px] left-1/2 -translate-x-1/2 w-[800px] h-[200px] rounded-full bg-cyan-400/20 blur-3xl animate-glow" />

        <div className="mx-auto max-w-7xl px-4 pt-10 md:pt-16 pb-14">
          {/* Hero Section */}
          <div className="grid md:grid-cols-2 items-center gap-10">
            <div className="mt-30px text-indigo-950 dark:text-white">
              <h1 className="text-5xl md:text-6xl font-black leading-tight drop-shadow-sm">
                Smart Way to Convert Anything
              </h1>
              <p className="mt-4 text-indigo-900/80 dark:text-white/80 text-lg max-w-xl">
                Simple fast file conversion at your fingertips
              </p>
              <div className="mt-8 flex gap-4">
                <RadialButton href="#tools" as="a">
                  Get Started
                </RadialButton>
              </div>
            </div>

            <div className="relative">
              <img
                src="\ai.png"
                alt="AI Robot"
                className="w-[300px] h-auto object-contain animate-float"
              />
            </div>
          </div>

          {/* Tools Section */}
          <div id="tools" className="grid md:grid-cols-3 gap-6 mt-14">
            <Card
              icon="📄"
              title="PDF → Image"
              text="Turn your PDFs into images instantly."
              btn="Convert Now"
              onClick={() => {
                setIsOpen(true);
                setType("pdf");
              }}
            />

            <Card
              icon="🖼️"
              title="PNG → JPG"
              text="Convert high-quality PNGs into JPGs easily."
              btn="Convert Now"
              onClick={() => {
                setIsOpen(true);
                setType("image");
              }}
            />
            <Card
              icon="🖼️"
              title="PNG → JPG"
              text="Convert high-quality PNGs into JPGs easily."
              btn="Convert Now"
              onClick={() => {
                setIsOpen(true);
                setType("image");
              }}
            />
          </div>

          {/* Modal for file upload */}
          <Modal
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            onFileChange={handleFileChange}
            onConvert={handleConvert} // ✅ new prop
          />

          {/* How it works */}
          <div id="how" className="mt-16 rounded-3xl glass p-8">
            <h2 className="text-3xl font-extrabold text-indigo-950 dark:text-white text-center mb-6">
              How It Works
            </h2>
            <div className="grid md:grid-cols-3 gap-6 text-indigo-950 dark:text-white">
              <Step
                icon="📂"
                title="Upload your file"
                text="Drag & drop or click to select."
              />
              <Step
                icon="⚡"
                title="Select conversion type"
                text="Choose a tool from the list."
              />
              <Step
                icon="✅"
                title="Download result"
                text="Get high quality outputs in seconds."
              />
            </div>
          </div>

          {/* Footer */}
          <footer
            id="contact"
            className="text-indigo-900/80 dark:text-white/70 text-sm mt-16 pb-10 text-center"
          >
            Built by SURAJ
          </footer>
        </div>
      </section>
    </main>
  );
}
