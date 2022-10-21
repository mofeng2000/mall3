import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import mitt from "mitt";
const emitter = mitt()

// import {request} from 'network/request'
// request({
//   url:'/home/multidata'
//
// }).then(res =>{
//   console.log(res);
// }).catch(err =>{
//   console.log(err);
// })
//给所有的vue组件绑定一个$bus
// import bus from './util/Bus';
createApp(App).use(store).use(router).use(emitter).mount('#app')

// App.prototype.$bus = new vue()
// import mitt from 'mitt'
// const emitter = mitt()
// // listen to an event
// emitter.on('foo', e => console.log('foo', e) )
// // fire an event
// emitter.emit('foo', { a: 'b' })

