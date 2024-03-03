import { BlockRepeater, Component } from '@contember/admin'

export const ResearchQuestionCreateForm = Component(() => <>
	<BlockRepeater
		field="blocks.items"
		label="Block"
		discriminationField="type"
		sortableBy="order"
		addButtonText="Add content block"
	/>
</>)

export const ResearchQuestionEditForm = Component(() => <>
	<BlockRepeater
		field="blocks.items"
		label="Block"
		discriminationField="type"
		sortableBy="order"
		addButtonText="Add content block"
	/>
</>)
