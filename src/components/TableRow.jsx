import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const TableRow = ({ item }) => {
  const { user } = useContext(AuthContext);
  return (
    <tr>
      <th>{item.transectionType}</th>
      <td>{item.sendAmount}</td>
      <td>{item.role}</td>
      <td>To {item.role === "sent" ? item.receiver : item.sender}</td>
      <td>{item.status}</td>
      {user?.role === "agent" && <td>accept</td>}
    </tr>
  );
};

export default TableRow;
