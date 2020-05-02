import styled from 'styled-components'
import { media } from 'utilities/styles'

import logo from 'assets/logo/Logo_symposium.svg'

export default styled.img.attrs({
  src: () => logo,
  alt: () => "Advanced Analytics: Diving Deep into your Data"
})`
  display: block;
  height: 3em;

  ${media.small`margin: auto;`}
  ${media.not.small`
    float: left;
    padding: .25em;
  `}
`
