import { DataGridScope, DeleteEntityButton, GenericCell, HasOneSelectCell, LinkButton } from '@contember/admin'
import { Directive } from '../../components/Directives'
import { SlotSources } from '../../components/Slots'

export default () => {
	return (
		<>
			<SlotSources.Title>
				Data syntheses
			</SlotSources.Title>
			<SlotSources.Actions>
				<LinkButton to="dataSynthesis/create">
					Create new data synthesis
				</LinkButton>
			</SlotSources.Actions>
			<Directive name="content-max-width" content={null} />
			<DataGridScope entities="DataSynthesis" itemsPerPage={50}>
				<GenericCell shrunk canBeHidden={false}>
					<LinkButton to="dataSynthesis/edit(id: $entity.id)">
						Edit
					</LinkButton>
				</GenericCell>
				<HasOneSelectCell field="blocks" header="Block" options="BlockList.id" />
				<GenericCell shrunk canBeHidden={false}>
					<DeleteEntityButton immediatePersist />
				</GenericCell>
			</DataGridScope>
		</>
	)
}
