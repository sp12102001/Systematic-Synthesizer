import { block$$, blockList$$, criteria$$, dataExtraction$$, dataSynthesis$$, publicationSection$$, query$, researchQuestion$$, study$$ } from '../__generated/fetchers'

export const queryGetCriteria = query$.getCriteria(criteria$$
	.blocks(
		{},
		blockList$$
		.items(
			{},
			block$$
		)
		.researchQuestion(
			{},
			researchQuestion$$
		)
		.study(
			{},
			study$$
		)
		.dataExtraction(
			{},
			dataExtraction$$
		)
		.dataSynthesis(
			{},
			dataSynthesis$$
		)
		.publicationSection(
			{},
			publicationSection$$
		)
	)
)