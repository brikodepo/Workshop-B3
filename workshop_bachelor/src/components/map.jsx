import React, { useEffect, useRef } from 'react';
import { MapContainer, ImageOverlay, Marker, Popup } from 'react-leaflet';
import planZero from '../images/plan_zero.png';
import "../map.style.css";

const limite = [[0, 0], [375, 1504]]; // Coordonnées de la carte en fonction de l'image


const BuildMap = () => {
    return (
        <MapContainer
            bounds={limite}
            maxBounds={limite}
            maxBoundsViscosity={1.0}
            style={{ height: "100%", width: "100%" }} // 100vh pour occuper toute la hauteur
            zoomControl={true}
            zoom={1}
            maxZoom={3}
            minZoom={1}
            dragging = {false}
        >
            {/******************************* Chargement du plan image ******************************************************/}
            <ImageOverlay
                url={planZero}
                bounds={limite}
                className="custom-overlay"
            />

            {/******************************** Mise en place des points *****************************************************/}
            <Marker position={[187.5, 752]}>
                <Popup>
                    Blablablablabla
                </Popup>
            </Marker>
 
        </MapContainer>
    );
}

export default BuildMap;