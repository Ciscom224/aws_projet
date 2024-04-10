import axios from 'axios'

export const GET_USERS="GET_USERS";
export const getUsers=    ()=> {
    return async (dispatch) => {
        return   await axios
        .get( `${process.env.REACT_APP_API_URL}api/user/all`)
        .then((res)=> {
            // console.log(res.data)
            dispatch({type:GET_USERS,payload:res.data})
        })
        .catch((err)=> console.log(err))
    }
}