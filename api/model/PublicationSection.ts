import { SchemaDefinition as def } from '@contember/schema-definition'

import { BlockList } from './BlockList'

export class PublicationSection {
	blocks = def.oneHasOne(BlockList, 'publicationSection').removeOrphan()
}
