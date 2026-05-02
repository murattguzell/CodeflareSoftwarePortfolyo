// Dil Verileri
const translations = {
    tr: {
        home: "Ana Sayfa",
        projects: "Projeler",
        contact: "İletişim",
        about: "Hakkımda",
        heroBio: "Yüksek performanslı ve kullanıcı dostu mobil uygulamalar geliştiriyorum. Modern teknolojiler ve en iyi uygulamalarla projeler hayata geçiriyorum.",
        viewProjects: "Projelerimi Gör",
        getInTouch: "Benimle İletişime Geç",
        projectsTitle: "Projeler",
        contactTitle: "İletişim",
        aboutTitle: "Hakkımda",
        contactDesc: "Benimle iletişime geçmek için aşağıdaki kanalları kullanabilirsiniz:",
        features: "Özellikler",
        technologies: "Kullanılan Teknolojiler",
        marketLink: "Market Linki",
        openApp: "Uygulamayı Aç",
        downloadGooglePlay: "Google Play'de İndir",
        downloadAppStore: "App Store'dan İndir",
        privacyPolicy: "Gizlilik Politikası",
        accountDeletion: "Hesap Silme",
        childSafety: "Çocuk Güvenliği",
        screenshots: "Ekran Görüntüleri",
        copyright: "© 2026 Codeflare Software. Tüm hakları saklıdır.",
        aboutBio: "Düzce Üniversitesi Yönetim Bilişim Sistemleri bölümünden Haziran 2025'te mezun oldum. Yazılım geliştirme yolculuğumda mobil uygulamalar üzerine yoğunlaştım ve kariyerime Android Developer olarak devam ediyorum. Mobil uygulama geliştirmeye duyduğum tutku, sürekli kendimi geliştirmemi ve yeni teknolojileri yakından takip etmemi sağlıyor.",
        galerkin: "Galerkin Engineering and Software",
        galerkinDesc: "Mezun olmadan önce, Mersin Teknopark'ta faaliyet gösteren Galerkin Engineering and Software şirketinde Android Developer olarak çalışmaya başladım. Burada Biocard adlı IoT tabanlı mobil uygulamanın uçtan uca geliştirilmesinde aktif rol aldım. Uygulamanın geliştirilmesi, yayınlanması ve uygulama içi satın alma (in-app purchase) sistemlerinin entegrasyonu dahil olmak üzere tüm süreçlerde yer aldım.",
        creamobile: "Creamobile",
        creamobileDesc: "Stajımı yine Mersin Teknopark'ta bulunan Creamobile şirketinde tamamladım. Bu süreçte Flutter ile üç farklı projede görev aldım ve geliştirme süreçlerine katkı sağladım. Ayrıca Flutter'a yeni başlayan bir geliştiriciye mentorluk yaparak teknik bilgi paylaşımında bulundum.",
        conclusion: "Mobil uygulama geliştirme süreçlerinde modern mimarilerle çalışmayı, performans odaklı çözümler üretmeyi ve kullanıcı deneyimini merkeze almayı öncelik haline getiriyorum."
    },
    en: {
        home: "Home",
        projects: "Projects",
        contact: "Contact",
        about: "About Me",
        heroBio: "I develop high-performance and user-friendly mobile applications. I bring projects to life with modern technologies and best practices.",
        viewProjects: "View My Projects",
        getInTouch: "Get In Touch",
        projectsTitle: "Projects",
        contactTitle: "Contact",
        aboutTitle: "About Me",
        contactDesc: "You can reach me through the following channels:",
        features: "Features",
        technologies: "Technologies Used",
        marketLink: "Market Link",
        openApp: "Open App",
        downloadGooglePlay: "Download on Google Play",
        downloadAppStore: "Download on App Store",
        privacyPolicy: "Privacy Policy",
        accountDeletion: "Account Deletion",
        childSafety: "Child Safety",
        screenshots: "Screenshots",
        copyright: "© 2026 Codeflare Software. All rights reserved.",
        aboutBio: "I graduated from Düzce University, Department of Management Information Systems in June 2025. Throughout my software development journey, I have focused on mobile applications and continue my career as an Android Developer. My passion for mobile application development drives me to constantly improve myself and stay closely updated with new technologies.",
        galerkin: "Galerkin Engineering and Software",
        galerkinDesc: "Before graduation, I started working as an Android Developer at Galerkin Engineering and Software, a company operating in Mersin Technopark. Here, I played an active role in the end-to-end development of Biocard, an IoT-based mobile application. I was involved in all processes including the application's development, release, and integration of in-app purchase systems.",
        creamobile: "Creamobile",
        creamobileDesc: "I completed my internship at Creamobile, also located in Mersin Technopark. During this period, I worked on three different projects with Flutter and contributed to the development processes. Additionally, I mentored a developer new to Flutter, sharing technical knowledge and best practices.",
        conclusion: "In mobile application development processes, I prioritize working with modern architectures, producing performance-oriented solutions, and placing user experience at the center of everything I do."
    }
};

// Proje Verileri
const projects = [
    {
        id: 0,
        titleTr: "Nightlink",
        titleEn: "Nightlink",
        descTr: "Anonim Sosyal Medya Uygulaması",
        descEn: "Anonymous Social Media Application",
        detailTr: "NightLink, kullanıcıların gece saatlerinde düşüncelerini, duygularını, itiraflarını ve anlık paylaşımlarını anonim olarak paylaşabildiği sosyal bir mobil uygulamadır. Uygulama, kullanıcıların gerçek isim veya telefon numarası kullanmadan kendilerini daha rahat ifade edebilmelerini amaçlar. NightLink'te kullanıcılar yalnızca belirli gece saatlerinde paylaşım yapabilir. Bu paylaşımlar sabah otomatik olarak kaybolur. Böylece uygulama, geçici, samimi ve baskısız bir anonim paylaşım deneyimi sunar.",
        detailEn: "NightLink is a social mobile application where users can anonymously share their thoughts, feelings, confessions, and instant posts during nighttime hours. The app aims to allow users to express themselves more comfortably without using real names or phone numbers. In NightLink, users can only post during specific night hours. These posts automatically disappear in the morning. Thus, the app provides a temporary, intimate, and pressure-free anonymous sharing experience.",
        image: "nightlink_resim/nightlink_icon.png",
        screenshots: [
            "nightlink_resim/n1.png",
            "nightlink_resim/n2.png",
            "nightlink_resim/n3.png",
            "nightlink_resim/n4.png",
            "nightlink_resim/n5.png",
            "nightlink_resim/n6.png",
            "nightlink_resim/n7.png",
            "nightlink_resim/n9.png"
        ],
        featuresTr: [
            "Anonim Gece Paylaşımları",
            "Zaman Sınırlı Paylaşım Sistemi",
            "Anonim Mesajlaşma",
            "Yakındaki İnsanlarla Bağlantı Kurma",
            "Yorum ve Etkileşim Sistemi",
            "Raporlama ve Engelleme Sistemi",
            "Güvenli Anonim Ortam",
            "Premium Üyelik Sistemi"
        ],
        featuresEn: [
            "Anonymous Night Posts",
            "Time-Limited Sharing System",
            "Anonymous Messaging",
            "Connect with Nearby People",
            "Comment and Interaction System",
            "Reporting and Blocking System",
            "Secure Anonymous Environment",
            "Premium Membership System"
        ],
        techTr: ["Kotlin", "MVVM", "Clean Architecture", "Repository Pattern", "UseCase Layer"],
        techEn: ["Kotlin", "MVVM", "Clean Architecture", "Repository Pattern", "UseCase Layer"],
        linkTr: "https://play.google.com/store/apps/details?id=com.muratguzel.nightlink",
        linkEn: "https://play.google.com/store/apps/details?id=com.muratguzel.nightlink",
        storeType: "googleplay"
    },
    {
        id: 1,
        titleTr: "Nexa Trainer & Clients",
        titleEn: "Nexa Trainer & Clients",
        descTr: "Danışan Takip Uygulaması",
        descEn: "Client Tracking Application",
        detailTr: "Nexa, antrenörlerin danışanlarını daha kolay yönetebilmesi ve tüm koçluk sürecini tek bir platform üzerinden takip edebilmesi için geliştirilmiş bir mobil koçluk uygulamasıdır. Uygulama sayesinde antrenörler danışanlarını yönetebilir, kişiye özel antrenman ve beslenme planları oluşturabilir, ölçüm ve ilerleme takibi yapabilir, seanslarını ajanda üzerinden planlayabilir ve danışanlarıyla uygulama içinden iletişim kurabilir. Danışanlar ise antrenörleri tarafından hazırlanan programları takip edebilir, kendi ölçümlerini ve gelişim süreçlerini görüntüleyebilir, seanslarını kontrol edebilir ve antrenörleriyle kolayca iletişimde kalabilir. Nexa, modern ve sade arayüzüyle antrenör-danışan ilişkisini dijitalleştirerek koçluk sürecini daha düzenli, takip edilebilir ve yönetilebilir hale getirir.",
        detailEn: "Nexa is a mobile coaching application developed to help trainers manage their clients more easily and track the entire coaching process from a single platform. Through the application, trainers can manage their clients, create personalized training and nutrition plans, track measurements and progress, schedule their sessions through the calendar, and communicate with their clients within the app. Clients can follow the programs prepared by their trainers, view their own measurements and development processes, check their sessions, and easily stay in touch with their trainers. Nexa digitalizes the trainer-client relationship with its modern and simple interface, making the coaching process more organized, trackable and manageable.",
        image: "nexa_resim/nexa_icon.png",
        screenshots: [
            "nexa_resim/1.png",
            "nexa_resim/2.png",
            "nexa_resim/3.png",
            "nexa_resim/4.png",
            "nexa_resim/5.png",
            "nexa_resim/6.png",
            "nexa_resim/7.png"
        ],
        featuresTr: [
            "Danışan Yönetimi",
            "İlerleme ve Ölçüm Takibi",
            "Antrenman Planlama",
            "Beslenme Planlama",
            "Ajanda ve Seans Yönetimi",
            "Mesajlaşma ve İletişim",
            "Detaylı Analizler",
            "QR ile Hızlı Eşleşme",
            "Modern ve Sade Arayüz",
            "Çok Platformlu Yapı"
        ],
        featuresEn: [
            "Client Management",
            "Progress and Measurement Tracking",
            "Training Planning",
            "Nutrition Planning",
            "Calendar and Session Management",
            "Messaging and Communication",
            "Detailed Analytics",
            "Quick Pairing with QR",
            "Modern and Clean Interface",
            "Multi-Platform Structure"
        ],
        techTr: [
            "Kotlin Multiplatform",
            "Compose Multiplatform", 
            "MVVM",
            "Clean Architecture",
            "Supabase",
            "Ktor",
            "RevenueCat",
            "Material 3",
            "Decompose"
        ],
        techEn: [
            "Kotlin Multiplatform",
            "Compose Multiplatform",
            "MVVM", 
            "Clean Architecture",
            "Supabase",
            "Ktor",
            "RevenueCat",
            "Material 3",
            "Decompose"
        ],
        linkTr: "https://play.google.com/store/apps/details?id=com.muratguzel.nexa",
        linkEn: "https://play.google.com/store/apps/details?id=com.muratguzel.nexa",
        storeType: "both"
    },
    {
        id: 2,
        titleTr: "LoveTalkAI Flirt Asistan",
        titleEn: "LoveTalkAI Flirt Assistant",
        descTr: "Yapay Zekâ Destekli Flört Asistanı",
        descEn: "AI-Powered Dating Assistant",
        detailTr: "LoveTalkAI, kullanıcıların flört ve sosyal medya konuşmalarında daha etkili, doğal ve özgüvenli mesajlar yazabilmesi için geliştirilmiş yapay zekâ destekli bir mobil uygulamadır. Uygulama; karşı tarafın mesajlarını, hikayelerini ve konuşma akışını analiz ederek kullanıcının seçtiği platforma ve iletişim tarzına uygun mesaj önerileri üretir. Böylece kullanıcılar 'ne yazsam?' düşüncesiyle vakit kaybetmeden, bulunduğu duruma uygun doğal cevaplar oluşturabilir. LoveTalkAI; mesaj cevaplama, hikayeye yanıt üretme, konuşma başlatmak için buz kırıcı mesajlar oluşturma ve konuşma analizi gibi özellikleri tek bir platformda sunar. Kullanıcılar seçtikleri vibe'a göre romantik, eğlenceli, cool, flörtöz veya daha cesur mesaj önerileri alabilir.",
        detailEn: "LoveTalkAI is an AI-powered mobile application developed to help users write more effective, natural and confident messages in dating and social media conversations. The app analyzes the other person's messages, stories and conversation flow to generate message suggestions suitable for the user's chosen platform and communication style. This way, users can create natural responses appropriate to their situation without wasting time thinking 'what should I write?'. LoveTalkAI offers features such as message replies, story response generation, ice-breaker messages to start conversations, and conversation analysis all in one platform. Users can receive romantic, fun, cool, flirty or bolder message suggestions based on their chosen vibe.",
        image: "lovetalkai_resim/lovetalkai_icon.png",
        screenshots: [
            "lovetalkai_resim/1.png",
            "lovetalkai_resim/2.png",
            "lovetalkai_resim/3.png",
            "lovetalkai_resim/4.png",
            "lovetalkai_resim/5.png"
        ],
        featuresTr: [
            "Akıllı Mesaj Önerileri",
            "Hikaye Yanıtları",
            "Buz Kırıcı Mesajlar",
            "Konuşma Analizi",
            "Vibe Seçimi",
            "3 Alternatif Mesaj Önerisi",
            "Platforma Uygun Yanıtlar",
            "Kopyala ve Kullan Deneyimi",
            "Kullanım Bazlı Coin Sistemi",
            "Abonelik ve Premium Yapı"
        ],
        featuresEn: [
            "Smart Message Suggestions",
            "Story Replies",
            "Ice-Breaker Messages",
            "Conversation Analysis",
            "Vibe Selection",
            "3 Alternative Message Suggestions",
            "Platform-Specific Responses",
            "Copy and Use Experience",
            "Usage-Based Coin System",
            "Subscription and Premium Structure"
        ],
        techTr: [
            "Kotlin Multiplatform",
            "Compose Multiplatform",
            "MVVM",
            "Clean Architecture",
            "Supabase",
            "Ktor",
            "RevenueCat",
            "Material 3",
            "Decompose"
        ],
        techEn: [
            "Kotlin Multiplatform",
            "Compose Multiplatform",
            "MVVM",
            "Clean Architecture",
            "Supabase",
            "Ktor",
            "RevenueCat",
            "Material 3",
            "Decompose"
        ],
        linkTr: "https://play.google.com/store/apps/details?id=com.muratguzel.lovetalkai",
        linkEn: "https://play.google.com/store/apps/details?id=com.muratguzel.lovetalkai",
        storeType: "googleplay"
    }
];

// Mevcut Dil
let currentLanguage = 'tr';

// Dil Değiştirme
document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const lang = btn.getAttribute('data-lang');
        changeLanguage(lang);
    });
});

function changeLanguage(lang) {
    currentLanguage = lang;
    
    // Aktif buton güncelle
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-lang="${lang}"]`).classList.add('active');
    
    // Sayfayı güncelle
    updatePageLanguage();
    
    // LocalStorage'a kaydet
    localStorage.setItem('preferredLanguage', lang);
}

function updatePageLanguage() {
    const t = translations[currentLanguage];
    
    // Nav linklerini güncelle
    document.querySelectorAll('.nav-link').forEach(link => {
        const key = link.getAttribute('href').substring(1);
        if (t[key]) {
            link.textContent = t[key];
        }
    });
    
    // Hero bio
    const heroBio = document.getElementById('heroBio');
    if (heroBio) {
        heroBio.textContent = t.heroBio;
    }
    
    // CTA Butonları
    document.querySelectorAll('.cta-buttons .btn').forEach((btn, index) => {
        if (index === 0) {
            btn.textContent = t.viewProjects;
        } else {
            btn.textContent = t.getInTouch;
        }
    });
    
    // Section başlıkları
    const sectionTitles = document.querySelectorAll('.section-title');
    if (sectionTitles[0]) {
        sectionTitles[0].textContent = t.aboutTitle;
    }
    if (sectionTitles[1]) {
        sectionTitles[1].textContent = t.projectsTitle;
    }
    if (sectionTitles[2]) {
        sectionTitles[2].textContent = t.contactTitle;
    }
    
    // Hakkımda bölümü
    const aboutText = document.getElementById('aboutText');
    if (aboutText) {
        aboutText.innerHTML = `
            <p>${t.aboutBio}</p>
            <h3>${t.galerkin}</h3>
            <p>${t.galerkinDesc}</p>
            <h3>${t.creamobile}</h3>
            <p>${t.creamobileDesc}</p>
            <p>${t.conclusion}</p>
        `;
    }
    
    // Proje kartlarını güncelle
    projects.forEach((project, index) => {
        const titleEl = document.getElementById(`project${index}Title`);
        const descEl = document.getElementById(`project${index}Desc`);
        if (titleEl) titleEl.textContent = currentLanguage === 'tr' ? project.titleTr : project.titleEn;
        if (descEl) descEl.textContent = currentLanguage === 'tr' ? project.descTr : project.descEn;
    });
    
    // İletişim açıklaması
    const contactDesc = document.querySelector('.contact-content > p');
    if (contactDesc) {
        contactDesc.textContent = t.contactDesc;
    }
    
    // Footer
    const footerContent = document.querySelector('.footer-content p');
    if (footerContent) {
        footerContent.textContent = t.copyright;
    }
}

// Global değişkenler
let currentProjectId = null;
let currentScreenshotIndex = 0;

// Proje Detayını Aç
function openProjectDetail(projectId) {
    window.location.href = `project-detail.html?id=${projectId}`;
}

// Proje Detayını Kapat
function closeProjectDetail() {
    // Bu fonksiyon artık kullanılmıyor
}

// Ekran Görüntüsü Lightbox'ı Aç
function openScreenshotLightbox(projectId, index) {
    currentProjectId = projectId;
    currentScreenshotIndex = index;
    
    const project = projects[projectId];
    const lightbox = document.getElementById('screenshotLightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    
    lightboxImage.src = project.screenshots[index];
    updateLightboxCounter();
    lightbox.style.display = 'flex';
    
    // Keyboard navigation
    document.addEventListener('keydown', handleLightboxKeydown);
}

// Ekran Görüntüsü Lightbox'ı Kapat
function closeScreenshotLightbox() {
    const lightbox = document.getElementById('screenshotLightbox');
    lightbox.style.display = 'none';
    document.removeEventListener('keydown', handleLightboxKeydown);
}

// Lightbox Keyboard Navigation
function handleLightboxKeydown(e) {
    if (e.key === 'ArrowLeft') previousScreenshot();
    if (e.key === 'ArrowRight') nextScreenshot();
    if (e.key === 'Escape') closeScreenshotLightbox();
}

// Sonraki Ekran Görüntüsü
function nextScreenshot() {
    if (!currentProjectId) return;
    
    const project = projects[currentProjectId];
    currentScreenshotIndex = (currentScreenshotIndex + 1) % project.screenshots.length;
    
    const lightboxImage = document.getElementById('lightboxImage');
    lightboxImage.src = project.screenshots[currentScreenshotIndex];
    updateLightboxCounter();
}

// Önceki Ekran Görüntüsü
function previousScreenshot() {
    if (!currentProjectId) return;
    
    const project = projects[currentProjectId];
    currentScreenshotIndex = (currentScreenshotIndex - 1 + project.screenshots.length) % project.screenshots.length;
    
    const lightboxImage = document.getElementById('lightboxImage');
    lightboxImage.src = project.screenshots[currentScreenshotIndex];
    updateLightboxCounter();
}

// Lightbox Sayacını Güncelle
function updateLightboxCounter() {
    if (!currentProjectId) return;
    
    const project = projects[currentProjectId];
    const counter = document.getElementById('lightboxCounter');
    counter.textContent = `${currentScreenshotIndex + 1} / ${project.screenshots.length}`;
}

// Sayfa Yüklendiğinde
document.addEventListener('DOMContentLoaded', () => {
    // Kaydedilmiş dili yükle
    const savedLanguage = localStorage.getItem('preferredLanguage') || 'tr';
    changeLanguage(savedLanguage);
    
    // Smooth scroll için nav linklerini güncelle
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
    
    // Active nav link güncelle - Intersection Observer ile
    const observerOptions = {
        root: null,
        rootMargin: '-20% 0px -60% 0px',
        threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const sectionId = entry.target.getAttribute('id');
                
                // Tüm nav linklerden active class'ını kaldır
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.remove('active');
                });
                
                // Mevcut section'a ait linke active class ekle
                const activeLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    }, observerOptions);

    // Tüm section'ları observe et
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
    
    // Nav link tıklamalarında da active class güncelle
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            // Tüm linklerden active class'ını kaldır
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            // Tıklanan linke active class ekle
            this.classList.add('active');
        });
    });
});
