import React, { Component } from 'react';
import fetch from 'isomorphic-unfetch'
import data from '../static/data.json'
import Card from '../components/Card'

class CardWrapper extends Component {
    constructor(props) {
        super(props)
        this.cardWrapper = React.createRef()
        this.state = {
            data: [],
            items: [
                { id: "01", name: "Frank Ocean" },
                { id: "02", name: "J. Cole" },
                { id: "03", name: "Tame Impala" },
                { id: "04", name: "Margot Robbie" },
                { id: "05", name: "Brad Pitt" },
                { id: "06", name: "Leo D' Caprio" },
                { id: "07", name: "The Rock" },
                { id: "08", name: "Chris Evans" },
                { id: "09", name: "Donald Glover" },
                { id: "10", name: "Seth Rogen" }
            ]
        }
    }
    componentDidMount() {
        this.setState({
            data: [...data]
        })
        // let gsap;
        // if (typeof window !== 'undefined') {
        //     gsap = require('gsap')
        // }
        
        
    }
    render() {
        const { data } = this.state;
        return (
            <div></div>
        );
    }
}


export default CardWrapper;