import React, {useState} from "react";
import Tab from "@material-tailwind/react/Tab";
import TabList from "@material-tailwind/react/TabList";
import TabItem from "@material-tailwind/react/TabItem";
import TabContent from "@material-tailwind/react/TabContent";
import TabPane from "@material-tailwind/react/TabPane";

export default function Test({data, mainTab}) {
    const [openTab, setOpenTab] = useState("");
    const [openPane, setOpenPane] = useState(0);
    const tabNames = ['objective', 'solution', 'result'];
    let counter = mainTab;

    counter--;

    return (
        <Tab>
            <TabList color="lightBlue">
            {tabNames.map((item, i) => (
                <TabItem
                    key={i}
                    onClick={(e) => {
                        e.preventDefault();
                        setOpenTab(item);
                        setOpenPane(i);
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
            {data[counter].project?.map((pane, i) => (
                <TabPane key={i} active={openTab === "objective" ? true : false}>
                    <p>
                    {pane[openPane]}
                    {/* {console.log(openPane + ": pane")}
                    {console.log(openTab + ": tab")} */}
                    </p>
                </TabPane>
            ))}
                {/* <TabPane active={openTab === 2 ? true : false}>
                    <p>
                    We worked with Link Up TV on the creative ideation of the conference and booked and managed guests and talent including record label heads, artists, producers and presenters.
                    </p>
                </TabPane>
                <TabPane active={openTab === 3 ? true : false}>
                    <p>
                    Sold out event with over 500 attendees including household names, brand awareness, and positive brand perception for Link up TV. Exceeded KPIs set on all social platforms and website.
                    </p>
                </TabPane> */}
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