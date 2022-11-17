import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import {
    getUsers as users,
    getUser as user,
    putUser as upUser,
    deleteUser as dUser,
    regUser as signup,
    logUser as signin
} from "../features/user/userSlice"


const Test = ()=>{
      
       
const {
       user,
       loading
} = useSelector((state)=> state.user)
const dispath = useDispatch()
useEffect(() => {
       if(loading==="succeeded"){
              console.log(user)
       }
       console.log(user)
              }, [user])
const fakeUser = {
    name:"mememememe",
    email:"meffffme",
    password:"nnnnnnnnnn",
}
const updated = {
    name:"mememememe",
    email:"meffffme",
    password:"nnn",
}
    return(   
        <>
     <button onClick={async()=>{

       await dispath(signin(fakeUser)).unwrap()
       console.log(user)
       }}>
            LOG FAKE USER
     </button>
     <button onClick={async ()=>{
       await dispath(signup(fakeUser)).unwrap()
       console.log(user)
       }}>
            REGISTER FAKE USER
     </button>
     <button onClick={()=>dispath(dUser(user._id)).unwrap()}>
            DEL FAKE USER
     </button>
     <button onClick={()=>dispath(upUser({
       id:user._id,
       updated:updated
       })).unwrap()}>
            UPDATE FAKE USER
     </button>
     <button onClick={()=>dispath(users(user.token)).unwrap()}>
             GET USERS
     </button>
     <button onClick={()=>dispath(user(user.token)).unwrap()}>
            GET USER
     </button>
     </>
    )
}



export default Test