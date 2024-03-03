import { BlockRepeater, Component } from '@contember/admin'

export const DataSynthesisCreateForm = Component(() => <>
	<BlockRepeater
		field="blocks.items"
		label="Block"
		discriminationField="type"
		sortableBy="order"
		addButtonText="Add content block"
	/>
</>)

export const DataSynthesisEditForm = Component(() => <>
	<BlockRepeater
		field="blocks.items"
		label="Block"
		discriminationField="type"
		sortableBy="order"
		addButtonText="Add content block"
	/>
</>)
