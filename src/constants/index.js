export const navLinks = [
    {
        id: 1,
        name: 'Home',
        href: '#home',
    },
    {
        id: 2,
        name: 'About',
        href: '#about',
    },
    {
        id: 3,
        name: 'Work',
        href: '#work',
    },
    {
        id: 4,
        name: 'Contact',
        href: '#contact',
    },
];
export const myProjects = [
    {
        title: 'MovieBox - Mobile Movie Discovery App',
        desc: 'MovieBox is a feature-rich mobile application that allows users to explore popular movies, view detailed information, and search for their favorite films. It provides a smooth and intuitive interface for browsing movie collections.',
        subdesc: 'Built with React Native and Tailwind CSS, MovieBox delivers a native-like experience across iOS and Android, with a focus on performance and sleek design.' ,
        texture: '/textures/project/project1.mp4',
        logo: '/assets/project-logo1.png',
        logoStyle: {
            backgroundColor: '#2A1816',
            border: '0.2px solid #36201D',
            boxShadow: '0px 0px 60px 0px #AA3C304D',
        },
        spotlight: '/assets/spotlight1.png',
    },
    {
        title: 'Postify - Simple Blog Platform',
        desc: 'Postify is a lightweight post management system that enables users to create, read, update, and delete blog posts effortlessly. It offers a clean and responsive interface for managing content.',
        subdesc: 'Developed with PHP Laravel and Bootstrap, Postify combines a powerful backend with a responsive frontend, ensuring smooth CRUD operations and a user-friendly experience.',
        texture: '/textures/project/project2.mp4',
        logo: '/assets/project-logo2.png',
        logoStyle: {
            backgroundColor: '#13202F',
            border: '0.2px solid #17293E',
            boxShadow: '0px 0px 60px 0px #2F6DB54D',
        },
        spotlight: '/assets/spotlight2.png',
    },
    {
        title: 'GadgetVue - Mobile E‑commerce App',
        desc: 'Gravity Maze is a 3D animated simulation of a ball falling through a series of obstacles, finally exiting through a hole at the bottom. It demonstrates realistic physics and dynamic motion.',
        subdesc:  'Crafted with Vue.js, Pinia for state management, and SASS for advanced styling, GadgetVue ensures a reactive and visually appealing interface for both iOS and Android users.',
        texture: '/textures/project/project3.mp4',
        logo: '/assets/project-logo3.png',
        logoStyle: {
            backgroundColor: '#60f5a1',
            background:
                'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
            border: '0.2px solid rgba(208, 213, 221, 1)',
            boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
        },
        spotlight: '/assets/spotlight3.png',
    },
    {
        title:  'Gravity Maze - 3D Obstacle Simulation',
        desc:  'Gravity Maze is a 3D animated simulation of a ball falling through a series of obstacles, finally exiting through a hole at the bottom. It demonstrates realistic physics and dynamic motion.',
        subdesc:
            'Created with Blender, this project leverages its physics engine and rendering tools to produce a captivating visual of object interaction and gravity-driven movement.',
        texture: '/textures/project/project4.mp4',
        logo: '/assets/project-logo4.png',
        logoStyle: {
            backgroundColor: '#0E1F38',
            border: '0.2px solid #0E2D58',
            boxShadow: '0px 0px 60px 0px #2F67B64D',
        },
        spotlight: '/assets/spotlight4.png',
    },
    {
        title: 'Celestial Beats - Music‑Driven Animation',
        desc:  'Celestial Beats is an animated music visualization featuring pyramids and the transition of sunlight to moonlight, synchronized with background music. It creates an immersive audio-visual experience.',
        subdesc:
            'Designed with Adobe After Effects, this project combines 3D animation, keyframe techniques, and audio syncing to bring a rhythmic day‑and‑night cycle to life.',
        texture: '/textures/project/project5.mp4',
        logo: '/assets/project-logo5.png',
        logoStyle: {
            backgroundColor: '#1C1A43',
            border: '0.2px solid #252262',
            boxShadow: '0px 0px 60px 0px #635BFF4D',
        },
        spotlight: '/assets/spotlight5.png',
    },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
        deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
        deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
        cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
        reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [1, 5, 0] : isTablet ? [5, 10, 0] : [8, 10, 0] ,
        ringPosition: isSmall ? [-5, -7, 0] : isMobile ? [-5, -5, 0] : isTablet ? [-6, -5, 0] : [-10, -5, 0],
        targetPosition: isSmall ? [-5, 0, -10] : isMobile ? [-5, 12, -10] : isTablet ? [-7, 13, -10] : [-8, 10, 0],
    };
};

