import React from 'react'
import Globe from "react-globe.gl";
import Button from "../components/Button.jsx";

const About = () => {
    const [copied, setCopied] = React.useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText("ict.ashraf1986@outlook.com");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    }

    return (
        <section className="c-space my-20" id="about">
            <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">

                {/* Intro */}
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain"/>
                        <div>
                            <p className="grid-headtext">
                                Hi, ik ben Ashraf
                            </p>
                            <p className="grid-subtext">
                                Student Digitale Vormgeving aan PXL met een sterke focus op front-end development.
                                Ik combineer designgevoel met technische kennis en werk doelgericht aan performante,
                                gebruiksvriendelijke webapplicaties.
                                Momenteel ben ik op zoek naar een stageplek waar ik mijn vaardigheden verder kan verdiepen
                                en echte impact kan maken binnen een professioneel team.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Front-End */}
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid2.png" alt="grid-2" className="w-full sm:w-[276px] h-fit object-contain"/>
                        <div>
                            <p className="grid-headtext">
                                Front-End Developer in Opleiding
                            </p>
                            <p className="grid-subtext">
                                Gespecialiseerd in het bouwen van moderne, responsieve webinterfaces met HTML, CSS en JavaScript.
                                Ervaring met frameworks zoals React en Vue, waarbij ik werk volgens component-based structuur.
                                Ik focus op clean code, performance en een sterke gebruikerservaring.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Globe */}
                <div className="col-span-1 xl:row-span-4">
                    <div className="grid-container">
                        <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
                            <Globe
                                height={326}
                                width={326}
                                globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
                                backgroundColor="rgba(0,0,0,0)"
                                backgroundImageOpacity={0.5}
                                showAtmosphere={true}
                                showGraticules={false}
                                labelsData={[{
                                    lat: 50.93,
                                    lng: 5.3325,
                                    text: 'Hier werk ik aan mijn toekomst',
                                    size: 20,
                                    color: 'white',
                                }]}
                            />
                        </div>
                        <div>
                            <p className="grid-headtext">
                                Beschikbaar voor Stage
                            </p>
                            <p className="grid-subtext">
                                Gevestigd in Hasselt, België en flexibel inzetbaar.
                                Ik ben gemotiveerd om mij volledig in te zetten binnen een professioneel team
                                waar ik kan bijleren, meedenken en verantwoordelijkheid opnemen.
                                Open voor zowel lokale als hybride samenwerkingen.
                            </p>
                        </div>
                        <a href="#contact">
                            <Button name="Neem Contact Op" isBeam containerClass="w-full mt-10 " />
                        </a>
                    </div>
                </div>

                {/* Skills */}
                <div className="xl:col-span-2 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain"/>
                        <div>
                            <p className="grid-headtext">
                                Coding Skills
                            </p>
                            <p className="grid-subtext">
                                Ervaring met HTML, CSS, JavaScript en PHP.
                                Daarnaast heb ik gewerkt met React, Vue, Laravel en WordPress (ACF, WooCommerce).
                                Ik heb ervaring met API-integraties, state management in React Native
                                en denk projectmatig over structuur, schaalbaarheid en onderhoudbaarheid.
                            </p>

                            <p className="grid-headtext">
                                Design Skills
                            </p>
                            <p className="grid-subtext">
                                Sterk gevoel voor visuele hiërarchie, typografie en UX.
                                Ervaring met Figma en Adobe tools zoals Photoshop en Illustrator.
                                Ik kan zowel ontwerpen als het design technisch correct en performant vertalen naar code.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Contact */}
                <div className="xl:col-span-1 xl:row-span-2">
                    <div className="grid-container">
                        <img src="/assets/grid4.png" alt="grid-4" className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top" />
                        <div className="space-y-2">
                            <p className="grid-subtext text-center">
                                Laten we samenwerken
                            </p>
                            <div className="copy-container" onClick={handleCopy}>
                                <img src={copied ? 'assets/tick.svg' : '/assets/copy.svg'} alt="copy"/>
                                <p className="lg:text-xl md:text-xl font-mono text-gray-gradient text-white">
                                    ict.ashraf1986@outlook.com
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default About
