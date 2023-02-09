<template>
  <div>
    <h1 class="text-4xl">About</h1>
    <button @click="helloWorld()">Sen Email</button>
  </div>
</template>

<script setup>
const helloWorld = () =>{
  console.log("call of hello world")
  throw new Error('Une nouvelle erreur')
}
</script>