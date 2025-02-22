import Image from 'next/image';

import { videoOptions } from '@/constants';
import { cn } from '@/lib/utils';

export const Preview = ({ formData }) => {
  const selectVideoStyle =
    formData && videoOptions.find((item) => item.name === formData?.videoStyle);

  return (
    <div className="relative">
      <h2 className="mb-3 text-2xl">Preview</h2>

      {/* Render Image only if src is valid */}
      {selectVideoStyle?.image ? (
        <Image
          src={selectVideoStyle.image}
          alt={selectVideoStyle.name || 'Video Preview'}
          width={1000}
          height={300}
          className="w-full h-[70vh] object-cover rounded-xl"
        />
      ) : (
        <div className="w-full h-[70vh] flex items-center justify-center bg-gray-200 rounded-xl">
          <p className="text-gray-500">No preview available</p>
        </div>
      )}

      <h2 className={cn(formData?.caption?.style, 'absolute bottom-7 text-center w-full')}>
        {formData?.caption?.name}
      </h2>
    </div>
  );
};
