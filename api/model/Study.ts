import { SchemaDefinition as def } from '@contember/schema-definition'

import { BlockList } from './BlockList'

export class Study {
	blocks = def.oneHasOne(BlockList, 'study').removeOrphan()
}
