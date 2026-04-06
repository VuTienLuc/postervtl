import React from 'react';
import { ArrowLeft, Download } from 'lucide-react';

interface HeaderProps {
  view: 'menu' | 'gallery' | 'editor';
  onBack: () => void;
  onDownload: (scale: number) => void;
  isDownloading: boolean;
}

export const Header: React.FC<HeaderProps> = ({ view, onBack, onDownload, isDownloading }) => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-4">
          {view !== 'menu' && (
            <button 
              onClick={onBack}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
          )}
          <h1 className="text-xl font-anton tracking-wider text-blue-600 uppercase">
            Student Poster Studio
          </h1>
        </div>
        
        {view === 'editor' && (
          <div className="flex gap-2">
            <button 
              onClick={() => onDownload(3)}
              disabled={isDownloading}
              className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg font-bold text-sm hover:bg-blue-700 transition disabled:opacity-50"
            >
              <Download className="w-4 h-4" />
              {isDownloading ? 'ĐANG TẠO...' : 'TẢI HD'}
            </button>
            <button 
              onClick={() => onDownload(6)}
              disabled={isDownloading}
              className="hidden md:flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg font-bold text-sm hover:from-purple-700 hover:to-pink-700 transition disabled:opacity-50"
            >
              <Download className="w-4 h-4" />
              TẢI 4K
            </button>
          </div>
        )}
      </div>
    </header>
  );
};
