import { instance } from "../hooks/instance"
import { useQuery } from "@tanstack/react-query"

const getCards = () => {
  const {data = [],isLoading,isError} = useQuery({
    queryKey:['category-all'],
    queryFn:() => instance().get("/categories").then(res => res.data)
  })

  return {data,isLoading,isError}
}

export default getCards
