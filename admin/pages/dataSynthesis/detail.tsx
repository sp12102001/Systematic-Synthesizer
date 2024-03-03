import { Box, EditScope, LinkButton, Stack } from '@contember/admin'
import { SlotSources } from '../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<SlotSources.Title>
				Data synthesis detail
			</SlotSources.Title>
			<EditScope entity="DataSynthesis(id=$id)">
				<SlotSources.Back>
					<LinkButton to="dataSynthesis/list" size="small" className="mr-2" distinction="outlined">
						<Stack horizontal gap="gap">
							<ArrowLeftIcon />
							Data syntheses
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<SlotSources.Actions>
					<LinkButton to="dataSynthesis/edit(id: $entity.id)">
						Edit data synthesis
					</LinkButton>
				</SlotSources.Actions>
				<Stack gap="larger">
					<Box data-elevated />
				</Stack>
			</EditScope>
		</>
	)
}
