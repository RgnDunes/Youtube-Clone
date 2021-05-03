# Youtube Clone using React.Js

## Packages Used

- firebase
- react-router-dom
- material-ui

## API Used

## **Important Points**

> Yes we can pass Components as props but while doing so the name of the prop should be capitalised and should be used as a component and not a javascript variable.

```
Filename : Sidebar.js
-----------------------
import React from "react";
import SidebarRow from "./SidebarRow";
import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";

function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow Icon={HomeIcon} title="Home" />
      <SidebarRow Icon={WhatshotIcon} title="Trending" />
      <SidebarRow Icon={SubscriptionsIcon} title="Subscription" />
    </div>
  );
}

export default Sidebar;
```

```

Filename : SidebarRow.js
-------------------------
import React from "react";
import "./SidebarRow.css";

function SidebarRow({ Icon, title }) {
  return (
    <div className="sidebarRow">
      <Icon />
      <h1>{title}</h1>
    </div>
  );
}

export default SidebarRow;

```
