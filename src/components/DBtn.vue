<template>
  <button>
    <slot></slot>
  </button>
</template>

<style scoped>
button {
  padding: 12px 20px;
  font-size: 16px;
  border: 1px solid #e3e3ff;
  color: #2c3e50;
  background-color: ghostwhite;
  cursor: pointer;
  border-radius: 6px;
  transition: all 400ms ease-in-out;
  box-shadow: 0 2px 10px rgba(20, 20, 20, 0.2);
}

button:hover {
  background-color: #ececfc;
  box-shadow: 0 2px 6px rgba(20, 20, 20, 0.4);
}

button:focus {
  background-color: #e3e3ff;
}
</style>