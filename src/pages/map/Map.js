import React, { useState } from 'react'
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from 'react-google-maps'
import '../../App.css'
function Map(props) {
    const key = "AIzaSyB6Q90sn5X-YQ6yZo5WlSSDuD8xfMMazuE";

    var [position, setPosition] = useState({ lat: 0, lng: 0 })
    const showPosition = (p) => {
        setPosition({ lat: p.coords.latitude, lng: p.coords.longitude })
    }
    const showError = () => {

    }
    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition, showError);
        } else {
        }
    }

    const RenderMap = withScriptjs(withGoogleMap(
        () => {

            return <GoogleMap defaultCenter={{ lat: position.lat === 0 ? 7 : position.lat, lng: position.lng === 0 ? 4 : position.lng }} defaultZoom={10} >
                {position.lat === 0 && position.lng === 0 ? <></> :
                    <div>
                        < Marker position={{ lat: position.lat, lng: position.lng }}>

                            <InfoWindow position={{ lat: position.lat, lng: position.lng }} >
                                <div>
                                    <p>latitude: {position.lat}</p>
                                    <p>longitude: {position.lng}</p>
                                </div>
                            </InfoWindow>
                        </ Marker>
                    </div>

                }

            </GoogleMap >
        }
    )
    )
    return (
        <div className="mapContent">
            <RenderMap
                googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places`}
                loadingElement={<div className="setHeight" />}
                containerElement={<div className="setHeight" />}
                mapElement={<div className="setHeight" />}
                isMarkerShown={true}
            />
            <button className="btn-find" onClick={getLocation}>Find me</button>

        </div>
    )
}

export default Map
