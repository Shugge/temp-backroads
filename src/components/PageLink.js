const PageLink = (props) => {
  const {href, itemClass, text} = props;
  return (
    <a href={href} className={itemClass}> {text} </a>
  )
}
export default PageLink