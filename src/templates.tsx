import React from 'react';
import { PosterTemplate } from './types';
import { SportBorder, ElegantBorder, CuteBorder, CertificateBorder, ModernBorder, HeritageBorder, WavingFlag, LaurelWreath } from './components/VectorBorders';

export const TEMPLATES: PosterTemplate[] = [
  {
    id: 290,
    name: 'Vinh Danh Chân Dung - Thanh Lịch',
    tags: ['1anh', 'tuyenduong', 'portrait'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-white flex flex-col relative overflow-hidden" style={{ color: data.globalTextColor }}>
        <div className="h-[75%] w-full relative">
          <div className="w-full h-full img-slot cursor-pointer" style={{ backgroundImage: `url(${data.l290_i1})` }} onClick={() => onImageClick('l290_i1')} />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent pointer-events-none" />
        </div>
        <div className="flex-1 bg-gradient-to-b from-white to-blue-50 p-6 flex flex-col justify-center items-center text-center relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <LaurelWreath color="#3b82f6" className="w-24 h-24 opacity-10" />
          </div>
          <h3 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam font-medium text-blue-600/60 text-[10px] uppercase tracking-[0.4em] mb-2 pointer-events-auto">
            {data.l290_t1 || 'TRƯỜNG THPT NGUYỄN HỮU CẢNH'}
          </h3>
          <h1 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-anton text-3xl text-blue-900 uppercase tracking-tight pointer-events-auto">
            {data.l290_t2 || 'NGUYỄN VĂN A'}
          </h1>
          <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam text-blue-700/70 text-sm font-medium pointer-events-auto">
            {data.l290_t3 || 'Lớp 12A1'}
          </p>
          <div className="mt-3 px-4 py-1 bg-blue-900 text-white rounded-full">
            <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam font-bold text-[10px] uppercase tracking-widest pointer-events-auto">
              {data.l290_t4 || 'GIẢI NHẤT HỌC SINH GIỎI'}
            </p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 291,
    name: 'Vinh Danh Chân Dung - Quyền Quý',
    tags: ['1anh', 'tuyenduong', 'portrait', 'dark'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-emerald-950 flex flex-col relative overflow-hidden" style={{ color: data.globalTextColor }}>
        <div className="h-[75%] w-full relative">
          <div className="w-full h-full img-slot opacity-90 cursor-pointer" style={{ backgroundImage: `url(${data.l291_i1})` }} onClick={() => onImageClick('l291_i1')} />
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-transparent to-transparent pointer-events-none" />
        </div>
        <div className="flex-1 bg-gradient-to-b from-emerald-950 to-emerald-900 p-6 flex flex-col justify-center items-center text-center">
          <h3 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam font-medium text-emerald-400/60 text-[10px] uppercase tracking-[0.4em] mb-2 pointer-events-auto">
            {data.l291_t1 || 'THPT NGUYỄN HỮU CẢNH'}
          </h3>
          <h1 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-anton text-4xl text-white uppercase tracking-tighter pointer-events-auto">
            {data.l291_t2 || 'TRẦN THỊ B'}
          </h1>
          <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam text-emerald-300/70 text-sm font-light pointer-events-auto">
            {data.l291_t3 || 'Lớp 11B2'}
          </p>
          <div className="mt-4 h-px w-12 bg-amber-400/50" />
          <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam text-amber-400 text-xs mt-3 font-bold uppercase tracking-[0.2em] pointer-events-auto">
            {data.l291_t4 || 'HUY CHƯƠNG VÀNG OLYMPIC'}
          </p>
        </div>
      </div>
    )
  },
  {
    id: 292,
    name: 'Vinh Danh Chân Dung - Hiện Đại',
    tags: ['1anh', 'tuyenduong', 'portrait'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-blue-50 flex flex-col relative overflow-hidden" style={{ color: data.globalTextColor }}>
        <div className="h-[75%] w-full relative">
          <div className="w-full h-full img-slot cursor-pointer" style={{ backgroundImage: `url(${data.l292_i1})` }} onClick={() => onImageClick('l292_i1')} />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-6 left-6 right-6 pointer-events-none">
             <div className="h-1 w-12 bg-blue-400 mb-2" />
             <h1 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-anton text-5xl text-white uppercase leading-none pointer-events-auto">
              {data.l292_t2 || 'LÊ VĂN C'}
            </h1>
          </div>
        </div>
        <div className="flex-1 bg-blue-900 p-6 flex flex-col justify-center relative">
          <div className="flex justify-between items-end">
            <div className="space-y-1">
              <h3 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam font-bold text-blue-300 text-[10px] uppercase tracking-widest pointer-events-auto">
                {data.l292_t1 || 'THPT NGUYỄN HỮU CẢNH'}
              </h3>
              <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam text-blue-100/60 text-sm pointer-events-auto">
                {data.l292_t3 || 'Lớp 10C3'}
              </p>
            </div>
            <div className="text-right">
              <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam text-white font-black text-lg uppercase leading-tight pointer-events-auto">
                {data.l292_t4 || 'GIẢI KHUYẾN KHÍCH'}
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 287,
    name: 'Vinh Danh Huy Chương Vàng',
    tags: ['1anh', 'tuyenduong', 'gold'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-gradient-to-br from-amber-50 via-white to-amber-100/50 p-8 flex flex-col items-center justify-center relative overflow-hidden" style={{ color: data.globalTextColor }}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(255,255,255,0.8)_0%,_transparent_70%)] pointer-events-none" />
        <CertificateBorder color="#d97706" className="opacity-10" />
        <div className="z-10 text-center mb-8">
          <h3 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam font-bold text-amber-800/60 text-sm uppercase tracking-[0.3em] pointer-events-auto">
            {data.l287_t1 || 'BẢNG VÀNG DANH DỰ'}
          </h3>
        </div>
        <div className="relative z-10 mb-8">
          <LaurelWreath color="#d97706" className="absolute -inset-12 w-[calc(100%+6rem)] h-[calc(100%+6rem)] opacity-20" />
          <div className="w-56 h-56 rounded-full overflow-hidden border-4 border-white shadow-[0_10px_30px_rgba(217,119,6,0.1)] relative">
            <div className="w-full h-full img-slot" style={{ backgroundImage: `url(${data.l287_i1})` }} onClick={() => onImageClick('l287_i1')} />
          </div>
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white text-amber-600 w-14 h-14 rounded-full flex items-center justify-center text-2xl shadow-lg border-2 border-amber-100 z-20">🥇</div>
        </div>
        <div className="z-10 text-center space-y-3">
          <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-anton text-4xl text-amber-900 uppercase tracking-tight pointer-events-auto">
            {data.l287_t2 || 'HUY CHƯƠNG VÀNG'}
          </h2>
          <div className="h-px w-16 bg-amber-200 mx-auto" />
          <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam text-amber-800/80 font-medium text-base pointer-events-auto">
            {data.l287_t3 || 'THÀNH TÍCH XUẤT SẮC VƯỢT TRỘI'}
          </p>
        </div>
      </div>
    )
  },
  {
    id: 288,
    name: 'Vinh Danh Huy Chương Bạc',
    tags: ['1anh', 'tuyenduong', 'silver'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-gradient-to-br from-slate-50 via-white to-slate-100/50 p-8 flex flex-col items-center justify-center relative overflow-hidden" style={{ color: data.globalTextColor }}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(255,255,255,0.8)_0%,_transparent_70%)] pointer-events-none" />
        <CertificateBorder color="#64748b" className="opacity-10" />
        <div className="z-10 text-center mb-8">
          <h3 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam font-bold text-slate-600/60 text-sm uppercase tracking-[0.3em] pointer-events-auto">
            {data.l288_t1 || 'BẢNG VÀNG DANH DỰ'}
          </h3>
        </div>
        <div className="relative z-10 mb-8">
          <LaurelWreath color="#64748b" className="absolute -inset-12 w-[calc(100%+6rem)] h-[calc(100%+6rem)] opacity-20" />
          <div className="w-56 h-56 rounded-full overflow-hidden border-4 border-white shadow-[0_10px_30px_rgba(100,116,139,0.1)] relative">
            <div className="w-full h-full img-slot" style={{ backgroundImage: `url(${data.l288_i1})` }} onClick={() => onImageClick('l288_i1')} />
          </div>
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white text-slate-500 w-14 h-14 rounded-full flex items-center justify-center text-2xl shadow-lg border-2 border-slate-100 z-20">🥈</div>
        </div>
        <div className="z-10 text-center space-y-3">
          <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-anton text-4xl text-slate-800 uppercase tracking-tight pointer-events-auto">
            {data.l288_t2 || 'HUY CHƯƠNG BẠC'}
          </h2>
          <div className="h-px w-16 bg-slate-200 mx-auto" />
          <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam text-slate-700/80 font-medium text-base pointer-events-auto">
            {data.l288_t3 || 'THÀNH TÍCH ẤN TƯỢNG'}
          </p>
        </div>
      </div>
    )
  },
  {
    id: 289,
    name: 'Vinh Danh Huy Chương Đồng',
    tags: ['1anh', 'tuyenduong', 'bronze'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-gradient-to-br from-orange-50 via-white to-orange-100/50 p-8 flex flex-col items-center justify-center relative overflow-hidden" style={{ color: data.globalTextColor }}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(255,255,255,0.8)_0%,_transparent_70%)] pointer-events-none" />
        <CertificateBorder color="#c2410c" className="opacity-10" />
        <div className="z-10 text-center mb-8">
          <h3 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam font-bold text-orange-800/60 text-sm uppercase tracking-[0.3em] pointer-events-auto">
            {data.l289_t1 || 'BẢNG VÀNG DANH DỰ'}
          </h3>
        </div>
        <div className="relative z-10 mb-8">
          <LaurelWreath color="#c2410c" className="absolute -inset-12 w-[calc(100%+6rem)] h-[calc(100%+6rem)] opacity-20" />
          <div className="w-56 h-56 rounded-full overflow-hidden border-4 border-white shadow-[0_10px_30px_rgba(194,65,12,0.1)] relative">
            <div className="w-full h-full img-slot" style={{ backgroundImage: `url(${data.l289_i1})` }} onClick={() => onImageClick('l289_i1')} />
          </div>
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white text-orange-600 w-14 h-14 rounded-full flex items-center justify-center text-2xl shadow-lg border-2 border-orange-100 z-20">🥉</div>
        </div>
        <div className="z-10 text-center space-y-3">
          <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-anton text-4xl text-orange-900 uppercase tracking-tight pointer-events-auto">
            {data.l289_t2 || 'HUY CHƯƠNG ĐỒNG'}
          </h2>
          <div className="h-px w-16 bg-orange-200 mx-auto" />
          <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam text-orange-800/80 font-medium text-base pointer-events-auto">
            {data.l289_t3 || 'THÀNH TÍCH ĐÁNG TỰ HÀO'}
          </p>
        </div>
      </div>
    )
  },
  {
    id: 282,
    name: 'Olympic Vàng - THPT Nguyễn Hữu Cảnh',
    tags: ['1anh', 'tuyenduong', 'olympic'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-white p-6 flex flex-col relative" style={{ color: data.globalTextColor }}>
        <CertificateBorder color="#d4d4d8" className="opacity-40" />
        <div className="text-center mb-4 z-10">
          <h3 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam font-bold text-sm text-zinc-500 uppercase tracking-[0.2em] pointer-events-auto">
            {data.l282_t1 || 'TRƯỜNG THPT NGUYỄN HỮU CẢNH'}
          </h3>
          <div className="h-px w-20 bg-zinc-200 mx-auto mt-2" />
        </div>
        <div className="flex-1 flex flex-col items-center justify-center z-10">
          <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-zinc-100 shadow-xl mb-6 relative">
            <div className="w-full h-full img-slot" style={{ backgroundImage: `url(${data.l282_i1})` }} onClick={() => onImageClick('l282_i1')} />
            <div className="absolute -bottom-2 -right-2 bg-white text-amber-600 w-14 h-14 rounded-full flex items-center justify-center text-2xl shadow-lg border-2 border-amber-50">🥇</div>
          </div>
          <div className="text-center space-y-2">
            <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-anton text-4xl text-zinc-900 uppercase tracking-tight pointer-events-auto">
              {data.l282_t2 || 'VINH QUANG OLYMPIC'}
            </h2>
            <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam text-amber-700 font-bold text-lg pointer-events-auto">
              {data.l282_t3 || 'HUY CHƯƠNG VÀNG'}
            </p>
            <div className="border border-zinc-200 text-zinc-600 px-6 py-1.5 rounded-full inline-block mt-4">
              <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam font-medium text-xs uppercase tracking-wider pointer-events-auto">
                {data.l282_t4 || 'KỲ THI OLYMPIC TRUYỀN THỐNG 30/4'}
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 283,
    name: 'Đội Tuyển Olympic - THPT Nguyễn Hữu Cảnh',
    tags: ['3anh', 'tuyenduong', 'olympic'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-[#0f172a] p-6 flex flex-col relative" style={{ color: data.globalTextColor }}>
        <ModernBorder color="#334155" className="opacity-50" />
        <div className="text-center mb-6 z-10">
          <h3 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam font-medium text-slate-400 text-xs uppercase tracking-[0.4em] pointer-events-auto">
            {data.l283_t1 || 'TRƯỜNG THPT NGUYỄN HỮU CẢNH'}
          </h3>
        </div>
        <div className="flex-1 flex flex-col z-10">
          <div className="grid grid-cols-3 gap-3 h-1/2 mb-6">
            {[1, 2, 3].map(i => (
              <div key={i} className="rounded-lg overflow-hidden border border-slate-700 shadow-2xl">
                <div className="w-full h-full img-slot" style={{ backgroundImage: `url(${data[`l283_i${i}`]})` }} onClick={() => onImageClick(`l283_i${i}`)} />
              </div>
            ))}
          </div>
          <div className="text-center flex-1 flex flex-col justify-center">
            <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-anton text-5xl text-white uppercase tracking-tight pointer-events-auto">
              {data.l283_t2 || 'OLYMPIC TEAM'}
            </h2>
            <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam text-slate-400 text-base mt-3 font-light italic pointer-events-auto">
              {data.l283_t3 || 'NHỮNG GƯƠNG MẶT VÀNG TRONG LÀNG TRI THỨC'}
            </p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 284,
    name: 'Ngôi Sao Olympic - THPT Nguyễn Hữu Cảnh',
    tags: ['1anh', 'tuyenduong', 'olympic'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-zinc-950 p-0 flex flex-col relative" style={{ color: data.globalTextColor }}>
        <div className="h-2/3 w-full relative">
          <div className="w-full h-full img-slot" style={{ backgroundImage: `url(${data.l284_i1})` }} onClick={() => onImageClick('l284_i1')} />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
          <div className="absolute top-6 left-0 right-0 text-center">
            <h3 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam font-medium text-white/60 text-xs uppercase tracking-[0.3em] pointer-events-auto">
              {data.l284_t1 || 'THPT NGUYỄN HỮU CẢNH'}
            </h3>
          </div>
        </div>
        <div className="flex-1 bg-zinc-950 p-6 flex flex-col justify-center items-center text-center">
          <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-anton text-4xl text-white uppercase tracking-widest pointer-events-auto">
            {data.l284_t2 || 'OLYMPIC STAR'}
          </h2>
          <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam text-zinc-400 text-xs mt-4 font-medium uppercase tracking-widest pointer-events-auto">
            {data.l284_t3 || 'VINH DANH HỌC SINH GIỎI CẤP THÀNH PHỐ'}
          </p>
          <div className="mt-6 flex gap-3">
            <div className="text-amber-500 text-sm">★</div>
            <div className="text-amber-500 text-sm">★</div>
            <div className="text-amber-500 text-sm">★</div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 285,
    name: 'Bảng Vàng Olympic - THPT Nguyễn Hữu Cảnh',
    tags: ['2anh', 'tuyenduong', 'olympic'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-[#1e1b4b] p-6 flex flex-col relative" style={{ color: data.globalTextColor }}>
        <ElegantBorder color="#312e81" className="opacity-50" />
        <div className="text-center mb-4 z-10">
          <h3 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam font-medium text-indigo-300/60 text-xs uppercase tracking-[0.3em] pointer-events-auto">
            {data.l285_t1 || 'TRƯỜNG THPT NGUYỄN HỮU CẢNH'}
          </h3>
        </div>
        <div className="flex-1 flex gap-4 mb-6 z-10">
          <div className="flex-1 rounded-xl overflow-hidden border border-indigo-500/30 shadow-2xl">
            <div className="w-full h-full img-slot" style={{ backgroundImage: `url(${data.l285_i1})` }} onClick={() => onImageClick('l285_i1')} />
          </div>
          <div className="flex-1 rounded-xl overflow-hidden border border-indigo-500/30 shadow-2xl">
            <div className="w-full h-full img-slot" style={{ backgroundImage: `url(${data.l285_i2})` }} onClick={() => onImageClick('l285_i2')} />
          </div>
        </div>
        <div className="text-center z-10">
          <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-anton text-5xl text-white uppercase tracking-tight pointer-events-auto">
            {data.l285_t2 || 'BẢNG VÀNG OLYMPIC'}
          </h2>
          <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam text-indigo-300 text-xs mt-3 uppercase tracking-[0.2em] font-medium pointer-events-auto">
            {data.l285_t3 || 'NƠI TÔN VINH NHỮNG TÀI NĂNG TRẺ'}
          </p>
        </div>
      </div>
    )
  },
  {
    id: 286,
    name: 'Đỉnh Cao Olympic - THPT Nguyễn Hữu Cảnh',
    tags: ['1anh', 'tuyenduong', 'olympic'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-zinc-900 p-8 flex flex-col items-center justify-center relative" style={{ color: data.globalTextColor }}>
        <HeritageBorder color="#3f3f46" className="opacity-40" />
        <div className="absolute top-6 left-0 right-0 text-center z-10">
          <h3 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam font-medium text-zinc-500 text-xs uppercase tracking-[0.3em] pointer-events-auto">
            {data.l286_t1 || 'THPT NGUYỄN HỮU CẢNH'}
          </h3>
        </div>
        <div className="w-full h-1/2 rounded-xl overflow-hidden border border-zinc-700 shadow-2xl mb-8 z-10 mt-8">
          <div className="w-full h-full img-slot" style={{ backgroundImage: `url(${data.l286_i1})` }} onClick={() => onImageClick('l286_i1')} />
        </div>
        <div className="text-center z-10">
          <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-anton text-5xl text-white uppercase tracking-tight pointer-events-auto">
            {data.l286_t2 || 'OLYMPIC CHAMPION'}
          </h2>
          <div className="h-px w-20 bg-zinc-700 mx-auto my-5" />
          <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam text-zinc-400 text-xs font-medium uppercase tracking-widest pointer-events-auto">
            {data.l286_t3 || 'CHINH PHỤC ĐỈNH CAO TRI THỨC'}
          </p>
        </div>
      </div>
    )
  },
  {
    id: 1,
    name: 'Tiêu điểm',
    tags: ['1anh', 'kyyeu', 'sukien', 'prom'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-black">
        <div 
          className="img-slot w-full h-full absolute inset-0 opacity-80 mix-blend-luminosity" 
          style={{ backgroundImage: `url(${data.l1_i1})` }}
          onClick={() => onImageClick('l1_i1')}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50 pointer-events-none" />
        <div className="absolute inset-0 p-6 flex flex-col justify-between z-10 pointer-events-none">
          <div contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-oswald text-white tracking-widest text-sm uppercase self-start pointer-events-auto">
            {data.l1_t1 || 'HEADER TEXT'}
          </div>
          <div>
            <h1 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-anton text-[5rem] leading-none text-white uppercase drop-shadow-lg pointer-events-auto">
              {data.l1_t2 || 'MAIN TITLE'}
            </h1>
            <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-greatvibes text-5xl text-yellow-400 mt-2 transform -rotate-3 leading-tight pointer-events-auto">
              {data.l1_t3 || 'Subtitle'}
            </p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 2,
    name: 'Song Hành',
    tags: ['2anh', 'thethao', 'sukien'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-[#e5e7eb] flex overflow-hidden">
        <div 
          className="w-[55%] h-full img-slot clip-split-l relative z-10 shadow-[10px_0_20px_rgba(0,0,0,0.5)]" 
          style={{ backgroundImage: `url(${data.l2_i1})` }}
          onClick={() => onImageClick('l2_i1')}
        />
        <div 
          className="w-[55%] h-full img-slot absolute right-0" 
          style={{ backgroundImage: `url(${data.l2_i2})` }}
          onClick={() => onImageClick('l2_i2')}
        />
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center pointer-events-none">
          <div className="bg-white/90 backdrop-blur p-4 rounded-xl shadow-2xl text-center pointer-events-auto border-2 border-gray-200">
            <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-oswald text-3xl font-bold text-gray-900 uppercase">
              {data.l2_t1 || 'T1'}
            </h2>
            <span contentEditable suppressContentEditableWarning={true} spellCheck={false} className="block text-sm font-bold text-red-500 my-1 font-anton">
              VS
            </span>
            <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-oswald text-3xl font-bold text-gray-900 uppercase">
              {data.l2_t2 || 'T2'}
            </h2>
          </div>
          <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="mt-4 font-montserrat font-bold text-white bg-black px-4 py-1 text-sm uppercase pointer-events-auto">
            {data.l2_t3 || 'MATCH DAY'}
          </p>
        </div>
      </div>
    )
  },
  {
    id: 3,
    name: 'Scrapbook',
    tags: ['3anh', 'kyyeu'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-[#FDF6E3] p-6 relative" style={{ backgroundImage: 'radial-gradient(#d1d5db 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
        <h1 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-pacifico text-4xl text-gray-800 text-center mb-6 z-20 relative">
          {data.l3_t1 || 'Scrapbook'}
        </h1>
        <div className="absolute top-[100px] left-[20px] w-44 h-44 bg-white p-2 pb-8 shadow-lg transform -rotate-6 z-10 border border-gray-200">
          <div 
            className="img-slot w-full h-full bg-gray-300" 
            style={{ backgroundImage: `url(${data.l3_i1})` }}
            onClick={() => onImageClick('l3_i1')}
          />
          <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-sriracha text-[15px] text-center mt-1 text-gray-700 leading-tight">
            {data.l3_t2 || 'Memories'}
          </p>
        </div>
        <div className="absolute top-[220px] right-[10px] w-48 h-36 bg-white p-2 pb-6 shadow-xl transform rotate-3 z-20 border border-gray-200">
          <div 
            className="img-slot w-full h-full bg-gray-300" 
            style={{ backgroundImage: `url(${data.l3_i2})` }}
            onClick={() => onImageClick('l3_i2')}
          />
        </div>
        <div className="absolute bottom-[20px] left-[40px] w-56 h-32 bg-white p-2 pb-6 shadow-md transform -rotate-2 z-30 border border-gray-200">
          <div 
            className="img-slot w-full h-full bg-gray-300" 
            style={{ backgroundImage: `url(${data.l3_i3})` }}
            onClick={() => onImageClick('l3_i3')}
          />
          <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-sriracha text-lg text-center mt-1 text-red-600">
            {data.l3_t3 || 'Forever'}
          </p>
        </div>
      </div>
    )
  },
  {
    id: 4,
    name: 'Trích dẫn',
    tags: ['1anh'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-[#111827] flex flex-col p-6">
        <div 
          className="img-slot w-full h-[60%] rounded-2xl shadow-inner border border-gray-700 relative overflow-hidden" 
          style={{ backgroundImage: `url(${data.l4_i1})` }}
          onClick={() => onImageClick('l4_i1')}
        >
          <div className="absolute inset-0 bg-blue-900 mix-blend-overlay opacity-30" />
        </div>
        <div className="flex-1 mt-6 relative flex flex-col justify-center">
          <span contentEditable suppressContentEditableWarning={true} spellCheck={false} className="absolute top-0 left-0 text-6xl text-gray-700 font-playfair opacity-50">"</span>
          <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-cormorant text-xl text-white italic text-center z-10 px-4 leading-relaxed">
            {data.l4_t1 || 'Quote'}
          </p>
          <h3 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-montserrat font-bold text-yellow-500 text-sm text-center mt-4 uppercase tracking-widest">
            {data.l4_t2 || '- Tác Giả -'}
          </h3>
        </div>
      </div>
    )
  },
  {
    id: 5,
    name: 'Cuộn Phim',
    tags: ['3anh'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-[#fafafa] border-x-[20px] border-black p-4 flex flex-col gap-4">
        <div className="img-slot w-full flex-1 border-[6px] border-white shadow-md filter sepia-[0.4]" style={{ backgroundImage: `url(${data.l5_i1})` }} onClick={() => onImageClick('l5_i1')} />
        <div className="img-slot w-full flex-1 border-[6px] border-white shadow-md filter sepia-[0.4]" style={{ backgroundImage: `url(${data.l5_i2})` }} onClick={() => onImageClick('l5_i2')} />
        <div className="img-slot w-full flex-1 border-[6px] border-white shadow-md filter sepia-[0.4]" style={{ backgroundImage: `url(${data.l5_i3})` }} onClick={() => onImageClick('l5_i3')} />
        <div className="text-center mt-2 bg-black py-2">
          <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-anton text-white text-2xl uppercase tracking-widest">
            {data.l5_t1 || 'CINEMATIC'}
          </h2>
          <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-montserrat text-[10px] text-gray-400 uppercase tracking-[0.3em]">
            {data.l5_t2 || 'Date'}
          </p>
        </div>
      </div>
    )
  },
  {
    id: 6,
    name: 'Minimal',
    tags: ['1anh'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-white p-8 border-t-[16px] border-blue-600 flex flex-col">
        <div className="flex justify-between items-start mb-6">
          <h1 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-playfair font-bold text-5xl leading-none text-gray-900 max-w-[70%]">
            {data.l6_t1 || 'Minimal'}
          </h1>
          <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-montserrat text-xs text-gray-500 text-right uppercase">
            {data.l6_t2 || 'Vol 1'}
          </p>
        </div>
        <div className="img-slot w-full flex-1 bg-gray-100 rounded-bl-[80px]" style={{ backgroundImage: `url(${data.l6_i1})` }} onClick={() => onImageClick('l6_i1')} />
        <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-montserrat text-sm text-gray-800 mt-6 font-medium">
          {data.l6_t3 || 'Desc'}
        </p>
      </div>
    )
  },
  {
    id: 7,
    name: 'Collage',
    tags: ['2anh'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-[#e11d48] overflow-hidden relative">
        <h1 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="absolute top-4 left-4 font-anton text-[7rem] text-white opacity-20 leading-none z-0">
          {data.l7_t1 || 'LOUD'}
        </h1>
        <div className="absolute top-1/4 right-[-20px] w-[80%] h-[40%] bg-white p-2 shadow-2xl transform rotate-6 z-10">
          <div className="img-slot w-full h-full filter grayscale" style={{ backgroundImage: `url(${data.l7_i1})` }} onClick={() => onImageClick('l7_i1')} />
        </div>
        <div className="absolute bottom-10 left-[-10px] w-[60%] h-[35%] bg-yellow-400 p-2 shadow-2xl transform -rotate-3 z-20">
          <div className="img-slot w-full h-full filter contrast-125" style={{ backgroundImage: `url(${data.l7_i2})` }} onClick={() => onImageClick('l7_i2')} />
        </div>
        <div className="absolute top-10 right-6 text-right z-30">
          <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-oswald font-bold text-4xl text-white uppercase bg-black px-3 py-1 inline-block mb-1">
            {data.l7_t2 || 'T1'}
          </h2>
          <br />
          <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-oswald font-bold text-4xl text-black uppercase bg-yellow-400 px-3 py-1 inline-block">
            {data.l7_t3 || 'T2'}
          </h2>
        </div>
      </div>
    )
  },
  {
    id: 8,
    name: 'Typography',
    tags: ['1anh'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-black p-4 flex flex-col justify-center text-center">
        <div className="img-slot w-32 h-32 rounded-full mx-auto mb-6 border-4 border-white shadow-[0_0_20px_rgba(255,255,255,0.5)]" style={{ backgroundImage: `url(${data.l8_i1})` }} onClick={() => onImageClick('l8_i1')} />
        <h1 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-oswald font-bold text-6xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 uppercase leading-tight">
          {data.l8_t1 || 'FUTURE'}
        </h1>
        <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-montserrat text-gray-400 text-sm mt-6 uppercase tracking-[0.3em] border-t border-gray-700 pt-4 mx-8">
          {data.l8_t2 || 'Desc'}
        </p>
      </div>
    )
  },
  {
    id: 10,
    name: 'Neon Party',
    tags: ['1anh', 'prom', 'sukien'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-[#0f172a] p-5 relative" style={{ color: data.globalTextColor }}>
        <ModernBorder color={data.globalTextColor || '#a855f7'} />
        <div className="w-full h-full border border-purple-500/30 relative flex flex-col justify-center items-center z-10">
          <div className="img-slot absolute inset-0 opacity-40 filter saturate-150" style={{ backgroundImage: `url(${data.l10_i1})` }} onClick={() => onImageClick('l10_i1')} />
          <h1 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-pacifico text-[4.5rem] text-pink-500 z-10 transform -rotate-12 mb-8 drop-shadow-[0_0_15px_rgba(236,72,153,0.8)] leading-tight">
            {data.l10_t1 || 'Party!'}
          </h1>
          <div className="z-10 text-center bg-black/60 backdrop-blur-sm p-4 w-[80%] border border-purple-500/50 rounded-xl">
            <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-montserrat font-black text-2xl text-cyan-400 uppercase tracking-widest">
              {data.l10_t2 || 'TITLE'}
            </h2>
            <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-montserrat text-sm text-gray-300 mt-2">
              {data.l10_t3 || 'Info'}
            </p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 9,
    name: 'Tạp chí 3 ảnh',
    tags: ['3anh', 'sukien'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-white p-3 flex flex-col gap-3">
        <div className="h-[15%] flex items-center justify-between px-2 border-b-2 border-black">
          <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-anton text-3xl uppercase">
            {data.l9_t1 || 'NEWS'}
          </h2>
          <span contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-montserrat font-bold text-xs bg-black text-white px-2 py-1">
            {data.l9_t2 || '01'}
          </span>
        </div>
        <div className="flex-1 flex gap-3">
          <div className="w-[60%] flex flex-col gap-3">
            <div 
              className="img-slot flex-1 bg-gray-200" 
              style={{ backgroundImage: `url(${data.l9_i1})` }}
              onClick={() => onImageClick('l9_i1')}
            />
            <div className="h-[30%] bg-gray-100 p-3">
              <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-montserrat text-[10px] font-bold text-justify leading-relaxed text-gray-800">
                {data.l9_t3 || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
              </p>
            </div>
          </div>
          <div className="w-[40%] flex flex-col gap-3">
            <div 
              className="img-slot h-[40%] bg-gray-300" 
              style={{ backgroundImage: `url(${data.l9_i2})` }}
              onClick={() => onImageClick('l9_i2')}
            />
            <div 
              className="img-slot flex-1 bg-gray-400" 
              style={{ backgroundImage: `url(${data.l9_i3})` }}
              onClick={() => onImageClick('l9_i3')}
            />
          </div>
        </div>
      </div>
    )
  },
  {
    id: 12,
    name: 'Hướng Dương 2',
    tags: ['1anh', 'hoahuongduong', 'tuyenduong'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-[#1a365d] relative flex flex-col">
        <div className="h-[45%] w-full relative">
          <div className="img-slot w-full h-full" style={{ backgroundImage: `url(${data.l12_i1})` }} onClick={() => onImageClick('l12_i1')} />
          <div contentEditable suppressContentEditableWarning={true} spellCheck={false} className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-yellow-500 text-blue-900 font-bevietnam font-black text-lg px-6 py-2 rounded-lg shadow-lg uppercase whitespace-nowrap z-20">
            {data.l12_t1 || 'T1'}
          </div>
        </div>
        <div className="flex-1 bg-[#1a365d] relative overflow-hidden flex flex-col items-center justify-center p-6">
          <div className="img-slot absolute -bottom-12 -right-12 w-48 h-48 opacity-50 rounded-full filter contrast-125" style={{ backgroundImage: `url(${data.l12_bg})` }} onClick={() => onImageClick('l12_bg')} />
          <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam font-black text-4xl text-white uppercase text-center mt-6 z-10">
            {data.l12_t2 || 'Name'}
          </h2>
          <h3 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-montserrat text-yellow-400 font-bold text-sm tracking-widest mt-1 z-10 text-center">
            {data.l12_t3 || 'School'}
          </h3>
          <div className="mt-4 border-l-4 border-yellow-500 pl-4 z-10 w-full bg-[#1a365d]/50 backdrop-blur-sm py-2">
            <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-montserrat text-gray-200 text-sm leading-relaxed">
              {data.l12_t4 || 'Desc'}
            </p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 13,
    name: 'Hướng Dương 3',
    tags: ['1anh', 'hoahuongduong', 'tuyenduong'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-white border-[12px] border-yellow-400 p-5 relative flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <div className="w-16 h-16 img-slot rounded-full border-2 border-yellow-400 shadow-md" style={{ backgroundImage: `url(${data.l13_bg})` }} onClick={() => onImageClick('l13_bg')} />
          <div className="text-right">
            <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-oswald font-bold text-3xl text-gray-900 leading-none uppercase">
              {data.l13_t1 || 'STAR'}
            </h2>
            <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-montserrat font-bold text-[11px] text-gray-500 tracking-wider">
              {data.l13_t2 || 'OF THE WEEK'}
            </p>
          </div>
        </div>
        <div className="img-slot flex-1 w-full bg-gray-200 rounded-2xl overflow-hidden shadow-inner border-4 border-yellow-100" style={{ backgroundImage: `url(${data.l13_i1})` }} onClick={() => onImageClick('l13_i1')} />
        <div className="text-center mt-5 mb-2">
          <h1 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam font-black text-2xl text-gray-800 uppercase">
            {data.l13_t3 || 'Name'}
          </h1>
          <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-dancing text-3xl text-yellow-600 font-bold mt-1">
            {data.l13_t4 || 'Role'}
          </p>
          <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-montserrat text-[13px] text-gray-600 mt-2 bg-yellow-50 py-2 px-3 rounded-lg inline-block border border-yellow-200">
            {data.l13_t5 || 'Desc'}
          </p>
        </div>
      </div>
    )
  },
  {
    id: 14,
    name: 'Giấy Khen Cổ Điển',
    tags: ['1anh', 'tuyenduong'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-[#fffdf7] p-4 border-[12px] border-[#d4af37] border-double flex flex-col justify-center items-center text-center relative" style={{ color: data.globalTextColor }}>
        <ElegantBorder color={data.globalTextColor || '#d4af37'} />
        <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-playfair text-xl text-[#d4af37] tracking-[0.2em] uppercase mb-4 z-10">
          {data.l14_t1 || 'GIẤY KHEN'}
        </h2>
        <div className="w-24 h-24 rounded-full border-4 border-[#d4af37] overflow-hidden mb-4 shadow-lg z-10">
          <div className="img-slot w-full h-full" style={{ backgroundImage: `url(${data.l14_i1})` }} onClick={() => onImageClick('l14_i1')} />
        </div>
        <h1 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-greatvibes text-6xl text-gray-900 mb-2 font-medium leading-tight z-10">
          {data.l14_t2 || 'Name'}
        </h1>
        <h3 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-montserrat font-bold text-sm text-gray-600 uppercase tracking-widest mb-4 z-10">
          {data.l14_t3 || 'T3'}
        </h3>
        <div className="w-16 h-[1px] bg-[#d4af37] mb-4 z-10" />
        <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-montserrat text-xs text-gray-500 italic px-6 leading-relaxed z-10">
          {data.l14_t4 || 'Desc'}
        </p>
      </div>
    )
  },
  {
    id: 25,
    name: 'Huy Hiệu Lớn',
    tags: ['1anh', 'tuyenduong', 'sukien'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-[#f1f5f9] p-6 flex flex-col items-center justify-start border-[10px] border-emerald-600">
        <div className="text-center mt-2 mb-4 w-full">
          <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-oswald text-emerald-700 font-bold tracking-[0.2em] uppercase text-sm mb-1">
            {data.l25_t1 || 'T1'}
          </h2>
          <h1 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-anton text-4xl text-gray-900 uppercase">
            {data.l25_t2 || 'T2'}
          </h1>
        </div>
        <div className="w-full flex-1 img-slot border-4 border-white shadow-xl rounded-xl overflow-hidden" style={{ backgroundImage: `url(${data.l25_i1})` }} onClick={() => onImageClick('l25_i1')} />
        <div className="w-full mt-5 bg-white p-3 rounded-lg shadow border-l-4 border-emerald-500">
          <h3 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam font-bold text-lg text-emerald-800">
            {data.l25_t3 || 'Name'}
          </h3>
          <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-montserrat text-xs text-gray-600 mt-1">
            {data.l25_t4 || 'Desc'}
          </p>
        </div>
      </div>
    )
  },
  {
    id: 28,
    name: 'Polaroid Đỏ',
    tags: ['1anh', 'tuyenduong'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-rose-50 p-6 relative flex flex-col items-center">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/notebook.png')] pointer-events-none" />
        <div className="bg-white p-3 pb-8 shadow-xl transform rotate-1 w-full h-[80%] flex flex-col z-10 relative">
          <div className="absolute -top-4 -right-4 bg-red-600 text-white font-anton text-2xl w-14 h-14 rounded-full flex items-center justify-center shadow-lg transform rotate-12 z-20">10</div>
          <div className="w-full flex-1 img-slot border border-gray-200" style={{ backgroundImage: `url(${data.l28_i1})` }} onClick={() => onImageClick('l28_i1')} />
          <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-sriracha text-2xl text-center text-red-600 mt-4">
            {data.l28_t1 || 'T1'}
          </p>
        </div>
        <div className="mt-4 text-center z-10">
          <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam font-black text-xl text-gray-800 uppercase">
            {data.l28_t2 || 'Name'}
          </h2>
          <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-montserrat text-xs text-gray-600 mt-1">
            {data.l28_t3 || 'Desc'}
          </p>
        </div>
      </div>
    )
  },
  {
    id: 54,
    name: 'Vị Vua (The King)',
    tags: ['1anh', 'thethao'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-zinc-950 border-[12px] border-yellow-600 flex flex-col items-center p-6 relative" style={{ color: data.globalTextColor }}>
        <SportBorder color={data.globalTextColor || '#ca8a04'} />
        <div className="absolute top-0 w-full h-1/2 bg-gradient-to-b from-yellow-600/20 to-transparent pointer-events-none z-0" />
        <div className="text-6xl z-20 mb-2 drop-shadow-[0_0_15px_rgba(202,138,4,0.8)] mt-2">👑</div>
        <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-oswald text-yellow-500 font-bold tracking-[0.4em] uppercase text-sm mb-4 z-20">
          {data.l54_t1 || 'THE KING'}
        </h2>
        <div className="w-full flex-1 img-slot border-4 border-yellow-500 shadow-[0_0_20px_rgba(202,138,4,0.4)] filter contrast-125 z-10 relative" style={{ backgroundImage: `url(${data.l54_i1})` }} onClick={() => onImageClick('l54_i1')}>
          <div className="absolute bottom-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent pointer-events-none" />
        </div>
        <div className="w-full text-center mt-[-30px] z-20 pointer-events-none">
          <h1 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-anton text-5xl text-white uppercase drop-shadow-xl pointer-events-auto" style={{ color: data.globalTextColor || 'white' }}>
            {data.l54_t2 || 'NAME'}
          </h1>
          <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-montserrat text-xs text-yellow-200 mt-2 font-bold px-4 pointer-events-auto" style={{ color: data.globalTextColor || '#fef08a' }}>
            {data.l54_t3 || 'Nhà vô địch tuyệt đối.'}
          </p>
        </div>
      </div>
    )
  },
  {
    id: 81,
    name: 'Nguyệt Quế Vàng',
    tags: ['1anh', 'tuyenduong', 'bangkhen'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-[#111] p-6 border-[12px] border-yellow-600 relative flex flex-col items-center justify-center" style={{ color: data.globalTextColor }}>
        <CertificateBorder color={data.globalTextColor || '#ca8a04'} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-between w-[90%] pointer-events-none z-20 opacity-90">
          <span className="text-6xl transform scale-y-[-1] rotate-90 text-yellow-500 drop-shadow-md">🌿</span>
          <span className="text-6xl transform rotate-90 text-yellow-500 drop-shadow-md">🌿</span>
        </div>
        <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-cormorant text-yellow-500 tracking-[0.4em] font-bold uppercase mb-4 text-sm z-10" style={{ color: data.globalTextColor || '#eab308' }}>
          {data.l81_t1 || 'VINH DANH XUẤT SẮC'}
        </h2>
        <div className="w-48 h-48 img-slot rounded-full border-4 border-yellow-600 shadow-[0_0_30px_rgba(202,138,4,0.3)] filter sepia-[0.3] z-10 mb-6" style={{ backgroundImage: `url(${data.l81_i1})` }} onClick={() => onImageClick('l81_i1')} />
        <h1 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-playfair text-4xl text-white uppercase text-center font-bold mb-2 z-10" style={{ color: data.globalTextColor || 'white' }}>
          {data.l81_t2 || 'HỌC SINH GIỎI'}
        </h1>
        <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-montserrat text-xs text-yellow-200/80 text-center tracking-widest z-10" style={{ color: data.globalTextColor || '#fef08a' }}>
          {data.l81_t3 || 'THÀNH TÍCH CAO NHẤT TOÀN KHỐI'}
        </p>
      </div>
    )
  },
  {
    id: 82,
    name: 'Ngôi Sao Bảng Vàng',
    tags: ['1anh', 'tuyenduong', 'phongtrao'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-gradient-to-b from-red-800 to-red-950 p-5 flex flex-col items-center relative overflow-hidden">
        <div className="absolute -top-10 text-8xl opacity-20 pointer-events-none z-0">⭐⭐⭐</div>
        <div contentEditable suppressContentEditableWarning={true} spellCheck={false} className="bg-yellow-400 text-red-900 font-anton text-2xl px-8 py-2 uppercase transform rotate-2 shadow-xl z-20 mt-4 mb-6 border-2 border-yellow-200">
          {data.l82_t1 || 'NGÔI SAO HỌC TẬP'}
        </div>
        <div className="w-full flex-1 img-slot border-[6px] border-yellow-500 shadow-2xl relative z-10 rounded-lg" style={{ backgroundImage: `url(${data.l82_i1})` }} onClick={() => onImageClick('l82_i1')} />
        <div className="w-full text-center mt-6 z-20">
          <h1 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam font-black text-3xl text-white uppercase drop-shadow-md">
            {data.l82_t2 || 'TÊN HỌC SINH'}
          </h1>
          <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-montserrat text-sm text-yellow-300 font-bold mt-1">
            {data.l82_t3 || 'Điểm số tuyệt đối các môn tự nhiên.'}
          </p>
        </div>
      </div>
    )
  },
  {
    id: 83,
    name: 'Cúp Danh Dự',
    tags: ['1anh', 'tuyenduong', 'bangkhen'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-sky-50 p-6 flex flex-col items-center border border-sky-200 relative">
        <div className="absolute top-6 text-5xl z-20 drop-shadow-lg pointer-events-none">🏆</div>
        <div className="w-[85%] h-[55%] img-slot rounded-t-full border-[6px] border-sky-600 shadow-xl z-10 mt-12 mb-4" style={{ backgroundImage: `url(${data.l83_i1})` }} onClick={() => onImageClick('l83_i1')} />
        <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-oswald text-sky-800 font-bold text-xl tracking-widest uppercase mb-1 z-10 text-center">
          {data.l83_t1 || 'HỌC SINH TIÊU BIỂU'}
        </h2>
        <h1 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam font-black text-2xl text-gray-900 uppercase text-center z-10">
          {data.l83_t2 || 'NAME HERE'}
        </h1>
        <div className="w-12 h-1 bg-sky-600 my-2 z-10" />
        <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-montserrat text-[11px] text-gray-600 text-center uppercase font-bold z-10">
          {data.l83_t3 || 'Đạt giải Nhất thành phố'}
        </p>
      </div>
    )
  },
  {
    id: 84,
    name: 'Khen Thưởng Ribbon',
    tags: ['1anh', 'tuyenduong', 'bangkhen'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-white border-[16px] border-indigo-900 p-6 flex flex-col items-center justify-center relative">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cartographer.png')] pointer-events-none z-0" />
        <span className="absolute top-4 text-4xl text-indigo-700 z-20 pointer-events-none drop-shadow-md">🎗️</span>
        <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-cormorant text-indigo-900 font-bold text-2xl tracking-[0.2em] uppercase mt-8 mb-4 z-10 text-center">
          {data.l84_t1 || 'CHỨNG NHẬN'}
        </h2>
        <div className="w-36 h-36 img-slot rounded-full border-4 border-indigo-800 mb-4 z-10 shadow-lg filter sepia-[0.2]" style={{ backgroundImage: `url(${data.l84_i1})` }} onClick={() => onImageClick('l84_i1')} />
        <h1 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-dancing text-4xl text-gray-800 font-bold mb-2 z-10 text-center">
          {data.l84_t2 || 'Họ và Tên'}
        </h1>
        <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam text-xs text-gray-600 uppercase tracking-widest text-center font-bold z-10">
          {data.l84_t3 || 'DANH HIỆU CHÁU NGOAN BÁC HỒ'}
        </p>
      </div>
    )
  },
  {
    id: 85,
    name: 'Chiến Binh (Warrior)',
    tags: ['1anh', 'tuyenduong', 'thethao'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-zinc-900 p-5 border-l-8 border-amber-500 flex flex-col">
        <div className="absolute bottom-4 right-4 text-8xl opacity-10 pointer-events-none text-white z-0">⚔️</div>
        <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-anton text-amber-500 text-2xl tracking-widest uppercase mb-4 z-10">
          {data.l85_t1 || 'CHIẾN BINH TRI THỨC'}
        </h2>
        <div className="w-full flex-1 img-slot border-2 border-zinc-600 filter grayscale contrast-125 z-10 relative mb-4" style={{ backgroundImage: `url(${data.l85_i1})` }} onClick={() => onImageClick('l85_i1')} />
        <h1 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-oswald font-bold text-4xl text-white uppercase z-10">
          {data.l85_t2 || 'NAME'}
        </h1>
        <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-montserrat text-sm text-zinc-400 font-medium z-10 mt-1">
          {data.l85_t3 || 'Vượt qua mọi kỳ thi với số điểm kỷ lục.'}
        </p>
      </div>
    )
  },
  {
    id: 86,
    name: 'Đỉnh Cao Tri Thức',
    tags: ['1anh', 'tuyenduong'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-[#f1f5f9] relative overflow-hidden flex flex-col items-center">
        <div className="absolute bottom-0 w-[150%] h-[40%] bg-blue-900 transform -rotate-12 translate-y-10 z-0" />
        <div className="w-full h-[65%] img-slot relative z-10 filter contrast-110" style={{ backgroundImage: `url(${data.l86_i1})` }} onClick={() => onImageClick('l86_i1')}>
          <div className="absolute bottom-0 w-full h-1/3 bg-gradient-to-t from-blue-900 to-transparent" />
        </div>
        <div className="absolute bottom-10 w-full px-6 z-20 text-center">
          <span className="text-4xl pointer-events-none drop-shadow-md mb-2 block">⛰️</span>
          <h1 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam font-black text-3xl text-white uppercase drop-shadow-lg">
            {data.l86_t1 || 'CHINH PHỤC ĐỈNH CAO'}
          </h1>
          <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-montserrat text-blue-200 font-bold text-sm tracking-widest mt-1 uppercase">
            {data.l86_t2 || 'HỌC SINH TÊN'}
          </h2>
        </div>
      </div>
    )
  },
  {
    id: 87,
    name: 'Cánh Chim Vinh Quang',
    tags: ['1anh', 'tuyenduong'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-black relative flex items-center justify-center p-6">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-600/40 via-transparent to-transparent pointer-events-none z-0" />
        <span className="absolute top-20 left-4 text-5xl text-blue-300 opacity-60 transform -rotate-45 pointer-events-none z-10 filter blur-[1px]">🕊️</span>
        <span className="absolute top-20 right-4 text-5xl text-blue-300 opacity-60 transform rotate-45 scale-x-[-1] pointer-events-none z-10 filter blur-[1px]">🕊️</span>
        <div className="w-full h-full flex flex-col justify-center items-center relative z-20 bg-black/40 backdrop-blur-sm border border-blue-500/50 p-4 rounded-xl shadow-[0_0_30px_rgba(37,99,235,0.3)]">
          <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-oswald text-cyan-400 tracking-[0.3em] font-bold uppercase text-xs mb-4">
            {data.l87_t1 || 'ĐIỂM SỐ CAO NHẤT'}
          </h2>
          <div className="w-40 h-56 img-slot border-2 border-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.5)] mb-4 filter sepia-[0.2]" style={{ backgroundImage: `url(${data.l87_i1})` }} onClick={() => onImageClick('l87_i1')} />
          <h1 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-anton text-3xl text-white uppercase text-center">
            {data.l87_t2 || 'TÊN HỌC SINH'}
          </h1>
          <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-montserrat text-[10px] text-gray-300 text-center mt-2 uppercase tracking-widest">
            {data.l87_t3 || 'Sải cánh vươn xa'}
          </p>
        </div>
      </div>
    )
  },
  {
    id: 88,
    name: 'Bảng Danh Dự Nhôm',
    tags: ['1anh', 'tuyenduong', 'bangkhen'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-[#2d3748] p-5">
        <div className="w-full h-full bg-[#cbd5e1] rounded border-4 border-[#94a3b8] p-4 flex flex-col items-center justify-center relative shadow-[inset_0_0_20px_rgba(0,0,0,0.1)]">
          <div className="absolute top-2 left-2 w-3 h-3 rounded-full bg-[#64748b] shadow-inner pointer-events-none" />
          <div className="absolute top-2 right-2 w-3 h-3 rounded-full bg-[#64748b] shadow-inner pointer-events-none" />
          <div className="absolute bottom-2 left-2 w-3 h-3 rounded-full bg-[#64748b] shadow-inner pointer-events-none" />
          <div className="absolute bottom-2 right-2 w-3 h-3 rounded-full bg-[#64748b] shadow-inner pointer-events-none" />
          
          <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-anton text-slate-800 text-2xl uppercase tracking-widest mb-4">
            {data.l88_t1 || 'BẢNG DANH DỰ'}
          </h2>
          <div className="w-36 h-48 img-slot border-4 border-slate-700 filter grayscale mb-4 shadow-md" style={{ backgroundImage: `url(${data.l88_i1})` }} onClick={() => onImageClick('l88_i1')} />
          <h1 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-oswald text-3xl text-slate-900 font-bold uppercase mb-2 text-center">
            {data.l88_t2 || 'HỌ TÊN BẠN'}
          </h1>
          <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-montserrat text-xs text-slate-700 font-bold text-center">
            {data.l88_t3 || 'Hoàn thành tốt xuất sắc mọi nhiệm vụ.'}
          </p>
        </div>
      </div>
    )
  },
  {
    id: 89,
    name: 'Học Giả Khen Thưởng',
    tags: ['1anh', 'tuyenduong'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-white p-6 border-[8px] border-gray-100 flex flex-col items-center justify-between">
        <div className="text-center w-full mt-4">
          <span className="text-3xl text-emerald-600 pointer-events-none block mb-2">🌿</span>
          <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-montserrat font-bold text-gray-400 text-[10px] tracking-[0.4em] uppercase">
            {data.l89_t1 || 'HỌC SINH TIÊU BIỂU'}
          </h2>
        </div>
        <div className="w-48 h-48 img-slot rounded-full filter contrast-110 shadow-lg" style={{ backgroundImage: `url(${data.l89_i1})` }} onClick={() => onImageClick('l89_i1')} />
        <div className="text-center w-full mb-4">
          <h1 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-playfair font-bold text-3xl text-gray-900 mb-2 uppercase">
            {data.l89_t2 || 'Name Here'}
          </h1>
          <div className="w-8 h-0.5 bg-emerald-500 mx-auto mb-2" />
          <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam text-xs text-gray-600">
            {data.l89_t3 || 'Đạt điểm tuyệt đối trong học kỳ 1.'}
          </p>
        </div>
      </div>
    )
  },
  {
    id: 90,
    name: 'Ngôi Sao Tình Nguyện',
    tags: ['1anh', 'tuyenduong', 'phongtrao', 'sukien'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-[#fff0f5] p-5 flex flex-col items-center relative overflow-hidden border-[10px] border-rose-200">
        <div className="absolute -top-10 -right-10 text-8xl opacity-10 pointer-events-none text-rose-500 z-0">💖</div>
        <div contentEditable suppressContentEditableWarning={true} spellCheck={false} className="w-full bg-rose-500 text-white font-bevietnam font-bold text-center py-2 uppercase tracking-widest text-sm shadow-md z-20 rounded-t-lg">
          {data.l90_t1 || 'TÌNH NGUYỆN VIÊN XUẤT SẮC'}
        </div>
        <div className="w-full flex-1 img-slot border-x-4 border-b-4 border-rose-500 z-10 relative rounded-b-lg mb-4" style={{ backgroundImage: `url(${data.l90_i1})` }} onClick={() => onImageClick('l90_i1')} />
        <h1 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-anton text-4xl text-rose-900 uppercase text-center z-10 mb-1">
          {data.l90_t2 || 'HỌC SINH TÊN'}
        </h1>
        <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-montserrat text-xs text-rose-700 font-bold z-10 text-center">
          {data.l90_t3 || 'Ghi nhận sự tận tâm vì cộng đồng.'}
        </p>
      </div>
    )
  },
  {
    id: 91,
    name: 'Tỏa Nắng',
    tags: ['1anh', 'tuyenduong', 'hoahuongduong'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-yellow-400 relative flex flex-col items-center overflow-hidden">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] bg-[repeating-conic-gradient(from_0deg,#fde047_0deg_10deg,#facc15_10deg_20deg)] opacity-50 z-0 pointer-events-none" />
        <div className="absolute inset-0 img-slot mix-blend-overlay opacity-40 z-0" style={{ backgroundImage: `url(${data.l91_bg})` }} onClick={() => onImageClick('l91_bg')} />
        
        <div className="w-full bg-white/90 backdrop-blur-sm p-4 text-center z-10 border-b-4 border-yellow-600 shadow-md">
          <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam font-black text-xl text-yellow-700 uppercase tracking-widest">
            {data.l91_t1 || 'HỌC SINH TIÊU BIỂU'}
          </h2>
        </div>
        
        <div className="relative w-56 h-56 mt-8 mb-4 z-10">
          <div className="absolute -inset-2 bg-yellow-100 rounded-full animate-pulse opacity-50 pointer-events-none" />
          <span className="absolute -top-4 -left-4 text-4xl transform -rotate-12 pointer-events-none drop-shadow-md">🌻</span>
          <span className="absolute -bottom-2 -right-2 text-3xl transform rotate-12 pointer-events-none drop-shadow-md">✨</span>
          <div className="img-slot w-full h-full rounded-full border-8 border-white shadow-2xl" style={{ backgroundImage: `url(${data.l91_i1})` }} onClick={() => onImageClick('l91_i1')} />
        </div>
        
        <div className="z-10 text-center w-full px-4 bg-white/80 backdrop-blur-md mt-auto py-4 border-t-2 border-yellow-200">
          <h1 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-anton text-4xl text-gray-800 uppercase mb-1 drop-shadow-sm">
            {data.l91_t2 || 'TÊN HỌC SINH'}
          </h1>
          <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-montserrat text-xs text-yellow-700 font-bold uppercase tracking-widest mb-3">
            {data.l91_t3 || 'ĐẠT THÀNH TÍCH XUẤT SẮC'}
          </p>
          <div className="flex justify-between items-end border-t border-gray-300 pt-2 px-2">
            <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-cormorant italic text-[11px] text-gray-600">
              {data.l91_date || 'Tp Hồ Chí Minh, ngày 04 tháng 04 năm 2026'}
            </p>
            <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-dancing text-lg text-gray-800 font-bold">
              {data.l91_gvcn || 'GVCN: Vũ Tiến Lực'}
            </p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 92,
    name: 'Kính Mờ Rực Rỡ',
    tags: ['1anh', 'tuyenduong', 'hoahuongduong'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper relative flex flex-col justify-center items-center p-5">
        <div className="absolute inset-0 img-slot z-0" style={{ backgroundImage: `url(${data.l92_bg})` }} onClick={() => onImageClick('l92_bg')} />
        <div className="absolute inset-0 bg-yellow-900/30 mix-blend-multiply z-0 pointer-events-none" />
        
        <div className="w-full h-full bg-white/20 backdrop-blur-md border border-white/50 shadow-2xl rounded-2xl p-5 flex flex-col relative z-10">
          <div className="text-center mb-4 border-b border-white/40 pb-2">
            <span className="text-3xl pointer-events-none drop-shadow-sm block mb-1">🏅</span>
            <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-oswald text-white font-bold text-lg tracking-[0.2em] uppercase">
              {data.l92_t1 || 'BẢNG VÀNG DANH DỰ'}
            </h2>
          </div>
          
          <div className="w-full flex-1 img-slot rounded-xl border-2 border-white/80 shadow-[0_10px_20px_rgba(0,0,0,0.3)] mb-4" style={{ backgroundImage: `url(${data.l92_i1})` }} onClick={() => onImageClick('l92_i1')} />
          
          <div className="text-center bg-black/40 backdrop-blur-sm rounded-xl p-3 border border-white/20">
            <h1 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam font-black text-2xl text-yellow-300 uppercase mb-1">
              {data.l92_t2 || 'HỌ VÀ TÊN'}
            </h1>
            <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-montserrat text-[10px] text-white mb-2">
              {data.l92_t3 || 'Nỗ lực không ngừng, vươn tới thành công.'}
            </p>
            <div className="flex flex-col gap-1 text-[10px] text-gray-300 border-t border-white/20 pt-2 mt-1">
              <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-montserrat">
                {data.l92_date || 'Tp Hồ Chí Minh, ngày 04 tháng 04 năm 2026'}
              </p>
              <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-dancing text-sm text-yellow-200">
                {data.l92_gvcn || 'GVCN: Vũ Tiến Lực'}
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 93,
    name: 'Vòm Hoa Cổ Điển',
    tags: ['1anh', 'tuyenduong', 'hoahuongduong'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-[#faf6ed] p-4 flex flex-col border-[8px] border-[#c29c62]">
        <div className="w-full text-center py-2 relative z-20">
          <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-cormorant text-[#8c6b42] font-bold text-xl tracking-[0.3em] uppercase">
            {data.l93_t1 || 'GƯƠNG SÁNG'}
          </h2>
        </div>
        
        <div className="flex-1 w-full relative z-10 mt-2 mb-4 bg-white p-2 shadow-lg" style={{ borderRadius: '200px 200px 0 0' }}>
          <div className="absolute -top-4 -right-4 text-5xl z-30 pointer-events-none drop-shadow-md transform rotate-12">🌻</div>
          <div className="w-full h-full img-slot filter contrast-110" style={{ borderRadius: '190px 190px 0 0', backgroundImage: `url(${data.l93_i1})` }} onClick={() => onImageClick('l93_i1')} />
        </div>
        
        <div className="text-center z-20">
          <h1 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-playfair text-3xl text-gray-900 font-bold uppercase mb-1">
            {data.l93_t2 || 'TÊN BẠN Ở ĐÂY'}
          </h1>
          <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-montserrat text-xs text-[#8c6b42] uppercase tracking-widest mb-3">
            {data.l93_t3 || 'NGÔI SAO SÁNG NHẤT TUẦN'}
          </p>
          <div className="flex flex-col items-center border-t border-dashed border-[#c29c62] pt-2">
            <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-cormorant italic text-[12px] text-gray-600">
              {data.l93_date || 'Tp Hồ Chí Minh, ngày 04 tháng 04 năm 2026'}
            </p>
            <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-greatvibes text-2xl text-[#8c6b42] leading-none mt-1">
              {data.l93_gvcn || 'GVCN: Vũ Tiến Lực'}
            </p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 94,
    name: 'Năng Động Cắt Lớp',
    tags: ['1anh', 'tuyenduong', 'hoahuongduong'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-white flex flex-col relative overflow-hidden">
        <div className="absolute top-0 w-full h-[60%] img-slot z-0" style={{ backgroundImage: `url(${data.l94_bg})` }} onClick={() => onImageClick('l94_bg')} />
        <div className="absolute top-0 w-full h-[60%] bg-gradient-to-b from-transparent to-white z-0 pointer-events-none" />
        
        <div contentEditable suppressContentEditableWarning={true} spellCheck={false} className="absolute top-12 left-6 bg-yellow-500 text-gray-900 font-anton text-2xl px-6 py-2 transform -rotate-3 shadow-xl z-20 border-2 border-white">
          {data.l94_t1 || 'TUYÊN DƯƠNG'}
        </div>
        
        <div className="relative w-48 h-56 img-slot mx-auto mt-24 mb-4 z-10 border-[6px] border-white shadow-[0_15px_30px_rgba(0,0,0,0.2)] transform rotate-2" style={{ backgroundImage: `url(${data.l94_i1})` }} onClick={() => onImageClick('l94_i1')} />
        
        <div className="w-full text-center px-6 z-20 bg-white pt-2 pb-6">
          <h1 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-anton text-4xl text-gray-800 uppercase mb-1">
            {data.l94_t2 || 'HỌ TÊN HỌC SINH'}
          </h1>
          <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam text-sm text-yellow-600 font-bold mb-4">
            {data.l94_t3 || 'Nỗ lực vươn lên không ngừng.'}
          </p>
          <div className="bg-gray-50 p-3 rounded-lg border border-gray-200 text-left">
            <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-montserrat text-[10px] text-gray-500 mb-1">
              {data.l94_date || 'Tp Hồ Chí Minh, ngày 04 tháng 04 năm 2026'}
            </p>
            <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-sriracha text-[15px] text-gray-800">
              {data.l94_gvcn || 'GVCN: Vũ Tiến Lực'}
            </p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 95,
    name: 'Dải Băng Thành Tích',
    tags: ['1anh', 'tuyenduong', 'hoahuongduong'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-stone-100 relative flex border border-stone-300">
        <div className="absolute inset-0 img-slot opacity-20 mix-blend-multiply pointer-events-none z-0 filter sepia-[0.5]" style={{ backgroundImage: `url(${data.l95_bg})` }} onClick={() => onImageClick('l95_bg')} />
        
        <div className="w-1/3 h-full bg-yellow-500 flex flex-col items-center py-6 shadow-[5px_0_15px_rgba(0,0,0,0.1)] z-10 border-r-4 border-yellow-600 relative">
          <span className="text-4xl mb-4 pointer-events-none drop-shadow-md">🌻</span>
          <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-anton text-white text-3xl transform -rotate-90 origin-center whitespace-nowrap mt-32 tracking-widest drop-shadow-md">
            {data.l95_t1 || 'XUẤT SẮC'}
          </h2>
        </div>
        
        <div className="w-2/3 h-full flex flex-col p-5 z-10 relative">
          <div className="w-full h-1/2 img-slot rounded shadow-md border-4 border-white mb-4" style={{ backgroundImage: `url(${data.l95_i1})` }} onClick={() => onImageClick('l95_i1')} />
          <div className="flex-1 flex flex-col justify-between">
            <div>
              <h1 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-oswald font-bold text-3xl text-stone-800 uppercase leading-none mb-2">
                {data.l95_t2 || 'TÊN HỌC SINH'}
              </h1>
              <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-montserrat text-[11px] text-stone-600 font-medium">
                {data.l95_t3 || 'Đạt điểm số dẫn đầu toàn khối.'}
              </p>
            </div>
            <div className="border-t-2 border-stone-300 pt-2 mt-2">
              <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-montserrat text-[9px] text-stone-500 uppercase tracking-wide mb-1">
                {data.l95_date || 'Tp Hồ Chí Minh, ngày 04/04/2026'}
              </p>
              <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-dancing text-xl text-stone-800 font-bold">
                {data.l95_gvcn || 'GVCN: Vũ Tiến Lực'}
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 96,
    name: 'Bé Ngoan Đáng Yêu',
    tags: ['1anh', 'bengoan', 'treem'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-[#fff5f8] p-6 flex flex-col items-center border-[10px] border-pink-200 rounded-3xl relative overflow-hidden">
        <div className="absolute -top-5 -left-5 text-6xl opacity-20 pointer-events-none z-0">🍭</div>
        <div className="absolute -bottom-5 -right-5 text-6xl opacity-20 pointer-events-none z-0">🧸</div>
        <div className="w-full bg-pink-400 text-white font-bevietnam font-black text-center py-3 uppercase tracking-widest text-lg shadow-md z-20 rounded-2xl mb-6">
          {data.l96_t1 || 'BÉ NGOAN CỦA TUẦN'}
        </div>
        <div className="w-56 h-56 img-slot rounded-full border-[8px] border-white shadow-xl z-10 relative mb-6" style={{ backgroundImage: `url(${data.l96_i1})` }} onClick={() => onImageClick('l96_i1')}>
          <span className="absolute -top-2 -right-2 text-4xl pointer-events-none drop-shadow-md">⭐</span>
        </div>
        <h1 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam font-black text-3xl text-pink-600 uppercase text-center z-10 mb-2">
          {data.l96_t2 || 'TÊN CỦA BÉ'}
        </h1>
        <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-montserrat text-sm text-pink-400 font-bold z-10 text-center bg-white px-4 py-1 rounded-full shadow-sm">
          {data.l96_t3 || 'Luôn chăm ngoan và vâng lời.'}
        </p>
      </div>
    )
  },
  {
    id: 97,
    name: 'Siêu Nhân Nhí',
    tags: ['1anh', 'bengoan', 'treem'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-blue-600 p-5 flex flex-col items-center relative overflow-hidden border-[12px] border-yellow-400">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-400 via-blue-600 to-blue-800 pointer-events-none z-0" />
        <div className="absolute top-4 text-6xl z-20 pointer-events-none drop-shadow-lg animate-bounce">⚡</div>
        <div className="w-full h-[60%] img-slot border-[6px] border-white shadow-2xl z-10 relative mt-12 mb-4 rounded-lg" style={{ backgroundImage: `url(${data.l97_i1})` }} onClick={() => onImageClick('l97_i1')} />
        <div className="w-full text-center z-20">
          <h1 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-anton text-4xl text-yellow-400 uppercase drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] italic">
            {data.l97_t1 || 'SUPER KID'}
          </h1>
          <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam font-black text-2xl text-white uppercase mt-1">
            {data.l97_t2 || 'TÊN BÉ'}
          </h2>
          <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-montserrat text-xs text-blue-100 font-bold mt-2 bg-red-600 px-3 py-1 inline-block rounded">
            {data.l97_t3 || 'DŨNG CẢM - THÔNG MINH'}
          </p>
        </div>
      </div>
    )
  },
  {
    id: 98,
    name: 'Công Chúa Nhỏ',
    tags: ['1anh', 'bengoan', 'treem'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-[#fff0f6] p-6 flex flex-col items-center relative border-[8px] border-pink-100">
        <div className="absolute top-4 text-5xl z-20 pointer-events-none drop-shadow-md">👑</div>
        <div className="w-48 h-48 img-slot rounded-full border-[6px] border-pink-300 shadow-2xl z-10 mt-10 mb-6 relative" style={{ backgroundImage: `url(${data.l98_i1})` }} onClick={() => onImageClick('l98_i1')}>
          <div className="absolute inset-0 rounded-full border-[10px] border-white/30 pointer-events-none" />
        </div>
        <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-dancing text-3xl text-pink-500 font-bold mb-2 z-10">
          {data.l98_t1 || 'Little Princess'}
        </h2>
        <h1 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam font-black text-2xl text-gray-800 uppercase text-center z-10">
          {data.l98_t2 || 'TÊN BÉ GÁI'}
        </h1>
        <div className="w-16 h-1 bg-pink-300 my-3 z-10 rounded-full" />
        <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-montserrat text-xs text-gray-500 italic text-center z-10">
          {data.l98_t3 || 'Xinh đẹp và dịu dàng như một đóa hoa.'}
        </p>
      </div>
    )
  },
  {
    id: 99,
    name: 'Gia Đình Hạnh Phúc',
    tags: ['1anh', 'giadinh'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-[#fdfbf7] p-8 flex flex-col items-center border border-orange-100 shadow-inner">
        <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-playfair italic text-2xl text-orange-800 mb-6 text-center">
          {data.l99_t1 || 'Home is where the heart is'}
        </h2>
        <div className="w-full flex-1 img-slot border-[12px] border-white shadow-xl z-10 relative mb-6" style={{ backgroundImage: `url(${data.l99_i1})` }} onClick={() => onImageClick('l99_i1')}>
          <div className="absolute inset-0 border border-orange-100/50 pointer-events-none" />
        </div>
        <h1 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam font-black text-3xl text-gray-900 uppercase text-center z-10">
          {data.l99_t2 || 'GIA ĐÌNH HẠNH PHÚC'}
        </h1>
        <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-montserrat text-sm text-gray-500 mt-2 text-center max-w-[80%]">
          {data.l99_t3 || 'Nơi tình yêu bắt đầu và không bao giờ kết thúc.'}
        </p>
      </div>
    )
  },
  {
    id: 100,
    name: 'Kỷ Niệm Ấm Áp',
    tags: ['1anh', 'giadinh', 'kyniem'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-stone-900 p-6 flex flex-col relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/20 blur-3xl rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-amber-500/20 blur-3xl rounded-full pointer-events-none" />
        <div className="w-full h-[70%] img-slot border border-stone-700 z-10 relative mb-6 filter sepia-[0.2] contrast-110" style={{ backgroundImage: `url(${data.l100_i1})` }} onClick={() => onImageClick('l100_i1')} />
        <div className="z-10">
          <h1 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-cormorant text-3xl text-amber-100 font-bold mb-2">
            {data.l100_t1 || 'KHOẢNH KHẮC ĐÁNG NHỚ'}
          </h1>
          <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-montserrat text-xs text-stone-400 leading-relaxed">
            {data.l100_t2 || 'Lưu giữ những kỷ niệm đẹp nhất bên những người thân yêu trong cuộc đời.'}
          </p>
          <div className="mt-4 flex items-center gap-2">
            <div className="h-px flex-1 bg-stone-700" />
            <span contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-oswald text-[10px] text-amber-500 uppercase tracking-widest">
              {data.l100_t3 || 'EST. 2026'}
            </span>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 101,
    name: 'Bé Ngoan Gấu Bông',
    tags: ['1anh', 'bengoan', 'treem'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-[#fff9e6] p-6 flex flex-col items-center border-[10px] border-yellow-200 rounded-[40px] relative overflow-hidden">
        <div className="absolute top-4 left-4 text-4xl opacity-30 z-0 pointer-events-none">🧸</div>
        <div className="absolute bottom-4 right-4 text-4xl opacity-30 z-0 pointer-events-none">🎈</div>
        <div contentEditable suppressContentEditableWarning={true} spellCheck={false} className="w-full bg-yellow-400 text-yellow-900 font-bevietnam font-black text-center py-3 uppercase tracking-widest text-lg shadow-md z-20 rounded-full mb-6 border-4 border-white">
          {data.l101_t1 || 'BÉ NGOAN XUẤT SẮC'}
        </div>
        <div className="w-52 h-52 img-slot rounded-full border-[10px] border-white shadow-2xl z-10 relative mb-6 overflow-hidden" style={{ backgroundImage: `url(${data.l101_i1})` }} onClick={() => onImageClick('l101_i1')}>
          <div className="absolute inset-0 bg-gradient-to-t from-yellow-500/20 to-transparent pointer-events-none" />
        </div>
        <h1 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam font-black text-3xl text-yellow-700 uppercase text-center z-10 mb-2 drop-shadow-sm">
          {data.l101_t2 || 'TÊN CỦA BÉ'}
        </h1>
        <div className="bg-white px-6 py-2 rounded-2xl shadow-sm border-2 border-yellow-100 z-10">
          <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-montserrat text-sm text-yellow-600 font-bold text-center">
            {data.l101_t3 || 'Chăm chỉ học tập & vâng lời cha mẹ.'}
          </p>
        </div>
      </div>
    )
  },
  {
    id: 102,
    name: 'Họa Sĩ Nhí',
    tags: ['1anh', 'bengoan', 'treem', 'nghethuat'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-white p-5 flex flex-col items-center relative overflow-hidden border-[15px] border-sky-100">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/white-paper.png')] opacity-50 pointer-events-none z-0" />
        <div className="absolute top-2 right-2 text-5xl opacity-40 z-0 pointer-events-none transform rotate-12">🎨</div>
        <div className="w-full bg-gradient-to-r from-red-400 via-yellow-400 to-blue-400 h-3 mb-6 rounded-full z-20" />
        <div className="w-full flex-1 img-slot border-4 border-gray-800 shadow-[10px_10px_0_rgba(0,0,0,0.1)] z-10 relative mb-6 transform -rotate-1" style={{ backgroundImage: `url(${data.l102_i1})` }} onClick={() => onImageClick('l102_i1')} />
        <div className="w-full text-center z-20">
          <h1 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam font-black text-3xl text-gray-800 uppercase mb-1">
            {data.l102_t1 || 'HỌA SĨ TÀI NĂNG'}
          </h1>
          <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-montserrat text-sm text-sky-600 font-bold italic">
            {data.l102_t2 || 'Sáng tạo không giới hạn cùng sắc màu.'}
          </p>
        </div>
      </div>
    )
  },
  {
    id: 103,
    name: 'Bé Khỏe Bé Ngoan',
    tags: ['1anh', 'bengoan', 'treem'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-[#e8f5e9] p-6 flex flex-col items-center border-[10px] border-green-200 rounded-[50px] relative">
        <div className="absolute top-6 right-6 text-4xl text-green-500 opacity-40 pointer-events-none z-0">🍎</div>
        <div className="absolute bottom-6 left-6 text-4xl text-green-500 opacity-40 pointer-events-none z-0">🥦</div>
        <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam font-black text-green-700 text-xl uppercase tracking-[0.2em] mb-6 z-10">
          {data.l103_t1 || 'BÉ KHỎE BÉ NGOAN'}
        </h2>
        <div className="w-48 h-48 img-slot rounded-full border-[8px] border-white shadow-xl z-10 mb-6 overflow-hidden" style={{ backgroundImage: `url(${data.l103_i1})` }} onClick={() => onImageClick('l103_i1')} />
        <h1 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam font-black text-3xl text-gray-800 uppercase text-center z-10">
          {data.l103_t2 || 'TÊN CỦA BÉ'}
        </h1>
        <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-montserrat text-sm text-green-600 font-bold mt-2 text-center">
          {data.l103_t3 || 'Ăn giỏi, ngủ ngoan, rèn luyện tốt.'}
        </p>
      </div>
    )
  },
  {
    id: 104,
    name: 'Gia Đình Là Số 1',
    tags: ['1anh', 'giadinh'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-white p-4 flex flex-col items-center border-[20px] border-red-50">
        <div className="w-full flex-1 img-slot border-4 border-red-100 shadow-lg z-10 relative mb-6" style={{ backgroundImage: `url(${data.l104_i1})` }} onClick={() => onImageClick('l104_i1')}>
          <div className="absolute -top-4 -left-4 text-5xl z-20 pointer-events-none drop-shadow-md">❤️</div>
        </div>
        <div className="w-full text-center z-20">
          <h1 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam font-black text-3xl text-red-600 uppercase mb-2">
            {data.l104_t1 || 'GIA ĐÌNH LÀ SỐ 1'}
          </h1>
          <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-montserrat text-sm text-gray-500 font-medium px-4">
            {data.l104_t2 || 'Hạnh phúc đơn giản là được ở bên nhau mỗi ngày.'}
          </p>
          <div className="mt-4 flex justify-center gap-4">
            <span className="text-2xl">👨‍👩‍👧‍👦</span>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 105,
    name: 'Kỷ Niệm Mùa Hè',
    tags: ['1anh', 'giadinh', 'dulich'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-sky-400 p-5 flex flex-col items-center relative overflow-hidden">
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-yellow-300 rounded-full blur-2xl opacity-60 pointer-events-none z-0" />
        <div className="absolute top-4 left-4 text-5xl opacity-40 z-0 pointer-events-none transform -rotate-12">☀️</div>
        <div className="w-full h-[65%] img-slot border-[8px] border-white shadow-2xl z-10 relative mt-8 mb-6 rounded-2xl overflow-hidden" style={{ backgroundImage: `url(${data.l105_i1})` }} onClick={() => onImageClick('l105_i1')}>
          <div className="absolute bottom-4 right-4 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold text-sky-600 z-20">
            {data.l105_t1 || 'SUMMER 2026'}
          </div>
        </div>
        <div className="w-full text-center z-20">
          <h1 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-anton text-4xl text-white uppercase drop-shadow-md">
            {data.l105_t2 || 'KỲ NGHỈ TUYỆT VỜI'}
          </h1>
          <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam text-sm text-sky-100 font-bold mt-1">
            {data.l105_t3 || 'Cùng nhau khám phá những vùng đất mới.'}
          </p>
        </div>
      </div>
    )
  },
  {
    id: 106,
    name: 'Bé Ngoan Vườn Hoa',
    tags: ['1anh', 'bengoan', 'treem'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-[#f0fdf4] p-6 flex flex-col items-center border-[10px] border-emerald-100 rounded-[60px] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/leaves.png')] opacity-10 pointer-events-none z-0" />
        <div className="absolute top-6 left-6 text-4xl opacity-40 z-0 pointer-events-none">🌸</div>
        <div className="absolute bottom-6 right-6 text-4xl opacity-40 z-0 pointer-events-none">🦋</div>
        <div className="w-full bg-emerald-500 text-white font-bevietnam font-black text-center py-3 uppercase tracking-widest text-lg shadow-md z-20 rounded-full mb-8 border-4 border-white">
          {data.l106_t1 || 'BÉ NGOAN TỰ TIN'}
        </div>
        <div className="w-52 h-52 img-slot rounded-full border-[10px] border-white shadow-2xl z-10 relative mb-6 overflow-hidden" style={{ backgroundImage: `url(${data.l106_i1})` }} onClick={() => onImageClick('l106_i1')}>
          <div className="absolute inset-0 border-[15px] border-emerald-500/10 pointer-events-none" />
        </div>
        <h1 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam font-black text-3xl text-emerald-700 uppercase text-center z-10 mb-2">
          {data.l106_t2 || 'TÊN CỦA BÉ'}
        </h1>
        <div className="bg-white px-8 py-2 rounded-full shadow-sm border-2 border-emerald-50 z-10">
          <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-montserrat text-sm text-emerald-600 font-bold text-center">
            {data.l106_t3 || 'Tự tin tỏa sáng mỗi ngày.'}
          </p>
        </div>
      </div>
    )
  },
  {
    id: 107,
    name: 'Nhà Thông Thái Nhí',
    tags: ['1anh', 'bengoan', 'treem', 'hoctap'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-indigo-900 p-6 flex flex-col items-center relative overflow-hidden border-[12px] border-indigo-800">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30 pointer-events-none z-0" />
        <div className="absolute top-4 right-4 text-5xl opacity-40 z-0 pointer-events-none">🎓</div>
        <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam font-black text-indigo-300 text-xl uppercase tracking-[0.3em] mb-6 z-10">
          {data.l107_t1 || 'NHÀ THÔNG THÁI NHÍ'}
        </h2>
        <div className="w-full flex-1 img-slot border-4 border-indigo-400 shadow-2xl z-10 relative mb-6 rounded-xl overflow-hidden" style={{ backgroundImage: `url(${data.l107_i1})` }} onClick={() => onImageClick('l107_i1')}>
          <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/40 to-transparent pointer-events-none" />
        </div>
        <div className="w-full text-center z-20">
          <h1 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-anton text-4xl text-white uppercase mb-1 tracking-wider">
            {data.l107_t2 || 'TÊN CỦA BÉ'}
          </h1>
          <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-montserrat text-xs text-indigo-200 font-bold uppercase tracking-widest">
            {data.l107_t3 || 'Ham học hỏi & giàu trí tưởng tượng.'}
          </p>
        </div>
      </div>
    )
  },
  {
    id: 108,
    name: 'Bé Ngoan Kẹo Ngọt',
    tags: ['1anh', 'bengoan', 'treem'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-[#fff5f8] p-6 flex flex-col items-center border-[10px] border-pink-100 rounded-[40px] relative overflow-hidden">
        <div className="absolute top-10 right-10 text-5xl opacity-20 z-0 pointer-events-none transform rotate-12">🍭</div>
        <div className="absolute bottom-10 left-10 text-5xl opacity-20 z-0 pointer-events-none transform -rotate-12">🍦</div>
        <div className="w-full bg-pink-400 text-white font-bevietnam font-black text-center py-3 uppercase tracking-widest text-lg shadow-md z-20 rounded-3xl mb-8 border-4 border-white">
          {data.l108_t1 || 'BÉ NGOAN NGỌT NGÀO'}
        </div>
        <div className="w-52 h-52 img-slot rounded-full border-[10px] border-white shadow-2xl z-10 relative mb-6 overflow-hidden" style={{ backgroundImage: `url(${data.l108_i1})` }} onClick={() => onImageClick('l108_i1')}>
          <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/10 to-transparent pointer-events-none" />
        </div>
        <h1 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam font-black text-3xl text-pink-600 uppercase text-center z-10 mb-2">
          {data.l108_t2 || 'TÊN CỦA BÉ'}
        </h1>
        <div className="bg-white px-8 py-2 rounded-full shadow-sm border-2 border-pink-50 z-10">
          <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-montserrat text-sm text-pink-400 font-bold text-center">
            {data.l108_t3 || 'Nụ cười tỏa nắng, tâm hồn trong veo.'}
          </p>
        </div>
      </div>
    )
  },
  {
    id: 109,
    name: 'Gia Đình Cổ Điển',
    tags: ['1anh', 'giadinh', 'kyniem'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-[#2c1810] p-6 flex flex-col items-center border-[15px] border-[#3d2b1f] relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-leather.png')] opacity-30 pointer-events-none z-0" />
        <div className="w-full flex-1 img-slot border-[10px] border-[#d4af37] shadow-2xl z-10 relative mb-8 filter sepia-[0.4] contrast-125" style={{ backgroundImage: `url(${data.l109_i1})` }} onClick={() => onImageClick('l109_i1')}>
          <div className="absolute inset-0 border-2 border-white/20 pointer-events-none" />
        </div>
        <div className="w-full text-center z-20">
          <h1 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-playfair font-bold text-4xl text-[#d4af37] uppercase mb-2 tracking-widest">
            {data.l109_t1 || 'THE FAMILY'}
          </h1>
          <div className="w-24 h-0.5 bg-[#d4af37] mx-auto mb-4" />
          <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-cormorant italic text-xl text-stone-300">
            {data.l109_t2 || 'Nơi bão dừng sau cánh cửa.'}
          </p>
        </div>
      </div>
    )
  },
  {
    id: 110,
    name: 'Bé Ngoan Ngôi Sao',
    tags: ['1anh', 'bengoan', 'treem'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-gradient-to-b from-purple-600 to-indigo-900 p-6 flex flex-col items-center relative overflow-hidden border-[10px] border-purple-400">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-40 pointer-events-none z-0" />
        <div className="absolute top-10 left-10 text-4xl text-yellow-300 animate-pulse z-0 pointer-events-none">⭐</div>
        <div className="absolute bottom-10 right-10 text-4xl text-yellow-300 animate-pulse z-0 pointer-events-none">✨</div>
        <div className="w-full bg-white/20 backdrop-blur-md text-white font-bevietnam font-black text-center py-3 uppercase tracking-widest text-lg shadow-lg z-20 rounded-2xl mb-8 border border-white/30">
          {data.l110_t1 || 'NGÔI SAO NHÍ CỦA TUẦN'}
        </div>
        <div className="w-52 h-52 img-slot rounded-full border-[8px] border-white shadow-[0_0_30px_rgba(255,255,255,0.3)] z-10 relative mb-6 overflow-hidden" style={{ backgroundImage: `url(${data.l110_i1})` }} onClick={() => onImageClick('l110_i1')}>
          <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 to-transparent pointer-events-none" />
        </div>
        <h1 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam font-black text-3xl text-white uppercase text-center z-10 mb-2 drop-shadow-md">
          {data.l110_t2 || 'TÊN CỦA BÉ'}
        </h1>
        <div className="bg-yellow-400 px-8 py-2 rounded-full shadow-lg z-10 border-2 border-white">
          <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-montserrat text-sm text-purple-900 font-black text-center">
            {data.l110_t3 || 'Tỏa sáng rực rỡ với những việc tốt.'}
          </p>
        </div>
      </div>
    )
  },
  {
    id: 111,
    name: 'Tạp Chí Minimal',
    tags: ['1anh', 'tapchi', 'minimal'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-white p-0 flex flex-col">
        <div className="w-full h-[75%] img-slot relative z-0" style={{ backgroundImage: `url(${data.l111_i1})` }} onClick={() => onImageClick('l111_i1')}>
          <div className="absolute top-8 left-8 z-10">
            <h1 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-playfair text-6xl text-white font-black leading-none drop-shadow-md">
              {data.l111_t1 || 'THE'}
            </h1>
            <h1 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-playfair text-6xl text-white font-black leading-none drop-shadow-md">
              {data.l111_t2 || 'ICON'}
            </h1>
          </div>
        </div>
        <div className="flex-1 p-8 flex flex-col justify-center">
          <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-oswald text-gray-900 text-2xl font-bold uppercase tracking-widest mb-2">
            {data.l111_t3 || 'NAME OF THE YEAR'}
          </h2>
          <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-montserrat text-sm text-gray-500 leading-relaxed">
            {data.l111_t4 || 'Exploring the boundaries of modern design and personal expression through the lens of a new generation.'}
          </p>
        </div>
      </div>
    )
  },
  {
    id: 112,
    name: 'Tạp Chí Đỏ Rực',
    tags: ['1anh', 'tapchi'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-red-600 p-4 flex flex-col">
        <div className="w-full h-full bg-white p-2 flex flex-col">
          <div className="w-full h-[60%] img-slot relative mb-4" style={{ backgroundImage: `url(${data.l112_i1})` }} onClick={() => onImageClick('l112_i1')}>
            <div className="absolute inset-0 border-4 border-red-600 m-2 pointer-events-none" />
          </div>
          <div className="flex-1 flex flex-col justify-between px-2 pb-2">
            <h1 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-anton text-5xl text-red-600 uppercase leading-none">
              {data.l112_t1 || 'VOGUE'}
            </h1>
            <div>
              <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam font-black text-2xl text-gray-900 uppercase">
                {data.l112_t2 || 'STYLE ICON'}
              </h2>
              <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-montserrat text-xs text-gray-600 mt-1">
                {data.l112_t3 || 'The ultimate guide to fashion and lifestyle in 2026.'}
              </p>
            </div>
            <div className="flex justify-between items-end">
              <span contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-oswald text-sm font-bold text-red-600 tracking-tighter">ISSUE 04</span>
              <span contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-oswald text-sm font-bold text-gray-400">APRIL 2026</span>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 113,
    name: 'Tạp Chí Nghệ Thuật',
    tags: ['1anh', 'tapchi', 'nghethuat'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-[#1a1a1a] p-6 flex flex-col">
        <div className="border-b border-white/20 pb-4 mb-6">
          <h1 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-playfair text-white text-4xl font-bold italic text-center">
            {data.l113_t1 || 'Art & Soul'}
          </h1>
        </div>
        <div className="w-full flex-1 img-slot border border-white/10 shadow-2xl relative mb-6" style={{ backgroundImage: `url(${data.l113_i1})` }} onClick={() => onImageClick('l113_i1')}>
          <div className="absolute bottom-4 left-4 bg-white text-black px-3 py-1 font-oswald text-xs font-bold uppercase">
            {data.l113_t2 || 'FEATURED ARTIST'}
          </div>
        </div>
        <div className="text-center">
          <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam font-black text-2xl text-white uppercase mb-2">
            {data.l113_t3 || 'CREATIVE VISION'}
          </h2>
          <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-montserrat text-[11px] text-gray-400 uppercase tracking-[0.3em]">
            {data.l113_t4 || 'A deep dive into the mind of a creator.'}
          </p>
        </div>
      </div>
    )
  },
  {
    id: 114,
    name: 'Tạp Chí Đen Trắng',
    tags: ['1anh', 'tapchi', 'minimal'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-white p-10 flex flex-col border border-gray-200">
        <div className="w-full h-[55%] img-slot filter grayscale contrast-125 mb-8" style={{ backgroundImage: `url(${data.l114_i1})` }} onClick={() => onImageClick('l114_i1')} />
        <div className="flex-1 flex flex-col justify-between">
          <h1 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-playfair text-5xl text-black font-black uppercase leading-none tracking-tighter">
            {data.l114_t1 || 'MONO'}
          </h1>
          <div className="w-full h-px bg-black my-4" />
          <div className="flex justify-between items-start">
            <div className="w-2/3">
              <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-oswald text-xl font-bold uppercase mb-2">
                {data.l114_t2 || 'THE BEAUTY OF SIMPLICITY'}
              </h2>
              <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-montserrat text-xs text-gray-600 leading-relaxed">
                {data.l114_t3 || 'In a world of noise, silence is the ultimate luxury. Discover the power of less.'}
              </p>
            </div>
            <div className="text-right">
              <span contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-oswald text-xs font-bold block">VOL. 12</span>
              <span contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-oswald text-xs text-gray-400">2026</span>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 115,
    name: 'Tạp Chí Đô Thị',
    tags: ['1anh', 'tapchi', 'minimal'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-[#f8f8f8] p-0 flex flex-col relative">
        <div className="absolute top-0 left-0 w-full h-full border-[20px] border-white z-20 pointer-events-none" />
        <div className="w-full h-full img-slot z-0" style={{ backgroundImage: `url(${data.l115_i1})` }} onClick={() => onImageClick('l115_i1')} />
        <div className="absolute bottom-[10%] left-[10%] right-[10%] bg-white/90 backdrop-blur-md p-6 z-30 shadow-2xl">
          <h1 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-anton text-4xl text-gray-900 uppercase mb-2">
            {data.l115_t1 || 'URBAN LIFE'}
          </h1>
          <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam text-sm text-gray-600 font-bold">
            {data.l115_t2 || 'Capturing the rhythm of the city through a unique perspective.'}
          </p>
          <div className="mt-4 flex justify-between items-center border-t border-gray-200 pt-4">
            <span contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-oswald text-[10px] font-bold tracking-widest text-gray-400 uppercase">Issue 04 / 2026</span>
            <span contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-oswald text-[10px] font-bold tracking-widest text-gray-900 uppercase">Read More</span>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 116,
    name: 'Tạp Chí Du Lịch',
    tags: ['1anh', 'tapchi', 'dulich'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-white p-4 flex flex-col">
        <div className="flex justify-between items-center mb-4 px-2">
          <h1 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-oswald text-2xl font-black text-sky-600 uppercase">
            {data.l116_t1 || 'EXPLORE'}
          </h1>
          <span contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-montserrat text-[10px] font-bold text-gray-400 uppercase tracking-widest">Wanderlust Edition</span>
        </div>
        <div className="w-full flex-1 img-slot relative mb-4 shadow-xl" style={{ backgroundImage: `url(${data.l116_i1})` }} onClick={() => onImageClick('l116_i1')}>
          <div className="absolute top-4 right-4 bg-sky-600 text-white px-3 py-1 font-oswald text-xs font-bold uppercase">
            {data.l116_t2 || 'TOP DESTINATION'}
          </div>
        </div>
        <div className="px-2">
          <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-playfair text-3xl text-gray-900 font-bold mb-2">
            {data.l116_t3 || 'The Hidden Gems of Vietnam'}
          </h2>
          <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam text-xs text-gray-600 leading-relaxed">
            {data.l116_t4 || 'From the misty mountains of Sapa to the crystal clear waters of Phu Quoc, discover the beauty of our homeland.'}
          </p>
        </div>
      </div>
    )
  },
  {
    id: 117,
    name: 'Tạp Chí Công Nghệ',
    tags: ['1anh', 'tapchi', 'congnghe'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-black p-6 flex flex-col relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 pointer-events-none z-0" />
        <div className="flex items-center gap-2 mb-8 z-10">
          <div className="w-3 h-3 rounded-full bg-cyan-500 animate-pulse" />
          <h1 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-oswald text-white text-xl font-bold uppercase tracking-widest">
            {data.l117_t1 || 'TECH VISION'}
          </h1>
        </div>
        <div className="w-full flex-1 img-slot border border-cyan-500/30 shadow-[0_0_20px_rgba(6,182,212,0.2)] z-10 relative mb-8 filter contrast-125 brightness-110" style={{ backgroundImage: `url(${data.l117_i1})` }} onClick={() => onImageClick('l117_i1')} />
        <div className="z-10">
          <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-anton text-4xl text-white uppercase mb-2 tracking-tighter">
            {data.l117_t2 || 'THE FUTURE IS NOW'}
          </h2>
          <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam text-xs text-cyan-400 font-bold uppercase tracking-widest">
            {data.l117_t3 || 'AI, Robotics, and the New World Order'}
          </p>
        </div>
      </div>
    )
  },
  {
    id: 118,
    name: 'Tạp Chí Ẩm Thực',
    tags: ['1anh', 'tapchi', 'amthuc'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-[#fffaf0] p-6 flex flex-col">
        <div className="text-center mb-6">
          <h1 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-playfair text-orange-800 text-4xl font-bold italic">
            {data.l118_t1 || 'Bon Appétit'}
          </h1>
          <div className="w-12 h-0.5 bg-orange-300 mx-auto mt-2" />
        </div>
        <div className="w-full flex-1 img-slot rounded-2xl border-8 border-white shadow-2xl z-10 relative mb-6" style={{ backgroundImage: `url(${data.l118_i1})` }} onClick={() => onImageClick('l118_i1')} />
        <div className="text-center">
          <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam font-black text-2xl text-gray-900 uppercase mb-2">
            {data.l118_t2 || 'FLAVORS OF ASIA'}
          </h2>
          <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-montserrat text-xs text-orange-700 font-bold uppercase tracking-widest">
            {data.l118_t3 || 'A culinary journey through the streets of Saigon.'}
          </p>
        </div>
      </div>
    )
  },
  {
    id: 119,
    name: 'Tạp Chí Thể Thao',
    tags: ['1anh', 'tapchi', 'thethao'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-zinc-900 p-0 flex flex-col relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-600/20 to-transparent z-0 pointer-events-none" />
        <div className="w-full h-[70%] img-slot z-10 relative filter contrast-125 saturate-150" style={{ backgroundImage: `url(${data.l119_i1})` }} onClick={() => onImageClick('l119_i1')}>
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-zinc-900 to-transparent" />
          <h1 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="absolute bottom-4 left-6 font-anton text-7xl text-white uppercase leading-none italic drop-shadow-2xl z-20">
            {data.l119_t1 || 'MVP'}
          </h1>
        </div>
        <div className="flex-1 p-6 z-20">
          <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam font-black text-3xl text-white uppercase mb-1">
            {data.l119_t2 || 'PLAYER NAME'}
          </h2>
          <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-oswald text-indigo-400 font-bold text-lg uppercase tracking-widest">
            {data.l119_t3 || 'THE UNSTOPPABLE FORCE'}
          </p>
        </div>
      </div>
    )
  },
  {
    id: 120,
    name: 'Tạp Chí Kiến Trúc',
    tags: ['1anh', 'tapchi', 'minimal'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-[#f0f0f0] p-8 flex flex-col border-l-[30px] border-gray-900">
        <div className="flex justify-between items-end mb-8">
          <h1 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-oswald text-5xl font-black text-gray-900 leading-none">
            {data.l120_t1 || 'ARCH'}
          </h1>
          <span contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-montserrat text-[10px] font-bold text-gray-400 uppercase tracking-[0.5em]">Structure & Form</span>
        </div>
        <div className="w-full flex-1 img-slot border border-gray-300 shadow-lg z-10 relative mb-8 filter grayscale" style={{ backgroundImage: `url(${data.l120_i1})` }} onClick={() => onImageClick('l120_i1')} />
        <div>
          <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam font-black text-xl text-gray-900 uppercase mb-2">
            {data.l120_t2 || 'MODERN MINIMALISM'}
          </h2>
          <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-montserrat text-xs text-gray-600 leading-relaxed max-w-[80%]">
            {data.l120_t3 || 'Redefining the urban landscape through clean lines and sustainable materials.'}
          </p>
        </div>
      </div>
    )
  },
  {
    id: 121,
    name: 'Bé Ngoan Gấu Bông (V2)',
    tags: ['1anh', 'bengoan', 'treem'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-[#fff9e6] p-6 flex flex-col items-center border-[10px] border-yellow-200 rounded-[40px] relative overflow-hidden">
        <div className="absolute top-4 left-4 text-4xl opacity-30 z-0 pointer-events-none">🧸</div>
        <div className="absolute bottom-4 right-4 text-4xl opacity-30 z-0 pointer-events-none">🎈</div>
        <div contentEditable suppressContentEditableWarning={true} spellCheck={false} className="w-full bg-yellow-400 text-yellow-900 font-bevietnam font-black text-center py-3 uppercase tracking-widest text-lg shadow-md z-20 rounded-full mb-6 border-4 border-white">
          {data.l121_t1 || 'BÉ NGOAN XUẤT SẮC'}
        </div>
        <div className="w-52 h-52 img-slot rounded-full border-[10px] border-white shadow-2xl z-10 relative mb-6 overflow-hidden" style={{ backgroundImage: `url(${data.l121_i1})` }} onClick={() => onImageClick('l121_i1')}>
          <div className="absolute inset-0 bg-gradient-to-t from-yellow-500/20 to-transparent pointer-events-none" />
        </div>
        <h1 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam font-black text-3xl text-yellow-700 uppercase text-center z-10 mb-2 drop-shadow-sm">
          {data.l121_t2 || 'TÊN CỦA BÉ'}
        </h1>
        <div className="bg-white px-6 py-2 rounded-2xl shadow-sm border-2 border-yellow-100 z-10">
          <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-montserrat text-sm text-yellow-600 font-bold text-center">
            {data.l121_t3 || 'Chăm chỉ học tập & vâng lời cha mẹ.'}
          </p>
        </div>
      </div>
    )
  },
  {
    id: 122,
    name: 'Minimalist Portrait',
    tags: ['1anh', 'minimal', 'portrait'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-white p-12 flex flex-col items-center justify-center">
        <div className="w-full h-[60%] img-slot filter grayscale mb-10" style={{ backgroundImage: `url(${data.l122_i1})` }} onClick={() => onImageClick('l122_i1')} />
        <div className="text-center">
          <h1 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-playfair text-4xl text-black font-bold mb-2 tracking-tight">
            {data.l122_t1 || 'THE ESSENCE'}
          </h1>
          <div className="w-12 h-px bg-black mx-auto mb-4" />
          <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-montserrat text-xs text-gray-400 uppercase tracking-[0.4em]">
            {data.l122_t2 || 'LESS IS MORE'}
          </p>
        </div>
      </div>
    )
  },
  {
    id: 123,
    name: 'Bold Typography',
    tags: ['1anh', 'minimal', 'typography'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-black p-0 flex flex-col relative">
        <div className="w-full h-full img-slot opacity-60 z-0" style={{ backgroundImage: `url(${data.l123_i1})` }} onClick={() => onImageClick('l123_i1')} />
        <div className="absolute inset-0 flex flex-col justify-center items-center z-10 pointer-events-none">
          <h1 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-anton text-[120px] text-white uppercase leading-none tracking-tighter opacity-90 pointer-events-auto">
            {data.l123_t1 || 'BOLD'}
          </h1>
          <h1 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-anton text-[120px] text-transparent border-text-white uppercase leading-none tracking-tighter opacity-90 pointer-events-auto" style={{ WebkitTextStroke: '2px white' }}>
            {data.l123_t2 || 'SOUL'}
          </h1>
        </div>
        <div className="absolute bottom-10 left-10 z-20">
          <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam text-white text-sm font-bold uppercase tracking-widest">
            {data.l123_t3 || 'ESTABLISHED 2026'}
          </p>
        </div>
      </div>
    )
  },
  {
    id: 124,
    name: 'Geometric Minimal',
    tags: ['1anh', 'minimal', 'geometric'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-[#f5f5f5] p-8 flex flex-col">
        <div className="relative w-full h-[65%] mb-8">
          <div className="absolute -top-4 -left-4 w-32 h-32 bg-yellow-400 z-0" />
          <div className="w-full h-full img-slot relative z-10 shadow-2xl" style={{ backgroundImage: `url(${data.l124_i1})` }} onClick={() => onImageClick('l124_i1')} />
        </div>
        <div className="flex-1">
          <h1 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-oswald text-4xl text-gray-900 font-black uppercase mb-2">
            {data.l124_t1 || 'GEOMETRIC'}
          </h1>
          <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam text-sm text-gray-500 leading-relaxed">
            {data.l124_t2 || 'A study of shapes and their relationship with the space they inhabit.'}
          </p>
        </div>
      </div>
    )
  },
  {
    id: 125,
    name: 'Soft Aesthetic',
    tags: ['1anh', 'minimal', 'aesthetic'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-[#fffcf9] p-10 flex flex-col items-center justify-center border-[15px] border-white shadow-inner">
        <div className="w-full h-[70%] img-slot rounded-t-[100px] shadow-lg mb-8" style={{ backgroundImage: `url(${data.l125_i1})` }} onClick={() => onImageClick('l125_i1')} />
        <div className="text-center">
          <h1 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-dancing text-4xl text-stone-700 mb-2">
            {data.l125_t1 || 'Simply Beautiful'}
          </h1>
          <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-montserrat text-[10px] text-stone-400 uppercase tracking-[0.5em]">
            {data.l125_t2 || 'PURE MOMENTS'}
          </p>
        </div>
      </div>
    )
  },
  {
    id: 126,
    name: 'Triển Lãm Nghệ Thuật',
    tags: ['1anh', 'nghethuat', 'sukien'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-[#111] p-12 flex flex-col justify-between">
        <div className="border-l-4 border-white pl-6">
          <h1 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-playfair text-white text-5xl font-black uppercase tracking-tighter leading-none mb-2">
            {data.l126_t1 || 'VISION'}
          </h1>
          <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-montserrat text-gray-400 text-xs uppercase tracking-[0.5em]">
            {data.l126_t2 || 'ART EXHIBITION 2026'}
          </p>
        </div>
        <div className="w-full h-[50%] img-slot border border-white/20 shadow-[0_0_50px_rgba(255,255,255,0.1)]" style={{ backgroundImage: `url(${data.l126_i1})` }} onClick={() => onImageClick('l126_i1')} />
        <div className="flex justify-between items-end">
          <div className="max-w-[60%]">
            <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-oswald text-white text-xl font-bold uppercase mb-2">
              {data.l126_t3 || 'THE UNSEEN BEAUTY'}
            </h2>
            <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam text-[10px] text-gray-500 leading-relaxed">
              {data.l126_t4 || 'Join us for an evening of inspiration and creativity as we showcase the latest works from emerging artists.'}
            </p>
          </div>
          <div className="text-right">
            <span contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-anton text-4xl text-white">04.04</span>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 127,
    name: 'Đêm Nhạc Jazz',
    tags: ['1anh', 'sukien', 'amnhac'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-[#1a0f0a] p-8 flex flex-col items-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,_rgba(212,175,55,0.15),_transparent)] pointer-events-none z-0" />
        <h1 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-playfair text-[#d4af37] text-6xl font-black italic mb-8 z-10 drop-shadow-lg">
          {data.l127_t1 || 'Jazz Night'}
        </h1>
        <div className="w-64 h-64 img-slot rounded-full border-4 border-[#d4af37] shadow-[0_0_30px_rgba(212,175,55,0.3)] z-10 relative mb-8 filter sepia-[0.3] contrast-110" style={{ backgroundImage: `url(${data.l127_i1})` }} onClick={() => onImageClick('l127_i1')}>
          <div className="absolute inset-0 rounded-full border-[15px] border-black/20 pointer-events-none" />
        </div>
        <div className="text-center z-10">
          <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-oswald text-white text-2xl font-bold uppercase tracking-widest mb-2">
            {data.l127_t2 || 'LIVE AT THE BLUE NOTE'}
          </h2>
          <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-montserrat text-sm text-[#d4af37] font-bold">
            {data.l127_t3 || 'SATURDAY, APRIL 4TH | 9:00 PM'}
          </p>
        </div>
      </div>
    )
  },
  {
    id: 128,
    name: 'Phim Điện Ảnh',
    tags: ['1anh', 'phim', 'sukien'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-black p-0 flex flex-col relative overflow-hidden">
        <div className="w-full h-full img-slot z-0" style={{ backgroundImage: `url(${data.l128_i1})` }} onClick={() => onImageClick('l128_i1')} />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10 pointer-events-none" />
        <div className="absolute bottom-12 left-0 w-full px-10 z-20 text-center">
          <h1 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-anton text-6xl text-white uppercase tracking-[0.2em] mb-4 drop-shadow-2xl">
            {data.l128_t1 || 'ETERNITY'}
          </h1>
          <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam text-xs text-gray-300 uppercase tracking-[0.5em] mb-8">
            {data.l128_t2 || 'A FILM BY VŨ TIẾN LỰC'}
          </p>
          <div className="flex justify-center gap-8 border-t border-white/20 pt-6">
            <div className="text-center">
              <span contentEditable suppressContentEditableWarning={true} spellCheck={false} className="block font-oswald text-[10px] text-gray-500 uppercase">Release Date</span>
              <span contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-oswald text-sm text-white font-bold">04.04.2026</span>
            </div>
            <div className="text-center">
              <span contentEditable suppressContentEditableWarning={true} spellCheck={false} className="block font-oswald text-[10px] text-gray-500 uppercase">Genre</span>
              <span contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-oswald text-sm text-white font-bold">DRAMA / SCI-FI</span>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 129,
    name: 'Sự Kiện Công Nghệ',
    tags: ['1anh', 'sukien', 'congnghe'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-[#0a0a0a] p-8 flex flex-col relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none z-0" />
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-600/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="flex justify-between items-center mb-12 z-10">
          <h1 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-anton text-white text-3xl tracking-widest">
            {data.l129_t1 || 'NEXT GEN'}
          </h1>
          <div contentEditable suppressContentEditableWarning={true} spellCheck={false} className="bg-blue-600 text-white px-3 py-1 font-oswald text-[10px] font-bold uppercase">Live Event</div>
        </div>
        <div className="w-full flex-1 img-slot border border-blue-500/30 shadow-[0_0_30px_rgba(37,99,235,0.2)] z-10 relative mb-10" style={{ backgroundImage: `url(${data.l129_i1})` }} onClick={() => onImageClick('l129_i1')} />
        <div className="z-10">
          <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam font-black text-4xl text-white uppercase mb-4 leading-none">
            {data.l129_t2 || 'THE FUTURE OF AI'}
          </h2>
          <div className="flex items-center gap-4">
            <div className="w-12 h-0.5 bg-blue-600" />
            <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-montserrat text-xs text-gray-400 font-bold uppercase tracking-widest">
              {data.l129_t3 || 'APRIL 04, 2026 | 10:00 AM'}
            </p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 130,
    name: 'Lễ Hội Mùa Xuân',
    tags: ['1anh', 'sukien', 'lehoi'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-emerald-50 p-6 flex flex-col items-center border-[12px] border-emerald-600 relative">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')] opacity-5 pointer-events-none z-0" />
        <span className="absolute top-4 left-4 text-4xl transform -rotate-12 z-20 pointer-events-none">🌸</span>
        <span className="absolute top-4 right-4 text-4xl transform rotate-12 z-20 pointer-events-none">🌸</span>
        <h1 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-playfair text-emerald-800 text-4xl font-black uppercase text-center mb-6 z-10">
          {data.l130_t1 || 'SPRING FEST'}
        </h1>
        <div className="w-full flex-1 img-slot border-4 border-white shadow-xl z-10 relative mb-6 rounded-t-full overflow-hidden" style={{ backgroundImage: `url(${data.l130_i1})` }} onClick={() => onImageClick('l130_i1')} />
        <div className="text-center z-10">
          <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam font-black text-xl text-emerald-900 uppercase mb-2">
            {data.l130_t2 || 'CELEBRATE THE NEW SEASON'}
          </h2>
          <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-montserrat text-xs text-emerald-700 font-bold">
            {data.l130_t3 || 'MUSIC • FOOD • ART • CULTURE'}
          </p>
        </div>
      </div>
    )
  },
  {
    id: 131,
    name: 'Hội Thảo Sáng Tạo',
    tags: ['1anh', 'sukien', 'giaoduc'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-white p-10 flex flex-col border-t-[20px] border-indigo-600">
        <div className="flex justify-between items-start mb-12">
          <div className="w-2/3">
            <h1 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-anton text-5xl text-gray-900 uppercase leading-none mb-4">
              {data.l131_t1 || 'CREATE'}
            </h1>
            <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam text-sm text-indigo-600 font-bold uppercase tracking-widest">
              {data.l131_t2 || 'WORKSHOP 2026'}
            </p>
          </div>
          <div className="text-right">
            <span contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-oswald text-4xl font-black text-gray-200">01</span>
          </div>
        </div>
        <div className="w-full flex-1 img-slot border-2 border-gray-100 shadow-2xl z-10 relative mb-10" style={{ backgroundImage: `url(${data.l131_i1})` }} onClick={() => onImageClick('l131_i1')} />
        <div className="flex justify-between items-end">
          <div className="max-w-[70%]">
            <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-oswald text-gray-900 text-xl font-bold uppercase mb-2">
              {data.l131_t3 || 'MASTERING THE ART OF DESIGN'}
            </h2>
            <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-montserrat text-xs text-gray-500 leading-relaxed">
              {data.l131_t4 || 'Learn from the industry experts and take your creative skills to the next level in this intensive one-day workshop.'}
            </p>
          </div>
          <div className="bg-indigo-600 text-white p-3 rounded-full shadow-lg">
            <span className="text-xl">✏️</span>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 132,
    name: 'Đêm Tiệc Neon',
    tags: ['1anh', 'sukien', 'party'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-black p-6 flex flex-col items-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(236,72,153,0.2),_transparent)] pointer-events-none z-0" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_bottom_right,_rgba(6,182,212,0.2),_transparent)] pointer-events-none z-0" />
        <h1 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-anton text-6xl text-transparent border-text-white uppercase tracking-widest mb-8 z-10 animate-pulse" style={{ WebkitTextStroke: '1px #ec4899', textShadow: '0 0 20px #ec4899' }}>
          {data.l132_t1 || 'NEON'}
        </h1>
        <div className="w-full flex-1 img-slot border-2 border-cyan-400 shadow-[0_0_30px_rgba(34,211,238,0.4)] z-10 relative mb-8 rounded-lg overflow-hidden" style={{ backgroundImage: `url(${data.l132_i1})` }} onClick={() => onImageClick('l132_i1')}>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
        </div>
        <div className="text-center z-10">
          <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam font-black text-2xl text-white uppercase mb-2 tracking-tighter" style={{ textShadow: '0 0 10px rgba(255,255,255,0.5)' }}>
            {data.l132_t2 || 'THE UNDERGROUND PARTY'}
          </h2>
          <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-oswald text-cyan-400 font-bold text-lg uppercase tracking-[0.3em]">
            {data.l132_t3 || 'APRIL 04 | 10 PM - LATE'}
          </p>
        </div>
      </div>
    )
  },
  {
    id: 133,
    name: 'Giải Chạy Marathon',
    tags: ['1anh', 'sukien', 'thethao'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-orange-500 p-0 flex flex-col relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/diagonal-stripes.png')] opacity-20 pointer-events-none z-0" />
        <div className="w-full h-[60%] img-slot z-10 relative filter contrast-125 saturate-150" style={{ backgroundImage: `url(${data.l133_i1})` }} onClick={() => onImageClick('l133_i1')}>
          <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-orange-500 to-transparent" />
        </div>
        <div className="flex-1 p-8 z-20 flex flex-col justify-center items-center">
          <h1 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-anton text-6xl text-white uppercase leading-none italic mb-2 drop-shadow-lg">
            {data.l133_t1 || 'RUN FOR LIFE'}
          </h1>
          <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam font-black text-2xl text-orange-900 uppercase mb-6">
            {data.l133_t2 || 'CITY MARATHON 2026'}
          </h2>
          <div className="flex gap-6">
            <div className="text-center">
              <span contentEditable suppressContentEditableWarning={true} spellCheck={false} className="block font-oswald text-[10px] text-orange-200 uppercase">Distance</span>
              <span contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-oswald text-xl text-white font-bold">21.1 KM</span>
            </div>
            <div className="w-px h-10 bg-orange-400" />
            <div className="text-center">
              <span contentEditable suppressContentEditableWarning={true} spellCheck={false} className="block font-oswald text-[10px] text-orange-200 uppercase">Date</span>
              <span contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-oswald text-xl text-white font-bold">04.04</span>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 134,
    name: 'Hội Chợ Sách',
    tags: ['1anh', 'sukien', 'vanhoa'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-[#fdfaf6] p-8 flex flex-col items-center border-[15px] border-[#8b5e3c] relative">
        <div className="absolute top-4 left-4 text-4xl opacity-30 z-0 pointer-events-none">📚</div>
        <div className="absolute bottom-4 right-4 text-4xl opacity-30 z-0 pointer-events-none">📖</div>
        <h1 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-playfair text-[#5d4037] text-4xl font-black uppercase text-center mb-8 z-10">
          {data.l134_t1 || 'BOOK FAIR 2026'}
        </h1>
        <div className="w-full flex-1 img-slot border-4 border-white shadow-xl z-10 relative mb-8" style={{ backgroundImage: `url(${data.l134_i1})` }} onClick={() => onImageClick('l134_i1')}>
          <div className="absolute inset-0 border border-[#8b5e3c]/20 pointer-events-none" />
        </div>
        <div className="text-center z-10">
          <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam font-black text-xl text-[#5d4037] uppercase mb-2">
            {data.l134_t2 || 'DISCOVER NEW WORLDS'}
          </h2>
          <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-montserrat text-xs text-[#8b5e3c] font-bold uppercase tracking-widest">
            {data.l134_t3 || 'CITY CENTRAL PARK | 8 AM - 8 PM'}
          </p>
        </div>
      </div>
    )
  },
  {
    id: 135,
    name: 'Triển Lãm Xe Độ',
    tags: ['1anh', 'sukien', 'xe'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-zinc-900 p-6 flex flex-col relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_rgba(239,68,68,0.15),_transparent)] pointer-events-none z-0" />
        <div className="flex justify-between items-end mb-10 z-10">
          <h1 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-anton text-white text-5xl uppercase leading-none tracking-tighter">
            {data.l135_t1 || 'CUSTOM'}
          </h1>
          <span contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-oswald text-red-500 font-bold text-xl uppercase italic">SHOW 2026</span>
        </div>
        <div className="w-full flex-1 img-slot border-y-2 border-red-500/50 z-10 relative mb-10 filter contrast-125 saturate-150" style={{ backgroundImage: `url(${data.l135_i1})` }} onClick={() => onImageClick('l135_i1')}>
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40 pointer-events-none" />
        </div>
        <div className="z-10 flex justify-between items-center">
          <div>
            <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam font-black text-2xl text-white uppercase">
              {data.l135_t2 || 'THE BEASTS'}
            </h2>
            <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-montserrat text-[10px] text-gray-400 uppercase tracking-widest">
              {data.l135_t3 || 'POWER • SPEED • STYLE'}
            </p>
          </div>
          <div className="bg-red-600 text-white px-4 py-2 font-anton text-2xl uppercase italic shadow-lg">
            {data.l135_t4 || 'FREE'}
          </div>
        </div>
      </div>
    )
  },
  {
    id: 136,
    name: 'Đêm Hội Halloween',
    tags: ['1anh', 'sukien', 'lehoi'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-[#0d0d0d] p-8 flex flex-col items-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(249,115,22,0.15),_transparent)] pointer-events-none z-0" />
        <div className="absolute top-10 left-10 text-5xl opacity-40 z-0 pointer-events-none transform -rotate-12">🎃</div>
        <div className="absolute top-10 right-10 text-5xl opacity-40 z-0 pointer-events-none transform rotate-12">👻</div>
        <h1 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-anton text-orange-500 text-6xl uppercase tracking-[0.2em] mb-8 z-10 drop-shadow-[0_0_20px_rgba(249,115,22,0.5)]">
          {data.l136_t1 || 'SPOOKY'}
        </h1>
        <div className="w-full flex-1 img-slot border-4 border-orange-500 shadow-[0_0_30px_rgba(249,115,22,0.3)] z-10 relative mb-8 rounded-2xl overflow-hidden" style={{ backgroundImage: `url(${data.l136_i1})` }} onClick={() => onImageClick('l136_i1')}>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
        </div>
        <div className="text-center z-10">
          <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam font-black text-2xl text-white uppercase mb-2">
            {data.l136_t2 || 'THE HAUNTED NIGHT'}
          </h2>
          <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-oswald text-orange-400 font-bold text-lg uppercase tracking-widest">
            {data.l136_t3 || 'OCTOBER 31ST | 8 PM'}
          </p>
        </div>
      </div>
    )
  },
  {
    id: 137,
    name: 'Sự Kiện Thời Trang',
    tags: ['1anh', 'sukien', 'thoitrang'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-white p-0 flex flex-col relative overflow-hidden">
        <div className="w-full h-full img-slot z-0" style={{ backgroundImage: `url(${data.l137_i1})` }} onClick={() => onImageClick('l137_i1')} />
        <div className="absolute inset-0 bg-black/20 z-10 pointer-events-none" />
        <div className="absolute top-0 left-0 w-full p-12 z-20">
          <h1 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-playfair text-white text-7xl font-black uppercase leading-none tracking-tighter mb-4">
            {data.l137_t1 || 'COUTURE'}
          </h1>
          <div className="w-24 h-1 bg-white mb-4" />
          <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-montserrat text-white text-xs font-bold uppercase tracking-[0.5em]">
            {data.l137_t2 || 'FASHION WEEK 2026'}
          </p>
        </div>
        <div className="absolute bottom-12 right-12 z-20 text-right">
          <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-oswald text-white text-2xl font-bold uppercase mb-2">
            {data.l137_t3 || 'THE NEW COLLECTION'}
          </h2>
          <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam text-white text-[10px] font-bold uppercase tracking-widest">
            {data.l137_t4 || 'INVITATION ONLY'}
          </p>
        </div>
      </div>
    )
  },
  {
    id: 138,
    name: 'Giải Đấu Gaming',
    tags: ['1anh', 'sukien', 'gaming'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-[#050505] p-6 flex flex-col relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(168,85,247,0.2),_transparent)] pointer-events-none z-0" />
        <div className="flex justify-between items-center mb-8 z-10">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-purple-500 rotate-45" />
            <h1 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-anton text-white text-2xl tracking-wider">
              {data.l138_t1 || 'CYBER ARENA'}
            </h1>
          </div>
          <span contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-oswald text-purple-400 font-bold text-xs uppercase tracking-widest">Tournament</span>
        </div>
        <div className="w-full flex-1 img-slot border-2 border-purple-500/50 shadow-[0_0_40px_rgba(168,85,247,0.3)] z-10 relative mb-8 rounded-lg" style={{ backgroundImage: `url(${data.l138_i1})` }} onClick={() => onImageClick('l138_i1')}>
          <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 to-transparent pointer-events-none" />
        </div>
        <div className="z-10">
          <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam font-black text-4xl text-white uppercase mb-2 italic tracking-tighter">
            {data.l138_t2 || 'ULTIMATE SHOWDOWN'}
          </h2>
          <div className="flex justify-between items-center">
            <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-montserrat text-xs text-purple-300 font-bold uppercase tracking-widest">
              {data.l138_t3 || '$10,000 PRIZE POOL'}
            </p>
            <span contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-oswald text-white text-sm font-bold">04.04.2026</span>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 139,
    name: 'Hội Thảo Kinh Doanh',
    tags: ['1anh', 'sukien', 'kinhdoanh'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-white p-12 flex flex-col border-r-[20px] border-blue-900">
        <h1 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-oswald text-6xl font-black text-gray-900 uppercase leading-none mb-4">
          {data.l139_t1 || 'LEAD'}
        </h1>
        <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam font-bold text-blue-900 text-sm uppercase tracking-[0.4em] mb-12">
          {data.l139_t2 || 'BUSINESS SUMMIT 2026'}
        </h2>
        <div className="w-full flex-1 img-slot border border-gray-200 shadow-xl z-10 relative mb-12 filter contrast-110" style={{ backgroundImage: `url(${data.l139_i1})` }} onClick={() => onImageClick('l139_i1')} />
        <div className="flex justify-between items-start">
          <div className="max-w-[70%]">
            <h3 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam font-black text-xl text-gray-900 uppercase mb-2">
              {data.l139_t3 || 'STRATEGIES FOR THE NEW ERA'}
            </h3>
            <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-montserrat text-xs text-gray-500 leading-relaxed">
              {data.l139_t4 || 'Join global leaders and innovators as we discuss the future of business and technology in a rapidly changing world.'}
            </p>
          </div>
          <div className="text-right">
            <span contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-anton text-4xl text-blue-900">04.04</span>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 140,
    name: 'Đêm Hội Ánh Sáng',
    tags: ['1anh', 'sukien', 'lehoi'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-black p-0 flex flex-col relative overflow-hidden">
        <div className="w-full h-full img-slot z-0" style={{ backgroundImage: `url(${data.l140_i1})` }} onClick={() => onImageClick('l140_i1')} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1),_transparent)] z-10 pointer-events-none" />
        <div className="absolute inset-0 flex flex-col justify-center items-center z-20 p-10">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-10 flex flex-col items-center text-center shadow-2xl">
            <h1 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-playfair text-white text-5xl font-black uppercase tracking-widest mb-4">
              {data.l140_t1 || 'LUMINA'}
            </h1>
            <div className="w-16 h-px bg-white mb-6" />
            <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam font-bold text-white text-sm uppercase tracking-[0.3em] mb-8">
              {data.l140_t2 || 'FESTIVAL OF LIGHTS'}
            </h2>
            <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-montserrat text-white text-[10px] font-bold uppercase tracking-widest">
              {data.l140_t3 || 'APRIL 04, 2026 | CITY CENTER'}
            </p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 141,
    name: 'Bình Minh Yên Bình',
    tags: ['1anh', 'thiennhien', 'truyencamhung'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-[#fff9f0] p-0 flex flex-col relative overflow-hidden">
        <div className="w-full h-[65%] img-slot z-0" style={{ backgroundImage: `url(${data.l141_i1})` }} onClick={() => onImageClick('l141_i1')} />
        <div className="absolute top-[60%] left-0 w-full h-[40%] bg-white z-10 rounded-t-[50px] shadow-[0_-20px_40px_rgba(0,0,0,0.1)] p-10 flex flex-col items-center text-center">
          <h1 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-dancing text-4xl text-orange-800 mb-4">
            {data.l141_t1 || 'Khởi đầu ngày mới'}
          </h1>
          <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-montserrat text-sm text-gray-500 leading-relaxed italic">
            {data.l141_t2 || '"Mỗi buổi sáng là một cơ hội mới để viết nên câu chuyện cuộc đời mình theo cách rực rỡ nhất."'}
          </p>
          <div className="mt-6 flex items-center gap-4">
            <div className="w-8 h-px bg-orange-200" />
            <span contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-oswald text-[10px] text-orange-400 uppercase tracking-[0.3em]">
              {data.l141_t3 || 'SUNRISE SERENITY'}
            </span>
            <div className="w-8 h-px bg-orange-200" />
          </div>
        </div>
      </div>
    )
  },
  {
    id: 142,
    name: 'Rừng Xanh Đại Ngàn',
    tags: ['1anh', 'thiennhien'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-[#0a1a0a] p-6 flex flex-col relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/leaves.png')] opacity-10 pointer-events-none z-0" />
        <div className="w-full flex-1 img-slot border-2 border-emerald-500/30 shadow-2xl z-10 relative mb-8 rounded-3xl overflow-hidden" style={{ backgroundImage: `url(${data.l142_i1})` }} onClick={() => onImageClick('l142_i1')}>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-emerald-900/60 pointer-events-none" />
        </div>
        <div className="z-10 px-4">
          <h1 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam font-black text-4xl text-white uppercase mb-2 tracking-tighter">
            {data.l142_t1 || 'WILD SPIRIT'}
          </h1>
          <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-montserrat text-xs text-emerald-400 font-bold uppercase tracking-[0.4em]">
            {data.l142_t2 || 'INTO THE DEEP GREEN'}
          </p>
        </div>
      </div>
    )
  },
  {
    id: 143,
    name: 'Biển Cả Mênh Mông',
    tags: ['1anh', 'thiennhien'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-sky-50 p-0 flex flex-col relative overflow-hidden">
        <div className="w-full h-full img-slot z-0" style={{ backgroundImage: `url(${data.l143_i1})` }} onClick={() => onImageClick('l143_i1')} />
        <div className="absolute inset-0 bg-gradient-to-r from-sky-900/40 via-transparent to-transparent z-10 pointer-events-none" />
        <div className="absolute top-1/2 left-10 transform -translate-y-1/2 z-20 max-w-[50%]">
          <h1 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-anton text-7xl text-white uppercase leading-none mb-4 drop-shadow-2xl">
            {data.l143_t1 || 'OCEAN'}
          </h1>
          <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam text-sm text-sky-100 font-bold uppercase tracking-widest drop-shadow-md">
            {data.l143_t2 || 'THE ENDLESS HORIZON'}
          </p>
        </div>
        <div className="absolute bottom-10 right-10 z-20">
          <span className="font-oswald text-white text-xs font-bold tracking-widest opacity-60">04.04.2026</span>
        </div>
      </div>
    )
  },
  {
    id: 144,
    name: 'Núi Cao Hùng Vĩ',
    tags: ['1anh', 'thiennhien', 'truyencamhung'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-stone-900 p-8 flex flex-col justify-end relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full img-slot z-0 filter contrast-125 brightness-75" style={{ backgroundImage: `url(${data.l144_i1})` }} onClick={() => onImageClick('l144_i1')} />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/20 to-transparent z-10 pointer-events-none" />
        <div className="z-20 relative">
          <h1 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-playfair text-white text-5xl font-black uppercase mb-4 leading-none">
            {data.l144_t1 || 'PEAK'}
          </h1>
          <div className="w-16 h-1 bg-amber-500 mb-6" />
          <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-montserrat text-sm text-stone-300 leading-relaxed max-w-[90%] italic">
            {data.l144_t2 || '"Tầm nhìn từ đỉnh núi luôn xứng đáng với những nỗ lực leo trèo mệt mỏi nhất."'}
          </p>
        </div>
      </div>
    )
  },
  {
    id: 145,
    name: 'Hoàng Hôn Rực Rỡ',
    tags: ['1anh', 'thiennhien'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-orange-950 p-5 flex flex-col relative overflow-hidden">
        <div className="w-full flex-1 img-slot border-4 border-orange-500/30 shadow-2xl z-10 relative mb-6 rounded-lg" style={{ backgroundImage: `url(${data.l145_i1})` }} onClick={() => onImageClick('l145_i1')}>
          <div className="absolute inset-0 bg-gradient-to-t from-orange-900/60 via-transparent to-transparent pointer-events-none" />
        </div>
        <div className="z-10 text-center">
          <h1 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-anton text-5xl text-orange-500 uppercase tracking-widest mb-1">
            {data.l145_t1 || 'GOLDEN HOUR'}
          </h1>
          <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam text-xs text-orange-200 font-bold uppercase tracking-[0.3em]">
            {data.l145_t2 || 'WHERE THE DAY MEETS THE NIGHT'}
          </p>
        </div>
      </div>
    )
  },
  {
    id: 146,
    name: 'Cánh Đồng Bất Tận',
    tags: ['1anh', 'thiennhien'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-[#f5f5dc] p-8 flex flex-col items-center border-[10px] border-white shadow-inner">
        <div className="w-full flex-1 img-slot rounded-full border-[15px] border-white shadow-2xl z-10 relative mb-8 overflow-hidden" style={{ backgroundImage: `url(${data.l146_i1})` }} onClick={() => onImageClick('l146_i1')} />
        <div className="text-center z-10">
          <h1 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-playfair text-stone-800 text-3xl font-bold italic mb-2">
            {data.l146_t1 || 'Peaceful Fields'}
          </h1>
          <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-montserrat text-[10px] text-stone-400 uppercase tracking-[0.5em]">
            {data.l146_t2 || 'A JOURNEY TO SERENITY'}
          </p>
        </div>
      </div>
    )
  },
  {
    id: 147,
    name: 'Thác Nước Hùng Vĩ',
    tags: ['1anh', 'thiennhien'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-sky-900 p-0 flex flex-col relative overflow-hidden">
        <div className="w-full h-full img-slot z-0 filter contrast-125 saturate-150" style={{ backgroundImage: `url(${data.l147_i1})` }} onClick={() => onImageClick('l147_i1')} />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-sky-900/80 z-10 pointer-events-none" />
        <div className="absolute bottom-10 left-10 right-10 z-20">
          <h1 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-anton text-5xl text-white uppercase leading-none mb-2">
            {data.l147_t1 || 'FLOW'}
          </h1>
          <div className="w-full h-1 bg-sky-400 mb-4" />
          <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam text-sm text-sky-200 font-bold uppercase tracking-widest">
            {data.l147_t2 || 'THE POWER OF NATURE'}
          </p>
        </div>
      </div>
    )
  },
  {
    id: 148,
    name: 'Sa Mạc Hoang Vu',
    tags: ['1anh', 'thiennhien'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-[#d2b48c] p-6 flex flex-col relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/sandpaper.png')] opacity-20 pointer-events-none z-0" />
        <div className="w-full flex-1 img-slot border-4 border-white shadow-2xl z-10 relative mb-8 filter sepia-[0.3]" style={{ backgroundImage: `url(${data.l148_i1})` }} onClick={() => onImageClick('l148_i1')} />
        <div className="z-10 text-right">
          <h1 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-oswald text-6xl text-white font-black uppercase leading-none mb-2 drop-shadow-lg">
            {data.l148_t1 || 'DESERT'}
          </h1>
          <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam text-xs text-orange-900 font-bold uppercase tracking-[0.4em]">
            {data.l148_t2 || 'THE SILENT ECHO'}
          </p>
        </div>
      </div>
    )
  },
  {
    id: 149,
    name: 'Bầu Trời Đầy Sao',
    tags: ['1anh', 'thiennhien'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-black p-10 flex flex-col items-center justify-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-50 pointer-events-none z-0" />
        <div className="w-64 h-64 img-slot rounded-full border-2 border-white/20 shadow-[0_0_50px_rgba(255,255,255,0.1)] z-10 relative mb-10" style={{ backgroundImage: `url(${data.l149_i1})` }} onClick={() => onImageClick('l149_i1')}>
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 to-transparent pointer-events-none" />
        </div>
        <div className="text-center z-10">
          <h1 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-playfair text-white text-4xl font-bold mb-2">
            {data.l149_t1 || 'Stellar Dreams'}
          </h1>
          <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-montserrat text-[10px] text-gray-500 uppercase tracking-[0.5em]">
            {data.l149_t2 || 'LOST IN THE UNIVERSE'}
          </p>
        </div>
      </div>
    )
  },
  {
    id: 150,
    name: 'Mùa Thu Lá Bay',
    tags: ['1anh', 'thiennhien'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-[#fff5e6] p-6 flex flex-col border-[15px] border-orange-100 relative">
        <div className="absolute top-4 right-4 text-4xl opacity-40 z-0 pointer-events-none transform rotate-12">🍂</div>
        <div className="w-full flex-1 img-slot border-4 border-white shadow-xl z-10 relative mb-8 filter sepia-[0.2]" style={{ backgroundImage: `url(${data.l150_i1})` }} onClick={() => onImageClick('l150_i1')} />
        <div className="text-center z-10">
          <h1 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-playfair text-orange-900 text-3xl font-black uppercase mb-2">
            {data.l150_t1 || 'AUTUMN WHISPER'}
          </h1>
          <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam text-xs text-orange-700 font-bold uppercase tracking-widest">
            {data.l150_t2 || 'THE SEASON OF GOLDEN COLORS'}
          </p>
        </div>
      </div>
    )
  },
  {
    id: 151,
    name: 'Tự Do (Freedom)',
    tags: ['1anh', 'truyencamhung'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-white p-0 flex flex-col relative overflow-hidden">
        <div className="w-full h-full img-slot z-0" style={{ backgroundImage: `url(${data.l151_i1})` }} onClick={() => onImageClick('l151_i1')} />
        <div className="absolute inset-0 bg-black/10 z-10 pointer-events-none" />
        <div className="absolute top-1/2 left-0 w-full transform -translate-y-1/2 z-20 text-center">
          <h1 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-anton text-[100px] text-white uppercase leading-none drop-shadow-2xl opacity-90">
            {data.l151_t1 || 'FREE'}
          </h1>
        </div>
        <div className="absolute bottom-10 left-10 right-10 z-20 flex justify-between items-end">
          <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam text-white text-sm font-bold uppercase tracking-widest drop-shadow-md">
            {data.l151_t2 || 'BREAK THE CHAINS'}
          </p>
          <span className="font-oswald text-white text-xs font-bold opacity-60">2026</span>
        </div>
      </div>
    )
  },
  {
    id: 152,
    name: 'Khát Vọng (Aspiration)',
    tags: ['1anh', 'truyencamhung'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-indigo-900 p-10 flex flex-col justify-center items-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1),_transparent)] pointer-events-none z-0" />
        <div className="w-full h-[50%] img-slot border-2 border-white/20 shadow-2xl z-10 relative mb-10 transform rotate-2" style={{ backgroundImage: `url(${data.l152_i1})` }} onClick={() => onImageClick('l152_i1')} />
        <div className="text-center z-10">
          <h1 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-playfair text-white text-4xl font-bold mb-4">
            {data.l152_t1 || 'Reach for the Stars'}
          </h1>
          <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-montserrat text-xs text-indigo-200 leading-relaxed max-w-[80%] mx-auto italic">
            {data.l152_t2 || '"Đừng bao giờ từ bỏ giấc mơ của bạn, vì đó là nơi tâm hồn bạn thuộc về."'}
          </p>
        </div>
      </div>
    )
  },
  {
    id: 153,
    name: 'Dũng Cảm (Courage)',
    tags: ['1anh', 'truyencamhung'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-red-900 p-8 flex flex-col relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 pointer-events-none z-0" />
        <div className="w-full flex-1 img-slot border-l-8 border-red-500 shadow-2xl z-10 relative mb-8 filter contrast-125 brightness-90" style={{ backgroundImage: `url(${data.l153_i1})` }} onClick={() => onImageClick('l153_i1')} />
        <div className="z-10">
          <h1 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-anton text-6xl text-white uppercase leading-none mb-2">
            {data.l153_t1 || 'BRAVE'}
          </h1>
          <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam text-sm text-red-400 font-black uppercase tracking-widest">
            {data.l153_t2 || 'FEAR IS A LIAR'}
          </p>
        </div>
      </div>
    )
  },
  {
    id: 154,
    name: 'Kiên Trì (Persistence)',
    tags: ['1anh', 'truyencamhung'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-zinc-900 p-12 flex flex-col items-center justify-center border border-zinc-800">
        <div className="w-full h-[45%] img-slot filter grayscale contrast-150 mb-12" style={{ backgroundImage: `url(${data.l154_i1})` }} onClick={() => onImageClick('l154_i1')} />
        <div className="text-center">
          <h1 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-oswald text-5xl text-white font-black uppercase mb-4 tracking-tighter">
            {data.l154_t1 || 'ENDURE'}
          </h1>
          <div className="w-12 h-1 bg-white mx-auto mb-6" />
          <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam text-xs text-zinc-500 leading-relaxed uppercase tracking-widest font-bold">
            {data.l154_t2 || 'Success is not final, failure is not fatal: it is the courage to continue that counts.'}
          </p>
        </div>
      </div>
    )
  },
  {
    id: 155,
    name: 'Sáng Tạo (Creativity)',
    tags: ['1anh', 'truyencamhung'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-white p-6 flex flex-col relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_left,_rgba(255,0,255,0.1),_transparent)] pointer-events-none z-0" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_bottom_right,_rgba(0,255,255,0.1),_transparent)] pointer-events-none z-0" />
        <div className="flex justify-between items-center mb-10 z-10">
          <h1 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-playfair text-4xl font-black italic">
            {data.l155_t1 || 'Imagine'}
          </h1>
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-pink-500 to-cyan-500 animate-spin" />
        </div>
        <div className="w-full flex-1 img-slot border-4 border-gray-900 shadow-2xl z-10 relative mb-10" style={{ backgroundImage: `url(${data.l155_i1})` }} onClick={() => onImageClick('l155_i1')} />
        <div className="z-10 text-center">
          <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam font-black text-2xl text-gray-900 uppercase mb-2">
            {data.l155_t2 || 'CREATE WITHOUT LIMITS'}
          </h2>
          <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-montserrat text-[10px] text-gray-400 uppercase tracking-[0.4em]">
            {data.l155_t3 || 'THE WORLD IS YOUR CANVAS'}
          </p>
        </div>
      </div>
    )
  },
  {
    id: 156,
    name: 'Hình Khối Hiện Đại',
    tags: ['1anh', 'dohoa', 'minimal'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-[#f0f0f0] p-10 flex flex-col relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-yellow-400 z-0 pointer-events-none" />
        <div className="w-full flex-1 img-slot border-[15px] border-white shadow-2xl z-10 relative mb-10" style={{ backgroundImage: `url(${data.l156_i1})` }} onClick={() => onImageClick('l156_i1')} />
        <div className="z-10 flex flex-col items-start">
          <h1 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-anton text-6xl text-gray-900 uppercase leading-none mb-2 mix-blend-difference">
            {data.l156_t1 || 'GEOMETRIC'}
          </h1>
          <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam font-bold text-sm text-gray-600 uppercase tracking-[0.5em]">
            {data.l156_t2 || 'MODERN ART SERIES'}
          </p>
        </div>
      </div>
    )
  },
  {
    id: 157,
    name: 'Trừu Tượng Đầy Màu Sắc',
    tags: ['1anh', 'dohoa', 'nghethuat'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-white p-8 flex flex-col relative overflow-hidden">
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-pink-500/20 rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-500/20 rounded-full blur-[80px] pointer-events-none" />
        <div className="w-full flex-1 img-slot z-10 relative mb-8 rounded-[40px] overflow-hidden shadow-2xl" style={{ backgroundImage: `url(${data.l157_i1})` }} onClick={() => onImageClick('l157_i1')}>
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-transparent pointer-events-none" />
        </div>
        <div className="z-10 text-center">
          <h1 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-playfair text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500 mb-2">
            {data.l157_t1 || 'Abstract'}
          </h1>
          <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-montserrat text-xs text-gray-400 font-bold uppercase tracking-widest">
            {data.l157_t2 || 'EXPLORING THE UNKNOWN'}
          </p>
        </div>
      </div>
    )
  },
  {
    id: 158,
    name: 'Brutalist Design',
    tags: ['1anh', 'dohoa', 'minimal'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-gray-200 p-0 flex flex-col relative overflow-hidden border-[20px] border-gray-900">
        <div className="w-full h-[50%] img-slot grayscale contrast-150 z-0" style={{ backgroundImage: `url(${data.l158_i1})` }} onClick={() => onImageClick('l158_i1')} />
        <div className="flex-1 p-8 flex flex-col justify-between z-10 bg-gray-900">
          <h1 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-anton text-7xl text-white uppercase leading-none tracking-tighter">
            {data.l158_t1 || 'RAW'}
          </h1>
          <div className="flex justify-between items-end">
            <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam text-xs text-gray-400 max-w-[60%] leading-tight">
              {data.l158_t2 || 'BRUTALIST ARCHITECTURE AND DESIGN PRINCIPLES IN MODERN CONTEXT.'}
            </p>
            <span className="font-oswald text-white text-4xl font-black">26</span>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 159,
    name: 'Pop Art Style',
    tags: ['1anh', 'dohoa', 'nghethuat'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-yellow-300 p-6 flex flex-col border-[10px] border-black relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/halftone-dots.png')] opacity-30 pointer-events-none z-0" />
        <div className="w-full flex-1 img-slot border-[8px] border-black shadow-[10px_10px_0_0_rgba(0,0,0,1)] z-10 relative mb-8 filter saturate-200 contrast-125" style={{ backgroundImage: `url(${data.l159_i1})` }} onClick={() => onImageClick('l159_i1')} />
        <div className="z-10 bg-white border-4 border-black p-4 transform -rotate-2 shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
          <h1 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-anton text-4xl text-black uppercase text-center">
            {data.l159_t1 || 'POP! ART'}
          </h1>
        </div>
      </div>
    )
  },
  {
    id: 160,
    name: 'Cyberpunk Aesthetic',
    tags: ['1anh', 'dohoa', 'gaming'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-black p-8 flex flex-col relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 pointer-events-none z-0" />
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent animate-pulse" />
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent animate-pulse" />
        <div className="w-full flex-1 img-slot border border-cyan-500/50 shadow-[0_0_30px_rgba(6,182,212,0.3)] z-10 relative mb-8" style={{ backgroundImage: `url(${data.l160_i1})` }} onClick={() => onImageClick('l160_i1')}>
          <div className="absolute inset-0 bg-gradient-to-t from-pink-500/20 via-transparent to-cyan-500/20 pointer-events-none" />
        </div>
        <div className="z-10">
          <h1 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-anton text-5xl text-white uppercase tracking-widest mb-2 italic" style={{ textShadow: '3px 3px #ec4899, -3px -3px #06b6d4' }}>
            {data.l160_t1 || 'CYBER 2077'}
          </h1>
          <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam text-[10px] text-cyan-400 font-bold uppercase tracking-[0.6em]">
            {data.l160_t2 || 'THE FUTURE IS NOW'}
          </p>
        </div>
      </div>
    )
  },
  {
    id: 11,
    name: 'Hướng Dương 1',
    tags: ['1anh', 'hoahuongduong', 'tuyenduong'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-yellow-50 p-4 relative">
        <div 
          className="img-slot absolute inset-0 opacity-30" 
          style={{ backgroundImage: `url(${data.l11_bg})` }}
          onClick={() => onImageClick('l11_bg')}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-yellow-100/50 via-white/80 to-white pointer-events-none" />
        <div className="relative z-10 flex flex-col items-center h-full pt-4">
          <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam font-black text-2xl text-yellow-600 uppercase tracking-widest text-center">
            {data.l11_t1 || 'HỌC SINH TIÊU BIỂU'}
          </h2>
          <h3 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-dancing text-4xl text-green-700 font-bold mt-1">
            {data.l11_t2 || 'Tuần 1 - Tháng 11'}
          </h3>
          <div className="w-48 h-48 rounded-full border-8 border-white shadow-xl overflow-hidden my-4 relative">
            <div 
              className="img-slot w-full h-full" 
              style={{ backgroundImage: `url(${data.l11_i1})` }}
              onClick={() => onImageClick('l11_i1')}
            />
          </div>
          <h1 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam font-black text-3xl text-gray-800 uppercase text-center">
            {data.l11_t3 || 'NGUYỄN VĂN A'}
          </h1>
          <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-montserrat font-bold text-sm bg-yellow-400 text-black px-4 py-1 rounded-full mt-2 text-center">
            {data.l11_t4 || 'Lớp 12A1 - THPT Chuyên'}
          </p>
          <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-montserrat font-medium text-[13px] text-gray-700 text-center mt-4 px-6 italic leading-relaxed">
            {data.l11_t5 || '"Đã có thành tích xuất sắc trong học tập và tích cực tham gia phong trào."'}
          </p>
        </div>
      </div>
    )
  },
  {
    id: 35,
    name: 'Nhà Vô Địch',
    tags: ['1anh', 'thethao'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-blue-900 relative">
        <div 
          className="img-slot w-full h-[75%] clip-diagonal filter contrast-125" 
          style={{ backgroundImage: `url(${data.l35_i1})` }}
          onClick={() => onImageClick('l35_i1')}
        />
        <div className="absolute bottom-6 w-full px-6 flex justify-between items-end">
          <div className="w-2/3">
            <h1 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-anton text-5xl text-white leading-none uppercase">
              {data.l35_t1 || 'CHAMPION'}
            </h1>
            <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam text-blue-200 text-sm mt-1">
              {data.l35_t2 || 'DESC'}
            </p>
          </div>
          <div contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-anton text-6xl text-yellow-400 opacity-50">
            {data.l35_t3 || '#1'}
          </div>
        </div>
      </div>
    )
  },
  {
    id: 161,
    name: 'Bé Ngoan Gấu Bông',
    tags: ['1anh', 'tieuhoc'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-pink-100 p-4 border-[10px] border-white border-dashed relative flex flex-col items-center justify-center">
        <div className="absolute top-4 left-4 text-5xl pointer-events-none drop-shadow-md transform -rotate-12 z-20">🧸</div>
        <div className="absolute top-8 right-6 text-3xl pointer-events-none drop-shadow-md transform rotate-12 z-20 text-yellow-400">⭐</div>
        <div className="absolute bottom-6 left-6 text-4xl pointer-events-none drop-shadow-md z-20">🌸</div>
        <h1 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-sriracha text-4xl text-pink-600 mb-2 z-10 drop-shadow-sm text-center">
          {data.l121_t1 || 'Bé Ngoan Của Tuần'}
        </h1>
        <div className="w-48 h-48 img-slot rounded-full border-8 border-white shadow-xl z-10 mb-4">
          <div 
            className="w-full h-full rounded-full"
            style={{ backgroundImage: `url(${data.l121_i1})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            onClick={() => onImageClick('l121_i1')}
          />
        </div>
        <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam font-black text-2xl text-gray-800 uppercase text-center z-10 bg-white px-6 py-2 rounded-full shadow-sm border-2 border-pink-200">
          {data.l121_t2 || 'BÉ BẢO AN'}
        </h2>
        <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-montserrat font-bold text-sm text-pink-500 mt-3 text-center z-10">
          {data.l121_t3 || 'Lớp 1A - Chăm ngoan, học giỏi'}
        </p>
        <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam font-bold text-[10px] text-pink-400 mt-1 z-10 text-center uppercase tracking-widest">
          {data.l121_gvcn || 'GVCN: Vũ Tiến Lực'}
        </p>
      </div>
    )
  },
  {
    id: 162,
    name: 'Giấy Khen Bé Ngoan',
    tags: ['1anh', 'tieuhoc'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-yellow-50 p-6 border-[12px] border-yellow-400 relative flex flex-col items-center">
        <div className="absolute top-0 left-0 w-full h-full border-[2px] border-yellow-600 m-1 pointer-events-none" />
        <div className="absolute top-4 left-4 text-4xl">🎈</div>
        <div className="absolute top-4 right-4 text-4xl">🎈</div>
        <div className="text-center mb-4">
          <h3 className="font-bevietnam font-bold text-red-600 text-xs uppercase tracking-widest">Cộng Hòa Xã Hội Chủ Nghĩa Việt Nam</h3>
          <p className="font-bevietnam text-[8px] text-gray-700">Độc lập - Tự do - Hạnh phúc</p>
        </div>
        <h1 className="font-dancing text-5xl text-red-600 my-2 drop-shadow-sm">Giấy Khen</h1>
        <p className="font-bevietnam font-bold text-blue-800 text-lg uppercase tracking-wide mb-4">BÉ NGOAN XUẤT SẮC</p>
        <div className="w-32 h-32 img-slot rounded-full border-4 border-yellow-400 shadow-lg mb-4">
          <div 
            className="w-full h-full rounded-full"
            style={{ backgroundImage: `url(${data.l162_i1})` }}
            onClick={() => onImageClick('l162_i1')}
          />
        </div>
        <div className="text-center space-y-1">
          <p className="font-bevietnam text-gray-600 text-xs italic">Khen tặng bé:</p>
          <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-sriracha text-3xl text-red-500">
            {data.l162_t1 || 'NGUYỄN MINH ANH'}
          </h2>
          <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam text-gray-700 text-sm font-medium">
            {data.l162_t2 || 'Lớp Mầm Non Sao Mai'}
          </p>
          <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam text-gray-600 text-[11px] mt-2 px-4 leading-tight">
            {data.l162_t3 || 'Đã có thành tích xuất sắc trong học tập và rèn luyện đạo đức, xứng đáng là bé ngoan tiêu biểu của tuần.'}
          </p>
        </div>
        <div className="mt-auto w-full flex justify-between px-4 pb-2">
          <div className="text-center">
            <p className="font-bevietnam text-[8px] text-gray-500 italic">Ngày ... tháng ... năm ...</p>
            <p className="font-bevietnam font-bold text-[10px] text-gray-800 uppercase mt-1">Hiệu Trưởng</p>
          </div>
          <div className="text-center">
            <p className="font-bevietnam text-[8px] text-gray-500 italic">Xác nhận của</p>
            <p className="font-bevietnam font-bold text-[10px] text-gray-800 uppercase mt-1">Cô Chủ Nhiệm</p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 163,
    name: 'Học Sinh Xuất Sắc',
    tags: ['1anh', 'tieuhoc'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-white p-8 border-[15px] border-blue-600 relative overflow-hidden">
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-yellow-400 rotate-45 z-0" />
        <div className="absolute top-2 right-2 text-white font-anton text-2xl z-10">TOP</div>
        <div className="relative z-10 flex flex-col h-full">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-24 h-24 img-slot border-4 border-blue-600 shadow-xl flex-shrink-0">
              <div 
                className="w-full h-full"
                style={{ backgroundImage: `url(${data.l163_i1})` }}
                onClick={() => onImageClick('l163_i1')}
              />
            </div>
            <div>
              <h1 className="font-anton text-4xl text-blue-900 leading-none">EXCELLENT</h1>
              <p className="font-bevietnam font-black text-blue-600 tracking-tighter">STUDENT AWARD</p>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <p className="font-bevietnam text-[10px] text-gray-400 uppercase font-bold tracking-widest">Họ và tên học sinh</p>
              <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-oswald text-3xl text-gray-900 border-b-2 border-gray-100 pb-1">
                {data.l163_t1 || 'LÊ HOÀNG NAM'}
              </h2>
            </div>
            <div className="flex gap-8">
              <div>
                <p className="font-bevietnam text-[10px] text-gray-400 uppercase font-bold tracking-widest">Lớp</p>
                <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-oswald text-xl text-gray-800">
                  {data.l163_t2 || '4A2'}
                </p>
              </div>
              <div>
                <p className="font-bevietnam text-[10px] text-gray-400 uppercase font-bold tracking-widest">Niên khóa</p>
                <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-oswald text-xl text-gray-800">
                  {data.l163_t3 || '2025 - 2026'}
                </p>
              </div>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
              <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam text-sm text-blue-900 leading-relaxed italic">
                {data.l163_t4 || '"Đã có thành tích học tập xuất sắc toàn diện và tích cực tham gia các hoạt động ngoại khóa của trường."'}
              </p>
            </div>
          </div>
          <div className="mt-auto flex justify-between items-end">
            <div className="text-5xl opacity-20">🏆</div>
            <div className="text-right">
              <p className="font-bevietnam text-[10px] text-gray-400">TRƯỜNG TIỂU HỌC QUỐC TẾ</p>
              <p className="font-anton text-lg text-blue-900">STAR ACADEMY</p>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 164,
    name: 'Cháu Ngoan Bác Hồ',
    tags: ['1anh', 'tieuhoc'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-red-50 p-6 border-[8px] border-red-600 relative">
        <div className="absolute top-2 left-2 right-2 bottom-2 border border-red-300 pointer-events-none" />
        <div className="flex flex-col items-center h-full">
          <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mb-2 shadow-lg">
            <span className="text-white text-3xl">⭐</span>
          </div>
          <h3 className="font-bevietnam font-bold text-red-700 text-[10px] uppercase text-center leading-tight">Đội Thiếu Niên Tiền Phong Hồ Chí Minh</h3>
          <h1 className="font-anton text-4xl text-red-600 mt-2 mb-1 tracking-tight">CHÁU NGOAN BÁC HỒ</h1>
          <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-red-600 to-transparent mb-4" />
          
          <div className="w-40 h-40 img-slot border-4 border-white shadow-2xl rotate-2 mb-4">
            <div 
              className="w-full h-full"
              style={{ backgroundImage: `url(${data.l164_i1})` }}
              onClick={() => onImageClick('l164_i1')}
            />
          </div>

          <div className="text-center space-y-2">
            <p className="font-bevietnam text-gray-500 text-xs">Trao tặng cho đội viên:</p>
            <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam font-black text-2xl text-gray-900 uppercase">
              {data.l164_t1 || 'TRẦN THỊ THU HÀ'}
            </h2>
            <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam font-bold text-red-600">
              {data.l164_t2 || 'Chi đội: 5B - Liên đội: Kim Đồng'}
            </p>
            <div className="bg-white/80 p-3 rounded border border-red-100 shadow-sm">
              <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam text-[11px] text-gray-700 leading-snug">
                {data.l164_t3 || 'Đã có thành tích xuất sắc trong học tập và rèn luyện, thực hiện tốt 5 điều Bác Hồ dạy.'}
              </p>
            </div>
          </div>

          <div className="mt-auto w-full flex justify-end">
            <div className="text-center">
              <p className="font-bevietnam text-[9px] text-gray-500">Hà Nội, ngày 19 tháng 05 năm 2026</p>
              <p className="font-bevietnam font-bold text-xs text-red-700 mt-1 uppercase">TM. Hội Đồng Đội</p>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 165,
    name: 'Bé Ngoan Sắc Màu',
    tags: ['1anh', 'tieuhoc'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 p-6 flex flex-col items-center justify-center">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/cubes.png")' }} />
        <div className="text-6xl mb-4 animate-bounce">🌈</div>
        <div className="bg-white/90 backdrop-blur-sm p-6 rounded-3xl shadow-2xl border-4 border-white w-full text-center relative overflow-hidden">
          <div className="absolute -top-4 -right-4 text-4xl">✨</div>
          <div className="absolute -bottom-4 -left-4 text-4xl">🎨</div>
          <h1 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-pacifico text-4xl text-purple-600 mb-4">
            {data.l165_t1 || 'Siêu Nhân Nhí'}
          </h1>
          <div className="w-32 h-32 mx-auto img-slot rounded-2xl border-4 border-purple-200 shadow-lg mb-4 transform -rotate-3">
            <div 
              className="w-full h-full rounded-xl"
              style={{ backgroundImage: `url(${data.l165_i1})` }}
              onClick={() => onImageClick('l165_i1')}
            />
          </div>
          <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam font-black text-2xl text-gray-800 uppercase">
            {data.l165_t2 || 'PHẠM GIA BẢO'}
          </h2>
          <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-sriracha text-purple-500 mt-2">
            {data.l165_t3 || 'Bé ngoan, thông minh & sáng tạo'}
          </p>
          <div className="mt-4 flex justify-center gap-2">
            <span className="bg-pink-100 text-pink-600 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-tighter">Chăm chỉ</span>
            <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-tighter">Lễ phép</span>
            <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-tighter">Vui vẻ</span>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 166,
    name: 'Vinh Danh Học Tập',
    tags: ['1anh', 'tieuhoc'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-[#1a365d] p-8 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }} />
        <div className="absolute -right-20 -top-20 w-64 h-64 bg-yellow-500/20 rounded-full blur-3xl" />
        <div className="relative z-10 flex flex-col h-full border-2 border-yellow-500/30 p-6">
          <div className="flex justify-between items-start mb-8">
            <div className="text-yellow-500 text-5xl">🎓</div>
            <div className="text-right">
              <h1 className="font-anton text-3xl text-white tracking-widest">CERTIFICATE</h1>
              <p className="font-bevietnam text-yellow-500 text-xs font-bold uppercase">OF ACHIEVEMENT</p>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center text-center">
            <div className="w-28 h-28 img-slot rounded-full border-4 border-yellow-500 shadow-[0_0_20px_rgba(234,179,8,0.3)] mb-6">
              <div 
                className="w-full h-full rounded-full"
                style={{ backgroundImage: `url(${data.l166_i1})` }}
                onClick={() => onImageClick('l166_i1')}
              />
            </div>
            <p className="font-bevietnam text-gray-400 text-xs uppercase tracking-[0.3em] mb-2">This is to certify that</p>
            <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-playfair text-4xl text-white italic mb-4">
              {data.l166_t1 || 'Nguyen Hoang Phuc'}
            </h2>
            <div className="w-16 h-[1px] bg-yellow-500 mb-4" />
            <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam text-gray-300 text-sm leading-relaxed max-w-[250px]">
              {data.l166_t2 || 'Has successfully completed the primary education program with outstanding performance.'}
            </p>
          </div>
          <div className="mt-8 flex justify-between items-end">
            <div className="text-left">
              <div className="w-24 h-[1px] bg-gray-600 mb-2" />
              <p className="font-bevietnam text-[8px] text-gray-500 uppercase tracking-widest">Principal Signature</p>
            </div>
            <div className="bg-yellow-500 text-blue-900 font-anton px-4 py-1 text-sm rounded">
              2026
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 167,
    name: 'Bé Ngoan Hoa Hồng',
    tags: ['1anh', 'tieuhoc'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-pink-50 p-6 border-[10px] border-pink-200 relative">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/flowers.png")' }} />
        <div className="relative z-10 flex flex-col items-center text-center h-full">
          <div className="text-5xl mb-2">🌹</div>
          <h1 className="font-dancing text-4xl text-pink-600 mb-1">Phiếu Bé Ngoan</h1>
          <p className="font-bevietnam text-pink-400 text-[10px] uppercase font-bold tracking-widest mb-4">Trường Mầm Non Hoa Hồng</p>
          
          <div className="w-44 h-44 img-slot rounded-full border-8 border-white shadow-lg overflow-hidden mb-4">
            <div 
              className="w-full h-full"
              style={{ backgroundImage: `url(${data.l167_i1})` }}
              onClick={() => onImageClick('l167_i1')}
            />
          </div>

          <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-sriracha text-3xl text-gray-800">
            {data.l167_t1 || 'Bé: Mai Chi'}
          </h2>
          <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam text-pink-500 font-bold mt-1">
            {data.l167_t2 || 'Lớp: Chồi 1'}
          </p>
          
          <div className="mt-4 bg-white p-4 rounded-2xl shadow-inner border border-pink-100 w-full">
            <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam text-xs text-gray-600 italic leading-relaxed">
              {data.l167_t3 || '"Bé luôn đi học đúng giờ, biết vâng lời cô giáo và hòa đồng với bạn bè. Xứng đáng nhận phiếu bé ngoan."'}
            </p>
          </div>

          <div className="mt-auto flex gap-4">
            <span className="text-2xl">⭐</span>
            <span className="text-2xl">⭐</span>
            <span className="text-2xl">⭐</span>
            <span className="text-2xl">⭐</span>
            <span className="text-2xl">⭐</span>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 168,
    name: 'Vở Sạch Chữ Đẹp',
    tags: ['1anh', 'tieuhoc'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-emerald-50 p-8 border-[12px] border-emerald-600 relative">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-5" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/graphy.png")' }} />
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center mb-6">
            <div className="text-emerald-600 text-4xl">✒️</div>
            <div className="text-right">
              <h1 className="font-bevietnam font-black text-xl text-emerald-900 uppercase leading-none">Vở Sạch</h1>
              <h1 className="font-bevietnam font-black text-xl text-emerald-600 uppercase leading-none">Chữ Đẹp</h1>
            </div>
          </div>
          
          <div className="flex-1 flex flex-col items-center justify-center">
            <div className="w-full h-40 img-slot rounded-lg border-2 border-emerald-200 shadow-md mb-6">
              <div 
                className="w-full h-full rounded-lg"
                style={{ backgroundImage: `url(${data.l168_i1})` }}
                onClick={() => onImageClick('l168_i1')}
              />
            </div>
            
            <div className="w-full space-y-4">
              <div className="border-b border-emerald-200 pb-1">
                <p className="font-bevietnam text-[9px] text-emerald-600 uppercase font-bold">Học sinh tiêu biểu</p>
                <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-sriracha text-2xl text-gray-800">
                  {data.l168_t1 || 'Đặng Minh Khôi'}
                </h2>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="border-b border-emerald-200 pb-1">
                  <p className="font-bevietnam text-[9px] text-emerald-600 uppercase font-bold">Lớp</p>
                  <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam font-bold text-gray-700">
                    {data.l168_t2 || '3A1'}
                  </p>
                </div>
                <div className="border-b border-emerald-200 pb-1">
                  <p className="font-bevietnam text-[9px] text-emerald-600 uppercase font-bold">Xếp loại</p>
                  <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam font-bold text-emerald-600">
                    {data.l168_t3 || 'GIẢI NHẤT'}
                  </p>
                </div>
              </div>
              <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam text-[11px] text-gray-600 leading-relaxed">
                {data.l168_t4 || 'Khen tặng học sinh có nét chữ đẹp, trình bày vở sạch sẽ và khoa học nhất khối.'}
              </p>
            </div>
          </div>
          
          <div className="mt-8 flex justify-end">
            <div className="bg-emerald-600 text-white px-4 py-2 rounded-tl-2xl rounded-br-2xl shadow-lg">
              <p className="font-anton text-sm tracking-widest">EXCELLENT</p>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 169,
    name: 'Bé Khỏe Bé Ngoan',
    tags: ['1anh', 'tieuhoc'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-orange-50 p-6 border-[10px] border-orange-400 rounded-[40px] relative overflow-hidden">
        <div className="absolute -top-10 -left-10 w-32 h-32 bg-orange-200 rounded-full opacity-50" />
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-orange-200 rounded-full opacity-50" />
        <div className="relative z-10 flex flex-col items-center h-full">
          <div className="text-5xl mb-2">🍎</div>
          <h1 className="font-anton text-4xl text-orange-600 tracking-tight">BÉ KHỎE BÉ NGOAN</h1>
          <div className="w-24 h-1 bg-orange-400 rounded-full mb-6" />
          
          <div className="w-48 h-48 img-slot rounded-3xl border-4 border-white shadow-xl rotate-3 mb-6">
            <div 
              className="w-full h-full rounded-2xl"
              style={{ backgroundImage: `url(${data.l169_i1})` }}
              onClick={() => onImageClick('l169_i1')}
            />
          </div>

          <div className="text-center space-y-2 w-full">
            <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-pacifico text-3xl text-gray-800">
              {data.l169_t1 || 'Bé: Tuấn Kiệt'}
            </h2>
            <div className="bg-white/60 backdrop-blur-sm p-4 rounded-2xl border border-orange-100">
              <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam text-xs text-orange-900 font-medium leading-relaxed">
                {data.l169_t2 || 'Bé có chỉ số phát triển tốt, tích cực vận động và có thói quen ăn uống lành mạnh.'}
              </p>
            </div>
          </div>

          <div className="mt-auto flex justify-center gap-4 text-orange-400 opacity-50">
            <span className="text-3xl">⚽</span>
            <span className="text-3xl">🥦</span>
            <span className="text-3xl">🥛</span>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 170,
    name: 'Ngôi Sao Nhí',
    tags: ['1anh', 'tieuhoc'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-indigo-900 p-8 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #fff 1px, transparent 0)', backgroundSize: '32px 32px' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="relative z-10 flex flex-col items-center h-full text-center">
          <div className="text-6xl mb-4 drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">⭐</div>
          <h1 className="font-anton text-5xl text-white tracking-tighter mb-1">LITTLE STAR</h1>
          <p className="font-bevietnam text-indigo-300 text-xs font-bold uppercase tracking-[0.5em] mb-8">Award of Excellence</p>
          
          <div className="relative mb-8">
            <div className="absolute inset-0 bg-white blur-xl opacity-20 rounded-full" />
            <div className="w-40 h-40 img-slot rounded-full border-4 border-white shadow-2xl relative z-10">
              <div 
                className="w-full h-full rounded-full"
                style={{ backgroundImage: `url(${data.l170_i1})` }}
                onClick={() => onImageClick('l170_i1')}
              />
            </div>
          </div>

          <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam font-black text-3xl text-white uppercase tracking-tight">
            {data.l170_t1 || 'HOÀNG THÙY LINH'}
          </h2>
          <div className="h-[2px] w-12 bg-indigo-400 my-4" />
          <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam text-indigo-200 text-sm italic max-w-[280px]">
            {data.l170_t2 || '"Tỏa sáng rực rỡ với những thành tích xuất sắc trong học tập và năng khiếu nghệ thuật."'}
          </p>
          
          <div className="mt-auto text-indigo-400 font-anton text-xl opacity-50">
            CLASS OF 2026
          </div>
        </div>
      </div>
    )
  },
  {
    id: 171,
    name: 'Bé Ngoan Của Tuần',
    tags: ['1anh', 'tieuhoc'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-sky-50 p-6 border-[10px] border-sky-400 relative">
        <div className="absolute top-4 left-4 text-4xl transform -rotate-12">☁️</div>
        <div className="absolute top-8 right-6 text-4xl transform rotate-12">☀️</div>
        <div className="absolute bottom-4 left-8 text-4xl">🌱</div>
        
        <div className="flex flex-col items-center h-full">
          <div className="bg-sky-400 text-white px-6 py-2 rounded-full shadow-lg mb-6">
            <h1 className="font-bevietnam font-black text-lg uppercase tracking-widest">Bé Ngoan Của Tuần</h1>
          </div>
          
          <div className="w-48 h-48 img-slot rounded-full border-8 border-white shadow-xl mb-6 relative">
            <div className="absolute -top-2 -right-2 bg-yellow-400 text-white w-12 h-12 rounded-full flex items-center justify-center text-2xl shadow-lg z-20">⭐</div>
            <div 
              className="w-full h-full rounded-full"
              style={{ backgroundImage: `url(${data.l171_i1})` }}
              onClick={() => onImageClick('l171_i1')}
            />
          </div>

          <div className="text-center space-y-2">
            <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-sriracha text-3xl text-gray-800">
              {data.l171_t1 || 'Bé: Minh Khang'}
            </h2>
            <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam font-bold text-sky-600 uppercase text-sm">
              {data.l171_t2 || 'Lớp: Mầm 2 - Trường Tuổi Thơ'}
            </p>
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-sky-100 max-w-[300px]">
              <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam text-xs text-gray-600 leading-relaxed">
                {data.l171_t3 || 'Khen ngợi bé đã có nhiều tiến bộ, biết giúp đỡ bạn bè và luôn hoàn thành tốt các bài tập trên lớp.'}
              </p>
            </div>
          </div>

          <div className="mt-auto w-full flex justify-between items-center px-4">
            <div className="text-sky-300 text-2xl">🦋</div>
            <div className="text-center">
              <p className="font-bevietnam text-[8px] text-gray-400 italic">Tuần 4 - Tháng 04/2026</p>
              <p className="font-bevietnam font-bold text-[10px] text-sky-600 uppercase">Cô giáo: Thu Thủy</p>
            </div>
            <div className="text-sky-300 text-2xl">🐞</div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 172,
    name: 'Giấy Khen Sáng Tạo',
    tags: ['1anh', 'tieuhoc'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-white p-8 border-[15px] border-purple-500 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-purple-100 rounded-bl-full opacity-50" />
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-start mb-8">
            <div className="text-purple-600 text-5xl">🎨</div>
            <div className="text-right">
              <h1 className="font-anton text-3xl text-purple-900 leading-none">CREATIVE</h1>
              <p className="font-bevietnam text-purple-500 text-xs font-bold uppercase">MIND AWARD</p>
            </div>
          </div>
          
          <div className="flex-1 flex flex-col items-center justify-center">
            <div className="w-full h-44 img-slot rounded-xl border-4 border-purple-100 shadow-xl mb-6 overflow-hidden">
              <div 
                className="w-full h-full"
                style={{ backgroundImage: `url(${data.l172_i1})` }}
                onClick={() => onImageClick('l172_i1')}
              />
            </div>
            
            <div className="w-full space-y-4 text-center">
              <div>
                <p className="font-bevietnam text-[10px] text-gray-400 uppercase tracking-widest">Khen tặng học sinh</p>
                <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-oswald text-3xl text-purple-900 uppercase">
                  {data.l172_t1 || 'VŨ THỊ HỒNG NHUNG'}
                </h2>
              </div>
              <div className="h-[2px] w-12 bg-purple-500 mx-auto" />
              <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam text-sm text-gray-600 leading-relaxed italic">
                {data.l172_t2 || '"Vì những ý tưởng độc đáo và tài năng hội họa xuất sắc trong cuộc thi vẽ tranh cấp trường."'}
              </p>
            </div>
          </div>
          
          <div className="mt-8 flex justify-between items-center">
            <div className="text-purple-200 text-4xl">✨</div>
            <div className="text-right">
              <p className="font-bevietnam text-[10px] text-gray-400">NIÊN KHÓA 2025-2026</p>
              <p className="font-anton text-lg text-purple-900 uppercase tracking-tighter">Art Studio</p>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 173,
    name: 'Bé Ngoan Chăm Chỉ',
    tags: ['1anh', 'tieuhoc'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-yellow-50 p-6 border-[10px] border-yellow-500 relative flex flex-col items-center">
        <div className="absolute top-2 left-2 right-2 bottom-2 border-2 border-yellow-200 border-dashed pointer-events-none" />
        <div className="text-5xl mb-2">🐝</div>
        <h1 className="font-anton text-4xl text-yellow-700 mb-1">BÉ NGOAN CHĂM CHỈ</h1>
        <p className="font-bevietnam text-yellow-600 text-[10px] uppercase font-bold tracking-[0.3em] mb-6">Hardworking Bee Award</p>
        
        <div className="w-40 h-40 img-slot rounded-2xl border-4 border-white shadow-2xl rotate-2 mb-6">
          <div 
            className="w-full h-full rounded-xl"
            style={{ backgroundImage: `url(${data.l173_i1})` }}
            onClick={() => onImageClick('l173_i1')}
          />
        </div>

        <div className="text-center space-y-2 w-full px-4">
          <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-sriracha text-3xl text-gray-800">
            {data.l173_t1 || 'Bé: Bảo Nam'}
          </h2>
          <div className="bg-white p-4 rounded-xl shadow-sm border border-yellow-100">
            <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam text-xs text-gray-600 leading-relaxed italic">
              {data.l173_t2 || '"Khen ngợi bé luôn nỗ lực trong mọi hoạt động, tự giác hoàn thành công việc và luôn sẵn lòng giúp đỡ mọi người."'}
            </p>
          </div>
        </div>

        <div className="mt-auto flex gap-2">
          <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-white text-sm shadow-md">⭐</div>
          <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-white text-sm shadow-md">⭐</div>
          <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-white text-sm shadow-md">⭐</div>
        </div>
      </div>
    )
  },
  {
    id: 174,
    name: 'Giấy Khen Thể Thao',
    tags: ['1anh', 'tieuhoc'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-orange-600 p-8 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/carbon-fibre.png")' }} />
        <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-white/10 rounded-full blur-3xl" />
        
        <div className="relative z-10 flex flex-col h-full border-4 border-white p-6">
          <div className="flex justify-between items-start mb-6">
            <div className="text-white text-5xl">🏅</div>
            <div className="text-right">
              <h1 className="font-anton text-4xl text-white leading-none">SPORTS</h1>
              <p className="font-bevietnam text-orange-200 text-xs font-bold uppercase">CHAMPION</p>
            </div>
          </div>
          
          <div className="flex-1 flex flex-col items-center justify-center text-center">
            <div className="w-32 h-32 img-slot border-4 border-white shadow-2xl mb-6 transform -rotate-3">
              <div 
                className="w-full h-full"
                style={{ backgroundImage: `url(${data.l174_i1})` }}
                onClick={() => onImageClick('l174_i1')}
              />
            </div>
            
            <p className="font-bevietnam text-orange-100 text-[10px] uppercase tracking-widest mb-2">Awarded to</p>
            <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-anton text-3xl text-white uppercase tracking-tight mb-4">
              {data.l174_t1 || 'TRẦN QUỐC ANH'}
            </h2>
            <div className="bg-white/20 backdrop-blur-sm p-3 rounded w-full">
              <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam text-white text-xs font-medium uppercase">
                {data.l174_t2 || 'GIẢI NHẤT CHẠY CỰ LY 50M'}
              </p>
            </div>
          </div>
          
          <div className="mt-8 flex justify-between items-end">
            <div className="text-left">
              <p className="font-bevietnam text-[8px] text-orange-200 uppercase">Hội khỏe phù đổng</p>
              <p className="font-anton text-lg text-white">2026</p>
            </div>
            <div className="text-5xl opacity-30">🏃</div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 175,
    name: 'Bé Ngoan Lễ Phép',
    tags: ['1anh', 'tieuhoc'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-green-50 p-6 border-[10px] border-green-400 relative flex flex-col items-center">
        <div className="absolute top-4 left-4 text-4xl">🎋</div>
        <div className="absolute top-4 right-4 text-4xl">🎋</div>
        <div className="bg-white px-8 py-2 rounded-full shadow-md border-2 border-green-200 mb-6">
          <h1 className="font-bevietnam font-black text-green-700 text-lg uppercase tracking-widest">Bé Ngoan Lễ Phép</h1>
        </div>
        
        <div className="w-44 h-44 img-slot rounded-full border-8 border-white shadow-xl mb-6">
          <div 
            className="w-full h-full rounded-full"
            style={{ backgroundImage: `url(${data.l175_i1})` }}
            onClick={() => onImageClick('l175_i1')}
          />
        </div>

        <div className="text-center space-y-3 w-full px-4">
          <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-sriracha text-3xl text-gray-800">
            {data.l175_t1 || 'Bé: Thùy Dương'}
          </h2>
          <div className="bg-green-100/50 p-4 rounded-2xl border border-green-200">
            <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam text-xs text-green-900 font-medium leading-relaxed italic">
              {data.l175_t2 || '"Khen ngợi bé luôn biết chào hỏi lễ phép, vâng lời người lớn và có thái độ cư xử đúng mực với mọi người xung quanh."'}
            </p>
          </div>
        </div>

        <div className="mt-auto flex items-center gap-2 text-green-600 font-bold text-sm">
          <span>🙏</span>
          <span className="uppercase tracking-widest">Tiên học lễ - Hậu học văn</span>
          <span>🙏</span>
        </div>
      </div>
    )
  },
  {
    id: 176,
    name: 'Giấy Khen Âm Nhạc',
    tags: ['1anh', 'tieuhoc'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-rose-50 p-8 border-[12px] border-rose-500 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/music.png")' }} />
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center mb-8">
            <div className="text-rose-600 text-5xl">🎵</div>
            <div className="text-right">
              <h1 className="font-anton text-3xl text-rose-900 leading-none">MUSICAL</h1>
              <p className="font-bevietnam text-rose-500 text-xs font-bold uppercase">TALENT AWARD</p>
            </div>
          </div>
          
          <div className="flex-1 flex flex-col items-center justify-center text-center">
            <div className="w-40 h-40 img-slot rounded-full border-4 border-rose-200 shadow-2xl mb-6 relative">
              <div className="absolute -bottom-2 -right-2 bg-rose-500 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl shadow-lg z-20">🎹</div>
              <div 
                className="w-full h-full rounded-full"
                style={{ backgroundImage: `url(${data.l176_i1})` }}
                onClick={() => onImageClick('l176_i1')}
              />
            </div>
            
            <div className="w-full space-y-4">
              <div>
                <p className="font-bevietnam text-[10px] text-gray-400 uppercase tracking-widest">Khen tặng tài năng nhí</p>
                <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-dancing text-4xl text-rose-900">
                  {data.l176_t1 || 'Nguyễn Phương Linh'}
                </h2>
              </div>
              <div className="h-[1px] w-24 bg-rose-200 mx-auto" />
              <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam text-sm text-gray-600 leading-relaxed italic px-4">
                {data.l176_t2 || '"Vì giọng hát truyền cảm và phong cách biểu diễn tự tin trong đêm hội văn nghệ chào xuân 2026."'}
              </p>
            </div>
          </div>
          
          <div className="mt-8 flex justify-between items-end">
            <div className="text-rose-300 text-4xl">✨</div>
            <div className="text-right">
              <p className="font-bevietnam text-[10px] text-gray-400 uppercase">Câu lạc bộ âm nhạc</p>
              <p className="font-anton text-lg text-rose-900">MELODY KIDS</p>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 177,
    name: 'Bé Ngoan Tự Tin',
    tags: ['1anh', 'tieuhoc'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-cyan-50 p-6 border-[10px] border-cyan-400 relative flex flex-col items-center">
        <div className="absolute top-4 left-4 text-4xl">🦁</div>
        <div className="absolute top-4 right-4 text-4xl">🦁</div>
        <div className="bg-cyan-400 text-white px-8 py-2 rounded-full shadow-lg mb-6">
          <h1 className="font-bevietnam font-black text-lg uppercase tracking-widest">Bé Ngoan Tự Tin</h1>
        </div>
        
        <div className="w-44 h-44 img-slot rounded-3xl border-4 border-white shadow-xl mb-6 transform rotate-2 overflow-hidden">
          <div 
            className="w-full h-full"
            style={{ backgroundImage: `url(${data.l177_i1})` }}
            onClick={() => onImageClick('l177_i1')}
          />
        </div>

        <div className="text-center space-y-3 w-full px-4">
          <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-anton text-3xl text-cyan-900 uppercase tracking-tight">
            {data.l177_t1 || 'LÂM GIA HƯNG'}
          </h2>
          <div className="bg-white p-4 rounded-2xl shadow-sm border border-cyan-100">
            <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam text-xs text-gray-600 leading-relaxed italic">
              {data.l177_t2 || '"Khen ngợi bé luôn mạnh dạn phát biểu ý kiến, tự tin thể hiện bản thân và tích cực tham gia các hoạt động tập thể."'}
            </p>
          </div>
        </div>

        <div className="mt-auto flex items-center gap-2 text-cyan-500 font-anton text-xl opacity-50">
          BE BRAVE • BE YOU
        </div>
      </div>
    )
  },
  {
    id: 178,
    name: 'Giấy Khen Tiếng Anh',
    tags: ['1anh', 'tieuhoc'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-white p-8 border-[15px] border-indigo-600 relative overflow-hidden">
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-indigo-100 rounded-full opacity-50" />
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-start mb-8">
            <div className="text-indigo-600 text-5xl">🌍</div>
            <div className="text-right">
              <h1 className="font-anton text-3xl text-indigo-900 leading-none">ENGLISH</h1>
              <p className="font-bevietnam text-indigo-500 text-xs font-bold uppercase">STAR AWARD</p>
            </div>
          </div>
          
          <div className="flex-1 flex flex-col items-center justify-center text-center">
            <div className="w-32 h-32 img-slot border-4 border-indigo-600 shadow-2xl mb-6 relative">
              <div className="absolute -top-2 -right-2 bg-indigo-600 text-white px-2 py-1 text-[10px] font-bold rounded z-20">A+</div>
              <div 
                className="w-full h-full"
                style={{ backgroundImage: `url(${data.l178_i1})` }}
                onClick={() => onImageClick('l178_i1')}
              />
            </div>
            
            <p className="font-bevietnam text-gray-400 text-[10px] uppercase tracking-widest mb-2">Presented to</p>
            <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-oswald text-3xl text-indigo-900 uppercase mb-4">
              {data.l178_t1 || 'PHAN MINH ĐỨC'}
            </h2>
            <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-600 w-full">
              <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam text-xs text-indigo-900 font-medium leading-relaxed">
                {data.l178_t2 || '"For outstanding performance in English communication and excellent results in the final examination."'}
              </p>
            </div>
          </div>
          
          <div className="mt-8 flex justify-between items-end">
            <div className="text-indigo-200 text-4xl">🔤</div>
            <div className="text-right">
              <p className="font-bevietnam text-[10px] text-gray-400">GLOBAL KIDS CENTER</p>
              <p className="font-anton text-lg text-indigo-900">BRIGHT FUTURE</p>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 179,
    name: 'Bé Ngoan Đoàn Kết',
    tags: ['1anh', 'tieuhoc'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-teal-50 p-6 border-[10px] border-teal-400 relative flex flex-col items-center">
        <div className="absolute top-4 left-4 text-4xl">🤝</div>
        <div className="absolute top-4 right-4 text-4xl">🤝</div>
        <div className="bg-white px-8 py-2 rounded-full shadow-md border-2 border-teal-200 mb-6">
          <h1 className="font-bevietnam font-black text-teal-700 text-lg uppercase tracking-widest">Bé Ngoan Đoàn Kết</h1>
        </div>
        
        <div className="w-44 h-44 img-slot rounded-full border-8 border-white shadow-xl mb-6">
          <div 
            className="w-full h-full rounded-full"
            style={{ backgroundImage: `url(${data.l179_i1})` }}
            onClick={() => onImageClick('l179_i1')}
          />
        </div>

        <div className="text-center space-y-3 w-full px-4">
          <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-sriracha text-3xl text-gray-800">
            {data.l179_t1 || 'Bé: Ngọc Diệp'}
          </h2>
          <div className="bg-teal-100/50 p-4 rounded-2xl border border-teal-200">
            <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam text-xs text-teal-900 font-medium leading-relaxed italic">
              {data.l179_t2 || '"Khen ngợi bé luôn biết chia sẻ đồ chơi, giúp đỡ bạn bè và tích cực tham gia các hoạt động nhóm cùng cả lớp."'}
            </p>
          </div>
        </div>

        <div className="mt-auto flex items-center gap-2 text-teal-500 font-bold text-sm">
          <span className="uppercase tracking-widest">Cùng nhau học tập - Cùng nhau vui chơi</span>
        </div>
      </div>
    )
  },
  {
    id: 180,
    name: 'Giấy Khen Toán Học',
    tags: ['1anh', 'tieuhoc'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-slate-50 p-8 border-[12px] border-slate-800 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/math.png")' }} />
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-start mb-8">
            <div className="text-slate-800 text-5xl">🔢</div>
            <div className="text-right">
              <h1 className="font-anton text-3xl text-slate-900 leading-none">MATH</h1>
              <p className="font-bevietnam text-slate-500 text-xs font-bold uppercase">GENIUS AWARD</p>
            </div>
          </div>
          
          <div className="flex-1 flex flex-col items-center justify-center text-center">
            <div className="w-32 h-32 img-slot border-4 border-slate-800 shadow-2xl mb-6 relative">
              <div className="absolute -bottom-2 -right-2 bg-slate-800 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl shadow-lg z-20">∑</div>
              <div 
                className="w-full h-full"
                style={{ backgroundImage: `url(${data.l180_i1})` }}
                onClick={() => onImageClick('l180_i1')}
              />
            </div>
            
            <div className="w-full space-y-4">
              <div>
                <p className="font-bevietnam text-[10px] text-gray-400 uppercase tracking-widest">Khen tặng nhà toán học nhí</p>
                <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-oswald text-3xl text-slate-900 uppercase">
                  {data.l180_t1 || 'BÙI GIA HUY'}
                </h2>
              </div>
              <div className="h-[2px] w-12 bg-slate-800 mx-auto" />
              <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam text-sm text-gray-600 leading-relaxed italic px-4">
                {data.l180_t2 || '"Vì tư duy logic xuất sắc và giải quyết nhanh các bài toán khó trong kỳ thi học sinh giỏi cấp trường."'}
              </p>
            </div>
          </div>
          
          <div className="mt-8 flex justify-between items-end">
            <div className="text-slate-200 text-4xl">📐</div>
            <div className="text-right">
              <p className="font-bevietnam text-[10px] text-gray-400 uppercase">Niên khóa 2025-2026</p>
              <p className="font-anton text-lg text-slate-900">MATH LAB</p>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 181,
    name: 'Bé Ngoan Thông Minh',
    tags: ['1anh', 'tieuhoc'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-amber-50 p-6 border-[10px] border-amber-400 relative flex flex-col items-center">
        <div className="absolute top-4 left-4 text-4xl">💡</div>
        <div className="absolute top-4 right-4 text-4xl">💡</div>
        <div className="bg-amber-400 text-white px-8 py-2 rounded-full shadow-lg mb-6">
          <h1 className="font-bevietnam font-black text-lg uppercase tracking-widest">Bé Ngoan Thông Minh</h1>
        </div>
        
        <div className="w-44 h-44 img-slot rounded-full border-8 border-white shadow-xl mb-6 relative">
          <div className="absolute -top-2 -right-2 bg-white text-amber-500 w-12 h-12 rounded-full flex items-center justify-center text-2xl shadow-lg z-20 border-2 border-amber-200">🧠</div>
          <div 
            className="w-full h-full rounded-full"
            style={{ backgroundImage: `url(${data.l181_i1})` }}
            onClick={() => onImageClick('l181_i1')}
          />
        </div>

        <div className="text-center space-y-3 w-full px-4">
          <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-sriracha text-3xl text-gray-800">
            {data.l181_t1 || 'Bé: Anh Quân'}
          </h2>
          <div className="bg-white p-4 rounded-2xl shadow-sm border border-amber-100">
            <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam text-xs text-gray-600 leading-relaxed italic">
              {data.l181_t2 || '"Khen ngợi bé có tư duy nhanh nhẹn, ham học hỏi và luôn có những câu hỏi thú vị khám phá thế giới xung quanh."'}
            </p>
          </div>
        </div>

        <div className="mt-auto flex items-center gap-2 text-amber-500 font-anton text-xl opacity-50">
          SMART KIDS • BRIGHT FUTURE
        </div>
      </div>
    )
  },
  {
    id: 182,
    name: 'Tuyên dương Hiện đại',
    tags: ['1anh', 'tuyenduong'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-white flex flex-col items-center p-8" style={{ color: data.globalTextColor }}>
        <div className="w-full h-1/2 rounded-3xl overflow-hidden shadow-2xl mb-8 relative group">
          <div 
            className="w-full h-full img-slot"
            style={{ backgroundImage: `url(${data.l182_i1})` }}
            onClick={() => onImageClick('l182_i1')}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-600/50 to-transparent" />
        </div>
        <div className="text-center space-y-4">
          <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-anton text-5xl uppercase tracking-tighter text-blue-600" style={{ color: data.globalTextColor || '#2563eb' }}>
            {data.l182_t1 || 'TUYÊN DƯƠNG'}
          </h2>
          <div className="h-1 w-24 bg-blue-600 mx-auto rounded-full" style={{ backgroundColor: data.globalTextColor || '#2563eb' }} />
          <h3 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam text-2xl font-bold text-gray-800" style={{ color: data.globalTextColor }}>
            {data.l182_t2 || 'HỌC SINH TIÊU BIỂU'}
          </h3>
          <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam text-gray-600 max-w-md mx-auto leading-relaxed" style={{ color: data.globalTextColor }}>
            {data.l182_t3 || 'Chúc mừng em đã có những thành tích xuất sắc trong học tập và rèn luyện đạo đức.'}
          </p>
        </div>
      </div>
    )
  },
  {
    id: 183,
    name: 'Song Hành Xuất Sắc',
    tags: ['2anh', 'tuyenduong'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-slate-50 p-6 flex flex-col" style={{ color: data.globalTextColor }}>
        <div className="flex gap-4 h-3/5 mb-6">
          <div className="flex-1 rounded-2xl overflow-hidden shadow-lg border-4 border-white relative">
            <div 
              className="w-full h-full img-slot"
              style={{ backgroundImage: `url(${data.l183_i1})` }}
              onClick={() => onImageClick('l183_i1')}
            />
          </div>
          <div className="flex-1 rounded-2xl overflow-hidden shadow-lg border-4 border-white relative">
            <div 
              className="w-full h-full img-slot"
              style={{ backgroundImage: `url(${data.l183_i2})` }}
              onClick={() => onImageClick('l183_i2')}
            />
          </div>
        </div>
        <div className="flex-1 bg-white rounded-3xl p-6 shadow-inner border border-slate-200 text-center flex flex-col justify-center">
          <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-anton text-4xl text-slate-800 mb-2 uppercase" style={{ color: data.globalTextColor }}>
            {data.l183_t1 || 'GƯƠNG MẶT TIÊU BIỂU'}
          </h2>
          <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam text-slate-500 italic" style={{ color: data.globalTextColor }}>
            {data.l183_t2 || 'Sự nỗ lực không ngừng nghỉ tạo nên thành công'}
          </p>
        </div>
      </div>
    )
  },
  {
    id: 184,
    name: 'Bộ Ba Hoàn Hảo',
    tags: ['3anh', 'tuyenduong'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-gradient-to-br from-indigo-900 to-purple-900 p-6 flex flex-col" style={{ color: data.globalTextColor }}>
        <div className="grid grid-cols-3 gap-3 h-1/2 mb-8">
          {[1, 2, 3].map(i => (
            <div key={i} className="rounded-xl overflow-hidden border-2 border-indigo-400/30 shadow-2xl">
              <div 
                className="w-full h-full img-slot"
                style={{ backgroundImage: `url(${data[`l184_i${i}`]})` }}
                onClick={() => onImageClick(`l184_i${i}`)}
              />
            </div>
          ))}
        </div>
        <div className="text-center">
          <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-anton text-5xl text-white mb-4 tracking-widest" style={{ color: data.globalTextColor || 'white' }}>
            {data.l184_t1 || 'EXCELLENCE TEAM'}
          </h2>
          <div className="inline-block px-6 py-2 bg-indigo-500 text-white rounded-full font-bevietnam font-bold text-sm uppercase tracking-widest shadow-lg">
            {data.l184_t2 || 'Vinh danh tập thể xuất sắc'}
          </div>
        </div>
      </div>
    )
  },
  {
    id: 185,
    name: 'Ngôi Sao Hy Vọng',
    tags: ['1anh', 'tuyenduong'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-amber-50 p-8 flex flex-col items-center justify-center text-center" style={{ color: data.globalTextColor }}>
        <div className="w-56 h-56 rounded-full border-8 border-amber-400 shadow-2xl mb-8 overflow-hidden relative">
          <div 
            className="w-full h-full img-slot"
            style={{ backgroundImage: `url(${data.l185_i1})` }}
            onClick={() => onImageClick('l185_i1')}
          />
        </div>
        <div className="space-y-2">
          <div className="text-amber-500 text-4xl mb-2">★★★★★</div>
          <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-anton text-5xl text-amber-600 uppercase" style={{ color: data.globalTextColor || '#d97706' }}>
            {data.l185_t1 || 'NGÔI SAO NHÍ'}
          </h2>
          <h3 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam text-2xl font-bold text-gray-800" style={{ color: data.globalTextColor }}>
            {data.l185_t2 || 'Học sinh: Nguyễn Minh Anh'}
          </h3>
          <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam text-gray-500 max-w-xs mx-auto" style={{ color: data.globalTextColor }}>
            {data.l185_t3 || 'Đã đạt danh hiệu học sinh xuất sắc nhất tuần qua.'}
          </p>
        </div>
      </div>
    )
  },
  {
    id: 186,
    name: 'Cặp Đôi Học Tập',
    tags: ['2anh', 'tuyenduong'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-emerald-900 p-6 flex flex-col" style={{ color: data.globalTextColor }}>
        <div className="flex-1 flex gap-4 mb-6">
          <div className="flex-1 rounded-3xl overflow-hidden border-4 border-emerald-400/50 rotate-2 shadow-2xl">
            <div 
              className="w-full h-full img-slot"
              style={{ backgroundImage: `url(${data.l186_i1})` }}
              onClick={() => onImageClick('l186_i1')}
            />
          </div>
          <div className="flex-1 rounded-3xl overflow-hidden border-4 border-emerald-400/50 -rotate-2 shadow-2xl">
            <div 
              className="w-full h-full img-slot"
              style={{ backgroundImage: `url(${data.l186_i2})` }}
              onClick={() => onImageClick('l186_i2')}
            />
          </div>
        </div>
        <div className="text-center text-white space-y-2">
          <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-anton text-4xl uppercase tracking-tight" style={{ color: data.globalTextColor || 'white' }}>
            {data.l186_t1 || 'STUDY BUDDIES'}
          </h2>
          <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam text-emerald-300 text-sm" style={{ color: data.globalTextColor }}>
            {data.l186_t2 || 'Cùng nhau tiến bộ - Cùng nhau thành công'}
          </p>
        </div>
      </div>
    )
  },
  {
    id: 187,
    name: 'Tam Giác Vàng',
    tags: ['3anh', 'tuyenduong'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-zinc-900 p-4 flex flex-col" style={{ color: data.globalTextColor }}>
        <div className="grid grid-cols-2 grid-rows-2 gap-3 flex-1 mb-4">
          <div className="row-span-2 rounded-2xl overflow-hidden border border-zinc-700">
            <div 
              className="w-full h-full img-slot"
              style={{ backgroundImage: `url(${data.l187_i1})` }}
              onClick={() => onImageClick('l187_i1')}
            />
          </div>
          <div className="rounded-2xl overflow-hidden border border-zinc-700">
            <div 
              className="w-full h-full img-slot"
              style={{ backgroundImage: `url(${data.l187_i2})` }}
              onClick={() => onImageClick('l187_i2')}
            />
          </div>
          <div className="rounded-2xl overflow-hidden border border-zinc-700">
            <div 
              className="w-full h-full img-slot"
              style={{ backgroundImage: `url(${data.l187_i3})` }}
              onClick={() => onImageClick('l187_i3')}
            />
          </div>
        </div>
        <div className="bg-zinc-800 p-4 rounded-2xl border border-zinc-700">
          <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-anton text-3xl text-white uppercase text-center" style={{ color: data.globalTextColor || 'white' }}>
            {data.l187_t1 || 'TOP ACHIEVERS'}
          </h2>
        </div>
      </div>
    )
  },
  {
    id: 188,
    name: 'Lãnh Đạo Tương Lai',
    tags: ['1anh', 'tuyenduong'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-rose-50 p-0 flex flex-col" style={{ color: data.globalTextColor }}>
        <div className="h-2/3 w-full relative">
          <div 
            className="w-full h-full img-slot"
            style={{ backgroundImage: `url(${data.l188_i1})` }}
            onClick={() => onImageClick('l188_i1')}
          />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-rose-50 to-transparent" />
        </div>
        <div className="flex-1 p-8 text-center flex flex-col justify-center -mt-12 relative z-10">
          <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-anton text-5xl text-rose-600 mb-2" style={{ color: data.globalTextColor || '#e11d48' }}>
            {data.l188_t1 || 'FUTURE LEADER'}
          </h2>
          <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam text-gray-700 font-medium" style={{ color: data.globalTextColor }}>
            {data.l188_t2 || 'Vinh danh học sinh có tố chất lãnh đạo xuất sắc'}
          </p>
        </div>
      </div>
    )
  },
  {
    id: 189,
    name: 'Cặp Đôi Sáng Tạo',
    tags: ['2anh', 'tuyenduong'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-cyan-50 p-6 flex flex-col" style={{ color: data.globalTextColor }}>
        <div className="flex-1 grid grid-cols-1 gap-4 mb-6">
          <div className="rounded-3xl overflow-hidden shadow-xl border-8 border-white relative">
            <div 
              className="w-full h-full img-slot"
              style={{ backgroundImage: `url(${data.l189_i1})` }}
              onClick={() => onImageClick('l189_i1')}
            />
          </div>
          <div className="rounded-3xl overflow-hidden shadow-xl border-8 border-white relative">
            <div 
              className="w-full h-full img-slot"
              style={{ backgroundImage: `url(${data.l189_i2})` }}
              onClick={() => onImageClick('l189_i2')}
            />
          </div>
        </div>
        <div className="text-center">
          <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-anton text-4xl text-cyan-700 uppercase" style={{ color: data.globalTextColor || '#0e7490' }}>
            {data.l189_t1 || 'CREATIVE DUO'}
          </h2>
        </div>
      </div>
    )
  },
  {
    id: 190,
    name: 'Đội Ngũ Dự Án',
    tags: ['3anh', 'tuyenduong'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-violet-950 p-6 flex flex-col" style={{ color: data.globalTextColor }}>
        <div className="flex gap-2 h-1/2 mb-8">
          <div className="flex-[2] rounded-2xl overflow-hidden border-2 border-violet-400">
            <div 
              className="w-full h-full img-slot"
              style={{ backgroundImage: `url(${data.l190_i1})` }}
              onClick={() => onImageClick('l190_i1')}
            />
          </div>
          <div className="flex-[1] flex flex-col gap-2">
            <div className="flex-1 rounded-2xl overflow-hidden border-2 border-violet-400">
              <div 
                className="w-full h-full img-slot"
                style={{ backgroundImage: `url(${data.l190_i2})` }}
                onClick={() => onImageClick('l190_i2')}
              />
            </div>
            <div className="flex-1 rounded-2xl overflow-hidden border-2 border-violet-400">
              <div 
                className="w-full h-full img-slot"
                style={{ backgroundImage: `url(${data.l190_i3})` }}
                onClick={() => onImageClick('l190_i3')}
              />
            </div>
          </div>
        </div>
        <div className="text-center space-y-4">
          <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-anton text-5xl text-violet-300 uppercase italic tracking-tighter" style={{ color: data.globalTextColor || '#ddd6fe' }}>
            {data.l190_t1 || 'PROJECT STARS'}
          </h2>
          <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam text-violet-400 text-xs uppercase tracking-widest" style={{ color: data.globalTextColor }}>
            {data.l190_t2 || 'Vinh danh nhóm thực hiện dự án xuất sắc nhất'}
          </p>
        </div>
      </div>
    )
  },
  {
    id: 191,
    name: 'Bảng Vàng Danh Dự',
    tags: ['1anh', 'tuyenduong'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-[#1a1a1a] p-10 flex flex-col items-center border-[12px] border-[#c5a059]" style={{ color: data.globalTextColor }}>
        <div className="w-full h-3/5 border-2 border-[#c5a059] p-2 mb-8">
          <div 
            className="w-full h-full img-slot grayscale hover:grayscale-0 transition-all duration-500"
            style={{ backgroundImage: `url(${data.l191_i1})` }}
            onClick={() => onImageClick('l191_i1')}
          />
        </div>
        <div className="text-center">
          <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-anton text-5xl text-[#c5a059] uppercase tracking-[0.2em] mb-4" style={{ color: data.globalTextColor || '#c5a059' }}>
            {data.l191_t1 || 'HONOR ROLL'}
          </h2>
          <div className="h-[1px] w-48 bg-[#c5a059] mx-auto mb-4" />
          <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam text-white/70 text-sm uppercase tracking-widest" style={{ color: data.globalTextColor || 'rgba(255,255,255,0.7)' }}>
            {data.l191_t2 || 'Học sinh ưu tú của năm'}
          </p>
        </div>
      </div>
    )
  },
  {
    id: 192,
    name: 'Cặp Đôi Thể Thao',
    tags: ['2anh', 'tuyenduong', 'thethao'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-orange-600 p-6 flex flex-col" style={{ color: data.globalTextColor }}>
        <div className="flex-1 flex flex-col gap-4 mb-6">
          <div className="flex-1 rounded-2xl overflow-hidden border-4 border-white shadow-2xl relative">
            <div 
              className="w-full h-full img-slot"
              style={{ backgroundImage: `url(${data.l192_i1})` }}
              onClick={() => onImageClick('l192_i1')}
            />
          </div>
          <div className="flex-1 rounded-2xl overflow-hidden border-4 border-white shadow-2xl relative">
            <div 
              className="w-full h-full img-slot"
              style={{ backgroundImage: `url(${data.l192_i2})` }}
              onClick={() => onImageClick('l192_i2')}
            />
          </div>
        </div>
        <div className="text-center text-white">
          <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-anton text-4xl uppercase italic" style={{ color: data.globalTextColor || 'white' }}>
            {data.l192_t1 || 'SPORTS CHAMPIONS'}
          </h2>
        </div>
      </div>
    )
  },
  {
    id: 193,
    name: 'Tam Tấu Nghệ Thuật',
    tags: ['3anh', 'tuyenduong'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-pink-50 p-6 flex flex-col" style={{ color: data.globalTextColor }}>
        <div className="flex-1 grid grid-cols-3 gap-2 mb-6">
          {[1, 2, 3].map(i => (
            <div key={i} className="rounded-full overflow-hidden border-4 border-pink-200 shadow-lg aspect-[2/3]">
              <div 
                className="w-full h-full img-slot"
                style={{ backgroundImage: `url(${data[`l193_i${i}`]})` }}
                onClick={() => onImageClick(`l193_i${i}`)}
              />
            </div>
          ))}
        </div>
        <div className="text-center">
          <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-anton text-3xl text-pink-600 uppercase" style={{ color: data.globalTextColor || '#db2777' }}>
            {data.l193_t1 || 'ARTISTIC TRIO'}
          </h2>
          <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam text-pink-400 text-xs" style={{ color: data.globalTextColor }}>
            {data.l193_t2 || 'Sáng tạo không giới hạn'}
          </p>
        </div>
      </div>
    )
  },
  {
    id: 194,
    name: 'Nhà Khoa Học Nhí',
    tags: ['1anh', 'tuyenduong'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-blue-900 p-8 flex flex-col items-center" style={{ color: data.globalTextColor }}>
        <div className="w-full h-2/3 rounded-t-[100px] rounded-b-2xl overflow-hidden border-4 border-blue-400 shadow-[0_0_30px_rgba(96,165,250,0.5)] mb-8">
          <div 
            className="w-full h-full img-slot"
            style={{ backgroundImage: `url(${data.l194_i1})` }}
            onClick={() => onImageClick('l194_i1')}
          />
        </div>
        <div className="text-center">
          <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-anton text-4xl text-blue-300 uppercase tracking-widest" style={{ color: data.globalTextColor || '#93c5fd' }}>
            {data.l194_t1 || 'YOUNG SCIENTIST'}
          </h2>
          <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam text-white/60 text-xs mt-2" style={{ color: data.globalTextColor || 'rgba(255,255,255,0.6)' }}>
            {data.l194_t2 || 'Khám phá tri thức - Chinh phục tương lai'}
          </p>
        </div>
      </div>
    )
  },
  {
    id: 195,
    name: 'Cặp Đôi Hùng Biện',
    tags: ['2anh', 'tuyenduong'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-stone-100 p-6 flex flex-col" style={{ color: data.globalTextColor }}>
        <div className="flex-1 flex gap-4 mb-6">
          <div className="flex-1 rounded-lg overflow-hidden border-2 border-stone-300 shadow-md">
            <div 
              className="w-full h-full img-slot"
              style={{ backgroundImage: `url(${data.l195_i1})` }}
              onClick={() => onImageClick('l195_i1')}
            />
          </div>
          <div className="flex-1 rounded-lg overflow-hidden border-2 border-stone-300 shadow-md">
            <div 
              className="w-full h-full img-slot"
              style={{ backgroundImage: `url(${data.l195_i2})` }}
              onClick={() => onImageClick('l195_i2')}
            />
          </div>
        </div>
        <div className="bg-stone-800 p-6 rounded-xl text-center">
          <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-anton text-3xl text-stone-100 uppercase" style={{ color: data.globalTextColor || '#f5f5f4' }}>
            {data.l195_t1 || 'DEBATE MASTERS'}
          </h2>
        </div>
      </div>
    )
  },
  {
    id: 196,
    name: 'Đội Tình Nguyện',
    tags: ['3anh', 'tuyenduong'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-green-50 p-6 flex flex-col" style={{ color: data.globalTextColor }}>
        <div className="flex-1 grid grid-cols-2 grid-rows-2 gap-2 mb-6">
          <div className="col-span-2 rounded-2xl overflow-hidden border-2 border-green-200">
            <div 
              className="w-full h-full img-slot"
              style={{ backgroundImage: `url(${data.l196_i1})` }}
              onClick={() => onImageClick('l196_i1')}
            />
          </div>
          <div className="rounded-2xl overflow-hidden border-2 border-green-200">
            <div 
              className="w-full h-full img-slot"
              style={{ backgroundImage: `url(${data.l196_i2})` }}
              onClick={() => onImageClick('l196_i2')}
            />
          </div>
          <div className="rounded-2xl overflow-hidden border-2 border-green-200">
            <div 
              className="w-full h-full img-slot"
              style={{ backgroundImage: `url(${data.l196_i3})` }}
              onClick={() => onImageClick('l196_i3')}
            />
          </div>
        </div>
        <div className="text-center">
          <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-anton text-3xl text-green-700 uppercase" style={{ color: data.globalTextColor || '#15803d' }}>
            {data.l196_t1 || 'VOLUNTEER STARS'}
          </h2>
        </div>
      </div>
    )
  },
  {
    id: 197,
    name: 'Chuyên Cần Xuất Sắc',
    tags: ['1anh', 'tuyenduong'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-yellow-400 p-8 flex flex-col items-center justify-center" style={{ color: data.globalTextColor }}>
        <div className="w-64 h-64 bg-white rounded-2xl rotate-3 shadow-2xl p-4 mb-10">
          <div 
            className="w-full h-full img-slot -rotate-3 rounded-xl overflow-hidden"
            style={{ backgroundImage: `url(${data.l197_i1})` }}
            onClick={() => onImageClick('l197_i1')}
          />
        </div>
        <div className="text-center">
          <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-anton text-5xl text-black uppercase tracking-tighter" style={{ color: data.globalTextColor || 'black' }}>
            {data.l197_t1 || 'PERFECT ATTENDANCE'}
          </h2>
          <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam text-black/60 font-bold mt-2" style={{ color: data.globalTextColor || 'rgba(0,0,0,0.6)' }}>
            {data.l197_t2 || 'Vinh danh sự nỗ lực và chuyên cần'}
          </p>
        </div>
      </div>
    )
  },
  {
    id: 198,
    name: 'Đôi Bạn Cùng Tiến',
    tags: ['2anh', 'tuyenduong'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-sky-900 p-6 flex flex-col" style={{ color: data.globalTextColor }}>
        <div className="flex-1 flex flex-col gap-2 mb-6">
          <div className="flex-1 rounded-l-[100px] rounded-r-2xl overflow-hidden border-4 border-sky-400">
            <div 
              className="w-full h-full img-slot"
              style={{ backgroundImage: `url(${data.l198_i1})` }}
              onClick={() => onImageClick('l198_i1')}
            />
          </div>
          <div className="flex-1 rounded-r-[100px] rounded-l-2xl overflow-hidden border-4 border-sky-400">
            <div 
              className="w-full h-full img-slot"
              style={{ backgroundImage: `url(${data.l198_i2})` }}
              onClick={() => onImageClick('l198_i2')}
            />
          </div>
        </div>
        <div className="text-center">
          <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-anton text-4xl text-white uppercase" style={{ color: data.globalTextColor || 'white' }}>
            {data.l198_t1 || 'READING BUDDIES'}
          </h2>
        </div>
      </div>
    )
  },
  {
    id: 199,
    name: 'Ban Nhạc Nhí',
    tags: ['3anh', 'tuyenduong'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-black p-6 flex flex-col" style={{ color: data.globalTextColor }}>
        <div className="flex-1 grid grid-cols-3 gap-1 mb-6">
          {[1, 2, 3].map(i => (
            <div key={i} className="overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
              <div 
                className="w-full h-full img-slot"
                style={{ backgroundImage: `url(${data[`l199_i${i}`]})` }}
                onClick={() => onImageClick(`l199_i${i}`)}
              />
            </div>
          ))}
        </div>
        <div className="text-center">
          <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-anton text-5xl text-yellow-500 uppercase tracking-widest" style={{ color: data.globalTextColor || '#eab308' }}>
            {data.l199_t1 || 'MUSIC ENSEMBLE'}
          </h2>
          <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam text-white/40 text-[10px] uppercase tracking-[0.5em] mt-2" style={{ color: data.globalTextColor || 'rgba(255,255,255,0.4)' }}>
            {data.l199_t2 || 'Giai điệu của sự đoàn kết'}
          </p>
        </div>
      </div>
    )
  },
  {
    id: 200,
    name: 'Thần Đồng Toán Học',
    tags: ['1anh', 'tuyenduong'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-slate-900 p-8 flex flex-col items-center" style={{ color: data.globalTextColor }}>
        <div className="w-full h-2/3 bg-slate-800 rounded-3xl overflow-hidden border-2 border-slate-700 p-4 shadow-2xl mb-8">
          <div 
            className="w-full h-full img-slot rounded-2xl"
            style={{ backgroundImage: `url(${data.l200_i1})` }}
            onClick={() => onImageClick('l200_i1')}
          />
        </div>
        <div className="text-center">
          <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-anton text-5xl text-white uppercase tracking-tighter" style={{ color: data.globalTextColor || 'white' }}>
            {data.l200_t1 || 'MATH GENIUS'}
          </h2>
          <div className="inline-block px-4 py-1 bg-yellow-500 text-black font-bevietnam font-bold text-xs rounded mt-2">
            {data.l200_t2 || 'Vinh danh tài năng toán học'}
          </div>
        </div>
      </div>
    )
  },
  {
    id: 201,
    name: 'Ngôi Sao Ngôn Ngữ',
    tags: ['2anh', 'tuyenduong'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-indigo-50 p-6 flex flex-col" style={{ color: data.globalTextColor }}>
        <div className="flex-1 flex gap-4 mb-6">
          <div className="flex-1 rounded-full overflow-hidden border-4 border-indigo-200 shadow-xl">
            <div 
              className="w-full h-full img-slot"
              style={{ backgroundImage: `url(${data.l201_i1})` }}
              onClick={() => onImageClick('l201_i1')}
            />
          </div>
          <div className="flex-1 rounded-full overflow-hidden border-4 border-indigo-200 shadow-xl">
            <div 
              className="w-full h-full img-slot"
              style={{ backgroundImage: `url(${data.l201_i2})` }}
              onClick={() => onImageClick('l201_i2')}
            />
          </div>
        </div>
        <div className="text-center">
          <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-anton text-4xl text-indigo-800 uppercase" style={{ color: data.globalTextColor || '#1e1b4b' }}>
            {data.l201_t1 || 'LANGUAGE STARS'}
          </h2>
        </div>
      </div>
    )
  },
  {
    id: 202,
    name: 'Học Sinh Tích Cực',
    tags: ['1anh', 'tuyenduong'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-blue-50 p-6 flex flex-col items-center" style={{ color: data.globalTextColor }}>
        <div className="w-full h-2/3 rounded-2xl overflow-hidden shadow-xl border-4 border-white mb-6">
          <div 
            className="w-full h-full img-slot"
            style={{ backgroundImage: `url(${data.l202_i1})` }}
            onClick={() => onImageClick('l202_i1')}
          />
        </div>
        <div className="text-center">
          <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-anton text-4xl text-blue-700 uppercase" style={{ color: data.globalTextColor || '#1d4ed8' }}>
            {data.l202_t1 || 'HỌC SINH TÍCH CỰC'}
          </h2>
          <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam text-gray-600 mt-2" style={{ color: data.globalTextColor }}>
            {data.l202_t2 || 'Năng nổ trong mọi hoạt động phong trào'}
          </p>
        </div>
      </div>
    )
  },
  {
    id: 203,
    name: 'Đôi Bạn Học Tốt',
    tags: ['2anh', 'tuyenduong'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-rose-50 p-6 flex flex-col" style={{ color: data.globalTextColor }}>
        <div className="flex gap-4 h-1/2 mb-6">
          <div className="flex-1 rounded-full overflow-hidden border-4 border-rose-200 shadow-lg">
            <div 
              className="w-full h-full img-slot"
              style={{ backgroundImage: `url(${data.l203_i1})` }}
              onClick={() => onImageClick('l203_i1')}
            />
          </div>
          <div className="flex-1 rounded-full overflow-hidden border-4 border-rose-200 shadow-lg">
            <div 
              className="w-full h-full img-slot"
              style={{ backgroundImage: `url(${data.l203_i2})` }}
              onClick={() => onImageClick('l203_i2')}
            />
          </div>
        </div>
        <div className="text-center space-y-2">
          <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-anton text-3xl text-rose-600 uppercase" style={{ color: data.globalTextColor || '#e11d48' }}>
            {data.l203_t1 || 'ĐÔI BẠN HỌC TỐT'}
          </h2>
          <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam text-rose-400 text-sm italic" style={{ color: data.globalTextColor }}>
            {data.l203_t2 || '"Cùng nhau tiến bộ, cùng nhau tỏa sáng"'}
          </p>
        </div>
      </div>
    )
  },
  {
    id: 204,
    name: 'Nhóm Nghiên Cứu',
    tags: ['3anh', 'tuyenduong'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-slate-100 p-4 flex flex-col" style={{ color: data.globalTextColor }}>
        <div className="grid grid-cols-3 gap-2 h-2/5 mb-6">
          {[1, 2, 3].map(i => (
            <div key={i} className="rounded-lg overflow-hidden border-2 border-slate-300 shadow-sm">
              <div 
                className="w-full h-full img-slot"
                style={{ backgroundImage: `url(${data[`l204_i${i}`]})` }}
                onClick={() => onImageClick(`l204_i${i}`)}
              />
            </div>
          ))}
        </div>
        <div className="flex-1 bg-white rounded-xl p-6 border border-slate-200 shadow-inner flex flex-col justify-center text-center">
          <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-anton text-3xl text-slate-800 uppercase mb-2" style={{ color: data.globalTextColor }}>
            {data.l204_t1 || 'RESEARCH GROUP'}
          </h2>
          <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam text-slate-500 text-xs" style={{ color: data.globalTextColor }}>
            {data.l204_t2 || 'Vinh danh nhóm có đề tài nghiên cứu xuất sắc nhất năm học'}
          </p>
        </div>
      </div>
    )
  },
  {
    id: 205,
    name: 'Vô Địch Cờ Vua',
    tags: ['1anh', 'tuyenduong'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-zinc-900 p-8 flex flex-col items-center border-[10px] border-zinc-800" style={{ color: data.globalTextColor }}>
        <div className="w-full h-3/5 border-4 border-amber-500 p-2 mb-8 shadow-[0_0_20px_rgba(245,158,11,0.3)]">
          <div 
            className="w-full h-full img-slot"
            style={{ backgroundImage: `url(${data.l205_i1})` }}
            onClick={() => onImageClick('l205_i1')}
          />
        </div>
        <div className="text-center">
          <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-anton text-5xl text-amber-500 uppercase tracking-widest" style={{ color: data.globalTextColor || '#f59e0b' }}>
            {data.l205_t1 || 'CHESS MASTER'}
          </h2>
          <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam text-zinc-400 text-sm mt-2" style={{ color: data.globalTextColor || '#a1a1aa' }}>
            {data.l205_t2 || 'Vinh danh nhà vô địch giải cờ vua trường'}
          </p>
        </div>
      </div>
    )
  },
  {
    id: 206,
    name: 'Tài Năng Hội Họa',
    tags: ['2anh', 'tuyenduong'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-white p-6 flex flex-col" style={{ color: data.globalTextColor }}>
        <div className="flex-1 flex gap-4 mb-6">
          <div className="flex-1 rounded-2xl overflow-hidden border-4 border-purple-100 shadow-xl rotate-3">
            <div 
              className="w-full h-full img-slot"
              style={{ backgroundImage: `url(${data.l206_i1})` }}
              onClick={() => onImageClick('l206_i1')}
            />
          </div>
          <div className="flex-1 rounded-2xl overflow-hidden border-4 border-purple-100 shadow-xl -rotate-3">
            <div 
              className="w-full h-full img-slot"
              style={{ backgroundImage: `url(${data.l206_i2})` }}
              onClick={() => onImageClick('l206_i2')}
            />
          </div>
        </div>
        <div className="text-center">
          <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-anton text-4xl text-purple-600 uppercase" style={{ color: data.globalTextColor || '#9333ea' }}>
            {data.l206_t1 || 'YOUNG ARTIST'}
          </h2>
          <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam text-purple-400 text-xs" style={{ color: data.globalTextColor }}>
            {data.l206_t2 || 'Sắc màu của sự sáng tạo'}
          </p>
        </div>
      </div>
    )
  },
  {
    id: 207,
    name: 'Đội Văn Nghệ',
    tags: ['3anh', 'tuyenduong'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-pink-950 p-6 flex flex-col" style={{ color: data.globalTextColor }}>
        <div className="flex gap-2 h-1/2 mb-8">
          <div className="flex-1 rounded-xl overflow-hidden border-2 border-pink-400/30">
            <div 
              className="w-full h-full img-slot"
              style={{ backgroundImage: `url(${data.l207_i1})` }}
              onClick={() => onImageClick('l207_i1')}
            />
          </div>
          <div className="flex-1 rounded-xl overflow-hidden border-2 border-pink-400/30">
            <div 
              className="w-full h-full img-slot"
              style={{ backgroundImage: `url(${data.l207_i2})` }}
              onClick={() => onImageClick('l207_i2')}
            />
          </div>
          <div className="flex-1 rounded-xl overflow-hidden border-2 border-pink-400/30">
            <div 
              className="w-full h-full img-slot"
              style={{ backgroundImage: `url(${data.l207_i3})` }}
              onClick={() => onImageClick('l207_i3')}
            />
          </div>
        </div>
        <div className="text-center space-y-4">
          <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-anton text-5xl text-pink-300 uppercase tracking-tighter" style={{ color: data.globalTextColor || '#f9a8d4' }}>
            {data.l207_t1 || 'STAGE STARS'}
          </h2>
          <div className="h-1 w-32 bg-pink-500 mx-auto rounded-full" />
        </div>
      </div>
    )
  },
  {
    id: 208,
    name: 'Chiến Binh Xanh',
    tags: ['1anh', 'tuyenduong'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-emerald-50 p-8 flex flex-col items-center" style={{ color: data.globalTextColor }}>
        <div className="w-64 h-64 rounded-full overflow-hidden border-8 border-emerald-500 shadow-2xl mb-8">
          <div 
            className="w-full h-full img-slot"
            style={{ backgroundImage: `url(${data.l208_i1})` }}
            onClick={() => onImageClick('l208_i1')}
          />
        </div>
        <div className="text-center">
          <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-anton text-4xl text-emerald-700 uppercase" style={{ color: data.globalTextColor || '#047857' }}>
            {data.l208_t1 || 'GREEN WARRIOR'}
          </h2>
          <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam text-emerald-600 text-sm mt-2 font-bold" style={{ color: data.globalTextColor }}>
            {data.l208_t2 || 'Vì một môi trường học đường xanh - sạch - đẹp'}
          </p>
        </div>
      </div>
    )
  },
  {
    id: 209,
    name: 'Sáng Tạo Công Nghệ',
    tags: ['2anh', 'tuyenduong'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-black p-6 flex flex-col" style={{ color: data.globalTextColor }}>
        <div className="flex-1 flex gap-4 mb-6">
          <div className="flex-1 rounded-2xl overflow-hidden border-2 border-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.5)]">
            <div 
              className="w-full h-full img-slot"
              style={{ backgroundImage: `url(${data.l209_i1})` }}
              onClick={() => onImageClick('l209_i1')}
            />
          </div>
          <div className="flex-1 rounded-2xl overflow-hidden border-2 border-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.5)]">
            <div 
              className="w-full h-full img-slot"
              style={{ backgroundImage: `url(${data.l209_i2})` }}
              onClick={() => onImageClick('l209_i2')}
            />
          </div>
        </div>
        <div className="text-center">
          <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-anton text-4xl text-cyan-400 uppercase italic" style={{ color: data.globalTextColor || '#22d3ee' }}>
            {data.l209_t1 || 'TECH INNOVATORS'}
          </h2>
        </div>
      </div>
    )
  },
  {
    id: 210,
    name: 'Ban Chấp Hành',
    tags: ['3anh', 'tuyenduong'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-white p-6 flex flex-col border-[16px] border-slate-100" style={{ color: data.globalTextColor }}>
        <div className="grid grid-cols-3 gap-2 h-1/3 mb-8">
          {[1, 2, 3].map(i => (
            <div key={i} className="rounded-lg overflow-hidden border border-slate-200 grayscale">
              <div 
                className="w-full h-full img-slot"
                style={{ backgroundImage: `url(${data[`l210_i${i}`]})` }}
                onClick={() => onImageClick(`l210_i${i}`)}
              />
            </div>
          ))}
        </div>
        <div className="text-center space-y-2">
          <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-anton text-4xl text-slate-900 uppercase tracking-widest" style={{ color: data.globalTextColor }}>
            {data.l210_t1 || 'EXECUTIVE BOARD'}
          </h2>
          <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam text-slate-400 text-[10px] uppercase tracking-[0.3em]" style={{ color: data.globalTextColor }}>
            {data.l210_t2 || 'Nhiệm kỳ 2025 - 2026'}
          </p>
        </div>
      </div>
    )
  },
  {
    id: 211,
    name: 'Gương Mặt Tiêu Biểu',
    tags: ['1anh', 'tuyenduong'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-white p-0 flex flex-col" style={{ color: data.globalTextColor }}>
        <div className="h-3/4 w-full relative">
          <div 
            className="w-full h-full img-slot"
            style={{ backgroundImage: `url(${data.l211_i1})` }}
            onClick={() => onImageClick('l211_i1')}
          />
          <div className="absolute top-8 left-8">
            <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-anton text-7xl text-white uppercase leading-none drop-shadow-2xl" style={{ color: data.globalTextColor || 'white' }}>
              {data.l211_t1 || 'TOP'}
            </h2>
          </div>
        </div>
        <div className="flex-1 bg-black p-6 flex flex-col justify-center">
          <h3 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-anton text-3xl text-white uppercase tracking-tighter" style={{ color: data.globalTextColor || 'white' }}>
            {data.l211_t2 || 'STUDENT OF THE YEAR'}
          </h3>
          <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam text-white/50 text-xs mt-1" style={{ color: data.globalTextColor || 'rgba(255,255,255,0.5)' }}>
            {data.l211_t3 || 'Vinh danh cá nhân có thành tích xuất sắc nhất'}
          </p>
        </div>
      </div>
    )
  },
  {
    id: 212,
    name: 'Thành Tích Vượt Trội',
    tags: ['2anh', 'tuyenduong'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-gradient-to-tr from-blue-900 to-indigo-800 p-6 flex flex-col relative" style={{ color: data.globalTextColor }}>
        <ElegantBorder color={data.globalTextColor || 'rgba(255,255,255,0.3)'} />
        <div className="flex-1 flex gap-4 mb-6 z-10">
          <div className="flex-1 rounded-2xl overflow-hidden border-2 border-blue-400 shadow-2xl transform -rotate-2">
            <div 
              className="w-full h-full img-slot"
              style={{ backgroundImage: `url(${data.l212_i1})` }}
              onClick={() => onImageClick('l212_i1')}
            />
          </div>
          <div className="flex-1 rounded-2xl overflow-hidden border-2 border-blue-400 shadow-2xl transform rotate-2">
            <div 
              className="w-full h-full img-slot"
              style={{ backgroundImage: `url(${data.l212_i2})` }}
              onClick={() => onImageClick('l212_i2')}
            />
          </div>
        </div>
        <div className="text-center">
          <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-anton text-4xl text-white uppercase italic tracking-tighter" style={{ color: data.globalTextColor || 'white' }}>
            {data.l212_t1 || 'OUTSTANDING ACHIEVEMENT'}
          </h2>
        </div>
      </div>
    )
  },
  {
    id: 213,
    name: 'Câu Lạc Bộ Tiếng Anh',
    tags: ['3anh', 'tuyenduong'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-white p-6 flex flex-col" style={{ color: data.globalTextColor }}>
        <div className="flex gap-2 h-1/2 mb-6">
          <div className="flex-[1.5] rounded-2xl overflow-hidden border-4 border-red-600 shadow-lg">
            <div 
              className="w-full h-full img-slot"
              style={{ backgroundImage: `url(${data.l213_i1})` }}
              onClick={() => onImageClick('l213_i1')}
            />
          </div>
          <div className="flex-1 flex flex-col gap-2">
            <div className="flex-1 rounded-2xl overflow-hidden border-4 border-blue-800 shadow-lg">
              <div 
                className="w-full h-full img-slot"
                style={{ backgroundImage: `url(${data.l213_i2})` }}
                onClick={() => onImageClick('l213_i2')}
              />
            </div>
            <div className="flex-1 rounded-2xl overflow-hidden border-4 border-blue-800 shadow-lg">
              <div 
                className="w-full h-full img-slot"
                style={{ backgroundImage: `url(${data.l213_i3})` }}
                onClick={() => onImageClick('l213_i3')}
              />
            </div>
          </div>
        </div>
        <div className="text-center">
          <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-anton text-4xl text-blue-900 uppercase" style={{ color: data.globalTextColor || '#1e3a8a' }}>
            {data.l213_t1 || 'ENGLISH CLUB STARS'}
          </h2>
          <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam text-red-600 font-bold text-xs mt-1" style={{ color: data.globalTextColor || '#dc2626' }}>
            {data.l213_t2 || 'Vinh danh những cá nhân xuất sắc nhất CLB'}
          </p>
        </div>
      </div>
    )
  },
  {
    id: 214,
    name: 'Bé Ngoan Chuyên Cần',
    tags: ['1anh', 'tuyenduong', 'tieuhoc'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-yellow-50 p-8 flex flex-col items-center justify-center relative" style={{ color: data.globalTextColor }}>
        <CuteBorder color={data.globalTextColor || '#ca8a04'} />
        <div className="w-56 h-56 rounded-3xl overflow-hidden border-8 border-yellow-400 shadow-2xl mb-8 relative z-10">
          <div 
            className="w-full h-full img-slot"
            style={{ backgroundImage: `url(${data.l214_i1})` }}
            onClick={() => onImageClick('l214_i1')}
          />
          <div className="absolute -top-4 -right-4 bg-white text-yellow-500 w-12 h-12 rounded-full flex items-center justify-center text-2xl shadow-lg border-2 border-yellow-200">⭐</div>
        </div>
        <div className="text-center">
          <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-sriracha text-4xl text-yellow-600" style={{ color: data.globalTextColor || '#ca8a04' }}>
            {data.l214_t1 || 'Bé Ngoan Chuyên Cần'}
          </h2>
          <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam text-gray-500 mt-2 italic" style={{ color: data.globalTextColor }}>
            {data.l214_t2 || '"Mỗi ngày đến trường là một ngày vui"'}
          </p>
        </div>
      </div>
    )
  },
  {
    id: 215,
    name: 'Tình Bạn Thắm Thiết',
    tags: ['2anh', 'tuyenduong'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-pink-100 p-6 flex flex-col" style={{ color: data.globalTextColor }}>
        <div className="flex-1 flex items-center justify-center gap-2 mb-6">
          <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-xl">
            <div 
              className="w-full h-full img-slot"
              style={{ backgroundImage: `url(${data.l215_i1})` }}
              onClick={() => onImageClick('l215_i1')}
            />
          </div>
          <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-xl">
            <div 
              className="w-full h-full img-slot"
              style={{ backgroundImage: `url(${data.l215_i2})` }}
              onClick={() => onImageClick('l215_i2')}
            />
          </div>
        </div>
        <div className="text-center">
          <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-pacifico text-3xl text-pink-600" style={{ color: data.globalTextColor || '#db2777' }}>
            {data.l215_t1 || 'Best Friends Forever'}
          </h2>
          <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam text-pink-400 text-xs mt-2" style={{ color: data.globalTextColor }}>
            {data.l215_t2 || 'Vinh danh tình bạn đẹp nhất khối'}
          </p>
        </div>
      </div>
    )
  },
  {
    id: 216,
    name: 'Hành Trình Khám Phá',
    tags: ['3anh', 'tuyenduong'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-orange-50 p-4 flex flex-col" style={{ color: data.globalTextColor }}>
        <div className="grid grid-cols-2 grid-rows-2 gap-2 flex-1 mb-4">
          <div className="row-span-2 rounded-2xl overflow-hidden border-2 border-orange-200">
            <div 
              className="w-full h-full img-slot"
              style={{ backgroundImage: `url(${data.l216_i1})` }}
              onClick={() => onImageClick('l216_i1')}
            />
          </div>
          <div className="rounded-2xl overflow-hidden border-2 border-orange-200">
            <div 
              className="w-full h-full img-slot"
              style={{ backgroundImage: `url(${data.l216_i2})` }}
              onClick={() => onImageClick('l216_i2')}
            />
          </div>
          <div className="rounded-2xl overflow-hidden border-2 border-orange-200">
            <div 
              className="w-full h-full img-slot"
              style={{ backgroundImage: `url(${data.l216_i3})` }}
              onClick={() => onImageClick('l216_i3')}
            />
          </div>
        </div>
        <div className="text-center">
          <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-anton text-3xl text-orange-700 uppercase" style={{ color: data.globalTextColor || '#c2410c' }}>
            {data.l216_t1 || 'DISCOVERY JOURNEY'}
          </h2>
        </div>
      </div>
    )
  },
  {
    id: 217,
    name: 'Kỷ Lục Gia',
    tags: ['1anh', 'tuyenduong'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-red-700 p-8 flex flex-col items-center justify-center text-white relative" style={{ color: data.globalTextColor }}>
        <CertificateBorder color={data.globalTextColor || '#facc15'} />
        <div className="w-full h-1/2 rounded-2xl overflow-hidden border-4 border-yellow-400 shadow-2xl mb-8 z-10">
          <div 
            className="w-full h-full img-slot"
            style={{ backgroundImage: `url(${data.l217_i1})` }}
            onClick={() => onImageClick('l217_i1')}
          />
        </div>
        <div className="text-center space-y-2">
          <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-anton text-5xl uppercase tracking-tighter" style={{ color: data.globalTextColor || 'white' }}>
            {data.l217_t1 || 'RECORD BREAKER'}
          </h2>
          <div className="h-1 w-24 bg-yellow-400 mx-auto" />
          <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam text-yellow-200 text-sm font-bold" style={{ color: data.globalTextColor || '#fef08a' }}>
            {data.l217_t2 || 'Phá vỡ mọi giới hạn bản thân'}
          </p>
        </div>
      </div>
    )
  },
  {
    id: 218,
    name: 'Nghệ Sĩ Nhí',
    tags: ['2anh', 'tuyenduong'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-white p-6 flex flex-col relative" style={{ color: data.globalTextColor }}>
        <CuteBorder color={data.globalTextColor || '#d6d3d1'} />
        <div className="flex-1 flex gap-4 mb-6 z-10">
          <div className="flex-1 rounded-xl overflow-hidden border-8 border-stone-100 shadow-inner relative">
            <div 
              className="w-full h-full img-slot"
              style={{ backgroundImage: `url(${data.l218_i1})` }}
              onClick={() => onImageClick('l218_i1')}
            />
          </div>
          <div className="flex-1 rounded-xl overflow-hidden border-8 border-stone-100 shadow-inner relative">
            <div 
              className="w-full h-full img-slot"
              style={{ backgroundImage: `url(${data.l218_i2})` }}
              onClick={() => onImageClick('l218_i2')}
            />
          </div>
        </div>
        <div className="text-center">
          <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-dancing text-4xl text-stone-800" style={{ color: data.globalTextColor || '#1c1917' }}>
            {data.l218_t1 || 'Little Artists'}
          </h2>
          <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam text-stone-400 text-xs mt-1" style={{ color: data.globalTextColor }}>
            {data.l218_t2 || 'Vinh danh tài năng hội họa nhí'}
          </p>
        </div>
      </div>
    )
  },
  {
    id: 219,
    name: 'Đội Bóng Vô Địch',
    tags: ['3anh', 'tuyenduong', 'thethao'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-blue-950 p-4 flex flex-col" style={{ color: data.globalTextColor }}>
        <div className="grid grid-cols-3 gap-1 h-1/2 mb-6">
          {[1, 2, 3].map(i => (
            <div key={i} className="rounded-lg overflow-hidden border border-blue-400/30">
              <div 
                className="w-full h-full img-slot"
                style={{ backgroundImage: `url(${data[`l219_i${i}`]})` }}
                onClick={() => onImageClick(`l219_i${i}`)}
              />
            </div>
          ))}
        </div>
        <div className="text-center">
          <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-anton text-5xl text-white uppercase italic tracking-widest" style={{ color: data.globalTextColor || 'white' }}>
            {data.l219_t1 || 'CHAMPIONS'}
          </h2>
          <div contentEditable suppressContentEditableWarning={true} spellCheck={false} className="inline-block px-4 py-1 bg-blue-600 text-white font-bevietnam font-bold text-xs rounded-full mt-2 pointer-events-auto">
            {data.l219_t2 || 'Vô địch giải bóng đá học sinh'}
          </div>
        </div>
      </div>
    )
  },
  {
    id: 220,
    name: 'Trái Tim Nhân Ái',
    tags: ['1anh', 'tuyenduong'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-pink-50 p-8 flex flex-col items-center justify-center" style={{ color: data.globalTextColor }}>
        <div className="w-64 h-64 rounded-full overflow-hidden border-8 border-pink-300 shadow-2xl mb-8">
          <div 
            className="w-full h-full img-slot"
            style={{ backgroundImage: `url(${data.l220_i1})` }}
            onClick={() => onImageClick('l220_i1')}
          />
        </div>
        <div className="text-center">
          <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-pacifico text-4xl text-pink-600" style={{ color: data.globalTextColor || '#db2777' }}>
            {data.l220_t1 || 'Kind Heart'}
          </h2>
          <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam text-pink-400 text-sm mt-2" style={{ color: data.globalTextColor }}>
            {data.l220_t2 || 'Vinh danh học sinh có tấm lòng nhân ái'}
          </p>
        </div>
      </div>
    )
  },
  {
    id: 221,
    name: 'Sáng Kiến Cộng Đồng',
    tags: ['2anh', 'tuyenduong'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-indigo-950 p-6 flex flex-col" style={{ color: data.globalTextColor }}>
        <div className="flex-1 flex gap-4 mb-6">
          <div className="flex-1 rounded-3xl overflow-hidden border-2 border-indigo-400 shadow-2xl">
            <div 
              className="w-full h-full img-slot"
              style={{ backgroundImage: `url(${data.l221_i1})` }}
              onClick={() => onImageClick('l221_i1')}
            />
          </div>
          <div className="flex-1 rounded-3xl overflow-hidden border-2 border-indigo-400 shadow-2xl">
            <div 
              className="w-full h-full img-slot"
              style={{ backgroundImage: `url(${data.l221_i2})` }}
              onClick={() => onImageClick('l221_i2')}
            />
          </div>
        </div>
        <div className="text-center">
          <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-anton text-4xl text-indigo-300 uppercase" style={{ color: data.globalTextColor || '#a5b4fc' }}>
            {data.l221_t1 || 'COMMUNITY HEROES'}
          </h2>
        </div>
      </div>
    )
  },
  {
    id: 222,
    name: 'MVP Đối Đầu',
    tags: ['2anh', 'thethao'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-black p-6 flex flex-col relative" style={{ color: data.globalTextColor }}>
        <SportBorder color={data.globalTextColor || '#f97316'} />
        <div className="flex-1 flex gap-2 mb-6 z-10">
          <div className="flex-1 relative overflow-hidden group">
            <div 
              className="w-full h-full img-slot skew-x-[-10deg] border-r-4 border-orange-500"
              style={{ backgroundImage: `url(${data.l222_i1})` }}
              onClick={() => onImageClick('l222_i1')}
            />
            <div contentEditable suppressContentEditableWarning={true} spellCheck={false} className="absolute bottom-4 left-4 bg-orange-500 text-black px-3 py-1 font-anton text-xl italic uppercase pointer-events-auto">PLAYER 1</div>
          </div>
          <div className="flex-1 relative overflow-hidden group">
            <div 
              className="w-full h-full img-slot skew-x-[-10deg] border-l-4 border-blue-500"
              style={{ backgroundImage: `url(${data.l222_i2})` }}
              onClick={() => onImageClick('l222_i2')}
            />
            <div contentEditable suppressContentEditableWarning={true} spellCheck={false} className="absolute bottom-4 right-4 bg-blue-500 text-white px-3 py-1 font-anton text-xl italic uppercase text-right pointer-events-auto">PLAYER 2</div>
          </div>
        </div>
        <div className="text-center">
          <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-anton text-5xl text-white uppercase italic tracking-tighter" style={{ color: data.globalTextColor || 'white' }}>
            {data.l222_t1 || 'THE ULTIMATE MVP'}
          </h2>
          <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam text-orange-500 font-bold uppercase tracking-widest mt-1" style={{ color: data.globalTextColor || '#f97316' }}>
            {data.l222_t2 || 'TRẬN ĐẤU CỦA NHỮNG HUYỀN THOẠI'}
          </p>
        </div>
      </div>
    )
  },
  {
    id: 223,
    name: 'Song Sát Vô Địch',
    tags: ['2anh', 'thethao'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-gradient-to-b from-red-900 to-black p-6 flex flex-col" style={{ color: data.globalTextColor }}>
        <div className="flex-1 flex flex-col gap-4 mb-6">
          <div className="flex-1 rounded-2xl overflow-hidden border-4 border-white shadow-[0_0_30px_rgba(255,255,255,0.2)]">
            <div 
              className="w-full h-full img-slot"
              style={{ backgroundImage: `url(${data.l223_i1})` }}
              onClick={() => onImageClick('l223_i1')}
            />
          </div>
          <div className="flex-1 rounded-2xl overflow-hidden border-4 border-white shadow-[0_0_30px_rgba(255,255,255,0.2)]">
            <div 
              className="w-full h-full img-slot"
              style={{ backgroundImage: `url(${data.l223_i2})` }}
              onClick={() => onImageClick('l223_i2')}
            />
          </div>
        </div>
        <div className="text-center">
          <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-anton text-4xl text-white uppercase tracking-widest" style={{ color: data.globalTextColor || 'white' }}>
            {data.l223_t1 || 'DYNAMIC DUO'}
          </h2>
          <div className="h-1 w-24 bg-red-600 mx-auto my-2" />
          <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam text-red-500 font-black" style={{ color: data.globalTextColor || '#ef4444' }}>
            {data.l223_t2 || 'NHÀ VÔ ĐỊCH GIẢI ĐẤU'}
          </p>
        </div>
      </div>
    )
  },
  {
    id: 224,
    name: 'MVP Tỏa Sáng',
    tags: ['2anh', 'thethao'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-zinc-950 p-6 flex flex-col" style={{ color: data.globalTextColor }}>
        <div className="flex-1 flex gap-4 mb-6">
          <div className="flex-1 rounded-t-full overflow-hidden border-b-8 border-yellow-500">
            <div 
              className="w-full h-full img-slot"
              style={{ backgroundImage: `url(${data.l224_i1})` }}
              onClick={() => onImageClick('l224_i1')}
            />
          </div>
          <div className="flex-1 rounded-t-full overflow-hidden border-b-8 border-yellow-500">
            <div 
              className="w-full h-full img-slot"
              style={{ backgroundImage: `url(${data.l224_i2})` }}
              onClick={() => onImageClick('l224_i2')}
            />
          </div>
        </div>
        <div className="text-center">
          <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-anton text-5xl text-yellow-500 uppercase italic" style={{ color: data.globalTextColor || '#eab308' }}>
            {data.l224_t1 || 'MVP STARS'}
          </h2>
          <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam text-white/60 text-xs mt-2" style={{ color: data.globalTextColor || 'rgba(255,255,255,0.6)' }}>
            {data.l224_t2 || 'VINH DANH NHỮNG CHIẾN BINH XUẤT SẮC NHẤT'}
          </p>
        </div>
      </div>
    )
  },
  {
    id: 225,
    name: 'Đấu Trường Rực Lửa',
    tags: ['2anh', 'thethao'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-orange-900 p-6 flex flex-col" style={{ color: data.globalTextColor }}>
        <div className="flex-1 grid grid-cols-2 gap-4 mb-6">
          <div className="rounded-3xl overflow-hidden border-4 border-orange-400 shadow-2xl relative">
            <div 
              className="w-full h-full img-slot"
              style={{ backgroundImage: `url(${data.l225_i1})` }}
              onClick={() => onImageClick('l225_i1')}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-orange-900/80 to-transparent" />
          </div>
          <div className="rounded-3xl overflow-hidden border-4 border-orange-400 shadow-2xl relative">
            <div 
              className="w-full h-full img-slot"
              style={{ backgroundImage: `url(${data.l225_i2})` }}
              onClick={() => onImageClick('l225_i2')}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-orange-900/80 to-transparent" />
          </div>
        </div>
        <div className="text-center">
          <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-anton text-4xl text-orange-400 uppercase tracking-tighter" style={{ color: data.globalTextColor || '#fb923c' }}>
            {data.l225_t1 || 'ARENA CHAMPIONS'}
          </h2>
        </div>
      </div>
    )
  },
  {
    id: 226,
    name: 'MVP Kỷ Lục',
    tags: ['2anh', 'thethao'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-blue-900 p-6 flex flex-col" style={{ color: data.globalTextColor }}>
        <div className="flex-1 flex flex-col gap-2 mb-6">
          <div className="flex-1 rounded-l-[100px] rounded-r-2xl overflow-hidden border-4 border-blue-400">
            <div 
              className="w-full h-full img-slot"
              style={{ backgroundImage: `url(${data.l226_i1})` }}
              onClick={() => onImageClick('l226_i1')}
            />
          </div>
          <div className="flex-1 rounded-r-[100px] rounded-l-2xl overflow-hidden border-4 border-blue-400">
            <div 
              className="w-full h-full img-slot"
              style={{ backgroundImage: `url(${data.l226_i2})` }}
              onClick={() => onImageClick('l226_i2')}
            />
          </div>
        </div>
        <div className="text-center">
          <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-anton text-4xl text-white uppercase italic" style={{ color: data.globalTextColor || 'white' }}>
            {data.l226_t1 || 'RECORD BREAKERS'}
          </h2>
        </div>
      </div>
    )
  },
  {
    id: 227,
    name: 'Chiến Thắng Kép',
    tags: ['2anh', 'thethao'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-emerald-900 p-6 flex flex-col" style={{ color: data.globalTextColor }}>
        <div className="flex-1 flex gap-4 mb-6">
          <div className="flex-1 rounded-2xl overflow-hidden border-4 border-emerald-400 shadow-2xl transform -rotate-3">
            <div 
              className="w-full h-full img-slot"
              style={{ backgroundImage: `url(${data.l227_i1})` }}
              onClick={() => onImageClick('l227_i1')}
            />
          </div>
          <div className="flex-1 rounded-2xl overflow-hidden border-4 border-emerald-400 shadow-2xl transform rotate-3">
            <div 
              className="w-full h-full img-slot"
              style={{ backgroundImage: `url(${data.l227_i2})` }}
              onClick={() => onImageClick('l227_i2')}
            />
          </div>
        </div>
        <div className="text-center">
          <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-anton text-4xl text-emerald-400 uppercase tracking-widest" style={{ color: data.globalTextColor || '#34d399' }}>
            {data.l227_t1 || 'DOUBLE VICTORY'}
          </h2>
        </div>
      </div>
    )
  },
  {
    id: 228,
    name: 'MVP Đẳng Cấp',
    tags: ['2anh', 'thethao'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-white p-6 flex flex-col" style={{ color: data.globalTextColor }}>
        <div className="flex-1 flex flex-col gap-4 mb-6">
          <div className="flex-1 rounded-xl overflow-hidden border-8 border-slate-100 shadow-inner">
            <div 
              className="w-full h-full img-slot"
              style={{ backgroundImage: `url(${data.l228_i1})` }}
              onClick={() => onImageClick('l228_i1')}
            />
          </div>
          <div className="flex-1 rounded-xl overflow-hidden border-8 border-slate-100 shadow-inner">
            <div 
              className="w-full h-full img-slot"
              style={{ backgroundImage: `url(${data.l228_i2})` }}
              onClick={() => onImageClick('l228_i2')}
            />
          </div>
        </div>
        <div className="text-center">
          <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-anton text-4xl text-slate-900 uppercase tracking-tighter" style={{ color: data.globalTextColor }}>
            {data.l228_t1 || 'ELITE MVP'}
          </h2>
          <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam text-slate-400 text-xs mt-1" style={{ color: data.globalTextColor }}>
            {data.l228_t2 || 'VINH DANH NHỮNG TÀI NĂNG ĐẲNG CẤP NHẤT'}
          </p>
        </div>
      </div>
    )
  },
  {
    id: 229,
    name: 'Sức Mạnh Đồng Đội',
    tags: ['2anh', 'thethao'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-indigo-900 p-6 flex flex-col" style={{ color: data.globalTextColor }}>
        <div className="flex-1 flex gap-2 mb-6">
          <div className="flex-1 rounded-3xl overflow-hidden border-2 border-indigo-400 shadow-2xl">
            <div 
              className="w-full h-full img-slot"
              style={{ backgroundImage: `url(${data.l229_i1})` }}
              onClick={() => onImageClick('l229_i1')}
            />
          </div>
          <div className="flex-1 rounded-3xl overflow-hidden border-2 border-indigo-400 shadow-2xl">
            <div 
              className="w-full h-full img-slot"
              style={{ backgroundImage: `url(${data.l229_i2})` }}
              onClick={() => onImageClick('l229_i2')}
            />
          </div>
        </div>
        <div className="text-center">
          <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-anton text-4xl text-indigo-300 uppercase italic" style={{ color: data.globalTextColor || '#a5b4fc' }}>
            {data.l229_t1 || 'TEAM POWER'}
          </h2>
        </div>
      </div>
    )
  },
  {
    id: 230,
    name: 'MVP Huyền Thoại',
    tags: ['2anh', 'thethao'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-black p-6 flex flex-col border-[12px] border-yellow-600 relative" style={{ color: data.globalTextColor }}>
        <SportBorder color={data.globalTextColor || '#ca8a04'} />
        <div className="flex-1 flex flex-col gap-4 mb-6 z-10">
          <div className="flex-1 rounded-2xl overflow-hidden border-2 border-yellow-600 shadow-[0_0_20px_rgba(202,138,4,0.3)]">
            <div 
              className="w-full h-full img-slot"
              style={{ backgroundImage: `url(${data.l230_i1})` }}
              onClick={() => onImageClick('l230_i1')}
            />
          </div>
          <div className="flex-1 rounded-2xl overflow-hidden border-2 border-yellow-600 shadow-[0_0_20px_rgba(202,138,4,0.3)]">
            <div 
              className="w-full h-full img-slot"
              style={{ backgroundImage: `url(${data.l230_i2})` }}
              onClick={() => onImageClick('l230_i2')}
            />
          </div>
        </div>
        <div className="text-center">
          <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-anton text-4xl text-yellow-600 uppercase tracking-widest" style={{ color: data.globalTextColor || '#ca8a04' }}>
            {data.l230_t1 || 'LEGENDARY MVP'}
          </h2>
        </div>
      </div>
    )
  },
  {
    id: 231,
    name: 'Bứt Phá Giới Hạn',
    tags: ['2anh', 'thethao'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-rose-900 p-6 flex flex-col" style={{ color: data.globalTextColor }}>
        <div className="flex-1 grid grid-cols-2 gap-4 mb-6">
          <div className="rounded-full overflow-hidden border-4 border-rose-400 shadow-2xl">
            <div 
              className="w-full h-full img-slot"
              style={{ backgroundImage: `url(${data.l231_i1})` }}
              onClick={() => onImageClick('l231_i1')}
            />
          </div>
          <div className="rounded-full overflow-hidden border-4 border-rose-400 shadow-2xl">
            <div 
              className="w-full h-full img-slot"
              style={{ backgroundImage: `url(${data.l231_i2})` }}
              onClick={() => onImageClick('l231_i2')}
            />
          </div>
        </div>
        <div className="text-center">
          <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-anton text-4xl text-rose-400 uppercase italic" style={{ color: data.globalTextColor || '#fb7185' }}>
            {data.l231_t1 || 'LIMIT BREAKER'}
          </h2>
        </div>
      </div>
    )
  },
  {
    id: 232,
    name: 'Tam Tấu Vô Địch',
    tags: ['3anh', 'thethao'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-black p-6 flex flex-col" style={{ color: data.globalTextColor }}>
        <div className="flex-1 grid grid-cols-3 gap-2 mb-6">
          {[1, 2, 3].map(i => (
            <div key={i} className="rounded-2xl overflow-hidden border-2 border-orange-500 shadow-lg relative group">
              <div 
                className="w-full h-full img-slot"
                style={{ backgroundImage: `url(${data[`l232_i${i}`]})` }}
                onClick={() => onImageClick(`l232_i${i}`)}
              />
              <div contentEditable suppressContentEditableWarning={true} spellCheck={false} className="absolute bottom-0 left-0 right-0 bg-orange-500 text-black font-anton text-xs py-1 text-center italic pointer-events-auto">MVP {i}</div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-anton text-5xl text-white uppercase italic tracking-tighter" style={{ color: data.globalTextColor || 'white' }}>
            {data.l232_t1 || 'THE CHAMPION TRIO'}
          </h2>
          <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam text-orange-500 font-bold uppercase tracking-widest mt-1" style={{ color: data.globalTextColor || '#f97316' }}>
            {data.l232_t2 || 'SỨC MẠNH CỦA SỰ ĐOÀN KẾT'}
          </p>
        </div>
      </div>
    )
  },
  {
    id: 233,
    name: 'Bộ Ba MVP',
    tags: ['3anh', 'thethao'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-gradient-to-br from-blue-900 to-black p-6 flex flex-col" style={{ color: data.globalTextColor }}>
        <div className="flex-1 flex flex-col gap-2 mb-6">
          <div className="flex-[2] rounded-2xl overflow-hidden border-2 border-blue-400 shadow-2xl">
            <div 
              className="w-full h-full img-slot"
              style={{ backgroundImage: `url(${data.l233_i1})` }}
              onClick={() => onImageClick('l233_i1')}
            />
          </div>
          <div className="flex-1 flex gap-2">
            <div className="flex-1 rounded-2xl overflow-hidden border-2 border-blue-400 shadow-2xl">
              <div 
                className="w-full h-full img-slot"
                style={{ backgroundImage: `url(${data.l233_i2})` }}
                onClick={() => onImageClick('l233_i2')}
              />
            </div>
            <div className="flex-1 rounded-2xl overflow-hidden border-2 border-blue-400 shadow-2xl">
              <div 
                className="w-full h-full img-slot"
                style={{ backgroundImage: `url(${data.l233_i3})` }}
                onClick={() => onImageClick('l233_i3')}
              />
            </div>
          </div>
        </div>
        <div className="text-center">
          <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-anton text-4xl text-white uppercase tracking-widest" style={{ color: data.globalTextColor || 'white' }}>
            {data.l233_t1 || 'MVP ELITE SQUAD'}
          </h2>
        </div>
      </div>
    )
  },
  {
    id: 234,
    name: 'Đội Hình Ngôi Sao',
    tags: ['3anh', 'thethao'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-zinc-950 p-6 flex flex-col" style={{ color: data.globalTextColor }}>
        <div className="flex-1 grid grid-cols-2 grid-rows-2 gap-2 mb-6">
          <div className="col-span-2 rounded-2xl overflow-hidden border-2 border-yellow-500 shadow-2xl">
            <div 
              className="w-full h-full img-slot"
              style={{ backgroundImage: `url(${data.l234_i1})` }}
              onClick={() => onImageClick('l234_i1')}
            />
          </div>
          <div className="rounded-2xl overflow-hidden border-2 border-yellow-500 shadow-2xl">
            <div 
              className="w-full h-full img-slot"
              style={{ backgroundImage: `url(${data.l234_i2})` }}
              onClick={() => onImageClick('l234_i2')}
            />
          </div>
          <div className="rounded-2xl overflow-hidden border-2 border-yellow-500 shadow-2xl">
            <div 
              className="w-full h-full img-slot"
              style={{ backgroundImage: `url(${data.l234_i3})` }}
              onClick={() => onImageClick('l234_i3')}
            />
          </div>
        </div>
        <div className="text-center">
          <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-anton text-4xl text-yellow-500 uppercase italic tracking-tighter" style={{ color: data.globalTextColor || '#eab308' }}>
            {data.l234_t1 || 'ALL-STAR TEAM'}
          </h2>
        </div>
      </div>
    )
  },
  {
    id: 235,
    name: 'MVP Đỉnh Cao',
    tags: ['3anh', 'thethao'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-red-950 p-6 flex flex-col" style={{ color: data.globalTextColor }}>
        <div className="flex-1 flex gap-2 mb-6">
          <div className="flex-1 rounded-full overflow-hidden border-4 border-red-500 shadow-2xl">
            <div 
              className="w-full h-full img-slot"
              style={{ backgroundImage: `url(${data.l235_i1})` }}
              onClick={() => onImageClick('l235_i1')}
            />
          </div>
          <div className="flex-1 rounded-full overflow-hidden border-4 border-red-500 shadow-2xl">
            <div 
              className="w-full h-full img-slot"
              style={{ backgroundImage: `url(${data.l235_i2})` }}
              onClick={() => onImageClick('l235_i2')}
            />
          </div>
          <div className="flex-1 rounded-full overflow-hidden border-4 border-red-500 shadow-2xl">
            <div 
              className="w-full h-full img-slot"
              style={{ backgroundImage: `url(${data.l235_i3})` }}
              onClick={() => onImageClick('l235_i3')}
            />
          </div>
        </div>
        <div className="text-center">
          <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-anton text-4xl text-red-500 uppercase tracking-widest" style={{ color: data.globalTextColor || '#ef4444' }}>
            {data.l235_t1 || 'PEAK PERFORMANCE'}
          </h2>
        </div>
      </div>
    )
  },
  {
    id: 236,
    name: 'Đấu Trường MVP',
    tags: ['3anh', 'thethao'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-slate-900 p-6 flex flex-col" style={{ color: data.globalTextColor }}>
        <div className="flex-1 grid grid-cols-3 gap-1 mb-6">
          {[1, 2, 3].map(i => (
            <div key={i} className="overflow-hidden border-x border-slate-700 grayscale hover:grayscale-0 transition-all duration-700">
              <div 
                className="w-full h-full img-slot"
                style={{ backgroundImage: `url(${data[`l236_i${i}`]})` }}
                onClick={() => onImageClick(`l236_i${i}`)}
              />
            </div>
          ))}
        </div>
        <div className="text-center">
          <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-anton text-5xl text-white uppercase tracking-tighter" style={{ color: data.globalTextColor || 'white' }}>
            {data.l236_t1 || 'MVP ARENA'}
          </h2>
          <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam text-slate-400 text-xs mt-1" style={{ color: data.globalTextColor }}>
            {data.l236_t2 || 'NƠI NHỮNG HUYỀN THOẠI ĐƯỢC SINH RA'}
          </p>
        </div>
      </div>
    )
  },
  {
    id: 237,
    name: 'MVP Vinh Quang',
    tags: ['3anh', 'thethao'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-white p-6 flex flex-col border-[16px] border-orange-500" style={{ color: data.globalTextColor }}>
        <div className="flex-1 grid grid-cols-3 gap-4 mb-6">
          {[1, 2, 3].map(i => (
            <div key={i} className="rounded-xl overflow-hidden border-2 border-slate-200 shadow-xl">
              <div 
                className="w-full h-full img-slot"
                style={{ backgroundImage: `url(${data[`l237_i${i}`]})` }}
                onClick={() => onImageClick(`l237_i${i}`)}
              />
            </div>
          ))}
        </div>
        <div className="text-center">
          <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-anton text-4xl text-orange-600 uppercase italic tracking-tighter" style={{ color: data.globalTextColor || '#ea580c' }}>
            {data.l237_t1 || 'GLORIOUS MVP'}
          </h2>
        </div>
      </div>
    )
  },
  {
    id: 238,
    name: 'Sức Mạnh Tam Tấu',
    tags: ['3anh', 'thethao'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-indigo-950 p-6 flex flex-col" style={{ color: data.globalTextColor }}>
        <div className="flex-1 flex gap-2 mb-6">
          <div className="flex-1 rounded-l-full overflow-hidden border-2 border-indigo-400">
            <div 
              className="w-full h-full img-slot"
              style={{ backgroundImage: `url(${data.l238_i1})` }}
              onClick={() => onImageClick('l238_i1')}
            />
          </div>
          <div className="flex-1 overflow-hidden border-2 border-indigo-400">
            <div 
              className="w-full h-full img-slot"
              style={{ backgroundImage: `url(${data.l238_i2})` }}
              onClick={() => onImageClick('l238_i2')}
            />
          </div>
          <div className="flex-1 rounded-r-full overflow-hidden border-2 border-indigo-400">
            <div 
              className="w-full h-full img-slot"
              style={{ backgroundImage: `url(${data.l238_i3})` }}
              onClick={() => onImageClick('l238_i3')}
            />
          </div>
        </div>
        <div className="text-center">
          <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-anton text-4xl text-indigo-300 uppercase tracking-widest" style={{ color: data.globalTextColor || '#a5b4fc' }}>
            {data.l238_t1 || 'TRIO POWER'}
          </h2>
        </div>
      </div>
    )
  },
  {
    id: 239,
    name: 'MVP Vô Song',
    tags: ['3anh', 'thethao'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-black p-6 flex flex-col" style={{ color: data.globalTextColor }}>
        <div className="flex-1 flex flex-col gap-2 mb-6">
          <div className="flex-1 flex gap-2">
            <div className="flex-1 rounded-2xl overflow-hidden border-2 border-red-600 shadow-2xl">
              <div 
                className="w-full h-full img-slot"
                style={{ backgroundImage: `url(${data.l239_i1})` }}
                onClick={() => onImageClick('l239_i1')}
              />
            </div>
            <div className="flex-1 rounded-2xl overflow-hidden border-2 border-red-600 shadow-2xl">
              <div 
                className="w-full h-full img-slot"
                style={{ backgroundImage: `url(${data.l239_i2})` }}
                onClick={() => onImageClick('l239_i2')}
              />
            </div>
          </div>
          <div className="flex-1 rounded-2xl overflow-hidden border-2 border-red-600 shadow-2xl">
            <div 
              className="w-full h-full img-slot"
              style={{ backgroundImage: `url(${data.l239_i3})` }}
              onClick={() => onImageClick('l239_i3')}
            />
          </div>
        </div>
        <div className="text-center">
          <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-anton text-5xl text-red-600 uppercase italic tracking-tighter" style={{ color: data.globalTextColor || '#dc2626' }}>
            {data.l239_t1 || 'UNRIVALED MVP'}
          </h2>
        </div>
      </div>
    )
  },
  {
    id: 240,
    name: 'Đội Hình Chiến Thắng',
    tags: ['3anh', 'thethao'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-emerald-950 p-6 flex flex-col" style={{ color: data.globalTextColor }}>
        <div className="flex-1 grid grid-cols-3 gap-2 mb-6">
          {[1, 2, 3].map(i => (
            <div key={i} className="rounded-full overflow-hidden border-4 border-emerald-400 shadow-2xl aspect-square">
              <div 
                className="w-full h-full img-slot"
                style={{ backgroundImage: `url(${data[`l240_i${i}`]})` }}
                onClick={() => onImageClick(`l240_i${i}`)}
              />
            </div>
          ))}
        </div>
        <div className="text-center">
          <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-anton text-4xl text-emerald-400 uppercase tracking-widest" style={{ color: data.globalTextColor || '#34d399' }}>
            {data.l240_t1 || 'VICTORY SQUAD'}
          </h2>
        </div>
      </div>
    )
  },
  {
    id: 241,
    name: 'MVP Bất Bại',
    tags: ['3anh', 'thethao'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-black p-0 flex flex-col relative" style={{ color: data.globalTextColor }}>
        <SportBorder color={data.globalTextColor || '#f97316'} className="z-20" />
        <div className="flex-1 grid grid-cols-3 gap-0">
          {[1, 2, 3].map(i => (
            <div key={i} className="relative group overflow-hidden">
              <div 
                className="w-full h-full img-slot grayscale hover:grayscale-0 transition-all duration-500"
                style={{ backgroundImage: `url(${data[`l241_i${i}`]})` }}
                onClick={() => onImageClick(`l241_i${i}`)}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60" />
            </div>
          ))}
        </div>
        <div className="absolute bottom-10 left-0 right-0 text-center px-6">
          <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-anton text-6xl text-white uppercase italic tracking-tighter drop-shadow-2xl" style={{ color: data.globalTextColor || 'white' }}>
            {data.l241_t1 || 'INVINCIBLE MVP'}
          </h2>
          <div className="h-1 w-48 bg-orange-500 mx-auto mt-2" />
        </div>
      </div>
    )
  },
  {
    id: 242,
    name: 'Kỷ Niệm Polaroid',
    tags: ['2anh', 'kyyeu'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-[#fdfcf0] p-8 flex flex-col items-center justify-center space-y-8" style={{ color: data.globalTextColor }}>
        <div className="flex gap-4 rotate-[-3deg]">
          <div className="bg-white p-3 pb-12 shadow-xl border border-gray-200 w-48 h-64 relative">
            <div className="w-full h-full img-slot bg-gray-100" style={{ backgroundImage: `url(${data.l242_i1})` }} onClick={() => onImageClick('l242_i1')} />
          </div>
          <div className="bg-white p-3 pb-12 shadow-xl border border-gray-200 w-48 h-64 relative rotate-[6deg] translate-y-4">
            <div className="w-full h-full img-slot bg-gray-100" style={{ backgroundImage: `url(${data.l242_i2})` }} onClick={() => onImageClick('l242_i2')} />
          </div>
        </div>
        <div className="text-center pt-8">
          <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-dancing text-4xl text-gray-800" style={{ color: data.globalTextColor }}>
            {data.l242_t1 || 'Thanh xuân rực rỡ'}
          </h2>
          <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam text-gray-500 text-sm mt-4 italic max-w-[280px]" style={{ color: data.globalTextColor }}>
            {data.l242_t2 || '"Cảm ơn vì đã là một phần trong thanh xuân của tớ"'}
          </p>
        </div>
      </div>
    )
  },
  {
    id: 243,
    name: 'Góc Nhỏ Kỷ Niệm',
    tags: ['3anh', 'kyyeu'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-[#fafafa] p-6 flex flex-col" style={{ color: data.globalTextColor }}>
        <div className="grid grid-cols-2 grid-rows-2 gap-3 flex-1">
          <div className="row-span-2 rounded-2xl overflow-hidden shadow-lg border-4 border-white">
            <div className="w-full h-full img-slot" style={{ backgroundImage: `url(${data.l243_i1})` }} onClick={() => onImageClick('l243_i1')} />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg border-4 border-white">
            <div className="w-full h-full img-slot" style={{ backgroundImage: `url(${data.l243_i2})` }} onClick={() => onImageClick('l243_i2')} />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg border-4 border-white">
            <div className="w-full h-full img-slot" style={{ backgroundImage: `url(${data.l243_i3})` }} onClick={() => onImageClick('l243_i3')} />
          </div>
        </div>
        <div className="mt-6 text-right">
          <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-pacifico text-3xl text-blue-600" style={{ color: data.globalTextColor || '#2563eb' }}>
            {data.l243_t1 || 'Mùa hè năm ấy'}
          </h2>
          <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam text-gray-400 text-xs mt-1" style={{ color: data.globalTextColor }}>
            {data.l243_t2 || 'Lưu giữ những khoảnh khắc đẹp nhất của chúng ta'}
          </p>
        </div>
      </div>
    )
  },
  {
    id: 244,
    name: 'Scrapbook Tuổi Trẻ',
    tags: ['4anh', 'kyyeu'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-[#f3f4f6] p-4 relative overflow-hidden" style={{ color: data.globalTextColor }}>
        <div className="absolute top-0 left-0 w-32 h-32 bg-yellow-200/50 rounded-full -translate-x-16 -translate-y-16" />
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-blue-200/50 rounded-full translate-x-24 translate-y-24" />
        <div className="grid grid-cols-2 gap-2 h-[75%] z-10 relative">
          {[1, 2, 3, 4].map(i => (
            <div key={i} className={`rounded-lg overflow-hidden border-2 border-white shadow-md ${i % 2 === 0 ? 'rotate-2' : '-rotate-2'}`}>
              <div className="w-full h-full img-slot" style={{ backgroundImage: `url(${data[`l244_i${i}`]})` }} onClick={() => onImageClick(`l244_i${i}`)} />
            </div>
          ))}
        </div>
        <div className="mt-4 text-center z-10 relative">
          <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-dancing text-3xl text-gray-800" style={{ color: data.globalTextColor }}>
            {data.l244_t1 || 'Our Story'}
          </h2>
          <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam text-gray-500 text-[10px] uppercase tracking-widest" style={{ color: data.globalTextColor }}>
            {data.l244_t2 || 'Class of 2024 • Forever Together'}
          </p>
        </div>
      </div>
    )
  },
  {
    id: 245,
    name: 'Minimalist Memories',
    tags: ['1anh', 'kyyeu'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-white p-12 flex flex-col items-center" style={{ color: data.globalTextColor }}>
        <div className="w-full aspect-[3/4] bg-gray-50 rounded-sm overflow-hidden shadow-sm mb-12">
          <div className="w-full h-full img-slot" style={{ backgroundImage: `url(${data.l245_i1})` }} onClick={() => onImageClick('l245_i1')} />
        </div>
        <div className="w-full space-y-4">
          <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam font-light text-5xl tracking-tighter text-gray-900" style={{ color: data.globalTextColor }}>
            {data.l245_t1 || 'YESTERDAY'}
          </h2>
          <div className="h-[1px] w-full bg-gray-200" />
          <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam text-gray-400 text-sm leading-relaxed" style={{ color: data.globalTextColor }}>
            {data.l245_t2 || 'Những ngày tháng ấy, chúng ta đã từng rực rỡ như thế.'}
          </p>
        </div>
      </div>
    )
  },
  {
    id: 246,
    name: 'Collage Nghệ Thuật',
    tags: ['5anh', 'kyyeu'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-[#1a1a1a] p-2" style={{ color: data.globalTextColor }}>
        <div className="grid grid-cols-6 grid-rows-6 gap-1 h-full">
          <div className="col-span-4 row-span-4 overflow-hidden">
            <div className="w-full h-full img-slot" style={{ backgroundImage: `url(${data.l246_i1})` }} onClick={() => onImageClick('l246_i1')} />
          </div>
          <div className="col-span-2 row-span-2 overflow-hidden">
            <div className="w-full h-full img-slot" style={{ backgroundImage: `url(${data.l246_i2})` }} onClick={() => onImageClick('l246_i2')} />
          </div>
          <div className="col-span-2 row-span-2 overflow-hidden">
            <div className="w-full h-full img-slot" style={{ backgroundImage: `url(${data.l246_i3})` }} onClick={() => onImageClick('l246_i3')} />
          </div>
          <div className="col-span-3 row-span-2 overflow-hidden relative">
            <div className="w-full h-full img-slot" style={{ backgroundImage: `url(${data.l246_i4})` }} onClick={() => onImageClick('l246_i4')} />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-4">
              <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-dancing text-white text-xl text-center leading-tight">
                {data.l246_t1 || '"Thanh xuân là một cơn mưa rào..."'}
              </p>
            </div>
          </div>
          <div className="col-span-3 row-span-2 overflow-hidden">
            <div className="w-full h-full img-slot" style={{ backgroundImage: `url(${data.l246_i5})` }} onClick={() => onImageClick('l246_i5')} />
          </div>
        </div>
      </div>
    )
  },
  {
    id: 247,
    name: 'Bản Tin Lớp Học',
    tags: ['3anh', 'kyyeu'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-[#fff] p-6 border-4 border-double border-gray-800" style={{ color: data.globalTextColor }}>
        <div className="border-b-2 border-gray-800 pb-2 mb-4 text-center">
          <h1 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-anton text-4xl uppercase tracking-widest pointer-events-auto">CLASS NEWS</h1>
          <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="text-[10px] font-bevietnam font-bold uppercase tracking-[0.3em] pointer-events-auto">Special Edition • Class of 2024</p>
        </div>
        <div className="flex gap-4 h-[60%] mb-4">
          <div className="flex-[2] overflow-hidden border border-gray-300">
            <div className="w-full h-full img-slot" style={{ backgroundImage: `url(${data.l247_i1})` }} onClick={() => onImageClick('l247_i1')} />
          </div>
          <div className="flex-1 flex flex-col gap-2">
            <div className="flex-1 overflow-hidden border border-gray-300">
              <div className="w-full h-full img-slot" style={{ backgroundImage: `url(${data.l247_i2})` }} onClick={() => onImageClick('l247_i2')} />
            </div>
            <div className="flex-1 overflow-hidden border border-gray-300">
              <div className="w-full h-full img-slot" style={{ backgroundImage: `url(${data.l247_i3})` }} onClick={() => onImageClick('l247_i3')} />
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam font-black text-xl leading-tight" style={{ color: data.globalTextColor }}>
            {data.l247_t1 || 'NHỮNG GƯƠNG MẶT THÂN QUEN'}
          </h2>
          <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam text-gray-600 text-xs leading-relaxed line-clamp-3" style={{ color: data.globalTextColor }}>
            {data.l247_t2 || 'Mỗi người một vẻ, nhưng chúng ta là một gia đình. Những kỷ niệm này sẽ mãi là hành trang quý giá nhất.'}
          </p>
        </div>
      </div>
    )
  },
  {
    id: 248,
    name: 'Phim Thanh Xuân',
    tags: ['4anh', 'kyyeu'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-black p-4 flex flex-col" style={{ color: data.globalTextColor }}>
        <div className="flex-1 grid grid-rows-4 gap-2 mb-4">
          {[1, 2, 3, 4].map(i => (
            <div key={i} className="relative overflow-hidden group">
              <div className="w-full h-full img-slot opacity-80 group-hover:opacity-100 transition-opacity" style={{ backgroundImage: `url(${data[`l248_i${i}`]})` }} onClick={() => onImageClick(`l248_i${i}`)} />
              <div contentEditable suppressContentEditableWarning={true} spellCheck={false} className="absolute top-2 left-2 text-[8px] text-white/50 font-mono pointer-events-auto">00:0{i}:24:12</div>
            </div>
          ))}
        </div>
        <div className="text-center space-y-1">
          <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam font-bold text-white text-2xl tracking-[0.2em] uppercase" style={{ color: data.globalTextColor || 'white' }}>
            {data.l248_t1 || 'YOUTH MOVIE'}
          </h2>
          <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam text-white/40 text-[8px] uppercase tracking-widest" style={{ color: data.globalTextColor || 'rgba(255,255,255,0.4)' }}>
            {data.l248_t2 || 'Directed by Friendship • Starring Us'}
          </p>
        </div>
      </div>
    )
  },
  {
    id: 249,
    name: 'Ghi Chép Cuối Cấp',
    tags: ['2anh', 'kyyeu'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-[#fff9eb] p-8 relative" style={{ color: data.globalTextColor }}>
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
        <div className="relative z-10 h-full flex flex-col">
          <div className="flex-1 flex flex-col gap-6">
            <div className="flex-1 bg-white p-2 shadow-lg border-t-4 border-blue-500 transform -rotate-2">
              <div className="w-full h-full img-slot" style={{ backgroundImage: `url(${data.l249_i1})` }} onClick={() => onImageClick('l249_i1')} />
            </div>
            <div className="flex-1 bg-white p-2 shadow-lg border-t-4 border-pink-500 transform rotate-2">
              <div className="w-full h-full img-slot" style={{ backgroundImage: `url(${data.l249_i2})` }} onClick={() => onImageClick('l249_i2')} />
            </div>
          </div>
          <div className="mt-8 space-y-2">
            <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-dancing text-4xl text-blue-900" style={{ color: data.globalTextColor || '#1e3a8a' }}>
              {data.l249_t1 || 'Lưu bút ngày xanh'}
            </h2>
            <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam text-gray-600 text-sm italic" style={{ color: data.globalTextColor }}>
              {data.l249_t2 || '"Nếu có một điều ước, tớ ước thời gian ngừng trôi tại đây."'}
            </p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 250,
    name: 'Bản Đồ Kỷ Niệm',
    tags: ['3anh', 'kyyeu'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-[#f8fafc] p-6 flex flex-col" style={{ color: data.globalTextColor }}>
        <div className="flex-1 relative">
          <div className="absolute top-0 left-0 w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-xl z-30">
            <div className="w-full h-full img-slot" style={{ backgroundImage: `url(${data.l250_i1})` }} onClick={() => onImageClick('l250_i1')} />
          </div>
          <div className="absolute top-20 right-0 w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-xl z-20">
            <div className="w-full h-full img-slot" style={{ backgroundImage: `url(${data.l250_i2})` }} onClick={() => onImageClick('l250_i2')} />
          </div>
          <div className="absolute bottom-0 left-10 w-56 h-56 rounded-full overflow-hidden border-4 border-white shadow-xl z-10">
            <div className="w-full h-full img-slot" style={{ backgroundImage: `url(${data.l250_i3})` }} onClick={() => onImageClick('l250_i3')} />
          </div>
        </div>
        <div className="mt-4 text-center">
          <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam font-black text-3xl text-slate-800 tracking-tighter" style={{ color: data.globalTextColor }}>
            {data.l250_t1 || 'JOURNEY OF US'}
          </h2>
          <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam text-slate-400 text-[10px] uppercase tracking-[0.4em]" style={{ color: data.globalTextColor }}>
            {data.l250_t2 || 'Class of 2024 • Forever Memories'}
          </p>
        </div>
      </div>
    )
  },
  {
    id: 251,
    name: 'Khung Hình Nghệ Thuật',
    tags: ['2anh', 'kyyeu'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-[#111] p-10 flex flex-col justify-between" style={{ color: data.globalTextColor }}>
        <div className="flex-1 flex gap-10 items-center">
          <div className="flex-1 aspect-[3/4] border border-white/20 p-2 relative">
            <div className="w-full h-full img-slot grayscale" style={{ backgroundImage: `url(${data.l251_i1})` }} onClick={() => onImageClick('l251_i1')} />
            <div contentEditable suppressContentEditableWarning={true} spellCheck={false} className="absolute -bottom-4 -right-4 font-bevietnam text-white/10 text-6xl font-black pointer-events-auto">01</div>
          </div>
          <div className="flex-1 aspect-[3/4] border border-white/20 p-2 relative translate-y-10">
            <div className="w-full h-full img-slot" style={{ backgroundImage: `url(${data.l251_i2})` }} onClick={() => onImageClick('l251_i2')} />
            <div contentEditable suppressContentEditableWarning={true} spellCheck={false} className="absolute -top-4 -left-4 font-bevietnam text-white/10 text-6xl font-black pointer-events-auto">02</div>
          </div>
        </div>
        <div className="text-center pt-12">
          <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam font-thin text-4xl text-white tracking-[0.3em] uppercase" style={{ color: data.globalTextColor || 'white' }}>
            {data.l251_t1 || 'ARTISTIC'}
          </h2>
          <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam text-white/30 text-[10px] mt-2 italic" style={{ color: data.globalTextColor || 'rgba(255,255,255,0.3)' }}>
            {data.l251_t2 || '"Nghệ thuật là lưu giữ những gì chân thật nhất"'}
          </p>
        </div>
      </div>
    )
  },
  {
    id: 252,
    name: 'Mosaic Kỷ Niệm',
    tags: ['5anh', 'kyyeu'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-slate-50 p-4" style={{ color: data.globalTextColor }}>
        <div className="grid grid-cols-4 grid-rows-4 gap-2 h-[80%] mb-4">
          <div className="col-span-2 row-span-2 rounded-lg overflow-hidden shadow-md">
            <div className="w-full h-full img-slot" style={{ backgroundImage: `url(${data.l252_i1})` }} onClick={() => onImageClick('l252_i1')} />
          </div>
          <div className="col-span-2 row-span-1 rounded-lg overflow-hidden shadow-md">
            <div className="w-full h-full img-slot" style={{ backgroundImage: `url(${data.l252_i2})` }} onClick={() => onImageClick('l252_i2')} />
          </div>
          <div className="col-span-1 row-span-2 rounded-lg overflow-hidden shadow-md">
            <div className="w-full h-full img-slot" style={{ backgroundImage: `url(${data.l252_i3})` }} onClick={() => onImageClick('l252_i3')} />
          </div>
          <div className="col-span-1 row-span-1 rounded-lg overflow-hidden shadow-md">
            <div className="w-full h-full img-slot" style={{ backgroundImage: `url(${data.l252_i4})` }} onClick={() => onImageClick('l252_i4')} />
          </div>
          <div className="col-span-2 row-span-1 rounded-lg overflow-hidden shadow-md">
            <div className="w-full h-full img-slot" style={{ backgroundImage: `url(${data.l252_i5})` }} onClick={() => onImageClick('l252_i5')} />
          </div>
        </div>
        <div className="text-center">
          <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-dancing text-3xl text-slate-800" style={{ color: data.globalTextColor }}>
            {data.l252_t1 || 'Mảnh ghép thanh xuân'}
          </h2>
          <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam text-slate-400 text-[10px]" style={{ color: data.globalTextColor }}>
            {data.l252_t2 || 'Mỗi mảnh ghép là một câu chuyện đáng nhớ'}
          </p>
        </div>
      </div>
    )
  },
  {
    id: 253,
    name: 'Film Strip Memories',
    tags: ['4anh', 'kyyeu'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-[#1a1a1a] p-4 flex flex-col justify-center" style={{ color: data.globalTextColor }}>
        <div className="bg-black py-4 flex flex-col gap-1 border-y-8 border-dashed border-white/20">
          <div className="flex gap-1 h-40">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="flex-1 overflow-hidden relative group">
                <div className="w-full h-full img-slot opacity-70 group-hover:opacity-100 transition-opacity" style={{ backgroundImage: `url(${data[`l253_i${i}`]})` }} onClick={() => onImageClick(`l253_i${i}`)} />
                <div contentEditable suppressContentEditableWarning={true} spellCheck={false} className="absolute top-1 left-1 text-[6px] text-white/30 pointer-events-auto">KODAK 400TX</div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 text-center">
          <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam font-black text-white text-4xl italic tracking-tighter" style={{ color: data.globalTextColor || 'white' }}>
            {data.l253_t1 || 'UNFORGETTABLE'}
          </h2>
          <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam text-white/50 text-xs mt-2" style={{ color: data.globalTextColor || 'rgba(255,255,255,0.5)' }}>
            {data.l253_t2 || 'Những thước phim không bao giờ phai màu'}
          </p>
        </div>
      </div>
    )
  },
  {
    id: 254,
    name: 'Sổ Tay Kỷ Niệm',
    tags: ['3anh', 'kyyeu'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-[#fff] p-8 flex flex-col" style={{ color: data.globalTextColor }}>
        <div className="flex-1 border-l-4 border-red-200 pl-6 relative">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px)', backgroundSize: '100% 30px' }} />
          <div className="space-y-6 relative z-10">
            <div className="w-48 h-48 bg-white p-2 shadow-lg border border-gray-100 rotate-[-2deg]">
              <div className="w-full h-full img-slot" style={{ backgroundImage: `url(${data.l254_i1})` }} onClick={() => onImageClick('l254_i1')} />
            </div>
            <div className="w-40 h-40 bg-white p-2 shadow-lg border border-gray-100 rotate-[3deg] self-end ml-auto">
              <div className="w-full h-full img-slot" style={{ backgroundImage: `url(${data.l254_i2})` }} onClick={() => onImageClick('l254_i2')} />
            </div>
            <div className="w-32 h-32 bg-white p-2 shadow-lg border border-gray-100 rotate-[-1deg]">
              <div className="w-full h-full img-slot" style={{ backgroundImage: `url(${data.l254_i3})` }} onClick={() => onImageClick('l254_i3')} />
            </div>
          </div>
        </div>
        <div className="mt-6">
          <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-dancing text-4xl text-gray-800" style={{ color: data.globalTextColor }}>
            {data.l254_t1 || 'Ghi chép tuổi trẻ'}
          </h2>
          <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam text-gray-400 text-xs mt-2" style={{ color: data.globalTextColor }}>
            {data.l254_t2 || 'Nơi lưu giữ những dòng tâm sự cuối cấp'}
          </p>
        </div>
      </div>
    )
  },
  {
    id: 255,
    name: 'Vòng Tròn Tình Bạn',
    tags: ['4anh', 'kyyeu'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-blue-50 p-6 flex flex-col items-center justify-center" style={{ color: data.globalTextColor }}>
        <div className="relative w-72 h-72 mb-8">
          {[1, 2, 3, 4].map(i => (
            <div key={i} className={`absolute w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-xl z-${i * 10} ${
              i === 1 ? 'top-0 left-0' : 
              i === 2 ? 'top-0 right-0' : 
              i === 3 ? 'bottom-0 left-0' : 'bottom-0 right-0'
            }`}>
              <div className="w-full h-full img-slot" style={{ backgroundImage: `url(${data[`l255_i${i}`]})` }} onClick={() => onImageClick(`l255_i${i}`)} />
            </div>
          ))}
          <div className="absolute inset-0 flex items-center justify-center z-50">
            <div className="bg-white/90 backdrop-blur-sm rounded-full p-4 shadow-lg border border-blue-100">
              <span contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-pacifico text-blue-600 text-xl pointer-events-auto">Together</span>
            </div>
          </div>
        </div>
        <div className="text-center">
          <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam font-black text-2xl text-blue-900 uppercase tracking-tighter" style={{ color: data.globalTextColor || '#1e3a8a' }}>
            {data.l255_t1 || 'FRIENDSHIP CIRCLE'}
          </h2>
          <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam text-blue-400 text-xs mt-1" style={{ color: data.globalTextColor || '#60a5fa' }}>
            {data.l255_t2 || 'Mãi mãi là bạn thân của nhau'}
          </p>
        </div>
      </div>
    )
  },
  {
    id: 256,
    name: 'Bảng Màu Thanh Xuân',
    tags: ['5anh', 'kyyeu'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-white p-4 flex flex-col" style={{ color: data.globalTextColor }}>
        <div className="flex-1 flex flex-col gap-1">
          {[1, 2, 3, 4, 5].map(i => (
            <div key={i} className="flex-1 flex gap-1">
              <div className="flex-1 overflow-hidden">
                <div className="w-full h-full img-slot" style={{ backgroundImage: `url(${data[`l256_i${i}`]})` }} onClick={() => onImageClick(`l256_i${i}`)} />
              </div>
              <div className={`w-12 h-full ${
                i === 1 ? 'bg-pink-400' : 
                i === 2 ? 'bg-blue-400' : 
                i === 3 ? 'bg-yellow-400' : 
                i === 4 ? 'bg-green-400' : 'bg-purple-400'
              }`} />
            </div>
          ))}
        </div>
        <div className="mt-4 flex justify-between items-end">
          <div>
            <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam font-black text-2xl text-gray-900" style={{ color: data.globalTextColor }}>
              {data.l256_t1 || 'COLORS OF YOUTH'}
            </h2>
            <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam text-gray-400 text-[10px] uppercase tracking-widest pointer-events-auto" style={{ color: data.globalTextColor }}>
              {data.l256_t2 || 'Every color has a memory'}
            </p>
          </div>
          <div contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-mono text-[10px] text-gray-300 pointer-events-auto">#CLASS_OF_2024</div>
        </div>
      </div>
    )
  },
  {
    id: 257,
    name: 'Góc Nhìn Nghệ Thuật',
    tags: ['2anh', 'kyyeu'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-[#f0f0f0] p-10 flex flex-col" style={{ color: data.globalTextColor }}>
        <div className="flex-1 relative">
          <div className="absolute top-0 left-0 w-[80%] h-[60%] border-8 border-white shadow-2xl z-20 overflow-hidden">
            <div className="w-full h-full img-slot" style={{ backgroundImage: `url(${data.l257_i1})` }} onClick={() => onImageClick('l257_i1')} />
          </div>
          <div className="absolute bottom-0 right-0 w-[80%] h-[60%] border-8 border-white shadow-2xl z-10 overflow-hidden">
            <div className="w-full h-full img-slot grayscale" style={{ backgroundImage: `url(${data.l257_i2})` }} onClick={() => onImageClick('l257_i2')} />
          </div>
        </div>
        <div className="mt-8">
          <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam font-thin text-5xl text-gray-900 tracking-tighter" style={{ color: data.globalTextColor }}>
            {data.l257_t1 || 'PERSPECTIVE'}
          </h2>
          <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam text-gray-400 text-xs mt-2 italic" style={{ color: data.globalTextColor }}>
            {data.l257_t2 || '"Nhìn lại để thấy chúng ta đã trưởng thành thế nào"'}
          </p>
        </div>
      </div>
    )
  },
  {
    id: 258,
    name: 'Kỷ Niệm Vuông',
    tags: ['4anh', 'kyyeu'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-white p-6 flex flex-col" style={{ color: data.globalTextColor }}>
        <div className="grid grid-cols-2 gap-4 aspect-square mb-8">
          {[1, 2, 3, 4].map(i => (
            <div key={i} className="overflow-hidden bg-gray-100 rounded-sm">
              <div className="w-full h-full img-slot" style={{ backgroundImage: `url(${data[`l258_i${i}`]})` }} onClick={() => onImageClick(`l258_i${i}`)} />
            </div>
          ))}
        </div>
        <div className="flex-1 flex flex-col justify-center border-t border-gray-100">
          <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam font-bold text-2xl text-gray-800" style={{ color: data.globalTextColor }}>
            {data.l258_t1 || 'SQUARE MEMORIES'}
          </h2>
          <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam text-gray-400 text-xs mt-1" style={{ color: data.globalTextColor }}>
            {data.l258_t2 || 'Lưu giữ trọn vẹn từng khoảnh khắc'}
          </p>
        </div>
      </div>
    )
  },
  {
    id: 259,
    name: 'Ánh Dương Cuối Cấp',
    tags: ['3anh', 'kyyeu'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-gradient-to-br from-orange-50 to-white p-6 flex flex-col" style={{ color: data.globalTextColor }}>
        <div className="flex-1 flex gap-4 mb-6">
          <div className="flex-1 flex flex-col gap-4">
            <div className="flex-1 rounded-3xl overflow-hidden border-4 border-white shadow-xl">
              <div className="w-full h-full img-slot" style={{ backgroundImage: `url(${data.l259_i1})` }} onClick={() => onImageClick('l259_i1')} />
            </div>
            <div className="flex-1 rounded-3xl overflow-hidden border-4 border-white shadow-xl">
              <div className="w-full h-full img-slot" style={{ backgroundImage: `url(${data.l259_i2})` }} onClick={() => onImageClick('l259_i2')} />
            </div>
          </div>
          <div className="flex-1 rounded-3xl overflow-hidden border-4 border-white shadow-xl">
            <div className="w-full h-full img-slot" style={{ backgroundImage: `url(${data.l259_i3})` }} onClick={() => onImageClick('l259_i3')} />
          </div>
        </div>
        <div className="text-center">
          <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-pacifico text-4xl text-orange-500" style={{ color: data.globalTextColor || '#f97316' }}>
            {data.l259_t1 || 'Golden Days'}
          </h2>
          <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam text-orange-300 text-sm mt-2" style={{ color: data.globalTextColor || '#fdba74' }}>
            {data.l259_t2 || 'Những ngày nắng vàng rực rỡ nhất'}
          </p>
        </div>
      </div>
    )
  },
  {
    id: 260,
    name: 'Tạp Chí Học Đường',
    tags: ['2anh', 'kyyeu'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-white p-0 flex flex-col relative" style={{ color: data.globalTextColor }}>
        <div className="absolute top-10 left-10 z-20 text-white mix-blend-difference">
          <h1 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-anton text-8xl leading-none tracking-tighter pointer-events-auto">YOUTH</h1>
          <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam font-bold text-xl tracking-[0.5em] mt-2 pointer-events-auto">MAGAZINE</p>
        </div>
        <div className="flex-1 flex flex-col">
          <div className="flex-[2] overflow-hidden">
            <div className="w-full h-full img-slot" style={{ backgroundImage: `url(${data.l260_i1})` }} onClick={() => onImageClick('l260_i1')} />
          </div>
          <div className="flex-1 flex bg-black">
            <div className="flex-1 overflow-hidden opacity-80">
              <div className="w-full h-full img-slot" style={{ backgroundImage: `url(${data.l260_i2})` }} onClick={() => onImageClick('l260_i2')} />
            </div>
            <div className="flex-1 p-6 flex flex-col justify-center">
              <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam font-black text-white text-xl leading-tight" style={{ color: data.globalTextColor || 'white' }}>
                {data.l260_t1 || 'THE BEST CLASS EVER'}
              </h2>
              <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam text-white/50 text-[10px] mt-2" style={{ color: data.globalTextColor || 'rgba(255,255,255,0.5)' }}>
                {data.l260_t2 || 'Khám phá những câu chuyện thú vị đằng sau mỗi gương mặt.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 261,
    name: 'Kỷ Niệm Tối Giản',
    tags: ['3anh', 'kyyeu'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-[#fafafa] p-12 flex flex-col" style={{ color: data.globalTextColor }}>
        <div className="flex-1 flex flex-col gap-8">
          <div className="flex-1 flex gap-8">
            <div className="flex-1 aspect-square bg-gray-100 rounded-full overflow-hidden">
              <div className="w-full h-full img-slot" style={{ backgroundImage: `url(${data.l261_i1})` }} onClick={() => onImageClick('l261_i1')} />
            </div>
            <div className="flex-1 flex flex-col justify-center">
              <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam font-black text-4xl text-gray-900 tracking-tighter" style={{ color: data.globalTextColor }}>
                {data.l261_t1 || 'US.'}
              </h2>
              <div className="h-1 w-12 bg-gray-900 mt-2" />
            </div>
          </div>
          <div className="flex-1 flex gap-8">
            <div className="flex-1 overflow-hidden rounded-2xl border border-gray-200">
              <div className="w-full h-full img-slot" style={{ backgroundImage: `url(${data.l261_i2})` }} onClick={() => onImageClick('l261_i2')} />
            </div>
            <div className="flex-1 overflow-hidden rounded-2xl border border-gray-200">
              <div className="w-full h-full img-slot" style={{ backgroundImage: `url(${data.l261_i3})` }} onClick={() => onImageClick('l261_i3')} />
            </div>
          </div>
        </div>
        <div className="mt-12 text-center">
          <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam text-gray-400 text-sm italic" style={{ color: data.globalTextColor }}>
            {data.l261_t2 || '"Đừng khóc vì nó kết thúc, hãy cười vì nó đã xảy ra."'}
          </p>
        </div>
      </div>
    )
  },
  {
    id: 262,
    name: 'Hành Trình Đỏ',
    tags: ['1anh', 'ngoaikhoa'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-gradient-to-br from-red-600 to-red-900 p-6 flex flex-col relative" style={{ color: data.globalTextColor }}>
        <HeritageBorder color={data.globalTextColor || '#facc15'} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,_transparent_70%)] opacity-30 pointer-events-none" />
        <WavingFlag className="absolute top-4 right-4 w-12 h-8 z-20" />
        <div className="flex-1 rounded-lg overflow-hidden border-4 border-yellow-400 shadow-2xl z-10 relative">
          <div className="w-full h-full img-slot" style={{ backgroundImage: `url(${data.l262_i1})` }} onClick={() => onImageClick('l262_i1')} />
          <div contentEditable suppressContentEditableWarning={true} spellCheck={false} className="absolute top-4 left-4 bg-yellow-400 text-red-700 px-4 py-1 font-bevietnam font-black text-sm skew-x-[-12deg] pointer-events-auto">
            ĐỊA CHỈ ĐỎ
          </div>
        </div>
        <div className="mt-6 text-center z-10">
          <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam font-black text-3xl text-yellow-400 uppercase tracking-tight" style={{ color: data.globalTextColor || '#facc15' }}>
            {data.l262_t1 || 'HÀNH TRÌNH VỀ NGUỒN'}
          </h2>
          <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam text-white text-xs mt-2 font-bold" style={{ color: data.globalTextColor || 'white' }}>
            {data.l262_t2 || 'Tự hào truyền thống - Tiếp bước cha anh'}
          </p>
        </div>
      </div>
    )
  },
  {
    id: 263,
    name: 'Tự Hào Việt Nam',
    tags: ['2anh', 'ngoaikhoa'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-gradient-to-b from-white to-red-50 p-6 flex flex-col relative" style={{ color: data.globalTextColor }}>
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-red-600/10 to-transparent pointer-events-none" />
        <div className="flex gap-2 h-[60%] mb-6 z-10">
          <div className="flex-1 rounded-2xl overflow-hidden border-4 border-red-600">
            <div className="w-full h-full img-slot" style={{ backgroundImage: `url(${data.l263_i1})` }} onClick={() => onImageClick('l263_i1')} />
          </div>
          <div className="flex-1 rounded-2xl overflow-hidden border-4 border-red-600">
            <div className="w-full h-full img-slot" style={{ backgroundImage: `url(${data.l263_i2})` }} onClick={() => onImageClick('l263_i2')} />
          </div>
        </div>
        <div className="flex-1 flex flex-col justify-center items-center text-center space-y-3">
          <div className="w-16 h-1 bg-red-600" />
          <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam font-black text-4xl text-red-600 tracking-tighter" style={{ color: data.globalTextColor || '#dc2626' }}>
            {data.l263_t1 || 'TÔI YÊU VIỆT NAM'}
          </h2>
          <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam text-gray-500 text-xs font-medium" style={{ color: data.globalTextColor }}>
            {data.l263_t2 || 'Hoạt động ngoại khóa tìm hiểu lịch sử dân tộc'}
          </p>
        </div>
      </div>
    )
  },
  {
    id: 264,
    name: 'Di Tích Lịch Sử',
    tags: ['3anh', 'ngoaikhoa'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-gradient-to-br from-stone-50 to-stone-200 p-4 flex flex-col" style={{ color: data.globalTextColor }}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(153,27,27,0.05)_0%,_transparent_50%)] pointer-events-none" />
        <div className="grid grid-cols-3 gap-2 h-1/2 mb-6">
          {[1, 2, 3].map(i => (
            <div key={i} className="rounded-xl overflow-hidden border-2 border-red-800 shadow-lg">
              <div className="w-full h-full img-slot" style={{ backgroundImage: `url(${data[`l264_i${i}`]})` }} onClick={() => onImageClick(`l264_i${i}`)} />
            </div>
          ))}
        </div>
        <div className="bg-red-800 p-6 rounded-2xl text-white text-center shadow-xl">
          <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam font-black text-2xl uppercase tracking-widest" style={{ color: data.globalTextColor || 'white' }}>
            {data.l264_t1 || 'DI TÍCH LỊCH SỬ'}
          </h2>
          <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam text-red-200 text-[10px] mt-2 font-bold" style={{ color: data.globalTextColor || '#fecaca' }}>
            {data.l264_t2 || 'Mỗi bước chân đi, một bài học quý'}
          </p>
        </div>
      </div>
    )
  },
  {
    id: 265,
    name: 'Ngoại Khóa Rực Rỡ',
    tags: ['2anh', 'ngoaikhoa'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-gradient-to-br from-yellow-300 via-yellow-400 to-orange-400 p-6 flex flex-col" style={{ color: data.globalTextColor }}>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/white-diamond.png')] opacity-20 pointer-events-none" />
        <div className="flex-1 flex flex-col gap-4 mb-6">
          <div className="flex-1 rounded-3xl overflow-hidden border-4 border-white shadow-2xl relative">
            <div className="w-full h-full img-slot" style={{ backgroundImage: `url(${data.l265_i1})` }} onClick={() => onImageClick('l265_i1')} />
          </div>
          <div className="flex-1 rounded-3xl overflow-hidden border-4 border-white shadow-2xl relative">
            <div className="w-full h-full img-slot" style={{ backgroundImage: `url(${data.l265_i2})` }} onClick={() => onImageClick('l265_i2')} />
          </div>
        </div>
        <div className="text-center">
          <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam font-black text-4xl text-red-700 uppercase italic tracking-tighter" style={{ color: data.globalTextColor || '#b91c1c' }}>
            {data.l265_t1 || 'NGOẠI KHÓA VUI'}
          </h2>
          <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam text-red-900/60 text-xs font-bold" style={{ color: data.globalTextColor }}>
            {data.l265_t2 || 'Trải nghiệm thực tế - Gắn kết tình bạn'}
          </p>
        </div>
      </div>
    )
  },
  {
    id: 266,
    name: 'Uống Nước Nhớ Nguồn',
    tags: ['1anh', 'ngoaikhoa'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-gradient-to-b from-red-800 to-black p-8 flex flex-col items-center justify-center relative" style={{ color: data.globalTextColor }}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(220,38,38,0.2)_0%,_transparent_100%)] pointer-events-none" />
        <WavingFlag className="absolute top-6 left-6 w-16 h-10 z-20" />
        <div className="w-64 h-64 rounded-full overflow-hidden border-8 border-yellow-500 shadow-[0_0_50px_rgba(234,179,8,0.3)] mb-10">
          <div className="w-full h-full img-slot" style={{ backgroundImage: `url(${data.l266_i1})` }} onClick={() => onImageClick('l266_i1')} />
        </div>
        <div className="text-center space-y-4">
          <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam font-black text-4xl text-yellow-500 uppercase" style={{ color: data.globalTextColor || '#eab308' }}>
            {data.l266_t1 || 'UỐNG NƯỚC NHỚ NGUỒN'}
          </h2>
          <div className="h-1 w-32 bg-yellow-500 mx-auto" />
          <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam text-white text-sm font-medium italic" style={{ color: data.globalTextColor || 'white' }}>
            {data.l266_t2 || 'Tri ân các anh hùng liệt sĩ'}
          </p>
        </div>
      </div>
    )
  },
  {
    id: 267,
    name: 'Hành Trình Di Sản',
    tags: ['3anh', 'ngoaikhoa'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-gradient-to-br from-stone-100 to-stone-200 p-6 flex flex-col" style={{ color: data.globalTextColor }}>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')] opacity-30 pointer-events-none" />
        <div className="flex-1 flex gap-2 mb-6">
          <div className="flex-1 rounded-2xl overflow-hidden border-2 border-stone-300">
            <div className="w-full h-full img-slot" style={{ backgroundImage: `url(${data.l267_i1})` }} onClick={() => onImageClick('l267_i1')} />
          </div>
          <div className="flex-[1.5] rounded-2xl overflow-hidden border-2 border-stone-300">
            <div className="w-full h-full img-slot" style={{ backgroundImage: `url(${data.l267_i2})` }} onClick={() => onImageClick('l267_i2')} />
          </div>
          <div className="flex-1 rounded-2xl overflow-hidden border-2 border-stone-300">
            <div className="w-full h-full img-slot" style={{ backgroundImage: `url(${data.l267_i3})` }} onClick={() => onImageClick('l267_i3')} />
          </div>
        </div>
        <div className="text-center">
          <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam font-black text-3xl text-red-800 uppercase tracking-widest" style={{ color: data.globalTextColor || '#991b1b' }}>
            {data.l267_t1 || 'HÀNH TRÌNH DI SẢN'}
          </h2>
          <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam text-stone-500 text-xs mt-2" style={{ color: data.globalTextColor }}>
            {data.l267_t2 || 'Khám phá vẻ đẹp văn hóa Việt Nam'}
          </p>
        </div>
      </div>
    )
  },
  {
    id: 268,
    name: 'Sức Trẻ Việt Nam',
    tags: ['2anh', 'ngoaikhoa'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-gradient-to-br from-red-500 to-red-700 p-6 flex flex-col relative" style={{ color: data.globalTextColor }}>
        <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-yellow-400/30 to-transparent rounded-bl-full pointer-events-none" />
        <div className="flex-1 flex gap-4 mb-6 z-10">
          <div className="flex-1 rounded-3xl overflow-hidden border-4 border-white shadow-2xl transform -rotate-3">
            <div className="w-full h-full img-slot" style={{ backgroundImage: `url(${data.l268_i1})` }} onClick={() => onImageClick('l268_i1')} />
          </div>
          <div className="flex-1 rounded-3xl overflow-hidden border-4 border-white shadow-2xl transform rotate-3">
            <div className="w-full h-full img-slot" style={{ backgroundImage: `url(${data.l268_i2})` }} onClick={() => onImageClick('l268_i2')} />
          </div>
        </div>
        <div className="text-center z-10">
          <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam font-black text-5xl text-white uppercase italic tracking-tighter" style={{ color: data.globalTextColor || 'white' }}>
            {data.l268_t1 || 'SỨC TRẺ'}
          </h2>
          <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam text-yellow-400 font-bold text-sm mt-2" style={{ color: data.globalTextColor || '#facc15' }}>
            {data.l268_t2 || 'Xung kích - Tình nguyện - Sáng tạo'}
          </p>
        </div>
      </div>
    )
  },
  {
    id: 269,
    name: 'Về Nguồn',
    tags: ['1anh', 'ngoaikhoa'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-gradient-to-b from-white to-stone-50 p-10 flex flex-col border-[20px] border-red-700 relative" style={{ color: data.globalTextColor }}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(185,28,28,0.05)_0%,_transparent_70%)] pointer-events-none" />
        <WavingFlag className="absolute top-[-10px] left-1/2 -translate-x-1/2 w-20 h-12 z-20" />
        <div className="flex-1 overflow-hidden border-4 border-red-700 shadow-2xl">
          <div className="w-full h-full img-slot" style={{ backgroundImage: `url(${data.l269_i1})` }} onClick={() => onImageClick('l269_i1')} />
        </div>
        <div className="mt-8 text-center">
          <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam font-black text-4xl text-red-700 uppercase tracking-tight" style={{ color: data.globalTextColor || '#b91c1c' }}>
            {data.l269_t1 || 'VỀ NGUỒN'}
          </h2>
          <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam text-gray-500 text-sm mt-2 font-bold" style={{ color: data.globalTextColor }}>
            {data.l269_t2 || 'Tìm về những giá trị lịch sử bất diệt'}
          </p>
        </div>
      </div>
    )
  },
  {
    id: 270,
    name: 'Ngoại Khóa Trải Nghiệm',
    tags: ['3anh', 'ngoaikhoa'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-gradient-to-br from-emerald-600 to-teal-900 p-6 flex flex-col" style={{ color: data.globalTextColor }}>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.05)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.05)_50%,rgba(255,255,255,0.05)_75%,transparent_75%,transparent)] bg-[length:20px_20px] pointer-events-none" />
        <div className="flex-1 grid grid-cols-2 grid-rows-2 gap-2 mb-6">
          <div className="col-span-2 rounded-2xl overflow-hidden border-2 border-white">
            <div className="w-full h-full img-slot" style={{ backgroundImage: `url(${data.l270_i1})` }} onClick={() => onImageClick('l270_i1')} />
          </div>
          <div className="rounded-2xl overflow-hidden border-2 border-white">
            <div className="w-full h-full img-slot" style={{ backgroundImage: `url(${data.l270_i2})` }} onClick={() => onImageClick('l270_i2')} />
          </div>
          <div className="rounded-2xl overflow-hidden border-2 border-white">
            <div className="w-full h-full img-slot" style={{ backgroundImage: `url(${data.l270_i3})` }} onClick={() => onImageClick('l270_i3')} />
          </div>
        </div>
        <div className="text-center">
          <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam font-black text-3xl text-white uppercase tracking-widest" style={{ color: data.globalTextColor || 'white' }}>
            {data.l270_t1 || 'TRẢI NGHIỆM THỰC TẾ'}
          </h2>
        </div>
      </div>
    )
  },
  {
    id: 271,
    name: 'Tự Hào Dân Tộc',
    tags: ['2anh', 'ngoaikhoa'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-gradient-to-br from-red-700 via-red-800 to-red-950 p-6 flex flex-col relative" style={{ color: data.globalTextColor }}>
        <HeritageBorder color={data.globalTextColor || '#facc15'} />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(250,204,21,0.15)_0%,_transparent_50%)] pointer-events-none" />
        <WavingFlag className="absolute top-4 left-4 w-12 h-8 z-20" />
        <div className="flex-1 flex flex-col gap-4 mb-6 z-10">
          <div className="flex-1 rounded-2xl overflow-hidden border-2 border-yellow-400 shadow-2xl">
            <div className="w-full h-full img-slot" style={{ backgroundImage: `url(${data.l271_i1})` }} onClick={() => onImageClick('l271_i1')} />
          </div>
          <div className="flex-1 rounded-2xl overflow-hidden border-2 border-yellow-400 shadow-2xl">
            <div className="w-full h-full img-slot" style={{ backgroundImage: `url(${data.l271_i2})` }} onClick={() => onImageClick('l271_i2')} />
          </div>
        </div>
        <div className="text-center z-10">
          <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam font-black text-3xl text-yellow-400 uppercase tracking-tighter" style={{ color: data.globalTextColor || '#facc15' }}>
            {data.l271_t1 || 'TỰ HÀO DÂN TỘC'}
          </h2>
        </div>
      </div>
    )
  },
  {
    id: 272,
    name: 'Hào Khí Việt Nam',
    tags: ['3anh', 'ngoaikhoa'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-gradient-to-b from-black via-stone-900 to-red-950 p-6 flex flex-col" style={{ color: data.globalTextColor }}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_rgba(220,38,38,0.15)_0%,_transparent_70%)] pointer-events-none" />
        <div className="flex-1 grid grid-cols-3 gap-2 mb-6">
          {[1, 2, 3].map(i => (
            <div key={i} className="rounded-lg overflow-hidden border border-red-600 shadow-[0_0_15px_rgba(220,38,38,0.3)]">
              <div className="w-full h-full img-slot" style={{ backgroundImage: `url(${data[`l272_i${i}`]})` }} onClick={() => onImageClick(`l272_i${i}`)} />
            </div>
          ))}
        </div>
        <div className="text-center">
          <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam font-black text-4xl text-red-600 uppercase tracking-widest italic" style={{ color: data.globalTextColor || '#dc2626' }}>
            {data.l272_t1 || 'HÀO KHÍ VIỆT NAM'}
          </h2>
          <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam text-white/60 text-[10px] mt-2" style={{ color: data.globalTextColor || 'rgba(255,255,255,0.6)' }}>
            {data.l272_t2 || 'Sức mạnh từ lịch sử ngàn năm'}
          </p>
        </div>
      </div>
    )
  },
  {
    id: 273,
    name: 'Hành Trình Kết Nối',
    tags: ['4anh', 'ngoaikhoa'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-gradient-to-br from-blue-800 to-indigo-950 p-4 flex flex-col" style={{ color: data.globalTextColor }}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(59,130,246,0.2)_0%,_transparent_60%)] pointer-events-none" />
        <div className="grid grid-cols-2 gap-2 h-[70%] mb-4">
          {[1, 2, 3, 4].map(i => (
            <div key={i} className="rounded-2xl overflow-hidden border-2 border-blue-400">
              <div className="w-full h-full img-slot" style={{ backgroundImage: `url(${data[`l273_i${i}`]})` }} onClick={() => onImageClick(`l273_i${i}`)} />
            </div>
          ))}
        </div>
        <div className="text-center">
          <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam font-black text-2xl text-white uppercase tracking-tighter" style={{ color: data.globalTextColor || 'white' }}>
            {data.l273_t1 || 'HÀNH TRÌNH KẾT NỐI'}
          </h2>
          <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam text-blue-300 text-[10px]" style={{ color: data.globalTextColor || '#93c5fd' }}>
            {data.l273_t2 || 'Gắn kết sức trẻ - Lan tỏa yêu thương'}
          </p>
        </div>
      </div>
    )
  },
  {
    id: 274,
    name: 'Việt Nam Trong Tim Tôi',
    tags: ['1anh', 'ngoaikhoa'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-gradient-to-b from-white to-red-50 p-8 flex flex-col items-center justify-center relative" style={{ color: data.globalTextColor }}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(220,38,38,0.05)_0%,_transparent_60%)] pointer-events-none" />
        <WavingFlag className="absolute top-4 left-4 w-14 h-9 z-20" />
        <div className="w-full aspect-square rounded-3xl overflow-hidden border-8 border-red-50 shadow-2xl mb-8 relative">
          <div className="w-full h-full img-slot" style={{ backgroundImage: `url(${data.l274_i1})` }} onClick={() => onImageClick('l274_i1')} />
          <div className="absolute top-4 right-4 w-12 h-12 bg-red-600 rounded-full flex items-center justify-center shadow-lg">
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-yellow-400"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
          </div>
        </div>
        <div className="text-center">
          <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam font-black text-3xl text-red-600" style={{ color: data.globalTextColor || '#dc2626' }}>
            {data.l274_t1 || 'VIỆT NAM TRONG TIM TÔI'}
          </h2>
          <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam text-gray-400 text-xs mt-2" style={{ color: data.globalTextColor }}>
            {data.l274_t2 || 'Tự hào là người con đất Việt'}
          </p>
        </div>
      </div>
    )
  },
  {
    id: 275,
    name: 'Ký Ức Thời Chiến',
    tags: ['2anh', 'ngoaikhoa'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-gradient-to-br from-stone-800 to-black p-6 flex flex-col" style={{ color: data.globalTextColor }}>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')] opacity-20 pointer-events-none" />
        <div className="flex-1 flex flex-col gap-4 mb-6">
          <div className="flex-1 rounded-sm overflow-hidden border-4 border-stone-500 shadow-2xl sepia-[0.5]">
            <div className="w-full h-full img-slot" style={{ backgroundImage: `url(${data.l275_i1})` }} onClick={() => onImageClick('l275_i1')} />
          </div>
          <div className="flex-1 rounded-sm overflow-hidden border-4 border-stone-500 shadow-2xl sepia-[0.5]">
            <div className="w-full h-full img-slot" style={{ backgroundImage: `url(${data.l275_i2})` }} onClick={() => onImageClick('l275_i2')} />
          </div>
        </div>
        <div className="text-center border-t border-stone-700 pt-4">
          <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam font-black text-2xl text-stone-300 uppercase tracking-[0.2em]" style={{ color: data.globalTextColor || '#d6d3d1' }}>
            {data.l275_t1 || 'KÝ ỨC THỜI CHIẾN'}
          </h2>
          <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam text-stone-500 text-[10px] mt-1" style={{ color: data.globalTextColor }}>
            {data.l275_t2 || 'Sống lại những năm tháng hào hùng của dân tộc'}
          </p>
        </div>
      </div>
    )
  },
  {
    id: 276,
    name: 'Sắc Đỏ Tình Nguyện',
    tags: ['3anh', 'ngoaikhoa'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-gradient-to-b from-red-50 to-white p-6 flex flex-col" style={{ color: data.globalTextColor }}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(220,38,38,0.03)_0%,_transparent_50%)] pointer-events-none" />
        <div className="flex-1 grid grid-cols-3 gap-2 mb-6">
          {[1, 2, 3].map(i => (
            <div key={i} className="rounded-full overflow-hidden border-4 border-red-500 shadow-lg aspect-square">
              <div className="w-full h-full img-slot" style={{ backgroundImage: `url(${data[`l276_i${i}`]})` }} onClick={() => onImageClick(`l276_i${i}`)} />
            </div>
          ))}
        </div>
        <div className="text-center">
          <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam font-black text-3xl text-red-600 uppercase tracking-tighter" style={{ color: data.globalTextColor || '#dc2626' }}>
            {data.l276_t1 || 'SẮC ĐỎ TÌNH NGUYỆN'}
          </h2>
          <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam text-red-400 text-xs mt-1 font-bold" style={{ color: data.globalTextColor || '#f87171' }}>
            {data.l276_t2 || 'Đâu cần thanh niên có, đâu khó có thanh niên'}
          </p>
        </div>
      </div>
    )
  },
  {
    id: 277,
    name: 'Hành Trình Xanh',
    tags: ['2anh', 'ngoaikhoa'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-gradient-to-b from-emerald-800 to-emerald-950 p-6 flex flex-col relative" style={{ color: data.globalTextColor }}>
        <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/leaf.png")' }} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
        <div className="flex-1 flex gap-4 mb-6 z-10">
          <div className="flex-1 rounded-3xl overflow-hidden border-4 border-emerald-400 shadow-2xl">
            <div className="w-full h-full img-slot" style={{ backgroundImage: `url(${data.l277_i1})` }} onClick={() => onImageClick('l277_i1')} />
          </div>
          <div className="flex-1 rounded-3xl overflow-hidden border-4 border-emerald-400 shadow-2xl">
            <div className="w-full h-full img-slot" style={{ backgroundImage: `url(${data.l277_i2})` }} onClick={() => onImageClick('l277_i2')} />
          </div>
        </div>
        <div className="text-center z-10">
          <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam font-black text-4xl text-emerald-400 uppercase italic" style={{ color: data.globalTextColor || '#34d399' }}>
            {data.l277_t1 || 'HÀNH TRÌNH XANH'}
          </h2>
          <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam text-white/70 text-xs mt-2" style={{ color: data.globalTextColor || 'rgba(255,255,255,0.7)' }}>
            {data.l277_t2 || 'Vì một Việt Nam xanh - sạch - đẹp'}
          </p>
        </div>
      </div>
    )
  },
  {
    id: 278,
    name: 'Vinh Quang Việt Nam',
    tags: ['1anh', 'ngoaikhoa'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-gradient-to-br from-red-600 via-red-700 to-red-900 p-0 flex flex-col relative" style={{ color: data.globalTextColor }}>
        <WavingFlag className="absolute top-6 right-6 w-20 h-12 z-20" />
        <div className="absolute top-0 left-0 w-full h-full img-slot opacity-40" style={{ backgroundImage: `url(${data.l278_i1})` }} onClick={() => onImageClick('l278_i1')} />
        <div className="absolute inset-0 bg-gradient-to-t from-red-900 via-red-800/40 to-transparent" />
        <div className="flex-1 flex flex-col justify-end p-10 z-10">
          <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(250,204,21,0.5)]">
            <svg viewBox="0 0 24 24" className="w-12 h-12 fill-red-700"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
          </div>
          <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam font-black text-6xl text-white uppercase tracking-tighter leading-none" style={{ color: data.globalTextColor || 'white' }}>
            {data.l278_t1 || 'VINH QUANG VIỆT NAM'}
          </h2>
          <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam text-yellow-400 text-xl font-bold mt-4 italic" style={{ color: data.globalTextColor || '#facc15' }}>
            {data.l278_t2 || 'Tự hào dòng máu Lạc Hồng'}
          </p>
        </div>
      </div>
    )
  },
  {
    id: 279,
    name: 'Ngoại Khóa Sáng Tạo',
    tags: ['4anh', 'ngoaikhoa'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-gradient-to-br from-white to-indigo-50 p-6 flex flex-col" style={{ color: data.globalTextColor }}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(79,70,229,0.05)_0%,_transparent_50%)] pointer-events-none" />
        <div className="flex-1 grid grid-cols-4 gap-2 mb-6">
          {[1, 2, 3, 4].map(i => (
            <div key={i} className="rounded-xl overflow-hidden border-2 border-gray-100 shadow-lg">
              <div className="w-full h-full img-slot" style={{ backgroundImage: `url(${data[`l279_i${i}`]})` }} onClick={() => onImageClick(`l279_i${i}`)} />
            </div>
          ))}
        </div>
        <div className="text-center space-y-2">
          <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam font-black text-3xl text-indigo-900 uppercase tracking-tight" style={{ color: data.globalTextColor || '#1e1b4b' }}>
            {data.l279_t1 || 'SÁNG TẠO KHÔNG GIỚI HẠN'}
          </h2>
          <p contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam text-indigo-400 text-xs font-bold" style={{ color: data.globalTextColor || '#818cf8' }}>
            {data.l279_t2 || 'Hoạt động ngoại khóa phát triển tư duy'}
          </p>
        </div>
      </div>
    )
  },
  {
    id: 280,
    name: 'Hành Trình Tri Thức',
    tags: ['3anh', 'ngoaikhoa'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-gradient-to-b from-blue-50 to-white p-6 flex flex-col" style={{ color: data.globalTextColor }}>
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-blue-200/20 to-transparent pointer-events-none" />
        <div className="flex-1 flex flex-col gap-4 mb-6">
          <div className="flex-[2] rounded-3xl overflow-hidden border-4 border-blue-600 shadow-2xl">
            <div className="w-full h-full img-slot" style={{ backgroundImage: `url(${data.l280_i1})` }} onClick={() => onImageClick('l280_i1')} />
          </div>
          <div className="flex-1 flex gap-4">
            <div className="flex-1 rounded-3xl overflow-hidden border-4 border-blue-600 shadow-2xl">
              <div className="w-full h-full img-slot" style={{ backgroundImage: `url(${data.l280_i2})` }} onClick={() => onImageClick('l280_i2')} />
            </div>
            <div className="flex-1 rounded-3xl overflow-hidden border-4 border-blue-600 shadow-2xl">
              <div className="w-full h-full img-slot" style={{ backgroundImage: `url(${data.l280_i3})` }} onClick={() => onImageClick('l280_i3')} />
            </div>
          </div>
        </div>
        <div className="text-center">
          <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam font-black text-3xl text-blue-900 uppercase tracking-tighter" style={{ color: data.globalTextColor || '#1e3a8a' }}>
            {data.l280_t1 || 'HÀNH TRÌNH TRI THỨC'}
          </h2>
        </div>
      </div>
    )
  },
  {
    id: 281,
    name: 'Việt Nam Hùng Cường',
    tags: ['5anh', 'ngoaikhoa'],
    render: (data, onImageClick) => (
      <div className="poster-wrapper bg-gradient-to-br from-red-600 via-red-700 to-red-800 p-4 flex flex-col relative" style={{ color: data.globalTextColor }}>
        <HeritageBorder color={data.globalTextColor || '#facc15'} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_rgba(250,204,21,0.1)_0%,_transparent_70%)] pointer-events-none" />
        <WavingFlag className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-10 z-20" />
        <div className="flex-1 grid grid-cols-3 grid-rows-2 gap-2 mb-4 z-10">
          <div className="col-span-2 rounded-lg overflow-hidden border-2 border-yellow-400">
            <div className="w-full h-full img-slot" style={{ backgroundImage: `url(${data.l281_i1})` }} onClick={() => onImageClick('l281_i1')} />
          </div>
          <div className="rounded-lg overflow-hidden border-2 border-yellow-400">
            <div className="w-full h-full img-slot" style={{ backgroundImage: `url(${data.l281_i2})` }} onClick={() => onImageClick('l281_i2')} />
          </div>
          <div className="rounded-lg overflow-hidden border-2 border-yellow-400">
            <div className="w-full h-full img-slot" style={{ backgroundImage: `url(${data.l281_i3})` }} onClick={() => onImageClick('l281_i3')} />
          </div>
          <div className="rounded-lg overflow-hidden border-2 border-yellow-400">
            <div className="w-full h-full img-slot" style={{ backgroundImage: `url(${data.l281_i4})` }} onClick={() => onImageClick('l281_i4')} />
          </div>
          <div className="rounded-lg overflow-hidden border-2 border-yellow-400">
            <div className="w-full h-full img-slot" style={{ backgroundImage: `url(${data.l281_i5})` }} onClick={() => onImageClick('l281_i5')} />
          </div>
        </div>
        <div className="text-center z-10">
          <h2 contentEditable suppressContentEditableWarning={true} spellCheck={false} className="font-bevietnam font-black text-2xl text-yellow-400 uppercase tracking-widest" style={{ color: data.globalTextColor || '#facc15' }}>
            {data.l281_t1 || 'VIỆT NAM HÙNG CƯỜNG'}
          </h2>
        </div>
      </div>
    )
  },
];
