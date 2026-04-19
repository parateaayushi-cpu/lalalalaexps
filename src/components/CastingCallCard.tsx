/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { FC } from 'react';
import { ChevronRight } from 'lucide-react';
import { CastingCall } from '../types';
import { motion } from 'motion/react';

interface Props {
  call: CastingCall;
}

const CastingCallCard: FC<Props> = ({ call }) => {
  return (
    <motion.div
      whileHover={{ backgroundColor: 'var(--color-surface-container-high)', scale: 1.005 }}
      transition={{ duration: 0.2 }}
      className="group flex cursor-pointer items-center justify-between border-b border-border bg-surface-container p-6 last:border-b-0"
    >
      <div className="flex items-center gap-5">
        <div className="h-16 w-14 flex-shrink-0 overflow-hidden rounded-sm bg-surface-container-high">
          <img
            src={call.imageUrl}
            alt={call.title}
            className="h-full w-full object-cover grayscale opacity-60 transition-all group-hover:grayscale-0 group-hover:opacity-100"
            referrerPolicy="no-referrer"
          />
        </div>
        <div>
          <h4 className="mb-1 text-[15px] font-medium text-on-surface">{call.title}</h4>
          <p className="mb-2 text-xs text-on-surface-variant font-light">
            {call.type} • {call.roleType}
          </p>
          <div className="flex gap-2">
            {call.tags.map((tag) => (
              <span
                key={tag}
                className={`rounded-sm px-2 py-0.5 text-[9px] font-bold uppercase tracking-[1px] ${
                  tag === 'Urgent'
                    ? 'bg-red-500/10 text-red-500'
                    : 'bg-accent/10 text-accent'
                }`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-center gap-8 text-right">
        <div>
          <p className="mb-1 text-[10px] font-medium uppercase tracking-[1.5px] text-on-surface-variant">Applicants</p>
          <p className="font-serif text-lg font-light">{call.applicantCount}</p>
        </div>
        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-colors group-hover:border-accent">
          <ChevronRight className="h-4 w-4 text-on-surface-variant group-hover:text-accent" />
        </div>
      </div>
    </motion.div>
  );
};

export default CastingCallCard;
