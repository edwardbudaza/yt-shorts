import { v } from 'convex/values';
import { mutation } from './_generated/server';

export const CreateVideoData = mutation({
  args: {
    title: v.string(),
    topic: v.string(),
    script: v.string(),
    videoStyle: v.string(),
    caption: v.any(),
    voice: v.string(),
    uid: v.id('users'),
    createdBy: v.string(),
  },
  handler: async (ctx, args) => {
    try {
      // Ensure required fields are not empty
      if (
        !args.title ||
        !args.topic ||
        !args.script ||
        !args.videoStyle ||
        !args.caption ||
        !args.voice ||
        !args.uid ||
        !args.createdBy
      ) {
        throw new Error('Title, topic, script and ... are required fields.');
      }

      const result = await ctx.db.insert('videoData', {
        title: args.title,
        topic: args.topic,
        script: args.script,
        videoStyle: args.videoStyle,
        caption: args.caption,
        voice: args.voice,
        uid: args.uid,
        createdBy: args.createdBy,
      });

      return { success: true, id: result };
    } catch (error) {
      console.error('Error creating video data:', error);
      return { success: false, message: error.message || 'Failed to create video data.' };
    }
  },
});
