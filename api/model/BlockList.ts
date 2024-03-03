import { SchemaDefinition as def } from '@contember/schema-definition'

import { Block } from './Block'
import { ResearchQuestion } from './ResearchQuestion'
import { Criteria } from './Criteria'
import { Study } from './Study'
import { DataExtraction } from './DataExtraction'
import { DataSynthesis } from './DataSynthesis'
import { PublicationSection } from './PublicationSection'

export class BlockList {
	items = def.oneHasMany(Block, 'list').orderBy(['order'])
	researchQuestion = def.oneHasOneInverse(ResearchQuestion, 'blocks')
	criteria = def.oneHasOneInverse(Criteria, 'blocks')
	study = def.oneHasOneInverse(Study, 'blocks')
	dataExtraction = def.oneHasOneInverse(DataExtraction, 'blocks')
	dataSynthesis = def.oneHasOneInverse(DataSynthesis, 'blocks')
	publicationSection = def.oneHasOneInverse(PublicationSection, 'blocks')
}
