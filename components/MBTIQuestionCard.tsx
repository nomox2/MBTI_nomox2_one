'use client';

import React from 'react';

type MBTIQuestionOption = {
  value: string;
  label: string;
  helper?: string;
};

type MBTIQuestionCardProps = {
  index: number;
  prompt: string;
  options: MBTIQuestionOption[];
  selectedValue?: string;
  onSelect: (value: string) => void;
};

const MBTIQuestionCard: React.FC<MBTIQuestionCardProps> = ({
  index,
  prompt,
  options,
  selectedValue,
  onSelect,
}) => {
  return (
    <section className="rounded-2xl border border-divider bg-[#1b1b1b] p-6 shadow-lg transition hover:border-brand">
      <header className="mb-4 flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand/20 text-brand">
          {index + 1}
        </span>
        <p className="text-lg font-semibold leading-snug text-white">{prompt}</p>
      </header>
      <div className="flex flex-col gap-3">
        {options.map((option) => {
          const isSelected = option.value === selectedValue;
          return (
            <button
              key={option.value}
              type="button"
              onClick={() => onSelect(option.value)}
              className={`w-full rounded-xl border px-4 py-3 text-left transition focus:outline-none focus-visible:ring-2 focus-visible:ring-brand ${
                isSelected
                  ? 'border-brand bg-brand/10 text-white'
                  : 'border-divider bg-[#1f1f1f] text-subtext hover:border-brand/60 hover:text-white'
              }`}
            >
              <span className="block text-base font-medium">{option.label}</span>
              {option.helper && (
                <span className="mt-1 block text-sm text-subtext">{option.helper}</span>
              )}
            </button>
          );
        })}
      </div>
    </section>
  );
};

export type { MBTIQuestionOption };
export default MBTIQuestionCard;


