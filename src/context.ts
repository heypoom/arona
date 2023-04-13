import {AgentConfig} from './@types/AgentConfig'
import {AgentContext} from './@types/AgentContext'

export const createAgentContext = (config: AgentConfig): AgentContext => {
  return {status: 'ready', tasks: [], config}
}
