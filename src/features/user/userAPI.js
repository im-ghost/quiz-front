const BASE_URL = "http://localhost:5000/api"
import { useSelector } from "react-redux"


const fetchUsers = async ()=>{
    
    const authToken = localStorage.getItem("quiz-app-user")
    const authTokenP = JSON.parse(authToken)
   const users = await fetch(`${BASE_URL}/users`,{
        headers:{
            authorization:authTokenP.token
        }
    })
    console.log(users)
    return users
}

const delUser = async (id)=>{
    
    const authToken = localStorage.getItem("quiz-app-user")
    const authTokenP = JSON.parse(authToken)
   const user = await fetch(`${BASE_URL}/users/user/${id}`,{
        headers:{
            authorization:authTokenP.token
        },
        method:"DELETE"
    })
    return user
}

const loginUser = async (user)=>{

   const userr = await fetch(`${BASE_URL}/users/user/login`,{
        method:"POST",
        headers:{
        'Content-Type':'application/json' 
             },
        body:JSON.stringify(user)
    })
    return userr
}

const registerUser = async (payload)=>{
    console.log(payload)
   const userr = await fetch(`${BASE_URL}/users/`,{
        method:"POST",
        headers:{
        'Content-Type':'application/json' 
             },
        body:JSON.stringify(payload)
    })
    return userr
}

const updateUser = async ({id,user})=>{
    const authToken = localStorage.getItem("quiz-app-user")
    const authTokenP = JSON.parse(authToken)
   const userr = await fetch(`${BASE_URL}/users/user/${id}`,{
        headers:{
            authorization:authTokenP.token,
        'Content-Type':'application/json' 
             },

        method:"PUT",
        body:JSON.stringify(user)
    })

    return userr
}

const fetchUser = async (id)=>{
    
    const authToken = localStorage.getItem("quiz-app-user")
    const authTokenP = JSON.parse(authToken)
   const users = await fetch(`${BASE_URL}/users/user/${id}`,{
        headers:{
            authorization:authTokenP.token
        }
    })
    return users
}





export {
    fetchUsers,
    fetchUser,
    loginUser,
    registerUser,
    updateUser,
    delUser,
    BASE_URL
}