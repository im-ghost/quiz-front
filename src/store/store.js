import {  create }  from 'zustand';
import axios from 'axios';
const BASE_URL= "http://localhost:4000/api/v1"
export const useStore = create((set) => ({
  user: null,
  quizzes: null,
  quiz: null,
  fetchUserQuizzes: async (id) => {
    const token = useStore.getState()?.user?.token;
    if (!token) {
      console.error('No token available');
      return;
    }

    try {
      const response= await axios.get(`${BASE_URL}/quiz/user/${id}/`, {
        headers: {
          Authorization: `${token}`,
        },
      });
      set({ quizzes: response.data.results });
      console.log(response.data)
    } catch (error) {
      console.error(error);
    }
  },
  createQuiz: async (body) => {
    const token = useStore.getState()?.user?.token;
    if (!token) {
      console.error('No token available');
      return;
    }

    try {
      const response= await axios.post(`${BASE_URL}/quiz/`,body, {
        headers: {
          Authorization: token
        }
      });
      console.log(response.data)
      set({ quiz: response.data });
    } catch (error) {
      console.error(error);
    }
  },
  createUser: async (user) => {
    try {
      const response = await axios.post(`${BASE_URL}/users/`, user);
      set({ user: response.data });
     
      localStorage.setItem('user', JSON.stringify(response.data));
    } catch (error) {
      console.error(error);
    }
  },
  logUser: async (user) => {
    try {
      const response= await axios.post(`${BASE_URL}/users/user/login`, user);
      set({ user: response.data });
       
      localStorage.setItem('user', JSON.stringify(response.data));
    } catch (error) {
      console.error(error);
    }
  },
  delUser: async (id) => {
    
    const token = useStore.getState()?.user?.token;
    if (!token) {
      console.error('No token available');
      return;
    }
    try {
      const response= await axios.delete(`${BASE_URL}/users/user/${id}`, {
        headers: {
          Authorization: token
        }
      });
      set({ user: null });
       
      localStorage.removeItem('user');
    } catch (error) {
      console.error(error);
    }
  },
  editUser: async (user) => {
    
    const token = useStore.getState()?.user?.token;
    if (!token) {
      console.error('No token available');
      return;
    }
    try {
      const response= await axios.put(`${BASE_URL}/users/user/${user._id}`, user, {
        headers: {
          Authorization: token
        }
      });
      set({ user: response.data });
       
      localStorage.setItem('user', JSON.stringify(response.data));
    } catch (error) {
      console.error(error);
    }
  },
  editQuiz: async (quiz) => {
    
    const token = useStore.getState()?.user?.token;
    if (!token) {
      console.error('No token available');
      return;
    }
    try {
      const response= await axios.post(`${BASE_URL}/quiz/quiz/${quiz._id}`, quiz, {
        headers: {
          Authorization: token
        }
      });
      set({ quiz: response.data });
       
    } catch (error) {
      console.error(error);
    }
  },
  delQuiz: async (id) => {
    
    const token = useStore.getState()?.user?.token;
    if (!token) {
      console.error('No token available');
      return;
    }
    try {
      const response= await axios.delete(`${BASE_URL}/quiz/quiz/${id}`,{
        headers: {
          Authorization: token
        }
      });
      set({ quiz:null });
       
    } catch (error) {
      console.error(error);
    }
  },
  getQuizById: async (id) => {
    
    const token = useStore.getState()?.user?.token;
    if (!token) {
      console.error('No token available');
      return;
    }

    try {
      const response= await axios.get(`${BASE_URL}/quiz/quiz/${id}/`, {
        headers: {
          Authorization: `${token}`,
        },
      });
      set({ quiz: response.data });
      console.log(response.data)
    } catch (error) {
      console.error(error);
    }
  },
}));

// Get user from local storage
const storedUser = JSON.parse(localStorage.getItem('user') || 'null');
if (storedUser) {
  console.log(storedUser)
  useStore.setState({ user: storedUser });
}
export default useStore