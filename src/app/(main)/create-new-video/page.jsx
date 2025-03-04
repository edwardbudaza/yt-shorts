'use client';
import { useState, useEffect } from 'react';
import { Topic } from './_components/topic';
import { VideoStyle } from './_components/video-style';
import { Voice } from './_components/voice';
import { Captions } from './_components/captions';
import { Button } from '@/components/ui/button';
import { Loader2Icon, WandSparkles } from 'lucide-react';
import { Preview } from './_components/preview';
import axios from 'axios';
import { useMutation } from 'convex/react';
import { api } from '../../../../convex/_generated/api';
import { useAuthContext } from '@/components/providers/auth-provider';

const CreateNewVideoPage = () => {
  const [formData, setFormData] = useState({});
  const CreateInitialVideoRecord = useMutation(api.videoData.CreateVideoData);
  const { user } = useAuthContext();
  const [loading, setLoading] = useState(false);

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

  const GenerateVideo = async () => {
    console.log('Genereate video called');
    if (
      !formData?.topic ||
      !formData?.script ||
      !formData?.videoStyle ||
      !formData?.caption ||
      !formData?.voice
    ) {
      console.log('ERROR: ', 'Enter all fields');
      return;
    }

    if (!user?._id || !user?.email) {
      console.error('User not authenticated.');
      return;
    }
    setLoading(true);

    // Save video data
    const resp = await CreateInitialVideoRecord({
      title: formData.title,
      topic: formData.topic,
      script: formData.script,
      videoStyle: formData.videoStyle,
      caption: formData.caption,
      voice: formData.voice,
      uid: user?._id,
      createdBy: user?.email,
    });
    console.log('Initial Video Record:', resp);

    const result = await axios.post('/api/generate-video-data', {
      ...formData,
    });

    console.log('Generate Video Data: ', result);
    setLoading(false);
  };

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
          <Button className="w-full mt-5" onClick={GenerateVideo} disabled={loading}>
            {loading ? <Loader2Icon className="animate-spin" /> : <WandSparkles />}
            {loading ? 'Geneating...' : 'Generate Video'}
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
