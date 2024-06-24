interface IModelViewProps {
  index: number;
  groupRef: React.MutableRefObject<THREE.Group | undefined>;
  gsapType: string;
  controlRef: React.MutableRefObject<OrbitControls | undefined>;
  setRotationState: React.Dispatch<React.SetStateAction<number>>;
  item: IModels;
  size: ModelSize;
}
