import { createContext, useReducer } from "react";
import reducer from "../reducers/reducer";

const initialState = {
    isLiked: false,
    likesCount: 16,
};
const CloneContext = createContext();

const CloneProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const likeButton = () => {
        dispatch({ type: "SUMA_LIKE" });
    };

    return (
        <CloneContext.Provider value={{ ...state, likeButton }}>
            {children}
        </CloneContext.Provider>
    )
}
export { CloneProvider }
export default CloneContext