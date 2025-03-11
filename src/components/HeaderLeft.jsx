import React from 'react'
import image from '/public/image.jpg'
import { BiMoon, BiSun, BiCurrentLocation, BiEnvelope, BiPhone, BiLogoGithub, BiLogoLinkedin } from 'react-icons/bi'

const HeaderLeft = ({ darkMode, toggleDarkMode }) => {
    return (
        <div className="min-h-screen flex-1 relative p-10 transition-all duration-500 dark:bg-black dark:text-white sm:border-r dark:border-gray-700">
            <div className="flex flex-col gap-5">
                <div className="flex flex-col items-center justify-center gap-5">
                    <img src={image} alt="" className="w-32 rounded-full" />
                    <div className="text-center space-y-1">
                        <h1 className="text-4xl font-light">
                            Rafael <span className="font-semibold">Soares Martins</span>
                        </h1>
                        <h3 className="text-xl font-light"> Cyber Security Analyst Jr | Red Team | Pentester | DevSecOps</h3>
                    </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-5 border-b p-5 dark:border-gray-700">
                    <ul className="space-y-3">
                        <li className="flex items-center gap-2">
                            <BiCurrentLocation className="text-xl" />
                            <span>Sete Lagoas Minas Gerais</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <BiEnvelope className="text-xl" />
                            <span>RafaelSoares7l@gmail.com</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <BiPhone className="text-xl" />
                            <span>+5531995076523</span>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col items-start justify-start gap-5 border-b p-5 dark:border-gray-700">
                    <h1 className="text-base font-semibold md:text-2xl">SOCIAL</h1>
                    <ul className="space-y-3">
                        <li className="flex items-center gap-2">
                            <a href="https://github.com/rafasor" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                                <BiLogoGithub className="text-xl" />
                                <span>@rafasor</span>
                            </a>
                        </li>
                        <li className="flex items-center gap-2">
                            <a href="https://www.linkedin.com/in/rafael-soares-martins-330b8b1a1/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                                <BiLogoLinkedin className="text-xl" />
                                <span>Rafael Soares Martins</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col items-start justify-start gap-5 border-b p-5 dark:border-gray-700">
                    <h1 className="text-base font-semibold md:text-2xl">EDUCATION</h1>
                    <ul className="space-y-3">
                        <li className="relative flex flex-col gap-1 border-l p-6 before:absolute before:left-[-6px] before:top-1/2 before:h-3 before:w-3 before:translate-y-1/2 before:rounded-full before:bg-black dark:before:bg-white before:transform">
                            <span className="font-semibold md:text-lg">Ciência da Computação</span>
                            <span className="font-light">Centro Universitário Una</span>
                            <span className="text-sm text-gray-400">2021-2025</span>
                        </li>
                        <li className="relative flex flex-col gap-1 border-l p-6 before:absolute before:left-[-6px] before:top-1/2 before:h-3 before:w-3 before:translate-y-1/2 before:rounded-full before:bg-black dark:before:bg-white before:transform">
                            <span className="font-semibold md:text-lg">Técnico em Informática</span>
                            <span className="font-light">SENAC</span>
                            <span className="text-sm text-gray-400">2017-2018</span>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col items-start justify-start gap-5 border-b p-5 dark:border-gray-700">
                    <h1 className="text-base font-semibold md:text-2xl">SKILLS</h1>
                    <div className="flex flex-wrap gap-3">
                        <span className="rounded-xl bg-black text-white p-3 text-center dark:bg-white dark:text-black">Pentests</span>
                        <span className="rounded-xl bg-black text-white p-3 text-center dark:bg-white dark:text-black">Vulnerability Management</span>
                        <span className="rounded-xl bg-black text-white p-3 text-center dark:bg-white dark:text-black">DevSecOps</span>
                        <span className="rounded-xl bg-black text-white p-3 text-center dark:bg-white dark:text-black">Application Security</span>
                    </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-5 border-b p-5 dark:border-gray-700">
                    <h1 className="text-base font-semibold md:text-2xl">HOBBIES</h1>
                    <div className="flex flex-wrap gap-16 p-3">
                        <ul className="flex list-disc flex-col gap-3">
                            <li>Capoeira</li>
                            <li>Reading Books</li>
                            <li>Games</li>
                            <li>CTF - Capture The Flags</li>
                        </ul>
                    </div>
                </div>
                <div className='flex flex-col items-start justify-start gap-5 border-b p-5 dark:border-gray-700'>
                    <h1 className='text-base font-semibold md:text-2xl'>LANGUAGES</h1>
                    <ul className='flex list-disc flex-wrap gap-12 md:text-lg'>
                        <li>English</li>
                    </ul>
                </div>
                <div className="flex flex-col items-start justify-start gap-5 border-b p-5 dark:border-gray-700">
                    <h1 className="text-base font-semibold md:text-2xl">Extracurricular Activities</h1>
                    <ul className="space-y-3">
                        <li className="relative flex flex-col gap-1 border-l p-6 before:absolute before:left-[-6px] before:top-1/2 before:h-3 before:w-3 before:translate-y-1/2 before:rounded-full before:bg-black dark:before:bg-white before:transform">
                            <span className="font-semibold md:text-lg">Monitoria</span>
                            <span className="font-light"></span>
                            <span className="text-sm text-gray-400">Durante a faculdade, atuei como monitor na área de Segurança da Informação, com foco em Red Team. Minha função era auxiliar os alunos no aprendizado sobre cibersegurança, especialmente em técnicas de ataques simulados para testar a segurança de sistemas. Nessa atividade, desenvolvi habilidades em comunicação, análise de vulnerabilidades e uso de ferramentas de pentesting. A experiência me proporcionou uma visão mais profunda das ameaças cibernéticas e me permitiu colaborar com outros estudantes, contribuindo para um ambiente acadêmico mais seguro e preparado para os desafios da segurança digital.</span>
                        </li>
                    </ul>
                </div>
                <button className="absolute right-10 top-10" onClick={toggleDarkMode}>
                    {darkMode ? (
                        <BiSun className="text-2xl" />
                    ) : (
                        <BiMoon className="text-2xl" />
                    )}
                </button>
            </div>
        </div>
    )
}

export default HeaderLeft;