import {AgentContext} from './AgentContext'

export interface AgentConfig {
  /** Initial objective of the agent. */
  objective: string

  getPrompt(state: AgentContext): string
}
