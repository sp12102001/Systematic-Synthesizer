import { DataGridScope, DeleteEntityButton, GenericCell, HasOneSelectCell, LinkButton } from '@contember/admin'
import { Directive } from '../../components/Directives'
import { SlotSources } from '../../components/Slots'

export default () => {
	return (
		<>
			<SlotSources.Title>
				Criteria
			</SlotSources.Title>
			<SlotSources.Actions>
				<LinkButton to="criteria/create">
					Create new criterion
				</LinkButton>
			</SlotSources.Actions>
			<Directive name="content-max-width" content={null} />
			<DataGridScope entities="Criteria" itemsPerPage={50}>
				<GenericCell shrunk canBeHidden={false}>
					<LinkButton to="criteria/edit(id: $entity.id)">
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
