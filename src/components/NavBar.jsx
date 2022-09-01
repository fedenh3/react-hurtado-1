import { CartWidget } from './CartWidget'
import './NavBar.css'

export const NavBar = () => {
  return (
    <ul>
      <li>Inicio</li>
      <li>Destinos</li>
      <li>Consejos</li>
      <CartWidget />
    </ul>
  )
}
