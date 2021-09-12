import { blue, cyan, red, volcano } from "@ant-design/colors";
import { Space, Typography } from "antd";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setTemp, setFullLoc } from "../store/tempSlice";
import ReactLoading from "react-loading";
import Holder from "../components/Holder";

function HomePage(props) {
  const temp = useSelector((s) => s.temp.temp);
  const location = useSelector((s) => s.temp.location);
  const fullLocation = useSelector((s) => s.temp.fullLoc);
  const pager = useSelector((s) => s.pager.currentPage);
  //
  const [isLoad, setIsLoad] = useState(true);
  //
  const dispatch = useDispatch(props);
  //
  useEffect(() => {
    fetch(
      "https://api.weatherapi.com/v1/current.json?key=5e22b770ef1f4746a4e62841211209&q=" +
        location +
        "&aqi=yes"
    )
      .then((r) => {
        return r.json();
      })
      .then((r) => {
        if (r.current !== undefined) {
          dispatch(setTemp(r.current.temp_c));
          dispatch(setFullLoc(r.location.country + ", " + r.location.region));
        }
        setIsLoad(false);
      });
  }, [location, pager, dispatch]);
  //
  return (
    <Holder>
      <Space>
        {isLoad ? (
          <ReactLoading
            type={"spinningBubbles"}
            color={blue.primary}
            height={100}
            width={100}
          />
        ) : (
          <Typography.Text
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "start",
            }}
          >
            <b
              style={{
                fontSize: "32px",
                margin: "auto",
                paddingRight: "16px",
              }}
            >
              {fullLocation + ":"}
            </b>

            <span
              style={{
                fontSize: "64px",
                color:
                  temp > 40
                    ? red[5]
                    : temp > 30
                    ? volcano[5]
                    : temp <= 0
                    ? blue[5]
                    : cyan[5],
              }}
            >
              <b>{temp}</b>
            </span>
            <span style={{ marginTop: "8px", fontSize: "24px" }}>C°</span>
          </Typography.Text>
        )}
      </Space>
    </Holder>
  );
}

export default HomePage;
