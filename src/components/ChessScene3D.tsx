import React, { useRef, useState, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, Sparkles, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

export type BoardTheme = 'gold' | 'emerald' | 'platinum';
export type CameraPreset = 'cinematic' | 'tactical' | 'closeup';

interface ChessPieceProps {
  type: 'king' | 'queen' | 'bishop' | 'knight' | 'rook' | 'pawn';
  color: 'white' | 'black';
  position: [number, number, number];
  rotation?: [number, number, number];
  theme: BoardTheme;
  onClick?: () => void;
  isSelected?: boolean;
}

// Procedural 3D Chess Piece Component
export const ProceduralPiece: React.FC<ChessPieceProps> = ({
  type,
  color,
  position,
  rotation = [0, 0, 0],
  theme,
  onClick,
  isSelected
}) => {
  const groupRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);

  // Dynamic metallic PBR material properties based on piece color and academy theme
  const materialProps = useMemo(() => {
    if (color === 'white') {
      if (theme === 'emerald') {
        return {
          color: '#FAF8F2',
          emissive: '#112211',
          roughness: 0.18,
          metalness: 0.65,
          clearcoat: 0.8,
          clearcoatRoughness: 0.1
        };
      } else if (theme === 'platinum') {
        return {
          color: '#F4F5F7',
          emissive: '#111827',
          roughness: 0.12,
          metalness: 0.9,
          clearcoat: 1.0,
          clearcoatRoughness: 0.05
        };
      }
      // Gold theme default
      return {
        color: '#FFF8E7',
        emissive: '#2A2008',
        roughness: 0.15,
        metalness: 0.75,
        clearcoat: 0.9,
        clearcoatRoughness: 0.1
      };
    } else {
      // Dark / Obsidian Pieces with Gold / Metallic Edges
      if (theme === 'emerald') {
        return {
          color: '#081C15',
          emissive: '#030A07',
          roughness: 0.22,
          metalness: 0.8,
          clearcoat: 0.9,
          clearcoatRoughness: 0.1
        };
      } else if (theme === 'platinum') {
        return {
          color: '#111827',
          emissive: '#0B0F19',
          roughness: 0.18,
          metalness: 0.88,
          clearcoat: 0.95,
          clearcoatRoughness: 0.1
        };
      }
      return {
        color: '#16130D',
        emissive: '#1F1705',
        roughness: 0.2,
        metalness: 0.85,
        clearcoat: 0.85,
        clearcoatRoughness: 0.1
      };
    }
  }, [color, theme]);

  const goldAccentMaterial = useMemo(() => {
    return new THREE.MeshStandardMaterial({
      color: theme === 'platinum' ? '#E2E8F0' : theme === 'emerald' ? '#5EEAD4' : '#E5C07B',
      metalness: 0.95,
      roughness: 0.15,
      emissive: theme === 'platinum' ? '#222831' : '#3D2F0C'
    });
  }, [theme]);

  const pieceMaterial = useMemo(() => {
    return new THREE.MeshPhysicalMaterial({
      ...materialProps,
      reflectivity: 0.9
    });
  }, [materialProps]);

  useFrame((_, delta) => {
    if (groupRef.current) {
      const targetY = isSelected ? position[1] + 0.45 : hovered ? position[1] + 0.18 : position[1];
      groupRef.current.position.y = THREE.MathUtils.damp(
        groupRef.current.position.y,
        targetY,
        12,
        delta
      );
    }
  });

  return (
    <group
      ref={groupRef}
      position={[position[0], position[1], position[2]]}
      rotation={rotation}
      onClick={(e) => {
        e.stopPropagation();
        onClick?.();
      }}
      onPointerOver={(e) => {
        e.stopPropagation();
        setHovered(true);
        document.body.style.cursor = 'pointer';
      }}
      onPointerOut={() => {
        setHovered(false);
        document.body.style.cursor = 'auto';
      }}
    >
      {/* Selection Glow Disk */}
      {(isSelected || hovered) && (
        <mesh position={[0, 0.02, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <ringGeometry args={[0.32, 0.46, 32]} />
          <meshBasicMaterial
            color={theme === 'platinum' ? '#60A5FA' : theme === 'emerald' ? '#34D399' : '#FBBF24'}
            transparent
            opacity={isSelected ? 0.9 : 0.45}
            side={THREE.DoubleSide}
          />
        </mesh>
      )}

      {/* Pawn: Base, stepped ring, conical stem, collar, and head sphere */}
      {type === 'pawn' && (
        <group>
          {/* Base bottom */}
          <mesh position={[0, 0.05, 0]} castShadow receiveShadow material={pieceMaterial}>
            <cylinderGeometry args={[0.3, 0.35, 0.1, 24]} />
          </mesh>
          {/* Base ring */}
          <mesh position={[0, 0.12, 0]} castShadow receiveShadow material={goldAccentMaterial}>
            <torusGeometry args={[0.26, 0.03, 16, 24]} />
          </mesh>
          {/* Stem */}
          <mesh position={[0, 0.32, 0]} castShadow receiveShadow material={pieceMaterial}>
            <cylinderGeometry args={[0.13, 0.24, 0.35, 24]} />
          </mesh>
          {/* Collar */}
          <mesh position={[0, 0.52, 0]} castShadow receiveShadow material={goldAccentMaterial}>
            <cylinderGeometry args={[0.2, 0.15, 0.06, 24]} />
          </mesh>
          {/* Head */}
          <mesh position={[0, 0.72, 0]} castShadow receiveShadow material={pieceMaterial}>
            <sphereGeometry args={[0.18, 24, 24]} />
          </mesh>
        </group>
      )}

      {/* Rook: Base, fluted pillar, flared collar, and crenellated crown battlements */}
      {type === 'rook' && (
        <group>
          <mesh position={[0, 0.06, 0]} castShadow receiveShadow material={pieceMaterial}>
            <cylinderGeometry args={[0.34, 0.38, 0.12, 24]} />
          </mesh>
          <mesh position={[0, 0.14, 0]} castShadow receiveShadow material={goldAccentMaterial}>
            <torusGeometry args={[0.3, 0.035, 16, 24]} />
          </mesh>
          {/* Pillar */}
          <mesh position={[0, 0.44, 0]} castShadow receiveShadow material={pieceMaterial}>
            <cylinderGeometry args={[0.22, 0.28, 0.52, 24]} />
          </mesh>
          {/* Capital */}
          <mesh position={[0, 0.74, 0]} castShadow receiveShadow material={pieceMaterial}>
            <cylinderGeometry args={[0.33, 0.24, 0.12, 24]} />
          </mesh>
          <mesh position={[0, 0.81, 0]} castShadow receiveShadow material={goldAccentMaterial}>
            <torusGeometry args={[0.31, 0.03, 16, 24]} />
          </mesh>
          {/* Battlements Rim */}
          <mesh position={[0, 0.9, 0]} castShadow receiveShadow material={pieceMaterial}>
            <cylinderGeometry args={[0.33, 0.33, 0.14, 24, 1, true]} />
          </mesh>
          {/* 4 Crenellations */}
          {[0, Math.PI / 2, Math.PI, (3 * Math.PI) / 2].map((angle, i) => (
            <mesh
              key={i}
              position={[Math.cos(angle) * 0.25, 0.94, Math.sin(angle) * 0.25]}
              castShadow
              material={pieceMaterial}
            >
              <boxGeometry args={[0.12, 0.12, 0.12]} />
            </mesh>
          ))}
        </group>
      )}

      {/* Knight: Base, arched torso, horse head, muzzle, and pricked ears */}
      {type === 'knight' && (
        <group>
          <mesh position={[0, 0.06, 0]} castShadow receiveShadow material={pieceMaterial}>
            <cylinderGeometry args={[0.34, 0.38, 0.12, 24]} />
          </mesh>
          <mesh position={[0, 0.14, 0]} castShadow receiveShadow material={goldAccentMaterial}>
            <torusGeometry args={[0.3, 0.03, 16, 24]} />
          </mesh>
          {/* Tapered curved neck / chest */}
          <mesh position={[0, 0.38, -0.04]} rotation={[0.2, 0, 0]} castShadow receiveShadow material={pieceMaterial}>
            <cylinderGeometry args={[0.18, 0.26, 0.45, 20]} />
          </mesh>
          {/* Mane crest */}
          <mesh position={[0, 0.52, -0.15]} rotation={[-0.3, 0, 0]} castShadow material={goldAccentMaterial}>
            <boxGeometry args={[0.08, 0.35, 0.16]} />
          </mesh>
          {/* Horse Head / Jaw */}
          <mesh position={[0, 0.68, 0.08]} rotation={[0.45, 0, 0]} castShadow receiveShadow material={pieceMaterial}>
            <boxGeometry args={[0.22, 0.24, 0.34]} />
          </mesh>
          {/* Muzzle */}
          <mesh position={[0, 0.58, 0.22]} rotation={[0.4, 0, 0]} castShadow receiveShadow material={pieceMaterial}>
            <boxGeometry args={[0.18, 0.16, 0.2]} />
          </mesh>
          {/* Left & Right Ears */}
          <mesh position={[-0.08, 0.86, -0.04]} rotation={[0.3, 0, -0.2]} castShadow material={goldAccentMaterial}>
            <coneGeometry args={[0.05, 0.14, 12]} />
          </mesh>
          <mesh position={[0.08, 0.86, -0.04]} rotation={[0.3, 0, 0.2]} castShadow material={goldAccentMaterial}>
            <coneGeometry args={[0.05, 0.14, 12]} />
          </mesh>
        </group>
      )}

      {/* Bishop: Base, slender body, collar, mitre head with slot, and finial pearl */}
      {type === 'bishop' && (
        <group>
          <mesh position={[0, 0.06, 0]} castShadow receiveShadow material={pieceMaterial}>
            <cylinderGeometry args={[0.33, 0.38, 0.12, 24]} />
          </mesh>
          <mesh position={[0, 0.14, 0]} castShadow receiveShadow material={goldAccentMaterial}>
            <torusGeometry args={[0.29, 0.03, 16, 24]} />
          </mesh>
          {/* Body */}
          <mesh position={[0, 0.44, 0]} castShadow receiveShadow material={pieceMaterial}>
            <cylinderGeometry args={[0.15, 0.25, 0.52, 24]} />
          </mesh>
          {/* Neck rings */}
          <mesh position={[0, 0.72, 0]} castShadow receiveShadow material={goldAccentMaterial}>
            <torusGeometry args={[0.19, 0.035, 16, 24]} />
          </mesh>
          {/* Mitre head */}
          <mesh position={[0, 0.94, 0]} castShadow receiveShadow material={pieceMaterial}>
            <sphereGeometry args={[0.22, 24, 24]} />
          </mesh>
          {/* Mitre upper dome */}
          <mesh position={[0, 1.08, 0]} castShadow receiveShadow material={pieceMaterial}>
            <coneGeometry args={[0.17, 0.22, 24]} />
          </mesh>
          {/* Bishop Finial */}
          <mesh position={[0, 1.22, 0]} castShadow receiveShadow material={goldAccentMaterial}>
            <sphereGeometry args={[0.06, 16, 16]} />
          </mesh>
        </group>
      )}

      {/* Queen: Base, elegant hourglass body, layered coronet with spiked pearls */}
      {type === 'queen' && (
        <group>
          <mesh position={[0, 0.07, 0]} castShadow receiveShadow material={pieceMaterial}>
            <cylinderGeometry args={[0.36, 0.42, 0.14, 24]} />
          </mesh>
          <mesh position={[0, 0.16, 0]} castShadow receiveShadow material={goldAccentMaterial}>
            <torusGeometry args={[0.33, 0.035, 16, 24]} />
          </mesh>
          {/* Lower waist */}
          <mesh position={[0, 0.42, 0]} castShadow receiveShadow material={pieceMaterial}>
            <cylinderGeometry args={[0.17, 0.28, 0.44, 24]} />
          </mesh>
          {/* Middle belt */}
          <mesh position={[0, 0.66, 0]} castShadow receiveShadow material={goldAccentMaterial}>
            <torusGeometry args={[0.18, 0.03, 16, 24]} />
          </mesh>
          {/* Upper chest */}
          <mesh position={[0, 0.88, 0]} castShadow receiveShadow material={pieceMaterial}>
            <cylinderGeometry args={[0.28, 0.18, 0.36, 24]} />
          </mesh>
          {/* Flared Coronet */}
          <mesh position={[0, 1.1, 0]} castShadow receiveShadow material={goldAccentMaterial}>
            <cylinderGeometry args={[0.32, 0.25, 0.12, 24, 1, true]} />
          </mesh>
          {/* 8 Crown Pearl Points */}
          {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => {
            const rad = (i / 8) * Math.PI * 2;
            return (
              <mesh
                key={i}
                position={[Math.cos(rad) * 0.28, 1.18, Math.sin(rad) * 0.28]}
                castShadow
                material={goldAccentMaterial}
              >
                <sphereGeometry args={[0.045, 12, 12]} />
              </mesh>
            );
          })}
          {/* Queen central diamond tip */}
          <mesh position={[0, 1.25, 0]} castShadow receiveShadow material={goldAccentMaterial}>
            <sphereGeometry args={[0.075, 16, 16]} />
          </mesh>
        </group>
      )}

      {/* King: Base, massive regal stature, imperial collar, crown dome, and crowning cross */}
      {type === 'king' && (
        <group>
          <mesh position={[0, 0.07, 0]} castShadow receiveShadow material={pieceMaterial}>
            <cylinderGeometry args={[0.38, 0.44, 0.14, 24]} />
          </mesh>
          <mesh position={[0, 0.17, 0]} castShadow receiveShadow material={goldAccentMaterial}>
            <torusGeometry args={[0.35, 0.04, 16, 24]} />
          </mesh>
          {/* Majestic torso */}
          <mesh position={[0, 0.48, 0]} castShadow receiveShadow material={pieceMaterial}>
            <cylinderGeometry args={[0.2, 0.3, 0.52, 24]} />
          </mesh>
          <mesh position={[0, 0.76, 0]} castShadow receiveShadow material={goldAccentMaterial}>
            <torusGeometry args={[0.22, 0.035, 16, 24]} />
          </mesh>
          {/* Imperial chest */}
          <mesh position={[0, 0.98, 0]} castShadow receiveShadow material={pieceMaterial}>
            <cylinderGeometry args={[0.31, 0.22, 0.38, 24]} />
          </mesh>
          {/* Crown capital rim */}
          <mesh position={[0, 1.2, 0]} castShadow receiveShadow material={goldAccentMaterial}>
            <cylinderGeometry args={[0.32, 0.28, 0.1, 24]} />
          </mesh>
          {/* Cross - Vertical bar */}
          <mesh position={[0, 1.38, 0]} castShadow material={goldAccentMaterial}>
            <boxGeometry args={[0.06, 0.24, 0.06]} />
          </mesh>
          {/* Cross - Horizontal crossbar */}
          <mesh position={[0, 1.42, 0]} castShadow material={goldAccentMaterial}>
            <boxGeometry args={[0.2, 0.06, 0.06]} />
          </mesh>
        </group>
      )}
    </group>
  );
};

// 3D Chessboard Component with Wood/Marble Textures, Beveled Border & Coordinate Guides
const ChessBoard: React.FC<{ theme: BoardTheme; onSquareClick?: (file: number, rank: number) => void }> = ({
  theme,
  onSquareClick
}) => {
  const squareSize = 1.0;
  const boardOffset = 3.5 * squareSize;

  // Board square colors based on theme
  const { lightColor, darkColor, frameColor, trimColor } = useMemo(() => {
    if (theme === 'emerald') {
      return {
        lightColor: '#F3F4F6',
        darkColor: '#0E392B',
        frameColor: '#071A14',
        trimColor: '#10B981'
      };
    } else if (theme === 'platinum') {
      return {
        lightColor: '#F8FAFC',
        darkColor: '#1E293B',
        frameColor: '#0F172A',
        trimColor: '#94A3B8'
      };
    }
    // Obsidian & Royal Gold default
    return {
      lightColor: '#FFF8E8',
      darkColor: '#12151D',
      frameColor: '#090B10',
      trimColor: '#D4AF37'
    };
  }, [theme]);

  const lightMaterial = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        color: lightColor,
        roughness: 0.16,
        metalness: 0.45,
        clearcoat: 0.9,
        clearcoatRoughness: 0.1
      }),
    [lightColor]
  );

  const darkMaterial = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        color: darkColor,
        roughness: 0.2,
        metalness: 0.65,
        clearcoat: 0.85,
        clearcoatRoughness: 0.12
      }),
    [darkColor]
  );

  const frameMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: frameColor,
        roughness: 0.35,
        metalness: 0.75
      }),
    [frameColor]
  );

  const trimMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: trimColor,
        roughness: 0.15,
        metalness: 0.95,
        emissive: theme === 'platinum' ? '#1E293B' : '#332607'
      }),
    [trimColor, theme]
  );

  return (
    <group position={[0, 0, 0]}>
      {/* Outer Luxury Plinth / Frame */}
      <mesh position={[0, -0.22, 0]} receiveShadow material={frameMaterial}>
        <boxGeometry args={[9.4, 0.44, 9.4]} />
      </mesh>

      {/* Gold Inlay Trim Border */}
      <mesh position={[0, -0.01, 0]} material={trimMaterial}>
        <boxGeometry args={[8.4, 0.04, 8.4]} />
      </mesh>

      {/* 64 Chess Squares */}
      {Array.from({ length: 8 }).map((_, rank) =>
        Array.from({ length: 8 }).map((_, file) => {
          const isLight = (rank + file) % 2 === 0;
          const x = file * squareSize - boardOffset;
          const z = rank * squareSize - boardOffset;

          return (
            <mesh
              key={`${file}-${rank}`}
              position={[x, 0, z]}
              receiveShadow
              material={isLight ? lightMaterial : darkMaterial}
              onClick={(e) => {
                e.stopPropagation();
                onSquareClick?.(file, rank);
              }}
            >
              <boxGeometry args={[0.98, 0.08, 0.98]} />
            </mesh>
          );
        })
      )}

      {/* Under-board Soft Glow Plane */}
      <mesh position={[0, -0.46, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[11, 11]} />
        <meshBasicMaterial
          color={trimColor}
          transparent
          opacity={0.08}
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  );
};

// Animated Camera Controller supporting smooth camera transitions
const CameraController: React.FC<{
  cameraPreset: CameraPreset;
  autoRotate: boolean;
}> = ({ cameraPreset, autoRotate }) => {
  const controlsRef = useRef<any>(null);

  useFrame((state, delta) => {
    if (!controlsRef.current) return;

    let targetPos = new THREE.Vector3(7.5, 7.8, 8.8);
    let targetLook = new THREE.Vector3(0, 0.5, 0);

    if (cameraPreset === 'tactical') {
      targetPos.set(0, 11.2, 0.5);
      targetLook.set(0, 0, 0);
    } else if (cameraPreset === 'closeup') {
      targetPos.set(2.8, 3.2, 4.2);
      targetLook.set(0.5, 0.8, 0.5);
    }

    state.camera.position.lerp(targetPos, Math.min(delta * 2.8, 1));
    controlsRef.current.target.lerp(targetLook, Math.min(delta * 3.5, 1));
    controlsRef.current.update();
  });

  return (
    <OrbitControls
      ref={controlsRef}
      enableDamping
      dampingFactor={0.06}
      maxPolarAngle={Math.PI / 2.05} // don't go underneath table
      minDistance={4}
      maxDistance={18}
      autoRotate={autoRotate}
      autoRotateSpeed={0.8}
    />
  );
};

// The Complete 3D Chess Scene
interface ChessScene3DProps {
  theme?: BoardTheme;
  interactive?: boolean;
}

export const ChessScene3D: React.FC<ChessScene3DProps> = ({
  theme = 'gold',
  interactive = true
}) => {
  const [selectedPiece, setSelectedPiece] = useState<string | null>('w-queen');
  const [activeTheme, setActiveTheme] = useState<BoardTheme>(theme);
  const [cameraPreset, setCameraPreset] = useState<CameraPreset>('cinematic');
  const [autoRotate, setAutoRotate] = useState<boolean>(true);
  const [hasWebGlError, setHasWebGlError] = useState(false);

  // Initial famous dynamic tactical board setup (Immortal Game / Master position)
  const pieceSetup: Array<{
    id: string;
    type: 'king' | 'queen' | 'bishop' | 'knight' | 'rook' | 'pawn';
    color: 'white' | 'black';
    position: [number, number, number];
    rotation?: [number, number, number];
  }> = useMemo(
    () => [
      // White Royals and Officers
      { id: 'w-king', type: 'king', color: 'white', position: [0.5, 0.05, 3.5] },
      { id: 'w-queen', type: 'queen', color: 'white', position: [-0.5, 0.05, 1.5] }, // Centrally dominating queen
      { id: 'w-rook-1', type: 'rook', color: 'white', position: [-3.5, 0.05, 3.5] },
      { id: 'w-rook-2', type: 'rook', color: 'white', position: [1.5, 0.05, 3.5] },
      { id: 'w-bishop-1', type: 'bishop', color: 'white', position: [-1.5, 0.05, 2.5] },
      { id: 'w-bishop-2', type: 'bishop', color: 'white', position: [2.5, 0.05, 1.5] },
      { id: 'w-knight-1', type: 'knight', color: 'white', position: [0.5, 0.05, 1.5], rotation: [0, -Math.PI / 6, 0] },
      { id: 'w-knight-2', type: 'knight', color: 'white', position: [-2.5, 0.05, 2.5], rotation: [0, Math.PI / 4, 0] },
      // White Pawns
      { id: 'w-pawn-1', type: 'pawn', color: 'white', position: [-3.5, 0.05, 2.5] },
      { id: 'w-pawn-2', type: 'pawn', color: 'white', position: [-2.5, 0.05, 1.5] },
      { id: 'w-pawn-3', type: 'pawn', color: 'white', position: [-0.5, 0.05, 0.5] },
      { id: 'w-pawn-4', type: 'pawn', color: 'white', position: [0.5, 0.05, -0.5] },
      { id: 'w-pawn-5', type: 'pawn', color: 'white', position: [2.5, 0.05, 2.5] },
      { id: 'w-pawn-6', type: 'pawn', color: 'white', position: [3.5, 0.05, 2.5] },

      // Black Pieces (Defending Counter-attack)
      { id: 'b-king', type: 'king', color: 'black', position: [1.5, 0.05, -3.5], rotation: [0, Math.PI, 0] },
      { id: 'b-queen', type: 'queen', color: 'black', position: [-2.5, 0.05, -2.5], rotation: [0, Math.PI, 0] },
      { id: 'b-rook-1', type: 'rook', color: 'black', position: [-3.5, 0.05, -3.5], rotation: [0, Math.PI, 0] },
      { id: 'b-rook-2', type: 'rook', color: 'black', position: [2.5, 0.05, -3.5], rotation: [0, Math.PI, 0] },
      { id: 'b-bishop-1', type: 'bishop', color: 'black', position: [-1.5, 0.05, -2.5], rotation: [0, Math.PI, 0] },
      { id: 'b-bishop-2', type: 'bishop', color: 'black', position: [1.5, 0.05, -1.5], rotation: [0, Math.PI, 0] },
      { id: 'b-knight-1', type: 'knight', color: 'black', position: [-0.5, 0.05, -1.5], rotation: [0, (5 * Math.PI) / 6, 0] },
      { id: 'b-knight-2', type: 'knight', color: 'black', position: [2.5, 0.05, -2.5], rotation: [0, (3 * Math.PI) / 4, 0] },
      // Black Pawns
      { id: 'b-pawn-1', type: 'pawn', color: 'black', position: [-3.5, 0.05, -2.5], rotation: [0, Math.PI, 0] },
      { id: 'b-pawn-2', type: 'pawn', color: 'black', position: [-0.5, 0.05, -2.5], rotation: [0, Math.PI, 0] },
      { id: 'b-pawn-3', type: 'pawn', color: 'black', position: [0.5, 0.05, -2.5], rotation: [0, Math.PI, 0] },
      { id: 'b-pawn-4', type: 'pawn', color: 'black', position: [3.5, 0.05, -2.5], rotation: [0, Math.PI, 0] }
    ],
    []
  );

  if (hasWebGlError) {
    return (
      <div className="relative w-full h-[520px] lg:h-[620px] flex items-center justify-center bg-gradient-to-b from-neutral-900 to-slate-950 rounded-2xl border border-amber-500/30 p-8 text-center">
        <div className="max-w-md">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400 text-3xl font-cinzel">
            ♔
          </div>
          <h3 className="text-xl font-bold font-cinzel text-amber-200 mb-2">Checkmate City Interactive Arena</h3>
          <p className="text-slate-400 text-sm mb-4">
            3D rendering is running in high-compatibility mode. Click below to try re-initializing hardware acceleration.
          </p>
          <button
            onClick={() => setHasWebGlError(false)}
            className="px-5 py-2.5 bg-amber-500 text-black font-semibold rounded-lg hover:bg-amber-400 transition"
          >
            Re-launch 3D Arena
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-[540px] md:h-[600px] lg:h-[680px] select-none">
      {/* 3D Canvas Canvas Container */}
      <div className="w-full h-full relative rounded-2xl overflow-hidden shadow-2xl">
        <Canvas
          shadows
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: 'high-performance'
          }}
          onError={() => setHasWebGlError(true)}
        >
          <PerspectiveCamera makeDefault position={[7.5, 7.8, 8.8]} fov={42} />

          {/* Lighting Rig: Warm Key light, cool Fill, soft Rim & golden ambient */}
          <ambientLight intensity={0.45} />
          
          <directionalLight
            position={[8, 14, 6]}
            intensity={1.75}
            castShadow
            shadow-mapSize={[2048, 2048]}
            shadow-camera-near={0.5}
            shadow-camera-far={25}
            shadow-camera-left={-7}
            shadow-camera-right={7}
            shadow-camera-top={7}
            shadow-camera-bottom={-7}
            shadow-bias={-0.0005}
            color="#FFF4D4"
          />

          <directionalLight
            position={[-8, 6, -8]}
            intensity={0.65}
            color="#93C5FD" // Cool blue rim light
          />

          <pointLight position={[0, 4, 0]} intensity={0.5} color="#D4AF37" distance={12} />

          {/* Camera movement controller */}
          <CameraController cameraPreset={cameraPreset} autoRotate={autoRotate} />

          {/* Floating subtle gold motes & dust particles */}
          <Sparkles
            count={60}
            scale={12}
            size={2.5}
            speed={0.4}
            opacity={0.4}
            color={activeTheme === 'platinum' ? '#93C5FD' : '#FBBF24'}
          />

          <Suspense fallback={null}>
            {/* Soft Floating Board Animation */}
            <Float
              speed={1.2}
              rotationIntensity={0.08}
              floatIntensity={0.25}
              floatingRange={[-0.1, 0.1]}
            >
              <group position={[0, 0, 0]}>
                <ChessBoard
                  theme={activeTheme}
                  onSquareClick={() => setSelectedPiece(null)}
                />

                {/* All 3D Procedural Pieces */}
                {pieceSetup.map((piece) => (
                  <ProceduralPiece
                    key={piece.id}
                    type={piece.type}
                    color={piece.color}
                    position={piece.position}
                    rotation={piece.rotation}
                    theme={activeTheme}
                    isSelected={selectedPiece === piece.id}
                    onClick={() => setSelectedPiece(piece.id)}
                  />
                ))}
              </group>
            </Float>
          </Suspense>
        </Canvas>
      </div>

      {/* Floating 3D Scene Controls HUD (Ergonomic, non-obtrusive bottom dock) */}
      {interactive && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex flex-wrap items-center justify-center gap-2 p-2 bg-neutral-950/85 backdrop-blur-md rounded-2xl border border-amber-500/25 shadow-2xl max-w-[94%]">
          {/* Theme Selector */}
          <div className="flex items-center gap-1 px-2 border-r border-slate-700/60 pr-3">
            <span className="text-[11px] font-medium text-slate-400 uppercase tracking-wider hidden sm:inline mr-1">
              Finish:
            </span>
            <button
              onClick={() => setActiveTheme('gold')}
              className={`px-2.5 py-1 text-xs font-semibold rounded-lg transition ${
                activeTheme === 'gold'
                  ? 'bg-amber-500/25 text-amber-300 border border-amber-500/40 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
              title="Royal Gold & Obsidian"
            >
              Gold
            </button>
            <button
              onClick={() => setActiveTheme('emerald')}
              className={`px-2.5 py-1 text-xs font-semibold rounded-lg transition ${
                activeTheme === 'emerald'
                  ? 'bg-emerald-500/25 text-emerald-300 border border-emerald-500/40 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
              title="Emerald & Ivory"
            >
              Emerald
            </button>
            <button
              onClick={() => setActiveTheme('platinum')}
              className={`px-2.5 py-1 text-xs font-semibold rounded-lg transition ${
                activeTheme === 'platinum'
                  ? 'bg-cyan-500/25 text-cyan-300 border border-cyan-500/40 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
              title="Platinum & Sapphire"
            >
              Platinum
            </button>
          </div>

          {/* Camera Presets */}
          <div className="flex items-center gap-1 px-2 border-r border-slate-700/60 pr-3">
            <span className="text-[11px] font-medium text-slate-400 uppercase tracking-wider hidden md:inline mr-1">
              Angle:
            </span>
            <button
              onClick={() => setCameraPreset('cinematic')}
              className={`px-2.5 py-1 text-xs font-semibold rounded-lg transition ${
                cameraPreset === 'cinematic'
                  ? 'bg-amber-400 text-black shadow-md'
                  : 'text-slate-300 hover:text-white hover:bg-white/10'
              }`}
            >
              Perspective
            </button>
            <button
              onClick={() => setCameraPreset('closeup')}
              className={`px-2.5 py-1 text-xs font-semibold rounded-lg transition ${
                cameraPreset === 'closeup'
                  ? 'bg-amber-400 text-black shadow-md'
                  : 'text-slate-300 hover:text-white hover:bg-white/10'
              }`}
            >
              Close-up
            </button>
            <button
              onClick={() => setCameraPreset('tactical')}
              className={`px-2.5 py-1 text-xs font-semibold rounded-lg transition ${
                cameraPreset === 'tactical'
                  ? 'bg-amber-400 text-black shadow-md'
                  : 'text-slate-300 hover:text-white hover:bg-white/10'
              }`}
            >
              Top Board
            </button>
          </div>

          {/* Auto-Rotation Toggle */}
          <button
            onClick={() => setAutoRotate(!autoRotate)}
            className={`px-3 py-1 text-xs font-semibold rounded-lg flex items-center gap-1.5 transition ${
              autoRotate
                ? 'bg-slate-800 text-amber-300 border border-amber-500/30'
                : 'bg-neutral-900 text-slate-400 hover:text-slate-200'
            }`}
          >
            <span className={`w-2 h-2 rounded-full ${autoRotate ? 'bg-amber-400' : 'bg-slate-600'}`}></span>
            {autoRotate ? 'Orbit: ON' : 'Orbit: Paused'}
          </button>
        </div>
      )}

      {/* Selected Piece Info Card (appears when a piece is clicked) */}
      {selectedPiece && (
        <div className="absolute top-4 left-4 z-20 px-3.5 py-2 glass-panel rounded-xl border border-amber-500/30 text-xs shadow-xl animate-fade-in flex items-center gap-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
          <div>
            <div className="text-white font-semibold capitalize font-cinzel">
              {selectedPiece.replace('-', ' ')}
            </div>
            <div className="text-[10px] text-amber-300/80">Interactive 3D Piece Active • Drag to inspect</div>
          </div>
          <button
            onClick={() => setSelectedPiece(null)}
            className="text-slate-400 hover:text-white ml-2 text-sm leading-none"
          >
            ✕
          </button>
        </div>
      )}
    </div>
  );
};
