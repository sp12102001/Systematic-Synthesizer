import { Component, If, TextField } from '@contember/admin'
import { ConnectUser } from '../../ConnectUser'

export const MessageForm = Component(() => (
	<If condition={entity => !entity.idOnServer}>
		<ConnectUser field="author" />
		<TextField field="content" label="Content" />
	</If>
))
