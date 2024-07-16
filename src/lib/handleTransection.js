import { axiosSecure } from "../hooks/useAxiosSecure";

export async function handleTransection(
  data,
  user,
  recipient,
  transectionType
) {
  let charge = 0;
  let status;

  const amount = parseInt(data.amount);

  if (transectionType === "sendmoney") {
    charge = amount > 100 && 5;
    status = "success";
  }

  if (transectionType === "cashout") {
    charge = amount * 0.015;
    status = "pending";
  }

  if (transectionType === "cashin") {
    status = "pending";
  }

  const newTransection = {
    sendAmount: parseInt(data.amount),
    minusAmount: parseInt(data.amount) + charge,
    sender: user.email,
    receiver: recipient.email,
    transectionType,
    status,
  };

  await axiosSecure.post("/transetions/create", newTransection);
  transectionType === "sendmoney" &&
    (await axiosSecure.post("/transetions/sendmoney", newTransection));
}
