import {ActionHandler, ActionHandlerMap} from './@types/ActionHandler'

const handlers: ActionHandlerMap = {
  eval: (action, context) => context.agent,
  search: (action, context) => context.agent,
  'graph.query': (action, context) => context.agent,
  'sql.query': (action, context) => context.agent,
}

/**
 * Executes the action from the given JSON input.
 */
export const execute: ActionHandler = (action, context) => {
  const handler = handlers[action.type] as ActionHandler
  if (!handler) return context.agent

  return handler(action, context)
}
