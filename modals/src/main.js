import Vue from 'vue'
import App from './App.vue'
import './assets/scss/main.scss'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')


// HW 34
// Создать пометку приоритета важности новой note
// При клике на title менять его содержимой, при enter - save, при esc - not save

// При фильтрации удаляет note не с тем индексом

