import { PlatformShell } from '@/shared/components/navigation/PlatformShell'

export default function PlatformLayout({ children }: { children: React.ReactNode }) {
  return <PlatformShell>{children}</PlatformShell>
}
