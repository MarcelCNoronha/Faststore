import type { Story } from '@storybook/react'
import React from 'react'

import type { SkeletonProps } from '../Skeleton'
import Component from '../Skeleton'
import mdx from './Skeleton.mdx'

const SkeletonTemplate: Story<SkeletonProps> = ({ testId, ...otherProps }) => (
  <Component testId={testId} {...otherProps} />
)

export const Skeleton = SkeletonTemplate.bind({})

export default {
  title: 'Atoms/Skeleton',
  parameters: {
    docs: {
      page: mdx,
    },
  },
}
