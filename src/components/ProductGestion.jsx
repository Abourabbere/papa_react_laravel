import { Avatar, Table } from '@mantine/core';

function ProductGestion() {

    //algorithmes donnees
    const elements = [
        {
            img: 'https://images.unsplash.com/photo-1648737155328-0c0012cf2f20?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8Y29tcHV0ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
            libelle: 'Plante',
            price: '2500',
            status: 'payer'
        },
        {
            img: 'https://images.unsplash.com/photo-1646583288948-24548aedffd8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGFsZ29yaXRobXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
            libelle: 'Tube Bleu',
            price: '5700',
            status: 'payer'
        },
        {
            img: 'https://images.unsplash.com/photo-1649507988731-23fa2c71c2fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGFsZ29yaXRobXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
            libelle: 'Cafe Touba',
            price: '100',
            status: 'payer'
        },
        {
            img: 'https://images.unsplash.com/photo-1640035164049-1b32a201470e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGFsZ29yaXRobXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
            libelle: 'Ville Sombre',
            price: '2500089',
            status: 'en attente'
        },
    ]

    const ths = (
        <tr>
            <th>Image</th>
            <th>Libelle</th>
            <th>Price</th>
            <th>status</th>
            <th>...</th>
        </tr>
    );

    const rows = elements.map((element) => (
        <tr key={element.price}>
            <td>
                <Avatar size="md" src={element.img} alt={element.img} />
            </td>
            <td>{element.libelle}</td>
            <td>{element.price}</td>
            <td>{element.status}</td>
            <td>
                <p>Delete</p>
                <p>Edit</p>
            </td>
        </tr>
    ));

    return (
        <Table highlightOnHover>
            <caption>List of all product</caption>
            <thead>{ths}</thead>
            <tbody>{rows}</tbody>
        </Table>
    );
}
export default ProductGestion