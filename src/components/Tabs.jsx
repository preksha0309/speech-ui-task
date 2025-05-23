import React from 'react';
import { Mic, Phone, Settings, MessageCircleHeart, ShieldCheck } from 'lucide-react';

export default function Tabs() {
  return (
    <div className="flex space-x-4 text-sm font-medium">
      <span className="text-black border-b-2 border-black pb-1 flex items-center space-x-1">
        <Mic className="w-4 h-4" /> <span>Speech Settings</span>
      </span>
      <span className="text-gray-400 flex items-center space-x-1">
        <Phone className="w-4 h-4" /> <span>Call Settings</span>
      </span>
      <span className="text-gray-400 flex items-center space-x-1">
        <Settings className="w-4 h-4" /> <span>Post Call</span>
      </span>
      <span className="text-gray-400 flex items-center space-x-1">
        <MessageCircleHeart className="w-4 h-4" /> <span>Chat Widget</span>
      </span>
      <span className="text-gray-400 flex items-center space-x-1">
        <ShieldCheck className="w-4 h-4" /> <span>Security</span>
      </span>
    </div>
  );
}