import React from 'react'
import ContentLoader from 'react-content-loader'

const CheckboxList = props => (
  <ContentLoader
    speed={2}
    width={'100%'}
    height={400}
    viewBox="0 0 400 450"
    backgroundColor="#f3f3f3"
    foregroundColor="#999"
    {...props}
  >
    <rect x="35" y="20" rx="5" ry="5" width="400" height="50" />
    <rect x="35" y="80" rx="5" ry="5" width="400" height="20" />
    <rect x="35" y="110" rx="5" ry="5" width="400" height="30" />
    <rect x="35" y="150" rx="5" ry="5" width="400" height="40" />
    <rect x="3" y="35" rx="4" ry="4" width="20" height="20" />
    <rect x="3" y="80" rx="4" ry="4" width="20" height="20" />
    <rect x="3" y="115" rx="4" ry="4" width="20" height="20" />
    <rect x="3" y="160" rx="4" ry="4" width="20" height="20" />
  </ContentLoader>
)

CheckboxList.metadata = {
  name: 'Manuela Garcia',
  github: 'ManuelaGar',
  description: 'This is a checkbox list loader.',
  filename: 'CheckboxList',
}

export {CheckboxList}