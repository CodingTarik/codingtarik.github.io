export default {
  id: 'vuejs-state-management-vuex',
  title: 'Understanding State Management in Vue.js with Vuex Store',
  description: 'Learn how to manage application state in Vue.js using Vuex, including stores, mutations, actions, getters, and modules.',
  date: '2025-03-08',
  author: 'Tarik',
  categories: ['Web Development', 'Vue.js', 'State Management'],
  thumbnail: null,
  featured: false,
  keywords: ['vuejs', 'vuex', 'state management', 'vue', 'store', 'mutations', 'actions', 'getters'],
  
  content: `
# Understanding State Management in Vue.js with Vuex Store

Vuex is the official state management library for Vue.js applications. It provides a centralized store for all components in your application, making state management predictable and easier to debug.

## What is State Management?

State management is the process of managing application data (state) in a predictable way. In large applications, sharing state between components can become complex.

### The Problem Without State Management

\`\`\`javascript
// Component A
export default {
  data() {
    return {
      user: { name: 'John', email: 'john@example.com' }
    }
  }
}

// Component B needs the same user data
// How do we share it? Props? Events? Both become messy!
\`\`\`

### The Solution: Vuex Store

Vuex provides a centralized store where all components can access and modify shared state.

## Core Concepts

### 1. State

State is the single source of truth for your application data.

\`\`\`javascript
// store/index.js
import { createStore } from 'vuex'

export default createStore({
  state: {
    count: 0,
    user: null,
    todos: []
  }
})
\`\`\`

### 2. Getters

Getters are computed properties for the store. They're like computed properties but for the store.

\`\`\`javascript
export default createStore({
  state: {
    todos: [
      { id: 1, text: 'Learn Vuex', done: true },
      { id: 2, text: 'Build app', done: false }
    ]
  },
  getters: {
    doneTodos: (state) => {
      return state.todos.filter(todo => todo.done)
    },
    doneTodosCount: (state, getters) => {
      return getters.doneTodos.length
    },
    getTodoById: (state) => (id) => {
      return state.todos.find(todo => todo.id === id)
    }
  }
})
\`\`\`

### 3. Mutations

Mutations are the only way to change state. They must be synchronous.

\`\`\`javascript
export default createStore({
  state: {
    count: 0
  },
  mutations: {
    increment(state) {
      state.count++
    },
    incrementBy(state, payload) {
      state.count += payload.amount
    },
    setCount(state, value) {
      state.count = value
    }
  }
})
\`\`\`

### 4. Actions

Actions commit mutations. They can be asynchronous.

\`\`\`javascript
export default createStore({
  state: {
    count: 0,
    user: null
  },
  mutations: {
    setCount(state, value) {
      state.count = value
    },
    setUser(state, user) {
      state.user = user
    }
  },
  actions: {
    incrementAsync({ commit }) {
      setTimeout(() => {
        commit('increment')
      }, 1000)
    },
    async fetchUser({ commit }, userId) {
      try {
        const response = await fetch(\`/api/users/\${userId}\`)
        const user = await response.json()
        commit('setUser', user)
      } catch (error) {
        console.error('Error fetching user:', error)
      }
    },
    async incrementIfOdd({ state, commit }) {
      if (state.count % 2 === 1) {
        commit('increment')
      }
    }
  }
})
\`\`\`

## Complete Example

### Store Setup

\`\`\`javascript
// store/index.js
import { createStore } from 'vuex'

export default createStore({
  state: {
    count: 0,
    todos: [],
    loading: false
  },
  
  getters: {
    doneTodos: (state) => state.todos.filter(todo => todo.done),
    activeTodos: (state) => state.todos.filter(todo => !todo.done),
    todosCount: (state) => state.todos.length
  },
  
  mutations: {
    increment(state) {
      state.count++
    },
    decrement(state) {
      state.count--
    },
    addTodo(state, todo) {
      state.todos.push(todo)
    },
    toggleTodo(state, id) {
      const todo = state.todos.find(t => t.id === id)
      if (todo) {
        todo.done = !todo.done
      }
    },
    setLoading(state, value) {
      state.loading = value
    }
  },
  
  actions: {
    async fetchTodos({ commit }) {
      commit('setLoading', true)
      try {
        const response = await fetch('/api/todos')
        const todos = await response.json()
        todos.forEach(todo => commit('addTodo', todo))
      } catch (error) {
        console.error('Error fetching todos:', error)
      } finally {
        commit('setLoading', false)
      }
    },
    async addTodoAsync({ commit }, todoText) {
      commit('setLoading', true)
      try {
        const response = await fetch('/api/todos', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ text: todoText, done: false })
        })
        const todo = await response.json()
        commit('addTodo', todo)
      } catch (error) {
        console.error('Error adding todo:', error)
      } finally {
        commit('setLoading', false)
      }
    }
  }
})
\`\`\`

### Using in Components

\`\`\`vue
<template>
  <div>
    <p>Count: {{ count }}</p>
    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>
    
    <div v-if="loading">Loading...</div>
    <ul v-else>
      <li v-for="todo in todos" :key="todo.id">
        <input 
          type="checkbox" 
          :checked="todo.done"
          @change="toggleTodo(todo.id)"
        />
        {{ todo.text }}
      </li>
    </ul>
    
    <p>Done: {{ doneTodosCount }}</p>
    <p>Active: {{ activeTodosCount }}</p>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  computed: {
    // Map state
    ...mapState(['count', 'todos', 'loading']),
    
    // Map getters
    ...mapGetters(['doneTodos', 'activeTodos', 'todosCount']),
    
    // Custom computed with getters
    doneTodosCount() {
      return this.doneTodos.length
    },
    activeTodosCount() {
      return this.activeTodos.length
    }
  },
  
  methods: {
    // Map mutations
    ...mapMutations(['increment', 'decrement', 'toggleTodo']),
    
    // Map actions
    ...mapActions(['fetchTodos', 'addTodoAsync']),
    
    // Custom methods
    async loadTodos() {
      await this.fetchTodos()
    }
  },
  
  mounted() {
    this.loadTodos()
  }
}
</script>
\`\`\`

## Modules

For large applications, split your store into modules.

\`\`\`javascript
// store/modules/todos.js
export default {
  namespaced: true,
  
  state: {
    items: [],
    loading: false
  },
  
  getters: {
    doneTodos: (state) => state.items.filter(todo => todo.done)
  },
  
  mutations: {
    addTodo(state, todo) {
      state.items.push(todo)
    },
    setLoading(state, value) {
      state.loading = value
    }
  },
  
  actions: {
    async fetchTodos({ commit }) {
      commit('setLoading', true)
      // ... fetch logic
      commit('setLoading', false)
    }
  }
}

// store/modules/user.js
export default {
  namespaced: true,
  
  state: {
    currentUser: null
  },
  
  mutations: {
    setUser(state, user) {
      state.currentUser = user
    }
  },
  
  actions: {
    async login({ commit }, credentials) {
      // ... login logic
      commit('setUser', user)
    }
  }
}

// store/index.js
import { createStore } from 'vuex'
import todos from './modules/todos'
import user from './modules/user'

export default createStore({
  modules: {
    todos,
    user
  }
})
\`\`\`

### Using Namespaced Modules

\`\`\`vue
<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: {
    // Access namespaced state
    ...mapState('todos', ['items', 'loading']),
    ...mapState('user', ['currentUser'])
  },
  
  methods: {
    // Access namespaced actions
    ...mapActions('todos', ['fetchTodos']),
    ...mapActions('user', ['login']),
    
    // Or use this.$store directly
    async loadTodos() {
      await this.$store.dispatch('todos/fetchTodos')
    }
  }
}
</script>
\`\`\`

## Best Practices

### 1. Use Actions for Async Operations

\`\`\`javascript
// Good: Use action for async
actions: {
  async fetchData({ commit }) {
    const data = await api.getData()
    commit('setData', data)
  }
}

// Avoid: Async in mutations
mutations: {
  async setData(state, data) {  // Don't do this!
    state.data = await processData(data)
  }
}
\`\`\`

### 2. Keep Mutations Synchronous

\`\`\`javascript
// Good: Synchronous mutation
mutations: {
  setUser(state, user) {
    state.user = user
  }
}

// Avoid: Async mutation
mutations: {
  async setUser(state, userId) {  // Don't do this!
    state.user = await fetchUser(userId)
  }
}
\`\`\`

### 3. Use Getters for Computed State

\`\`\`javascript
// Good: Use getter
getters: {
  fullName: (state) => \`\${state.firstName} \${state.lastName}\`
}

// Avoid: Computing in components
computed: {
  fullName() {
    return \`\${this.$store.state.firstName} \${this.$store.state.lastName}\`
  }
}
\`\`\`

### 4. Use Modules for Large Applications

Break down your store into logical modules.

## Vuex vs Pinia

> [!INFO]
> Vuex is the traditional state management solution. **Pinia** is the new official state management library for Vue 3, recommended for new projects. Pinia has a simpler API and better TypeScript support.

## Summary

**Vuex provides:**
- Centralized state management
- Predictable state mutations
- DevTools integration
- Time-travel debugging

**Key Concepts:**
- **State**: Single source of truth
- **Getters**: Computed properties for store
- **Mutations**: Synchronous state changes
- **Actions**: Asynchronous operations

> [!TIP]
> For new Vue 3 projects, consider using **Pinia** instead of Vuex. It's the official recommendation and has a simpler API. However, understanding Vuex is still valuable for maintaining existing applications.

**Key Takeaway**: Vuex provides a centralized, predictable way to manage application state. Use mutations for synchronous changes, actions for async operations, and getters for computed state. For large applications, organize your store into modules.
`
};

