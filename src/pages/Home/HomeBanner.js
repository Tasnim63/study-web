import React from "react";
// import Particles from "react-tsparticles";
// import { loadFull } from "tsparticles";

function HomeBanner() {
  // const particlesInit = async (main) => {
  //   console.log(main);

  //   // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  //   // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
  //   // starting from v2 you can add only the features you need reducing the bundle size
  //   await loadFull(main);
  // };

  // const particlesLoaded = (container) => {
  //   console.log(container);
  // };
  return (
    <>
      <div style={{backgroundImage:`url(https://thepixelcurve.com/wp/lmsmart/lp/wp-content/uploads/sites/2/2021/11/SPPU2.png)`}}  className=" flex  justify-center items-center my-12">
      {/* <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "#0d47a1",
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 6,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: true,
      }}
    /> */}
        <div className=" flex lg:flex-col justify-center items-start p-30">
          <h4 className=" text-primary font-bold my-3">DEVELOPED BY TO TEACHERS</h4>
          <h1 className=" text-3xl font-serif font-bold text-secondary uppercase">
            Experience a learning<br/>
             platform that take you <br/>next level
          </h1>
          <p className=" text-gray text-lg my-3">
            World-class training and development programs developed by top
            teachers
          </p>
          <button className=" bg-primary p-3 my-6 rounded text-white  font-medium hover:bg-secondary">
            Explore All Cources
          </button>
        </div>
        <div className=" flex ">
          <img className=" h-72  ml-9 mr-12  mt-20"
            src=" https://thepixelcurve.com/wp/lmsmart/lp/wp-content/uploads/sites/2/2022/02/HR0835.jpg"
            alt=""
          />
          <img
            src="https://thepixelcurve.com/wp/lmsmart/lp/wp-content/uploads/sites/2/2022/02/HTR084.jpg"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default HomeBanner;
