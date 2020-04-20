import React, { Component } from 'react';

class SearchForm extends Component {

    state = {
        searchForm: false,
        term: ''
    };

    closeSearchForm = () => {
        this.props.onClick(this.state.searchForm);
    }

    handleSearch = (e) => {
        e.preventDefault();
    }

    render() {
        return (
            <div id="header-search" className="header-search open">
                <button type="button" onClick={this.closeSearchForm} className="close">×</button>
                <form onSubmit={this.handleSearch} className="header-search-form">
                    <input 
                        type="search" 
                        placeholder="Type here........" 
                        value={this.state.term}
                        onChange={e => this.setState({term: e.target.value})}
                    />
                    <button type="submit" className="btn btn-primary">Search</button>
                </form>
            </div>
        );
    }
}

export default SearchForm;
