import useAxiosSecured from "../hooks/useAxiosSecured";

const UserRow = ({ user, update }) => {
  const axiosSecured = useAxiosSecured();
  async function handleStatus() {
    console.log(user);
    await axiosSecured.patch(`/users/${user._id}`, user);
    update();
  }
  return (
    <tr>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.mobile}</td>
      <td>{user.status}</td>
      <td>{user.balance}</td>
      <td>{user.role}</td>
      <td>
        {user.status === "pending" ? (
          <button onClick={handleStatus} className="btn btn-xs bg-[#BEB1F5]">
            accept
          </button>
        ) : (
          <button className="btn btn-xs">accepted</button>
        )}
      </td>
    </tr>
  );
};

export default UserRow;
