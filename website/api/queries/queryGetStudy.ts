import { block$$, blockList$$, criteria$$, dataExtraction$$, dataSynthesis$$, publicationSection$$, query$, researchQuestion$$, study$$ } from '../__generated/fetchers'

export const queryGetStudy = query$.getStudy(study$$
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