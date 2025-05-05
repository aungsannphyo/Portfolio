import Xallet from "@/public/projects/xallet.png"
import ShopDoora from "@/public/projects/shopDoora.png"
import SharPhway from "@/public/projects/sharphway.png"
import Vaccine from "@/public/projects/vaccine.jpg"
import Recycle from "@/public/projects/recycle.jpeg"
import IMMIN from "@/public/projects/immin.png"
import { Project } from "../types/project-type";

export const projects: Project[] = [
    {
        title: "Immin Investment Finance Super Stack",
        summary: "The Investment Finance Super Stack project integrates cutting-edge technologies, including blockchain, smart contracts, computer vision, and Large Language Models (LLMs) like GPT, to create a comprehensive solution for financial investment management.",
        responsibilities: [
            "Image Forgery Detection: Built an AI-driven forgery detection system using Python to identify AI-generated or photoshopped images upon user upload.",
            "Public & Private Mail Room Feature: Implemented a real-time update system in Flutter for both public announcements and individual private messages.",
            "Smart Contract Implementation: Developed an intuitive user interface in Flutter for interacting with blockchain-based smart contracts.",
            "Integrated the binding mail room feature with the backend using Quarkus Reactive Java Framework, ensuring seamless communication between the front end and backend.",
            "Developed backend APIs for the mail room feature, including the scheduling of periodic tasks for deleting old messages using Cron Job Scheduling with Java and Quarkus.",
            "Contributed to the implementation of key encryption and decryption features, ensuring secure data handling.",
            " Utilized Large Language Models (LLMs) to analyze resumes, extract key information, search browser for related data, and summarize the results to verify the authenticity of the person's details."
        ],
        techStack: ["Flutter", "Java", "GraphQL", "Python", "Docker", "MariaDB", "RethinkDB"],
        image: IMMIN,
        link: "https://immin.io/"
    },
    {
        title: " Xallet Cryptocurrency Wallet",
        summary: "A digital wallet solution that combines the security of Digital Wallet with the capabilities to invest and exchange.",
        responsibilities: [
            "Led the development of user-friendly interfaces for authorization, bank transfers (withdraw/deposit), and KYC verification processes.",
            "Developed and maintained core features of a secure digital wallet mobile application using React Native.",
            "Implemented real-time currency exchange functionality (e.g., BTC-USD, USD-ETH) with bi-directional conversion logic and up-to-date market rates.",
            "Built peer-to-peer transfer features, enabling users to send and receive balances seamlessly across wallets.",
            "Led the development of the onboarding flow, including identity verification and account setup with smooth UX.",
            "Developed a robust authentication system with secure token management and session handling.",
            "Implemented comprehensive error handling and validation to ensure app stability and user clarity across network and logic errors",
            "Integrated with GraphQL APIs to efficiently fetch and mutate financial and user data.",
            "Collaborated with the backend team (Node.js) to define and consume API endpoints.",
            "Implemented robust error handling and security best practices to protect user data and maintain platform reliability.",
            "Delivered high-quality, maintainable front-end code that contributed to the project’s successful and timely launch."
        ],
        techStack: ["React Native", "React", "GraphQL", "Node.js", "Docker", "MongoDB", "Redux"],
        image: Xallet,
        link: "https://xallet.swiss/"
    },
    {
        title: "ShopDoora (E-commerce)",
        summary: "A user-friendly online shopping platform offering a seamless shopping experience, secure payment options, and efficient order management, designed for both customers and business owners.",
        responsibilities: [
            "Led the front-end development of the Admin Dashboard, overseeing the implementation of customer-level management (Silver, Gold, Platinum) and authorization based on subscription packages (ShopDoora Lite, Standard, Pro, Enterprise).",
            "Reviewed and provided feedback on the code written by team members, ensuring high-quality standards and consistency across the project.",
            "Planned and structured the entire front-end architecture, including deciding on the frameworks, tools, and packages to be used for optimal performance and scalability.",
            "Collaborated closely with the backend team to integrate necessary APIs before project deadlines, ensuring seamless communication and efficient development flow."
        ],
        techStack: ["React", "Tailwind Css", "Redux", "RestApi"],
        image: ShopDoora,
        link: "https://www.shopdoora.com"

    },
    {
        title: "SharPhway",
        summary: "Using the Shar Phway App, we'll become detectives ourselves — searching for our own vehicles and also helping others.",
        responsibilities: [
            "Developed the admin dashboard and client-facing user interface for a vehicle lost-and-found platform (Motorcycles, Cars, TukTuks) in collaboration with local police forces.",
            "Built features for users to search and view reports of lost or found vehicles, enhancing public accessibility and real-time tracking.",
            "Implemented functionality for users to submit lost vehicle reports, including uploading vehicle details and descriptions.",
            "Enabled admins to manage cases and send notifications to users once their vehicles are found and verified.",
            "Ensured a responsive and user-friendly experience using React.js, with seamless API integration for real-time updates and secure data exchange."
        ],
        techStack: ["React", "RestApi", "Node.js", "Docker", "Redux"],
        image: SharPhway,
        link: "http://www.sharphway.com/"
    },
    {
        title: "Covid-19 Vaccine Tracking System",
        summary: "A Covid-19 vaccine tracking system to record users vaccination information",
        responsibilities: [
            "Developed a vaccine tracking system to record users vaccination information and generate a QR code for each vaccination.",
            "Implemented an automated process to issue electronic certificates post-vaccination, ensuring secure and accessible proof of vaccination.",
            "Integrated secure data storage and real-time updates for easy tracking of vaccination status.",
            "Led the front-end and back-end development of the vaccine tracking system, ensuring a seamless user experience and efficient data handling.",
            "Implemented form validation on both the front-end and back-end to ensure each user's data is unique and properly recorded.",
            "Developed Role-Based Authorization for different types of users, ensuring secure access and control over sensitive vaccination data.",
            "Managed WebSocket integration to send real-time alerts to users after their vaccination process was completed, improving user engagement and notification accuracy."
        ],
        techStack: ["React", "RestApi", "Node.js", "Docker", "Redux"],
        image: Vaccine,
        link: ""
    },
    {
        title: "Recycle Management System (RMS) ",
        summary: "To make business operations more convenient and smoother for Small and Medium-sized Enterprises business.",
        responsibilities: [
            "Led the development of the admin dashboard and mobile application for the Recycling Management System (RMS) using React and Flutter.",
            "Enabled admin users to manage user subscriptions and plans (monthly and yearly) for streamlined business operations.",
            "Implemented features for users to manage purchase and sale ledgers, track financial status (profit/loss), and print purchase/sale vouchers.",
            "Developed a mini HR system for users to make labor payments, monitor expenses, and manage inventory pricing (daily buy/sell price lists)."
        ],
        techStack: ["React", "Flutter", "Java", "MariaDB", "Riverpod", "Redux"],
        image: Recycle,
        link: ""
    },
];

