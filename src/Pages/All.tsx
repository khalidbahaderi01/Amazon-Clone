import SecondaryMenu from "../Components/sec_Menu";
import TopMenu from "../Components/TopMenu";
import Card from "../Components/card";

export default function All(){
    return (<>
    
    <TopMenu />
    <SecondaryMenu /> 
    <Card gridParam={4}  />
   
    
    </>)
}