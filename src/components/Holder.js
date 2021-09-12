export default function Holder(props) {
  return (
    <div
      style={{
        height: "100%",
        padding: "24px 32px",
        border: "1px solid #d9d9d9",
        background: "#ffffff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {props.children}
    </div>
  );
}
