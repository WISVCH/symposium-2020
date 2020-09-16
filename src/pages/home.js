import React from 'react'

import {H2, H3, Text, Page, Row, Column, Button, Image} from 'components/lib'

import Header from 'components/Header'
import Section from 'components/Section'

import IntroImage from 'components/IntroImage'
import Introduction from 'components/Introduction'
import Speakers from 'components/Speakers'
import CvA from 'components/CvA'

import team from 'assets/team.jpg'

export default () => (
    <Page>
        {/*<IntroImage />*/}
        <Header/>
        <Section id="intro">
        <Introduction></Introduction>
        </Section>
        <Section id="speakers">
        <Speakers />
        </Section>
            <Section id="corona">
                    <Row>
                            <Column size={12} sSize={12}>
                                    <H2>Symposium During COVID-19</H2>
                                    <Text>The world-wide pandemic affects all aspects of our lives, including the symposium. While there are lots of uncertainties about the circumstances among which the symposium will take place, the organizing committee's goal is still to organize an inspiring event accessible to as many participants as possible. Therefore, we are determined to organize the event on November 19th in whatever form possible, albeit physical or online. As soon as there is a more clear prospect, we will provide more details about the organization of the symposium.</Text>
                                    <br/> <br/>
                            </Column>
                    </Row>
            </Section>
        <Section id="about">
        <Row>
        <Column size={12} sSize={12}>
        <H2>About Us</H2>
        <Text>Advanced Analytics: Diving Deep intro your Data is organised by a team of 7 students from W.I.S.V. ‘Christiaan Huygens’.</Text>
        <Button medium to="/about">Learn more</Button>
        <br/> <br/>
        </Column>
        {/*<Column size={1} sSize={0} />*/}
        {/*<Column size={6} sSize={12}>*/}
        {/*<Image src={team} alt="The team" />*/}
        {/*</Column>*/}
        </Row>
        </Section>
    </Page>
)
