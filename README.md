## About The Project

This is my project, called "Night Portal".

You can explore the platform by using the arrow keys or WASD

## Setup

Download [Node.js](https://nodejs.org/en/download/).
Run this followed commands:

```shell
# Install dependencies (only the first time)
npm install

# Run the local server at localhost:8080
npm run dev
```

## Gallery

![Alt Text](/public/README/video.gif)

![Alt Text](/public/README/wallpaper_1.PNG)
![Alt Text](/public/README/wallpaper_2.PNG)
![Alt Text](/public/README/wallpaper_3.PNG)

## Debug

```javascript

    //Change the debug parameter in line 37 from Experience.jsx from false to true
    <Physics gravity={[0, -9.81, 0]} debug={false}>

    //Uncomment the following lines in Experience.jsx

    //Line 25 & 26
   useHelper(directionalLightRed, DirectionalLightHelper, 1, "red")
   useHelper(directionalLightBlue, DirectionalLightHelper, 1, "blue")

   //Line 30
   <Perf position="top-left"/>

    //Line 32
    <OrbitControls/>

    // Line 46
   <axesHelper scale={5} position={[0,2,0]}/>

    //Comment the lines 30-45 in Character.jsx to switch to orbitcontrols
    const bodyPosition = rigidbody.current.translation()

    const cameraPosition = new THREE.Vector3()
    cameraPosition.copy(bodyPosition)
    cameraPosition.z += 5
    cameraPosition.y += 2

    const cameraTarget = new THREE.Vector3()
    cameraTarget.copy(bodyPosition)
    cameraTarget.y += 1

    smoothedCameraPosition.lerp(cameraPosition, 5 * delta)
    smoothedCameraTarget.lerp(cameraTarget, 5 * delta)

    state.camera.position.copy(smoothedCameraPosition)
    state.camera.lookAt(smoothedCameraTarget)



```

![Alt Text](/public/README/wallpaper_4.PNG)

---

`Used Technologies:`

<img align="left" src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white"/>
<img align="left" src="https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white"/>
<img align="left" src="https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white"/>
<img align="left" src="https://img.shields.io/badge/threejs-black?style=for-the-badge&logo=three.js&logoColor=white"/>
<img align="left" src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"/>
<img align="left" src="https://img.shields.io/badge/html-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white"/>
<img align="left" src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white"/>
<img align="left" src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=whitee"/>
<img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/>
