import type { Workspace } from '@/shared/types'

export const WORKSPACES: Workspace[] = [
  {
    id: 'executive',
    name: 'Executive',
    description: 'Executive Command Centre — full organisational visibility',
    path: '/executive',
  },
  {
    id: 'kyledev',
    name: 'KyleDev',
    description: 'KyleDev Systems Software internal operations',
    path: '/kyledev',
  },
  {
    id: 'kdos',
    name: 'KDOS',
    description: 'KDOS platform management — enterprise clients and licensing',
    path: '/kdos',
  },
]

export const PLATFORM_NAME = 'Official Head Office'
export const COMPANY_NAME = 'KyleDev Systems Software (Pty) Ltd'
