import { defineStore } from 'pinia'
import { loginApi, getInfoApi, loginOutApi } from '@/api/user'

// eslint-disable-next-line import/prefer-default-export
export const useUserStore = defineStore({
  id: 'userInfo',
  state: () => ({
    token: '', // 登录token
    info: {
      avatar: 'https://img.caibeitv.com//caibeitv/upload/image/avatar/2016112/8214621/557d990/63841f6/9723bdbb80472d2b77bfe.jpg',
      channelDescription: null,
      email: 'chunwen.zou@caibeitv.com',
      token:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MjM4NDI2NjQwNTU0NGU5NWViNWExNGQiLCJpYXQiOjE2NDc5MzU5MjUsImV4cCI6MTY1MDUyNzkyNX0.Kg9H0L5hIhZZ7zNMqxtbUXA8P4AoOpAZXFfyYdZmWiY',
      username: '邹春文',
      age: 80,
    }, // 用户信息
  }),
  actions: {
    async login(params) {
      try {
        const {
          data: { code, obj }
        } = await loginApi(params)
        this.token = obj
        // setToken(obj);
      } catch (error) {
        console.error('login error', error)
      }
    },
  },
})
