import * as THREE from 'three';
import React, { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stage, Float, Line, Sphere, Trail, Sparkles } from '@react-three/drei';
// import { EffectComposer, Bloom } from '@react-three/postprocessing'

//figure out a way to make this go behind the Landing.js

// function SpinSphere() {
    // const myMesh = React.useRef();

    // useFrame(({ clock }) => {
    //     const a = clock.getElapsedTime()/50;
    //     myMesh.current.rotation.y = a;
    // });

function Banner3D(props) {

    const points = useMemo(() => new THREE.EllipseCurve(-1.25, 0, 4, 2, 1.25, 2 * Math.PI, false, 0).getPoints(100), [])

    return (
        <Canvas shadows id="fade-in2" camera={{position: [0, 0, 10], fov: 60 }}>
                <fog attach="fog" args={["white", 0, 40]} />
                <ambientLight intensity={.5} />
                <directionalLight castShadow position={[2, 8, 5]} intensity={1.5} shadow-mapSize={1024}>
                    <orthographicCamera attach="shadow-camera" args={[-10, 10, -10, 10, 0.1, 50]} />
                </directionalLight>
                <pointLight position={[-10, 0, -20]} color="white" intensity={1} />
                <pointLight position={[0, 10, 0]} intensity={1} />
                  <Float speed={1} intensity={1.5} rotationIntensity={2}>
                    <Line worldUnits points={points} color="white" lineWidth={0.3} rotation={[-1, -1, 0]} />
                 <Sphere
                    castShadow scale={1}
                    >
                    <sphereGeometry />
                    <meshStandardMaterial color="white" toneMapped="false" />
                 </Sphere>
                 </Float>      
                    {/* <EffectComposer>
                    <Bloom mipmapBlur luminanceThreshold={1} radius={0.7} />
                </EffectComposer> */}
        </Canvas>
    );
}

export default Banner3D;