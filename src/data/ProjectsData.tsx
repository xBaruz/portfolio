import ProjectInterface from "./ProjectInterface"
import taskManagmentSystem from "../assets/img/taskManagmentSystem.jpg";
import skiStore from "../assets/img/skiStore.jpg";
import reportApplication from "../assets/img/reportApplication.jpg";
import wolfIsland from "../assets/img/wolfIsland.jpg";
import intelligentHome from "../assets/img/intelligentHome.jpg";
import friendTag from "../assets/img/friendTag.jpg";
import carRepairShop from "../assets/img/carRepairShop.jpg";
import bookStore from "../assets/img/bookStore.jpg";
import secureShare from "../assets/img/secureShare/secureShare.jpg";
import helpDesk from "../assets/img/helpDesk.jpg";
import rocksVsMines from "../assets/img/rocksVsMines.jpg";
import medConnect from "../assets/img/medConnect.jpg";

import secureShare1 from "../assets/img/secureShare/secureShare1.jpg";
import secureShare2 from "../assets/img/secureShare/secureShare2.jpg";
import secureShare3 from "../assets/img/secureShare/secureShare3.jpg";
import secureShare4 from "../assets/img/secureShare/secureShare4.jpg";
import secureShare5 from "../assets/img/secureShare/secureShare5.jpg";

import medConnect1 from "../assets/img/medConnect/img1.jpg";
import medConnect2 from "../assets/img/medConnect/img2.jpg";
import medConnect3 from "../assets/img/medConnect/img3.jpg";
import medConnect4 from "../assets/img/medConnect/img4.jpg";
import medConnect5 from "../assets/img/medConnect/img5.jpg";
import medConnect6 from "../assets/img/medConnect/img6.jpg";

import hybridShop0 from "../assets/img/hybridshop/0.jpg";
import hybridShop1 from "../assets/img/hybridshop/1.jpg";
import hybridShop2 from "../assets/img/hybridshop/2.jpg";
import hybridShop3 from "../assets/img/hybridshop/3.jpg";
import hybridShop4 from "../assets/img/hybridshop/4.jpg";
import hybridShop5 from "../assets/img/hybridshop/5.jpg";
import hybridShop6 from "../assets/img/hybridshop/6.jpg";
import hybridShop7 from "../assets/img/hybridshop/7.jpg";
import hybridShop8 from "../assets/img/hybridshop/8.jpg";
import hybridShop9 from "../assets/img/hybridshop/9.jpg";
import hybridShop10 from "../assets/img/hybridshop/10.jpg";
import hybridShop11 from "../assets/img/hybridshop/11.jpg";

export const ProjectsData: ProjectInterface[] = [
  {
    id: "hybridshop",
    title: "HybridShop - Platforma E-Commerce",
    titleEn: "HybridShop - E-Commerce Platform",
    img: hybridShop0,
    github: "https://github.com/xBaruz/HybridShop",
    screenshots: [
      hybridShop1,
      hybridShop2,
      hybridShop3,
      hybridShop4,
      hybridShop5,
      hybridShop6,
      hybridShop7,
      hybridShop8,
      hybridShop9,
      hybridShop10,
      hybridShop11
    ],
    technologies: [
      "C#",
      "ASP.NET Core",
      "EF Core",
      "Microservices",
      "API Gateway (YARP)",
      "gRPC",
      "GraphQL",
      "REST API",
      "SignalR",
      "JWT",
      "RabbitMQ",
      "Outbox Pattern",
      "Redis",
      "PostgreSQL",
      "MongoDB",
      "MinIO (S3)",
      "Mailpit",
      "Docker"
    ],
    description: "Zaawansowany system sklepu internetowego podzielony na niezależne mikroserwisy. Każdy moduł, taki jak koszyk, powiadomienia czy katalog produktów, działa osobno i komunikuje się z pozostałymi usługami za pomocą szyny danych oraz gRPC.",
    descriptionEn: "An advanced online store divided into independent microservices. Each module, including the cart, notifications and product catalogue, runs independently and communicates with the remaining services through a message bus and gRPC.",
    features: [
      "Brama API Gateway YARP zarządzająca ruchem i przekierowaniami",
      "Logowanie i autoryzacja za pomocą tokenów JWT z podziałem na role",
      "Komunikacja międzyserwisowa przez gRPC oraz asynchroniczna przez RabbitMQ",
      "Elastyczne odpytywanie danych produktów dzięki GraphQL i HotChocolate",
      "Powiadomienia i czat na żywo wykorzystujące WebSockets oraz SignalR",
      "Cache koszyka i blokad magazynowych w bazie Redis",
      "Przechowywanie zdjęć produktów w chmurze obiektowej MinIO",
      "Automatyczna wysyłka wiadomości e-mail i obsługa procesu zamówień",
      "Testy bezpieczeństwa, jednostkowe i integracyjne"
    ],
    featuresEn: [
      "YARP API Gateway handling traffic and request routing",
      "JWT authentication and authorisation with role-based access",
      "Service-to-service communication through gRPC and asynchronous RabbitMQ messaging",
      "Flexible product queries with GraphQL and HotChocolate",
      "Real-time notifications and chat using WebSockets and SignalR",
      "Redis caching for shopping carts and inventory locks",
      "Product image storage in MinIO object storage",
      "Automated email delivery and order workflow handling",
      "Security, unit and integration tests"
    ]
  },
  {
    id: "medconnect",
    title: "MedConnect",
    titleEn: "MedConnect",
    img: medConnect,
    screenshots: [medConnect1, medConnect2, medConnect3, medConnect4, medConnect5, medConnect6],
    github: "https://github.com/xBaruz/MedConnect",
    technologies: [
      "C#",
      "ASP.NET Core",
      "GraphQL",
      "React Native",
      "Expo",
      "TypeScript",
      "JWT"
    ],
    description: "System dla placówek medycznych ułatwiający opiekę nad pacjentami. Składa się z backendu w .NET i aplikacji mobilnej, dzięki której lekarze i pielęgniarki mają natychmiastowy dostęp do danych z dowolnego miejsca.",
    descriptionEn: "A system for medical facilities that supports patient care. It consists of a .NET backend and a mobile application that gives doctors and nurses immediate access to data from any location.",
    features: [
      "API zbudowane w technologii GraphQL",
      "Aplikacja mobilna na iOS i Androida w React Native i Expo",
      "Zmiana statusu zdrowia pacjenta z poziomu telefonu",
      "Powiadomienia o pilnych zdarzeniach w czasie rzeczywistym",
      "Panel do dodawania i zarządzania personelem medycznym",
      "Bezpieczne logowanie z podziałem na role i uprawnienia"
    ],
    featuresEn: [
      "GraphQL-based API",
      "iOS and Android mobile application built with React Native and Expo",
      "Patient health status updates directly from a mobile device",
      "Real-time notifications for urgent events",
      "Medical staff management panel",
      "Secure authentication with roles and permissions"
    ]
  },
  {
    id: "secureshare-frontend",
    title: "SecureShare",
    titleEn: "SecureShare",
    img: secureShare,
    screenshots: [secureShare1, secureShare2, secureShare3, secureShare4, secureShare5],
    githubFrontend: "https://github.com/xBaruz/SecureShare-frontend",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS"
    ],
    description: "Aplikacja do bezpiecznego udostępniania i zarządzania plikami. Skupia się na wygodnym interfejsie oraz natychmiastowej weryfikacji uprawnień użytkowników i administratorów.",
    descriptionEn: "An application for securely sharing and managing files. It focuses on a convenient interface and immediate permission verification for users and administrators.",
    features: [
      "Bezpieczne logowanie z wykorzystaniem ciasteczek HttpOnly i architektury BFF",
      "Pełny moduł rejestracji, logowania oraz ochrona prywatnych stron",
      "Wysyłanie próśb o dostęp do zablokowanych plików",
      "Panel administratora do akceptowania lub odrzucania wniosków",
      "Nowoczesny i w pełni responsywny interfejs w Tailwind CSS"
    ],
    featuresEn: [
      "Secure authentication using HttpOnly cookies and a BFF architecture",
      "Complete registration and login flow with protected private pages",
      "Access requests for restricted files",
      "Administrator panel for approving or rejecting requests",
      "Modern and fully responsive Tailwind CSS interface"
    ]
  },
  {
    id: "helpdesk-ticket-system",
    title: "Helpdesk Ticket System",
    titleEn: "Helpdesk Ticket System",
    img: helpDesk,
    github: "https://github.com/xBaruz/helpdeskCloud",
    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "NextAuth.js",
      "Supabase",
      "PostgreSQL"
    ],
    description: "System do zgłaszania i rozwiązywania problemów technicznych. Pozwala użytkownikom opisać usterkę, a serwisantom sprawnie przydzielać zadania i zmieniać ich statusy.",
    descriptionEn: "A system for reporting and resolving technical issues. Users can describe a problem, while support staff can efficiently assign tickets and update their statuses.",
    features: [
      "Logowanie z podziałem na użytkowników, serwisantów i administratorów",
      "Tworzenie zgłoszeń, filtrowanie i zmiana statusów",
      "Panel roboczy dla pracowników wsparcia technicznego",
      "Baza PostgreSQL hostowana w chmurze Supabase"
    ],
    featuresEn: [
      "Authentication for users, support agents and administrators",
      "Ticket creation, filtering and status management",
      "Dedicated workspace for technical support staff",
      "PostgreSQL database hosted on Supabase"
    ]
  },
  {
    id: "task-management-system",
    title: "System Zarządzania Zadaniami",
    titleEn: "Task Management System",
    img: taskManagmentSystem,
    githubBackend: "https://github.com/xBaruz/SystemZarzadzania",
    githubFrontend: "https://github.com/xBaruz/SystemZarzadzaniaFrontend",
    technologies: [
      "Angular",
      "ASP.NET Core",
      "Entity Framework Core",
      "REST API",
      "MySQL",
      "Outbox Pattern",
      "SignalR",
      "Quartz.NET",
      "SMTP",
      "JWT",
      "Swagger"
    ],
    description: "Aplikacja dla zespołów do planowania i rozliczania codziennej pracy. Pozwala na bieżąco śledzić postępy w projektach i automatyzuje przypomnienia.",
    descriptionEn: "An application for teams to plan and track daily work. It provides continuous project progress monitoring and automates reminders.",
    features: [
      "Logowanie przez konto w systemie lub konto Google z OAuth2 i JWT",
      "Powiadomienia o zmianach w zadaniach na żywo dzięki SignalR",
      "Automatyczne wiadomości e-mail i przypomnienia wykonywane przez Quartz.NET",
      "Outbox Pattern zabezpieczający spójność podczas wysyłania wiadomości"
    ],
    featuresEn: [
      "Authentication with a local account or Google using OAuth2 and JWT",
      "Real-time task change notifications with SignalR",
      "Automated emails and reminders scheduled with Quartz.NET",
      "Outbox Pattern protecting consistency during message delivery"
    ]
  },
  {
    id: "ski-store",
    title: "Sklep Narciarski",
    titleEn: "Ski Store",
    img: skiStore,
    githubBackend: "https://github.com/xBaruz/SkiStore",
    githubFrontend: "https://github.com/xBaruz/SkiStore_frontend",
    technologies: [
      "React",
      "C#",
      "ASP.NET Core",
      "REST API",
      "EF Core",
      "PostgreSQL",
      "Docker",
      "JWT",
      "Swagger"
    ],
    description: "Klasyczny sklep internetowy ze sprzętem narciarskim, wyposażony w koszyk, katalog produktów oraz panel administracyjny do zarządzania asortymentem.",
    descriptionEn: "A traditional online store for skiing equipment with a shopping cart, product catalogue and administration panel for inventory management.",
    features: [
      "Logowanie i rejestracja klientów oraz obsługa konta administratora",
      "Katalog produktów z wyszukiwarką i filtrowaniem",
      "Dodawanie produktów do koszyka i składanie zamówień",
      "Panel administratora do edycji produktów i obsługi zamówień",
      "Środowisko przygotowane do uruchomienia w Dockerze"
    ],
    featuresEn: [
      "Customer registration and authentication with administrator accounts",
      "Product catalogue with search and filtering",
      "Shopping cart and order placement",
      "Administration panel for product and order management",
      "Docker-ready development environment"
    ]
  },
  {
    id: "report-application",
    title: "Aplikacja Raportowa",
    titleEn: "Reporting Application",
    img: reportApplication,
    githubBackend: "https://github.com/xBaruz/reportApplication",
    githubFrontend: "https://github.com/xBaruz/reportApplication",
    technologies: [
      "React",
      "ASP.NET Core",
      "C#",
      "SQL",
      "REST API",
      "Oracle Database",
      "ADO.NET"
    ],
    description: "Narzędzie do pobierania i czytelnego przedstawiania danych z bazy Oracle. Pomaga analizować wyniki i statystyki firmowe w formie wykresów i tabel.",
    descriptionEn: "A tool for retrieving and presenting data from an Oracle database. It supports analysis of business results and statistics through charts and tables.",
    features: [
      "Pulpit z najważniejszymi statystykami i podsumowaniami",
      "Interaktywne wykresy i tabele",
      "Filtrowanie, sortowanie oraz eksport raportów"
    ],
    featuresEn: [
      "Dashboard with key statistics and summaries",
      "Interactive charts and data tables",
      "Filtering, sorting and report export"
    ]
  },
  {
    id: "island-of-wolves",
    title: "Gra Symulacyjna „Wyspa Wilków”",
    titleEn: "Wolf Island Simulation Game",
    img: wolfIsland,
    github: "https://github.com/xBaruz/wyspawilkow",
    technologies: [
      "C++",
      "SFML",
      "OOP Design"
    ],
    description: "Dwuwymiarowa symulacja ekosystemu pokazująca zależności między drapieżnikami a ich ofiarami. Projekt został stworzony w C++ z wykorzystaniem biblioteki SFML.",
    descriptionEn: "A two-dimensional ecosystem simulation showing the relationship between predators and prey. The project was built in C++ with the SFML library.",
    features: [
      "Zmiana prędkości symulacji, resetowanie i dodawanie zwierząt",
      "Sztuczna inteligencja sterująca ruchem i zachowaniem wilków oraz królików",
      "Mechanizmy głodu, rozmnażania i starzenia",
      "Wykrywanie kolizji i kontaktów między obiektami",
      "Płynna dwuwymiarowa oprawa graficzna"
    ],
    featuresEn: [
      "Simulation speed controls, reset option and animal spawning",
      "Artificial intelligence controlling wolves and rabbits",
      "Hunger, reproduction and ageing mechanics",
      "Collision and interaction detection",
      "Smooth two-dimensional graphics"
    ]
  },
  {
    id: "intelligent-home",
    title: "Inteligentny Dom",
    titleEn: "Smart Home",
    img: intelligentHome,
    github: "https://github.com/xBaruz/Intelligent-Home",
    technologies: [
      "C++",
      "Qt"
    ],
    description: "Aplikacja desktopowa do sterowania urządzeniami domowymi. Pozwala symulować i zmieniać ustawienia temperatury, oświetlenia oraz rolet.",
    descriptionEn: "A desktop application for controlling household devices. It can simulate and adjust temperature, lighting and window blind settings.",
    features: [
      "Automatyczne wykrywanie i podłączanie nowych urządzeń",
      "Ustawianie temperatury i symulowanie jej zmian",
      "Sterowanie światłem, jasnością i kolorem",
      "Podnoszenie i opuszczanie rolet z wizualizacją stanu",
      "Osobne okno sterowania dla każdego urządzenia"
    ],
    featuresEn: [
      "Automatic detection and connection of new devices",
      "Temperature configuration and change simulation",
      "Lighting power, brightness and colour controls",
      "Window blind controls with state visualisation",
      "Dedicated control window for each device"
    ]
  },
  {
    id: "friend-tag",
    title: "Aplikacja Mobilna „FriendTag”",
    titleEn: "FriendTag Mobile Application",
    img: friendTag,
    githubFrontend: "https://github.com/xBaruz/FriendTag",
    githubBackend: "https://github.com/xBaruz/FriendTagBackend",
    technologies: [
      "Flutter",
      "Dart",
      "ASP.NET Core",
      "C#",
      "REST API",
      "Entity Framework Core",
      "MySQL",
      "Swagger"
    ],
    description: "Aplikacja mobilna pomagająca umawiać się ze znajomymi i organizować wydarzenia w okolicy.",
    descriptionEn: "A mobile application that helps users meet friends and organise nearby events.",
    features: [
      "Tworzenie profilu i rejestracja konta",
      "Tworzenie wydarzeń i dołączanie do spotkań",
      "Dodawanie znajomych i zarządzanie listą kontaktów",
      "Wyszukiwanie wydarzeń w pobliżu za pomocą GPS i mapy",
      "Czat w czasie rzeczywistym",
      "Dodawanie zdjęć z aparatu lub galerii"
    ],
    featuresEn: [
      "Profile creation and account registration",
      "Event creation and participation",
      "Friend and contact list management",
      "Nearby event discovery using GPS and maps",
      "Real-time chat",
      "Photo uploads from the camera or gallery"
    ]
  },
  {
    id: "car-repair-shop",
    title: "Warsztat Samochodowy",
    titleEn: "Car Repair Shop",
    img: carRepairShop,
    githubFrontend: "https://github.com/xBaruz/CarRepairShop",
    technologies: [
      "React",
      "HTML",
      "CSS"
    ],
    description: "Strona internetowa dla warsztatu samochodowego. Pozwala klientom rezerwować wizyty, a mechanikom zarządzać harmonogramem napraw.",
    descriptionEn: "A website for a car repair shop. Customers can book appointments, while mechanics can manage the repair schedule.",
    features: [
      "Formularz rezerwacji wizyty z wyborem usługi",
      "Lista zaplanowanych napraw i historia usług",
      "Panel mechanika do zmiany statusu naprawy",
      "Responsywne działanie na komputerach i urządzeniach mobilnych"
    ],
    featuresEn: [
      "Appointment booking form with service selection",
      "Scheduled repairs and service history",
      "Mechanic panel for repair status management",
      "Responsive desktop and mobile layout"
    ]
  },
  {
    id: "book-store",
    title: "Księgarnia Internetowa",
    titleEn: "Online Bookstore",
    img: bookStore,
    githubBackend: "https://github.com/iAttaquer/BookStore",
    technologies: [
      "C#",
      "ASP.NET Core",
      "REST API",
      "EF Core",
      "Docker",
      "PostgreSQL",
      "Outbox Pattern",
      "Dependency Injection",
      "Clean Architecture"
    ],
    description: "Backend księgarni internetowej zaprojektowany zgodnie z zasadami Clean Architecture, co ułatwia rozwój, testowanie i utrzymanie systemu.",
    descriptionEn: "An online bookstore backend designed according to Clean Architecture principles, making the system easier to extend, test and maintain.",
    features: [
      "Logowanie i sprawdzanie uprawnień użytkowników",
      "Zarządzanie książkami, kategoriami i stanami magazynowymi",
      "Opinie o książkach i obliczanie średniej oceny",
      "Powiadomienia e-mail po zakupie przez API Resend",
      "Zabezpieczenie spójności danych przy publikowaniu zdarzeń"
    ],
    featuresEn: [
      "User authentication and permission checks",
      "Book, category and inventory management",
      "Book reviews and average rating calculation",
      "Purchase confirmation emails through the Resend API",
      "Data consistency protection during event publishing"
    ]
  },
  {
    id: "rocks-vs-mines",
    title: "Rocks vs Mines Prediction",
    titleEn: "Rocks vs Mines Prediction",
    img: rocksVsMines,
    github: "https://github.com/xBaruz/RocksVsMines",
    technologies: [
      "Python",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "Machine Learning",
      "Logistic Regression"
    ],
    description: "Projekt z zakresu uczenia maszynowego. Model analizuje sygnały sonarowe i ocenia, czy wykryty pod wodą obiekt jest skałą, czy miną morską.",
    descriptionEn: "A machine learning project in which a model analyses sonar signals and predicts whether an underwater object is a rock or a naval mine.",
    features: [
      "Przygotowanie i czyszczenie danych sonarowych",
      "Trenowanie i dostrajanie modelu uczenia maszynowego",
      "Ocena dokładności i skuteczności klasyfikacji",
      "Skrypt do wykonywania predykcji dla nowych próbek"
    ],
    featuresEn: [
      "Sonar dataset preparation and cleaning",
      "Machine learning model training and tuning",
      "Classification accuracy and performance evaluation",
      "Prediction script for new samples"
    ]
  }
];

export const localizeProject = (
  project: ProjectInterface,
  language: 'pl' | 'en'
): { title: string; description: string; features: string[] } => {
  if (language === 'en') {
    return {
      title: project.titleEn || project.title,
      description: project.descriptionEn || project.description,
      features: project.featuresEn || project.features
    };
  }

  return {
    title: project.title,
    description: project.description,
    features: project.features
  };
};
