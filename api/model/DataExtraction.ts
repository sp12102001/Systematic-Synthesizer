import { SchemaDefinition as def } from '@contember/schema-definition'

import { BlockList } from './BlockList'

export class DataExtraction {
	blocks = def.oneHasOne(BlockList, 'dataExtraction').removeOrphan()
}
