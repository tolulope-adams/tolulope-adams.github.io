export const hobbies = [
    { icon: "Utensils",   description: "A good loaf of bread" },
    { icon: "Cat",        description: "Cats" },
    { icon: "Users",      description: "Team-driven environment" },
    { icon: "Bird",       description: "Bird watching" },
    { icon: "Rocket",     description: "Launch day" },
    { icon: "Waves",      description: "Swimming" },
    { icon: "Target",     description: "Archery" },
    { icon: "Music",      description: "Music" },
];

export const featured_projects = [
    {
        image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&q=80",
        name: "TMDB",
        description:
            "A native Android app delivering rich information about celebrities, movies, and TV shows — including full cast & crew details, ratings, and trailers.",
        tags: ["Kotlin", "Jetpack Compose", "Firebase", "Retrofit", "MVVM"],
        github: "#",
        demo: "#",
    },
    {
        image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80",
        name: "Hablo",
        description:
            "A real-time mobile communication platform supporting HD video & voice calls, instant messaging, and group chats powered by Firebase Realtime Database.",
        tags: ["Kotlin", "Java", "Firebase", "Jetpack Compose", "WebRTC"],
        github: "#",
        demo: "#",
    },
    {
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
        name: "Hydrocarbon Reservoir Forecasting",
        description:
            "A data science project applying decline curve analysis and ML regression models to forecast oil & gas production output of hydrocarbon reservoirs.",
        tags: ["Python", "Numpy", "Pandas", "Scikit-Learn", "Matplotlib"],
        github: "#",
        demo: "#",
    },
];

export const featured_articles = [
    {
        image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&q=80",
        title: "End-to-End Testing an AI Application with Playwright and GitHub Actions",
        date_published: "Oct 31, 2024",
        url: "#",
    },
    {
        image: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?w=800&q=80",
        title: "Building Real-Time Features with Firebase and Jetpack Compose",
        date_published: "Sep 15, 2024",
        url: "#",
    },
    {
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
        title: "Architecting Clean Android Apps with MVVM and Hilt",
        date_published: "Aug 20, 2024",
        url: "#",
    },
];

export const experience = [
    {
        company: "Goldman Sachs",
        role: "Software Engineer",
        period: "Sep 2024 – Present",
        location: "Birmingham, United Kingdom",
        bullets: [
            "Collaborated within an agile four-person engineering team to build and deploy an event-driven microservices platform using Spring Boot and Apache Kafka, enabling same-day (T) regulatory reporting of Canadian debt securities transactions as part of the firm's expansion strategy into new markets",
            "Led the remediation of an error in the field generation logic of a critical data field within the firm’s Margin Lending transaction reporting system, delivering the fix within a 3-month regulatory committed timeline and mitigating the risk of FCA-imposed fines",
            "Leveraged generative AI to resolve SonarQube quality gate failures and increase code coverage across multiple reporting system codebases, ensuring alignment with the firm's 80% minimum code coverage requirement",
        ],
    },
    {
        company: "Goldman Sachs",
        role: "Software Engineer Intern",
        period: "Jun 2023 - Aug 2023",
        location: "Birmingham, United Kingdom",
        bullets: [
            "Developed a Java‑based library to automate REST API response comparison and highlight discrepancies, replacing manual checks and accelerating API migration process by 30% without compromising data integrity"
        ],
    },
    {
        company: "Goldman Sachs",
        role: "Software Engineer Intern",
        period: "Jun 2022 - Aug 2022",
        location: "Birmingham, United Kingdom",
        bullets: [
            "Designed and implemented a configuration‑driven, multithreaded Spring Boot service to replace manual data replication between production and test environments, improving throughput and reducing data replication time by up to 50%"
        ],
    },
    {
        company: "University of Lagos",
        role: "B.Sc. Petroleum Engineering",
        period: "Dec 2017 – Aug 2024",
        location: "Lagos, Nigeria",
        bullets: [
            "Graduated with a degree in Petroleum Engineering while teaching myself software development",
            "Conducted data science research on hydrocarbon reservoir production forecasting with Python.",
        ],
    },
];
