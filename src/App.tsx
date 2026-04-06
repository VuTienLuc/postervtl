/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import html2canvas from 'html2canvas';
import { TEMPLATES } from './templates';
import { ThemeKey, PosterTemplate } from './types';
import { Header } from './components/Header';
import { ThemeSelector } from './components/ThemeSelector';
import { TemplateGallery } from './components/TemplateGallery';
import { EditorPanel } from './components/EditorPanel';

export default function App() {
  const [view, setView] = useState<'menu' | 'gallery' | 'editor'>('menu');
  const [selectedTheme, setSelectedTheme] = useState<ThemeKey | null>(null);
  const [selectedTemplate, setSelectedTemplate] = useState<PosterTemplate | null>(null);
  const [posterData, setPosterData] = useState<Record<string, string>>({});
  const [isDownloading, setIsDownloading] = useState(false);
  const [filter, setFilter] = useState<string>('all');
  
  const fileInputRef = useRef<HTMLInputElement>(null);
  const currentImageKeyRef = useRef<string | null>(null);
  const posterRef = useRef<HTMLDivElement>(null);

  const handleThemeSelect = (themeId: ThemeKey) => {
    setSelectedTheme(themeId);
    setFilter(themeId);
    setView('gallery');
  };

  const handleTemplateSelect = (template: PosterTemplate) => {
    setSelectedTemplate(template);
    setView('editor');
  };

  const handleBack = () => {
    if (view === 'editor') setView('gallery');
    else if (view === 'gallery') setView('menu');
  };

  const triggerImageUpload = (key: string) => {
    currentImageKeyRef.current = key;
    fileInputRef.current?.click();
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && currentImageKeyRef.current) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        setPosterData(prev => ({ ...prev, [currentImageKeyRef.current!]: result }));
      };
      reader.readAsDataURL(file);
    }
    e.target.value = '';
  };

  const downloadPoster = async (scale: number = 3) => {
    if (!posterRef.current) return;
    
    setIsDownloading(true);
    
    try {
      // Prepare for capture
      const editables = posterRef.current.querySelectorAll('[contenteditable="true"]');
      const savedStates: { el: Element, val: string | null }[] = [];
      
      editables.forEach(el => {
        savedStates.push({ el, val: el.getAttribute('contenteditable') });
        el.removeAttribute('contenteditable');
      });

      const canvas = await html2canvas(posterRef.current, {
        scale,
        useCORS: true,
        backgroundColor: '#ffffff',
        logging: false,
      });

      const link = document.createElement('a');
      link.download = `poster-${selectedTemplate?.id || 'export'}-${scale >= 6 ? '4K' : 'HD'}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();

      // Restore
      savedStates.forEach(state => {
        if (state.val) state.el.setAttribute('contenteditable', state.val);
      });
    } catch (err) {
      console.error("Download error:", err);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <input 
        type="file" 
        ref={fileInputRef} 
        onChange={handleImageChange} 
        accept="image/*" 
        className="hidden" 
      />

      <Header 
        view={view} 
        onBack={handleBack} 
        onDownload={downloadPoster} 
        isDownloading={isDownloading} 
      />

      <main className="flex-1 overflow-x-hidden">
        <AnimatePresence mode="wait">
          {view === 'menu' && (
            <ThemeSelector onThemeSelect={handleThemeSelect} />
          )}

          {view === 'gallery' && (
            <TemplateGallery 
              selectedTheme={selectedTheme}
              filter={filter}
              setFilter={setFilter}
              onTemplateSelect={handleTemplateSelect}
              posterData={posterData}
            />
          )}

          {view === 'editor' && selectedTemplate && (
            <EditorPanel 
              selectedTemplate={selectedTemplate}
              posterData={posterData}
              onImageUploadClick={triggerImageUpload}
              onDataChange={(key, value) => setPosterData(prev => ({ ...prev, [key]: value }))}
              posterRef={posterRef}
            />
          )}
        </AnimatePresence>
      </main>

      <footer className="bg-white border-t border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400 text-sm">
            © 2026 Student Poster Studio • Công cụ thiết kế poster chuyên nghiệp cho học sinh
          </p>
        </div>
      </footer>
    </div>
  );
}
