# GitHub Pages'e Yayınlama Rehberi

## Hızlı Başlangıç

### 1. Repository Oluşturun
```bash
git init
git add .
git commit -m "Initial commit: Codeflare Software portfolio"
git branch -M main
git remote add origin https://github.com/your-username/your-repo.git
git push -u origin main
```

### 2. GitHub Pages Ayarları
1. GitHub'da repository'ye gidin
2. Settings → Pages
3. Source: Deploy from a branch
4. Branch: main
5. Folder: / (root)
6. Save

### 3. Custom Domain (İsteğe Bağlı)
1. `CNAME.example` dosyasını `CNAME` olarak yeniden adlandırın
2. İçerisine domain adınızı yazın:
   ```
   muratguzel.com
   ```
3. Domain sağlayıcınızda DNS ayarlarını yapın:
   - CNAME: `your-username.github.io`
   - Veya A records: GitHub IP adresleri

### 4. Resim Dosyalarını Ekleyin
Aşağıdaki dosyaları proje kök dizinine ekleyin:
- `profile.jpg` - Profil fotoğrafı
- `project1.jpg` - Proje 1 resmi
- `project2.jpg` - Proje 2 resmi
- `project3.jpg` - Proje 3 resmi

### 5. Bilgileri Güncelleyin
`script.js` dosyasında:
- GitHub linkini güncelleyin
- LinkedIn linkini güncelleyin
- E-Mail adresini güncelleyin
- Proje bilgilerini güncelleyin

## Yayınlama Sonrası

### Site Erişimi
- **GitHub Pages URL:** `https://your-username.github.io/your-repo`
- **Custom Domain:** `https://muratguzel.com`

### Güncellemeler
Değişiklik yaptıktan sonra:
```bash
git add .
git commit -m "Update: description"
git push
```

Değişiklikler 1-2 dakika içinde yayınlanacaktır.

## Önemli Notlar

✅ **Yapılması Gerekenler:**
- Resim dosyalarını ekleyin
- İletişim bilgilerini güncelleyin
- Proje bilgilerini güncelleyin
- HTTPS'i etkinleştirin
- Repository'yi public yapın

❌ **Yapılmaması Gerekenler:**
- Hassas bilgileri commit etmeyin
- API anahtarlarını paylaşmayın
- Kişisel e-mail adresini herkese açık yapmayın

## Sorun Giderme

### Site Yayınlanmıyor
- Repository public mi?
- Pages ayarları doğru mu?
- main branch'i seçtiniz mi?

### Resimler Görünmüyor
- Dosya adları doğru mu?
- Dosyalar kök dizinde mi?
- Cache temizlediniz mi?

### Custom Domain Çalışmıyor
- DNS ayarları doğru mu?
- CNAME dosyası var mı?
- 24 saat beklediniz mi?

## Destek

Sorunlar için:
1. GitHub Issues açın
2. Browser console'u kontrol edin (F12)
3. GitHub Pages documentation'ı okuyun
