import React, { useState, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

//figure out a way to make this go behind the Landing.js

function SpinSphere() {
    const myMesh = React.useRef();

    useFrame(({ clock }) => {
        const a = clock.getElapsedTime()/5;
        myMesh.current.rotation.y = a;
    });

    return (
        <>
        <mesh 
            ref={myMesh}
            castShadow scale={3}
            >
            <sphereBufferGeometry />
            <meshStandardMaterial color="white" />
        </mesh>
        <mesh
            ref={myMesh}
            castShadow scale={4}
            >
             <sphereBufferGeometry />
        </mesh>
        </>
    );
}

function Banner3D(props) {
    return (
        <Canvas id="fade-in5" camera={{position: [-5, 2 ,10], fov: 60 }}>
                <fog attach="fog" args={["blue", 0, 40]} />
                <ambientLight intensity={.5} />
                <directionalLight castShadow position={[2, 8, 5]} intensity={1.5} shadow-mapSize={1024}>
                    <orthographicCamera attach="shadow-camera" args={[-10, 10, -10, 10, 0.1, 50]} />
                </directionalLight>
                <pointLight position={[-10, 0, -20]} color="white" intensity={1} />
                <pointLight position={[0, -10, 0]} intensity={1} />
                <SpinSphere/>
        </Canvas>
    );
}

export default Banner3D;