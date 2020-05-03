//token: "pk.eyJ1IjoiZ2VydDk1IiwiYSI6ImNrOWFtaDNwYjBiNWQzb255cXQyYjR4NmoifQ.dG31vKMH-L0y4YHdLJoJwg";
import React, { Component } from 'react';
import MapGL, { Marker } from 'react-map-gl';
import Pin from './pin';
//import { response } from 'express';


export default class Map extends Component {

    constructor(props) {
        super(props);

        this.state = {
            api_url: 'http://data.edmonton.ca/resource/87ck-293k.json',
            viewport: {

                height: 550,
                width: 1100,
                zoom: 12,
                latitude: -29.0852,
                longitude:  26.1596
            },
        /** coordinate: [
                {  latitude: -29.158174789, longitude: 26.190944765 },
                {  latitude: -29.125398, longitude: 26.226754 },
                {  latitude: -29.1150, longitude: 26.2107 }
               
            ], **/
            coordinate: [
                {  latitude: 53.5225, longitude: -113.6242 },
                {  latitude: 53.5437, longitude: -113.4947 },
                {  latitude: 53.5439, longitude: -113.4914 }
               
            ],
            data: null          
        }
    }
    componentDidMount() {
        const { data, api_url } = this.state;

        if (!data) {
            fetch(api_url, { method: 'GET' })
            .then(response => response.json())
            .then(response => this.setState({ data: response}));
        }
    }
    render() {
        const { coordinates, data } = this.state;
        return (
            <MapGL 
            mapboxApiAccessToken ={process.env.REACT_APP_MAPBOX_TOKEN}
            {...this.state.viewport}
            onViewportChange ={(viewport) => this.setState({viewport})}>
                {data && data.map((coordinate, i) => (
                <Marker key={`Marker-${i * (Math.random() * 200 + 1)}`} latitude={coordinate.location.latitude} longitude={coordinate.location.longitude}>
                    <Pin />
                </Marker>
                ))}          
            </MapGL>
        );
    }
}