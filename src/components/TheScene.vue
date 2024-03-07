<script setup>
  import { ref } from 'vue';

  import TheCameraRig from './TheCameraRig.vue';
  import '../aframe/life-like-automaton.js';
  import '../aframe/physx-force-pushable.js';
  import '../aframe/clickable.js';
import '../aframe/emit-when-near.js'; 

import '../aframe/simple-grab.js';

  defineProps({
    scale: Number,
  });

const allAssetsLoaded = ref(false);

function detectObject(evt) {

  const objectFound = evt.detail.otherComponent.el.id;
  const skullText = document.getElementById('text-skull');
  const bottleText = document.getElementById('text-bottle');
  const headsetText = document.getElementById('text-headset');
  const pistolText = document.getElementById('text-pistol');
  const controllerText = document.getElementById('text-controller');
  const diamondText = document.getElementById('text-diamond');
  const statueText = document.getElementById('text-statue');

  if (objectFound === 'skull') {
    skullText.setAttribute('value', 'Crane [X]');
  } else if (objectFound === 'bottle') {
    bottleText.setAttribute('value', 'Potion [X]');
  } else if (objectFound === 'VRHeadset') {
    headsetText.setAttribute('value', 'Lunettes VR [X]');
  } else if (objectFound === 'pistol') {
    pistolText.setAttribute('value', 'Pistolet [X]');
  } else if (objectFound === 'controller') {
    controllerText.setAttribute('value', 'Manette [X]');
  } else if (objectFound === 'diamond') {
    diamondText.setAttribute('value', 'Diamant [X]');
  } else if (objectFound === 'statue') {
    statueText.setAttribute('value', 'Statue [X]');
  }
} 

function detectObjectLeaving(evt) {

  const objectLeaving = evt.detail.otherComponent.el.id;
  const skullText = document.getElementById('text-skull');
  const bottleText = document.getElementById('text-bottle');
  const headsetText = document.getElementById('text-headset');
  const pistolText = document.getElementById('text-pistol');
  const controllerText = document.getElementById('text-controller');
  const diamondText = document.getElementById('text-diamond');

  if (objectLeaving === 'skull') {
    skullText.setAttribute('value', 'Crane [  ]');
  } else if (objectLeaving === 'bottle') {
    bottleText.setAttribute('value', 'Potion [  ]');
  } else if (objectLeaving === 'VRHeadset') {
    headsetText.setAttribute('value', 'Lunettes VR [  ]');
  } else if (objectLeaving === 'pistol') {
    pistolText.setAttribute('value', 'Pistolet [  ]');
  } else if (objectLeaving === 'controller') {
    controllerText.setAttribute('value', 'Manette [  ]');
  } else if (objectLeaving === 'diamond') {
    diamondText.setAttribute('value', 'Diamant [  ]');
  } else if (objectLeaving === 'statue') {
    statueText.setAttribute('value', 'Statue [  ]');
  }
}

</script>

<template>
  <a-scene
    Xstats
    fog="type: exponential; color: #FFF; near:100; far: 300; density:0.05"
    background="color: black;"
    :webxr="`
      requiredFeatures: local-floor;
      referenceSpaceType: local-floor;
    `"
    xr-mode-ui="XRMode: xr"
    physx="
      autoLoad: true;
      delay: 1000;
      useDefaultScene: false;
      wasmUrl: lib/physx.release.wasm;
    "
    simple-grab
  >

    <a-assets @loaded="allAssetsLoaded = true">
      <!--
        Title: VR Gallery
        Model source: https://sketchfab.com/3d-models/vr-gallery-1ac32ed62fdf424498acc146fad31f7e
        Model author: https://sketchfab.com/mvrc.art (Maxim Mavrichev)
        Model license: CC BY 4.0 ( https://creativecommons.org/licenses/by/4.0/ )
      -->
      <!--
        Title: 3D Gallery for VR projects
        Model source: https://sketchfab.com/3d-models/3d-gallery-for-vr-projects-68f77ed8558c4bd59e0a13e2cc9d1fd1
        Model author: https://sketchfab.com/tekuto1s (tekuto1s)
        Model license: CC BY 4.0 ( https://creativecommons.org/licenses/by/4.0/ )
      -->
      <a-asset-item id="piano" response-type="arraybuffer" src="assets/piano.mp3" preload="auto"></a-asset-item>
      <a-asset-item id="scene" src="assets/captains_quarters.glb"></a-asset-item>
      <a-asset-item id="bottle" src="assets/bottle.glb"></a-asset-item>
      <a-asset-item id="gramophone" src="assets/fancy_gramophone.glb"></a-asset-item>
      <a-asset-item id="skull" src="assets/skull.glb"></a-asset-item>
      <a-asset-item id="hills" src="assets/the_hills.glb"></a-asset-item>
      <a-asset-item id="lens" src="assets/vr_lens.glb"></a-asset-item>
      <a-asset-item id="pistol" src="assets/pistol.glb"></a-asset-item>
      <a-asset-item id="controller" src="assets/controller.glb"></a-asset-item>
      <a-asset-item id="diamond" src="assets/diamond.glb"></a-asset-item>
      <a-asset-item id="statue" src="assets/statue.glb"></a-asset-item>
    </a-assets>

    <template v-if="allAssetsLoaded">

      // Sky
      <a-sky 
        color="lightblue"
      ></a-sky>

      // Scene https://sketchfab.com/3d-models/captains-quarters-a5c54257755e47ccb47b5d8bc7482d7e
      <a-entity 
        position="0 0 0" 
        scale="1.1 1.1 1.1" 
        gltf-model="#scene"
      ></a-entity>

      // Hills https://sketchfab.com/3d-models/the-hills-6d7faf10658e44279da7356cbe749d56
      <a-entity 
        position="-3.199 -0.612 -12.445" 
        scale="30 30 30" 
        rotation="0 180 0" 
        gltf-model="#hills"
      ></a-entity>

      // Bottle https://sketchfab.com/3d-models/lowpoly-glass-bottle-with-cork-1-17f039908e234769adfce88478adca55
      <a-entity 
        clickable
        physx-body="type: dynamic; emitCollisionEvents: true"
        physx-grabbable
        physx-force-pushable
        simple-grab
        position="1.517 0.94 -3.661"
        scale="0.02 0.02 0.02"
        gltf-model="#bottle"
        id="bottle"
      ></a-entity>

      // Gramophone https://sketchfab.com/3d-models/fancy-gramophone-d523fdd39afd4a7db6bbb5ba0d2a8064
      <a-entity 
        position="-1.528 1.308 1.469" 
        scale="0.4 0.4 0.4" 
        rotation="0 45 0"
        gltf-model="#gramophone" 
        sound="src: #piano; autoplay: true"
      ></a-entity>

      // Skull https://sketchfab.com/3d-models/skull-b78e4e6b29b2430293edd9c99d88a64e
      <a-entity 
        clickable
        physx-body="type: dynamic; emitCollisionEvents: true"
        physx-grabbable
        physx-force-pushable
        position="0.327 1.491 1.729"
        scale="0.7 0.7 0.7" 
        rotation="-10 180 0" 
        gltf-model="#skull"
        id="skull"
      ></a-entity>

      // VR Headset https://sketchfab.com/3d-models/lentes-rv-headset-vr-6913032c25cf4877a6d864ed2538a3ef
      <a-entity 
        clickable
        physx-body="type: dynamic; emitCollisionEvents: true"
        physx-grabbable
        physx-force-pushable
        position="0.044 -0.038 1.199"
        scale="0.05 0.05 0.05" 
        rotation="0 40 0" 
        gltf-model="#lens"
        id="VRHeadset"
      ></a-entity>

      // pistol https://sketchfab.com/3d-models/pistol-43-tactical-free-lowpoly-ec43fa0124084f739887e322646912bf
      <a-entity 
        clickable
        physx-body="type: dynamic; emitCollisionEvents: true"
        physx-grabbable
        physx-force-pushable
        position="-1.057 0.040 1.234"
        scale="0.045 0.045 0.045" 
        rotation="0 219 90" 
        gltf-model="#pistol"
        id="pistol"
      ></a-entity>

      // controller https://sketchfab.com/3d-models/nes-controller-free-5f85c2e259bd4ab5845d482ff4f1c039
      <a-entity 
        clickable
        physx-body="type: dynamic; emitCollisionEvents: true"
        physx-grabbable
        physx-force-pushable
        position="2.013 1.583 1.012"
        scale="0.012 0.012 0.012" 
        rotation="0 200 0" 
        gltf-model="#controller"
        id="controller"
      ></a-entity>

      // diamond https://sketchfab.com/3d-models/minecraft-diamond-block-bb035ac458e8472a9bc4341819d4f441
      <a-entity 
        clickable
        physx-body="type: dynamic; emitCollisionEvents: true"
        physx-grabbable
        physx-force-pushable
        position="-1.091 1 1.289"
        scale="0.0004 0.0004 0.0004" 
        rotation="0 80 0" 
        gltf-model="#diamond"
        id="diamond"
      ></a-entity>

      // statue https://sketchfab.com/3d-models/league-of-legends-teemo-zombicide-survivor-cb461d09f9594d1fb87763040d9c5f11
      <a-entity 
        clickable
        physx-body="type: dynamic; emitCollisionEvents: true"
        physx-grabbable
        physx-force-pushable
        position="0.770 1.354 -4.129" 
        scale="0.004 0.004 0.004" 
        rotation="0 -17.670 0" 
        gltf-model="#statue"
        id="statue"
      ></a-entity>

      // Table with text 
      <a-plane
      color="#E5E1D5"
      position="-1.422 0.978 -1.390"
      rotation="-90 90 0"
      height="0.5"
      width="0.4"
      >
      <a-text
        value="Trouvez les sept objets suivants"
        align="center"
        position="0 0.22 0"
        color="black"
        scale="0.1 0.1 0.1"></a-text>
      <a-text
        id="text-bottle"
        value="Potion [  ]"
        align="left"
        position="-0.1 0.15 0"
        color="black"
        scale="0.1 0.1 0.1"></a-text>
      <a-text
        id="text-skull"
        value="Crane [  ]"
        align="left"
        position="-0.1 0.1 0"
        color="black"
        scale="0.1 0.1 0.1"></a-text>
      <a-text
        id="text-headset"
        value="Lunettes VR [  ]"
        align="left"
        position="-0.1 0.05 0"
        color="black"
        scale="0.1 0.1 0.1"></a-text>
      <a-text
        id="text-pistol"
        value="Pistolet [  ]"
        align="left"
        position="-0.1 0 0"
        color="black"
        scale="0.1 0.1 0.1"></a-text>
      <a-text
        id="text-controller"
        value="Manette [  ]"
        align="left"
        position="-0.1 -0.05 0"
        color="black"
        scale="0.1 0.1 0.1"></a-text>
      <a-text
        id="text-diamond"
        value="Diamant [  ]"
        align="left"
        position="-0.1 -0.1 0"
        color="black"
        scale="0.1 0.1 0.1"></a-text>
     <a-text
        id="text-statue"
        value="Statue [  ]"
        align="left"
        position="-0.1 -0.15 0"
        color="black"
        scale="0.1 0.1 0.1"></a-text>
      </a-plane>

      // HITBOXES

      // Scene hitbox
      <a-entity position="0 0 0" visible="false">
        <a-entity
          position="0.062 -0.500 -0.848"
          geometry="primitive: box; height: 9.1; width: 9.1"
          rotation="-90 0 0"
          material="color: purple"
          physx-body="type: static"
        ></a-entity>
        <a-entity
          geometry="primitive: box; height: 6.4; width: 9.1"
          position="-0.033 -0.058 -5.642"
          material="color: purple"
          physx-body="type: static"
        ></a-entity>
        <a-entity
          geometry="primitive: box; height: 6.4; width: 9.1"
          position="0 1.016 2.342"
          rotation="0 180 00"
          material="color: purple"
          physx-body="type: static"
        ></a-entity>
        <a-entity
          geometry="primitive: box; height: 6.4; width: 9.1"
          position="4.277 1.567 -1.119"
          rotation="0 -90 0"
          material="color: purple"
          physx-body="type: static"
        ></a-entity>
        <a-entity
          geometry="primitive: box; height: 6.4; width: 9.1"
          position="-3.243 0 -1.030"
          rotation="0 90 0"
          material="color: purple"
          physx-body="type: static"
        ></a-entity>
        <a-entity
          geometry="primitive: box; height: 0.5; width: 7; depth: 1.15"
          position="3.218 0.267 -1.201"
          rotation="0 90 0"
          material="color: purple"
          physx-body="type: static"
        ></a-entity>
        <a-entity
          geometry="primitive: box; height: 4; width: 2; depth: 2"
          position="2.286 1.430 -4.961"
          rotation="0 90 -7.390"
          material="color: purple"
          physx-body="type: static"
        ></a-entity>
        <a-entity
          geometry="primitive: box; height: 4; width: 1; depth: 1"
          position="-2.502 1.430 -4.560"
          rotation="0 90 -7.390"
          material="color: purple"
          physx-body="type: static"
        ></a-entity>

        // Table hitbox
        <a-entity 
        geometry="primitive: box; height: 2.2; width: 1.05; depth: 0.2"
        position="-1.62 0.889 -1.355"
        rotation="-90 0 0"
        material="color: purple"
        physx-body="type: static; emitCollisionEvents: true"
        @contactbegin="evt => detectObject(evt)"
        @contactend="evt => detectObjectLeaving(evt)"
        ></a-entity>
        <a-entity 
        geometry="primitive: box; height: 0.15; width: 0.15; depth: 1"
        position="-1.142 0.489 -0.308"
        rotation="-90 0 0"
        material="color: purple"
        physx-body="type: static"
        ></a-entity>
        <a-entity 
        geometry="primitive: box; height: 0.15; width: 0.15; depth: 1"
        position="-1.160 0.489 -2.370"
        rotation="-90 0 0"
        material="color: purple"
        physx-body="type: static"
        ></a-entity>
        <a-entity 
        geometry="primitive: box; height: 0.15; width: 0.15; depth: 1"
        position="-2.090 0.489 -0.329"
        rotation="-90 0 0"
        material="color: purple"
        physx-body="type: static"
        ></a-entity>
        <a-entity 
        geometry="primitive: box; height: 0.15; width: 0.15; depth: 1"
        position="-2.082 0.489 -2.388"
        rotation="-90 0 0"
        material="color: purple"
        physx-body="type: static"
        ></a-entity>

        // Barrels hitboxes
        <a-entity 
        geometry="primitive: cylinder; height: 1; radius: 0.34"
        position="1.541 0.428 -3.495"
        material="color: purple"
        physx-body="type: static"
        ></a-entity>

        <a-entity 
        geometry="primitive: cylinder; height: 1; radius: 0.34"
        position="2.224 0.428 -3.928"
        material="color: purple"
        physx-body="type: static"
        ></a-entity>

        <a-entity 
        geometry="primitive: cylinder; height: 1; radius: 0.34"
        position="1.298 0.454 0.989"
        material="color: purple"
        physx-body="type: static"
        ></a-entity>

        // Bed hitbox
        <a-entity 
        geometry="primitive: box; height: 0.8; width: 0.1; depth: 1.7"
        position="0.149 0.211 -4.595"
        material="color: purple"
        physx-body="type: static"
        ></a-entity>
        <a-entity 
        geometry="primitive: box; height: 1.3; width: 0.1; depth: 1.7"
        position="-1.986 0.46 -4.612"
        material="color: purple"
        physx-body="type: static"
        ></a-entity>
        <a-entity 
        geometry="primitive: box; height: 0.5; width: 2.2; depth: 1.7"
        position="-0.913 0.406 -4.592"
        material="color: purple"
        physx-body="type: static"
        ></a-entity>

        // Boxes hitbox
        <a-entity 
        geometry="primitive: box; height: 1; width: 0.75; depth: 0.75"
        position="2.218 0.307 1.316"
        rotation="0 20 0"
        material="color: purple"
        physx-body="type: static"
        ></a-entity>
        <a-entity 
        geometry="primitive: box; height: 1; width: 0.75; depth: 0.75"
        position="2.207 1.077 1.378"
        rotation="0 -13.980 0"
        material="color: purple"
        physx-body="type: static"
        ></a-entity>
        <a-entity 
        geometry="primitive: box; height: 1; width: 0.75; depth: 0.75"
        position="3.353 0.779 -3.446"
        rotation="0 33.850 0"
        material="color: purple"
        physx-body="type: static"
        ></a-entity>
        <a-entity 
        geometry="primitive: box; height: 2.5; width: 0.75; depth: 0.75"
        position="3.435 1.172 1.365"
        rotation="0 50 0"
        material="color: purple"
        physx-body="type: static"
        ></a-entity>

        // Desk Hitbox
        <a-entity 
        geometry="primitive: box; height: 1; width: 0.48; depth: 1"
        position="-0.451 0.349 1.649"
        material="color: purple"
        physx-body="type: static"
        ></a-entity>
        <a-entity 
        geometry="primitive: box; height: 1; width: 0.48; depth: 1"
        position="-1.665 0.349 1.641"
        material="color: purple"
        physx-body="type: static"
        ></a-entity>
        <a-entity 
        geometry="primitive: box; height: 0.3; width: 1.7; depth: 1"
        position="-1.063 0.773 1.641"
        material="color: purple"
        physx-body="type: static"
        ></a-entity>

        // Shelf
        <a-entity 
        geometry="primitive: box; height: 0.4; width: 1.1; depth: 1"
        position="0.371 0.219 1.957"
        material="color: purple"
        physx-body="type: static"
        ></a-entity>
        <a-entity 
        geometry="primitive: box; height: 0.17; width: 1.1; depth: 1"
        position="0.371 2.171 1.957"
        material="color: purple"
        physx-body="type: static"
        ></a-entity>
        <a-entity 
        geometry="primitive: box; height: 0.15; width: 2; depth: 1"
        position="0.873 1.234 1.967"
        rotation="0 0 90"
        material="color: purple"
        physx-body="type: static"
        ></a-entity>
        <a-entity 
        geometry="primitive: box; height: 0.15; width: 2; depth: 1"
        position="-0.119 1.234 1.967"
        rotation="0 0 90"
        material="color: purple"
        physx-body="type: static"
        ></a-entity>
        <a-entity 
        geometry="primitive: box; height: 0.05; width: 1.1; depth: 1"
        position="0.381 0.732 1.985"
        material="color: purple"
        physx-body="type: static"
        ></a-entity>
        <a-entity 
        geometry="primitive: box; height: 0.35; width: 1.1; depth: 1"
        position="0.391 1.277 1.995"
        material="color: purple"
        physx-body="type: static"
        ></a-entity>
        <a-entity 
        geometry="primitive: box; height: 0.05; width: 1.1; depth: 1"
        position="0.381 1.782 1.985"
        material="color: purple"
        physx-body="type: static"
        ></a-entity>

        // Drawers
        <a-entity 
        geometry="primitive: box; height: 1.790; width: 0.75; depth: 1.160"
        position="1.081 0.447 -4.654"
        material="color: purple"
        physx-body="type: static"
        ></a-entity>

        // Bags
        <a-entity 
        geometry="primitive: box; height: 0.230; width: 1.050; depth: 0.520"
        position="2.137 0.118 -2.804"
        rotation="0 -20.850 0"
        material="color: purple"
        physx-body="type: static"
        ></a-entity>
        <a-entity 
        geometry="primitive: box; height: 0.260; width: 1.060; depth: 0.650"
        position="2.230 0.513 -3.347"
        rotation="0 -92.980 -70.780"
        material="color: purple"
        physx-body="type: static"
        ></a-entity>
        <a-entity 
        geometry="primitive: box; height: 0.360; width: 1.060; depth: 0.650"
        position="2.914 0.984 0.832"
        rotation="0 0 -61.700"
        material="color: purple"
        physx-body="type: static"
        ></a-entity>

      </a-entity>
    </template>

    <TheCameraRig />

  </a-scene>
</template>