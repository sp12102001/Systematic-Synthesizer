import { SchemaDefinition as def } from '@contember/schema-definition'

import { BlockList } from './BlockList'

export class Criteria {
	blocks = def.oneHasOne(BlockList, 'criteria').removeOrphan()
}
