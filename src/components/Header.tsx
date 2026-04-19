/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Search, Bell } from 'lucide-react';

export default function Header() {
  return (
    <header className="elegant-border-b fixed top-0 z-50 flex h-[70px] w-full items-center justify-between bg-surface px-10">
      <div className="font-serif text-xl font-light tracking-[4px] text-accent uppercase">
        Cinematic Edit
      </div>

      <div className="flex items-center gap-6">
        <div className="relative hidden md:block">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-on-surface-variant" />
          <input
            type="text"
            placeholder="Search talent..."
            className="w-64 rounded-sm border-none bg-surface-container py-2 pl-10 pr-4 text-xs font-light uppercase tracking-widest focus:ring-1 focus:ring-accent"
          />
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <span className="hidden text-[12px] text-on-surface-variant md:block">Julian Vane</span>
            <img
              src="https://picsum.photos/seed/director/100/100"
              alt="User profile"
              className="h-8 w-8 rounded-full border border-accent object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <button className="text-on-surface-variant transition-opacity hover:opacity-100">
            <Bell className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
