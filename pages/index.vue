<template>
<div>
  <TodoContainer />
</div>
</template>

<script>
import TodoContainer from '@/components/todo-container.vue'
export default {
  components: {
    TodoContainer
  },
  async fetch({
    store
  }) {
    await store.dispatch('todo/fetchTodos');
  }
}
</script>
