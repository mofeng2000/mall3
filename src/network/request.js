import axios from 'axios'

//Promise封装
// export function request(config) {
//   return new Promise((resolve, reject) => {
//     const instance = axios.create({
//       baseURL: 'http://123.207.32.32:8000',
//       timeout: 5000
//     })
//     instance(config).then(res => {
//       resolve(res)
//     })
//       .catch(err => {
//       reject(err)
//     })
//   })
//
// }


//常用的封装，因为axios返回的就是Promise
export function request(config) {

  const instance = axios.create({
    baseURL: 'http://localhost:3000',
      timeout: 5000
     })
  // 配置请求和响应拦截
  instance.interceptors.request.use(config => {
    // console.log('来到了request拦截success中');
    // 1.当发送网络请求时, 在页面中添加一个loading组件, 作为动画

    // 2.某些请求要求用户必须登录, 判断用户是否有token, 如果没有token跳转到login页面

    // 3.对请求的参数进行序列化(看服务器是否需要序列化)
    // config.data = qs.stringify(config.data)
    // console.log(config);

    // 4.等等
    return config
  }, err => {
    // console.log('来到了request拦截failure中');
    return err
  })

  instance.interceptors.response.use(res => {
    // console.log('来到了response拦截success中');
    return res.data
  }, err => {
    console.log(err);
    return err
  })
  //返回真正的实例
  return instance(config)
}
