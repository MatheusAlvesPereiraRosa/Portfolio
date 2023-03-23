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
    //carrent,
    //jobit,
    //tripguide,
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
      title: "Desenvolvedor Web",
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
    },
    {
      title: "React Native Developer",
      company_name: "Tesla",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Shopify",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },*/
    {
      title: "Desenvolvedor Front-End (estagiário)",
      company_name: "Eveclass",
      icon: eveclass,
      iconBg: "#E6DEDD",
      date: "Mar 2022 - Agosto 2022",
      points: [
        "Atuei no desenvolvimento de componentes dinâmicos novos para o site da empresa, que era focado em vender plataformas (customizáveis) de ensino online para clientes interessados em começar a vender contéudo online de forma personalizada",
        "No desenvolvimento utilizei conhecimentos de Vue.js, Nuxt.js, javascript e typescript e stylus com preprocessador de CSS para a estilização dos componentes.",
        "Faziamos versionamento de código no github por meio de pull-requests que eram revisados pelos membros da equipe.",
        "Para reuniões e escritório virtual utilizavamos o gather e para a comunicação usavamos o slack e para divisão de tarefas utilizamos metodologias agéis como e scrum e kanban por meio do notion.",
      ],
    },
    {
      title: "Desenvolvedor Full-Stack / Designer / DB (bolsista do projeto)",
      company_name: "IFNMG - Campus Araçuaí",
      icon: ifnmg,
      iconBg: "#E6DEDD",
      date: "Abril 2021 - Janeiro 2022",
      points: [
        "Atuei na criação da plataforma AraCão desde seu planejamento, desing de interface, levantamento de requisitos",
        "No desenvolvimento utilizei conhecimentos de PHP, Boostrap, Javascript e Jquery para desenvolver a interfaces e as funcionalidades do site.",
        "Sobre o back-end do site ele foi feito 100% em PHP puro, com conexão com o banco de dados que foi feito em MySQL",
        "O versionamento do código foi feito no github por meio de pull-requests que eram revisados pelos membros da equipe (outros bolsistas do projeto).",
        "Fui o principal gerenciador do projeto junto de meu coordenador da área e outros coordenadores do projeto em que o site pretendia colaborar DIGITOOL-Corona",
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
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },*/
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
          name: "Css",
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
      source_code_link: "https://github.com/MatheusAlvesPereiraRosa/Teste-estagio-vue---nuxt",
    },
    {
      name: "Tour review",
      description:
        "Uma SPA simples que pode servir de componente para um projeto futuro que eu desenvolver. Foi feito utilizando react e estilização padrão de css puro",
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
          name: "Javascript",
          color: "pink-text-gradient",
        },
      ],
      image: tour,
      source_code_link: "https://tour-feed.netlify.app/",
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
      source_code_link: "https://landing-page-starbucks.netlify.app/",
    },
    {
      name: "Dev-challenge",
      description:
        "Um SPA que fiz recentemente para uma vaga de desenvolvedor front-end júnior para uma startup. O objetivo do desafio que foi proposta era de pegar dados de uma API que era oferecida a escolha do participante e mostrá-los na tela, devendo ainda ter que pesquisar os resultados",
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
          name: "Javascript",
          color: "pink-text-gradient",
        },
        {
          name: "Axios",
          color: "orange-text-gradient",
        },
        {
          name: "React-router-dom",
          color: "blue-text-gradient",
        },
      ],
      image: testeReact,
      source_code_link: "https://front-end-challenge-icount.netlify.app",
    },
    {
      name: "Review",
      description:
        "Uma SPA simples que pode servir de componente para um projeto futuro que eu desenvolver. Foi feito utilizando react e estilização padrão de css puro",
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
          name: "Javascript",
          color: "pink-text-gradient",
        },
      ],
      image: review,
      source_code_link: "https://front-end-challenge-icount.netlify.app",
    },
  ]; 
  
  export { services, technologies, experiences, testimonials, projects };