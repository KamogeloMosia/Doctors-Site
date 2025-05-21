"use client";

import Image from 'next/image';
import { useEffect, useState } from 'react';

interface StaticImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}

export default function StaticImage({ src, alt, width, height, className }: StaticImageProps) {
  const [basePath, setBasePath] = useState('');
  
  useEffect(() => {
    // Get base path from meta tag for GitHub Pages
    const basePathMeta = document.querySelector('meta[name="base-path"]');
    const basePathValue = basePathMeta?.getAttribute('content') || '';
    setBasePath(basePathValue);
  }, []);

  const imageSrc = `${basePath}${src}`;
  
  return (
    <Image 
      src={imageSrc} 
      alt={alt} 
      width={width || 500} 
      height={height || 300} 
      className={className}
      unoptimized // Required for static export
    />
  );
}
