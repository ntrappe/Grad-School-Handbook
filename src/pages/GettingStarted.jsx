import { ThemeProvider, BaseStyles, Heading, Text } from '@primer/react'

function GettingStarted() {
  return (
    <ThemeProvider>
      <BaseStyles>
        <Heading as="h1">Getting Started</Heading>
        <Text>Welcome! So you're thinking about going to graduate school? Exciting!</Text>
      </BaseStyles>
    </ThemeProvider>
  )
}

export default GettingStarted;