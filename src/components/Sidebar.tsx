/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { LayoutDashboard, Film, UserSquare2, FolderHeart, MessageSquare, Plus } from 'lucide-react';
import { motion } from 'motion/react';

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', active: true },
  { icon: Film, label: 'Feed' },
  { icon: UserSquare2, label: 'Casting Calls' },
  { icon: FolderHeart, label: 'Portfolios' },
  { icon: MessageSquare, label: 'Messages' },
];

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 hidden h-screen w-64 flex-col border-r border-border bg-surface p-4 pt-24 md:flex">
      <div className="mb-10 px-4">
        <h2 className="font-serif text-sm font-light tracking-[2px] text-accent uppercase">Casting Studio</h2>
        <p className="text-[10px] tracking-widest text-on-surface-variant opacity-60 uppercase">Industry Access</p>
      </div>

      <nav className="flex-1 space-y-4">
        {navItems.map((item) => (
          <motion.a
            key={item.label}
            href="#"
            whileHover={{ x: 4 }}
            className={`flex items-center gap-3 px-4 py-1 transition-all duration-200 ${
              item.active
                ? 'border-b border-accent text-on-surface'
                : 'text-on-surface-variant hover:text-on-surface'
            }`}
          >
            <item.icon className={`h-4 w-4 ${item.active ? 'text-accent' : ''}`} />
            <span className="text-[11px] font-medium tracking-[1px] uppercase">{item.label}</span>
          </motion.a>
        ))}
      </nav>

      <motion.button
        whileHover={{ opacity: 0.9 }}
        whileTap={{ scale: 0.98 }}
        className="primary-gradient mt-auto flex items-center justify-center gap-2 rounded-sm py-3 text-[11px] font-bold tracking-widest text-surface uppercase shadow-xl"
      >
        <Plus className="h-4 w-4" />
        <span>Post Casting Call</span>
      </motion.button>
    </aside>
  );
}
