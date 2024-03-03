import { block$$, blockList$$, criteria$$, dataExtraction$$, dataSynthesis$$, publicationSection$$, query$, researchQuestion$$, study$$ } from '../__generated/fetchers'

export const queryGetResearchQuestion = query$.getResearchQuestion(researchQuestion$$
	.blocks(
		{},
		blockList$$
		.items(
			{},
			block$$
		)
		.criteria(
			{},
			criteria$$
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