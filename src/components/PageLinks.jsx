import { pageLinks } from '../data'
import { Link } from 'react-router-dom'; 
import PageLink from './PageLink'
const PageLinks = ({ parentClass, itemClass }) => {
  return (
    <ul className={parentClass} id='nav-links'>
      {pageLinks.map((link) => {
        console.log(link.path)
        return<Link to={link.path} className="navbar-link">
        <PageLink key={link.id} link={link} itemClass={itemClass} />
      </Link> 
      })}
    </ul>
  )
}
export default PageLinks
