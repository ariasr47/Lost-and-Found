import { makeStyles } from "@material-ui/core/styles";
import ShieldsEntrance from "../../images/Shields-entrance_Credit-Hector-Villicana.jpeg";
import UC_DAVIS_LOGO from "../../images/UC_Davis_Logo.png";

const useStyles = makeStyles({
  container: {
    height: "100vh",
    backgroundColor: "#365c85",
  },
  ucd_library: {
    backgroundImage: `url(${ShieldsEntrance})`,
    backgroundPosition: "center center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
  ucd_logo: {
    width: "500px",
    height: "183px",
    backgroundImage: `url(${UC_DAVIS_LOGO})`,
  },
  button: {
    backgroundColor: "#fff",
    marginTop: "1.5rem",
    margin: "auto",
  },
});

export default useStyles;
