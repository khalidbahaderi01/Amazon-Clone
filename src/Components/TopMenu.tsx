import '../Theme/style.css'
import MenuPart1 from './TopMenus/Part1'
import SearchMenu from './TopMenus/Part2'
export default function TopMenu(){
    return (<>
    <div className="topMenuBar" >
  <MenuPart1 />
  <SearchMenu />
  </div>
</>)
}