import {AgentConfig} from './AgentConfig'

interface Task {}

export type AgentStatus = 'ready' | 'stopped'

export interface AgentContext {
  status: AgentStatus
  tasks: Task[]
  config: AgentConfig
}
