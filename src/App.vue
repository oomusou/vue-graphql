<template>
  <div>
    <ul>
      <li v-for="(item, index) in books" :key="index">
        {{ item.title }}
      </li>
    </ul>
  </div>
</template>

<script>
import gql from 'graphql-tag';

let books = gql`
  query {
    books: allBooks(category: FP) {
      title
    }
  }`;

export default {
  name: 'app',
  apollo: {
    books
  }
}
</script>