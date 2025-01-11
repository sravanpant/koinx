// types.ts
interface KeyEvent {
  icon: React.ReactNode;
  title: string;
  description: string;
  variant: 'blue' | 'green';
}

interface AnalystEstimate {
  type: 'Buy' | 'Hold' | 'Sell';
  percentage: number;
  color: string;
}

// SentimentCard.tsx
import React from 'react';
import { BsNewspaper } from 'react-icons/bs';
import { BiTrendingUp } from 'react-icons/bi';
import { IoInformationCircleOutline } from 'react-icons/io5';

const SentimentCard: React.FC = () => {
  const keyEvents: KeyEvent[] = [
    {
      icon: <BsNewspaper className="text-2xl" />,
      title: 'Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.',
      description: 'Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim.',
      variant: 'blue'
    },
    {
      icon: <BiTrendingUp className="text-2xl" />,
      title: 'Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.',
      description: 'Lorem ipsum dolor sit amet consectetur. Ac risus est faucibus metus quis. Amet viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra in a adipisinc metus quis del',
      variant: 'green'
    },
  ];

  const analystEstimates: AnalystEstimate[] = [
    { type: 'Buy', percentage: 76, color: 'bg-emerald-500' },
    { type: 'Hold', percentage: 8, color: 'bg-gray-300' },
    { type: 'Sell', percentage: 16, color: 'bg-red-500' },
  ];

  return (
    <div className="p-6 bg-white rounded-lg shadow-sm my-5">
      {/* Header */}
      <div className="flex items-center gap-2 mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Sentiment</h2>
      </div>

      {/* Key Events Section */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <h3 className="text-lg font-medium text-gray-700">Key Events</h3>
          <IoInformationCircleOutline size={20} className="text-gray-400" />
        </div>
        
        <div className="flex gap-4 overflow-x-auto">
          {keyEvents.map((event, index) => (
            <div 
              key={index}
              className={`flex-shrink-0 w-[480px] p-5 rounded-xl ${
                event.variant === 'blue' ? 'bg-blue-50' : 'bg-emerald-50'
              }`}
            >
              <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${
                event.variant === 'blue' ? 'bg-blue-500 text-white' : 'bg-emerald-500 text-white'
              }`}>
                {event.icon}
              </div>
              <p className="font-medium text-gray-900 mb-2">{event.title}</p>
              <p className="text-gray-600 text-sm">{event.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Analyst Estimates Section */}
      <div>
        <div className="flex items-center gap-2 mb-6">
          <h3 className="text-lg font-medium text-gray-700">Analyst Estimates</h3>
          <IoInformationCircleOutline size={20} className="text-gray-400" />
        </div>

        <div className="flex items-center gap-8">
          <div className="w-32 h-32 rounded-full bg-emerald-50 flex items-center justify-center">
            <span className="text-3xl font-semibold text-gray-800">76<span className="text-xl">%</span></span>
          </div>

          <div className="flex-1 space-y-3">
            {analystEstimates.map((estimate, index) => (
              <div key={index} className="flex items-center gap-4">
                <span className="w-10 text-sm text-gray-600">{estimate.type}</span>
                <div className="flex-1 h-2 bg-gray-100 rounded-full">
                  <div 
                    className={`h-full rounded-full ${estimate.color}`}
                    style={{ width: `${estimate.percentage}%` }}
                  />
                </div>
                <span className="w-10 text-sm text-gray-600">{estimate.percentage}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SentimentCard;