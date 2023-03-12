import { Loader, Sky } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { EffectComposer, HueSaturation, Noise, Pixelation, Vignette } from '@react-three/postprocessing';

import Controller from '../components/Controller';
import Model from '../components/Model';

export default function NotFound() {
  const objects = [
    {
      name: 'OrangeBox',
      isSolid: true,
      position: [-10, -0.5, 0],
      scale: [0.5, 0.5, 10],
      size: [0.5, 0.5, 10],
    },
    {
      name: 'OrangeBox',
      isSolid: true,
      position: [10, -0.5, 0],
      scale: [0.5, 0.5, 10],
      size: [0.5, 0.5, 10],
    },
    {
      name: 'OrangeBox',
      isSolid: true,
      position: [0, 0, -10],
      scale: [10, 10, 1],
      size: [10, 10, 1],
    },
    {
      name: 'OrangeBox',
      isSolid: true,
      position: [-5, 0, 7.5],
      scale: [2, 2, 0.1],
      size: [2, 2, 0.1],
    },
    {
      name: 'OrangeBox',
      isSolid: true,
      position: [5, 0, 7.5],
      scale: [1, 1, 0.1],
      size: [1, 1, 0.1],
    },
    {
      name: 'OrangeBox',
      isSolid: true,
      position: [0, 0, 7.5],
      scale: [1, 1, 0.1],
      size: [1, 1, 0.1],
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
          <Noise opacity={0.05} />
          <HueSaturation saturation={0.125} />
          <Vignette offset={0.5} darkness={0.5} />
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
