import { createRouter, createWebHashHistory } from 'vue-router'
import routerPages from './routerPage/pages'

const router = createRouter({
  routes: [...routerPages],
  history: createWebHashHistory()
})

const data = [
  {
    id: 1,
    name: '家电',
    goods: [
      {
        id: 11,
        gname: '冰箱',
        goods: [
          {
            id: 111,
            gname: '海尔'
          }, {
            id: 112,
            gname: '美的'
          }
        ]

      },
      {
        id: 12,
        gname: '洗衣机'
      }
    ]
  },
  {
    id: 2,
    name: '服饰'
  }
]

export default router
