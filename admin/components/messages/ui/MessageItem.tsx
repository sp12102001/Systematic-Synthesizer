import { Box, BoxProps, Description, Stack } from '@contember/admin'
import { useClassName, useClassNameFactory } from '@contember/react-utils'
import { HTMLDivElementProps } from '@contember/ui'
import { ComponentClassNameProps, contentThemeClassName, controlsThemeClassName, dataAttribute } from '@contember/utilities'
import { memo } from 'react'
import { MessagesListItemLineProps, MessagesListItemProps } from '../types'

export interface MessageItemProps extends MessagesListItemProps, Omit<BoxProps, keyof MessagesListItemProps | 'header'> { }

const MessageItemComponent = memo<MessageItemProps>(({
	authorName,
	className: classNameProp,
	componentClassName = 'message-item',
	createdAt,
	message,
	mine,
	...rest
}) => {
	const className = useClassNameFactory(componentClassName)

	return (
		<Box
			align={mine ? 'end' : 'start'}
			background={false}
			border={false}
			padding="gap"
			className={className(null, classNameProp)}
			data-mine={dataAttribute(mine)}
			gap="gap"
			fit={false}
			{...rest}
		>
			<Box
				horizontal
				borderRadius="padding"
				className={className('bubble', [
					mine ? contentThemeClassName('accent') : undefined,
					mine ? controlsThemeClassName('accent') : undefined,
				])}
				fit={false}
				padding="double"
			>
				<span className={useClassName('text')}>
					{message}
				</span>
			</Box>
			<Description>
				<Stack className={className('meta')} horizontal gap="gap">
					<span className={className('meta-author-name')}>
						{authorName}
					</span>
					<span className={className('meta-created-at')}>
						{createdAt}
					</span>
				</Stack>
			</Description>
		</Box>
	)
})
MessageItemComponent.displayName = 'MessageItemComponent'

interface MessageBubbleLineProps extends
	Omit<HTMLDivElementProps, keyof ComponentClassNameProps | keyof MessagesListItemLineProps>,
	Omit<ComponentClassNameProps, keyof MessagesListItemLineProps>,
	MessagesListItemLineProps { }

const MessageBubbleLine = memo<MessageBubbleLineProps>(({
	componentClassName = 'message-bubble-line',
	className,
	...rest
}) => (
	<div className={useClassName(componentClassName, className)} {...rest} />
))

export const MessageItem = Object.assign(MessageItemComponent, { Line: MessageBubbleLine })
