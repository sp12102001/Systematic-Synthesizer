import { CreateScope, LinkButton, PersistButton, Stack } from '@contember/admin'
import { CriteriaCreateForm } from '../../components/forms/CriteriaForm'
import { SlotSources } from '../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<SlotSources.Title>
				Create criterion
			</SlotSources.Title>
			<CreateScope entity="Criteria" redirectOnSuccess="criteria/edit(id: $entity.id)">
				<SlotSources.Actions>
					<PersistButton labelSave="Create criterion" labelSaved="Create criterion" />
				</SlotSources.Actions>
				<SlotSources.Back>
					<LinkButton to="criteria/list" size="small" className="mr-2" distinction="outlined">
						<Stack horizontal gap="gap">
							<ArrowLeftIcon />
							Criteria
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<>
					<CriteriaCreateForm />
				</>
			</CreateScope>
		</>
	)
}
