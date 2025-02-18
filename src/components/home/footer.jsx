'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';

export const Footer = () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();

  return (
    <footer className="bg-background border-t">
      <Card className="border-none rounded-none">
        <CardContent className="p-6">
          <div className="container mx-auto">
            <form className="space-y-4 md:space-y-0 md:flex md:items-center md:justify-center md:space-x-4">
              <div className="flex-shrink-0">
                <p className="font-semibold">Sign up for our newsletter</p>
              </div>
              <div className="flex-grow max-w-md">
                <Input type="email" placeholder="Email address" className="w-full" />
              </div>
              <div className="flex-shrink-0">
                <Button variant="outline">Subscribe</Button>
              </div>
            </form>
          </div>
        </CardContent>
      </Card>

      <div className="border-t bg-muted/50">
        <div className="container mx-auto py-3 px-6 text-center text-sm text-muted-foreground">
          &copy; {year} Copyright:{' '}
          <a href="/" className="font-medium hover:text-primary transition-colors">
            YT Shorts
          </a>
        </div>
      </div>
    </footer>
  );
};
