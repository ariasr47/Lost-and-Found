import { Theme, makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        padding: theme.spacing(3),
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
        "& .MuiTextField-root": {
            width: "75ch",
        },
        "& .MuiFilledInput-input": {
            paddingTop: "10px",
        },
        "& .MuiFilledInput-multiline": {
            paddingTop: "10px",
        },
    },
}));

export default useStyles;
