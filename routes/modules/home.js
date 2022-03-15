const express = require('express')
const router = express.Router()
const generateURL = require('../../generate_URL')
const URL = require('../../models/shortURL')

router.get('/', (req, res) => {
  res.render('index')
})

// 產生短網址
router.post('/', (req, res) => {
  const urlshort = generateURL()
  // 用判斷式 data ? data 的方式 輸入相同網址時產生一樣的縮址，不會製造新的
  URL.findOne({ url: req.body.url })
    .then(data =>
      data ? data : URL.create({
        urlshort: urlshort, url: req.body.url
      })
    )
    .then(data =>
      res.render('new', { urlshort: data.urlshort, url: data.url }))
    .catch(error => console.error(error))
})

// 回到原本網站
// findOne[Mongoose語法]會在找到指定資料後就關閉，find則會全部找完再配對指定資料而後關閉 => find會導致網頁呈現重新導向次數過多而無法正常運作
router.get('/:shorturl', (req, res) => {
  const shorturl = req.params.shorturl
  URL.findOne({ urlshort: `http://localhost:3000/${shorturl}` })
    .then(data =>
      res.redirect(`${data.url}`)
    )
    .catch(err => console.log(err))
})

module.exports = router