import { CreateScope, LinkButton, PersistButton, Stack } from '@contember/admin'
import { PublicationSectionCreateForm } from '../../components/forms/PublicationSectionForm'
import { SlotSources } from '../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<SlotSources.Title>
				Create publication section
			</SlotSources.Title>
			<CreateScope entity="PublicationSection" redirectOnSuccess="publicationSection/edit(id: $entity.id)">
				<SlotSources.Actions>
					<PersistButton labelSave="Create publication section" labelSaved="Create publication section" />
				</SlotSources.Actions>
				<SlotSources.Back>
					<LinkButton to="publicationSection/list" size="small" className="mr-2" distinction="outlined">
						<Stack horizontal gap="gap">
							<ArrowLeftIcon />
							Publication sections
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<>
					<PublicationSectionCreateForm />
				</>
			</CreateScope>
		</>
	)
}
