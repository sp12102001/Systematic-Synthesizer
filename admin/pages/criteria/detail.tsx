import { Box, EditScope, LinkButton, Stack } from '@contember/admin'
import { SlotSources } from '../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<SlotSources.Title>
				Criterion detail
			</SlotSources.Title>
			<EditScope entity="Criteria(id=$id)">
				<SlotSources.Back>
					<LinkButton to="criteria/list" size="small" className="mr-2" distinction="outlined">
						<Stack horizontal gap="gap">
							<ArrowLeftIcon />
							Criteria
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<SlotSources.Actions>
					<LinkButton to="criteria/edit(id: $entity.id)">
						Edit criterion
					</LinkButton>
				</SlotSources.Actions>
				<Stack gap="larger">
					<Box data-elevated />
				</Stack>
			</EditScope>
		</>
	)
}
