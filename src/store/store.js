import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {                     // 在 store 中的 state 对象，可以理解为 Vue 实例中的 data 对象，它用来保存最基本的数据。
    nowDate: new Date,
    count: 1
  },
  getters: {                   // Getters 也可以理解为 Vue 中的计算属性 (computed)。
    dateFormat (state, getters) {
      let date = state.nowDate
      return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} / ${date.getHours()}:${date.getMinutes()}`
    }
  },
  actions: {              // Action 类似于 mutation，不同在于： Action 不直接更改状态，而是提交 mutation 2. Action 可以包含任何异步操作
    asyncAdd (context) {
      setTimeout(() => {
        context.commit('addCount')
      }, 1000)
    }
  },
  mutations: {               // mutation 可以理解为 Vue 中的 method 事件，只不过调用 mutation 需要特别的方法
    addCount (state) {
      store.state.count++
    }
  }
})
export default store
