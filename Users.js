import './Users.css';
function Users(props)
{
    const {name,username,email,phone,website}=props;
    return(
        <div className="mycard">
            <h1>{name}</h1>
            <h2>{username}</h2>
            <h2>{email}</h2>
            <h2>{phone}</h2>
            <h2>{website}</h2>
        </div>
    );
}
export default Users;
