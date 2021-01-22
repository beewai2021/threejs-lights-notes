Last updated: January 22, 2021

# **Three.js Lights Notes**
There are 6 lights in total, and each light has its own light helper.

### Performance hierachy
Light cost
- `AmbientLight`
- `HemisphereLight`

Medium cost
- `DirectionalLight`
- `PointLight`

High cost
- `SpotLight`
- `RectAreaLight`

| Light  | Characteristic  |
| ------------ | ------------ |
|  AmbientLight | Illuminates entire scene equally  |
|  HemipshereLight | Gradient light between sky color and floor color, illuminates entire scene  |
|  DirectionalLight | Sun rays that parallel each other, and have infinite range regardless of position  |
|  PointLight | Infinitely small lantern that illuminates in every direction from its position  |
|  SpotLight | Flashlight, cone shaped from bright to dim  |
|  RectAreaLight | Photoshoot light  |