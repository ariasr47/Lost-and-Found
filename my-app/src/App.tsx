import CssBaseline from "@material-ui/core/CssBaseline";
import { RouteComponentProps, Router } from "@reach/router";
import SplashPage from "./Pages/SplashPage";
import HomePage from "./Pages/HomePage";
import InputPage from "./Pages/InputPage";
import ListingsPage from "./Pages/ListingsPage";
import "@fontsource/montserrat";

const NotFound = (props: RouteComponentProps) => <p>Sorry, nothing here</p>;

function App() {
    return (
        <CssBaseline>
            <Router>
                <SplashPage path="/" />
                <HomePage path="/user/Home" />
                <InputPage path="/user/:type/:index" />
                <ListingsPage path="/user/Listings" />
                <NotFound default />
            </Router>
        </CssBaseline>
    );
}

export default App;
