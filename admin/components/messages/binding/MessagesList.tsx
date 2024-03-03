import {
	Component,
	DateFieldView,
	Field, HasMany,
	HasManyProps,
	HasOne,
	If,
	useEntityList,
	useField,
	useIdentity,
} from '@contember/admin'
import { ScrollView } from '../../ScrollView/ScrollView'
import { EmptyState } from '../ui/EmptyState'
import { MessageItem } from '../ui/MessageItem'

const defaultCreatedAtFormat: Intl.DateTimeFormatOptions = {
	dateStyle: 'short',
	timeStyle: 'short',
}

interface MessagesListItemProps {
}

const MessagesListItem = Component<MessagesListItemProps>(() => {
	const { person } = useIdentity()
	const personId = person?.id
	const authorPersonId = useField<string>('author.personId').value

	return (
		<If condition={entity => !!entity.idOnServer}>
			<MessageItem
				authorName={<Field field="author.name"/>}
				createdAt={<DateFieldView field="createdAt" format={defaultCreatedAtFormat}/>}
				message={<Field field="content"
				                format={(value: string | null) => value?.split('\n').map((line, index) => (
					                <MessageItem.Line key={index}>{line}</MessageItem.Line>),
				                )}/>}
				mine={personId === authorPersonId}
			/>
		</If>
	)
}, () => (
	<>
		<HasOne field="author">
			<Field field="personId"/>
			<Field field="name"/>
		</HasOne>

		<Field field="content"/>
		<DateFieldView field="createdAt"/>
	</>
))
MessagesListItem.displayName = 'MessagesList.Item'

export type MessagesListProps<ListProps = never, EntityProps = never> =
	& HasManyProps<ListProps, EntityProps>

const MessagesListComponent = Component<MessagesListProps>((props) => {
	const entityList = useEntityList(props)
	const empty = entityList.length === 0

	return (
		<>
			{empty
				? <EmptyState/>
				: (
					<ScrollView reverse data-scrolled-bottom={false}>
						<HasMany {...props} />
					</ScrollView>
				)
			}
		</>
	)
}, (props) => (
	<>
		<HasMany {...props} />
	</>
))
MessagesListComponent.displayName = 'MessagesList'

export const MessagesList = Object.assign(MessagesListComponent, {
	Item: MessagesListItem,
})
