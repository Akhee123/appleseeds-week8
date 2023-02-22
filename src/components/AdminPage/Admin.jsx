
export default function Admin() {

    const users = JSON.parse(localStorage.getItem("users"));

    return (
        <>
        <tr>
            <th>User</th>
            <th>email</th>
            <th>Vote</th>
        </tr>
        {users.map(element => {
            <tr>
                <td>{element.name}</td>
                <td>{element.email}</td>
                <td>{element.voted}</td>
            </tr>
        })}
        </>
    );
}