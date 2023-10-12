import {Avatar, Button, Dropdown, Layout, MenuProps, Row, Space} from "antd";
import {UserOutlined} from "@ant-design/icons";
import {getUserInfo, removeUserInfo} from "@/services/auth.service";
import {authKey} from "@/constants/storageKey";
import {useRouter} from "next/navigation";
const {Header: AntHeader} = Layout;

const DashboardHeader = () => {
  const router = useRouter();

  const logOut = () => {
    removeUserInfo(authKey);
    router.push("/login");
  };

  const items: MenuProps["items"] = [
    {
      key: "0",
      label: (
        <Button onClick={logOut} type="text" danger>
          Logout
        </Button>
      ),
    },
  ];
  const {role} = getUserInfo() as any;
  return (
    <div
      style={{
        background: "#fff",
        height: "64px",
        padding: "0px 50px",
      }}>
      <Row
        justify="end"
        align="middle"
        style={{
          height: "100%",
        }}>
        <p
          style={{
            margin: "0px 5px",
          }}>
          {role}
        </p>
        <Dropdown menu={{items}}>
          <a>
            <Space wrap size={16}>
              <Avatar size="large" icon={<UserOutlined />} />
            </Space>
          </a>
        </Dropdown>
      </Row>
    </div>
  );
};

export default DashboardHeader;
