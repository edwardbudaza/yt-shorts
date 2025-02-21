import { captionOptions } from '@/constants';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

export const Captions = ({ onHandleInputChange }) => {
  const [selectedCaptionStyle, setSelectedCaptionStyle] = useState('');

  const handleCaptionStyleSelection = (caption) => {
    setSelectedCaptionStyle(caption.name);
    onHandleInputChange('caption', caption);
  };

  // Set a default caption on component mount
  useEffect(() => {
    if (captionOptions.length > 0 && !selectedCaptionStyle) {
      handleCaptionStyleSelection(captionOptions[0]);
    }
  }, []);
  return (
    <div className="mt-5">
      <h2>Caption Style</h2>
      <p className="text-sm text-gray-400">Select Caption Style</p>

      <div className="flex flex-wrap gap-4 mt-2">
        {captionOptions.map((caption, index) => (
          <div
            key={index}
            onClick={() => handleCaptionStyleSelection(caption)}
            className={cn(
              'p-2 hover:border bg-slate-900 border-gray-300 cursor-pointer rounded-lg',
              selectedCaptionStyle == caption.name && 'border',
            )}
          >
            <h2 className={caption.style}>{caption.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};
