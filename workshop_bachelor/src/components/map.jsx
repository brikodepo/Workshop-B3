import React, { useEffect, useRef } from 'react';
import { MapContainer, ImageOverlay, Marker, Popup } from 'react-leaflet';
import planZero from '../images/plan_zero.png';
import "../map.style.css";

const limite = [[0, 0], [375, 1504]]; // Coordonnées de la carte en fonction de l'image

const BuildMap = () => {
    const mapRef = useRef();

    useEffect(() => {
        const map = mapRef.current;

        if (map) {
            // Vérifier le zoom initial et désactiver le dragging si nécessaire
            const currentZoom = map.getZoom();
            if (currentZoom === 1) {
                map.dragging.disable();
            }

            // Gérer l'activation ou la désactivation du drag au changement de zoom
            const handleZoomEnd = () => {
                const currentZoom = map.getZoom();
                if (currentZoom > 1) {
                    map.dragging.enable(); // Activer le drag quand le zoom est > 1
                } else {
                    map.dragging.disable(); // Désactiver le drag quand le zoom est à 1
                }
            };

            map.on('zoomend', handleZoomEnd);

            // Nettoyer l'événement à la désinstallation du composant
            return () => {
                map.off('zoomend', handleZoomEnd);
            };
        }
    }, []);

    return (
        <MapContainer
            whenCreated={mapInstance => mapRef.current = mapInstance} // Assigner l'instance de la carte à la référence
            bounds={limite}
            maxBounds={limite}
            maxBoundsViscosity={1.0}
            style={{ height: "100%", width: "100%" }} // 100vh pour occuper toute la hauteur
            zoomControl={true}
            zoom={1}
            maxZoom={3}
            minZoom={1}
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