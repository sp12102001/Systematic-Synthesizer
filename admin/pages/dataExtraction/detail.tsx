import { Box, EditScope, LinkButton, Stack } from '@contember/admin'
import { SlotSources } from '../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<SlotSources.Title>
				Data extraction detail
			</SlotSources.Title>
			<EditScope entity="DataExtraction(id=$id)">
				<SlotSources.Back>
					<LinkButton to="dataExtraction/list" size="small" className="mr-2" distinction="outlined">
						<Stack horizontal gap="gap">
							<ArrowLeftIcon />
							Data extractions
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<SlotSources.Actions>
					<LinkButton to="dataExtraction/edit(id: $entity.id)">
						Edit data extraction
					</LinkButton>
				</SlotSources.Actions>
				<Stack gap="larger">
					<Box data-elevated />
				</Stack>
			</EditScope>
		</>
	)
}
