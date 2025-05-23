import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';
import ModalHeader from './components/ModalHeader';
import Tabs from './components/Tabs';
import SpeechSettings from './components/SpeechSettings';
import BottomTab from './components/BottomTab';

export default function App() {
  const [isOpen, setIsOpen] = useState(true);
  const [interruptions, setInterruptions] = useState(false);
  const [ambientNoise, setAmbientNoise] = useState(false);
  const [selectedNoiseLevel, setSelectedNoiseLevel] = useState('Low');
  const [speechSpeed, setSpeechSpeed] = useState('1.0x');
  const [showSpeechSettings, setShowSpeechSettings] = useState(false);

  return (
    <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4">
        <Dialog.Panel className="w-full max-w-lg p-6 bg-white rounded-2xl shadow-xl space-y-6">
          <ModalHeader onClose={() => setIsOpen(false)} />

          <p className="text-gray-500 text-sm">Choose how you'd like to start building your agent.</p>

          <Tabs />

          <SpeechSettings
            show={showSpeechSettings}
            toggle={() => setShowSpeechSettings(!showSpeechSettings)}
            interruptions={interruptions}
            setInterruptions={setInterruptions}
            ambientNoise={ambientNoise}
            setAmbientNoise={setAmbientNoise}
            selectedNoiseLevel={selectedNoiseLevel}
            setSelectedNoiseLevel={setSelectedNoiseLevel}
            speechSpeed={speechSpeed}
            setSpeechSpeed={setSpeechSpeed}
          />
          <BottomTab/>
        </Dialog.Panel>
      </div>
    
    </Dialog>
  );
}
