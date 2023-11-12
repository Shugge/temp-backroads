import { pageLinks } from "../data";
import PageLink from "./PageLink";

const PageLinks = ({parentClass, itemClass}) => {
  return (
    <ul className={parentClass} id="nav-links">
        {pageLinks.map((link) => {
            return (
                <li key={link.id}>
                    <PageLink {...link} itemClass={itemClass}/>
                </li>
            );
        })}
    </ul>
  )
}
export default PageLinks