
import Tabs from 'react-bootstrap/Tabs';
import styles from './CustomTabs.module.scss'
import Tab from 'react-bootstrap/Tab';
import React from 'react';
function CustomTabs({children,defaultTabName}){
    return(
        <div className={styles.tabsDiv}>
            <Tabs
            defaultActiveKey={defaultTabName}
            id="frameworks-tab"
            className="mb-3"
            >
                     {React.Children.map(children, (child) => {
          if (!React.isValidElement(child)) return null;

          const { name, children: tabContent } = child.props;

          return (
            <Tab eventKey={name} title={name}>
              {tabContent}
            </Tab>
          );
        })}
            </Tabs>
        </div>
    )
}
export default CustomTabs