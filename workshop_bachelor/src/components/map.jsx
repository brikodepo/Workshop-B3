import React from 'react';
import {MapContainer, ImageOverlay, Marker, Popup} from 'react-leaflet';
import L from 'leaflet';
import planZero from '../images/plan_zero_f.png';
import "../map.style.css"


const limite = [[0, 0], [1000, 1000]]; // coordonnees de la map enn fonction de l'image

const BuildMap = () => {
    return (
        <MapContainer
            bounds = {limite}
            style = {{ height: "100%", width: "100%" }} // a changer le px en vh ou em 
            zoomControl = {true} // controle du zoom
            maxZoom = {3}
            minZoom = {-1}
        >
{/*******************************Chargement du plan image******************************************************/}
            <ImageOverlay
                url = {planZero}
                bounds = {limite} 
            />



{/********************************Mise en place des points*****************************************************/}
            <Marker position={[500, 500]}>
                <Popup>
                    Blablablablabla 
                </Popup>
            </Marker>

        </MapContainer>
    )
}

export default BuildMap;