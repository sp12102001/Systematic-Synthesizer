import { SchemaDefinition as def } from '@contember/schema-definition'

import { BlockList } from './BlockList'

export class DataSynthesis {
	blocks = def.oneHasOne(BlockList, 'dataSynthesis').removeOrphan()
}
