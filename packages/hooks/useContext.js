import { provide, inject, onMounted, onBeforeUnmount, ref } from 'vue'
export function useChildren (name, obj = {}) {
  const fields = []

  const addField = (field) => {
    fields.push(field)
  }

  const removeField = (field) => {
    fields.splice(fields.indexOf(field), 1)
  }
  provide(name, { addField, removeField, fields, ...obj })
  return {
    fields
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
