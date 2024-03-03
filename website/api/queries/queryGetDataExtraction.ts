import { block$$, blockList$$, criteria$$, dataExtraction$$, dataSynthesis$$, publicationSection$$, query$, researchQuestion$$, study$$ } from '../__generated/fetchers'

export const queryGetDataExtraction = query$.getDataExtraction(dataExtraction$$
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
		.criteria(
			{},
			criteria$$
		)
		.study(
			{},
			study$$
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