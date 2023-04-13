interface EvalAction {
  type: 'eval'
  input: string
  language: 'js' | 'python'
}

interface SearchAction {
  type: 'search'
  input: string
  engine: 'google'
}

interface GraphQueryAction {
  type: 'graph.query'

  /** Input as Cypher query */
  input: string
}

interface SQLQueryAction {
  type: 'sql.query'

  /** Input as SQL sring */
  input: string
}

export type Action =
  | EvalAction
  | SearchAction
  | GraphQueryAction
  | SQLQueryAction

export type ActionType = Action['type']
