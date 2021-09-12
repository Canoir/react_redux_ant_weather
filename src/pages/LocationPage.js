import { Input, Form, Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { setLocation } from "../store/tempSlice";
import Holder from "../components/Holder";

function LocationPage(props) {
  const dispatch = useDispatch();
  //
  const [form] = Form.useForm();
  //
  const location = useSelector((s) => s.temp.location);
  //
  return (
    <Holder>
      <Form
        form={form}
        onFinish={(v) => {
          dispatch(setLocation(v.loc));
          form.resetFields();
        }}
      >
        <Form.Item name="loc">
          <Input
            placeholder={"Current location is : " + location}
            allowClear
            style={{ width: "400px" }}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Set Location
          </Button>
        </Form.Item>
      </Form>
    </Holder>
  );
}

export default LocationPage;
