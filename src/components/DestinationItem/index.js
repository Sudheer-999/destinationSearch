import './index.css'

const DestinationItem = props => {
  const {item} = props
  const {name, imgUrl} = item

  return (
    <li className="item-container">
      <img src={imgUrl} className="item-image" alt={name} />
      <p className="item-name">{name}</p>
    </li>
  )
}

export default DestinationItem
