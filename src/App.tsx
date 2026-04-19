/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import CastingCallCard from './components/CastingCallCard';
import ApplicantCard from './components/ApplicantCard';
import TrendStatCard from './components/TrendStatCard';
import BottomNav from './components/BottomNav';
import { CastingCall, Applicant, IndustryTrend } from './types';
import { motion } from 'motion/react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15,
    },
  },
};

const castingCalls: CastingCall[] = [
  {
    id: '1',
    title: 'Neon Nights: The Syndicate',
    type: 'Feature Film',
    roleType: 'Lead Roles',
    tags: ['SAGA-AFTRA', 'Urgent'],
    applicantCount: 128,
    imageUrl: 'https://picsum.photos/seed/neon/400/600',
  },
  {
    id: '2',
    title: "Summer of '94",
    type: 'Independent Drama',
    roleType: 'Supporting',
    tags: ['Non-Union'],
    applicantCount: 45,
    imageUrl: 'https://picsum.photos/seed/summer/400/600',
  },
];

const applicants: Applicant[] = [
  {
    id: '1',
    name: 'Elena Rodriguez',
    project: 'Neon Nights',
    role: 'Actor',
    location: 'LA Based',
    imageUrl: 'https://picsum.photos/seed/elena/200/200',
    tags: ['Actor', 'LA Based'],
  },
  {
    id: '2',
    name: 'Julian Sterling',
    project: "Summer of '94",
    role: 'Actor',
    location: 'Equity',
    imageUrl: 'https://picsum.photos/seed/julian/200/200',
    tags: ['Actor', 'Equity'],
  },
  {
    id: '3',
    name: 'Amara Okafor',
    project: 'Neon Nights',
    role: 'Lead',
    location: 'New York',
    imageUrl: 'https://picsum.photos/seed/amara/200/200',
    tags: ['Lead', 'New York'],
  },
];

const trends: IndustryTrend[] = [
  { label: 'Total Auditions', value: '1,402', change: '+12%', isPositive: true },
  { label: 'Callback Rate', value: '8.4%', change: '-2%', isPositive: false },
  { label: 'Talent Pool', value: '12.5k', change: '+245', isPositive: true },
  { label: 'Avg Completion', value: '22d', change: '-3d', isPositive: true },
];

export default function App() {
  return (
    <div className="min-h-screen bg-surface selection:bg-accent selection:text-surface">
      <Header />
      <Sidebar />

      <motion.main
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="min-h-screen px-10 pt-28 pb-10 md:ml-64"
      >
        <div className="mx-auto max-w-7xl">
          {/* Dashboard Header */}
          <motion.header
            variants={itemVariants}
            className="mb-10 flex flex-col justify-between gap-6 border-b border-border pb-10 md:flex-row md:items-end"
          >
            <div>
              <p className="mb-2 text-[12px] font-medium uppercase tracking-[2px] text-on-surface-variant">
                Portfolio Performance
              </p>
              <h1 className="font-serif text-5xl font-light tracking-tight text-on-surface">
                Director's Overview
              </h1>
            </div>

            <div className="flex gap-4">
              <div className="flex items-center gap-4 rounded-full bg-success/10 px-4 py-2 text-[13px] text-success">
                <span>↑</span> +2.48% (+$30k)
              </div>
              <div className="text-right">
                <div className="text-[11px] font-medium uppercase tracking-widest text-on-surface-variant">Last updated</div>
                <div className="text-[11px] text-on-surface opacity-60 uppercase">April 19, 06:18 GMT</div>
              </div>
            </div>
          </motion.header>

          <section className="mb-12 grid grid-cols-1 gap-10 lg:grid-cols-3">
            {/* Active Casting Calls Column */}
            <motion.div variants={itemVariants} className="lg:col-span-2 space-y-8">
              <div className="flex items-center justify-between">
                <h3 className="text-[14px] font-medium uppercase tracking-[1px] text-on-surface-variant">Active Casting Calls</h3>
                <button className="text-[11px] font-bold uppercase tracking-widest text-accent transition-all hover:opacity-80">
                  View Repository
                </button>
              </div>
              <div className="overflow-hidden rounded-xl border border-border bg-surface-container">
                {castingCalls.map((call) => (
                  <CastingCallCard key={call.id} call={call} />
                ))}
              </div>
            </motion.div>

            {/* New Applicants Column */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="flex items-center justify-between">
                <h3 className="text-[14px] font-medium uppercase tracking-[1px] text-on-surface-variant">New Applicants</h3>
                <span className="text-[10px] font-bold uppercase tracking-widest text-accent">
                  8 Pending
                </span>
              </div>
              <div className="rounded-xl border border-border bg-surface-container p-2">
                <div className="space-y-1">
                  {applicants.map((applicant) => (
                    <ApplicantCard key={applicant.id} applicant={applicant} />
                  ))}
                </div>
                <div className="mt-4 pb-2 text-center">
                  <button className="text-[11px] font-bold uppercase tracking-widest text-accent hover:opacity-80">
                    View Talent Pool
                  </button>
                </div>
              </div>
            </motion.div>
          </section>

          {/* Industry Trends Section */}
          <motion.section variants={itemVariants} className="space-y-8">
            <div className="flex items-center justify-between">
              <h3 className="text-[14px] font-medium uppercase tracking-[1px] text-on-surface-variant">Industry Trends</h3>
              <div className="flex gap-4">
                <button className="text-[11px] font-bold uppercase tracking-widest text-on-surface-variant hover:text-on-surface">
                  Weekly
                </button>
                <button className="border-b border-accent text-[11px] font-bold uppercase tracking-widest text-on-surface">
                  Monthly
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {trends.map((trend) => (
                <TrendStatCard key={trend.label} trend={trend} />
              ))}
            </div>
          </motion.section>
        </div>
      </motion.main>

      <BottomNav />
    </div>
  );
}
