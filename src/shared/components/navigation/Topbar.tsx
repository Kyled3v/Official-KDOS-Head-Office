'use client'

import { usePathname } from 'next/navigation'
import { WORKSPACES } from '@/shared/constants'

export function Topbar() {
  const pathname = usePathname()
  const workspace = WORKSPACES.find((ws) => pathname.startsWith(ws.path))

  return (
    <header className="border-surface-border bg-surface flex h-[56px] flex-shrink-0 items-center justify-between border-b px-6">
      <div>
        <h1 className="text-ink text-sm font-semibold">
          {workspace?.name ?? 'Official Head Office'}
        </h1>
        {workspace && <p className="text-ink-subtle text-[10px]">{workspace.description}</p>}
      </div>
      <div className="flex items-center gap-3">
        <div className="h-2 w-2 rounded-full bg-emerald-400" title="System operational" />
        <span className="text-ink-subtle text-[10px]">Operational</span>
      </div>
    </header>
  )
}
