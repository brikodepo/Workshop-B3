import React, { useEffect } from 'react';
import { MapContainer, ImageOverlay, Marker, Popup, useMap } from 'react-leaflet';
import planZero from '../images/plan_zero.png';
import "../map.style.css";

const limite = [[0, 0], [375, 1504]]; // Coordonnées de la carte en fonction de l'image
const position = [1500, 755];

 {/******************************* gerer le dragger ******************************************************/}
const ZoomControlDrag = ({ minZoom, maxZoom }) => {
    const map = useMap();

    useEffect(() => {
        const handleZoom = () => {
            const currentZoom = map.getZoom();
            if (currentZoom > minZoom) {
                map.dragging.enable();  // Activer le drag si zoom est sup à minZoom
            } else {
                map.dragging.disable();  // Désactiver le drag si zoom est égal à minZoom
            }
        };

        map.on('zoomend', handleZoom);

        map.dragging.disable();

        return () => {
            map.off('zoomend', handleZoom);
        };
    }, [map, minZoom]);

    return null;
};

 {/******************************* gerer le repositionement de l'image ******************************************************/}
const initialZoom = 1; 

    const ResetViewOnZoom = ({ initialCenter, initialZoom }) => {
        const map = useMap();

        useEffect(() => {
            const handleZoomEnd = () => {
                const currentZoom = map.getZoom();
                if (currentZoom === initialZoom) {
                    map.setView(initialCenter, initialZoom);  
            }
        };

        map.on('zoomend', handleZoomEnd);

        return () => {
            map.off('zoomend', handleZoomEnd);
        };
    }, [map, initialCenter, initialZoom]); 
    return null;
};


const BuildMap = () => {
    return (
        <MapContainer
            center = {position}
            bounds={limite}
            maxBounds={limite}
            maxBoundsViscosity={1.0}
            style={{ height: "100%", width: "100%" }} 
            zoomControl={true}
            zoom={1}
            maxZoom={3}
            minZoom={1}
            //dragging = {false}
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

            <ZoomControlDrag minZoom={1} maxZoom={3} />
            <ResetViewOnZoom initialCenter={position} initialZoom={initialZoom} />

        </MapContainer>
    );
}

export default BuildMap;