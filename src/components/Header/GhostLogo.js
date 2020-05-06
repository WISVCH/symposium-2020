import styled from 'styled-components'

import logo from 'assets/logo/Logo_symposium_wit.svg'

const GhostLogo = styled.img.attrs({
  src: logo,
  alt: "Care for the Future"
})`
  position: absolute;
  top: 0;
  right: 0; bottom: 0;

  width: 50%;
  margin: auto;

  opacity: .25;

  transform: translate(15%, 0);
`

export default GhostLogo
