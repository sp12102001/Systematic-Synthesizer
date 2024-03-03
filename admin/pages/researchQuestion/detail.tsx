import { Box, EditScope, LinkButton, Stack } from '@contember/admin'
import { SlotSources } from '../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<SlotSources.Title>
				Research question detail
			</SlotSources.Title>
			<EditScope entity="ResearchQuestion(id=$id)">
				<SlotSources.Back>
					<LinkButton to="researchQuestion/list" size="small" className="mr-2" distinction="outlined">
						<Stack horizontal gap="gap">
							<ArrowLeftIcon />
							Research questions
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<SlotSources.Actions>
					<LinkButton to="researchQuestion/edit(id: $entity.id)">
						Edit research question
					</LinkButton>
				</SlotSources.Actions>
				<Stack gap="larger">
					<Box data-elevated />
				</Stack>
			</EditScope>
		</>
	)
}
