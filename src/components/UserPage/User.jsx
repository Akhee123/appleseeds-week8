

export default function User() {

    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    return (
        <>
            <h1>Thank you for voting</h1>
        </>
    );
}