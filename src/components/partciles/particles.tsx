import Particles from "react-tsparticles";
import particlesConfig from "./particles-config";
import { useCallback } from "react";
import { loadFull } from "tsparticles";

const ParticleBackground = () => {
  const particlesInit = useCallback(async (engine: any) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: any) => {}, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={particlesConfig}
      loaded={particlesLoaded}
    ></Particles>
  );
};

export default ParticleBackground;
