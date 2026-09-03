import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface ThreeGallerySculptureProps {
  className?: string;
}

export default function ThreeGallerySculpture({ className = '' }: ThreeGallerySculptureProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [webglSupported, setWebglSupported] = useState(true);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check WebGL availability
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) {
        setWebglSupported(false);
        return;
      }
    } catch {
      setWebglSupported(false);
      return;
    }

    const width = container.clientWidth || 300;
    const height = container.clientHeight || 300;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 4.8;

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.8));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    container.appendChild(renderer.domElement);

    // Sculpture Group
    const group = new THREE.Group();
    scene.add(group);

    // Contemporary Sculpture Geometry: Refined Abstract Torus Knot with Warm Bronze/Obsidian PBR
    const geometry = new THREE.TorusKnotGeometry(1.05, 0.32, 128, 32, 2, 3);
    const material = new THREE.MeshStandardMaterial({
      color: 0x22201d,
      roughness: 0.28,
      metalness: 0.88,
      wireframe: false,
    });
    const sculptureMesh = new THREE.Mesh(geometry, material);
    group.add(sculptureMesh);

    // Inner fine wireframe cage to evoke Rwandan geometric craft
    const wireGeo = new THREE.IcosahedronGeometry(1.6, 2);
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0xc8a97e,
      wireframe: true,
      transparent: true,
      opacity: 0.18,
    });
    const wireMesh = new THREE.Mesh(wireGeo, wireMat);
    group.add(wireMesh);

    // Gallery Lighting
    const keyLight = new THREE.DirectionalLight(0xf4efe6, 2.2);
    keyLight.position.set(3, 4, 3);
    scene.add(keyLight);

    const warmFillLight = new THREE.PointLight(0xc8a97e, 3, 10);
    warmFillLight.position.set(-3, -2, 2);
    scene.add(warmFillLight);

    const ambientLight = new THREE.AmbientLight(0x222228, 0.8);
    scene.add(ambientLight);

    // Mouse interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      targetX = x * 1.2;
      targetY = y * 1.2;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Animation Loop
    let animationFrameId: number;
    let scrollRotation = 0;

    const handleScroll = () => {
      scrollRotation = window.scrollY * 0.0015;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Smooth lerp
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      // Rotate group
      group.rotation.y = scrollRotation + mouseX + Date.now() * 0.0003;
      group.rotation.x = mouseY + Math.sin(Date.now() * 0.0005) * 0.15;
      wireMesh.rotation.y = -group.rotation.y * 0.5;

      renderer.render(scene, camera);
    };

    animate();

    // Resize Observer
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width: newW, height: newH } = entry.contentRect;
        if (newW > 0 && newH > 0) {
          camera.aspect = newW / newH;
          camera.updateProjectionMatrix();
          renderer.setSize(newW, newH);
        }
      }
    });
    resizeObserver.observe(container);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      resizeObserver.disconnect();
      cancelAnimationFrame(animationFrameId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      wireGeo.dispose();
      wireMat.dispose();
      renderer.dispose();
    };
  }, []);

  if (!webglSupported) {
    return (
      <div className={`flex items-center justify-center ${className}`}>
        <div className="w-48 h-48 rounded-full border border-[#c8a97e]/30 flex items-center justify-center p-4">
          <div className="w-32 h-32 rounded-full border border-[#f2ede4]/20 animate-spin" style={{ animationDuration: '24s' }} />
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full min-h-[300px] cursor-grab active:cursor-grabbing ${className}`}
      aria-label="3D Contemporary Gallery Art Sculpture"
    />
  );
}
