<template>
  <div id="app">
    <main>
      <transition mode="out-in">
        <div>
          <RouterView/>
        </div>
      </transition>
    </main>
  </div>
</template>

<style src="./app.css" scoped />

