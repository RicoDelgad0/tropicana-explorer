<script setup>
  import { ref } from 'vue';

  defineProps({
    loaded: Boolean,
  });

  const showOnboarding = ref(true);

  function enterScene() {
    showOnboarding.value = false;
    if (AFRAME.utils.device.checkHeadsetConnected() && !AFRAME.utils.device.isMobile()) {
      document.querySelector('a-scene').enterVR();
    }
  }
</script>

<template>
  <div id="onboarding" v-if="showOnboarding">
    <div>
      <h1>Hidden objects game</h1>
      <p v-if="!loaded">loading...</p>
      <button v-if="loaded" @click="enterScene()">Enter scene</button>
      <div class="licences">
      <section>
        <h4>Movement modes support</h4>
        <ul>
          <li>
            Desktop – Keyboard for move (WASD or Arrows keys) + Mouse for look + click for interaction
          </li>
          <li>
            Mobile – 1x Finger touch to go forward + 2x Fingers touch to go
            backward + Gaze cursor for click
          </li>
          <li>
            VR Headset – AR/VR walk + Teleport (Grip for grab and laser for
            click) + Gaze cursor for click
          </li>
        </ul>
      </section>
        <dl>
          <dt>
            <i>Included</i>
          </dt>
          <dt>
            <a href="https://github.com/c-frame/aframe-extras" target="_blank">aframe-extras controls and animation-mixer</a>
          </dt><dd>
            <a href="https://github.com/c-frame/aframe-extras/blob/master/LICENSE" target="_blank">MIT License</a>
          </dd>

          <dt>
            <a href="https://github.com/c-frame/physx" target="_blank">aframe physx</a>
          </dt><dd>
            <a href="https://github.com/c-frame/aframe-extras/blob/master/LICENSE" target="_blank">MIT License</a>
          </dd>

          <dt>
            <a href="https://github.com/jure/aframe-blink-controls/" target="_blank">aframe-blink-controls</a>
          </dt><dd>
            <a href="https://github.com/jure/aframe-blink-controls/blob/main/LICENSE" target="_blank">MIT License</a>
          </dd>

          <dt>
            <a href=" https://github.com/AdaRoseCannon/aframe-xr-boilerplate" target="_blank">simple-navmesh-constraint</a>
          </dt><dd>
            By Ada Rose Cannon under MIT License
          </dd>

          <dt>
            <a href="https://sketchfab.com/3d-models/captains-quarters-a5c54257755e47ccb47b5d8bc7482d7e" target="_blank">Captain's quarters | Scene</a>
          </dt><dd>
            by <a href="https://sketchfab.com/TheMadraver" target="_blank">TheMadraver</a>
          </dd>

          <dt>
            <a href="https://sketchfab.com/3d-models/the-hills-6d7faf10658e44279da7356cbe749d56" target="_blank">Hills</a>
          </dt><dd>
            by <a href="https://sketchfab.com/mhart" target="_blank">mhart</a>
          </dd>

          <dt>
            <a href="https://sketchfab.com/3d-models/lowpoly-glass-bottle-with-cork-1-17f039908e234769adfce88478adca55" target="_blank">Potion bottle</a>
          </dt><dd>
            by <a href="https://sketchfab.com/Judith.Samaniego" target="_blank">Epitaph Crimson</a>
          </dd>

          <dt>
            <a href="https://sketchfab.com/3d-models/fancy-gramophone-d523fdd39afd4a7db6bbb5ba0d2a8064" target="_blank">Fancy gramophone</a>
          </dt><dd>
            by <a href="https://sketchfab.com/jamiemcfarlane" target="_blank">Jamie McFarlane</a>
          </dd>

          <dt>
            <a href="https://sketchfab.com/3d-models/skull-b78e4e6b29b2430293edd9c99d88a64e" target="_blank">Skull</a>
          </dt><dd>
            by <a href="https://sketchfab.com/bumstrum" target="_blank">DJ Maesen</a>
          </dd>

          <dt>
            <a href="https://sketchfab.com/3d-models/lentes-rv-headset-vr-6913032c25cf4877a6d864ed2538a3ef" target="_blank">VR Headset</a>
          </dt><dd>
            by <a href="https://sketchfab.com/wtronmx" target="_blank">WTRONMX</a>
          </dd>

          <dt>
            <a href="https://sketchfab.com/3d-models/pistol-43-tactical-free-lowpoly-ec43fa0124084f739887e322646912bf" target="_blank">Pistol</a>
          </dt><dd>
            by <a href="https://sketchfab.com/dan741vlasov" target="_blank">Vlasov Daniil</a>
          </dd>

          <dt>
            <a href="https://sketchfab.com/3d-models/nes-controller-free-5f85c2e259bd4ab5845d482ff4f1c039" target="_blank">NES Controller</a>
          </dt><dd>
            by <a href="https://sketchfab.com/donnichols" target="_blank">donnichols</a>
          </dd>

          <dt>
            <a href="https://sketchfab.com/3d-models/minecraft-diamond-block-bb035ac458e8472a9bc4341819d4f441" target="_blank">Minecraft diamond block</a>
          </dt><dd>
            by <a href="https://sketchfab.com/Onilak" target="_blank">Onilak24</a>
          </dd>

          <dt>
            <a href="https://sketchfab.com/3d-models/league-of-legends-teemo-zombicide-survivor-cb461d09f9594d1fb87763040d9c5f11" target="_blank">Teemo statue</a>
          </dt><dd>
            by <a href="https://sketchfab.com/toxicsquall" target="_blank">Toxicsquall</a>
          </dd>





        </dl>
      </div>
    </div>
  </div>
</template>

<style scoped>
  h1 { font-size: 1.5rem }
  a {
    color: #eee;
    text-decoration: none;
  }
  .licences {
    margin: 2rem 0;
    font-size: 1rem;
    text-align: left;
  }
  .licences dt {
    padding-top: 0.75rem;
    font-size: 0.9rem;
    font-weight: bold;
  }
  .licences dd {
    margin-left: 0;
    font-size: 0.8rem;
  }

  #onboarding {
    position: absolute;
    top: 0;
    left: 0;
    background-color: #333;
    color: #ccc;
    width: 100vw;
    height: 100vh;
    padding: 1rem;
    font-family: monospace;
    z-index: 10000;
    overflow: auto;
  }
  #onboarding > * {
    margin: 0 auto;
    max-width: 50rem;
    width: calc(100vw - 10rem);
    text-align: center;
    border-radius: 0.3rem;
    padding: 1rem;
    font-size: 1.3rem;
  }
  #onboarding button {
    font-size: 1.3rem;
    padding: 0.5rem 1rem;
    border-radius: 0.3rem;
    background-color: white;
    color: black;
    border: none;
    cursor: pointer;
  }
</style>#onboarding li {
#onboarding li {
  font-size: 1rem;
  text-align: left;
}
