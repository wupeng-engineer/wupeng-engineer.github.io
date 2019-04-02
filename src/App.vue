<template>
  <div id="app">
      <vue-particles color="#7b7d7d" :particleOpacity="0.7" :particlesNumber="60" shapeType="circle" :particleSize="4" linesColor="#203c77" :linesWidth="1" :lineLinked="true" :lineOpacity="0.4" :linesDistance="100" :moveSpeed="2" :hoverEffect="true" hoverMode="grab" :clickEffect="true" clickMode="push" class="lizi">
      </vue-particles>
    <router-view/>
  </div>
</template>

<style lang="less">
#particles-js{
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
body {
    background-color: #e74c3c;

    animation: bg-color 10s infinite;

    -webkit-animation: bg-color 10s infinite;
  }

  @-webkit-keyframes bg-color {
    0% {
      background-color: #e74c3c;
    }

    20% {
      background-color: #f1c40f;
    }

    40% {
      background-color: #1abc9c;
    }

    60% {
      background-color: #3498db;
    }

    80% {
      background-color: #9b59b6;
    }

    100% {
      background-color: #e74c3c;
    }
  }

  @keyframes bg-color {
    0% {
      background-color: #e74c3c;
    }

    20% {
      background-color: #f1c40f;
    }

    40% {
      background-color: #1abc9c;
    }

    60% {
      background-color: #3498db;
    }

    80% {
      background-color: #9b59b6;
    }

    100% {
      background-color: #e74c3c;
    }
  }
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  
}
</style>
