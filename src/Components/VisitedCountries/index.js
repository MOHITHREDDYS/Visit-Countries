import './style.css'

const VisitedCountries = props => {
  const {countriesList, updateList} = props

  const filteredList = countriesList.filter(
    eachCountry => eachCountry.isVisited === true,
  )

  if (filteredList.length > 0) {
    return (
      <ul className="visited-country-container">
        {filteredList.map(eachCountry => {
          const {id, name, imageUrl} = eachCountry

          const onClickingRemoveButton = () => {
            const changedList = countriesList.map(country => {
              if (country.id === id) {
                return {
                  id: country.id,
                  name: country.name,
                  imageUrl: country.imageUrl,
                  isVisited: false,
                }
              }
              return country
            })
            updateList(changedList)
          }

          return (
            <li key={id} className="visited-country-list">
              <img
                src={imageUrl}
                alt="thumbnail"
                className="country-thumbnail"
              />
              <div className="name-and-remove-container">
                <p className="visited-country-name">{name}</p>
                <button
                  type="button"
                  className="remove-button"
                  onClick={onClickingRemoveButton}
                >
                  Remove
                </button>
              </div>
            </li>
          )
        })}
      </ul>
    )
  }
  return (
    <div className="no-country-visited-container">
      <p className="no-country-visit">No Countries Visited Yet!</p>
    </div>
  )
}

export default VisitedCountries
