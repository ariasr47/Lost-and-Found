import { Theme, makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles<Theme, { backgroundColor: string }>((theme) => ({
    root: {
        minHeight: '100vh',
        backgroundColor: ({ backgroundColor }) => backgroundColor,
        flexDirection: 'column',
    },
}))

export default useStyles
