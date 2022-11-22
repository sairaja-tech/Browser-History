import './index.css'

const HistoryItem = props => {
  const {historyDetails, deleteHistory} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = historyDetails
  const onDelete = () => {
    deleteHistory(id)
  }

  const initialHistoryList = props

  console.log(initialHistoryList)

  return (
    <li className="listContainer">
      <div className="alignContainer">
        <div className="historyContainer">
          <p className="time">{timeAccessed}</p>
          <img src={logoUrl} alt="domain logo" className="logoImage" />
          <p className="title">{title}</p>
          <p className="domainUrl">{domainUrl}</p>
        </div>
        <button className="delete" testid="delete" type="button">
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete logo"
            onClick={onDelete}
          />
        </button>
      </div>
    </li>
  )
}
export default HistoryItem
