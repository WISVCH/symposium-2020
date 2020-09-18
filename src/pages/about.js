import React from 'react'

import {Page, H1, H2, H3, Row, Column, Text} from 'components/lib'
import Section from 'components/Section'
import Host from 'components/Host'
import RvA from 'components/RvA'
import Committee from 'components/Committee'
import CvA from 'components/CvA'

export default () => (
    <Page>
        <Section/>
        <Section>
            <H1>About the symposium</H1>
            <Text>This symposium is a biyearly symposium organized by the Mathematics- and Computer Science association
                ‘Christiaan Huygens’. The association puts time and resources into organizing these symposia, because
                they see value in the ability for students and fresh graduates to get an insight in what their studies
                can achieve in practice. In this edition, titled ‘Advanced Analytics: Diving Deep into your Data’,
                various speakers will give an insight into the state of the art of data analytics and the possible
                societal consequences.</Text>
        </Section>
        <Section>
            <H2>The Host</H2>
            <Host/>
            <Text>Eva de Valk is a journalist reporting on technology and innovation. She has been trying to unravel how society is evolving and is fascinated by the impact of technology on our society. She wrote the book "Silicon Valley - Waar de toekomst wordt gemaakt" on this topic. Eva has also been responsible for the coordination of the technology pages at NRC and as a "tech friend" has frequently provided commentaries at the NOS about the societal impact of technology and has done several projects in the area of corporate innovation.</Text>
        </Section>
        <Section>
            <H2>Board of Advice</H2>
            <Text>For acquiring contacts with several parties and for other support and tips, we have turned to the long
                experience and wisdom of professors, researchers and employees from our university.</Text>
            <RvA/>
        </Section>
        <Section>
            <H2>The Organising Committee</H2>
            <Committee/>
        </Section>
        <Section id="CvA">
            <Row>
                <Column size={9} lSize={9} mSize={12}>
                    {<H3>Board of Recommendation</H3>}
                    {<Text>The following people, speaking for their respectable institutions acknowledge the importance
                        and
                        competence of the symposium and recommend supporting the organisation.</Text>}

                </Column>
            </Row>
            <CvA/>
        </Section>
    </Page>
)
