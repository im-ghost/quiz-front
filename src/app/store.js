import { configureStore } from '@reduxjs/toolkit'
import  quizSlice  from '../features/quiz/quizSlice'
import  userSlice  from '../features/user/userSlice'

export const store = configureStore({
  reducer: {
    quiz:quizSlice,
    user:userSlice
  },
})