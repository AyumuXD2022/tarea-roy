import { useContext } from "react"
import CloneContext from "../contexts/CloneProvider"

const useClone = () => {
    return useContext(CloneContext)
}
export default useClone