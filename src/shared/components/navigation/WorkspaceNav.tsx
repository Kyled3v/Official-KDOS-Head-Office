'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { WORKSPACES } from '@/shared/constants'
import { cn } from '@/shared/utils'

const workspaceIcons: Record<string, string> = {
  executive: '⬡',
  kyledev: '◈',
  kdos: '◎',
}

export function WorkspaceNav() {
  const pathname = usePathname()

  return (
    <nav
      className="border-surface-border bg-surface flex h-full w-[240px] flex-shrink-0 flex-col border-r"
      aria-label="Workspace navigation"
    >
      <div className="border-surface-border flex h-[56px] items-center gap-3 border-b px-5">
        <div className="bg-brand-blue flex h-7 w-7 items-center justify-center rounded-md">
          <span className="text-xs font-bold text-white">OHO</span>
        </div>
        <div>
          <p className="text-ink text-xs leading-none font-semibold">Official Head Office</p>
          <p className="text-ink-subtle mt-0.5 text-[10px] leading-none">
            KyleDev Systems Software
          </p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto py-4">
        <p className="text-ink-subtle mb-2 px-5 text-[10px] font-semibold tracking-widest uppercase">
          Workspaces
        </p>
        <ul className="space-y-0.5 px-2">
          {WORKSPACES.map((ws) => {
            const isActive = pathname.startsWith(ws.path)
            return (
              <li key={ws.id}>
                <Link
                  href={ws.path}
                  className={cn(
                    'flex items-center gap-3 rounded-md px-3 py-2.5 text-sm transition-colors duration-150',
                    isActive
                      ? 'bg-[#0057FF1A] font-medium text-[#0057FF]'
                      : 'text-ink-muted hover:bg-surface-raised hover:text-ink',
                  )}
                >
                  <span className="text-base leading-none">{workspaceIcons[ws.id]}</span>
                  <span>{ws.name}</span>
                  {isActive && <span className="ml-auto h-1.5 w-1.5 rounded-full bg-[#0057FF]" />}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>

      <div className="border-surface-border border-t px-5 py-3">
        <p className="text-ink-subtle text-[10px]">
          v{process.env.NEXT_PUBLIC_APP_VERSION ?? '1.0.0'}
        </p>
      </div>
    </nav>
  )
}
