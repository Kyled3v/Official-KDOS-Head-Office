interface WorkspaceViewProps {
  workspace: string
  description: string
}

export function WorkspaceView({ workspace, description }: WorkspaceViewProps) {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-4 p-12 text-center">
      <div className="border-surface-border bg-surface-raised flex h-16 w-16 items-center justify-center rounded-2xl border">
        <span className="text-2xl text-[#0057FF]">◈</span>
      </div>
      <div className="max-w-sm">
        <h2 className="text-ink text-xl font-semibold">{workspace} Workspace</h2>
        <p className="text-ink-muted mt-2 text-sm">{description}</p>
      </div>
      <div className="border-surface-border bg-surface-raised mt-2 rounded-md border px-4 py-2">
        <p className="text-ink-subtle text-[10px]">
          This workspace is being built. Phase 1 foundation active.
        </p>
      </div>
    </div>
  )
}
