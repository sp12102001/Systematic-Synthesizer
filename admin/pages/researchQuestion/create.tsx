import { CreateScope, LinkButton, PersistButton, Stack } from '@contember/admin'
import { ResearchQuestionCreateForm } from '../../components/forms/ResearchQuestionForm'
import { SlotSources } from '../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<SlotSources.Title>
				Create research question
			</SlotSources.Title>
			<CreateScope entity="ResearchQuestion" redirectOnSuccess="researchQuestion/edit(id: $entity.id)">
				<SlotSources.Actions>
					<PersistButton labelSave="Create research question" labelSaved="Create research question" />
				</SlotSources.Actions>
				<SlotSources.Back>
					<LinkButton to="researchQuestion/list" size="small" className="mr-2" distinction="outlined">
						<Stack horizontal gap="gap">
							<ArrowLeftIcon />
							Research questions
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<>
					<ResearchQuestionCreateForm />
				</>
			</CreateScope>
		</>
	)
}
