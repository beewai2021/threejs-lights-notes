// ================================================================================
// Lights
// --------------------------------------------------------------------------------
// All light helpers need to be updated in requestAnimationFrame to accurately reflect the light's location if the light's position or rotation is changed

// AmbientLight
// --------------------------------------------------------------------------------
// AmbientLight has no light helpers
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
scene.add(ambientLight)

// HemisphereLight
// --------------------------------------------------------------------------------
const hemisphereLight = new THREE.HemisphereLight(0xffffff, 0x00ff00) // (sky color, floor color)
const hemisphereLightHelper = new THREE.HemisphereLightHelper(
  hemisphereLight,
  0.5
)
scene.add(hemisphereLight)
scene.add(hemisphereLightHelper)

// DirectionalLight
// --------------------------------------------------------------------------------
const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5)
const directionalLightHelper = new THREE.DirectionalLightHelper(
  directionalLight,
  0.5
)
scene.add(directionalLight)
scene.add(directionalLightHelper)

// PointLight
// --------------------------------------------------------------------------------
const pointLight = new THREE.PointLight(0xffffff, 0.5, 10, 2)
const pointLightHelper = new THREE.PointLightHelper(pointLight, 0.5)
scene.add(pointLight)
scene.add(pointLightHelper)

// SpotLight
// --------------------------------------------------------------------------------
const spotlight = new THREE.SpotLight()
spotlight.color = 0xffffff
spotlight.intensity = 0.5
spotlight.distance = 10 // range of light that goes from bright to dim
spotlight.angle = Math.PI / 4 // wideness of the end of light cone, in radians
spotlight.penumbra = 0.25 // sharpness of the edges of the light cone shape, 1 is sharpest
spotlight.decay = 1 // how fast light dims across the distance, usually set to 1 to let distance decide the light drop off

// changing spotlight direction
scene.add(spotlight.target)
spotlight.target.position.set(0, 1, 0)
scene.add(spotlight)

// spotlight helper
const spotLightHelper = new THREE.SpotLightHelper(spotlight) // no helper size
scene.add(spotLightHelper)
requestAnimationFrame(() => {
  spotLightHelper.update()
})

// RectAreaLight
// --------------------------------------------------------------------------------
const rectAreaLight = new THREE.RectAreaLight(0xffffff, 1, 3, 1)
// RectAreaLight doesn't look at (0,0,0) by default, needs to be manually set
rectAreaLight.lookAt(new THREE.Vector3()) // empty vector 3 is (0,0,0)
scene.add(rectAreaLight)

// RectAreaLightHelper requires custom import from the three.js library
import { RectAreaLightHelper } from "three/examples/jsm/helpers/RectAreaLightHelper"
const rectAreaLightHelper = new RectAreaLightHelper(rectAreaLight)
scene.add(rectAreaLightHelper)
requestAnimationFrame(() => {
  rectAreaLightHelper.position.copy(rectAreaLight.position) // helper copies the position of its own light
  rectAreaLightHelper.quaternion.copy(rectAreaLight.quaternion) // helper copies the rotation of its own light
  rectAreaLightHelper.update()
})

// ================================================================================
