import {AgentContext} from './AgentContext'

/** Stores agent's chat state in a vector database */
export type AgentPersistence = 'milvus' | 'redis' | 'pinecone'

export interface PersistenceProvider {
  key: AgentPersistence

  save(): AgentContext
  load(): AgentContext
}
