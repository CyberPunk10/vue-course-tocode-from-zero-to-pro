module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    // ? '/' // вариант для хостинга!
    // ? '/modals/' // вариант для хостинга с запускам не из корня
    ? '' // запуск с локальной машины
    : '/',

  assetsDir: 'assets',
  productionSourceMap: false // не сливать карты в production
}