import { Admin, Resource } from "react-admin";
import { Layout } from "./Layout";
import { dataProvider } from "./dataProvider";
import VillageList from "./pages/villages/VillageList";
// import UserList from "./pages/users/UserList";
// import { PostShow } from "./pages/posts/PostShow";
// import { UserShow } from "./pages/users/UserShow";
// import { PostEdit } from "./pages/posts/PostEdit";
// import { PostCreate } from "./pages/posts/PostCreate";
import { Place, Person, HolidayVillage, WaterDrop, EdgesensorHigh, Dataset  } from "@mui/icons-material";
import HomePage from "./pages/HomePage";
import RegionList from "./pages/regions/RegionList";
import SourceList from "./pages/sources/SourceList";
import SensorList from "./pages/sensors/SensorList";
import SensorReadingList from "./pages/sensor-readings/SensorReadingList";
import VillageEdit from "./pages/villages/VillageEdit";
import VillageCreate from "./pages/villages/VillageCreate";
import RegionCreate from "./pages/regions/RegionCreate";
import RegionEdit from "./pages/regions/RegionEdit";
import SourceCreate from "./pages/sources/SourceCreate";
import SourceEdit from "./pages/sources/SourceEdit";
import SensorReadingEdit from "./pages/sensor-readings/SensorReadingEdit";
import SensorReadingCreate from "./pages/sensor-readings/SensorReadingCreate";
import SensorEdit from "./pages/sensors/SensorEdit";
import SensorCreate from "./pages/sensors/SensorCreate";


export const App = () => (
  <Admin layout={Layout} dataProvider={dataProvider} dashboard={HomePage}>
    <Resource
      icon={Dataset}
      name="sensor-readings"
      list={SensorReadingList}
      edit={SensorReadingEdit}
      create={SensorReadingCreate}
    />
    <Resource
      icon={EdgesensorHigh}
      name="sensors"
      list={SensorList}
      // show={PostShow}
      edit={SensorEdit}
      create={SensorCreate}
    />
    <Resource
      icon={WaterDrop}
      name="sources"
      list={SourceList}
      edit={SourceEdit}
      create={SourceCreate}
    />
    <Resource
      icon={HolidayVillage}
      name="villages"
      list={VillageList}
      edit={VillageEdit}
      create={VillageCreate}
    />
    <Resource
      icon={Place}
      name="regions"
      list={RegionList}
      create={RegionCreate}
      edit={RegionEdit}
    />

    <Resource
      icon={Person}
      name="users"
      // list={UserList}
      // show={UserShow}
    />
  </Admin>
);
