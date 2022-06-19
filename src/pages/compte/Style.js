import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({

    Container: {
        width: '100%',
        height: '300px',
        backgroundColor: '#fff',
        position: 'relative',
        marginBottom: '270px',
    },

    User: {
        width: '330px',
        height: '400px',
        backgroundColor: '#f9f9f9b4',
        filter: 'blure(4px)',
        position: 'absolute',
        top: '215px',
        left: '4.4%',
        borderRadius: '10px',
        boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
        padding: '10px'
    },

    Profile: {
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
        overflow: 'hidden',
    },

    Center: {
        width: 'auto',
        height: 'auto',
        padding: '10px 20px',
        borderRadius: '5px',
        boxShadow: 'rgb(63,124,232) 0px 20px 25px -5px, rgba(63,124,232, 0.3) 0px 10px 10px -5px',
    }

}))

export default useStyles