import { combineReducers,createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import {
    fetchUsers,
    fetchUser,
    loginUser,
    registerUser,
    updateUser,
    delUser,
} from "./userAPI"


const initialState = {
  user:null,
  users:null,
  userById:null,
  loading: 'idle',
  error:null
}/*
const fetchUserById = createAsyncThunk(
    'users/fetchByIdStatus',
    async (userId: number, thunkAPI) => {
      const response = await userAPI.fetchById(userId)
      return response.data
    }
  )*/
export const getUsers =createAsyncThunk(
    'users/getUsers',
    async (state, thunkAPI) => {
    return fetchUsers()
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        return data
    } )
})

export const logUser =createAsyncThunk(
    'users/logUser',
    async (payload, thunkAPI) =>{
    return loginUser(payload)
    .then(res=>res.json())
    .then(data=>{
        localStorage.setItem("quiz-app-user",JSON.stringify(data))
        return data
    } )
})

export const regUser =createAsyncThunk(
    'users/regUser',
    async (payload, thunkAPI) => {
    return registerUser(payload)
    .then(res=>res.json())
    .then(data=>{
        localStorage.setItem("quiz-app-user",JSON.stringify(data))
        return data
    } )
})

export const deleteUser =createAsyncThunk(
    'users/deleteUser',
    async (payload, thunkAPI) => {
    return delUser(payload)
    .then(res=>res.json())
    .then(data=>{
        localStorage.removeItem("quiz-app-user")
        return data
    } )
})

export const putUser =createAsyncThunk(
    'users/putUser',
    async (payload, thunkAPI) => {
        console.log(payload)
    return updateUser(payload)
    .then(res=>res.json())
    .then(data=>{
        localStorage.setItem("quiz-app-user",JSON.stringify(data))
        return data
    } )
})

export const getUser = createAsyncThunk(
    'users/getUser',
    async (payload, thunkAPI) => { 
    return fetchUser(payload)
    .then(res=>res.json())
    .then(data=>{
        return data
    } )
})



export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {/*
     state,action)
    },*/
  },
  extraReducers: (builder) => {
    builder
    .addCase(logUser.pending, (state, action) => {
        if (state.loading === 'idle') {
          state.loading = 'pending'
        }
      })
      .addCase(logUser.fulfilled, (state, action) => {
        console.log(state.loading)
        const { payload } = action

        if (
          state.loading === 'pending'
        ) {
          state.loading = 'idle'
          state.user = payload
          console.log("ttt"+state.user)
        }
      })
      .addCase(logUser.rejected, (state, action) => {
        const { error } = action
        if (
          state.loading === 'pending'
        ) {
          state.loading = 'idle'
          state.error = error
        }
      })
    .addCase(putUser.pending, (state, action) => {
        if (state.loading === 'idle') {
          state.loading = 'pending'
        }
      })
      .addCase(putUser.fulfilled, (state, action) => {
        const { payload } = action
        if (
          state.loading === 'pending'
        ) {
          state.loading = 'idle'
          state.user = payload
        }
      })
      .addCase(putUser.rejected, (state, action) => {
        const { error } = action
        if (
          state.loading === 'pending'
        ) {
          state.loading = 'idle'
          state.error = error
        }
      })
    .addCase(getUsers.pending, (state, action) => {
        if (state.loading === 'idle') {
          state.loading = 'pending'
        }
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        const { payload } = action
        if (
          state.loading === 'pending'
        ) {
          state.loading = 'idle'
          state.users = payload
        }
      })
      .addCase(getUsers.rejected, (state, action) => {
        const { error } = action
        if (
          state.loading === 'pending'
        ) {
          state.loading = 'idle'
          state.error = error
        }
      })
    .addCase(getUser.pending, (state, action) => {
        if (state.loading === 'idle') {
          state.loading = 'pending'
        }
      })
      .addCase(getUser.fulfilled, (state, action) => {
        const { payload } = action
        if (
          state.loading === 'pending'
        ) {
          state.loading = 'idle'
          state.userById = payload
        }
      })
      .addCase(getUser.rejected, (state, action) => {
        const { error } = action
        if (
          state.loading === 'pending'
        ) {
          state.loading = 'idle'
          state.error = error
        }
      })
    .addCase(deleteUser.pending, (state, action) => {
        if (state.loading === 'idle') {
          state.loading = 'pending'
        }
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        const { payload } = action
        if (
          state.loading === 'pending'
        ) {
          state.loading = 'idle'
          state.user = null
        }
      })
      .addCase(deleteUser.rejected, (state, action) => {
        const { error } = action
        if (
          state.loading === 'pending'
        ) {
          state.loading = 'idle'
          state.error = error
        }
      })
    .addCase(regUser.pending, (state, action) => {
        if (state.loading === 'idle') {
          state.loading = 'pending'
        }
      })
      .addCase(regUser.fulfilled, (state, action) => {
        const { payload } = action
        if (
          state.loading === 'pending'
        ) {
          state.loading = 'idle'
          state.user = payload
        }
      })
      .addCase(regUser.rejected, (state, action) => {
        const { error } = action
        if (
          state.loading === 'pending'
        ) {
          state.loading = 'idle'
          state.error = error
        }
      })
  },
})
/*
export const {
     users,
      user,
      upUser,
      dUser,
      signup,
      signin
     } = userSlice.*/

export default userSlice.reducer