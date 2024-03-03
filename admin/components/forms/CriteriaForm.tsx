import { BlockRepeater, Component } from '@contember/admin'

export const CriteriaCreateForm = Component(() => <>
	<BlockRepeater
		field="blocks.items"
		label="Block"
		discriminationField="type"
		sortableBy="order"
		addButtonText="Add content block"
	/>
</>)

export const CriteriaEditForm = Component(() => <>
	<BlockRepeater
		field="blocks.items"
		label="Block"
		discriminationField="type"
		sortableBy="order"
		addButtonText="Add content block"
	/>
</>)
