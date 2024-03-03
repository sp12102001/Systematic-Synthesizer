import { CreateScope, LinkButton, PersistButton, Stack } from '@contember/admin'
import { DataSynthesisCreateForm } from '../../components/forms/DataSynthesisForm'
import { SlotSources } from '../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<SlotSources.Title>
				Create data synthesis
			</SlotSources.Title>
			<CreateScope entity="DataSynthesis" redirectOnSuccess="dataSynthesis/edit(id: $entity.id)">
				<SlotSources.Actions>
					<PersistButton labelSave="Create data synthesis" labelSaved="Create data synthesis" />
				</SlotSources.Actions>
				<SlotSources.Back>
					<LinkButton to="dataSynthesis/list" size="small" className="mr-2" distinction="outlined">
						<Stack horizontal gap="gap">
							<ArrowLeftIcon />
							Data syntheses
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<>
					<DataSynthesisCreateForm />
				</>
			</CreateScope>
		</>
	)
}
