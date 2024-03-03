import { Component, HasRole, Menu } from '@contember/admin'
import { DotIcon, NewspaperIcon } from 'lucide-react'

export const Navigation = Component(() => <Menu>
	<HasRole role="admin">
		<Menu.Item title="ResearchQuestion" to="researchQuestion/list" icon={<DotIcon />} />
		<Menu.Item title="PublicationSection" to="publicationSection/list" icon={<NewspaperIcon />} />
	</HasRole>
</Menu>)
