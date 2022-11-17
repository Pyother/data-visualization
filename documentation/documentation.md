<h1>Work Progress</h1>
<h2>12.11.2022 -> set first scene components</h2>

![obraz](https://user-images.githubusercontent.com/77791657/201495097-ef22b6e6-b6e9-417d-bfa4-3f5d3b5323d9.png)
<div align="center"><em>First visualization of created scene</em></div>
<br>
The first step in implementing spatial data was to create a JavaScript project. Until then, I'm using a React template and its renderer, react-three-fiber. I created a scene with an incubator, a plane and cubes symbolizing data.

<h2>17.11.2022 -> add prototypical objects </h2>
![obraz](https://user-images.githubusercontent.com/77791657/202497603-c7a10854-577d-44eb-9d2b-31c5b3e548a1.png)
<div align="center"><em>Scene with snowflake objects</em></div>
<br>
To testify abilities of rendering similar shapes I've created function which returns array of shapes. Position of the points is assinged randomly with a float value from appropriate period. Recalling this function inside <Canvas></Canvas> creates basic snowflake.



