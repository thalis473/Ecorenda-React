import React, { Component } from "react";
import Dimensions from "react-dimensions";
import MapGL, { NavigationControl } from "react-map-gl";
import MarkerMap from "./markerMap";
import Geocoder from "react-map-gl-geocoder";


import "mapbox-gl/dist/mapbox-gl.css";
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";


const TOKEN =
  "pk.eyJ1IjoiZWNvcmVuZGEiLCJhIjoiY2tsN3kzeTI1MGE2azJxcnVzMnVtdDAzeSJ9.AlzajMLSSV8EUOMQzeQGaw";
  
class Map extends Component {
    constructor(props) {
        super(props);
        this.state = {
            viewport: {
                latitude: -22.756194,
                longitude: -43.489972,
                zoom: 12.8,
                bearing: 0,
                pitch: 0,
                }
         };
    this.mapRef = React.createRef();
    }
    
    _updateViewport = viewport => {
    this.setState({ viewport });
  };
  
  render() {
    return (
        <>
        <MapGL
            ref={this.mapRef}
            width="100wh"
            height="50vh"
            {...this.state.viewport}
            // mapStyle="mapbox://styles/mapbox/dark-v9"
            mapboxApiAccessToken={TOKEN}
            onViewportChange={viewport => this.setState({ viewport })}
            >
                <MarkerMap  latitude={-22.756194}
                    longitude={-43.489972}
                    imgSrc="https://img.icons8.com/color/48/000000/marker.png" imgAlt="Marker"
                    />
                 
                <NavigationControl
                    showCompass={false}
                    onViewportChange={this._updateViewport}
                    style={{right:0}}
                />
                
                <Geocoder 
                    mapRef={this.mapRef}
                    onResult={this.handleOnResult}
                    onViewportChange={this.handleGeocoderViewportChange}
                    mapboxApiAccessToken={TOKEN}
                    position='top-left'
                    placeholder='Busca'
                />
        </MapGL>
        {/* <DeckGL {...viewport} layers={[searchResultLayer]} /> */}
    </>

    );
  }
}

export const DimensionedMap = Dimensions()(Map);
