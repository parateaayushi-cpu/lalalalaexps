/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { FC } from 'react';
import { Star } from 'lucide-react';
import { Applicant } from '../types';
import { motion } from 'motion/react';

interface Props {
  applicant: Applicant;
}

const ApplicantCard: FC<Props> = ({ applicant }) => {
  return (
    <motion.div
      whileHover={{ backgroundColor: 'var(--color-surface-container-high)', scale: 1.01 }}
      transition={{ duration: 0.2 }}
      className="group flex cursor-pointer items-center gap-4 border-b border-border bg-surface-container p-4 transition-colors last:border-b-0"
    >
      <img
        src={applicant.imageUrl}
        alt={applicant.name}
        className="h-12 w-12 rounded-full border border-border object-cover grayscale transition-all group-hover:grayscale-0"
        referrerPolicy="no-referrer"
      />
      <div className="flex-1">
        <h5 className="text-[13px] font-medium text-on-surface">{applicant.name}</h5>
        <p className="mb-1 text-[11px] text-on-surface-variant font-light tracking-tight">Project: {applicant.project}</p>
        <div className="flex gap-1">
          {applicant.tags.map((tag) => (
            <span
              key={tag}
              className="text-[9px] font-medium uppercase tracking-[1px] text-accent"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <button className="text-accent opacity-0 transition-opacity group-hover:opacity-100">
        <Star className="h-3 w-3" />
      </button>
    </motion.div>
  );
};

export default ApplicantCard;
