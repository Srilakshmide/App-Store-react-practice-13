import './index.css'

const AppItem = props => {
  const {eachApp} = props
  const {appName, imageUrl} = eachApp

  return (
    <li className="app-list-container app-item-container">
      <img src={imageUrl} alt={appName} className="app-image" />
      <p className="app-title">{appName}</p>
    </li>
  )
}

export default AppItem
