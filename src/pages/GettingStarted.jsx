import { ThemeProvider, BaseStyles, Heading, Text } from '@primer/react'

function GettingStarted() {
  return (
    <ThemeProvider>
      <BaseStyles>
        <h1>Getting Started</h1>
        <p>Welcome! So you're thinking about going to graduate school? Exciting!</p>
      </BaseStyles>
    </ThemeProvider>
  )
}

export default GettingStarted;