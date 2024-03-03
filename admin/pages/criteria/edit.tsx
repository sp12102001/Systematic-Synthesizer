import { EditScope, LinkButton, PersistButton, Stack } from '@contember/admin'
import { CriteriaEditForm } from '../../components/forms/CriteriaForm'
import { SlotSources } from '../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<SlotSources.Title>
				Edit criterion
			</SlotSources.Title>
			<EditScope entity="Criteria(id=$id)">
				<SlotSources.Back>
					<LinkButton to="criteria/list" size="small" className="mr-2" distinction="outlined">
						<Stack horizontal gap="gap">
							<ArrowLeftIcon />
							List
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<SlotSources.Actions>
					<PersistButton />
				</SlotSources.Actions>
				<CriteriaEditForm />
			</EditScope>
		</>
	)
}
