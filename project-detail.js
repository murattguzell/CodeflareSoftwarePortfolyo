// Ekran Görüntüsü Lightbox'ı Kapat
function closeScreenshotLightbox() {
    const lightbox = document.getElementById('screenshotLightbox');
    lightbox.style.display = 'none';
    document.removeEventListener('keydown', handleLightboxKeydown);
}

// Proje Detayını Yükle
function loadProjectDetail() {
    const params = new URLSearchParams(window.location.search);
    const projectId = parseInt(params.get('id'));
    
    if (isNaN(projectId) || projectId < 0 || projectId >= projects.length) {
        window.location.href = 'index.html#projects';
        return;
    }
    
    const project = projects[projectId];
    currentProjectId = projectId;
    
    // İkon ve başlık
    document.getElementById('detailIcon').src = project.image;
    document.getElementById('detailTitle').textContent = currentLanguage === 'tr' ? project.titleTr : project.titleEn;
    document.getElementById('detailDescription').textContent = currentLanguage === 'tr' ? project.detailTr : project.detailEn;
    
    // Ekran görüntüleri
    const screenshotsContainer = document.getElementById('screenshotsContainer');
    screenshotsContainer.innerHTML = '';
    
    if (project.screenshots && project.screenshots.length > 0) {
        project.screenshots.forEach((screenshot, index) => {
            const screenshotDiv = document.createElement('div');
            screenshotDiv.className = 'screenshot-item';
            screenshotDiv.innerHTML = `<img src="${screenshot}" alt="Ekran görüntüsü ${index + 1}" loading="lazy" style="cursor: pointer;" onclick="openScreenshotLightbox(${projectId}, ${index})">`;
            screenshotsContainer.appendChild(screenshotDiv);
        });
    } else {
        screenshotsContainer.innerHTML = '<p style="text-align: center; color: var(--text-light); padding: 2rem;">Ekran görüntüsü mevcut değil</p>';
    }
    
    // Özellikler
    const features = currentLanguage === 'tr' ? project.featuresTr : project.featuresEn;
    const featuresList = document.getElementById('detailFeatures');
    featuresList.innerHTML = '';
    features.forEach(feature => {
        const li = document.createElement('li');
        li.textContent = feature;
        featuresList.appendChild(li);
    });
    
    // Teknolojiler
    const techs = currentLanguage === 'tr' ? project.techTr : project.techEn;
    const techDiv = document.getElementById('detailTech');
    techDiv.innerHTML = '';
    techs.forEach(tech => {
        const tag = document.createElement('span');
        tag.className = 'tech-tag';
        tag.textContent = tech;
        techDiv.appendChild(tag);
    });
    
    // Market Link başlığını güncelle
    const marketLinkTitle = document.getElementById('marketLinkTitle');
    if (marketLinkTitle) {
        marketLinkTitle.textContent = translations[currentLanguage].marketLink;
    }

    // Link
    const link = document.getElementById('detailLink');
    const linkUrl = currentLanguage === 'tr' ? project.linkTr : project.linkEn;
    link.href = linkUrl;
    
    // Store türüne göre buton metni ve ikonu
    const openAppText = document.getElementById('openAppText');
    const btnIcon = link.querySelector('.btn-icon');
    
    if (project.storeType === 'googleplay') {
        openAppText.textContent = currentLanguage === 'tr' ? 'Google Play\'de İndir' : 'Download on Google Play';
        btnIcon.textContent = '📱';
    } else if (project.storeType === 'appstore') {
        openAppText.textContent = currentLanguage === 'tr' ? 'App Store\'dan İndir' : 'Download on App Store';
        btnIcon.textContent = '🍎';
    } else if (project.storeType === 'both') {
        openAppText.textContent = currentLanguage === 'tr' ? 'Google Play\'de İndir' : 'Download on Google Play';
        btnIcon.textContent = '📱';
    } else {
        openAppText.textContent = currentLanguage === 'tr' ? 'Uygulamayı Aç' : 'Open App';
        btnIcon.textContent = '📱';
    }
    
    // Link click event'i ekle
    link.onclick = function(e) {
        e.preventDefault();
        window.open(linkUrl, '_blank');
    };
    
    // Nightlink için özel linkler göster
    const nightlinkLinks = document.getElementById('nightlinkLinks');
    if (projectId === 0) {
        const t = translations[currentLanguage];
        nightlinkLinks.innerHTML = `
            <a href="nightlink-privacy-policy.html" target="_blank" class="btn btn-secondary">
                <span class="btn-icon">📄</span>
                <span>${t.privacyPolicy}</span>
            </a>
            <a href="nightlink-account-deletion.html" target="_blank" class="btn btn-secondary">
                <span class="btn-icon">🗑️</span>
                <span>${t.accountDeletion}</span>
            </a>
            <a href="nightlink-child-safety.html" target="_blank" class="btn btn-secondary">
                <span class="btn-icon">🛡️</span>
                <span>${t.childSafety}</span>
            </a>
        `;
        nightlinkLinks.style.display = 'block';
    } else {
        nightlinkLinks.style.display = 'none';
    }
    
    // Nexa için özel linkler göster
    if (projectId === 1) {
        if (!document.getElementById('nexaLinks')) {
            const nexaLinksDiv = document.createElement('div');
            nexaLinksDiv.id = 'nexaLinks';
            nexaLinksDiv.className = 'legal-links';
            document.querySelector('.app-links').appendChild(nexaLinksDiv);
        }
        const t = translations[currentLanguage];
        document.getElementById('nexaLinks').innerHTML = `
            <a href="nexa-privacy-policy.html" target="_blank" class="btn btn-secondary">
                <span class="btn-icon">📄</span>
                <span>${t.privacyPolicy}</span>
            </a>
            <a href="nexa-account-deletion.html" target="_blank" class="btn btn-secondary">
                <span class="btn-icon">🗑️</span>
                <span>${t.accountDeletion}</span>
            </a>
        `;
        document.getElementById('nexaLinks').style.display = 'block';
    } else {
        const nexaLinks = document.getElementById('nexaLinks');
        if (nexaLinks) nexaLinks.style.display = 'none';
    }

    // LoveTalkAI için özel linkler göster
    if (projectId === 2) {
        if (!document.getElementById('lovetalkaLinks')) {
            const ltLinksDiv = document.createElement('div');
            ltLinksDiv.id = 'lovetalkaLinks';
            ltLinksDiv.className = 'legal-links';
            document.querySelector('.app-links').appendChild(ltLinksDiv);
        }
        const t = translations[currentLanguage];
        document.getElementById('lovetalkaLinks').innerHTML = `
            <a href="lovetalkai-privacy-policy.html" target="_blank" class="btn btn-secondary">
                <span class="btn-icon">📄</span>
                <span>${t.privacyPolicy}</span>
            </a>
            <a href="lovetalkai-account-deletion.html" target="_blank" class="btn btn-secondary">
                <span class="btn-icon">🗑️</span>
                <span>${t.accountDeletion}</span>
            </a>
        `;
        document.getElementById('lovetalkaLinks').style.display = 'block';
    } else {
        const ltLinks = document.getElementById('lovetalkaLinks');
        if (ltLinks) ltLinks.style.display = 'none';
    }    
    // Both store türü için App Store linki göster
    const appStoreLinks = document.getElementById('appStoreLinks');
    if (project.storeType === 'both') {
        appStoreLinks.style.display = 'block';
        document.getElementById('appStoreText').textContent = translations[currentLanguage].downloadAppStore;
        const appStoreLink = document.getElementById('appStoreLink');
        appStoreLink.href = 'https://lnkd.in/dVK_xJ_f';
        appStoreLink.onclick = function(e) {
            e.preventDefault();
            window.open('https://lnkd.in/dVK_xJ_f', '_blank');
        };
    } else {
        appStoreLinks.style.display = 'none';
    }
}

// Sayfa Yüklendiğinde
document.addEventListener('DOMContentLoaded', () => {
    // Kaydedilmiş dili yükle
    const savedLanguage = localStorage.getItem('preferredLanguage') || 'tr';
    changeLanguage(savedLanguage);
    
    // Proje detayını yükle
    loadProjectDetail();
    
    // Dil değiştirme butonları
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            changeLanguage(lang);
            loadProjectDetail();
        });
    });
    
    // Modal dışına tıklandığında kapat
    window.addEventListener('click', (event) => {
        const lightbox = document.getElementById('screenshotLightbox');
        if (event.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });
});

// Dil değiştirme fonksiyonunu override et
const originalChangeLanguage = changeLanguage;
changeLanguage = function(lang) {
    originalChangeLanguage(lang);
    
    // Sayfa başlıklarını güncelle
    const t = translations[currentLanguage];
    
    // Nav linklerini güncelle
    document.querySelectorAll('.nav-link').forEach(link => {
        const href = link.getAttribute('href');
        if (href.includes('home')) {
            link.textContent = t.home;
        } else if (href.includes('projects')) {
            link.textContent = t.projects;
        } else if (href.includes('contact')) {
            link.textContent = t.contact;
        }
    });
    
    // Back link
    const backLink = document.querySelector('.back-link span');
    if (backLink) {
        backLink.textContent = currentLanguage === 'tr' ? 'Projelere Dön' : 'Back to Projects';
    }
    
    // Section başlıkları
    const screenshotsTitle = document.getElementById('screenshotsTitle');
    if (screenshotsTitle) {
        screenshotsTitle.textContent = currentLanguage === 'tr' ? 'Ekran Görüntüleri' : 'Screenshots';
    }
    
    const featuresTitle = document.getElementById('featuresTitle');
    if (featuresTitle) {
        featuresTitle.textContent = t.features;
    }
    
    const technologiesTitle = document.getElementById('technologiesTitle');
    if (technologiesTitle) {
        technologiesTitle.textContent = t.technologies;
    }
    
    const marketLinkTitle = document.getElementById('marketLinkTitle');
    if (marketLinkTitle) {
        marketLinkTitle.textContent = t.marketLink;
    }
    if (openAppText) {
        // Mevcut proje bilgisini al
        const params = new URLSearchParams(window.location.search);
        const projectId = parseInt(params.get('id'));
        if (!isNaN(projectId) && projectId >= 0 && projectId < projects.length) {
            const project = projects[projectId];
            if (project.storeType === 'googleplay') {
                openAppText.textContent = currentLanguage === 'tr' ? 'Google Play\'de İndir' : 'Download on Google Play';
            } else if (project.storeType === 'appstore') {
                openAppText.textContent = currentLanguage === 'tr' ? 'App Store\'dan İndir' : 'Download on App Store';
            } else if (project.storeType === 'both') {
                openAppText.textContent = currentLanguage === 'tr' ? 'Google Play\'de İndir' : 'Download on Google Play';
            } else {
                openAppText.textContent = t.openApp;
            }
        }
    }
    
    // Footer
    const footerContent = document.querySelector('.footer-content p');
    if (footerContent) {
        footerContent.textContent = t.copyright;
    }
};


// Lightbox Keyboard Navigation
function handleLightboxKeydown(e) {
    if (e.key === 'ArrowLeft') previousScreenshot();
    if (e.key === 'ArrowRight') nextScreenshot();
    if (e.key === 'Escape') closeScreenshotLightbox();
}

// Sonraki Ekran Görüntüsü
function nextScreenshot() {
    if (!currentProjectId && currentProjectId !== 0) return;
    
    const project = projects[currentProjectId];
    currentScreenshotIndex = (currentScreenshotIndex + 1) % project.screenshots.length;
    
    const lightboxImage = document.getElementById('lightboxImage');
    lightboxImage.src = project.screenshots[currentScreenshotIndex];
    updateLightboxCounter();
}

// Önceki Ekran Görüntüsü
function previousScreenshot() {
    if (!currentProjectId && currentProjectId !== 0) return;
    
    const project = projects[currentProjectId];
    currentScreenshotIndex = (currentScreenshotIndex - 1 + project.screenshots.length) % project.screenshots.length;
    
    const lightboxImage = document.getElementById('lightboxImage');
    lightboxImage.src = project.screenshots[currentScreenshotIndex];
    updateLightboxCounter();
}

// Lightbox Sayacını Güncelle
function updateLightboxCounter() {
    if (!currentProjectId && currentProjectId !== 0) return;
    
    const project = projects[currentProjectId];
    const counter = document.getElementById('lightboxCounter');
    counter.textContent = `${currentScreenshotIndex + 1} / ${project.screenshots.length}`;
}
