import React, {FC, useState} from "react";
import classNames from "classnames";

import styles from "./Tabs.module.scss";

enum TabsNames {
    All,
    Favorites,
    Popular,
}

const TABS_LIST = [
    {
        title: 'All',
        disabled: false,
        key: TabsNames.All,
    },
    {
        title: 'My favorites',
        disabled: false,
        key: TabsNames.Favorites,
    },
    {
        title: 'Popular',
        disabled: false,
        key: TabsNames.Popular,
    },
]

const Tabs = () => {
    const [activeTab, setActiveTab] = useState(TabsNames.All);

    const onTabClick = (key: TabsNames) => () => setActiveTab(key);

    return (
        <div className={styles.container}>
            {TABS_LIST.map((tab) => {
                return (
                    <div
                        key = {tab.key}
                        className={classNames(styles.tab, {
                            [styles.activeTab]: activeTab === tab.key,
                            [styles.disabled]: tab.disabled,
                        })}
                        onClick={tab.disabled ? undefined : onTabClick(tab.key)}
                    >
                        { tab.title }
                    </div>
                );
            })}
        </div>
    );
};

export default Tabs