'use client'

import { RichTextRenderer as ContemberRichTextRenderer } from '@contember/react-client'

export type CustomRichTextRendererProps = {
	blocks?: any
	source?: any
	sourceField?: string
	referenceDiscriminationField?: string
}

export type ReferenceProps = {
	id: string
	type: string
	target: any
}

const RichTextRenderer = ({ blocks, sourceField, source, referenceDiscriminationField }: CustomRichTextRendererProps) => {
	const props: any = {
		referenceDiscriminationField,
		sourceField,
		...(blocks ? { blocks } : { source }),
	}

	return (
		<ContemberRichTextRenderer<any>
			{...props}
		/>
	)
}

export default RichTextRenderer
