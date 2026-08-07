export type Environment = 'development' | 'staging' | 'production'

export type WorkspaceId = 'executive' | 'kyledev' | 'kdos'

export interface Workspace {
  id: WorkspaceId
  name: string
  description: string
  path: string
}

export interface PlatformConfig {
  appName: string
  version: string
  company: string
  environment: Environment
}

export type Status = 'active' | 'inactive' | 'pending' | 'suspended' | 'archived'

export type Permission = 'read' | 'write' | 'delete' | 'admin' | 'executive'

export interface BaseEntity {
  id: string
  createdAt: string
  updatedAt: string
}

export interface AuditEntry {
  id: string
  entityId: string
  entityType: string
  action: string
  performedBy: string
  performedByType: 'human' | 'ai'
  timestamp: string
  metadata?: Record<string, unknown>
}
