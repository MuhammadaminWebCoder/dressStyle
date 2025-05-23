import { instance } from "../hooks/instance"
import { useQuery } from "@tanstack/react-query"

const getCards = () => {
  const {data = []} = useQuery({
    queryKey:['category-all'],
    queryFn:() => instance().get("/categories").then(res => res.data)
  })

  return {data}
}

export default getCards
