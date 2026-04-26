# 🚀 Codeflare Software - Hızlı Başlangıç

## 5 Dakikalık Kurulum

### 1️⃣ Resim Dosyalarını Ekleyin
Aşağıdaki dosyaları proje kök dizinine kopyalayın:
- `profile.jpg` - Senin fotoğrafın (200x200px)
- `project1.jpg` - Biocard proje resmi
- `project2.jpg` - Flutter proje resmi  
- `project3.jpg` - Android proje resmi

### 2️⃣ İletişim Bilgilerini Güncelleyin
`script.js` dosyasında aşağıdaki satırları bul ve güncelle:

```javascript
// Satır ~200 civarında
<a href="https://github.com/YOUR_USERNAME" target="_blank">
<a href="https://linkedin.com/in/YOUR_PROFILE" target="_blank">
<a href="mailto:YOUR_EMAIL@example.com" class="contact-link">
```

### 3️⃣ Proje Bilgilerini Güncelleyin
`script.js` dosyasında `projects` array'ini güncelle (satır ~30):

```javascript
const projects = [
    {
        id: 0,
        titleTr: "Biocard",
        titleEn: "Biocard",
        descTr: "IoT tabanlı mobil uygulama",
        descEn: "IoT-based mobile application",
        // ... diğer alanlar
    },
    // Diğer projeler...
];
```

### 4️⃣ GitHub'a Push Et
```bash
git init
git add .
git commit -m "Codeflare Software Portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

### 5️⃣ GitHub Pages Ayarla
1. GitHub'da repository'ye git
2. Settings → Pages
3. Source: main branch
4. Save

✅ **Bitti! Siteniz yayında!**

---

## 📋 Kontrol Listesi

- [ ] Resim dosyaları eklendi
- [ ] GitHub linkini güncelledim
- [ ] LinkedIn linkini güncelledim
- [ ] E-Mail adresini güncelledim
- [ ] Proje bilgilerini güncelledim
- [ ] GitHub'a push ettim
- [ ] GitHub Pages ayarlarını yaptım
- [ ] Siteyi test ettim

---

## 🌐 Custom Domain (İsteğe Bağlı)

1. `CNAME.example` → `CNAME` olarak yeniden adlandır
2. İçerisine domain adını yaz: `muratguzel.com`
3. Domain sağlayıcında DNS ayarla:
   - CNAME: `your-username.github.io`
4. GitHub Pages ayarlarında custom domain ekle

---

## 🎨 Tasarımı Özelleştir

### Renkler Değiştir
`styles.css` dosyasında `:root` bölümünü düzenle:

```css
:root {
    --primary-color: #00d4ff;      /* Ana renk */
    --secondary-color: #0099cc;    /* İkincil renk */
    --accent: #ff006e;             /* Vurgu rengi */
    --dark-bg: #0a0e27;            /* Koyu arka plan */
}
```

### Font Değiştir
`styles.css` dosyasında `body` bölümünü düzenle:

```css
body {
    font-family: 'Your Font', sans-serif;
}
```

---

## 📱 Mobil Test

Sitenin mobil cihazlarda nasıl göründüğünü test et:
1. Tarayıcıda F12 aç
2. Ctrl+Shift+M (Responsive Mode)
3. Farklı cihazları test et

---

## 🐛 Sorun Giderme

### Resimler Görünmüyor?
- Dosya adlarını kontrol et (profile.jpg, project1.jpg, vb.)
- Dosyaların kök dizinde olduğundan emin ol
- Cache temizle: Ctrl+Shift+Delete

### Dil Değiştirme Çalışmıyor?
- F12 aç → Console
- Hata mesajı var mı kontrol et
- JavaScript etkinleştirilmiş mi kontrol et

### Site Yayınlanmıyor?
- Repository public mi?
- main branch seçildi mi?
- 2-3 dakika bekle

---

## 📚 Daha Fazla Bilgi

- **SETUP.md** - Detaylı kurulum rehberi
- **DEPLOYMENT.md** - GitHub Pages yayınlama
- **README.md** - Proje açıklaması
- **PROJECT_STRUCTURE.txt** - Dosya yapısı

---

## 💡 İpuçları

✨ **Animasyonları Hızlandır/Yavaşlat**
`styles.css` dosyasında `animation` değerlerini değiştir

🎨 **Yeni Bölüm Ekle**
`index.html`'e yeni `<section>` ekle ve `styles.css`'de stil tanımla

🌍 **Yeni Dil Ekle**
`script.js`'de `translations` object'ine yeni dil ekle

---

## 🎉 Başarıyla Tamamlandı!

Siteniz artık canlı! 🚀

Ziyaret et: `https://your-username.github.io/your-repo`

Sorular? GitHub Issues'da soru sor!
