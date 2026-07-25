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

export const ProjectsData : ProjectInterface[] = [
  {
    id: "hybridshop",
    title: "HybridShop - Platforma E-Commerce",
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
      "REST Api",
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
    description: "Zaawansowany system sklepu internetowego podzielony na niezależne mikroserwisy. Każdy moduł (np. koszyk, powiadomienia, katalog produktów) działa osobno i komunikuje się z resztą za pomocą szyny danych oraz gRPC.",
    features: [
      "Brama API Gateway (YARP) zarządzająca ruchem i przekierowaniami",
      "Logowanie i autoryzacja za pomocą tokenów JWT z podziałem na role",
      "Szybka komunikacja międzyserwisowa przez gRPC oraz asynchroniczna przez RabbitMQ",
      "Elastyczne odpytywanie o dane produktów dzięki GraphQL (HotChocolate)",
      "Powiadomienia i czat na żywo wykorzystujące WebSockets / SignalR",
      "Szybki cache dla koszyka i blokad magazynowych w bazie Redis",
      "Przechowywanie zdjęć produktów w chmurze obiektowej MinIO (S3 Compatible)",
      "Automatyczne wysyłanie e-maili i obsługa procesu zamówień z wykorzystaniem Mailpit",
      "Testy bezpieczeństwa, jednostkowe i integracyjne"
    ]
  },
  {
    id: "medconnect",
    title: "MedConnect",
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
    features: [
      "API zbudowane w technologii GraphQL",
      "Aplikacja mobilna na iOS i Androida (React Native + Expo)",
      "Szybka zmiana statusu zdrowia pacjenta z poziomu telefonu",
      "Powiadomienia o pilnych zdarzeniach w czasie rzeczywistym",
      "Panel do dodawania i zarządzania personelem medycznym",
      "Bezpieczne logowanie z podziałem na role i uprawnienia"
    ]
  },
  {
    id: "secureshare-frontend",
    title: "SecureShare",
    img: secureShare,
    screenshots: [secureShare1, secureShare2, secureShare3, secureShare4, secureShare5], 
    githubFrontend: "https://github.com/xBaruz/SecureShare-frontend",
    technologies: [
      "NextJs",
      "React",
      "TypeScript",
      "TailwindCSS"
    ],
    description: "Aplikacja do bezpiecznego udostępniania i zarządzania plikami. Skupia się na wygodnym interfejsie oraz natychmiastowej weryfikacji uprawnień użytkowników i administratorów.",
    features: [
      "Bezpieczne logowanie z wykorzystaniem ciasteczek HttpOnly (architektura BFF)",
      "Pełny moduł rejestracji, logowania oraz ochrona prywatnych stron",
      "Wysyłanie prośby o dostęp do zablokowanych plików przez użytkownika",
      "Panel administratora do akceptowania lub odrzucania wniosków o dostęp",
      "Nowoczesny, w pełni responsywny wygląd napisany w TailwindCSS"
    ]
  },
  {
    id: "helpdesk-ticket-system",
    title: "Helpdesk Ticket System",
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
    features: [
      "Logowanie z podziałem na zwykłych użytkowników, serwisantów i adminów",
      "Tworzenie zgłoszeń, ich filtrowanie i zmiana statusów na żywo",
      "Wygodny panel roboczy dla pracowników wsparcia technicznego",
      "Baza danych podłączona do chmury Supabase (PostgreSQL)"
    ]
  },
  {
    id: "task-management-system",
    title: "System Zarządzania Zadaniami",
    img: taskManagmentSystem,
    githubBackend: "https://github.com/xBaruz/SystemZarzadzania",
    githubFrontend: "https://github.com/xBaruz/SystemZarzadzaniaFrontend",
    technologies: [
      "Angular",
      "ASP.NET Core",
      "Entity Framework Core",
      "REST Api",
      "MySql",
      "Outbox pattern",
      "SignalR",
      "Quartz.NET",
      "SMTP",
      "JWT",
      "Swagger"
    ],
    description: "Aplikacja dla zespołów do planowania i rozliczania codziennej pracy. Pozwala na bieżąco śledzić postępy w projektach i automatyzuje przypomnienia.",
    features: [
      "Logowanie przez konto w systemie lub konto Google (OAuth2 / JWT)",
      "Powiadomienia o zmianach w zadaniach na żywo dzięki SignalR",
      "Automatyczne wysyłanie e-maili i przypomnień w tle (Quartz.NET)",
      "Zabezpieczenie przed utratą danych podczas wysyłania wiadomości (Outbox Pattern)"
    ]
  },
  {
    id: "ski-store",
    title: "Sklep Narciarski",
    img: skiStore,
    githubBackend: "https://github.com/xBaruz/SkiStore",
    githubFrontend: "https://github.com/xBaruz/SkiStore_frontend",
    technologies: [
      "React",
      "C#",
      "ASP.NET Core",
      "REST Api",
      "EF Core",
      "PostgreSQL",
      "Docker",
      "JWT",
      "Swagger"
    ],
    description: "Klasyczny sklep internetowy ze sprzętem narciarskim, wyposażony w koszyk, przeglądanie produktów oraz panel administracyjny do zarządzania asortymentem.",
    features: [
      "Logowanie i rejestracja klientów oraz obsługa konta admina",
      "Katalog produktów z wyszukiwarką i filtrowaniem po parametrach",
      "Dodawanie produktów do koszyka i składanie zamówień",
      "Panel administratora do edycji produktów i sprawdzania zamówień",
      "Całość przygotowana do szybkiego uruchomienia w Dockerze"
    ]
  },
  {
    id: "report-application",
    title: "Aplikacja Raportowa",
    img: reportApplication,
    githubBackend: "https://github.com/xBaruz/reportApplication",
    githubFrontend: "https://github.com/xBaruz/reportApplication",
    technologies: [
      "React",
      "ASP.NET Core",
      "C#",
      "SQL",
      "REST Api",
      "Oracle Database",
      "ADO.NET"
    ],
    description: "Narzędzie do pobierania i czytelnego przedstawiania danych z bazy Oracle. Pomaga analizować wyniki i statystyki firmowe w formie wykresów i tabel.",
    features: [
      "Główny pulpit z najważniejszymi statystykami i podsumowaniami",
      "Interaktywne wykresy oraz tabele z danymi",
      "Filtrowanie, sortowanie oraz eksport gotowych raportów"
    ]
  },
  {
    id: "island-of-wolves",
    title: "Gra Symulacyjna \"Wyspa Wilków\"",
    img: wolfIsland,
    github: "https://github.com/xBaruz/wyspawilkow",
    technologies: [
      "C++",
      "SFML",
      "OOP Design"
    ],
    description: "Dwuwymiarowa symulacja ekosystemu, pokazująca zależności między drapieżnikami a ich ofiarami. Projekt stworzony w C++ z grafiką SFML.",
    features: [
      "Możliwość zmiany prędkości symulacji, resetowania i dodawania zwierząt",
      "Prosta sztuczna inteligencja odpowiadająca za ruch i zachowanie wilków i królików",
      "Mechanizm głodu, rozmnażania i starzenia się zwierząt",
      "Sprawdzanie kolizji i kontaktów między obiektami na mapie",
      "Płynna oprawa graficzna w 2D"
    ]
  },
  {
    id: "intelligent-home",
    title: "Inteligentny Dom",
    img: intelligentHome,
    github: "https://github.com/xBaruz/Intelligent-Home",
    technologies: [
      "C++",
      "Qt"
    ],
    description: "Program na komputer do sterowania urządzeniami domowymi. Pozwala symulować i zmieniać ustawienia m.in. temperatury, oświetlenia czy rolet.",
    features: [
      "Automatyczne wykrywanie i podłączanie nowych urządzeń",
      "Ustawianie temperatury i symulowanie jej zmian w czasie",
      "Włączanie światła, zmiana jego jasności oraz koloru",
      "Podnoszenie i opuszczanie rolet z wizualizacją ich stanu",
      "Przejrzysty interfejs z osobnym okienkiem dla każdego sprzętu"
    ]
  },
  {
    id: "friend-tag",
    title: "Aplikacja Mobilna \"FriendTag\"",
    img: friendTag,
    githubFrontend: "https://github.com/xBaruz/FriendTag",
    githubBackend: "https://github.com/xBaruz/FriendTagBackend",
    technologies: [
      "Flutter",
      "Dart",
      "ASP.NET Core",
      "C#",
      "REST Api",
      "Entity Framework Core",
      "MySQL",
      "Swagger"
    ],
    description: "Aplikacja mobilna pomagająca w umawianiu się ze znajomymi na wspólne wyjścia i organizowaniu wydarzeń w okolicy.",
    features: [
      "Tworzenie własnego profilu i rejestracja konta",
      "Tworzenie wydarzeń i dołączanie do wyjść organizowanych przez innych",
      "Dodawanie znajomych i zarządzanie ich listą",
      "Używanie GPS i mapy do szukania wydarzeń w pobliżu",
      "Wbudowany czat do rozmawiania na żywo",
      "Możliwość dodawania zdjęć z aparatu lub galerii telefonu"
    ]
  },
  {
    id: "car-repair-shop",
    title: "Warsztat Samochodowy",
    img: carRepairShop,
    githubFrontend: "https://github.com/xBaruz/CarRepairShop",
    technologies: [
      "React",
      "HTML",
      "CSS"
    ],
    description: "Strona internetowa dla warsztatu samochodowego. Pozwala klientom wygodnie zarezerwować wizytę, a mechanikom zarządzać grafikiem napraw.",
    features: [
      "Formularz rezerwacji wizyty online z wyborem usługi",
      "Lista zaplanowanych napraw oraz historia wykonanych usług",
      "Panel dla mechanika do sprawdzania i zmiany statusu naprawy",
      "Wygodne działanie zarówno na komputerze, jak i na telefonie"
    ]
  },
  {
    id: "book-store",
    title: "Księgarnia Internetowa",
    img: bookStore,
    githubBackend: "https://github.com/iAttaquer/BookStore",
    technologies: [
      "C#",
      "ASP.NET Core",
      "REST Api",
      "EF Core",
      "Docker",
      "PostgreSQL",
      "Outbox Pattern",
      "Dependency Injection",
      "Clean Architecture"
    ],
    description: "Projekt backendowy księgarni napisany zgodnie z najlepszymi praktykami programistycznymi (Clean Architecture), zapewniający łatwe rozbudowywanie kodu.",
    features: [
      "System logowania i sprawdzania uprawnień użytkowników",
      "Zarządzanie książkami, kategoriami oraz stanem w magazynie",
      "Dodawanie opinii o książkach i liczenie średniej ocen",
      "Wysyłanie powiadomień e-mail po zakupie (przez API Resend)",
      "Zabezpieczenie spójności bazy danych przy wysyłce zdarzeń"
    ]
  },
  {
    id: "rocks-vs-mines",
    title: "Rocks vs Mines Prediction",
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
    description: "Projekt z zakresu uczenia maszynowego. Model analizuje sygnały z sonaru i ocenia, czy dany obiekt pod wodą to zwykła skała, czy mina morska.",
    features: [
      "Przygotowanie i czyszczenie danych z sygnałów sonarowych",
      "Wytrenowanie i dopracowanie modelu uczenia maszynowego",
      "Sprawdzenie dokładności i skuteczności wykrywania obiektów",
      "Gotowy skrypt do szybkiej oceny nowych próbek danych"
    ]
  }
]