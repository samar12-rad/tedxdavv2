import { useLayoutEffect, useRef, useEffect } from "react";
// import {SplitText} from "gsap/SplitText";
import { gsap } from "gsap";
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'


function Home(){
  const home = useRef();
  const tl = useRef();

  useEffect(() => {
    // Canvas
    const canvas = document.querySelector('#model')

    // Scene
    const scene = new THREE.Scene()

    // draco loader
    const dracoLoader = new DRACOLoader()
    dracoLoader.setDecoderPath('/draco/')
    // glTF loader
    const gltfLoader = new GLTFLoader()
    gltfLoader.setDRACOLoader(dracoLoader)

    gltfLoader.load(
      'walk_knot/scene.gltf',
      // 'st_happens/scene.gltf',
      // 'model/landing_page_3d.gltf',
      (gltf) => {
        scene.add(gltf.scene)
      },
      (progress) => {
        console.log("progress", progress.loaded/progress.total*100)
      },
      (error) => {
        console.log(error,"error")
      }
    )

    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight
    }
  
    window.addEventListener('resize', () =>
    {
      // Update sizes
      sizes.width = window.innerWidth
      sizes.height = window.innerHeight
  
      // Update camera
      camera.aspect = sizes.width / sizes.height
      camera.updateProjectionMatrix()
  
      // Update renderer
      renderer.setSize(sizes.width, sizes.height)
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    })


    /**
     * Camera
     */
    // Base camera
    const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
    // camera.position.set(0, -0.6, 2.5)
    camera.position.set(0, 10, 25)
    scene.add(camera)
    // scene.background = new THREE.Color( 0xEB0028 );

    // Controls
    const controls = new OrbitControls(camera, canvas)
    controls.target.set(0, 0.75, 0)
    controls.enableDamping = true
    controls.dampingFactor = 0.05;

    controls.screenSpacePanning = false;

    controls.minDistance = 1.5;
    controls.maxDistance = 30;

    controls.maxPolarAngle = Math.PI*0.5  ;
    controls.autoRotate = true;
    controls.touches = {
      ONE: THREE.TOUCH.ROTATE,
      TWO: THREE.TOUCH.DOLLY_PAN
    }
    // controls = new OrbitControls( camera, renderer.domElement ); 
    // controls.touches.ONE = THREE.TOUCH.PAN; 
    // controls.touches.TWO = THREE.TOUCH.DOLLY_ROTATE;

    /**
    * Lights
    // */
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4)
    scene.add(ambientLight)

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6)
    directionalLight.position.set(0, 10, 25)
    scene.add(directionalLight)
    // const dhelper1 = new THREE.DirectionalLightHelper( directionalLight );
    // scene.add( dhelper1 );

    // const directionalLight2 = new THREE.DirectionalLight(0xffffff,3);
    // directionalLight2.position.set(3,0,0)
    // scene.add(directionalLight2)
    // const dhelper2 = new THREE.DirectionalLightHelper(directionalLight2)
    // scene.add(dhelper2)

    // const directionalLight3 = new THREE.DirectionalLight(0xffffff,3);
    // directionalLight3.position.set(-3,0,0)
    // scene.add(directionalLight3)
    // const dhelper3 = new THREE.DirectionalLightHelper(directionalLight3)
    // scene.add(dhelper3)

    // const directionalLight4 = new THREE.DirectionalLight(0xffffff,3);
    // directionalLight4.position.set(0,0,-3)
    // scene.add(directionalLight4)
    // const dhelper4 = new THREE.DirectionalLightHelper(directionalLight4)
    // scene.add(dhelper4)

    /**
     * Renderer
     */
    const renderer = new THREE.WebGLRenderer({
        canvas: canvas
    })
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))


    const tick = () =>
    {
      // Update controls
      controls.update()

      // Render
      renderer.render(scene, camera)

      // Call tick again on the next frame
      window.requestAnimationFrame(tick)
    }

    tick()
  }, [])


  // Animation
  useLayoutEffect(() => {
    tl.current && tl.current.progress(0).kill();
    // var mysplit = new SplitText(".comingsoon", { type: "chars" });
    // console.log(mysplit.chars)
    // mysplit.chars
    const ctx = gsap.context(() => {
      tl.current = gsap.timeline()
        .from(".tedxdavv", { y: 100, duration: 2, ease:"easeInOut"})
        .from(".tedxdavv", { opacity:0, duration: 1, ease:"easeInOut"}, "-=2")
        .from(".lazy", { opacity:0, stagger:0.3, duration: 1, ease:"easeInOut"}, "-=1")
        // .from(mysplit.chars, {opaacity:0, duration:0.8, stagger:0.1, ease:"easeInOut"}, "-=1.5")
    }, home);

    // cleanup
    return () => ctx.revert();
  }, []);

  return(
    <div ref={home} className="home w-screen h-screen flex justify-center items-center flex-col">

      <canvas id="model" className="bg-transparent fixed h-screen w-screen"></canvas>

      <img className="tedxdavv bg-transparent w-6/12 max-md:w-10/12" src="/tedxlogo/logo-white.png" alt="bg" />
      <div className="z-10 w-4/12 bg-transparent mt-[-5%] ml-[22%] max-md:w-6/12 max-md:mt[-8%] max-md:mt[29%]">

        <svg className="z-10 bg-transparent logopath" viewBox="0 0 754 161" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path className="logopathtext1" d="M109.5 17.5C111.666 9.16664 106.2 -0.60005 66.9998 27C50.4998 38.6173 38.9998 47 17.9998 69.5C-4.83352 96 -22.6552 134.672 83.9998 69.5C101.5 58.8064 133.5 44.1667 96 66.5C74 73 56.9998 108.2 117 79C130 66.3272 148.2 44.1852 117 57C77.9998 73.0185 88.9073 101.815 133.5 79C176.5 57 161.5 64.5 155.5 73L139 91.5C154.166 77 186.108 52.4496 199 63.5C206 69.5 180 82.5 184 91.5C189.333 80 206.4 57 232 57C247.5 57 211 84 216 91.5C214.333 98.3333 222.9 101 270.5 57C274.5 53.3025 230 76 257 88C264.167 86.5 274.5 86.307 307 63.5C320 54.3772 304.5 75.5 289 91.5C295.333 80 314.9 57 342.5 57C357 57 313 77 331 88C336.166 90.1667 351.9 91.4 373.5 79C400.5 63.5 398 62 399 59.5C400 57 380.5 50.6026 365 69.5C349.5 88.3973 406.263 75.1522 409.5 63.5C410.669 59.2911 396.31 78.5924 376.959 101M376.959 101C354.93 126.507 326.43 156.04 307 159.5C307.139 148.5 321.326 121.4 376.959 101Z" stroke="white"/>
          <path className="logopathtext2" d="M293 29.5C298.833 25.6667 308.1 21.1 298.5 33.5" stroke="white"/>
          <path className="logopathtext3" d="M583 6.49999C586.167 1.49999 584.5 -4.90001 552.5 9.49999C512.5 27.5 484 50 506.5 56C524.5 60.8 533.333 60 535.5 59C546.833 58.8333 561.9 62.3 531.5 77.5C501.1 92.7 481.833 100.5 476 102.5C502.833 93.6667 562.3 73.2 585.5 62C614.5 48 550.5 72.5 560.5 87.5C570.5 102.5 616 53.5 599.5 51C583 48.5 549 88.6027 583 90C589 90.2466 628.167 71.8333 632.5 62C625.333 71.1667 615.9 88.3 635.5 83.5C660 77.5 656 50 635.5 59C615 68 606 111.5 658.5 73.5C662.5 70 681.5 51 674 51C648.8 101.4 653.167 96.3333 658.5 87.5C662.333 76.1667 676.2 53 701 51C732 48.5 676 83.5 693.5 83.5C707.5 83.5 739.333 76.8333 753.5 73.5" stroke="white"/>
        </svg>

      </div>

      <div className="lazy bg-transparent z-10">
        {/* <span className="bg-transparent z-10 text-white font-serif text-[5vh] font-extrabold max-md:text-[3vh]">
          <span className=" bg-transparent z-10 font-extralight">Theme: </span>
          <span className=" bg-transparent z-10" >EVOLVE</span>
        </span> */}
      </div>

      <div className="lazy bg-transparent z-10">
      <a className="bg-transparent z-10" target={"_blank"} href="https://www.instagram.com/tedxdavv" >
        <i className="bg-transparent z-10 fa-brands fa-instagram text-white text-[5vh]"></i>
      </a>
      <a className="bg-transparent z-10" target={"_blank"} href="mailto:itsraavann@gmail.com"  >
        <i className="bg-transparent z-10 fa-solid fa-envelope text-white text-[5vh] m-8"></i>
      </a>
      </div>
    </div>
  )
}

export default Home;