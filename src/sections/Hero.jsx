import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera, OrbitControls } from '@react-three/drei';
import { useMediaQuery } from 'react-responsive';
import { calculateSizes } from '../constants/index.js';

import CanvasLoader from '../components/CanvasLoader.jsx';
import ErrorBoundary from '../components/ErrorBoundary';
import MeetingRoom from '../components/MeetingRoom.jsx';
import Php from '../components/Php.jsx';
import JavaScript from '../components/Javascript.jsx';
import NodeJs from '../components/NodeJs.jsx';
import Button from '../components/Button.jsx';
import ReactLogo from "../components/ReactLogo.jsx";

const Hero = () => {
    const isSmall = useMediaQuery({ maxWidth: 440 });
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

    const sizes = calculateSizes(isSmall, isMobile, isTablet);

    return (
        <section className="min-h-screen border-2 w-full flex flex-col relative" id="home">
            {/* Header Text */}
            <div className="w-full mx-auto flex flex-col sm:mt-36 mt-40 c-space gap-3">
                <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">
                    Hi, I am Ash <span className="waving-hand">👋</span>
                </p>
                <p className="hero_tag text-gray_gradient">
                    Junior Front-end Software Developer
                </p>
            </div>

            {/* 3D Canvas */}
            <div className="w-full h-full absolute inset-0">
                <Canvas className="w-full h-full">
                    <Suspense fallback={<CanvasLoader />}>
                        <ErrorBoundary>
                            {/* Camera */}
                            <PerspectiveCamera makeDefault position={[-10, 2, 20]} fov={45} />

                            {/* Controls */}
                            {
                                !isMobile && (

                            <OrbitControls
                                target={[0, -2, -8]}
                                minDistance={10}
                                maxDistance={30}
                                enablePan={true}
                                enableZoom={false}
                                enableRotate={true}
                            />
                                )
                            }

                            {/* Lighting */}
                            <ambientLight intensity={5} />
                            <directionalLight position={[-10, 10, 10]} intensity={0.8} />
                            <pointLight position={[0, 10, 10]} intensity={1.5} />
                            <pointLight position={[10, 0, 10]} intensity={0.5} />

                            {/* Main Model: Meeting Room */}
                            <MeetingRoom
                                position={[0, -5, -10]}
                                scale={0.6}
                                rotation={[0, 0, 0]}
                            />

                            {/* Three Technology Mascots */}
                            <ambientLight intensity={5} />
                            <Php position={[0, -5, -10]} scale={0.3} />
                            <ReactLogo position={[0,-5,-10]} scale={0.01} />
                            <JavaScript position={[0, -5, -6]} scale={20} />
                            <NodeJs position={[-3, -3, -12]} scale={20} />
                        </ErrorBoundary>
                    </Suspense>
                </Canvas>
            </div>

            {/* Bottom Button */}
            <div className="absolute bottom-7 w-full left-0 z-10 c-space">
                <a href="#about" className="w-fit">
                    <Button
                        name="Samen Werken"
                        isBeam
                        containerClass="sm:w-fit w-full sm:min-w-96"
                    />
                </a>
            </div>
        </section>
    );
};

export default Hero;