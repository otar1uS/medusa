"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js"
// Optional: If you want to add controls for debugging during development
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

interface MedusaSceneProps {
  modelPath: string
}

const MedusaScene: React.FC<MedusaSceneProps> = ({ modelPath }) => {
  const mountRef = useRef<HTMLDivElement>(null)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
  const modelRef = useRef<THREE.Group | null>(null) // Ref to store the model for animation
  const initialYPositionRef = useRef<number>(0) // Store initial Y for bobbing

  useEffect(() => {
    if (!mountRef.current) return

    const currentMount = mountRef.current

    // Scene
    const scene = new THREE.Scene()
    // scene.background = new THREE.Color(0x111111); // Optional: Set a dark background for the scene itself if needed

    // Camera
    const camera = new THREE.PerspectiveCamera(
      75, // FOV (Field of View)
      currentMount.clientWidth / currentMount.clientHeight, // Aspect ratio
      0.1, // Near clipping plane
      1000 // Far clipping plane
    )
    // --- Camera Position Adjustment ---
    // Move camera closer to make the model fill more of the screen.
    // This is highly dependent on your model's original scale.
    // Experiment with values like 1.5, 2, 2.5, 3.
    camera.position.z = 2.5 // STARTING POINT - ADJUST THIS VALUE

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true, // For transparent background to see HTML behind
      antialias: true,
    })
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight)
    renderer.setPixelRatio(window.devicePixelRatio)
    // renderer.outputColorSpace = THREE.SRGBColorSpace; // For correct color display with GLTF
    currentMount.appendChild(renderer.domElement)
    rendererRef.current = renderer

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2) // Soft white light, slightly increased
    scene.add(ambientLight)

    const directionalLight = new THREE.DirectionalLight(0xffeedd, 1.8) // Warmer light, increased
    directionalLight.position.set(3, 2, 4) // Adjust position for desired highlights
    scene.add(directionalLight)

    const pointLight = new THREE.PointLight(0xaaccff, 0.8, 100) // Cool fill light
    pointLight.position.set(-3, 1, 3)
    scene.add(pointLight)

    // GLTF Loader
    const loader = new GLTFLoader()

    loader.load(
      modelPath,
      (gltf) => {
        modelRef.current = gltf.scene
        const model = modelRef.current

        // --- Model Scale and Position Adjustments ---
        // You'll likely need to adjust these values based on your specific model
        // Scale it to fit better if camera adjustment alone isn't enough
        model.scale.set(1.2, 1.2, 1.2) // STARTING POINT - ADJUST THIS VALUE

        // Position it (Y might need to be negative to lower it, X to center/offset)
        // If the model pivot is at its base, you might need to move it down significantly
        initialYPositionRef.current = -0.4 // Store initial Y for bobbing, STARTING POINT - ADJUST
        model.position.set(0, initialYPositionRef.current, 0)

        // Rotate it if needed (in radians)
        // model.rotation.y = Math.PI / 8; // Example: Rotate slightly

        scene.add(model)
      },
      undefined, // onProgress callback (optional)
      (error) => {
        console.error("An error happened loading the GLB model:", error)
      }
    )

    // Optional: OrbitControls for debugging
    // const controls = new OrbitControls(camera, renderer.domElement);
    // controls.enableDamping = true;
    // controls.target.set(0, initialYPositionRef.current, 0); // Target the model's approximate center

    // Animation loop
    const clock = new THREE.Clock()
    const animate = () => {
      requestAnimationFrame(animate)
      const elapsedTime = clock.getElapsedTime()

      if (modelRef.current) {
        // Subtle rotation
        modelRef.current.rotation.y = Math.sin(elapsedTime * 0.1) * 0.1;
        // Subtle bobbing
        // modelRef.current.position.y = initialYPositionRef.current + Math.cos(elapsedTime * 0.3) * 0.05;
      }

      // if (controls) controls.update();
      renderer.render(scene, camera)
    }
    animate()

    // Handle resize
    const handleResize = () => {
      if (currentMount) {
        camera.aspect = currentMount.clientWidth / currentMount.clientHeight
        camera.updateProjectionMatrix()
        renderer.setSize(currentMount.clientWidth, currentMount.clientHeight)
      }
    }
    window.addEventListener("resize", handleResize)

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("resize", handleResize)
      if (currentMount && rendererRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        currentMount.removeChild(rendererRef.current.domElement)
      }
      renderer.dispose()
      scene.traverse(object => {
        if (object instanceof THREE.Mesh) {
          object.geometry.dispose();
          if (Array.isArray(object.material)) {
            object.material.forEach(material => material.dispose());
          } else if (object.material) { // Check if material exists
            object.material.dispose();
          }
        }
      });
      // if (controls) controls.dispose();
      modelRef.current = null; // Clear model ref
    }
  }, [modelPath])

  return <div ref={mountRef} className="absolute inset-0 z-0 w-full h-full" />
}

export default MedusaScene