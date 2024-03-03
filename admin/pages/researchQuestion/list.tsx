import { DataGridScope, DeleteEntityButton, GenericCell, HasOneSelectCell, LinkButton } from '@contember/admin'
import { Directive } from '../../components/Directives'
import { SlotSources } from '../../components/Slots'

export default () => {
	return (
		<>
			<SlotSources.Title>
				Research questions
			</SlotSources.Title>
			<SlotSources.Actions>
				<LinkButton to="researchQuestion/create">
					Create new research question
				</LinkButton>
			</SlotSources.Actions>
			<Directive name="content-max-width" content={null} />
			<DataGridScope entities="ResearchQuestion" itemsPerPage={50}>
				<GenericCell shrunk canBeHidden={false}>
					<LinkButton to="researchQuestion/edit(id: $entity.id)">
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
