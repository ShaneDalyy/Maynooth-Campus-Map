import React, {useState, useEffect} from "react";
import ReactMapGL, {Marker, Popup} from "react-map-gl";
import "./CampusMap.css"
import 'mapbox-gl/dist/mapbox-gl.css';
import {Link} from "react-router-dom";

export default function CampusMap() {

  /* set initial view of map */

  const [viewState, setViewState] = React.useState({
    latitude: 53.38201648985292,
    longitude: -6.600073804375645,
    zoom: 16.5
  });

  const [searchTerm, setSearchTerm] = useState("");

  const [selectedMarker, setSelectedMarker] = useState(null);

  /* building info for map */

  const markers = [
    {id: 1, latitude: 53.38235566211287, longitude: -6.6001224517822275, title:'TSI Building', facilities: 'Cafe, Computer Room', rooms:'TSI028 - TSI241: Ground, First and Second floors, TSILT1: TSI Lecture Theatre 1, TSILT2: TSI Lecture Theatre 2, TSILT3: TSI Lecture Theatre 3'},
    {id: 2, latitude: 53.38144053076937, longitude: -6.599243183207237, title:'John Paul II Library', facilities: 'Starbucks, Computer Room', rooms:'LIBVC'},
    {id: 3, latitude: 53.38372512262803, longitude: -6.601516414157197, title:'Arts Building', facilities: 'Common Area, Quiet Room', rooms:'ArtsALT: Arts Annex Lecture Theatre (Arts Annex, formally Student Common Room), HA: Classhall A, HB: Classhall B, HC: Classhall C, HD: Classhall D, HE: Classhall E, HF: Classhall F, HH: Classhall H, HJ: Classhall J, LCAV: Language Centre Audio Visual Room, LCT7 & LTC8: Language Centre Rooms T7 & T8, LDL: Language Digi Lab, LL1 & LL2: Language Lab 1 & 2, SMLLC: Room 60, TH1: Arts Lecture Theatre 1'},
    {id: 4, latitude: 53.383917099553884, longitude: -6.600143897357223, title:'John Hume', facilities: 'Shop, Pickle', rooms:'JHL1: John Hume Lecture Theatre 1, JHL2: John Hume Lecture Theatre 2, JHL3: John Hume Lecture Theatre 3, JHL4: John Hume Lecture Theatre 4, JHL5: John Hume Lecture Theatre 5, JHL6: John Hume Lecture Theatre 6, JHL7: John Hume Lecture Theatre 7, JHT1 - JHT10: John Hume Tutorial Rooms 1 to 10'},
    {id: 5, latitude: 53.383027599178, longitude: -6.603961209707163, title:'Maynooth Student Union', facilities: 'Boozer'},
    {id: 6, latitude: 53.38439703808146, longitude: -6.603896872982175, title:'Phoenix Sports Centre', facilities: 'Gym, Basketball Courts', rooms:'PEH: PE Hall, PER: PE Room'},
    {id: 7, latitude: 53.37811261462912, longitude: -6.596144297619801, title:'Logic House', facilities: 'Maths Building, Music Building', rooms:'BR: Bewerunge Room, LGH: Logic Hall, MAH: Maths Hall, MCL: Maths Computer Lab, MS1: Room 227 Second Floor, MS2: Room 233 Second Floor, NMR: New Music Room, OCR: O Callaghan Room'},
    {id: 8, latitude: 53.38299560241532, longitude: -6.60048882902803, title:'Science Building', facilities: 'Science Labs', rooms:'EPCL: Computer Lab Room 2.41 First Floor, EPINST: Instrument Room 2.34 First Floor, EPLAB1: Undergraduate Lab 1 Room 1.24, EPLAB2 & EPLAB3: Experimental Physics Labs 2 & 3, PCT: Physics Chemistry Theatre'},
    {id: 9, latitude: 53.38316198531853, longitude: -6.6026548321029885, title:'Callan Building', facilities: 'Computer Labs, Science Labs', rooms:'BTL1: BTL1 Biology Teaching Lab 1, BSem: Seminar Room 2.28 (First Floor), CB1 & CB2: Lecture Theatre 1 & 2, CB1.106: Room CB1.106, CB217: Room CB217, CB3 to CB9: CB3 to CB9 (CB9 on first floor), CBCL1: Callan Building Computer Lab 1 (Computer lab), SLT: Science Lecture Theatre'},
    {id: 10, latitude: 53.38282921886196, longitude: -6.599178665025441, title:'School of Education', facilities: 'Teaching Labs', rooms:'EPCL: Computer Lab Room 2.41 First Floor, EPINST: Instrument Room 2.34 First Floor, EPLAB1: Undergraduate Lab 1 Room 1.24, EPLAB2 & EPLAB3: Experimental Physics Labs 2 & 3, PCT: Physics Chemistry Theatre, SE003: Room 003 Ground Floor, SE014: Room 014 - Ground Floor, SE007 to SE013: Rooms 007 to 013 Ground Floor, SE127 to SE133: Rooms 127 to 133 - 1st Floor, SE230 & SE231: Rooms 230 & 231 - 2nd Floor, SE233 to SE236: Rooms 233 to 236 - 2nd Floor, SE301: Room 301 - 3rd Floor'},
    {id: 11, latitude: 53.38459861064976, longitude: -6.6004819736400115, title:'Iontas', facilities: 'Lecture Hall Iontas', rooms:'IONSEM: Iontas Seminar Room 0.32, IONTH: Iontas Lecture Theatre, LAB1.37T&L: Training & Education Lab 1.37'},
    {id: 12, latitude: 53.38483217767022, longitude: -6.601682925839999, title:'Eolas', facilities: 'Computer Labs', rooms:'CSLabA: Computer Science Lab A, CSLabB: Computer Science Lab B, CSLE: Computer Science Lab'},
    {id: 13, latitude: 53.384550617267664, longitude: -6.602670550346375, title:'Engineering Building', facilities: 'Engineering Labs, Science Labs, EV Charging Point', rooms:'E1.01A: Engineering Lab, E2.01A & E2.01B: Engineering Lab, E2.08: Engineering Lab, EELab: Electronic Engineering Lab'},
    {id: 14, latitude: 53.38023739110488, longitude: -6.596015442712996, title:'Phsyics Hall', facilities: 'Class Room', rooms: 'PH: Physics Hall'},
    {id: 15, latitude: 53.37985980303158, longitude: -6.595704481875516, title:'Long Corridor', facilities: 'Class Room', rooms:'LC: Long Corridor PC Lab, CH: Callan Hall'},
    {id: 16, latitude: 53.37945021218322, longitude: -6.597700045382596, title:'Saint Patricks House', facilities: 'Church'},
    {id: 17, latitude: 53.381331737623235, longitude: -6.602096388257522, title:'Parking', facilities: 'Multi-Permit'},
    {id: 18, latitude: 53.385209721651265, longitude: -6.6058081905234305, title:'Parking', facilities: 'Multi-Permit'},
    {id: 19, latitude: 53.37865341869967, longitude: -6.594860822639045, title:'Parking', facilities: 'Student-Permit'},
    {id: 20, latitude: 53.38671986409586, longitude: -6.603748798370362, title:'Pitches', facilities: 'GAA Field'},
    {id: 21, latitude: 53.385222519693656, longitude: -6.6043063833203535, title:'Astro Pitch', facilities: 'GAA Astro, Soccer Astro'},
    {id: 22, latitude: 53.38625914835041, longitude: -6.599907875061036, title:'Student Accomodation', facilities: 'Avoca Hall, Boyne Hall, Carrick Hall, Dodder Hall, Erne Hall, Foyle Hall, Gweedore Hall, Hurley Hall, Joyce Hall, Killary Hall, Liffey Hall, Moy Hall, Nore Hall, Potters Hall, Quiltey Hall'},
    {id: 23, latitude: 53.384947360934596, longitude: -6.599050052061042, title:'Student Accomodation', facilities: 'Rye Hall'}
  ];

  const handleMarkerClick = (e, marker) => {
    e.preventDefault();
    e.stopPropagation();
    setSelectedMarker(marker);
  };

  /* handle search for building, rooms and facilities */

  const handleSearch = () => {
    const filteredMarkers = markers.filter((marker) =>
      (marker.title?.toLowerCase() || '').includes(searchTerm.toLowerCase()) ||
      (marker.facilities?.toLowerCase() || '').includes(searchTerm.toLowerCase()) ||
      (marker.rooms?.toLowerCase() || '').includes(searchTerm.toLowerCase())
    );

    if (filteredMarkers.length > 0) {
      setViewState({
        latitude: filteredMarkers[0].latitude,
        longitude: filteredMarkers[0].longitude,
        zoom: 16.5,
      });
      setSelectedMarker(filteredMarkers[0]);
    }
  };

  return (
    <>

      <Link to="/">
        <div className="goback-button">
          <button className="goback-button">Return to Dashboard</button>
        </div>
      </Link>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for a location..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
          <button onClick={() => handleSearch()}>Search</button>
      </div>
      
      <div> 

        <ReactMapGL
          {...viewState}
          mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
          style={{width: "100vw", height: "100vh"}}
          mapStyle="mapbox://styles/david09donnelly/clp45dwcf00ag01qx65zn2khw"
          onMove={evt => setViewState(evt.viewState)}
        >
        
          {/* place markers onto map */}

          {markers.map((marker) => (
            <Marker
              key={marker.id}
              latitude={marker.latitude}
              longitude={marker.longitude}
              offsetLeft={-20}
              offsetTop={-10}
            >
              <button
                className="marker-button"
                onClick={(e) => handleMarkerClick(e, marker)}
              >
                <span>{marker.title}</span> 
              </button>  
            </Marker>
          ))}

          {selectedMarker ? (
            <Popup
              latitude={selectedMarker.latitude}
              longitude={selectedMarker.longitude}
              onClose={() => {
                setSelectedMarker(null);
              }}
            >
              <div>
                <h2>{selectedMarker.title}</h2>
                <p>{selectedMarker.facilities}</p>
                <p>{selectedMarker.rooms}</p>
              </div>
            </Popup>
          ) : null}

        </ReactMapGL>
      </div>
    </>
  );
}