import { ThemeProvider, BaseStyles, Heading } from '@primer/react'

function Area() {
  return (
    <ThemeProvider>
      <BaseStyles>
        <Heading>Getting Started</Heading>
        <p>Welcome! So you're thinking about going to graduate school? Exciting!</p>
      </BaseStyles>
    </ThemeProvider>
  )
}

export default Area;