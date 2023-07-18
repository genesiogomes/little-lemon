import { Nav } from './Nav'
import logo from '../assets/logo.svg'

export const Header = () => {
  return (
    <header>
      <img src={logo} alt="Little Lemon Logo" />
      <Nav />
    </header>
  )
}
