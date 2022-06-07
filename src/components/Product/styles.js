import { makeStyles } from '@mui/material/styles'

export default makeStyles(() => ({
    root: {
        maxWidth: '100%',
    },
    media: {
        height: 0;
        paddingTop: '56.25%', // 16:9
    },
    cardActions: {
        display: 'flex',
        jusityContent: 'flex-end',
    },
    cardContent: {
        display: 'flex',
        jusityContent: 'space-between'
    },
}));