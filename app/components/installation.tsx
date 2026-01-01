"use client";

import { CheckIcon, CopyIcon, TerminalIcon } from "./icons";
import { Section } from "../types/types";
import { motion } from "framer-motion";
import { useState } from "react";

export const Installation = () => {
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  const codeString = `import { ErrorNarratorProvider } from "error-narrator";
// inside your page use the useErrorNarrator(); hook to trigger errors
function App() {
  return (
    <ErrorNarratorProvider options={{ enabled: true }}>
      <MyComponent />
    </ErrorNarratorProvider>
  );
}`;

  return (
    <section
      id={Section.INSTALLATION}
      className="py-12 md:py-24 px-4 bg-black border-t border-white/10"
    >
      <div className="max-w-5xl mx-auto">
        <div className="mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Installation</h2>
          <p className="text-gray-400 text-base md:text-lg">
            Get started in seconds. Zero heavy dependencies.
          </p>
        </div>

        {/* Added min-w-0 to grid children to prevent overflow */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Package Managers */}
          <div className="space-y-4 md:space-y-6 min-w-0">
            <h3 className="text-xl font-mono text-white mb-4 flex items-center gap-2">
              <TerminalIcon className="text-gray-400" />
              <span>Package Manager</span>
            </h3>

            {[
              "npm install error-narrator",
              "yarn add error-narrator",
              "pnpm add error-narrator",
            ].map((cmd, i) => (
              <motion.div
                key={cmd}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative bg-white/5 border border-white/10 p-4 rounded-lg flex justify-between items-center hover:border-white/30 transition-colors gap-4"
              >
                {/* Added overflow-hidden and truncate to the code tag */}
                <code className="font-mono text-sm md:text-base text-gray-300 truncate">
                  {cmd}
                </code>
                <button
                  onClick={() => handleCopy(cmd, `cmd-${i}`)}
                  className="shrink-0 p-2 hover:bg-white/10 rounded transition-colors"
                  aria-label="Copy command"
                >
                  {copied === `cmd-${i}` ? (
                    <CheckIcon className="text-white w-5 h-5" />
                  ) : (
                    <CopyIcon className="text-gray-500 group-hover:text-white w-5 h-5" />
                  )}
                </button>
              </motion.div>
            ))}
          </div>

          {/* Usage Example */}
          <div className="min-w-0">
            <h3 className="text-xl font-mono text-white mb-4">Usage</h3>
            <div className="relative bg-[#0a0a0a] border border-white/10 rounded-lg p-4 md:p-6 overflow-hidden">
              <div className="absolute top-2 right-2 md:top-4 md:right-4 z-10">
                <button
                  onClick={() => handleCopy(codeString, "code")}
                  className="p-2 bg-[#0a0a0a]/80 backdrop-blur-sm hover:bg-white/10 rounded transition-colors"
                >
                  {copied === "code" ? (
                    <CheckIcon className="w-5 h-5 text-white" />
                  ) : (
                    <CopyIcon className="w-5 h-5 text-gray-500 hover:text-white" />
                  )}
                </button>
              </div>

              {/* Ensure pre is set to overflow-x-auto and has a max-width */}
              <pre className="block w-full font-mono text-xs md:text-sm overflow-x-auto text-gray-300 leading-relaxed mt-4 custom-scrollbar">
                <code className="inline-block min-w-full">
                  <span className="text-gray-500">import</span> {"{"}{" "}
                  <span className="text-white">ErrorNarratorProvider</span>{" "}
                  {"}"} <span className="text-gray-500">from</span>{" "}
                  <span className="text-gray-400">'error-narrator'</span>;
                  {"\n\n"}
                  <span>
                    // inside your page use the{" "}
                    <span className="text-white">useErrorNarrator();</span> hook
                    to trigger errors
                  </span>
                  {"\n\n"}
                  <span className="text-gray-500">function</span>{" "}
                  <span className="text-white">App</span>() {"{"}
                  {"\n"}
                  {"  "}
                  <span className="text-gray-500">return</span> ({"\n"}
                  {"    "}
                  <span className="text-gray-500">&lt;&gt;</span>
                  {"\n"}
                  {"      "}
                  <span className="text-gray-500">&lt;</span>
                  <span className="text-white">ErrorNarratorProvider</span>
                  {"\n"}
                  {"        "}options={"{"}
                  <span className="text-white">enabled: true</span>
                  {"}"}
                  {"\n"}
                  {"      "}
                  <span className="text-gray-500">/&gt;</span>
                  {"\n"}
                  {"      "}
                  <span className="text-gray-500">&lt;</span>
                  <span className="text-white">MyComponent </span>{" "}
                  <span className="text-gray-500">/&gt;</span>
                  {"\n"}
                  {"    "}
                  <span className="text-gray-500">&lt;</span>
                  <span className="text-white">/ErrorNarratorProvider</span>
                  <span className="text-gray-500">&gt;</span>
                  {"\n"}
                  {"    "}
                  <span className="text-gray-500">&lt;/&gt;</span>
                  {"\n"}
                  {"  "});
                  {"\n"}
                  {"}"}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
