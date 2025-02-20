import { v } from 'convex/values';
import { mutation } from './_generated/server';

export const CreateNewUser = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    pictureURL: v.string(),
  },
  handler: async (ctx, args) => {
    try {
      // Validate input
      if (!args.name || !args.email || !args.pictureURL) {
        throw new Error('All fields (name, email, pictureURL) are required.');
      }

      // Check if user already exists
      const existingUser = await ctx.db
        .query('users')
        .filter((q) => q.eq(q.field('email'), args.email))
        .collect();

      if (existingUser.length > 0) {
        // Return the existing user object
        return existingUser[0];
      }

      // Insert new user
      const newUser = await ctx.db.insert('users', {
        name: args.name,
        email: args.email,
        pictureURL: args.pictureURL,
        credits: 3,
        createdAt: new Date().toISOString(),
      });

      // Return the newly created user object
      return newUser;
    } catch (error) {
      console.error('Error creating user:', error.message);
      throw new Error('Failed to create user. Please try again later.');
    }
  },
});
