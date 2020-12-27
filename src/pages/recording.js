import React from 'react'

import {Page, H1, H2, Text, Button} from 'components/lib'
import Section from 'components/Section'

import recording from 'assets/201119_Christiaanhuygenssymposium.mp4';

import ReactPlayer from 'react-player'

export default () => (
    <Page>
        <Section>
            <H1>Symposium Advanced Analytics Recording</H1>
            <ReactPlayer url={recording} controls={true} config={{ file: {
                    attributes: {
                        controlsList: 'nodownload'
                    }
                }}}/>
        </Section>
    </Page>
)
