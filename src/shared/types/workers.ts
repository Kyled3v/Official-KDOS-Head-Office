import type { BaseEntity, Permission, Status } from './platform'

export type WorkerType = 'human' | 'ai'

export interface BaseWorker extends BaseEntity {
  type: WorkerType
  name: string
  role: string
  department: string
  workspaceId: string
  status: Status
  permissions: Permission[]
}

export interface HumanWorker extends BaseWorker {
  type: 'human'
  email: string
  title: string
  reportingTo?: string
  employmentType: 'full-time' | 'part-time' | 'contractor' | 'consultant'
}

export interface AIWorker extends BaseWorker {
  type: 'ai'
  provider: AIProvider
  model: string
  modelVersion: string
  capabilities: string[]
  knowledgeSources: string[]
  costPerRequest?: number
  totalCost: number
  totalExecutions: number
  health: AIWorkerHealth
}

export type AIProvider = 'deepseek' | 'ollama' | 'anthropic' | 'openai' | 'custom'

export type AIWorkerHealth = 'healthy' | 'degraded' | 'offline' | 'unknown'

export type Worker = HumanWorker | AIWorker
