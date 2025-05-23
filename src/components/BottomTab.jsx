import React from 'react';
import { Phone, Settings } from 'lucide-react';

export default function BottomTab() {
    return (
        <><div>
            <div className="border rounded-lg p-3 mt-2 flex items-center space-x-3 bg-gray-50">
                <Phone className="w-4 h-4" /> <span>Call Settings</span>

            </div>
        </div>
            <div>
                <div className="border rounded-lg p-3 mt-2 flex items-center space-x-3 bg-gray-50">
                    <Settings className="w-4 h-4" /> <span>Post Call</span>

                </div>
            </div>
        </>
    );
}