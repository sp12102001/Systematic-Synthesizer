import { CreateScope, LinkButton, PersistButton, Stack } from '@contember/admin'
import { StudyCreateForm } from '../../components/forms/StudyForm'
import { SlotSources } from '../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<SlotSources.Title>
				Create study
			</SlotSources.Title>
			<CreateScope entity="Study" redirectOnSuccess="study/edit(id: $entity.id)">
				<SlotSources.Actions>
					<PersistButton labelSave="Create study" labelSaved="Create study" />
				</SlotSources.Actions>
				<SlotSources.Back>
					<LinkButton to="study/list" size="small" className="mr-2" distinction="outlined">
						<Stack horizontal gap="gap">
							<ArrowLeftIcon />
							Studies
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<>
					<StudyCreateForm />
				</>
			</CreateScope>
		</>
	)
}
