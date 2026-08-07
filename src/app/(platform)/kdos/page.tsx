import { WorkspaceView } from '@/shared/components/navigation/WorkspaceView'

export const metadata = { title: 'KDOS' }

export default function KDOSPage() {
  return (
    <WorkspaceView
      workspace="KDOS"
      description="KDOS platform — enterprise clients, licensing and deployments"
    />
  )
}
