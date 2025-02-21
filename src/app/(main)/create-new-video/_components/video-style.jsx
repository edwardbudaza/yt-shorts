import { videoOptions } from '@/constants';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export const VideoStyle = ({ onHandleInputChange }) => {
  const [selectedStyle, setSelectedStyle] = useState('');

  const handleStyleSelection = (styleName) => {
    setSelectedStyle(styleName);
    onHandleInputChange('videoStyle', styleName);
  };

  // Set a default style on component mount
  useEffect(() => {
    if (videoOptions.length > 0 && !selectedStyle) {
      handleStyleSelection(videoOptions[0].name);
    }
  }, []);

  return (
    <div className="mt-5">
      <h2>Video Styles</h2>
      <p className="text-sm text-gray-400 mb-1">Select video style</p>
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-2">
        {videoOptions.map((option, index) => (
          <div key={index} className="relative" onClick={() => handleStyleSelection(option.name)}>
            <Image
              src={option.image}
              alt={option.name}
              width={500}
              height={120}
              className={cn(
                'object-cover h-[90px] lg:h-[130px] xl:h-[180px] rounded-lg p-1 hover:border border-gray-300 cursor-pointer',
                selectedStyle === option.name && 'border border-blue-500',
              )}
            />
            <h2 className="absolute bottom-1 text-center w-full">{option.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};
