;(async () => {
  const app = document.createElement('div')
  const gooDoodle = document.querySelector('body > div.L3eUgb > div.o3j99.LLD4me.yr19Zb.LS8OJ')
  app.id = 'symbolBar'
  gooDoodle.append(app)

  const src = chrome?.runtime?.getURL('/react/index.js')
  await import(src)
})()
