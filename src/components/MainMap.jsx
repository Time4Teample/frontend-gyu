import { Map as Map_, MapMarker, CustomOverlayMap } from 'react-kakao-maps-sdk';
import * as React from 'react';


export default function MainMap() {
    return (
        <Map_
            center={{ lat: 37.4029976, lng: 127.1314306 }}
            style={{ width: "100%", height: "360px" }}
        >
            <MapMarker position={{ lat: 37.4029976, lng: 127.1314306 }}>
                <div style={{color:"#000"}}>Hello World!</div>
            </MapMarker>
        </Map_>
    );
}