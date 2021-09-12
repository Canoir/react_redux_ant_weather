// import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Layout, Typography, Menu } from "antd";
import { yellow } from "@ant-design/colors";
import { changePage } from "./store/pagerSlice";
import CounterPage from "./pages/CounterPage";
import HomePage from "./pages/HomePage";
import LocationPage from "./pages/LocationPage";

function App() {
  const dispatch = useDispatch();
  //
  const pageIndex = useSelector((state) => state.pager.currentPage);
  //
  return (
    <Layout className="layout" style={{ height: "100vh" }}>
      <Layout.Header
        style={{
          backgroundColor: yellow[9],
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Typography.Text
          style={{ color: "#fafafa", fontSize: "28px", marginRight: "32px" }}
        >
          Who is Weather
        </Typography.Text>
        <Menu
          onSelect={({ key }) => {
            if (key === "counter") {
              dispatch(changePage(<CounterPage />));
            } else if (key === "home") {
              dispatch(changePage(<HomePage />));
            } else if (key === "location") {
              dispatch(changePage(<LocationPage />));
            }
          }}
          mode="horizontal"
          defaultSelectedKeys={["home"]}
          style={{ backgroundColor: yellow[9], color: "#ffffff", width: "70%" }}
        >
          <Menu.Item key="home">Home</Menu.Item>
          <Menu.Item key="counter">Counter</Menu.Item>
          <Menu.Item key="location">Location</Menu.Item>
        </Menu>
      </Layout.Header>
      <Layout.Content
        style={{ padding: "48px 64px", backgroundColor: yellow[0] }}
      >
        {pageIndex}
      </Layout.Content>
      <Layout.Footer
        style={{
          backgroundColor: yellow[0],
          borderTop: "1px solid #d9d9d9",
        }}
      >
        Ant Design ©2021 Used by iBit
      </Layout.Footer>
    </Layout>
  );
}

export default App;
