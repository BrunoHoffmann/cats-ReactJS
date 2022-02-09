<template>
  <div id="app">
    <main>
      <transition mode="out-in">
        <div>
          <RouterView/>
          aaa
        </div>
      </transition>
    </main>
  </div>
</template>

<style lang="scss" src="./assets/scss/_app.scss"/>
