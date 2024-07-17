// import bars from "../assets/bars.svg";
const TransectionCard = ({ item }) => {
  return (
    <div className="flex items-center justify-between space-y-7">
      {/* <div className="rounded-md bg-base-200 p-2">
        <img className="w-10" src={bars} alt="image" />
      </div> */}
      <div>
        <p className="font-bold">{item?.sender}</p>
        <p className="font-light text-sm text-gray-500">date . {item.role}</p>
      </div>
      <div className="text-lg font-bold">{item?.sendAmount}</div>
    </div>
  );
};

export default TransectionCard;
