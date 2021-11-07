export const skills = [
    {name: 'python', label: 'Python', type: 'technical', stars: 3},
    {name: 'javascript', label: 'Javascript', type: 'technical', stars: 4},
    {name: 'vue-2', label: 'Vue 2', type: 'technical', stars: 4},
    {name: 'vue-3', label: 'Vue 3', type: 'technical', stars: 3},
    {name: 'tailwind', label: 'TailwindCSS', type: 'technical', stars: 4},
    {name: 'node', label: 'Node.js', type: 'technical', stars: 3.5},
    {name: 'electron', label: 'Electron', type: 'technical', stars: 3.5},
    {name: 'strapi', label: 'Strapi', type: 'technical', stars: 3},
    {name: 'wordpress', label: 'Wordpress', type: 'technical', stars: 3},
    {name: 'agility', label: 'Agilité', type: 'project', stars: 3.5},
    {name: 'git', label: 'Git', type: 'technical', stars: 3.5},
    {name: 'gitlab', label: 'Gitlab', type: 'technical', stars: 3.5},
    {name: 'html', label: 'HTML', type: 'technical', stars: 4},
    {name: 'css', label: 'CSS/SCSS', type: 'technical', stars: 4},
    {name: 'nvc', label: 'Communication non violente', type: 'human', stars: 4},
    {name: 'creativity', label: 'Créativité', type: 'human'},
    {name: 'costing', label: 'Chiffrage', type: 'project'},
    {name: 'curiosity', label: 'Curiosité', type: 'human'},
    {name: 'responsability', label: 'Responsabilité', type: 'human'},
    {name: 'organisation', label: 'Organisation', type: 'human'},
    {name: 'critical-ming', label: 'Esprit critique', type: 'human'},
    {name: 'autonomy', label: 'Autonomie', type: 'human'},
    {name: 'team-spirit', label: `Esprit d'équipe`, type: 'human'},
    {name: 'customer-relationship', label: 'Relation client', type: 'project'},
    {name: 'quality', label: 'Qualité', type: 'project'},
    {name: 'automation', label: 'Industrialisation', type: 'project'},
    {name: 'planning', label: 'Planification', type: 'project'},
    {name: 'supervision', label: 'Encadrement', type: 'project'},
    {name: 'typescript', label: 'Typescript', type: 'technical', stars: 3},
    {name: 'graphql', label: 'GraphQL', type: 'technical', stars: 2},
    {name: 'react', label: 'React', type: 'technical', stars: 3},
    {name: 'gatsby', label: 'Gatsby', type: 'technical', stars: 2.5},
    {name: 'vite', label: 'Vite', type: 'technical', stars: 2.5},
    {name: 'styled-components', label: 'Styled Components', type: 'technical', stars: 3},
    {name: 'jest', label: 'Jest', stars: 2},
    {name: 'nuxt', label: 'Nuxt', stars: 3},
    {name: 'mongodb', label: 'Mongo DB', stars: 2.5},
    {name: 'iview', label: 'iView', stars: 4},
    {name: 'django', label: 'Django', stars: 2.5},
    {name: 'jquery', label: 'jQuery', stars: 3},
]

export const projects = [
    {
        name: 'Configurateur Guide Tiny House',
        creationYear: '2021',
        description: `Un configurateur qui propose en quelques clics un aperçu du coût d'une tiny house`,
        tags: ['React', 'Typescript', 'Styled Components'],
        url: 'https://configurateur.guide-tinyhouse.com/',
        githubUrl: 'https://github.com/ArthurBri/configurateur-tiny-house'
    },
    {
        name: 'Cat Name Creator',
        creationYear: '2021',
        description: `Créateur de nom de chats, complètement futile. Projet de travail sur le TDD + typescript avec Vue`,
        tags: ['Vue 3', 'Typescript', 'Jest', 'TDD', 'TailwindCSS'],
        logo: 'https://raw.githubusercontent.com/ArthurBri/cat-name-creator/master/src/assets/images/kitty.svg',
        url: 'https://cat-name-creator.netlify.app/',
        githubUrl: 'https://github.com/ArthurBri/cat-name-creator'
    },
    {
        name: 'Portfolio',
        creationYear: '2020',
        updateYear: '2021',
        description: `Présentation de mon profil, de mes compétences et de ma philosophie`,
        tags: ['Vue 3', 'Typescript', 'TailwindCSS', 'Vite'],
        logo: false,
        githubUrl: 'https://github.com/ArthurBri/arthur-briere'
    },
    {
        name: 'Vinaigre',
        creationYear: '2020',
        type: 'build',
        description: `Application de gestion des tâches quotidiennes`,
        logo: 'https://res.cloudinary.com/da4emp01n/image/upload/c_scale,w_200/v1602745084/logo-vinaigre_udqhxc.png',
        tags: ['Vue 3', 'Node.js', 'TailwindCSS']
    },
    {
        name: 'Compote',
        creationYear: '2020',
        type: 'private',
        description: `Init., dév et lead d'un projet d'industrialisation dans le domaine de la CCM`,
        logo: 'https://res.cloudinary.com/da4emp01n/image/upload/c_scale,w_200/v1602745430/logo_label_-_Copie_lmaip2.png',
        tags: ['Electron', 'Vue 2', 'Node.js', 'TailwindCSS', 'Element UI', 'Webpack']
    },
    {
        name: 'Onigi',
        creationYear: '2020',
        type: 'build',
        description: `Projet d'entraînement : plateforme de vente de producteurs locaux à consommateurs`,
        logo: 'https://res.cloudinary.com/da4emp01n/image/upload/c_scale,w_200/v1602745181/icon_coarni.png',
        tags: ['Vue 2', 'Nuxt', 'Strapi', 'Mongo DB', 'TailwindCSS', 'iView']
    },
    {
        name: 'MA Vitesse',
        creationYear: '2020',
        updateYear: '2021',
        type: 'public',
        description: `Outil de calcul intelligent de vitesse`,
        url: 'http://ma-vitesse-dev.herokuapp.com/',
        githubUrl: 'https://github.com/ArthurBri/ma-vitesse',
        logo: 'https://res.cloudinary.com/da4emp01n/image/upload/c_scale,w_10/v1602744686/logo.2e3abfc1_rscrzc.svg',
        tags: ['Vue 2', 'Mongo DB', 'TailwindCSS', 'Heroku', 'PWA']
    },
    {
        name: 'Geckoop',
        creationYear: '2019',
        type: 'public',
        description: `Outil de génération d'étiquettes pour l'épicerie coopérative rennaise Breizhicoop, via l'utilisation d'apis (ERP Odoo, OpenFoodFact)`,
        logo: 'https://res.cloudinary.com/da4emp01n/image/upload/c_scale,w_200/v1602744275/geckoop-logo_cyg625.png',
        url: 'https://geckoop-dev.breizhicoop.fr/',
        tags: ['Python', 'Django', 'jQuery', 'Bulma']
    },
    {
        name: 'Clinique du Droit Rouen',
        creationYear: '2017',
        type: 'public',
        description: `Mise en place d'un site web pour une association étudiante`,
        logo: 'https://res.cloudinary.com/da4emp01n/image/upload/c_scale,w_200/v1602744457/logo_CDR_na4viw.png',
        url: 'https://www.cliniquedudroitrouen.fr',
        tags: ['Wordpress']
    }
]

export const experiences = [
    {
        name: `Europ'Raid`,
        type: 'experience',
        year: '2017',
        description: `Récolte de 6000€ pour un 4L Trophy like à travers 23 pays d'Europe en 3 semaines.`,
        tags: ['Gestion de projet', 'Voyage']
    },
    {
        name: `Tutorat`,
        type: 'experience',
        year: '2020',
        description: `Tuteur de stage sur un projet initié en interne chez Sword.`,
        tags: ['Gestion de projet', `Travail d'équipe`]
    },
    {
        name: `Photographie`,
        type: 'interest',
        description: `Passion pour les couleurs, les formes et les harmonies. Photographies de voyage, de bâtiments ou de grand espaces.`
    },
    {
        name: `Minimalisme`,
        type: 'interest',
        description: `A la recherche de simplicité matérielle et dans mes projets numériques.`
    },
    {
        name: `Running`, 
        type: 'interest', 
        description: `Je cours régulièrement depuis plusieurs années, avec le projet de courir un marathon. Ca sera chose faite avec celui de Paris 2021.`},
    {
        name: `Culture tech`,
        type: 'interest',
        description: `Je suis les trends et me forme en continu. Actuellement en approfondissement sur Jest, TDD, et Typescript.`
    },
]

export const values = [
    {name: 'Bienveillance', importance: 5},
    {name: 'Curiosité', importance: 5},
    {name: 'Passion', importance: 5},
    {name: 'Durabilité', importance: 5},
    {name: 'Persévérance', importance: 5},
    {name: 'Écoute', importance: 5},
    {name: 'Équilibre', importance: 5},
    {name: 'Progression', importance: 5},
    {name: 'Patience', importance: 5},
    {name: 'Dynamisme', importance: 5},
    {name: 'Écologie', importance: 5},
    {name: 'Tentatives', importance: 5},
    {name: 'Résilience', importance: 5}
]

export const presentation = `
<h1>Bonsoir bonsoir</h1>
Je suis Arthur, développeur web plus à l'aise à apprendre seul qu'à l'école. Après 1 année d'apprentissage en autonomie, j'ai pris la casquette de développeur début 2021. En évoluant sur de nombreux petits et moyens side-projects, je progresse à ma manière et en continu, en touchant un peu à tout, tout en essayant d'être le plus pointu possible. Je n'hésite pas à tout remettre en question quand il s'agit de rendre les choses plus propres et durables.
<br /><br />Depuis plus de 3 ans, j'évolue dans des ESN dans sur sujets intéressants tant sur la relation client, le chiffrage ou l'accompagnement de dev moins expérimentés. Rien ne me stimule plus que de chercher à améliorer les choses en place, et j'adore avoir la liberté de le faire.
<br /><br />
`

export const presentation2 = `
Parce qu'il n'y a pas que la tech, j'aime le vélo, la course à pied, faire de la photo, et vadrouiller en train ou en van (aménagé par mes soins). J'aime apprendre des choses en tout genre, dans des domaines assez variés.
<br />
`
