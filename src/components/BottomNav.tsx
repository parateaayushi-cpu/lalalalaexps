/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Home, Video, Users, UserCircle } from 'lucide-react';

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 z-50 flex w-full items-center justify-around border-t border-border bg-surface px-4 py-3 md:hidden">
      <a
        href="#"
        className="flex flex-col items-center justify-center text-on-surface"
      >
        <Home className="mb-1 h-5 w-5 text-accent" />
        <span className="text-[10px] font-medium uppercase tracking-[1px] text-inherit">Home</span>
      </a>
      <a
        href="#"
        className="flex flex-col items-center justify-center text-on-surface-variant opacity-60 transition-transform hover:opacity-100"
      >
        <Video className="mb-1 h-5 w-5" />
        <span className="text-[10px] uppercase tracking-[1px] text-inherit">Casting</span>
      </a>
      <a
        href="#"
        className="flex flex-col items-center justify-center text-on-surface-variant opacity-60 transition-transform hover:opacity-100"
      >
        <Users className="mb-1 h-5 w-5" />
        <span className="text-[10px] uppercase tracking-[1px] text-inherit">Social</span>
      </a>
      <a
        href="#"
        className="flex flex-col items-center justify-center text-on-surface-variant opacity-60 transition-transform hover:opacity-100"
      >
        <UserCircle className="mb-1 h-5 w-5" />
        <span className="text-[10px] uppercase tracking-[1px] text-inherit">Profile</span>
      </a>
    </nav>
  );
}
