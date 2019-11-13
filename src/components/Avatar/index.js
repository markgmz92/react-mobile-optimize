import React from 'react'
import { Image } from 'semantic-ui-react'

const Avatar = () => (
  <div>
    <Image id="Avatar" src='https://react.semantic-ui.com/images/wireframe/square-image.png' size="tiny" class= "ui avatar image" avatar/>
    <span>User Name</span>
  </div>
)

export default Avatar