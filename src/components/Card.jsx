const Card = ({ arrow, text, bg }) => {
  return (
    <div
      className="flex flex-col gap-3 justify-center items-center"
      style={{
        borderRadius: "15px",
        background: `var(--Primary, ${bg}) `,
        width: "155px",
        height: "165px",
      }}
    >
      <img src={arrow} alt="send" />
      <p className="font-bold">{text}</p>
    </div>
  );
};

export default Card;
