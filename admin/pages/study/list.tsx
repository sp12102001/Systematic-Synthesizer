import { DataGridScope, DeleteEntityButton, GenericCell, HasOneSelectCell, LinkButton } from '@contember/admin'
import { Directive } from '../../components/Directives'
import { SlotSources } from '../../components/Slots'

export default () => {
	return (
		<>
			<SlotSources.Title>
				Studies
			</SlotSources.Title>
			<SlotSources.Actions>
				<LinkButton to="study/create">
					Create new study
				</LinkButton>
			</SlotSources.Actions>
			<Directive name="content-max-width" content={null} />
			<DataGridScope entities="Study" itemsPerPage={50}>
				<GenericCell shrunk canBeHidden={false}>
					<LinkButton to="study/edit(id: $entity.id)">
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
