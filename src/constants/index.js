import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    google,
    netlify,
    bootstrap,
    vue,
    nuxt,
    mysql,
    //figma,
    //docker,
    //meta,
    //starbucks,
    //tesla,
    //shopify,
    eveclass,
    ifnmg,
    kinterativa,
    intentus,
    //carrent,
    //jobit,
    //tripguide,
    tbot,
    vueshop,
    appremake,
    threejs,
    aracao,
    starbucksimg,
    testeNuxt,
    testeReact,
    review,
    tour,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Desenvolvedor Web/Mobile",
        icon: web,
    },
    {
        title: "Desenvolvedor Front-End",
        icon: mobile,
    },
    {
        title: "Desenvolvedor Backend",
        icon: backend,
    },
    {
        title: "Aspirante a Full-Stack",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "bootstrap",
        icon: bootstrap,
    },
    {
        name: "Vue",
        icon: vue,
    },
    {
        name: "Nuxt",
        icon: nuxt,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MySQL",
        icon: mysql,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
];

const experiences = [
    /*{
      title: "React.js Developer",
      company_name: "Starbucks",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },*/
    {
        title: "Desenvolvedor Fullstack",
        company_name: "Intentus Digital",
        icon: intentus,
        iconBg: "#E6DEDD",
        date: "Junho de 2024 - Julho de 2024",
        points: [
            "Atuei no planejamento e desenvolvimento de novos sistemas de clientes que a empresa oferece serviços de software. Utilizei conhecimentos de Front-end , Back-end e Banco de dados para realizar minhas tarefas.",
            "No que diz respeito a programação, utilizei linguagens/frameworks como Next, React, Javascript, Typescript, Nest, Strapi (scrapped), Directus (scrapped), TailwindCSS, Prisma, Postgres e SCSS para desenvolver as aplicações que estavam sendo produzidas comigo.",
            "Utilizávamos o Slack (como ferramenta de comunicação para reuniões breves, conversas, informações), Asana (para documentos e definição de tarefas) e Miro (para criação de diagramas e descrições mais visuais).",
        ],
    },
    {
        title: "Desenvolvedor Front-End",
        company_name: "K Interativa",
        icon: kinterativa,
        iconBg: "#E6DEDD",
        date: "Jan 2024 - Maio de 2024",
        points: [
            "Atuei no desenvolvimento e manutenção de sistemas de clientes que a empresa oferece serviços de software. Utilizo conhecimentos de Front-end e Back-end para realizar minhas tarefas.",
            "Fiz uso de Next, React, Angular, Bootstrap e SCSS para realizar modificações e atualizações em uma plataforma que utiliza conceitos de streaming, jogos de apostas e/ou jogos beneficentes sociais.",
            "Fazíamos o versionamento de código no github por meio de pull-requests que são revisados pelos membros da equipe.",
            "Para reuniões e comunicação, utilizávamos o discord como ferramenta de comunicação.",
        ],
    },
    {
        title: "Desenvolvedor Front-End (estagiário)",
        company_name: "Eveclass",
        icon: eveclass,
        iconBg: "#E6DEDD",
        date: "Mar 2022 - Agosto 2022",
        points: [
            "Atuei no desenvolvimento de componentes dinâmicos novos para o site da empresa, que era focado em vender plataformas (customizáveis) de ensino online para clientes interessados em começar a vender conteúdo online de forma personalizada.",
            "No desenvolvimento utilizei conhecimentos de Vue.js, Nuxt.js, javascript e typescript e stylus com pré processador de CSS para a estilização dos componentes.",
            "Fazíamos o versionamento de código no github por meio de pull-requests que eram revisados pelos membros da equipe.",
            "Para reuniões e escritório virtual utilizamos o gather e para a comunicação usávamos o slack e para divisão de tarefas utilizamos metodologias ágeis como e scrum e kanban por meio do notion.",
        ],
    },
    {
        title: "Desenvolvedor Full-Stack / Designer / DB (bolsista do projeto)",
        company_name: "IFNMG - Campus Araçuaí",
        icon: ifnmg,
        iconBg: "#E6DEDD",
        date: "Abril 2021 - Janeiro 2022",
        points: [
            "Atuei na criação da plataforma AraCão desde seu planejamento, design de interface, levantamento de requisitos.",
            "No desenvolvimento utilizei conhecimentos de PHP, Boostrap, Javascript e Jquery para desenvolver as interfaces e as funcionalidades do site.",
            "Sobre o back-end do site ele foi feito 100% em PHP puro, com conexão com o banco de dados que foi feito em MySQL.",
            "O versionamento do código foi feito no github por meio de pull-requests que eram revisados pelos membros da equipe (outros bolsistas do projeto).",
            "Fui o principal gerenciador do projeto junto de meu coordenador da área e outros coordenadores do projeto em que o site pretendia colaborar DIGITOOL-Corona.",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    /*{
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    */
    {
        name: "Tbot-challenge",
        description:
            "Um teste de um processo seletivo para uma Vaga Fullstack, o objetivo era copiar/espelhar a interface do telegram, assim como suas funcionalidades de receber conversas em tempo real, enviar mensagens, recuperar histórico de conversas, login e sign up e por fim, seleção de conversas",
        tags: [
            {
                name: "Vue.js",
                color: "blue-text-gradient",
            },
            {
                name: "Javascript",
                color: "orange-text-gradient",
            },
            {
                name: "TailwindCSS",
                color: "green-text-gradient",
            },
            {
                name: "Vuex",
                color: "pink-text-gradient",
            },
            {
                name: "Websocket",
                color: "orange-text-gradient",
            },
            {
                name: "Express",
                color: "blue-text-gradient",
            },
            {
                name: "Telegraf/TelegramAPI",
                color: "green-text-gradient",
            },
            {
                name: "Axios",
                color: "orange-text-gradient",
            },
            {
                name: "JWT",
                color: "pink-text-gradient",
            },
            {
                name: "MongoDB",
                color: "blue-text-gradient",
            },
            {
                name: "Webhook",
                color: "green-text-gradient",
            },
            {
                name: "Ngrok",
                color: "pink-text-gradient",
            },
        ],
        image: tbot,
        source_code_link: "https://github.com/MatheusAlvesPereiraRosa/tbot-challenger-front",
        source_code_link2: "https://github.com/MatheusAlvesPereiraRosa/tbot-challenger-back",
    },
    {
        name: "AraCão",
        description:
            "Foi um aplicação Web feita com PHP puro (tanto no cliente como no servidor) com conexão com banco de dados MySQL para salvar os diversos dados de cada uma das seções do site. Eu atuei em seu desenvolvimento desde de o design até seu desenvolvimento e deploy. Ele foi idealizado em um projeto de pesquisa e extensão do IFNMG em que participei",
        tags: [
            {
                name: "PHP",
                color: "blue-text-gradient",
            },
            {
                name: "Javascript",
                color: "green-text-gradient",
            },
            {
                name: "Jquery",
                color: "pink-text-gradient",
            },
            {
                name: "MySQL",
                color: "orange-text-gradient",
            },
            {
                name: "Bootstrap",
                color: "blue-text-gradient",
            },
            {
                name: "CSS",
                color: "green-text-gradient",
            },
            {
                name: "Google Maps API",
                color: "pink-text-gradient",
            },
            {
                name: "Tinymce",
                color: "orange-text-gradient",
            },
        ],
        image: aracao,
        web_link: "http://wisci.com.br/aracao/2/"
    },
    {
        name: "Game Center",
        description:
            "Um teste que de um processo seletivo para desenvolvedor Front-End, o objetivo era realizar a requisição para a API oferecida no desafio e retornar os dados na tela com filtro de pesquisa por nome e categoria, além de tratamento de erros vindos da requisição",
        tags: [
            {
                name: "React",
                color: "blue-text-gradient",
            },
            {
                name: "CSS",
                color: "green-text-gradient",
            },
            {
                name: "Typescript",
                color: "pink-text-gradient",
            },
            {
                name: "Motion",
                color: "orange-text-gradient",
            },
        ],
        image: appremake,
        source_code_link: "https://github.com/MatheusAlvesPereiraRosa/app-masters-remake",
        web_link: "https://game-center-remake.netlify.app/"
    },
    {
        name: "Vue Shop",
        description:
            "Nesse teste, a escolha sobre o que fazê-lo e como era livre, então decidi fazer uma loja virtual (baseado em outra aplicação que a empresa já tinha feito), englobando aspectos comuns como: filtros de pesquisa, carrinho virtual e cálculo de preço final. Escolhi fazer isso por ser algo que mostra domínio sobre a tecnologia e gerenciamento de estados",
        tags: [
            {
                name: "Vue.js",
                color: "blue-text-gradient",
            },
            {
                name: "TailwindCSS",
                color: "green-text-gradient",
            },
            {
                name: "Vuex",
                color: "pink-text-gradient",
            },
            {
                name: "Javascript",
                color: "orange-text-gradient",
            },
        ],
        image: vueshop,
        source_code_link: "https://github.com/MatheusAlvesPereiraRosa/STS-vue-challenge",
        web_link: "https://vue3-eshop.netlify.app/"
    },
    {
        name: "Teste de estágio (Nuxt.js)",
        description:
            "Foi um aplicação Web feita a partir do framwork Nuxt.js, que é feito em cima de Vue.js, para uma vaga que consegui como desenvolvedor estiário na eveclass. Foi passado um roteiro de um jogo de escolhas que deveria ser implementado e enviado para a avaliação",
        tags: [
            {
                name: "Nuxt",
                color: "blue-text-gradient",
            },
            {
                name: "CSS",
                color: "green-text-gradient",
            },
            {
                name: "Vue.js",
                color: "pink-text-gradient",
            },
            {
                name: "Javascript",
                color: "orange-text-gradient",
            },
        ],
        image: testeNuxt,
        source_code_link: "https://github.com/MatheusAlvesPereiraRosa/Teste-estagio-vue---nuxt",
        web_link: "https://teste-estagio-nuxt.netlify.app"
    },
    {
        name: "Starbucks",
        description:
            "É uma landing page que fiz em cima de um tutorial que achei no youtube quando estava estudando. Tem o tema do starbucks e tem um pouco de dinâmica que fiz com javascript puro",
        tags: [
            {
                name: "HTML",
                color: "blue-text-gradient",
            },
            {
                name: "CSS",
                color: "green-text-gradient",
            },
            {
                name: "Javascript",
                color: "pink-text-gradient",
            },
        ],
        image: starbucksimg,
        source_code_link: "https://github.com/MatheusAlvesPereiraRosa/Landing-page---starbucks",
        web_link: "https://landing-page-starbucks.netlify.app/"
    },

];

export { services, technologies, experiences, testimonials, projects };