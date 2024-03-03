import { EditScope, LinkButton, PersistButton, Stack } from '@contember/admin'
import { DataExtractionEditForm } from '../../components/forms/DataExtractionForm'
import { SlotSources } from '../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<SlotSources.Title>
				Edit data extraction
			</SlotSources.Title>
			<EditScope entity="DataExtraction(id=$id)">
				<SlotSources.Back>
					<LinkButton to="dataExtraction/list" size="small" className="mr-2" distinction="outlined">
						<Stack horizontal gap="gap">
							<ArrowLeftIcon />
							List
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<SlotSources.Actions>
					<PersistButton />
				</SlotSources.Actions>
				<DataExtractionEditForm />
			</EditScope>
		</>
	)
}
