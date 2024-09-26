import React, { useEffect, useState } from 'react';
import { MapContainer, ImageOverlay, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import SideBar from './sidebar';
import planZero from '../images/plan_zero.png';
import planOne from '../images/plan_un.png';
import planTwo from '../images/plan_two.png';
import "../map.style.css";
import CusIcon from '../images/icon_map.png';
import IconT from '../images/toilettes.png';
import IconE from '../images/escalier.png';

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
 {/******************************* ajout icon map ******************************************************/}

const customIcon = new L.Icon({
    iconUrl: CusIcon,
    iconSize:[20,20],
    iconAnchor: [10,20],
    popupAnchor: [0, -40] 
});

const toiletIcon = new L.Icon({
    iconUrl: IconT,
    iconSize:[20,20],
    iconAnchor: [10,20],
    popupAnchor: [0, -40] 
});

const staircasesIcon = new L.Icon({
    iconUrl: IconE,
    iconSize:[20,20],
    iconAnchor: [10,20],
    popupAnchor: [0, -40] 
});

 {/******************************* ajout images plan ******************************************************/}
const floors = {
    ground: planZero,
    first: planOne,
    second: planTwo,
};


 {/******************************* ajout markers reactif ******************************************************/}
const markers ={
    ground:[
        { position: [15, 732], popup: "Marker 1 on Ground", isToilet: true, id: 86 },
        { position: [15, 785], popup: "Marker 2 on Ground", isToilet: true, id: 82 },
        { position: [15, 687], popup: "Marker 3 on Ground", id: 54},
        { position: [25, 623], popup: "Marker 2 on Ground", id: 53 },
        { position: [15, 833], popup: "Marker 2 on Ground", id: 81 },
        { position: [15, 885], popup: "Marker 2 on Ground", id: 14 },
        { position: [15, 965], popup: "Marker 2 on Ground", id: 81 },
        { position: [25, 1050], popup: "Marker 2 on Ground", id: 94 },
        { position: [55, 963], popup: "Marker 2 on Ground", isEscalier: true,  id: 78 },
        { position: [77, 845], popup: "Marker 2 on Ground", id: 81},
        { position: [77, 640], popup: "Marker 2 on Ground", id: 55 },

    ],
    first:[
        { position: [67, 963], popup: "Marker 1 on First",  },
        { position: [25, 978], popup: "Marker 1 on First",  },
        { position: [17, 933], popup: "Marker 1 on First",  },
        { position: [17, 875], popup: "Marker 2 on First",  },
        { position: [17, 819], popup: "Marker 3 on First",  },
        { position: [17, 763], popup: "Marker 4 on First",  },
        { position: [17, 719], popup: "Marker 5 on First",  },
        { position: [17, 673], popup: "Marker 6 on First",  },
        { position: [17, 610], popup: "Marker 7 on First",  },
        { position: [17, 559], popup: "Marker 8 on First", id: 81 },
        { position: [17, 522], popup: "Marker 9 on First", id: 60 },
        { position: [17, 933], popup: "Marker 10 on First",  },
        { position: [55, 695], popup: "Marker 10 on First", isToilet: true, id: 83  },
        { position: [55, 735], popup: "Marker 10 on First", isToilet: true, id: 87  },
        { position: [55, 590], popup: "Marker 10 on First", isEscalier: true, id: 79  },
        { position: [45, 515], popup: "Marker 10 on First", id: 81  },
        { position: [61, 510], popup: "Marker 10 on First", id: 80 },
        { position: [73, 510], popup: "Marker 10 on First", id: 80 },
    ],
    second:[
        { position: [15, 732], popup: "Marker 1 on Ground", isToilet: true, id: 1 },
        { position: [15, 785], popup: "Marker 2 on Ground", isToilet: true, id: 2 },
        { position: [15, 687], popup: "Marker 3 on Ground", isToilet: false, id: 3},
        { position: [25, 623], popup: "Marker 2 on Ground", isToilet: false, id: 4 },
        { position: [15, 833], popup: "Marker 2 on Ground", isToilet: false, id: 5 },
        { position: [15, 885], popup: "Marker 2 on Ground", isToilet: false, id: 6 },
        { position: [15, 965], popup: "Marker 2 on Ground", isToilet: false },
        { position: [25, 1050], popup: "Marker 2 on Ground", isToilet: false },
        { position: [55, 963], popup: "Marker 2 on Ground", isToilet: false },
        { position: [77, 845], popup: "Marker 2 on Ground", isToilet: false },
        { position: [60, 540], popup: "Marker 2 on Ground", isToilet: false },

    ],
};

{/******************************* afficher la carte et la generer******************************************************/}

const BuildMap = () => {

    const [currentFloor, setCurrentFloor] = useState('ground');
    const [salles, setSalles] = useState([]);

    useEffect(() => {
        // Recup salle via api
        const fetchSalles = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/salles');
                const data = await response.json();
                setSalles(data);
            } catch (error) {
                console.error("Erreur lors de la récupération des salles : ", error);
            }
        };

        fetchSalles();
    }, []);


    return (
        <section className="h-auto">
            <div className='flex h-auto'>
                <div className ="flex-grow leaflet-container">
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
                        url={floors[currentFloor]}
                        bounds={limite}
                        className="custom-overlay"
                    />

{/******************************** Mise en place des points *****************************************************/}
                {markers[currentFloor].map((marker, index) => {
                    const salle = salles.find(s => s.id_salle === marker.id); 
                    return (
                    <Marker 
                        key={index} 
                        position={marker.position} 
                        icon={marker.isToilet ? toiletIcon : marker.isEscalier ? staircasesIcon : customIcon}
                    >
                        <Popup>
                            {salle ? (
                                <>
                                    <strong>{salle.nom_salle}</strong><br />
                                    Taille: {salle.taille}
                                </>
                            ) : "Salle non trouvée"}
                        </Popup>
                    </Marker>
                    );
                })}
                    <ZoomControlDrag minZoom={1} maxZoom={3} />
                    <ResetViewOnZoom initialCenter={position} initialZoom={initialZoom} />

                    </MapContainer>
                </div>
                <div className="w-32 sm:w-64">
                    <SideBar setCurrentFloor={setCurrentFloor} />
                </div>

            </div>
        </section>
        

    );
};

export default BuildMap;