import { SchemaDefinition as def } from '@contember/schema-definition'

import { BlockList } from './BlockList'

export class ResearchQuestion {
	blocks = def.oneHasOne(BlockList, 'researchQuestion').removeOrphan()
}
