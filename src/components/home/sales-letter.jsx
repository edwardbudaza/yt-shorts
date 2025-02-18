import React from 'react';
import {
  CheckCircle,
  PlayCircle,
  Clock,
  TrendingUp,
  DollarSign,
  Star,
  Package,
  Zap,
  Users,
  Lock,
  Coins,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Authentication } from '@/components/auth/authentication';

export const SalesLetter = () => (
  <div className="bg-gradient-to-r from-gray-800 to-gray-900 py-16 px-6 md:px-16 lg:px-32 text-white">
    <div className="container mx-auto text-center">
      {/* Urgent Header Banner */}
      <div className="bg-red-600 text-white p-4 rounded-lg mb-8 flex items-center justify-center gap-2">
        <Clock className="w-6 h-6 animate-pulse" />
        <span className="font-bold">
          ⚡️ FLASH SALE: Credit Packages Slashed by 80% - Only 47 Spots Left!
        </span>
      </div>

      {/* Headline */}
      <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-400 mb-6">
        Stock Up on AI Credits Now Before Prices Increase
      </h2>

      {/* Subheadline */}
      <div className="flex items-center justify-center gap-2 mb-8">
        <Coins className="w-6 h-6 text-yellow-400" />
        <p className="text-xl text-yellow-400">One Credit = One Professional YouTube Short</p>
      </div>

      {/* Credit Packages */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {/* Starter Package */}
        <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-gray-500 transition-all">
          <Package className="w-8 h-8 mx-auto mb-4 text-blue-400" />
          <h3 className="text-xl font-bold mb-2">Starter Package</h3>
          <div className="text-gray-400 mb-4">100 Credits</div>
          <div className="text-sm mb-4">
            <span className="line-through text-gray-500">Regular: $497</span>
            <div className="text-2xl font-bold text-green-400 mt-2">Now: $97</div>
          </div>
          <p className="text-sm text-gray-400 mb-4">Perfect for new creators</p>
          <Authentication>
            <Button className="w-full bg-blue-500 hover:bg-blue-600">
              Get Started
              <Coins className="w-4 h-4 ml-2" />
            </Button>
          </Authentication>
        </div>

        {/* Pro Package */}
        <div className="bg-gray-800/50 p-6 rounded-lg border-2 border-yellow-500 transform scale-105">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <span className="bg-yellow-500 text-black px-4 py-1 rounded-full text-sm font-bold">
              BEST VALUE
            </span>
          </div>
          <Package className="w-8 h-8 mx-auto mb-4 text-yellow-400" />
          <h3 className="text-xl font-bold mb-2">Pro Package</h3>
          <div className="text-gray-400 mb-4">500 Credits</div>
          <div className="text-sm mb-4">
            <span className="line-through text-gray-500">Regular: $1,997</span>
            <div className="text-2xl font-bold text-green-400 mt-2">Now: $397</div>
          </div>
          <p className="text-sm text-gray-400 mb-4">Most popular choice</p>
          <Authentication>
            <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black">
              Claim Pro Package
              <Coins className="w-4 h-4 ml-2" />
            </Button>
          </Authentication>
        </div>

        {/* Enterprise Package */}
        <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-gray-500 transition-all">
          <Package className="w-8 h-8 mx-auto mb-4 text-purple-400" />
          <h3 className="text-xl font-bold mb-2">Enterprise Package</h3>
          <div className="text-gray-400 mb-4">1500 Credits</div>
          <div className="text-sm mb-4">
            <span className="line-through text-gray-500">Regular: $4,997</span>
            <div className="text-2xl font-bold text-green-400 mt-2">Now: $997</div>
          </div>
          <p className="text-sm text-gray-400 mb-4">For serious creators</p>
          <Authentication>
            <Button className="w-full bg-purple-500 hover:bg-purple-600">
              Go Enterprise
              <Coins className="w-4 h-4 ml-2" />
            </Button>
          </Authentication>
        </div>
      </div>

      {/* What You Get Per Credit */}
      <div className="bg-gray-800/50 p-6 rounded-lg mb-8">
        <h3 className="text-2xl font-semibold text-gray-200 mb-6 flex items-center justify-center">
          <Coins className="w-6 h-6 mr-2 text-yellow-400" />
          Each Credit Includes:
        </h3>
        <div className="grid md:grid-cols-2 gap-6 text-left">
          <div className="flex items-start">
            <CheckCircle className="w-6 h-6 mr-3 text-green-400 flex-shrink-0" />
            <div>
              <h4 className="font-semibold">AI Script Generation</h4>
              <p className="text-gray-400">Viral hooks and engaging content</p>
            </div>
          </div>
          <div className="flex items-start">
            <CheckCircle className="w-6 h-6 mr-3 text-green-400 flex-shrink-0" />
            <div>
              <h4 className="font-semibold">Professional Voiceover</h4>
              <p className="text-gray-400">Natural-sounding AI voices</p>
            </div>
          </div>
          <div className="flex items-start">
            <CheckCircle className="w-6 h-6 mr-3 text-green-400 flex-shrink-0" />
            <div>
              <h4 className="font-semibold">Visual Generation</h4>
              <p className="text-gray-400">Eye-catching graphics and animations</p>
            </div>
          </div>
          <div className="flex items-start">
            <CheckCircle className="w-6 h-6 mr-3 text-green-400 flex-shrink-0" />
            <div>
              <h4 className="font-semibold">Export in 4K</h4>
              <p className="text-gray-400">High-quality rendering included</p>
            </div>
          </div>
        </div>
      </div>

      {/* Urgency Elements */}
      <div className="space-y-4 mb-8">
        <div className="bg-red-500/20 p-4 rounded-lg">
          <p className="text-red-400 font-bold flex items-center justify-center gap-2">
            <Clock className="w-5 h-5" />
            WARNING: Prices will increase to regular rates after the first 47 buyers
          </p>
        </div>
        <div className="bg-yellow-500/20 p-4 rounded-lg">
          <p className="text-yellow-400 font-bold">
            Credits Never Expire - Stock Up Now at 80% Off!
          </p>
        </div>
      </div>

      {/* Success Stories */}
      <div className="mb-12">
        <h3 className="text-2xl font-semibold text-gray-200 mb-6">What Creators Are Saying:</h3>
        <div className="grid md:grid-cols-2 gap-8">
          <blockquote className="bg-gray-800/30 p-6 rounded-lg text-left">
            <p className="text-gray-300 mb-4">
              "I bought the 500 credit package during the last flash sale. Those same credits would
              cost me 5x more today. Best investment I've made for my channel!"
            </p>
            <footer className="text-gray-400">— Mark Wilson, 1M+ Subscribers</footer>
          </blockquote>
          <blockquote className="bg-gray-800/30 p-6 rounded-lg text-left">
            <p className="text-gray-300 mb-4">
              "Each credit creates a Short that used to take me 3 hours. Bought the Enterprise
              package and it's already paid for itself 10x over."
            </p>
            <footer className="text-gray-400">— Lisa Chen, Content Creator</footer>
          </blockquote>
        </div>
      </div>

      {/* Guarantee */}
      <div className="bg-gray-800/30 p-6 rounded-lg mb-12">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Lock className="w-8 h-8 text-green-400" />
          <h3 className="text-2xl font-semibold text-gray-200">100% Satisfaction Guarantee</h3>
        </div>
        <p className="text-gray-300">
          Try your first 10 credits risk-free. If you're not amazed by the quality, we'll refund
          your entire purchase. No questions asked.
        </p>
      </div>

      {/* Final CTA */}
      <div className="flex flex-col items-center gap-4">
        <p className="text-xl text-yellow-400 font-bold">🔥 Only {47} Discount Spots Remaining</p>
        <p className="text-sm text-gray-400">
          * Credits never expire. Lock in the lowest price now before it increases.
        </p>
      </div>
    </div>
  </div>
);
