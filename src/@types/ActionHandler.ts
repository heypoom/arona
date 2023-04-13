import {Action} from './Action'
import {ActionContext} from './ActionContext'

import {AgentContext} from './AgentContext'

export type ActionHandler<A extends Action = Action> = (
  action: A,
  context: ActionContext
) => AgentContext

export type ActionHandlerMap = {
  [Type in Action['type']]: ActionHandler<Extract<Action, {type: Type}>>
}
