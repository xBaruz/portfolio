import taskManagmentSystem from "../../assets/projects/taskManagmentSystem.jpg";
import skiStore from "../../assets/projects/skiStore.jpg";
import reportApplication from "../../assets/projects/reportApplication.jpg";
import wolfIsland from "../../assets/projects/wolfIsland.jpg";
import intelligentHome from "../../assets/projects/intelligentHome.jpg";
import friendTag from "../../assets/projects/friendTag.jpg";
import carRepairShop from "../../assets/projects/carRepairShop.jpg";
import bookStore from "../../assets/projects/bookStore.jpg";
import secureShare from "../../assets/projects/secureShare/secureShare.jpg";
import helpDesk from "../../assets/projects/helpDesk.jpg";
import rocksVsMines from "../../assets/projects/rocksVsMines.jpg";
import medConnect from "../../assets/projects/medConnect.jpg";
import netPulse from "../../assets/projects/netPulse.jpg";

import secureShare1 from "../../assets/projects/secureShare/secureShare1.jpg";
import secureShare2 from "../../assets/projects/secureShare/secureShare2.jpg";
import secureShare3 from "../../assets/projects/secureShare/secureShare3.jpg";
import secureShare4 from "../../assets/projects/secureShare/secureShare4.jpg";
import secureShare5 from "../../assets/projects/secureShare/secureShare5.jpg";

import medConnect1 from "../../assets/projects/medConnect/img1.jpg";
import medConnect2 from "../../assets/projects/medConnect/img2.jpg";
import medConnect3 from "../../assets/projects/medConnect/img3.jpg";
import medConnect4 from "../../assets/projects/medConnect/img4.jpg";
import medConnect5 from "../../assets/projects/medConnect/img5.jpg";
import medConnect6 from "../../assets/projects/medConnect/img6.jpg";

import hybridShop0 from "../../assets/projects/hybridshop/0.jpg";
import hybridShop1 from "../../assets/projects/hybridshop/1.jpg";
import hybridShop2 from "../../assets/projects/hybridshop/2.jpg";
import hybridShop3 from "../../assets/projects/hybridshop/3.jpg";
import hybridShop4 from "../../assets/projects/hybridshop/4.jpg";
import hybridShop5 from "../../assets/projects/hybridshop/5.jpg";
import hybridShop6 from "../../assets/projects/hybridshop/6.jpg";
import hybridShop7 from "../../assets/projects/hybridshop/7.jpg";
import hybridShop8 from "../../assets/projects/hybridshop/8.jpg";
import hybridShop9 from "../../assets/projects/hybridshop/9.jpg";
import hybridShop10 from "../../assets/projects/hybridshop/10.jpg";
import hybridShop11 from "../../assets/projects/hybridshop/11.jpg";

import netpulse1 from "../../assets/projects/netPulse/1.jpg";
import netpulse2 from "../../assets/projects/netPulse/2.jpg";
import netpulse3 from "../../assets/projects/netPulse/3.jpg";
import netpulse4 from "../../assets/projects/netPulse/4.jpg";

export const ProjectsData = [
  {
    id: "netpulse-log-monitor",
    title: "NetPulse Log Monitor",
    img: netPulse,
    github: "https://github.com/xBaruz/NetPulse",
    screenshots: [
      netpulse1,
      netpulse2,
      netpulse3,
      netpulse4
    ],
    technologies: [
      "C#",
      ".NET 10",
      "Windows Service",
      "FileSystemWatcher",
      "Telegram Bot API",
      "SQLite",
      "Inno Setup",
      "Clean Architecture"
    ],
    description: "Usługa systemowa Windows przeznaczona do automatycznego i pasywnego monitorowania plików logów w czasie rzeczywistym z natychmiastowym powiadamianiem na platformie Telegram.",
    features: [
      "Praca w tle jako usługa systemowa z automatycznym startem przy uruchomieniu systemu",
      "Detekcja zmian w plikach logów w czasie rzeczywistym za pomocą FileSystemWatcher",
      "Błyskawiczne wysyłanie alertów o błędach na kanał Telegram przez Telegram Bot API",
      "Zapis zdarzeń do lokalnej bazy danych SQLite",
      "Automatyczna instalacja i konfiguracja usługi poprzez dedykowany instalator Inno Setup"
    ]
  },
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
      "Aplikacja mobilna na iOS i Androida w React Native i Expo",
      "Zmiana statusu zdrowia pacjenta z poziomu telefonu",
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
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS"
    ],
    description: "Aplikacja do bezpiecznego udostępniania i zarządzania plikami. Skupia się na wygodnym interfejsie oraz natychmiastowej weryfikacji uprawnień użytkowników i administratorów.",
    features: [
      "Bezpieczne logowanie z wykorzystaniem ciasteczek HttpOnly i architektury BFF",
      "Pełny moduł rejestracji, logowania oraz ochrona prywatnych stron",
      "Wysyłanie próśb o dostęp do zablokowanych plików",
      "Panel administratora do akceptowania lub odrzucania wniosków",
      "Nowoczesny i w pełni responsywny interfejs w Tailwind CSS"
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
      "Logowanie z podziałem na użytkowników, serwisantów i administratorów",
      "Tworzenie zgłoszeń, filtrowanie i zmiana statusów",
      "Panel roboczy dla pracowników wsparcia technicznego",
      "Baza PostgreSQL hostowana w chmurze Supabase"
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
    features: [
      "Logowanie przez konto w systemie lub konto Google z OAuth2 i JWT",
      "Powiadomienia o zmianach w zadaniach na żywo dzięki SignalR",
      "Automatyczne wiadomości e-mail i przypomnienia wykonywane przez Quartz.NET",
      "Outbox Pattern zabezpieczający spójność podczas wysyłania wiadomości"
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
      "REST API",
      "EF Core",
      "PostgreSQL",
      "Docker",
      "JWT",
      "Swagger"
    ],
    description: "Klasyczny sklep internetowy ze sprzętem narciarskim, wyposażony w koszyk, katalog produktów oraz panel administracyjny do zarządzania asortymentem.",
    features: [
      "Logowanie i rejestracja klientów oraz obsługa konta administratora",
      "Katalog produktów z wyszukiwarką i filtrowaniem",
      "Dodawanie produktów do koszyka i składanie zamówień",
      "Panel administratora do edycji produktów i obsługi zamówień",
      "Środowisko przygotowane do uruchomienia w Dockerze"
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
      "REST API",
      "Oracle Database",
      "ADO.NET"
    ],
    description: "Narzędzie do pobierania i czytelnego przedstawiania danych z bazy Oracle. Pomaga analizować wyniki i statystyki firmowe w formie wykresów i tabel.",
    features: [
      "Pulpit z najważniejszymi statystykami i podsumowaniami",
      "Interaktywne wykresy i tabele",
      "Filtrowanie, sortowanie oraz eksport raportów"
    ]
  },
  {
    id: "island-of-wolves",
    title: "Gra Symulacyjna „Wyspa Wilków”",
    img: wolfIsland,
    github: "https://github.com/xBaruz/wyspawilkow",
    technologies: [
      "C++",
      "SFML",
      "OOP Design"
    ],
    description: "Dwuwymiarowa symulacja ekosystemu pokazująca zależności między drapieżnikami a ich ofiarami. Projekt został stworzony w C++ z wykorzystaniem biblioteki SFML.",
    features: [
      "Zmiana prędkości symulacji, resetowanie i dodawanie zwierząt",
      "Sztuczna inteligencja sterująca ruchem i zachowaniem wilków oraz królików",
      "Mechanizmy głodu, rozmnażania i starzenia",
      "Wykrywanie kolizji i kontaktów między obiektami",
      "Płynna dwuwymiarowa oprawa graficzna"
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
    description: "Aplikacja desktopowa do sterowania urządzeniami domowymi. Pozwala symulować i zmieniać ustawienia temperatury, oświetlenia oraz rolet.",
    features: [
      "Automatyczne wykrywanie i podłączanie nowych urządzeń",
      "Ustawianie temperatury i symulowanie jej zmian",
      "Sterowanie światłem, jasnością i kolorem",
      "Podnoszenie i opuszczanie rolet z wizualizacją stanu",
      "Osobne okno sterowania dla każdego urządzenia"
    ]
  },
  {
    id: "friend-tag",
    title: "Aplikacja Mobilna „FriendTag”",
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
    features: [
      "Tworzenie profilu i rejestracja konta",
      "Tworzenie wydarzeń i dołączanie do spotkań",
      "Dodawanie znajomych i zarządzanie listą kontaktów",
      "Wyszukiwanie wydarzeń w pobliżu za pomocą GPS i mapy",
      "Czat w czasie rzeczywistym",
      "Dodawanie zdjęć z aparatu lub galerii"
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
    description: "Strona internetowa dla warsztatu samochodowego. Pozwala klientom rezerwować wizyty, a mechanikom zarządzać harmonogramem napraw.",
    features: [
      "Formularz rezerwacji wizyty z wyborem usługi",
      "Lista zaplanowanych napraw i historia usług",
      "Panel mechanika do zmiany statusu naprawy",
      "Responsywne działanie na komputerach i urządzeniach mobilnych"
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
      "REST API",
      "EF Core",
      "Docker",
      "PostgreSQL",
      "Outbox Pattern",
      "Dependency Injection",
      "Clean Architecture"
    ],
    description: "Backend księgarni internetowej zaprojektowany zgodnie z zasadami Clean Architecture, co ułatwia rozwój, testowanie i utrzymanie systemu.",
    features: [
      "Logowanie i sprawdzanie uprawnień użytkowników",
      "Zarządzanie książkami, kategoriami i stanami magazynowymi",
      "Opinie o książkach i obliczanie średniej oceny",
      "Powiadomienia e-mail po zakupie przez API Resend",
      "Zabezpieczenie spójności danych przy publikowaniu zdarzeń"
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
    description: "Projekt z zakresu uczenia maszynowego. Model analizuje sygnały sonarowe i ocenia, czy wykryty pod wodą obiekt jest skałą, czy miną morską.",
    features: [
      "Przygotowanie i czyszczenie danych sonarowych",
      "Trenowanie i dostrajanie modelu uczenia maszynowego",
      "Ocena dokładności i skuteczności klasyfikacji",
      "Skrypt do wykonywania predykcji dla nowych próbek"
    ]
  }
];

export const localizeProject = (project) => {
  return {
    title: project.title,
    description: project.description,
    features: project.features
  };
};