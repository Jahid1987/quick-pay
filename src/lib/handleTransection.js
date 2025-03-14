import { axiosPublic } from "../hooks/useAxiosPublic";
export async function handleTransection(
  data,
  user,
  recipient,
  transectionType
) {
  let charge = 0;
  let status;
  let sender;
  let receiver;

  const amount = parseInt(data.amount);

  if (transectionType === "sendmoney") {
    charge = amount > 100 && 5;
    status = "success";
    sender = user.email;
    receiver = recipient.email;
  }

  if (transectionType === "cashout") {
    charge = amount * 0.015;
    status = "success";
    sender = user.email;
    receiver = recipient.email;
  }

  if (transectionType === "cashin") {
    status = "pending";
    sender = recipient.email;
    receiver = user.email;
  }
  if (transectionType === "paybill") {
    sender = user.email;
    receiver = recipient.email;
  }

  const newTransection = {
    sendAmount: parseInt(data.amount),
    minusAmount: parseInt(data.amount) + charge,
    sender,
    receiver,
    transectionType,
    status,
  };
  await axiosPublic.post("/transetions/create", newTransection);
  if (transectionType !== "cashin") {
    await axiosPublic.post("/transetions/updatebalance", newTransection);
  }
}
