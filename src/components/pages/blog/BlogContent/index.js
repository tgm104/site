import React from 'react'
import { Box } from 'serverless-design-system'
import { AppContainerNewest as AppContainer } from 'src/components'
import { getAuthorById } from 'src/utils/blog'
import AuthorCard from './AuthorCard'
import ContentWrapper from './ContentWrapper'
import Frontmatter from './Frontmatter'
import HeroImage from './HeroImage'
import SubscribeOptionDesktop from './SubscribeOptionDesktop'
import SubscribeOptionMobileAndTablet from './SubscribeOptionMobileAndTablet'
import ShareOptions from './ShareOptions'

export default ({ id, frontmatter, content }) => {
  const author = getAuthorById((frontmatter.authors || [])[0]) || {}

  return (
    <Box pb={[6, 6, 5, 8]}>
      <SubscribeOptionDesktop />
      <SubscribeOptionMobileAndTablet />
      <AppContainer>
        <Frontmatter frontmatter={frontmatter} />
        <HeroImage heroImage={frontmatter.heroImage} />
        <ShareOptions
          id={id}
          title={frontmatter.title}
        />
        <ContentWrapper
          width={[1, 1, 1, 0.65]}
          mx='auto'
          dangerouslySetInnerHTML={{ __html: content }}
        />
        <AuthorCard author={author} />
      </AppContainer>
    </Box>
  )
}
