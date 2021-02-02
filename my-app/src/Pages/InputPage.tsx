import { RouteComponentProps, useParams } from "@reach/router";
import FormTemplate from "../Components/Form-Template";
import Form1 from "../Components/Form1";
import Form2 from "../Components/Form2";
import Page from "../Components/Page";

const InputPage = (props: RouteComponentProps) => {
    const params = useParams();

    const child = () => {
        switch (params.index) {
            case "1":
                return <Form1 type={params.type} />;
            case "2":
                return <Form2 type={params.type} />;
            case "search":
                return <Form2 type={params.type} />;
        }
    };

    return (
        <Page bgColor={params.type === "finder" ? "#feebb1" : "#b3c1d1"}>
            <FormTemplate type={params.type} index={params.index}>
                {child}
            </FormTemplate>
        </Page>
    );
};

export default InputPage;
