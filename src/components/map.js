// import { Grid } from "@material-ui/core";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
// import AddAlarm from "@material-ui/icons/AddAlarm";
// import moment from "moment";
// import Typography from "material-ui/styles/typography";
// import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';

var custonIcon = new L.icon({
  iconUrl: require("../utils/1.png"),

  iconSize: [20, 20], // size of the icon
  shadowSize: [50, 64], // size of the shadow
  iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
  shadowAnchor: [4, 62], // the same for the shadow
  popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
});

const Map = ({ data }) => {
  //   console.log("data di map", data);

  //   const dateToTimestamp = (timestamp) => {
  //     let date1 = Date(timestamp).valueOf();
  //     debugger;
  //     return date1;
  //   };

  function dateToTimestamp(UNIX_timestamp) {
    var a = new Date(UNIX_timestamp * 1000);
    var months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var time =
      date + " " + month + " " + year + " " + hour + ":" + min + ":" + sec;
    return time;
  }
  return (
    // <Grid container>
    //   <Grid item xs={12}>
    <MapContainer
      center={[
        data.length > 0 ? data[7].latitude : 3.519863,
        data.length > 0 ? data[7].longitude : 101.538116,
      ]}
      zoom={3}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {data.map((key, idx) =>
        key ? (
          <Marker
            key={idx}
            position={[key.latitude, key.longitude]}
            icon={custonIcon}
          >
            <Popup>
              {idx + 1}.{" "}
              {/* {moment.unix(key.timestamp).format("YYYY-MM-DD HH:mm:ssz")} <br />{" "} */}
              {dateToTimestamp(key.timestamp)}
            </Popup>
          </Marker>
        ) : (
          <div>tiada</div>
        )
      )}
    </MapContainer>
    //   </Grid>
    // </Grid>
  );
};

// Map.defaultProps = {
//   center: {
//     lat: 3.519863,
//     lng: 101.538116,
//   },
//   zoom: 12,
// };

export default Map;
