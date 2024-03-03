import {
	Component,
	EntitySubTree,
	Field,
	HasMany,
	identityEnvironmentExtension,
	useEntityList,
	useEntitySubTree,
	usePersist,
} from '@contember/admin'
import { useCallback } from 'react'
import { NewMessageInput } from '../ui/NewMessageInput'

export interface NewMessageFieldProps {
	createdByEntityName: string
	field: string
}

export const NewMessageField = Component<NewMessageFieldProps>(({
	                                                                field,
                                                                }) => {
	const persist = usePersist()
	const entityList = useEntityList({ field, orderBy: 'createdAt' })
	const createdByUser = useEntitySubTree(`createdByUser`)

	const sendMessage = useCallback((message: string) => {
		entityList.createNewEntity(entityAccessor => {
			entityAccessor().getField('content').updateValue(message)
			entityAccessor().connectEntityAtField('author', createdByUser)
		})
		persist()
	}, [])

	return (
		<NewMessageInput onSend={sendMessage}/>
	)
}, ({
	    createdByEntityName,
	    field,
    }, environment) => (
	<>
		<HasMany field={field} orderBy="createdAt"/>
		<EntitySubTree
			entity={{
				entityName: createdByEntityName,
				where: {
					personId: environment.getExtension(identityEnvironmentExtension).identity?.person?.id ?? '',
				},
			}}
			alias="createdByUser"
		>
			<Field field="personId"/>
			<Field field="name"/>
		</EntitySubTree>
	</>
))
