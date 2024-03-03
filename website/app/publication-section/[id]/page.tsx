import { execute } from '../../../api/__generated'
import { graphQLExecutor } from '../../../api/graphQLExecutor'
import { queryGetPublicationSection } from '../../../api/queries/queryGetPublicationSection'
import { ModelType } from 'graphql-ts-client-api'

export default async function Page({ params: { id } }: { params: { id: string } }) {
	const data = await getData(id)
	const { getPublicationSection } = data
	if (!getPublicationSection) { return }

	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<>
				<div>
					<div>
						{getPublicationSection.blocks.items.map(itemItem => <>
								<p>
									{itemItem.researchQuestion}
								</p>
								<p>
									{itemItem.inclusionCriteria}
								</p>
								<p>
									{itemItem.exclusionCriteria}
								</p>
								<p>
									{itemItem.userQuery}
								</p>
								<p>
									{itemItem.apiKey}
								</p>
								<p>
									{itemItem.title}
								</p>
								<p>
									{itemItem.description}
								</p>
								<p>
									{itemItem.pdfTextExtraction}
								</p>
								<p>
									{itemItem.htmlTextExtraction}
								</p>
								<p>
									{itemItem.entityExtraction}
								</p>
								<p>
									{itemItem.introduction}
								</p>
								<p>
									{itemItem.methods}
								</p>
								<p>
									{itemItem.results}
								</p>
								<p>
									{itemItem.discussion}
								</p>
								<p>
									{itemItem.conclusion}
								</p>
							</>)}
					</div>
					<div />
					<div />
					<div />
					<div />
					<div />
				</div>
			</>
		</main>
	)
}

async function getData(id: string) {
	const { getPublicationSection }: ModelType<typeof queryGetPublicationSection> = await execute(queryGetPublicationSection, { variables: { by: { id } }, executor: graphQLExecutor() })

	if (!getPublicationSection) {
		return {
			notFound: true,
		}
	}

	return { getPublicationSection }
}
