const TransectionRow = ({ transection }) => {
  return (
    <tr>
      <td>{transection?.sender}</td>
      <td>{transection?.sendAmount}</td>
      <td>{transection?.receiver}</td>
      <td>{transection?.transectionType}</td>
      <td>{transection?.status}</td>
      <td>{transection?.role}</td>
    </tr>
  );
};

export default TransectionRow;
