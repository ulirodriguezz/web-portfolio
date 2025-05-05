import Tab from 'react-bootstrap/Tab';
function CustomTabItem({children,name}){
    return(
        <Tab eventKey={name} title={name}>
            {children}
        </Tab>
    )
}
export default CustomTabItem