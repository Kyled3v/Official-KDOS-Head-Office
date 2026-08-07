'use client'

import { WorkspaceNav } from './WorkspaceNav'
import { Topbar } from './Topbar'

export function PlatformShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-base flex h-screen w-full overflow-hidden">
      <WorkspaceNav />
      <div className="flex flex-1 flex-col overflow-hidden">
        <Topbar />
        <main className="flex-1 overflow-auto bg-[#0A0A0F]">{children}</main>
      </div>
    </div>
  )
}
