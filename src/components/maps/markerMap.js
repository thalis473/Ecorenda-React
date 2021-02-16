import {Marker} from "react-map-gl";

export default function MarkerMap(props){
    return(
        <Marker
            latitude={props.latitude}
            longitude={props.longitude}
        >
            <img src={props.imgSrc} alt={props.imgAlt} />
        </Marker>
    )
}