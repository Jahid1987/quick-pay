const TableRow = ({ item }) => {
  return (
    <tr>
      <th>{item.transectionType}</th>
      <td>{item.sendAmount}</td>
      <td>{item.role}</td>
      <td>To {item.role === "sent" ? item.receiver : item.sender}</td>
      <td>{item.status}</td>
    </tr>
  );
};

export default TableRow;
