import { defineStore } from 'pinia'
import { setToken, removeToken } from '@/utils/cookie'
import { userApi } from '~/api/user.js'

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    token: '',
    info: null
  }),
  getters: {
    getToken() {
      return this.token
    },
    getInfo() {
      return this.info
    }
  },
  actions: {
    // 登录操作
    login(token) {
      this.token = token
      // 获取用户信息
      userApi.getUserInfo().then((res) => {
        this.info = res
      })
      setToken(token)
    },

    // logout
    logout() {
      removeToken()
      this.token = ''
      this.info = null
    }
  }
})
