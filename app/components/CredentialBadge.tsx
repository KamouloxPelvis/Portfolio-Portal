'use client';
import { useEffect, useState } from 'react';

export default function CredentialBadge() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    setIsClient(true);
    const script = document.createElement('script');
    script.src = "//cdn.credly.com/assets/utilities/embed.js";
    script.async = true;
    document.body.appendChild(script);
    
    return () => { document.body.removeChild(script); };
  }, []);

  if (!isClient) return null;

  return (
    <div className="flex justify-end p-4">
      <div 
        data-iframe-width="150" 
        data-iframe-height="270" 
        data-share-badge-id="a6236722-64f4-4b70-a485-b14911cb1cf7" 
        data-share-badge-host="https://www.credly.com"
      ></div>
    </div>
  );
}