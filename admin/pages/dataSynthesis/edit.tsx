import { EditScope, LinkButton, PersistButton, Stack } from '@contember/admin'
import { DataSynthesisEditForm } from '../../components/forms/DataSynthesisForm'
import { SlotSources } from '../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<SlotSources.Title>
				Edit data synthesis
			</SlotSources.Title>
			<EditScope entity="DataSynthesis(id=$id)">
				<SlotSources.Back>
					<LinkButton to="dataSynthesis/list" size="small" className="mr-2" distinction="outlined">
						<Stack horizontal gap="gap">
							<ArrowLeftIcon />
							List
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<SlotSources.Actions>
					<PersistButton />
				</SlotSources.Actions>
				<DataSynthesisEditForm />
			</EditScope>
		</>
	)
}
