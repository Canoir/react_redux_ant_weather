import { red } from "@ant-design/colors";
import { Button, Space, Typography } from "antd";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Holder from "../components/Holder";
import { increment, decrement } from "../store/counterSlice";

function CounterPage(props) {
  const dispatch = useDispatch();
  //
  const counter = useSelector((s) => s.counter.counter);
  //
  return (
    <Holder>
      <Typography.Text style={{ fontSize: "18px" }}>
        The Counter is: <b>{counter}</b>
      </Typography.Text>
      <br />
      <Space>
        <Button
          type="primary"
          onClick={() => {
            dispatch(increment());
          }}
        >
          Increment
        </Button>
        <Button
          type="text"
          style={{ color: red.primary }}
          onClick={() => {
            dispatch(decrement());
          }}
        >
          Decrement
        </Button>
      </Space>
    </Holder>
  );
}

export default CounterPage;
