export default function Admin() {
  const users = JSON.parse(localStorage.getItem("users"));
    console.log(users);
  return (
    <>
      <table>
        <thead>
          <tr>
            <td>User</td>
            <td>email</td>
            <td>Vote</td>
          </tr>
        </thead>
        <tbody>
          {users.map((element, index) => {
            return (
              <tr>
                <td key={index}>{element.name}</td>
                <td key={index}>{element.email}</td>
                <td key={index}>{element.voted ? "Voted" : "Not Voted"}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
