import React from 'react'
import './styles.css'

const Footer = () => (
  <div className="Footer dark">
    <div className="wrapper">
      <p>W.I.S.V. ‘Christiaan Huygens’ (CH) is the study association for students of Applied Mathematics and Computer Science at the Delft University of Technology.</p>
      <h3>Contact Info</h3>
      <p>
        <strong className="Footer-label">Address:</strong> Mekelweg 4, 2628CD Delft<br />
        <strong className="Footer-label">Email:</strong> symposium@ch.tudelft.nl<br />
        <strong className="Footer-label">Phone:</strong> 015-278 2532<br />
        <strong className="Footer-label">CoC:</strong> 40397077
      </p>
      <p>Copyright &copy;2015-{new Date().getFullYear()} by W.I.S.V. ‘Christiaan Huygens’. All rights reserved.</p>
    </div>
  </div>
)

export default Footer
