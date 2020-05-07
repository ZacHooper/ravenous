import React, {useState} from 'react'
import './SearchBar.css'

/*
class SearchBar extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            term: '',
            location: '',
            sortBy: 'best_match'
        };
        this.sortByOptions = {
            'Best Match': 'best_match',
            'Highest Rated': 'rating',
            'Most Reviewed': 'review_count'
        };
        this.handleSortByChange = this.handleSortByChange.bind(this)
        this.handleTermChange = this.handleTermChange.bind(this)
        this.handleLocationChange = this.handleLocationChange.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
    }

    getSortByClass (sortByOption) {
        return this.state.sortBy === sortByOption ? 'active' : '';
    }

    // -- Handle/setter Methods --
    handleSortByChange (sortByOption) {
        this.setState({sortBy: sortByOption});
    }

    handleTermChange (event) {
        this.setState({term: event.target.value});
    }

    handleLocationChange (event) {
        this.setState({location: event.target.value});
    }

    handleSearch (event) {
        this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
        event.preventDefault()
    }
    
    renderSortByOptions() {
        return Object.keys(this.sortByOptions).map(sortByOption => {
            let sortByOptionValue = this.sortByOptions[sortByOption];
            return <li className={this.getSortByClass(sortByOptionValue)} 
                       key={sortByOptionValue}
                       onClick={this.handleSortByChange.bind(this, sortByOptionValue)}
                   >{sortByOption}</li>;
        });
    }

    render() {
        return (
            <div className="SearchBar">
                <div className="SearchBar-sort-options">
                    <ul>
                        {this.renderSortByOptions()}
                    </ul>
                </div>
                <div className="SearchBar-fields">
                    <input placeholder="Search Businesses" onChange={this.handleTermChange}/>
                    <input placeholder="Where?" onChange={this.handleLocationChange}/>
                </div>
                <div className="SearchBar-submit">
                    <a onClick={this.handleSearch}>Let's Go</a>
                </div>
            </div>
        );
    }
} 
*/

//Clicks can likely be handled in the return call however, onChange events need a handler function

function SearchBar(props) {
    const sortByOptions = {
        'Best Match': 'best_match',
        'Highest Rated': 'rating',
        'Most Reviewed': 'review_count'
    };

    const [term, setTerm] = useState("");
    const [location, setLocation] = useState("");
    const [sortBy, setSortBy] = useState("best_match");

    const getSortByClass = (sortByOption) => {
        return sortByOption === sortBy ? 'active' : '';
    }

    const handleTermChange = (event) => {
        return setTerm(event.target.value);
    }

    const handleLocationChange = (event) => {
        return setLocation(event.target.value);
    }

    const handleEnterPress = (event) => {
        if (event.key === 'Enter') {
            props.searchYelp(term, location, sortBy);
        }
    }

    const renderSortByOptions = () => {
        return Object.keys(sortByOptions).map(sortByOption => {
            let sortByOptionValue = sortByOptions[sortByOption];
            return <li 
                className={getSortByClass(sortByOptionValue)} 
                onClick={() => setSortBy(sortByOptionValue)} //This is 'function' is essentially the 'handle' function in the class approach above
                key={sortByOptionValue}>
                    {sortByOption}</li>;
        });
    }

    return (
        <div className="SearchBar">
            <div className="SearchBar-sort-options">
                <ul>
                    {renderSortByOptions()}
                </ul>
            </div>
            <div className="SearchBar-fields">
                <input 
                    onChange={handleTermChange} 
                    placeholder="Search Businesses" 
                    onKeyDown={handleEnterPress} />
                <input 
                    onChange={handleLocationChange}
                    placeholder="Where?"
                    onKeyDown={handleEnterPress} />
            </div>
            <div className="SearchBar-submit">
                <a onClick={
                    (event) => {
                        props.searchYelp(term, location, sortBy);
                        event.preventDefault();
                    }
                }>Let's Go</a>
            </div>
        </div>
    );
}


export default SearchBar;