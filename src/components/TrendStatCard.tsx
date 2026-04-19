/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { FC } from 'react';
import { IndustryTrend } from '../types';
import { motion } from 'motion/react';

interface Props {
  trend: IndustryTrend;
}

const TrendStatCard: FC<Props> = ({ trend }) => {
  return (
    <motion.div
      whileHover={{ y: -4, borderColor: 'var(--color-accent)' }}
      className="rounded-xl border border-border bg-surface-container p-6 shadow-sm transition-colors duration-300"
    >
      <p className="mb-4 text-[11px] font-medium uppercase tracking-[2px] text-on-surface-variant">
        {trend.label}
      </p>
      <div className="flex items-end gap-3">
        <h4 className="font-serif text-3xl font-light tracking-tight">{trend.value}</h4>
        <span
          className={`mb-1 text-[13px] ${
            trend.isPositive ? 'text-success' : 'text-red-500'
          }`}
        >
          {trend.isPositive ? '↑' : '↓'} {trend.change}
        </span>
      </div>
    </motion.div>
  );
};

export default TrendStatCard;
