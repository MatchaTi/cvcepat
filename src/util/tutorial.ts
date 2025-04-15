import { driver } from 'driver.js';

export const driverObj = driver({
  showProgress: true,
  steps: [
    {
      element: 'body',
      popover: {
        title: 'Selamat Datang di Aplikasi CVCepat',
        description: 'Aplikasi ini bisa membuat CV dengan mudah dan cepat. Mari kita mulai!',
        align: 'center',
        side: 'over',
      },
    },
    {
      element: '#home',
      popover: {
        title: 'Beranda',
        description: 'Kembali ke halaman utama aplikasi.',
      },
    },
    {
      element: '#beranda',
      popover: {
        title: 'Beranda',
        description: 'Kembali ke halaman utama aplikasi.',
      },
    },
    {
      element: '#form',
      popover: {
        title: 'Form',
        description: 'Isi data-data yang diperlukan untuk membuat CV kamu.',
      },
    },
    {
      element: '#hasil',
      popover: {
        title: 'Hasil',
        description: 'Lihat hasil CV kamu setelah mengisi form.',
      },
    },
    {
      element: '#panduan',
      popover: {
        title: 'Panduan',
        description: 'Baca panduan untuk membuat CV yang baik dan benar.',
      },
    },
    {
      element: '#github',
      popover: {
        title: 'Github',
        description: 'Kunjungi repositori Github untuk kontribusi pada aplikasi ini.',
      },
    },
    {
      element: '#dummy',
      popover: {
        title: 'Dummy Data',
        description: 'Klik tombol ini untuk mengisi data secara otomatis sebagai contoh.',
      },
    },
    {
      element: '#pdf',
      popover: {
        title: 'Ekspor ke PDF',
        description: 'Klik tombol ini untuk mengunduh CV kamu dalam format PDF.',
      },
    },
  ],
});
