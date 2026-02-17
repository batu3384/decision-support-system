# Fast Express KDS - Karar Destek Sistemi

Isletmeler icin gelistirilmis, veriye dayali karar destek sistemi. Enflasyon ve maliyet verilerini analiz ederek gelecege yonelik tahminlemeler yapar.

## Ozellikler

- Tahminleme Motoru: Linear Regression ile enflasyon bazli maliyet tahmini
- Hibrit Mimari: Node.js (Express) + Python (Flask) dual-backend yapisi
- Otomasyon: node-cron ile zamanlanmis veri guncellemeleri ve raporlar
- Guvenlik: Bcrypt sifreleme, session yonetimi
- MySQL Veritabani: Kapsamli veri yonetimi

## Teknolojiler

| Kategori | Teknoloji |
|----------|----------|
| Backend | Node.js, Express, Python, Flask |
| ML | scikit-learn, ml-regression |
| Veritabani | MySQL |
| Guvenlik | bcrypt, express-session |
| Otomasyon | node-cron |

## Proje Yapisi

```
fast_express_kds_proje/
|-- app.js           # Node.js ana sunucu
|-- app.py           # Python Flask tahminleme servisi
|-- veri_ekleme.js   # Veritabani seed scripti
|-- package.json     # Node.js bagimliliklari
```

## Kurulum

```bash
git clone https://github.com/batu3384/fast_express_kds_proje.git
cd fast_express_kds_proje
npm install
pip install flask scikit-learn
npm start
```

## Lisans

MIT License
