import { EditScope, LinkButton, PersistButton, Stack } from '@contember/admin'
import { StudyEditForm } from '../../components/forms/StudyForm'
import { SlotSources } from '../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<SlotSources.Title>
				Edit study
			</SlotSources.Title>
			<EditScope entity="Study(id=$id)">
				<SlotSources.Back>
					<LinkButton to="study/list" size="small" className="mr-2" distinction="outlined">
						<Stack horizontal gap="gap">
							<ArrowLeftIcon />
							List
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<SlotSources.Actions>
					<PersistButton />
				</SlotSources.Actions>
				<StudyEditForm />
			</EditScope>
		</>
	)
}
