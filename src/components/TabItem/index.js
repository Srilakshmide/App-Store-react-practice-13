import './index.css'

const TabItem = props => {
  const {eachTab, onClickTabItem, isActive} = props
  const {tabId, displayText} = eachTab

  const onClickTab = () => {
    onClickTabItem(tabId)
  }

  const activeTabClassName = isActive ? 'active-tab-btn' : ''

  return (
    <li className="tabItem">
      <button
        type="button"
        className={`button ${activeTabClassName}`}
        onClick={onClickTab}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
