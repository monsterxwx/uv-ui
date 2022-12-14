import { provide, inject, onMounted, onBeforeUnmount, ref } from 'vue'
export function useChildren (name, obj = {}) {
  const fields = []

  const childrenNum = ref(0)

  const addField = (field) => {
    fields.push(field)
    childrenNum.value++
  }

  const removeField = (field) => {
    fields.splice(fields.indexOf(field), 1)
    childrenNum.value--
  }
  provide(name, { addField, removeField, fields, childrenNum, ...obj })
  return {
    fields,
    childrenNum
  }
}

export function useParent (name, context) {
  const fatherObj = inject(name, {})
  const index = ref(null)
  onMounted(() => {
    if (fatherObj.props) {
      fatherObj.addField(context)
      index.value = fatherObj.fields.indexOf(context)
    }
  })

  onBeforeUnmount(() => {
    if (fatherObj.props) {
      fatherObj.removeField(context)
    }
  })

  return {
    ...fatherObj,
    index
  }
}
