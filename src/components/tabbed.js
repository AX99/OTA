import React, { useState } from "react";
import Tab from "@material-tailwind/react/Tab";
import TabList from "@material-tailwind/react/TabList";
import TabItem from "@material-tailwind/react/TabItem";
import TabContent from "@material-tailwind/react/TabContent";
import TabPane from "@material-tailwind/react/TabPane";

export default function WorkTab({ data, mainTab }) {
  const [openTab, setOpenTab] = useState("objective");
  const tabNames = ["Objective", "Solution", "Result"];

  return (
    <Tab sx={{height: '250px'}}>
      <TabList color="none" sx={{fontFamily: 'heading'}} className="shadow-xl flex-wrap md:flex-nowrap">
        {tabNames.map((item, i) => (
          <TabItem
            className="cursor-pointer uppercase"
            key={i}
            onClick={() => {
              setOpenTab(item.toLowerCase());
            }}
            onMouseEnter={(e) => {
              e.target.style.textDecoration = "underline";
              e.target.style.color = "black";
            }}
            onMouseOut={(e) => {
              e.target.style.textDecoration = "none";
              e.target.style.color = "white";
            }}
            ripple="light"
            active={openTab === item.toLowerCase() ? true : false}

            
          >
            {item}
          </TabItem>
        ))}
      </TabList>
      <TabContent>
        {data[mainTab].project?.map((pane, i) => (
          <TabPane key={i} active={Object.keys(pane) ? true : false}>
            <p>{pane[openTab] ? pane[openTab] : null}</p>
          </TabPane>
        ))}
      </TabContent>
    </Tab>
  );
}
