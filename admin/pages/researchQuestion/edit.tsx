import { EditScope, LinkButton, PersistButton, Stack } from '@contember/admin'
import { ResearchQuestionEditForm } from '../../components/forms/ResearchQuestionForm'
import { SlotSources } from '../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<SlotSources.Title>
				Edit research question
			</SlotSources.Title>
			<EditScope entity="ResearchQuestion(id=$id)">
				<SlotSources.Back>
					<LinkButton to="researchQuestion/list" size="small" className="mr-2" distinction="outlined">
						<Stack horizontal gap="gap">
							<ArrowLeftIcon />
							List
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<SlotSources.Actions>
					<PersistButton />
				</SlotSources.Actions>
				<ResearchQuestionEditForm />
			</EditScope>
		</>
	)
}
