import { RouteComponentProps, useParams } from "@reach/router";
import FormTemplate from "../Components/Form-Template";
import Form1 from "../Components/Form1";
import Form2 from "../Components/Form2";

const InputPage = (props: RouteComponentProps) => {
    const params = useParams();
    return (
        <FormTemplate
            title="Input the found item"
            options=""
            type={params.type}
        >
            {params.index === "1" ? <Form1 /> : <Form2 />}
        </FormTemplate>
    );
};

export default InputPage;
