import React from 'react';
import html2pdf from 'html2pdf.js';

const Home = () => {
    return (
        <div className='min-h-screen flex-[3] transition-all duration-500 dark:bg-black dark:text-white'>
            <div className='flex justify-end p-5'>
                <a 
                    href='/curriculo.pdf' 
                    download 
                    className='p-2 bg-black text-white rounded hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-300 transition-colors duration-300'
                >
                    Baixar Currículo
                </a>
            </div>
            <div id='pdf-content' className='flex max-w-[1000px] flex-col gap-10 p-5 md:mx-10 md:py-14'>
                <div className='space-y-5'>
                    <h1 className='text-2xl font-bold md:text-4xl'>Rafael Soares Martins</h1>
                    <h3 className='text-xl font-light'>Cyber Security Analyst Jr | Red Team | Pentester | DevSecOps</h3>
                    <ul className="space-y-3">
                        <li className="flex items-center gap-2">
                            <span>Sete Lagoas Minas Gerais</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <span>RafaelSoares7l@gmail.com</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <span>+5531995076523</span>
                        </li>
                    </ul>
                </div>
                <div className='space-y-5'>
                    <h1 className='text-2xl font-bold md:text-4xl'>About</h1>
                    <p className='text-sm text-gray-600 dark:text-gray-400 md:text-base'>
                        Apaixonado por tecnologia e hacking desde jovem, encontrei meu foco na segurança cibernética. especializando-se em ethical hacking, 
                        testes de penetração e mais, estou em constante evolução para enfrentar desafios atuais. Meu objetivo é contribuir para um mundo digital 
                        mais seguro e inovador
                    </p>
                </div>
                <div className='space-y-10'>
                    <h1 className='text-2xl font-bold md:text-4xl'>Experience</h1>
                    <div className='flex flex-col lg:flex-row lg:gap-20'>
                        <ul className="space-y-3">
                            <li className="relative flex flex-col gap-1 border-l p-6 before:absolute before:left-[-6px] before:top-1/2 before:h-3 before:w-3 before:translate-y-1/2 before:rounded-full before:bg-black dark:before:bg-white before:transform">
                                <span className="text-lg font-semibold">Analista de Segurança da Informação Junior</span>
                                <span className="font-light">Drogaria Araujo S/A | Belo Horizonte MG</span>
                                <span className="text-sm text-gray-400">2024/2025</span>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    • Gerenciamento de vulnerabilidades
                                    • Web Hacking e Pentesting em ambientes internos utilizando OWASP e OSSTMM como metodologias
                                    • Monitoramento de incidentes utilizando qRADAR(SIEM).
                                    • Contribuí na analise e gestão de vulnerabilidades em ambientes web
                                </p>
                            </li>
                            <li className="relative flex flex-col gap-1 border-l p-6 before:absolute before:left-[-6px] before:top-1/2 before:h-3 before:w-3 before:translate-y-1/2 before:rounded-full before:bg-black dark:before:bg-white before:transform">
                                <span className="text-lg font-semibold">Estagiário de Segurança da Informação</span>
                                <span className="font-light">Drogaria Araujo S/A | Belo Horizonte MG</span>
                                <span className="text-sm text-gray-400">2023-2024</span>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Integrei a equipe de Segurança Operacional (SOC), realizando análises de incidentes e gestão de acesso.
                                    • Executei testes de penetração em ambientes web e participei na gestão de acessos, assegurando a aplicação de políticas de segurança.
                                    • Monitorei atividades suspeitas e participei ativamente na resposta a incidentes.
                                    • Contribuí na analise e gestão de vulnerabilidades em ambientes web
                                </p>
                            </li>
                        </ul>
                        <ul className="space-y-3">
                            <li className="relative flex flex-col gap-1 border-l p-6 before:absolute before:left-[-6px] before:top-1/2 before:h-3 before:w-3 before:translate-y-1/2 before:rounded-full before:bg-black dark:before:bg-white before:transform">
                                <span className="text-lg font-semibold">Estagiário de TI</span>
                                <span className="font-light">Alghorit | Sete Lagoas MG</span>
                                <span className="text-sm text-gray-400">2016-2018</span>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Atuei no desenvolvimento de software com JavaScript, TypeScript e Angular.
                                    • Colaborei na documentação e testes de qualidade (QA), utilizando HTML e ferramentas de QA.
                                    • Participei da administração de servidores Linux e implementei práticas de segurança da informação
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='space-y-10'>
                    <h1 className='text-2xl font-bold md:text-4xl'>Certificates</h1>
                    <div className='space-y-10'>
                        <div className='text-baseline space-y-3'>
                            <h3 className='text-xl font-semibold md:text-lg'>DESEC Pentest Profissional (2024) </h3>
                            <p className='text-sm text-gray-600 dark:text-gray-400 md:text-base'>
                                curso de Pentest com foco em segurança cibernética, adquirindo conhecimento prático em testes de penetração, análise de vulnerabilidades e identificação de falhas de segurança em sistemas e redes. Durante o curso, desenvolvi habilidades no uso de ferramentas como Burp Suite, Metasploit, Nmap, e Wireshark para realizar testes de intrusão e análises detalhadas de riscos. Estudei os conceitos fundamentais de segurança da informação, incluindo normas como o OWASP Top 10 e técnicas de exploração de vulnerabilidades em aplicativos web e infraestrutura de redes. Motivado para aplicar e expandir meus conhecimentos adquiridos em um ambiente profissional, contribuindo para a segurança de sistemas e proteção de dados.
                            </p>
                        </div>
                    </div>
                    <div className='space-y-10'>
                        <div className='text-baseline space-y-3'>
                            <h3 className='text-xl font-semibold'>Crowsec Web Hacking na Prática 4.0 (2025) </h3>
                            <p className='text-sm text-gray-600 dark:text-gray-400 md:text-base'>
                                o curso Web Hacking na Prática do HackingClub, onde adquiri conhecimentos avançados em técnicas de exploração e defesa de aplicativos web. Durante o treinamento, desenvolvi habilidades práticas em identificar e explorar vulnerabilidades comuns, como SQL Injection, XSS (Cross-Site Scripting), CSRF (Cross-Site Request Forgery), File Inclusion, entre outras, usando ferramentas especializadas e abordagens manuais. O curso também me permitiu aplicar conceitos do OWASP Top 10 e realizar testes de penetração em ambientes controlados, com ênfase na ética e nas melhores práticas de segurança. Estou preparado para identificar, explorar e mitigar falhas em sistemas web, com foco na proteção de dados sensíveis e na melhoria da segurança de aplicações.
                            </p>
                        </div>
                    </div>
                    <div className='space-y-10'>
                        <div className='text-baseline space-y-3'>
                            <h3 className='text-xl font-semibold md:text-lg'>Labenu Web Full Stack (2021)</h3>
                            <p className='text-sm text-gray-600 dark:text-gray-400 md:text-base'>
                                Mais de 1000 horas de experiência. Esse é o curso de desenvolvimento Web Full Stack da Labenu. Isso tudo ao longo de 6 meses e com uma rotina de pelo menos 8 horas por dia. Além da parte técnica, também trabalhamos com metodologias ágeis, trabalhos em grupo e diversas outras habilidades socioemocionais.
                            </p>
                        </div>
                    </div>
                    <div className='space-y-10'>
                        <div className='text-baseline space-y-3'>
                            <h3 className='text-xl font-semibold md:text-lg'>Python do Básico ao Avançado (2022)</h3>
                            <p className='text-sm text-gray-600 dark:text-gray-400 md:text-base'>
                                Expressões Lambdas, Iteradores, Geradores, Orientação a Objetos.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;