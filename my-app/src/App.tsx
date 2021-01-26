import CssBaseline from "@material-ui/core/CssBaseline";
import { RouteComponentProps, Router } from "@reach/router";
import SplashPage from "./Pages/SplashPage";
import HomePage from "./Pages/HomePage";
import InputPage from "./Pages/InputPage";

const NotFound = (props: RouteComponentProps) => <p>Sorry, nothing here</p>;

function App() {
    return (
        <CssBaseline>
            <Router>
                <SplashPage path="/" />
                <HomePage path="/Home" />
                <InputPage path="/:type/:index" />
                <NotFound default />
            </Router>
        </CssBaseline>
    );
}

export default App;
