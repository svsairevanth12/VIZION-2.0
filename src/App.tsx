import React, { useState, useEffect } from 'react';
import { MessageCircle, Info, Home, Trash2, Sun, Moon } from 'lucide-react';
import ImageUpload from './components/ImageUpload';
import ChatInterface from './components/ChatInterface';
import MessageList from './components/MessageList';
import AboutPage from './components/AboutPage';
import OnboardingTour from './components/OnboardingTour';
import { analyzeImage } from './services/geminiService';

interface Message {
  id: number;
  text: string;
  isAi: boolean;
}

function App() {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved ? JSON.parse(saved) : false;
  });
  const [showTour, setShowTour] = useState(() => {
    const visited = localStorage.getItem('tourCompleted');
    return !visited;
  });

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handleImageUpload = async (file: File) => {
    setSelectedImage(file);
    setMessages([
      {
        id: Date.now(),
        text: "Hi! I'm Vizion. I've received your image. What would you like to know about it?",
        isAi: true,
      },
    ]);
  };

  const handleSendMessage = async (message: string) => {
    if (!selectedImage) return;

    setMessages((prev) => [
      ...prev,
      { id: Date.now(), text: message, isAi: false },
    ]);

    setIsLoading(true);
    try {
      const response = await analyzeImage(selectedImage, message);
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now(),
          text: response,
          isAi: true,
        },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now(),
          text: "I apologize, but I encountered an error analyzing the image. Please try again.",
          isAi: true,
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const clearChat = () => {
    setMessages([]);
    setSelectedImage(null);
  };

  const completeTour = () => {
    localStorage.setItem('tourCompleted', 'true');
    setShowTour(false);
  };

  return (
    <div className={`min-h-screen flex flex-col h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-gradient-to-br from-blue-50 to-gray-50'}`}>
      <nav className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="absolute inset-0 bg-blue-500 dark:bg-blue-400 blur-sm opacity-20 rounded-full"></div>
                <MessageCircle className="w-8 h-8 text-blue-500 dark:text-blue-400 relative" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-blue-700 dark:from-blue-400 dark:to-blue-600 text-transparent bg-clip-text">
                Vizion
              </h1>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                aria-label="Toggle dark mode"
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <button
                onClick={() => setShowAbout(false)}
                className="flex items-center gap-2 px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                aria-label="Home"
              >
                <Home className="w-5 h-5" />
                Home
              </button>
              <button
                onClick={() => setShowAbout(!showAbout)}
                className="flex items-center gap-2 px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                aria-label="About"
              >
                <Info className="w-5 h-5" />
                About
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-1 max-w-6xl mx-auto px-4 py-6 overflow-hidden">
        {showAbout ? (
          <AboutPage darkMode={darkMode} />
        ) : (
          <div className="grid md:grid-cols-2 gap-6 h-[calc(100vh-8rem)]">
            <div className="space-y-4">
              {!selectedImage ? (
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg h-full border dark:border-gray-700">
                  <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-4">
                    Welcome to Vizion
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    Upload an image and I'll help you analyze it using Google's Generative AI technology.
                  </p>
                  <ImageUpload onImageUpload={handleImageUpload} darkMode={darkMode} />
                </div>
              ) : (
                <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg h-full flex flex-col border dark:border-gray-700">
                  <img
                    src={URL.createObjectURL(selectedImage)}
                    alt="Uploaded"
                    className="rounded-lg object-contain flex-1 max-h-[calc(100vh-16rem)]"
                  />
                  <button
                    onClick={() => setSelectedImage(null)}
                    className="mt-4 text-sm text-gray-500 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400"
                  >
                    Remove image
                  </button>
                </div>
              )}
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden flex flex-col h-full border dark:border-gray-700">
              <div className="p-3 bg-gray-50 dark:bg-gray-700 border-b dark:border-gray-600 flex justify-between items-center">
                <h3 className="font-medium text-gray-700 dark:text-gray-200">Chat</h3>
                <button
                  onClick={clearChat}
                  className="flex items-center gap-2 px-3 py-1 text-sm text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                  aria-label="Clear chat"
                >
                  <Trash2 className="w-4 h-4" />
                  Clear Chat
                </button>
              </div>
              <div className="flex-1 overflow-y-auto">
                <MessageList messages={messages} darkMode={darkMode} />
              </div>
              <div className="p-4 border-t dark:border-gray-700 bg-gray-50 dark:bg-gray-700">
                <ChatInterface
                  onSendMessage={handleSendMessage}
                  disabled={!selectedImage || isLoading}
                  darkMode={darkMode}
                />
              </div>
            </div>
          </div>
        )}
      </main>

      <footer className="bg-white dark:bg-gray-800 border-t dark:border-gray-700 py-3 text-center text-sm text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} Vizion by Gen Hacktivists. All rights reserved.
      </footer>

      {showTour && <OnboardingTour onComplete={completeTour} darkMode={darkMode} />}
    </div>
  );
}

export default App;