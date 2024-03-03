import { CreateScope, LinkButton, PersistButton, Stack } from '@contember/admin'
import { DataExtractionCreateForm } from '../../components/forms/DataExtractionForm'
import { SlotSources } from '../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<SlotSources.Title>
				Create data extraction
			</SlotSources.Title>
			<CreateScope entity="DataExtraction" redirectOnSuccess="dataExtraction/edit(id: $entity.id)">
				<SlotSources.Actions>
					<PersistButton labelSave="Create data extraction" labelSaved="Create data extraction" />
				</SlotSources.Actions>
				<SlotSources.Back>
					<LinkButton to="dataExtraction/list" size="small" className="mr-2" distinction="outlined">
						<Stack horizontal gap="gap">
							<ArrowLeftIcon />
							Data extractions
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<>
					<DataExtractionCreateForm />
				</>
			</CreateScope>
		</>
	)
}
