import { Box, EditScope, LinkButton, Stack } from '@contember/admin'
import { SlotSources } from '../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<SlotSources.Title>
				Study detail
			</SlotSources.Title>
			<EditScope entity="Study(id=$id)">
				<SlotSources.Back>
					<LinkButton to="study/list" size="small" className="mr-2" distinction="outlined">
						<Stack horizontal gap="gap">
							<ArrowLeftIcon />
							Studies
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<SlotSources.Actions>
					<LinkButton to="study/edit(id: $entity.id)">
						Edit study
					</LinkButton>
				</SlotSources.Actions>
				<Stack gap="larger">
					<Box data-elevated />
				</Stack>
			</EditScope>
		</>
	)
}
