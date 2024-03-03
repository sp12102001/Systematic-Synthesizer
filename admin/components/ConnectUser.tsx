import { Component, identityEnvironmentExtension } from '@contember/admin'
import { ConnectEntity } from './ConnectEntity'

export const ConnectUser = Component<{ field: string }>(({ field }, environment) => {
	return (<ConnectEntity field={field} entity='User' where={`(personId='${environment.getExtension(identityEnvironmentExtension).identity?.person?.id}')`} />)
}, 'ConnectUser')
