import SecondaryMenu from "../Components/sec_Menu";
import TopMenu from "../Components/TopMenu";
import Card from "../Components/card";
import Product from "../Components/Products";

export default function All(){
    return (<>
    
    <TopMenu />
    <SecondaryMenu /> 
    <Card gridNumber={3} itemsNumber={4}   />
    <Card gridNumber={1} itemsNumber={1}   />
    <Product image="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2023/img/Consumer_Electronics/XCM_CUTTLE_1555947_2997386_379x304_1X_en_US._SY304_CB594429819_.jpg" name="Pencils" />
    
    </>)
}