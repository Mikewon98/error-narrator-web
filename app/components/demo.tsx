"use client";

import { BrainIcon, SpeakerIcon, ZapIcon } from "./icons";
import { analyzeError } from "../services/geminiService";
import { motion, AnimatePresence } from "framer-motion";
import { useErrorNarrator } from "error-narrator";
import { Section } from "../types/types";
import { useState } from "react";

const SAMPLE_ERRORS = [
  "Module not found: ./nonexistent",
  "Cannot read properties of undefined (reading 'map') in TodoList.tsx",
  "Unexpected token '<' in JSON at position 0 from API response",
  "Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside useEffect.",
];

const errorMessage =
  "I couldn't reach the AI analysis service right now, but check your console for details.";

export const Demo = () => {
  const { handleError, test, disable, enable } = useErrorNarrator();

  const [currentError, setCurrentError] = useState<string | null>(null);
  const [analysis, setAnalysis] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const triggerError = (errorMsg: string, error: Error) => {
    try {
      setCurrentError(errorMsg);
      setAnalysis(null); // Reset previous analysis

      throw error;
    } catch (error: any) {
      handleError(error as Error);
    }
  };

  const handleAnalyze = async () => {
    if (!currentError) return;
    setIsAnalyzing(true);
    const result = await analyzeError(currentError);
    setAnalysis(result);
    setIsAnalyzing(false);

    if (result == errorMessage) {
      disable();
    } else {
      enable();
      test(`Analysis: ${result}`);
    }
  };

  return (
    <section
      id={Section.DEMO}
      className="py-24 bg-white text-black overflow-hidden relative"
    >
      <div className="absolute top-0 left-0 w-full h-20 bg-linear-to-b from-black to-transparent pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Experience It Live
          </h2>
          <p className="text-gray-600 text-lg">
            This demo uses your browser's TTS engine to simulate the{" "}
            <code>error-narrator</code> package.
          </p>
        </div>

        <div className="grid gap-8">
          {/* Controls */}
          <div className="flex flex-wrap justify-center gap-4">
            {SAMPLE_ERRORS.map((err, idx) => (
              <button
                key={idx}
                onClick={() => triggerError(err, new Error(err))}
                className="px-4 py-3 border-2 border-black hover:bg-black hover:text-white transition-all font-mono text-sm text-left shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5"
              >
                Trigger Error {idx + 1}
              </button>
            ))}
          </div>

          {/* Visualization Area */}
          <div className="min-h-75 border-2 border-black p-8 relative flex flex-col items-center justify-center bg-gray-50">
            <AnimatePresence mode="wait">
              {currentError ? (
                <motion.div
                  key="error-state"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="w-full max-w-2xl"
                >
                  <div className="bg-red-50 border-l-4 border-black p-6 mb-8 shadow-lg">
                    <div className="flex items-start gap-4">
                      <div className={`mt-1`}>
                        <SpeakerIcon className="w-8 h-8 text-black" />
                      </div>
                      <div>
                        <h3 className="font-bold text-xl mb-2 text-red-900 uppercase tracking-wider">
                          Uncaught Exception
                        </h3>
                        <p className="font-mono text-red-800 wrap-break-word">
                          {currentError}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <button
                      onClick={handleAnalyze}
                      disabled={isAnalyzing}
                      className="group flex items-center gap-2 px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-all disabled:opacity-50"
                    >
                      {isAnalyzing ? (
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      ) : (
                        <BrainIcon className="w-5 h-5" />
                      )}
                      <span>Ask AI to Explain</span>
                    </button>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="idle-state"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center text-gray-400"
                >
                  <ZapIcon className="w-16 h-16 mx-auto mb-4 opacity-20" />
                  <p>
                    System Normal. Click a trigger above to simulate a crash.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* AI Analysis Result */}
            <AnimatePresence>
              {analysis && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="mt-8 bg-black text-white p-6 rounded-lg w-full max-w-2xl border border-gray-800"
                >
                  <div className="flex items-center gap-2 mb-3 border-b border-gray-700 pb-2">
                    <BrainIcon className="w-4 h-4 text-gray-300" />
                    <span className="text-xs font-mono uppercase tracking-widest text-gray-300">
                      Gemini Analysis
                    </span>
                  </div>
                  <p className="font-mono text-sm leading-relaxed">
                    {analysis}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
