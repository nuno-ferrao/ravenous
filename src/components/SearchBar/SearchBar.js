import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
    constructor(props) {
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
        }

        this.handleLocationChange = this.handleLocationChange.bind(this);
        this.handleTermChange = this.handleTermChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this)
    }
    
    // Verifica se o estado activo (this.sortBy) está actualmente selecionado comparando-o ao argumento da função 
    getSortByClass(sortByOption) {
        if (this.state.sortBy === sortByOption) {
            return 'active';
        } else {
            return '';
        }
    }

    //handler function que actualiza o estado do state this.sortBy para o argumento da função
    handleSortByChange(sortByOption) {
        this.setState({
            sortBy: sortByOption
        })
    }

    handleTermChange(event) {
        this.setState({
            term: event.target.value
        })
    }

    handleLocationChange(event) {
        this.setState({
            location: event.target.value
        })
    }

    handleSearch(event) {
        this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
        event.preventDefault()
    }
    
    // Tudo o que este método faz é iterar pelo objeto this.sortByOptions e gerar para cada um dos key-value pairs, um elemento <li> com o respetive conteudo e property
    // a propriedade className utiliza a função getSortByClass para verificar qual o elemento da lista gerada que corresponde ao sortBy e atribui-lhe a class de 'active' para CSS purposes (e adicionou-se a onClick property para poder fazer esta actualização quando o elemento é clicado)
    renderSortByOptions() {
        return Object.keys(this.sortByOptions).map(sortByOption => {
            let sortByOptionValue = this.sortByOptions[sortByOption];
            return <li key={sortByOptionValue} className={this.getSortByClass(sortByOptionValue)} onClick={this.handleSortByChange.bind(this, sortByOptionValue)}>{sortByOption}</li>;
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
                    <input onChange={this.handleTermChange} placeholder="Search Businesses" />
                    <input onChange={this.handleLocationChange} placeholder="Where?" />
                </div>
                <div className="SearchBar-submit">
                    <a onClick={this.handleSearch}>Let's Go</a>
                </div>
            </div>
        )
    }
}


export default SearchBar;