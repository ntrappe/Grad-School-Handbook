import React, { useState } from 'react';
import { Text, Heading, Label, Octicon, } from '@primer/react';
import { Blankslate } from '@primer/react/drafts';
import { AlertIcon } from '@primer/octicons-react';

function PageNotFound() {

  return (
    <>
      <Blankslate>
        <Blankslate.Visual>
          <AlertIcon size='medium' />
        </Blankslate.Visual>
        <Blankslate.Heading>
          Page Not Found
        </Blankslate.Heading>
        <Blankslate.Description>
          Unfortunately, we couldn't find that page. This website is still under construction
          so that page may not be accessible at the moment. Check back later!
        </Blankslate.Description>
        <Blankslate.PrimaryAction href='/'>
          Return to Home
        </Blankslate.PrimaryAction>
        <Blankslate.SecondaryAction href='https://github.com/ntrappe/Grad-School-Handbook/issues'>
          Report an issue or problem
        </Blankslate.SecondaryAction>
      </Blankslate>
    </>
  )
}

export default PageNotFound;