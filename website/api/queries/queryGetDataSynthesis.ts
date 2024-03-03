import { block$$, blockList$$, criteria$$, dataExtraction$$, dataSynthesis$$, publicationSection$$, query$, researchQuestion$$, study$$ } from '../__generated/fetchers'

export const queryGetDataSynthesis = query$.getDataSynthesis(dataSynthesis$$
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
		.dataExtraction(
			{},
			dataExtraction$$
		)
		.publicationSection(
			{},
			publicationSection$$
		)
	)
)