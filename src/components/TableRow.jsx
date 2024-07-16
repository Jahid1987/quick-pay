import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { axiosSecure } from "../hooks/useAxiosSecure";

const TableRow = ({ item, update }) => {
  const { user } = useContext(AuthContext);
  async function handleStatus() {
    console.log(item);
    await axiosSecure.patch(`/transetions/${item._id}`, item);
    update();
  }
  return (
    <tr>
      <th>{item.transectionType}</th>
      <td>{item.sendAmount}</td>
      <td>{item.role}</td>
      <td>To {item.role === "sent" ? item.receiver : item.sender}</td>
      <td>{item.status}</td>
      {user?.role === "agent" && (
        <td>
          {item.status !== "success" ? (
            <button onClick={handleStatus} className="btn btn-xs bg-[#BEB1F5]">
              accept
            </button>
          ) : (
            <button className="btn btn-xs">accepted</button>
          )}
        </td>
      )}
    </tr>
  );
};

export default TableRow;
