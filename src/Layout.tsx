import React from "react";
import { Tabs } from "antd";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
// @ts-ignore
import GitHubForkRibbon from 'react-github-fork-ribbon';

const { TabPane } = Tabs;

export default function Layout() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleTabChange = (key: string) => {
    switch (key) {
      case "accounts":
        navigate("/accounts");
        break;
      case "transaction":
        navigate("/transaction");
        break;
      case "settings":
        navigate("/settings");
        break;
    }
  };

  const activatedKey = location.pathname.slice(1);

  return (
    <React.Fragment>
      <GitHubForkRibbon
        href="https://github.com/calvinaco/cronos-webtool"
        target="_blank"
        position="right"
        color="black"
      >
        Fork me on GitHub
      </GitHubForkRibbon>
      <h1>Cronos Web Tool</h1>
      <Tabs defaultActiveKey={activatedKey} onChange={handleTabChange}>
        <TabPane tab="Accounts Balances" key="accounts">
          {" "}
        </TabPane>
        <TabPane tab="Query Transaction Status" key="transaction">
          {" "}
        </TabPane>
        <TabPane tab="Settings" key="settings"></TabPane>
      </Tabs>
      <Outlet />
    </React.Fragment>
  );
}
