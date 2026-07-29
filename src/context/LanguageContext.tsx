import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

export type Language = 'pl' | 'en';

const translations = {
  pl: {
    'nav.about': 'O mnie',
    'nav.skills': 'Umiejętności',
    'nav.projects': 'Projekty',
    'nav.contact': 'Kontakt',
    'nav.lightTheme': 'Włącz jasny motyw',
    'nav.darkTheme': 'Włącz ciemny motyw',
    'nav.switchToEnglish': 'Zmień język na angielski',
    'nav.switchToPolish': 'Zmień język na polski',
    'loader.titleStart': 'Witaj na mojej',
    'loader.titleAccent': 'stronie internetowej',
    'loader.loading': 'Trwa ładowanie portfolio',
    'hero.badge': '✦ Portfolio',
    'hero.titleStart': 'Witaj na',
    'hero.titleAccent': 'mojej',
    'hero.titleEnd': 'stronie internetowej',
    'hero.description': 'To moje portfolio — znajdziesz tutaj projekty, które stworzyłem, technologie, z których korzystam na co dzień, oraz trochę informacji o mnie.',
    'hero.cv': 'Wyświetl CV',
    'about.title': 'O mnie',
    'about.tagline': 'Student informatyki',
    'about.description': 'Jestem studentem informatyki II stopnia na Politechnice Rzeszowskiej. Moje wykształcenie obejmuje tytuł inżyniera w zakresie inżynierii oprogramowania, a obecna specjalizacja koncentruje się na cyberbezpieczeństwie.',
    'about.age': 'Wiek',
    'about.location': 'Zamieszkanie',
    'about.locationValue': 'Rzeszów / Polska',
    'about.status': 'Status',
    'about.student': 'Student',
    'about.education': 'Wykształcenie',
    'about.present': 'obecnie',
    'about.university': 'Politechnika Rzeszowska im. Ignacego Łukasiewicza',
    'about.master': 'Studia II stopnia (magisterskie) — Informatyka',
    'about.masterSpecialization': 'Specjalizacja: Cyberbezpieczeństwo',
    'about.bachelor': 'Studia I stopnia (inżynierskie) — Informatyka',
    'about.bachelorSpecialization': 'Specjalizacja: Inżynieria oprogramowania',
    'about.technicalSchool': 'Technikum informatyczne',
    'about.technicalSchoolName': 'Zespół Szkół Technicznych im. Tadeusza Kościuszki w Leżajsku',
    'about.certificates': 'Certyfikaty i dyplomy',
    'about.vocationalDiploma': 'Dyplom kwalifikacji zawodowych',
    'about.engineerDiploma': 'Dyplom inżyniera',
    'about.ciscoCertificate': 'Cisco Academy: Network Security',
    'about.close': 'Zamknij',
    'about.enlargedCertificate': 'Powiększony certyfikat',
    'skills.title': 'Umiejętności',
    'skills.all': 'Wszystkie',
    'skills.frontend': 'Frontend',
    'skills.backend': 'Backend',
    'skills.databases': 'Bazy danych',
    'skills.devops': 'DevOps',
    'skills.systems': 'Systemy',
    'projects.title': 'Projekty',
    'projects.viewAll': 'Zobacz wszystko',
    'projects.viewProject': 'Zobacz projekt',
    'contact.title': 'Kontakt',
    'contact.formTitle': 'Wyślij e-mail',
    'contact.emailPlaceholder': 'Twój e-mail',
    'contact.messagePlaceholder': 'Wiadomość',
    'contact.sending': 'Wysyłanie...',
    'contact.send': 'Wyślij',
    'contact.getInTouch': 'Skontaktuj się',
    'contact.required': 'Wszystkie pola są wymagane.',
    'contact.success': 'Wiadomość została wysłana!',
    'contact.error': 'Wystąpił błąd, spróbuj ponownie.',
    'contact.codeAlt': 'Kod programu',
    'contact.earthAlt': 'Ziemia widziana z kosmosu',
    'footer.toTop': 'Do góry',
    'allProjects.back': 'Powrót do strony głównej',
    'allProjects.projectCode': 'Kod projektu',
    'allProjects.backendCode': 'Kod backendu',
    'allProjects.frontendCode': 'Kod frontendu',
    'allProjects.technologies': 'Technologie',
    'allProjects.features': 'Funkcje',
    'allProjects.previousImage': 'Poprzednie zdjęcie',
    'allProjects.nextImage': 'Następne zdjęcie',
    'allProjects.mainPreview': 'Podgląd główny',
    'allProjects.screenshot': 'Zrzut ekranu',
    'allProjects.closePreview': 'Zamknij podgląd',
    'allProjects.otherProjects': 'Inne projekty',
    'allProjects.viewProject': 'Zobacz projekt'
  },
  en: {
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    'nav.lightTheme': 'Enable light theme',
    'nav.darkTheme': 'Enable dark theme',
    'nav.switchToEnglish': 'Switch language to English',
    'nav.switchToPolish': 'Switch language to Polish',
    'loader.titleStart': 'Welcome to my',
    'loader.titleAccent': 'website',
    'loader.loading': 'Loading portfolio',
    'hero.badge': '✦ Portfolio',
    'hero.titleStart': 'Welcome to',
    'hero.titleAccent': 'my',
    'hero.titleEnd': 'website',
    'hero.description': 'This is my portfolio — here you can explore the projects I have built, the technologies I use every day, and learn a little more about me.',
    'hero.cv': 'View CV',
    'about.title': 'About me',
    'about.tagline': 'Computer Science student',
    'about.description': 'I am a Master’s student in Computer Science at Rzeszów University of Technology. I hold an engineering degree in Software Engineering, and my current specialisation focuses on Cybersecurity.',
    'about.age': 'Age',
    'about.location': 'Location',
    'about.locationValue': 'Rzeszów / Poland',
    'about.status': 'Status',
    'about.student': 'Student',
    'about.education': 'Education',
    'about.present': 'present',
    'about.university': 'Rzeszów University of Technology',
    'about.master': 'Master’s degree — Computer Science',
    'about.masterSpecialization': 'Specialisation: Cybersecurity',
    'about.bachelor': 'Bachelor of Engineering — Computer Science',
    'about.bachelorSpecialization': 'Specialisation: Software Engineering',
    'about.technicalSchool': 'IT Technical School',
    'about.technicalSchoolName': 'Tadeusz Kościuszko Technical School Complex in Leżajsk',
    'about.certificates': 'Certificates and diplomas',
    'about.vocationalDiploma': 'Vocational qualification diploma',
    'about.engineerDiploma': 'Bachelor of Engineering diploma',
    'about.ciscoCertificate': 'Cisco Academy: Network Security',
    'about.close': 'Close',
    'about.enlargedCertificate': 'Enlarged certificate',
    'skills.title': 'Skills',
    'skills.all': 'All',
    'skills.frontend': 'Frontend',
    'skills.backend': 'Backend',
    'skills.databases': 'Databases',
    'skills.devops': 'DevOps',
    'skills.systems': 'Operating systems',
    'projects.title': 'Projects',
    'projects.viewAll': 'View all',
    'projects.viewProject': 'View project',
    'contact.title': 'Contact',
    'contact.formTitle': 'Send an email',
    'contact.emailPlaceholder': 'Your email',
    'contact.messagePlaceholder': 'Message',
    'contact.sending': 'Sending...',
    'contact.send': 'Send',
    'contact.getInTouch': 'Get in touch',
    'contact.required': 'All fields are required.',
    'contact.success': 'Your message has been sent!',
    'contact.error': 'Something went wrong. Please try again.',
    'contact.codeAlt': 'Source code',
    'contact.earthAlt': 'Earth viewed from space',
    'footer.toTop': 'Back to top',
    'allProjects.back': 'Back to home',
    'allProjects.projectCode': 'Project code',
    'allProjects.backendCode': 'Backend code',
    'allProjects.frontendCode': 'Frontend code',
    'allProjects.technologies': 'Technologies',
    'allProjects.features': 'Features',
    'allProjects.previousImage': 'Previous image',
    'allProjects.nextImage': 'Next image',
    'allProjects.mainPreview': 'Main preview',
    'allProjects.screenshot': 'Screenshot',
    'allProjects.closePreview': 'Close preview',
    'allProjects.otherProjects': 'Other projects',
    'allProjects.viewProject': 'View project'
  }
} as const;

type TranslationKey = keyof typeof translations.pl;

interface LanguageContextValue {
  language: Language;
  setLanguage: (language: Language) => void;
  toggleLanguage: () => void;
  t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

const getInitialLanguage = (): Language => {
  try {
    const savedLanguage = localStorage.getItem('portfolio-language');
    if (savedLanguage === 'pl' || savedLanguage === 'en') {
      return savedLanguage;
    }
  } catch {
    return 'pl';
  }

  return 'pl';
};

export const LanguageProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(getInitialLanguage);

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = language === 'pl'
      ? 'Portfolio — Bartłomiej Mazurkiewicz'
      : 'Portfolio — Bartłomiej Mazurkiewicz';

    try {
      localStorage.setItem('portfolio-language', language);
    } catch {
      return;
    }
  }, [language]);

  const value = useMemo<LanguageContextValue>(() => ({
    language,
    setLanguage,
    toggleLanguage: () => setLanguage((current) => current === 'pl' ? 'en' : 'pl'),
    t: (key) => translations[language][key]
  }), [language]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextValue => {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }

  return context;
};
