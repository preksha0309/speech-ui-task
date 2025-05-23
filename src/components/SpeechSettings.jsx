import React from 'react';
import { Mic, ChevronDown } from 'lucide-react';

export default function SpeechSettings({
  show,
  toggle,
  interruptions,
  setInterruptions,
  ambientNoise,
  setAmbientNoise,
  selectedNoiseLevel,
  setSelectedNoiseLevel,
  speechSpeed,
  setSpeechSpeed
}) {
  return (
    <>
      <div className="flex justify-between items-center cursor-pointer border p-4 rounded-xl bg-gray-50" onClick={toggle}>
        <div className="flex items-center space-x-2">
          <Mic className="w-4 h-4 text-gray-600" />
          <h3 className="font-medium text-gray-800">Speech Settings</h3>
        </div>
        <ChevronDown className={`w-4 h-4 text-gray-500 transform transition-transform ${show ? 'rotate-180' : ''}`} />
      </div>

      {show && (
        <div className="space-y-4 border p-4 rounded-xl bg-gray-50">
          <div>
            <h3 className="font-medium">Voice selection</h3>
            <div className="border rounded-lg p-3 mt-2 flex items-center space-x-3 bg-white justify-between">
              <div className="flex items-center space-x-3">
                <img src="https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg" alt="India Flag" className="w-6 h-4" />
                <span className="font-medium">Trisha</span>
                <span className="bg-purple-100 text-purple-700 text-xs font-medium px-2 py-0.5 rounded">Female</span>
                <span className="text-xs text-gray-500">EN HI +3</span>
              </div>
              <ChevronDown className="w-4 h-4 text-gray-500" />
            </div>
          </div>

          <div className="flex justify-between items-center">
            <span>Allow Interruptions</span>
            <button
              onClick={() => setInterruptions(!interruptions)}
              className={`w-10 h-5 flex items-center rounded-full p-1 transition ${interruptions ? 'bg-green-400' : 'bg-gray-300'}`}
            >
              <div className={`bg-white w-4 h-4 rounded-full shadow-md transform transition ${interruptions ? 'translate-x-5' : ''}`}></div>
            </button>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span>Ambient noise</span>
              <button
                onClick={() => setAmbientNoise(!ambientNoise)}
                className={`w-10 h-5 flex items-center rounded-full p-1 transition ${ambientNoise ? 'bg-green-400' : 'bg-gray-300'}`}
              >
                <div className={`bg-white w-4 h-4 rounded-full shadow-md transform transition ${ambientNoise ? 'translate-x-5' : ''}`}></div>
              </button>
            </div>
            {ambientNoise && (
              <div className="flex space-x-2">
                {['Low', 'Medium', 'High'].map(level => (
                  <button
                    key={level}
                    onClick={() => setSelectedNoiseLevel(level)}
                    className={`px-3 py-1 rounded border ${selectedNoiseLevel === level ? 'bg-black text-white' : 'bg-white text-black'}`}
                  >
                    {level}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div>
            <span className="font-medium">Speech speed</span>
            <div className="flex space-x-2 mt-1">
              {['0.25x', '0.50x', '1.0x', '1.25x'].map(speed => (
                <button
                  key={speed}
                  onClick={() => setSpeechSpeed(speed)}
                  className={`px-3 py-1 rounded border ${speechSpeed === speed ? 'bg-black text-white' : 'bg-white text-black'}`}
                >
                  {speed}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

