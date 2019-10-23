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

let books = {
  query: gql`query ($category: BookCategory!) {
    books: allBooks(category: $category) {
      title
    }
  }`,
  variables: {
    category: 'FP',
  }
};

export default {
  name: 'app',
  apollo: {
    books
  }
}
</script>