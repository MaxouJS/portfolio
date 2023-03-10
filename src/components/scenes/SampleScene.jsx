import { Loader, Sky } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Bloom, DepthOfField, EffectComposer, HueSaturation, Noise, Pixelation } from '@react-three/postprocessing';

import Controller from '../Controller';
import Model from '../Model';

export default function SampleScene() {
  const objects = [
    {
      name: 'OrangeBox',
      isSolid: true,
      position: [-3, 0, -4],
      scale: [4, 2, 2],
      size: [4, 2, 2],
    },
    {
      name: 'OrangeBox',
      isSolid: true,
      position: [3, 0, -4],
      scale: [4, 2, 2],
      size: [4, 2, 2],
    },
    {
      name: 'GreenBox',
      isSolid: false,
      position: [0, 0, -4],
      scale: [2, 2, 0.5],
      size: [2, 2, 0.5],
    },
    {
      name: 'OrangeBox',
      isSolid: true,
      position: [-5.25, -0.5, 0],
      scale: [0.5, 0.5, 10],
      size: [0.5, 0.5, 10],
    },
    {
      name: 'OrangeBox',
      isSolid: true,
      position: [5.25, -0.5, 0],
      scale: [0.5, 0.5, 10],
      size: [0.5, 0.5, 10],
    },
  ];

  return (
    <>
      <Canvas>
        <ambientLight />
        <directionalLight position={[5, 20, 10]} />
        <EffectComposer>
          <Pixelation
            granularity={4} // pixel granularity
          />
          <DepthOfField focusDistance={0} focalLength={0.1} bokehScale={10} height={128} />
          <Bloom luminanceThreshold={1} luminanceSmoothing={1} height={128} />
          <Noise opacity={0.05} />
          <HueSaturation saturation={0.125} />
        </EffectComposer>
        <Controller
          objects={objects}
        >
          <Model
            name='Tile'
            scale={[1000, 1, 1000]}
          />
          {
            objects.map((o, index) => (
              <Model
                key={index}
                name={o.name}
                position={o.position}
                scale={o.scale}
              />
            ))
          }
          <Sky sunPosition={[0, 90, 0]} />
        </Controller>
      </Canvas>
      <Loader />
    </>
  );
};
