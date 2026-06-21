import { IoSearchCircleOutline } from "react-icons/io5"
import { vm } from "../../styles/vm.styles"


export const Search = () => {
  return (
    <>

    <div className={vm.searchWrap}>
        <IoSearchCircleOutline className="text-[#555d72] w-3.5 h-3.5" />
        <input className={vm.searchInput} placeholder="Search documents" />
    </div>
    </>
  )
}
