import {Component} from 'react'
import DestinationItem from '../DestinationItem/index'
import './index.css'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  OnSearch = event => {
    this.setState({searchInput: event.target.value})
    console.log(event.target.value)
  }

  render() {
    const {searchInput} = this.state
    const {destinationsList} = this.props
    const searchResults = destinationsList.filter(eachItem =>
      eachItem.name.toLowerCase().includes(searchInput),
    )
    return (
      <div className="bg-container">
        <h1 className="main-head">Destination Search</h1>
        <div className="input">
          <input
            type="search"
            onChange={this.OnSearch}
            className="search-box"
            value={searchInput}
            placeholder="Search"
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            className="search-logo"
            alt="search icon"
          />
        </div>
        <ul className="items-container">
          {searchResults.map(eachItem => (
            <DestinationItem item={eachItem} key={eachItem.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
