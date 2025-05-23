import { useState } from "react"
import SelectCazual from "../../components/Cazual/SelectCazual"
import SelectFilter, { setDataFilter } from "../../components/Cazual/SelectFilter"
import { ChevronRight } from "lucide-react"
import { Link } from "react-router-dom"

const Cazual = () => {
  const [filterData,setFilterData] = useState<setDataFilter>({sizeDress: "",
  range: [0, 100],
  check: "",
  cazual: ""})
  return (
    <div className="container max-md:px-4 pb-10">
      <hr />
      <nav className="text-sm text-gray-500 flex items-center gap-1 my-6">
        <Link to="/" className="hover:underline text-gray-600">Home</Link>
        <ChevronRight className="w-4 h-4" />
        <span className="text-black">T-shirts</span>
      </nav>
      <div className="grid relative gap-5 grid-cols-12">
      <SelectFilter setFilterData={setFilterData}/>
      <SelectCazual filterData={filterData}/>
      </div>
    </div>
  )
}

export default Cazual
