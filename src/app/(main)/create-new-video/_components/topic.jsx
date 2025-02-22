'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { suggestions } from '@/constants';
import { cn } from '@/lib/utils';
import { Textarea } from '@/components/ui/textarea';
import { Loader2, SparklesIcon } from 'lucide-react';
import axios from 'axios';

export const Topic = ({ onHandleInputChange }) => {
  const [selectedTopic, setSelectedTopic] = useState('');
  const [selectedScriptIndex, setSelectedScriptIndex] = useState();
  const [scripts, setScripts] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleTopicSelection = (suggestionName) => {
    setSelectedTopic(suggestionName);
    onHandleInputChange('topic', suggestionName);
  };

  const GenerateScript = async () => {
    if (!selectedTopic) {
      console.error('No topic selected');
      return;
    }
    setLoading(true);
    setSelectedScriptIndex(null);
    try {
      const response = await axios.post('/api/generate-script', {
        topic: selectedTopic,
      });
      console.log('API Response:', response.data);
      setScripts(response.data?.scripts);
    } catch (error) {
      console.error('API Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2 className="mb-1">Project Title</h2>
      <Input
        placeholder="Enter project title"
        onChange={(event) => onHandleInputChange('title', event?.target.value)}
      />
      <div className="mt-5">
        <h2>Video Topic</h2>
        <p className="text-sm text-gray-600">Select topic for your video</p>

        <Tabs defaultValue="suggestion" className="w-full mt-2">
          <TabsList>
            <TabsTrigger value="suggestion">Suggestions</TabsTrigger>
            <TabsTrigger value="your_topic">Your Topic</TabsTrigger>
          </TabsList>
          <TabsContent value="suggestion">
            <div>
              {suggestions.map((suggestion, index) => (
                <Button
                  variant="outline"
                  key={index}
                  onClick={() => handleTopicSelection(suggestion)}
                  className={cn('m-1', suggestion === selectedTopic && 'bg-secondary')}
                >
                  {suggestion}
                </Button>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="your_topic">
            <div>
              <h2>Enter your own topic</h2>
              <Textarea
                placeholder="Enter your topic"
                onChange={(event) => handleTopicSelection(event.target.value)}
              />
            </div>
          </TabsContent>
        </Tabs>
        {scripts?.length > 0 && (
          <div className="mt-3">
            <h2>Select the Script</h2>
            <div className="grid grid-cols-2 gap-5">
              {scripts?.map((item, index) => (
                <div
                  key={index}
                  className={cn(
                    'p-3 border rounded-lg mt-1 cursor-pointer',
                    selectedScriptIndex === index && 'border-white bg-secondary',
                  )}
                  onClick={() => {
                    setSelectedScriptIndex(index);
                    onHandleInputChange('script', item?.content);
                  }}
                >
                  <h2 className="line-clamp-4 text-sm text-gray-300">{item.content}</h2>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      {!scripts && (
        <Button
          className="mt-3 flex items-center gap-2"
          size="sm"
          onClick={GenerateScript}
          disabled={loading}
        >
          {loading ? <Loader2 className="animate-spin" /> : <SparklesIcon />}
          {loading ? 'Generating...' : 'Generate Script'}
        </Button>
      )}
    </div>
  );
};
