module.exports = (plop) => {
  // 创建一个生成器
  plop.setGenerator('component', {
    description: '新增一个组件',
    prompts: [
      {
        type: 'input',
        name: 'componentName',
        message: '请输入组件名：',
        default: '',
        validate: value => {
          if (/.+/.test(value)) {
            return true
          }
          return '组件名为必填'
        }
      },
      {
        type: 'input',
        name: 'name',
        message: '请输入导出的名称：',
        default: '',
        validate: value => {
          if (/.+/.test(value)) {
            return true
          }
          return '导出的名称为必填'
        }
      }
    ],
    actions: data => {
      const { componentName } = data
      const actions = [
        {
          type: 'add',
          path: `components/${componentName}/${componentName}.vue`,
          templateFile: 'plop/index.vue.hbs',
          abortOnFail: true
        },
        {
          type: 'add',
          path: `components/${componentName}/index.js`,
          templateFile: 'plop/index.js.hbs',
          abortOnFail: true
        },
        {
          type: 'add',
          path: `components/${componentName}/demo/index.vue`,
          templateFile: 'plop/demo-index.vue.hbs',
          abortOnFail: true
        }
      ]
      return actions
    }
  })
}
