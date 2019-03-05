<template>
<div>
  <TodoContainer />
  <ModalForm />
</div>
</template>

<script>
import TodoContainer from '@/components/todo-container.vue'
import ModalForm from '@/components/modal-form.vue'

export default {
  components: {
    TodoContainer,
    ModalForm
  },
  async fetch({
    store
  }) {
    await store.dispatch('todo/fetchTodos');
  },
}
</script>
