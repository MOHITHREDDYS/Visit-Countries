import './style.css'

const Countries = props => {
  const {countriesList, updateList} = props

  return (
    <ul className="countries-container">
      {countriesList.map(eachCountry => {
        const {id, name, isVisited} = eachCountry

        const onClickingVisitButton = () => {
          const changedList = countriesList.map(country => {
            if (country.id === id) {
              return {
                id: country.id,
                name: country.name,
                imageUrl: country.imageUrl,
                isVisited: true,
              }
            }
            return country
          })
          updateList(changedList)
        }

        return (
          <li key={id} className="countries-list">
            <p className="countries-name">{name}</p>
            {!isVisited && (
              <button
                type="button"
                className="visit-button"
                onClick={onClickingVisitButton}
              >
                Visit
              </button>
            )}
            {isVisited && <p className="visited">Visited</p>}
          </li>
        )
      })}
    </ul>
  )
}

export default Countries
