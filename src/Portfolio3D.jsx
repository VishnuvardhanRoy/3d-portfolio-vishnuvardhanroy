import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Float,
  Text,
  RoundedBox,
  Html,
  Stars,
} from "@react-three/drei";

function ProjectCard({ position, title, subtitle, tech }) {
  return (
    <Float
      speed={1.5}
      rotationIntensity={0.4}
      floatIntensity={0.9}
      distance={0.25}
    >
      <group position={position}>
        {/* Card base */}
        <RoundedBox args={[2.8, 1.8, 0.2]} radius={0.25} smoothness={6}>
          <meshStandardMaterial
            color="#020617"
            metalness={0.4}
            roughness={0.25}
          />
        </RoundedBox>
        {/* Accent border */}
        <RoundedBox
          args={[2.85, 1.85, 0.18]}
          radius={0.28}
          smoothness={8}
          position={[0, 0, -0.12]}
        >
          <meshBasicMaterial color="#22d3ee" />
        </RoundedBox>
        {/* Project title */}
        <Text
          position={[0, 0.35, 0.16]}
          fontSize={0.27}
          color="#e5e7eb"
          anchorX="center"
          anchorY="middle"
          maxWidth={2.4}
        >
          {title}
        </Text>
        {/* Subtitle */}
        <Text
          position={[0, -0.05, 0.16]}
          fontSize={0.16}
          color="#9ca3af"
          anchorX="center"
          anchorY="middle"
          maxWidth={2.2}
        >
          {subtitle}
        </Text>
        {/* Tech stack pill row */}
        <Html
          position={[0, -0.6, 0.18]}
          transform
          style={{
            display: "flex",
            gap: "6px",
            justifyContent: "center",
            fontSize: "10px",
          }}
        >
          {tech.map((t) => (
            <span
              key={t}
              style={{
                padding: "4px 8px",
                borderRadius: "999px",
                background:
                  "linear-gradient(135deg, rgba(34,211,238,0.2), rgba(59,130,246,0.18))",
                border: "1px solid rgba(148,163,184,0.6)",
                color: "#e5e7eb",
                backdropFilter: "blur(6px)",
                whiteSpace: "nowrap",
              }}
            >
              {t}
            </span>
          ))}
        </Html>
      </group>
    </Float>
  );
}

function SkillChip({ children, position }) {
  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.6}>
      <group position={position}>
        <RoundedBox args={[1.6, 0.6, 0.18]} radius={0.25} smoothness={6}>
          <meshStandardMaterial
            color="#020617"
            metalness={0.3}
            roughness={0.3}
          />
        </RoundedBox>
        <Text
          position={[0, 0, 0.12]}
          fontSize={0.18}
          color="#e5e7eb"
          anchorX="center"
          anchorY="middle"
          maxWidth={1.4}
        >
          {children}
        </Text>
      </group>
    </Float>
  );
}

function CTAButton({ position }) {
  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.8}>
      <group position={position}>
        <RoundedBox args={[2.2, 0.7, 0.2]} radius={0.3} smoothness={6}>
          <meshStandardMaterial
            color="#22c55e"
            metalness={0.2}
            roughness={0.3}
            emissive="#16a34a"
            emissiveIntensity={0.3}
          />
        </RoundedBox>
        <Text
          position={[0, 0, 0.16]}
          fontSize={0.22}
          color="#020617"
          anchorX="center"
          anchorY="middle"
        >
          View My Work
        </Text>
      </group>
    </Float>
  );
}

export default function Portfolio3D() {
  return (
    <div className="w-full h-screen bg-black">
      <Canvas
        camera={{ position: [0, 0, 9], fov: 55 }}
        gl={{ antialias: true }}
      >
        <Suspense fallback={null}>
          {/* Lighting */}
          <ambientLight intensity={0.5} />
          <directionalLight
            position={[4, 6, 8]}
            intensity={1.5}
            color="#ffffff"
          />
          <pointLight position={[-6, -2, 5]} intensity={0.6} color="#22d3ee" />
          <pointLight position={[6, 2, -4]} intensity={0.5} color="#6366f1" />

          {/* Background stars */}
          <Stars
            radius={50}
            depth={40}
            count={4000}
            factor={3}
            saturation={0}
            fade
          />

          {/* Background gradient plane - FIXED VERSION */}
          <mesh position={[0, 0, -8]}>
            <planeGeometry args={[30, 20]} />
            <meshBasicMaterial color="#040619" />
          </mesh>

          {/* ===== HERO NAME & ROLE ===== */}
          <Float speed={1.2} rotationIntensity={0.15} floatIntensity={0.5}>
            <group position={[0, 2.1, 0]}>
              <Text
                fontSize={0.9}
                color="#f9fafb"
                anchorX="center"
                anchorY="middle"
              >
                Vishnuvardhan
              </Text>
              <Text
                position={[0, -0.7, 0]}
                fontSize={0.3}
                color="#9ca3af"
                anchorX="center"
                anchorY="middle"
                maxWidth={6}
              >
                Mechanical Engineer · AI / ML · Designer
              </Text>
            </group>
          </Float>

          {/* ===== SKILL CHIPS AROUND HERO ===== */}
          <SkillChip position={[-3, 1.1, 0.2]}>3D CAD & CFD</SkillChip>
          <SkillChip position={[0, 0.9, 0.2]}>AI / ML Prototyping</SkillChip>
          <SkillChip position={[3, 1.1, 0.2]}>UX Focused Design</SkillChip>

          {/* ===== PROJECT CARDS (CENTER FOCUS) ===== */}
          <ProjectCard
            position={[-3.3, -0.4, 0]}
            title="AI Image to Video"
            subtitle="End-to-end pipeline turning static product shots into smooth promo videos."
            tech={["Python", "Diffusion Models", "FFmpeg"]}
          />
          <ProjectCard
            position={[0, -0.1, 0]}
            title="CFD Fan Blade Analysis"
            subtitle="Optimized blade geometry for improved airflow and thermal performance."
            tech={["ANSYS", "SolidWorks", "CFD"]}
          />
          <ProjectCard
            position={[3.3, -0.4, 0]}
            title="Smart Mechanical System"
            subtitle="Sensor-driven system with predictive maintenance and live dashboards."
            tech={["Arduino", "Python", "Data Viz"]}
          />

          {/* ===== CTA BUTTON ===== */}
          <CTAButton position={[0, -2.3, 0.4]} />

          {/* Camera controls (no zoom, subtle rotation) */}
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            minPolarAngle={Math.PI / 3}
            maxPolarAngle={(2 * Math.PI) / 3}
            rotateSpeed={0.6}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Float,
  Text,
  RoundedBox,
  Html,
  Stars,
} from "@react-three/drei";

function ProjectCard({ position, title, subtitle, tech }) {
  return (
    <Float
      speed={1.5}
      rotationIntensity={0.4}
      floatIntensity={0.9}
      distance={0.25}
    >
      <group position={position}>
        {/* Card base */}
        <RoundedBox args={[2.8, 1.8, 0.2]} radius={0.25} smoothness={6}>
          <meshStandardMaterial
            color="#020617"
            metalness={0.4}
            roughness={0.25}
          />
        </RoundedBox>

        {/* Accent border */}
        <RoundedBox
          args={[2.85, 1.85, 0.18]}
          radius={0.28}
          smoothness={8}
          position={[0, 0, -0.12]}
        >
          <meshBasicMaterial color="#22d3ee" />
        </RoundedBox>

        {/* Project title */}
        <Text
          position={[0, 0.35, 0.16]}
          fontSize={0.27}
          color="#e5e7eb"
          anchorX="center"
          anchorY="middle"
          maxWidth={2.4}
        >
          {title}
        </Text>

        {/* Subtitle */}
        <Text
          position={[0, -0.05, 0.16]}
          fontSize={0.16}
          color="#9ca3af"
          anchorX="center"
          anchorY="middle"
          maxWidth={2.2}
        >
          {subtitle}
        </Text>

        {/* Tech stack pill row */}
        <Html
          position={[0, -0.6, 0.18]}
          transform
          style={{
            display: "flex",
            gap: "6px",
            justifyContent: "center",
            fontSize: "10px",
          }}
        >
          {tech.map((t) => (
            <span
              key={t}
              style={{
                padding: "4px 8px",
                borderRadius: "999px",
                background:
                  "linear-gradient(135deg, rgba(34,211,238,0.2), rgba(59,130,246,0.18))",
                border: "1px solid rgba(148,163,184,0.6)",
                color: "#e5e7eb",
                backdropFilter: "blur(6px)",
                whiteSpace: "nowrap",
              }}
            >
              {t}
            </span>
          ))}
        </Html>
      </group>
    </Float>
  );
}

function SkillChip({ children, position }) {
  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.6}>
      <group position={position}>
        <RoundedBox args={[1.6, 0.6, 0.18]} radius={0.25} smoothness={6}>
          <meshStandardMaterial
            color="#020617"
            metalness={0.3}
            roughness={0.3}
          />
        </RoundedBox>
        <Text
          position={[0, 0, 0.12]}
          fontSize={0.18}
          color="#e5e7eb"
          anchorX="center"
          anchorY="middle"
          maxWidth={1.4}
        >
          {children}
        </Text>
      </group>
    </Float>
  );
}

function CTAButton({ position }) {
  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.8}>
      <group position={position}>
        <RoundedBox args={[2.2, 0.7, 0.2]} radius={0.3} smoothness={6}>
          <meshStandardMaterial
            color="#22c55e"
            metalness={0.2}
            roughness={0.3}
            emissive="#16a34a"
            emissiveIntensity={0.3}
          />
        </RoundedBox>
        <Text
          position={[0, 0, 0.16]}
          fontSize={0.22}
          color="#020617"
          anchorX="center"
          anchorY="middle"
        >
          View My Work
        </Text>
      </group>
    </Float>
  );
}

export default function Portfolio3D() {
  return (
    <div className="w-full h-screen bg-black">
      <Canvas
        camera={{ position: [0, 0, 9], fov: 55 }}
        gl={{ antialias: true }}
      >
        <Suspense fallback={null}>
          {/* Lighting */}
          <ambientLight intensity={0.5} />
          <directionalLight
            position={[4, 6, 8]}
            intensity={1.5}
            color="#ffffff"
          />
          <pointLight position={[-6, -2, 5]} intensity={0.6} color="#22d3ee" />
          <pointLight position={[6, 2, -4]} intensity={0.5} color="#6366f1" />

          {/* Background stars */}
          <Stars
            radius={50}
            depth={40}
            count={4000}
            factor={3}
            saturation={0}
            fade
          />

          {/* Background gradient plane */}
          <mesh position={[0, 0, -8]}>
            <planeGeometry args={[30, 20]} />
            <meshBasicMaterial>
              <shaderMaterial
                attach="material"
                args={[
                  {
                    uniforms: {},
                    vertexShader: `
                      varying vec2 vUv;
                      void main() {
                        vUv = uv;
                        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                      }
                    `,
                    fragmentShader: `
                      varying vec2 vUv;
                      void main() {
                        vec3 topColor = vec3(4.0/255.0, 7.0/255.0, 31.0/255.0);
                        vec3 bottomColor = vec3(15.0/255.0, 23.0/255.0, 42.0/255.0);
                        vec3 color = mix(bottomColor, topColor, vUv.y);
                        gl_FragColor = vec4(color, 1.0);
                      }
                    `,
                  },
                ]}
              />
            </meshBasicMaterial>
          </mesh>

          {/* ===== HERO NAME & ROLE ===== */}
          <Float speed={1.2} rotationIntensity={0.15} floatIntensity={0.5}>
            <group position={[0, 2.1, 0]}>
              <Text
                fontSize={0.9}
                color="#f9fafb"
                anchorX="center"
                anchorY="middle"
              >
                Vishnuvardhan
              </Text>
              <Text
                position={[0, -0.7, 0]}
                fontSize={0.3}
                color="#9ca3af"
                anchorX="center"
                anchorY="middle"
                maxWidth={6}
              >
                Mechanical Engineer · AI / ML · Designer
              </Text>
            </group>
          </Float>

          {/* ===== SKILL CHIPS AROUND HERO ===== */}
          <SkillChip position={[-3, 1.1, 0.2]}>3D CAD & CFD</SkillChip>
          <SkillChip position={[0, 0.9, 0.2]}>AI / ML Prototyping</SkillChip>
          <SkillChip position={[3, 1.1, 0.2]}>UX Focused Design</SkillChip>

          {/* ===== PROJECT CARDS (CENTER FOCUS) ===== */}
          <ProjectCard
            position={[-3.3, -0.4, 0]}
            title="AI Image to Video"
            subtitle="End-to-end pipeline turning static product shots into smooth promo videos."
            tech={["Python", "Diffusion Models", "FFmpeg"]}
          />
          <ProjectCard
            position={[0, -0.1, 0]}
            title="CFD Fan Blade Analysis"
            subtitle="Optimized blade geometry for improved airflow and thermal performance."
            tech={["ANSYS", "SolidWorks", "CFD"]}
          />
          <ProjectCard
            position={[3.3, -0.4, 0]}
            title="Smart Mechanical System"
            subtitle="Sensor-driven system with predictive maintenance and live dashboards."
            tech={["Arduino", "Python", "Data Viz"]}
          />

          {/* ===== CTA BUTTON ===== */}
          <CTAButton position={[0, -2.3, 0.4]} />

          {/* Camera controls (no zoom, subtle rotation) */}
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            minPolarAngle={Math.PI / 3}
            maxPolarAngle={(2 * Math.PI) / 3}
            rotateSpeed={0.6}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
