import CssBaseline from "@material-ui/core/CssBaseline";
import { RouteComponentProps, Router } from "@reach/router";
import SplashPage from "./Pages/SplashPage";
import HomePage from "./Pages/HomePage";
import InputPage from "./Pages/InputPage";
import ErrorHandler from "./Components/ErrorHandler";
import "@fontsource/montserrat";

const NotFound = (props: RouteComponentProps) => <p>Sorry, nothing here</p>;

function App() {
    return (
        <CssBaseline>
            <ErrorHandler>
                <Router>
                    <SplashPage path="/" />
                    <HomePage path="/user/Home" />
                    <InputPage path="/user/:type/:index" />
                    <NotFound default />
                </Router>
            </ErrorHandler>
        </CssBaseline>
    );
}

export default App;
