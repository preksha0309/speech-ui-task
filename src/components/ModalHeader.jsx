import React from 'react';
import { X } from 'lucide-react';
import { Dialog } from '@headlessui/react';

export default function ModalHeader({ onClose }) {
  return (
    <div className="flex justify-between items-center border-b pb-3">
      <Dialog.Title className="text-xl font-semibold">General configuration</Dialog.Title>
      <button onClick={onClose} className="text-gray-500 hover:text-black">
        <X className="w-5 h-5" />
      </button>
    </div>
  );
}