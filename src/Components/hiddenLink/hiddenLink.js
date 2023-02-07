import { useSelector } from 'react-redux'
import { selectIsLoggedIn } from '../../redux/slice/authSlice'

const ShowOnLoggedIn = ({children}) => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    if(isLoggedIn){
        return children;
    }
    return null;
}
export const ShowOnLogOut = ({children}) => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    if(!isLoggedIn){
        return children;
    }
    return null;
}

export default ShowOnLoggedIn;