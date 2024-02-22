import { NavLink } from 'react-router-dom'
import './pageNavigation.css'

export const PageNavigation = ({title}) => {
  return (
    <div className="pagenavigation">
        <NavLink to="/">Home /</NavLink>
        <span>{title}</span>
    </div>
  )
}
