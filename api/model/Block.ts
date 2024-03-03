import { SchemaDefinition as def } from '@contember/schema-definition'

import { BlockList } from './BlockList'

export class Block {
	list = def.manyHasOne(BlockList, 'items').notNull().cascadeOnDelete()
	order = def.intColumn()
	researchQuestion = def.stringColumn().notNull()
	inclusionCriteria = def.stringColumn().notNull()
	exclusionCriteria = def.stringColumn().notNull()
	yearRange = def.intColumn().notNull()
	userQuery = def.stringColumn().notNull()
	apiKey = def.stringColumn().notNull()
	searchResults = def.jsonColumn().notNull()
	selectedStudies = def.jsonColumn().notNull()
	title = def.stringColumn().notNull()
	description = def.stringColumn().notNull()
	pdfTextExtraction = def.stringColumn().notNull()
	htmlTextExtraction = def.stringColumn().notNull()
	entityExtraction = def.stringColumn().notNull()
	structuredDataOutput = def.jsonColumn().notNull()
	qualitativeResults = def.jsonColumn().notNull()
	quantitativeResults = def.jsonColumn().notNull()
	introduction = def.stringColumn().notNull()
	methods = def.stringColumn().notNull()
	results = def.stringColumn().notNull()
	discussion = def.stringColumn().notNull()
	conclusion = def.stringColumn().notNull()
}
