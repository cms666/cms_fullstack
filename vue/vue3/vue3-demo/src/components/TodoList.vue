<template>
  <section class="todoapp">
    <header class="header">
      <h1>vue3 todos</h1>
      <input
        type="text"
        v-model="newTodo"
        class="new-todo"
        @keyup.enter="addTodo"
        placeholder="想干的事"
      />
    </header>
    <section class="main">
      <ul class="todo-list">
        <li
          class="todo"
          v-for="(todo, index) in todos"
          :key="todo.id"
          :class="{ completed: todo.completed }"
        >
          <div class="view">
            <input
              type="checkbox"
              name=""
              class="toggle"
              v-model="todo.completed"
            />
            <label>{{ todo.title }}</label>
            <button class="destroy" @click="destroy(index)"></button>
          </div>
        </li>
      </ul>
    </section>
    <div class="footer">
      <span class="todo-count">
        <strong>{{ remaining }}</strong
        >left
      </span>
      <button class="clear-completed" @click="clear">Clear completed</button>
    </div>
  </section>
</template>

<script>
import { reactive, toRefs, computed } from "vue";
export default {
  setup() {
    const state = reactive({
      newTodo: "",
      todos: [],
    });
    let remaining = computed(()=> state.todos.filter((res) => !res.completed).length)
    function addTodo() {
      let value = state.newTodo && state.newTodo.trim();
      state.todos.push({
        id: state.todos.length,
        title: value,
        completed: false,
      });
      state.newTodo = "";
      console.log(state.todos);
    }
    function destroy(index) {
      state.todos.splice(index, 1);
    }
    function clear(){
      state.todos = state.todos.filter((res) => !res.completed)
    }
    return {
      ...toRefs(state),
      addTodo,
      destroy,
      remaining,
      clear
    };
  },
};
</script>

<style>
.header.fixed {
  background: #fff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 100;
}
</style>
