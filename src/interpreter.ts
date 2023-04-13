import {AgentConfig} from './@types/AgentConfig'
import {createAgentContext} from './context'

export function startAgent(config: AgentConfig) {
  let state = createAgentContext(config)

  while (state.status !== 'stopped') {}
}
