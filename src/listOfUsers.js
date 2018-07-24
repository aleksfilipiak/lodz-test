import React from 'react';


class ListOfUsers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: ''
        }
    }

    componentDidMount() {
        this.loadUsers()
    }

    loadUsers() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                if (response.ok)
                    return response.json();
                else
                    throw new Error('Check your connection');
            })
            .then(json => {
                this.setState({data: json});
            })
            .catch(err => {
                console.log(err)
            });
    }

    render() {
        const tempArr = [...this.state.data];

        const people = tempArr.map((person) => {

            return (
                <ul key={person.id}>
                    <li>{person.name}</li>
                    <li>{person.username}</li>
                    <li>{person.email}</li>
                </ul>
            )
        });

        const addresses = tempArr.map((place) => {

            return (
                <ul key={place.id} style={{listStyle: 'none'}}>
                    <li>{place.address.street}</li>
                    <li>{place.address.suite}</li>
                    <li>{place.address.city}</li>
                    <li>{place.address.zipcode}</li>
                    <li>{place.address.geo.lat}</li>
                    <li>{place.address.geo.lng}</li>
                </ul>
            )
        });

        return (
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-lg-6'>
                        <div className='row'>
                            <div className='col-lg-6'>
                                {people}
                                {addresses}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )


    }
}

export default ListOfUsers