# Codeflare Software - Kurulum Rehberi

## Adım 1: Resim Dosyalarını Hazırlayın

Aşağıdaki resim dosyalarını proje kök dizinine ekleyin:

### Profil Resmi
- **Dosya adı:** `profile.jpg`
- **Boyut:** 200x200 px (en az)
- **Format:** JPG, PNG veya WebP
- **Açıklama:** Murat GÜZEL'in profil fotoğrafı

### Proje Resimleri
- **Dosya adları:** `project1.jpg`, `project2.jpg`, `project3.jpg`
- **Boyut:** 400x300 px (en az)
- **Format:** JPG, PNG veya WebP
- **Açıklama:** Projelerinizin ekran görüntüleri veya kapak resimleri

## Adım 2: İletişim Bilgilerini Güncelleyin

`script.js` dosyasında aşağıdaki kısımları güncelleyin:

```javascript
// İletişim linklerini güncelleyin
<a href="https://github.com/your-username" target="_blank" class="contact-link">
<a href="https://linkedin.com/in/your-profile" target="_blank" class="contact-link">
<a href="mailto:your-email@example.com" class="contact-link">
```

## Adım 3: Proje Bilgilerini Güncelleyin

`script.js` dosyasında `projects` array'ini kendi projelerinizle güncelleyin:

```javascript
const projects = [
    {
        id: 0,
        titleTr: "Proje Adı",
        titleEn: "Project Name",
        descTr: "Kısa açıklama",
        descEn: "Short description",
        detailTr: "Detaylı açıklama...",
        detailEn: "Detailed description...",
        image: "project1.jpg",
        featuresTr: ["Özellik 1", "Özellik 2"],
        featuresEn: ["Feature 1", "Feature 2"],
        techTr: ["Teknoloji 1", "Teknoloji 2"],
        techEn: ["Technology 1", "Technology 2"],
        linkTr: "https://play.google.com/store/apps/details?id=...",
        linkEn: "https://play.google.com/store/apps/details?id=..."
    },
    // Diğer projeler...
];
```

## Adım 4: GitHub Pages Ayarları

### Custom Domain Kullanmak İçin:

1. `CNAME.example` dosyasını `CNAME` olarak yeniden adlandırın
2. İçerisine kendi domain adınızı yazın (örn: `muratguzel.com`)
3. GitHub repository ayarlarında:
   - Settings → Pages
   - Source: main branch
   - Custom domain: muratguzel.com
   - Enforce HTTPS: Etkinleştirin

### GitHub Pages URL Kullanmak İçin:

1. `CNAME` dosyasını silin
2. GitHub repository ayarlarında:
   - Settings → Pages
   - Source: main branch
   - URL: `https://username.github.io/repository-name`

## Adım 5: Yasal Sayfaları Özelleştirin

Aşağıdaki dosyaları kendi bilgilerinizle güncelleyin:

- `privacy.html` - Gizlilik politikası
- `terms.html` - Kullanıcı sözleşmesi
- `delete-account.html` - Hesap silme sayfası

## Adım 6: Yayınlayın

1. Tüm dosyaları GitHub'a push edin
2. GitHub Pages otomatik olarak yayınlanacaktır
3. Birkaç dakika sonra siteniz erişilebilir olacaktır

## Dosya Yapısı

```
.
├── index.html              # Ana sayfa
├── privacy.html            # Gizlilik politikası
├── terms.html              # Kullanıcı sözleşmesi
├── delete-account.html     # Hesap silme
├── styles.css              # Stil dosyası
├── script.js               # JavaScript dosyası
├── profile.jpg             # Profil resmi
├── project1.jpg            # Proje 1 resmi
├── project2.jpg            # Proje 2 resmi
├── project3.jpg            # Proje 3 resmi
├── CNAME                   # Custom domain (isteğe bağlı)
├── README.md               # Proje açıklaması
├── SETUP.md                # Bu dosya
└── .gitignore              # Git ignore dosyası
```

## Sorun Giderme

### Resimler Yüklenmiyor
- Resim dosyalarının doğru adlara sahip olduğundan emin olun
- Resim dosyalarının proje kök dizininde olduğundan emin olun
- Tarayıcı cache'ini temizleyin (Ctrl+Shift+Delete)

### Dil Değiştirme Çalışmıyor
- JavaScript console'da hata olup olmadığını kontrol edin (F12)
- Tarayıcı JavaScript'i destekliyor mu kontrol edin

### GitHub Pages Yayınlanmıyor
- Repository public olduğundan emin olun
- Branch ayarlarını kontrol edin
- GitHub Pages ayarlarını kontrol edin

## İletişim

Sorularınız varsa, lütfen GitHub Issues aracılığıyla iletişime geçin.
