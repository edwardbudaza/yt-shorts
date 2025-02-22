'use client';
import { useState, useEffect } from 'react';
import { Topic } from './_components/topic';
import { VideoStyle } from './_components/video-style';
import { Voice } from './_components/voice';
import { Captions } from './_components/captions';
import { Button } from '@/components/ui/button';
import { WandSparkles } from 'lucide-react';
import { Preview } from './_components/preview';

const CreateNewVideoPage = () => {
  const [formData, setFormData] = useState({});

  const onHandleInputChange = (fieldName, fieldValue) => {
    setFormData((prev) => {
      const newData = {
        ...prev,
        [fieldName]: fieldValue,
      };
      return newData;
    });
  };

  // Use this effect to log the updated state
  useEffect(() => {
    console.log('Updated formData:', formData);
  }, [formData]);

  return (
    <div>
      <h2 className="text-3xl">Create New Video</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 mt-8 gap-7">
        <div className="col-span-2 p-7 border rounded-xl h-[75vh] overflow-auto">
          {/* Topic & Script */}
          <Topic onHandleInputChange={onHandleInputChange} />
          {/* Video Image Style */}
          <VideoStyle onHandleInputChange={onHandleInputChange} />
          {/* Voice */}
          <Voice onHandleInputChange={onHandleInputChange} />
          {/* Captions */}
          <Captions onHandleInputChange={onHandleInputChange} />
          <Button className="w-full mt-5">
            <WandSparkles />
            Generate Video
          </Button>
        </div>
        <div className="col-span-1">
          <Preview formData={formData} />
        </div>
      </div>
    </div>
  );
};

export default CreateNewVideoPage;
