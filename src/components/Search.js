import React from 'react'

class Search extends React.Component {
    render() {
        return (
            <form>
                <input type="text" placeholder="Search" onChange={this.props.searchList} />
            </form>
        )
    }
}

export default Search;