import React, { Component, Fragment } from 'react';
import { apiUrl } from '../../settings';
import PeopleList from '../PeopleList';
import Header from '../Header';

class People extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            loading: true,
            page: 1,
            results: 0,
            hasNextPage: false,
            filter: {},
            filterOpen: false,
        }
    }

    getContent = () => {
        this.setState({ loading: true })
        const { page } = this.state
        const url = new URL(`${apiUrl}/people`)
        const params = {
            page
        }
        for (let key in params)
            if (params[key])
                url.searchParams.append(key, params[key])

        fetch(url)
            .then(response => response.json())
            .then(({ count, next, results }) =>
                this.setState({
                    loading: false,
                    results: count,
                    hasNextPage: Boolean(next),
                    items: this.state.page > 1 ? [...this.state.items, ...results] : results
                })
            )
    }

    handleNextPage = () => {
        if (!this.state.hasNextPage) return
        this.setState({ page: this.state.page + 1 }, this.getContent)
    }

    componentDidMount() {
        this.getContent()
    }

    getInitials(name) {
        name = name.toUpperCase().replace('-', '').split(' ')
        if (name.length >= 2)
            return name[0][0] + name[1][0]
        return name[0][0] + name[0][1]
    }

    getId(url) {
        url = url.split('/')
        return Number(url[url.length - 2])
    }

    getFilteredList() {
        const { filter, items } = this.state
        return items.filter(
            item => !Object.keys(filter).find(
                filterKey => filter[filterKey] && item[filterKey] !== filter[filterKey]
            )
        )
    }

    render() {
        const { hasNextPage, loading } = this.state
        const items = this.getFilteredList()
        return (
            <Fragment>
                <Header
                    title={'Star Wars People'}
                    color={'primary'}
                 />
                <main>                 
                    <PeopleList
                        loading={loading}
                        items={items}
                        nextPageButton={hasNextPage && !loading}
                        onNextPage={this.handleNextPage}
                    />
                </main>
            </Fragment>
        );
    }
}

export default People;