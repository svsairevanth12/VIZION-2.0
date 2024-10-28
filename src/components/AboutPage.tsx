import React from 'react';
import { Users, School, Mail, Image, Brain, Lock, Globe, Volume2, Mic } from 'lucide-react';

interface AboutPageProps {
  darkMode: boolean;
}

export default function AboutPage({ darkMode }: AboutPageProps) {
  return (
    <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow-lg p-8 h-[calc(100vh-8rem)] overflow-auto`}>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-500 to-blue-700 dark:from-blue-400 dark:to-blue-600 text-transparent bg-clip-text animate-gradient">
          About Vizion
        </h1>
        
        <div className={`mb-8 ${darkMode ? 'bg-blue-900/20' : 'bg-blue-50'} p-6 rounded-xl`}>
          <h2 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>What is Vizion?</h2>
          <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-6`}>
            Vizion is an advanced AI-powered image analysis tool that combines the power of Google's Generative AI with an intuitive interface. Our platform enables users to gain detailed insights from images through natural conversation, with enhanced accessibility features for a more inclusive experience.
          </p>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-4 rounded-lg`}>
              <Image className="w-6 h-6 text-blue-500 mb-2" />
              <h3 className={`font-medium mb-2 ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>Image Analysis</h3>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Upload any image and get detailed analysis through natural conversation</p>
            </div>
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-4 rounded-lg`}>
              <Brain className="w-6 h-6 text-blue-500 mb-2" />
              <h3 className={`font-medium mb-2 ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>AI Powered</h3>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Leveraging Google's Generative AI for accurate and detailed insights</p>
            </div>
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-4 rounded-lg`}>
              <Lock className="w-6 h-6 text-blue-500 mb-2" />
              <h3 className={`font-medium mb-2 ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>Secure</h3>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Your uploads are processed securely and not stored permanently</p>
            </div>
          </div>
        </div>

        <div className={`mb-8 ${darkMode ? 'bg-green-900/20' : 'bg-green-50'} p-6 rounded-xl`}>
          <h2 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>Accessibility Features</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-4 rounded-lg`}>
              <Mic className="w-6 h-6 text-green-500 mb-2" />
              <h3 className={`font-medium mb-2 ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>Voice Input</h3>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Speak your questions naturally using the built-in speech recognition feature</p>
            </div>
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-4 rounded-lg`}>
              <Volume2 className="w-6 h-6 text-green-500 mb-2" />
              <h3 className={`font-medium mb-2 ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>Text-to-Speech</h3>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Listen to AI responses with high-quality text-to-speech synthesis</p>
            </div>
          </div>
        </div>

        <div className={`mb-8 ${darkMode ? 'bg-purple-900/20' : 'bg-purple-50'} p-6 rounded-xl`}>
          <div className="flex items-center gap-2 mb-4">
            <Globe className="w-6 h-6 text-purple-500" />
            <h2 className={`text-xl font-semibold ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>Multilingual Support</h2>
          </div>
          <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-4`}>
            Vizion's AI model understands and analyzes images across multiple languages, making it accessible to users worldwide. The system can:
          </p>
          <ul className={`list-disc list-inside ${darkMode ? 'text-gray-400' : 'text-gray-600'} space-y-2 ml-4`}>
            <li>Process queries in multiple languages</li>
            <li>Provide detailed analysis in the user's preferred language</li>
            <li>Handle complex visual concepts across cultural contexts</li>
            <li>Support voice input in various languages and accents</li>
          </ul>
        </div>
        
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Users className={`w-6 h-6 ${darkMode ? 'text-blue-400' : 'text-blue-500'}`} />
            <h2 className={`text-xl font-semibold ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>Team Gen Hacktivists</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className={`${darkMode ? 'bg-gray-700/50' : 'bg-gray-50'} p-4 rounded-lg`}>
              <h3 className={`font-medium ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>Tilak G</h3>
              <div className="flex items-center gap-2 text-gray-600 mt-1">
                <Mail className={`w-4 h-4 ${darkMode ? 'text-gray-400' : ''}`} />
                <a href="mailto:23f21a3157@gatesit.ac.in" className={`hover:text-blue-500 ${darkMode ? 'text-gray-400' : ''}`}>
                  23f21a3157@gatesit.ac.in
                </a>
              </div>
            </div>
            
            <div className={`${darkMode ? 'bg-gray-700/50' : 'bg-gray-50'} p-4 rounded-lg`}>
              <h3 className={`font-medium ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>Revanth S</h3>
              <div className="flex items-center gap-2 text-gray-600 mt-1">
                <Mail className={`w-4 h-4 ${darkMode ? 'text-gray-400' : ''}`} />
                <a href="mailto:22f21a05a9@gatesit.ac.in" className={`hover:text-blue-500 ${darkMode ? 'text-gray-400' : ''}`}>
                  22f21a05a9@gatesit.ac.in
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <School className={`w-6 h-6 ${darkMode ? 'text-blue-400' : 'text-blue-500'}`} />
            <h2 className={`text-xl font-semibold ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>Institution</h2>
          </div>
          <a 
            href="https://gatesit.ac.in/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} hover:text-blue-500 transition-colors`}
          >
            GATES Institute of Technology
          </a>
        </div>
        
        <div className={`text-center text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'} mt-8 pt-4 border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
          © {new Date().getFullYear()} Vizion by Gen Hacktivists. All rights reserved.
        </div>
      </div>
    </div>
  );
}