<template>
  <div class="card1 image-full h-44">

    <img :src="item.image" alt="image" />

    <div class="card1__content">
      <p class="card1__title">{{ item.title }}</p>
      <div class="card1__description">
        <p class="">{{ item.description }}</p>
        <!-- <div
          class="badge badge-outline mx-1 my-3"
          v-for="(tech, index) in item.tech"
          :key="index"
        >
          {{ tech }}
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["item"],
};
</script>

<style>
.card1 {
  position: relative;
  background-color: #f2f2f2;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  height: 250px;
  width: 250px;
}

.card1:hover {
  transform: scale(1.02);
  box-shadow: 0 8px 16px rgba(255, 255, 255, 0.2);
}

.card1__content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
  background-color: var(--text-color);
  transform: rotateX(-90deg);
  transform-origin: bottom;
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.card1:hover .card1__content {
  transform: rotateX(0deg);
}

.card1__title {
  margin: 0;
  font-size: 16px;
  color: var(--primary-color);
  font-weight: 700;
}

.card1:hover svg {
  scale: 0;
}

.card1__description {
  margin: 10px 0 0;
  font-size: 14px;
  color: var(--primary-color);
  line-height: 1.4;
}
</style>
