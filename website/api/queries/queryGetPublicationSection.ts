import { block$$, blockList$$, criteria$$, dataExtraction$$, dataSynthesis$$, publicationSection$$, query$, researchQuestion$$, study$$ } from '../__generated/fetchers'

export const queryGetPublicationSection = query$.getPublicationSection(publicationSection$$
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
		.dataSynthesis(
			{},
			dataSynthesis$$
		)
	)
)