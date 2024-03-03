import { EditScope, LinkButton, PersistButton, Stack } from '@contember/admin'
import { PublicationSectionEditForm } from '../../components/forms/PublicationSectionForm'
import { SlotSources } from '../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<SlotSources.Title>
				Edit publication section
			</SlotSources.Title>
			<EditScope entity="PublicationSection(id=$id)">
				<SlotSources.Back>
					<LinkButton to="publicationSection/list" size="small" className="mr-2" distinction="outlined">
						<Stack horizontal gap="gap">
							<ArrowLeftIcon />
							List
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<SlotSources.Actions>
					<PersistButton />
				</SlotSources.Actions>
				<PublicationSectionEditForm />
			</EditScope>
		</>
	)
}
