import React, { Component } from "react";
import Dimensions from "react-dimensions";
import MapGL from "react-map-gl";
import MarkerMap from "./markerMap";

const TOKEN =
  "pk.eyJ1IjoiZWNvcmVuZGEiLCJhIjoiY2tsN3kzeTI1MGE2azJxcnVzMnVtdDAzeSJ9.AlzajMLSSV8EUOMQzeQGaw";
  
class Map extends Component {

  state = {
    viewport: {
        latitude: -22.756194,
        longitude: -43.489972,
        zoom: 12.8,
        bearing: 0,
        pitch: 0,
        
    }
  };

  mapRef = React.createRef();
  
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
                
                {/* <Geocoder 
                    mapRef={this.mapRef}
                    onResult={this.handleOnResult}
                    onViewportChange={this.handleGeocoderViewportChange}
                    mapboxApiAccessToken={token}
                    position='top-left'
                /> */}
        </MapGL>
        {/* <DeckGL {...viewport} layers={[searchResultLayer]} /> */}
    </>

    );
  }
}

export const DimensionedMap = Dimensions()(Map);
