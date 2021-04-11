<template>
    <div>
    <h1>Hello graphQl!</h1>
        {{users}}
    </div>
</template>

<script>
import gql from 'graphql-tag'
export default {
    name: 'Hello',
    apollo: {
        users: gql`query{
          users {
            data {
              id
              name
            }
          }
        }`,
    }
};
</script>

<style scoped>

</style>
<!--query{-->
<!--users {-->
<!--data {-->
<!--id-->
<!--}-->
<!--}-->
<!--}-->
