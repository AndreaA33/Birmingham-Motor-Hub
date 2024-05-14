import {APIProvider, Map, Marker} from '@vis.gl/react-google-maps';
import "./Map-comp.css"

export default function Mapcomp() {

    const location = {
        address: "1600 Amphitheatre Parkway, Mountain View, california.",
        lat: 52.712638,
        lng: -1.802718,
      };


  return (
    <div className={'mapcomp-main'}>
      <div className={'mapcomp-main-address'}>
        <h1>CURBOROUGH SPRINT COURSE</h1> 
        <h1>NETHERSTOWE LN LICHFIELD</h1> 
        <h1>WS13 8EJ</h1>
      </div>
        <APIProvider apiKey = {""}>
        <div className={"mapcomp-main-map"}>
            <Map defaultCenter={location} defaultZoom={15}>
              <Marker position={location}/>
            </Map>
        </div>
        </APIProvider>
    </div>
  )
}
