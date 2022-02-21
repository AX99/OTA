import React, {useState} from "react";
import Tab from "@material-tailwind/react/Tab";
import TabList from "@material-tailwind/react/TabList";
import TabItem from "@material-tailwind/react/TabItem";
import TabContent from "@material-tailwind/react/TabContent";
import TabPane from "@material-tailwind/react/TabPane";

export default function WorkTab({data, mainTab}) {
    const [openTab, setOpenTab] = useState('objective');
    const tabNames = ['Objective', 'Solution', 'Result'];


    return (
        <Tab>
            <TabList color="none" className="shadow-xl">
            {tabNames.map((item, i) => (
                <TabItem
                    key={i}
                    onClick={(e) => {
                        e.preventDefault();
                        setOpenTab(item.toLowerCase());
                    }}
                    ripple="light"
                    active={openTab === item ? true : false}
                    href="tabItem"
                    sx={styles.text}
                >
                    {item}
                </TabItem>
            ))}
            </TabList>
            <TabContent>
            {data[mainTab].project?.map((pane, i) => (
                <TabPane key={i} active={Object.keys(pane) !== null ? true : false}>
                    <p>
                    {pane[openTab] !== null ? pane[openTab] : null}
                    </p>
                </TabPane>
            ))}
            </TabContent>
        </Tab>
    );
}

const styles = {
    text: {
        "::first-letter": {
        textTransform:'capitalize',
        },
    },
}