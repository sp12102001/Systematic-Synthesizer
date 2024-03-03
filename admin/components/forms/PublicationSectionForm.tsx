import { BlockRepeater, Component } from '@contember/admin'
import { ReactFragment } from 'react'

export const PublicationSectionCreateForm = Component(() => <ReactFragment />)

export const PublicationSectionEditForm = Component(() => <>
	<BlockRepeater
		field="blocks.items"
		label="Block"
		discriminationField="type"
		sortableBy="order"
		addButtonText="Add content block"
	/>
</>)
