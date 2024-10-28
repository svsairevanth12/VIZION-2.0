import React, { useState } from 'react';
import { X } from 'lucide-react';

interface OnboardingTourProps {
  onComplete: () => void;
  darkMode: boolean;
}

export default function OnboardingTour({ onComplete, darkMode }: OnboardingTourProps) {
  const [step, setStep] = useState(0);

  const steps = [
    {
      title: "Welcome to Vizion! 👋",
      content: "Let's take a quick tour to help you get started with our AI-powered image analysis tool.",
      position: "center",
    },
    {
      title: "Upload Your Image 📸",
      content: "Start by uploading an image you'd like to analyze. You can drag and drop or click to select.",
      position: "left",
    },
    {
      title: "Chat with AI 💬",
      content: "Ask questions about your image and get detailed insights using natural language.",
      position: "right",
    },
    {
      title: "Accessibility Features 🎯",
      content: "Use voice input to ask questions and listen to AI responses with our text-to-speech feature.",
      position: "right",
    },
  ];

  const handleNext = () => {
    if (step === steps.length - 1) {
      onComplete();
    } else {
      setStep(step + 1);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className={`max-w-md w-full mx-4 ${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow-xl`}>
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <h3 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
              {steps[step].title}
            </h3>
            <button
              onClick={onComplete}
              className={`p-1 ${darkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-500 hover:text-gray-700'}`}
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <p className={`mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            {steps[step].content}
          </p>
          <div className="flex justify-between items-center">
            <div className="flex gap-1">
              {steps.map((_, i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full ${
                    i === step
                      ? 'bg-blue-500'
                      : darkMode
                      ? 'bg-gray-600'
                      : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={handleNext}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              {step === steps.length - 1 ? 'Get Started' : 'Next'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}