import { BlockRepeater, Component } from '@contember/admin'

export const StudyCreateForm = Component(() => <>
	<BlockRepeater
		field="blocks.items"
		label="Block"
		discriminationField="type"
		sortableBy="order"
		addButtonText="Add content block"
	/>
</>)

export const StudyEditForm = Component(() => <>
	<BlockRepeater
		field="blocks.items"
		label="Block"
		discriminationField="type"
		sortableBy="order"
		addButtonText="Add content block"
	/>
</>)
