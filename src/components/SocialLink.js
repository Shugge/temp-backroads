const SocialLink = (props) => {
  const {href, icon, itemClass} = props;
  return (
    <a href={href} rel='noreferrer' target="_blank" className={itemClass}>
        <i className={icon}></i>
    </a>
  )
}
export default SocialLink