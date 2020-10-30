import React from 'react'

import {Page, H1, H2, Text, Button} from 'components/lib'
import Section from 'components/Section'
import Tickets from 'components/Tickets'

export default () => (
  <Page>
    <Section>
      <H1>Registration</H1>
      <Text>You can register for the symposium for free! By clicking the button below, you can sign up for the event and this will make sure you receive the link to the online event! We will also keep you up to date with the latest information about the event.</Text>
      <br/>
      <Button secondary large to={"/register"}>Registration Symposium</Button>

      <H2>PwC Case Study</H2>
      <Text>You can also register for the case study by PwC for free! The case study will take place right before the symposium at 18:00 and will last about one hour. Click the button below to register now!</Text>
      <br/>
      <Button secondary large to={"/registerCase"}>Registration Case Study</Button>
    </Section>
  </Page>
)
