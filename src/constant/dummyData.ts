const dummyData1 = {
  personalInfo: {
    fullName: 'Ucup Ismail',
    designation: 'Network Engineering',
    phone: '089501604029',
    email: 'ucupismail@gmail.com',
    address: 'Samarinda, Indonesia',
  },
  bio: `Saya adalah lulusan SMKN 5 Samarinda jurusan Teknik Komputer dan Jaringan (TKJ) dengan minat dan keahlian dalam jaringan komputer, administrasi sistem, serta troubleshooting perangkat keras dan lunak. Memiliki pengalaman magang sebagai teknisi jaringan, di mana saya bertanggung jawab dalam pemasangan, konfigurasi, dan pemeliharaan jaringan.

Saya terbiasa bekerja dengan perangkat jaringan seperti router, switch, dan server, serta memiliki pemahaman dasar mengenai keamanan jaringan. Selain itu, saya memiliki kemampuan dalam instalasi sistem operasi (Windows & Linux) dan perawatan perangkat komputer.

Siap bekerja dalam tim maupun secara mandiri dengan semangat belajar yang tinggi serta kemampuan problem-solving yang baik.`,
  photo: '',
  socialLinks: {
    facebook: '',
    github: '',
    instagram: '',
    linkedin: '',
    twitter: '',
  },
  education: [{ institute: 'SMKN 5 Samarinda', degree: 'Teknik Komputer dan Jaringan', year: '2023' }],
  experience: [
    {
      company: 'Magang Telkom Akses',
      position: 'Survey, Drawing & Inventory',
      year: '2022',
      description: 'Melakukan aktivitas inventory as Build Drawing pembangunan jaringan fiber optic',
    },
  ],
  skills: ['Mikrotik', 'Cisco', 'Microsoft Office'],
  projects: [
    {
      projectName: 'Computer and Network Engineering Operators Badan Nasional Sertifikasi Profesi (BNSP)',
      description: 'Ujian kompetensi BNSP untuk bidang computer dan jaringan.',
    },
  ],
};

const dummyData2 = {
  personalInfo: {
    fullName: 'John Doe',
    designation: 'Software Engineer',
    phone: '1234567890',
    email: 'johndo@gmail.com',
    address: 'Indonesia, Samarinda',
  },
  bio: 'I am a software engineer with 5 years of experience in web development. I am proficient in JavaScript, React, and Node.js.',
  photo: '',
  education: [
    { degree: 'Bachelor of Computer Science', institute: 'University of Indonesia', year: '2015' },
    { degree: 'High School', institute: 'SMA Negeri 1 Samarinda', year: '2011' },
    { degree: 'Elementary School', institute: 'SDN 001 Samarinda', year: '2005' },
    { degree: 'Kindergarten', institute: 'TK Bunda Mulia', year: '2002' },
  ],
  experience: [
    {
      company: 'Google',
      position: 'Software Engineer',
      year: '2019-2021',
      description: 'Worked on the Google Search team.',
    },
    {
      company: 'Facebook',
      position: 'Software Engineer',
      year: '2017-2019',
      description: 'Worked on the Facebook Ads team.',
    },
    {
      company: 'Amazon',
      position: 'Software Engineer',
      year: '2015-2017',
      description: 'Worked on the Amazon Web Services team.',
    },
  ],
  skills: ['JavaScript', 'React', 'Node.js', 'TypeScript', 'HTML', 'CSS'],
  projects: [
    { projectName: 'Project 1', description: 'Description of project 1' },
    { projectName: 'Project 2', description: 'Description of project 2' },
    { projectName: 'Project 3', description: 'Description of project 3' },
  ],
  socialLinks: {
    facebook: 'John Doe FB',
    github: 'John Doe GH',
    instagram: 'John Doe IG',
    linkedin: 'John Doe LI',
    twitter: 'John Doe X',
  },
};

const dummyData3 = {
  personalInfo: {
    fullName: 'Siti Aisyah',
    designation: 'Data Analyst',
    phone: '081234567890',
    email: 'siti.aisyah@gmail.com',
    address: 'Jakarta, Indonesia',
  },
  bio: `Saya adalah seorang Data Analyst dengan pengalaman 3 tahun dalam analisis data dan visualisasi. Saya memiliki keahlian dalam menggunakan SQL, Python, dan Tableau untuk menggali wawasan dari data serta menyajikan hasil analisis secara efektif.

Saya memiliki pengalaman dalam mengolah data dari berbagai sumber, membersihkan data, dan membuat model prediktif untuk mendukung pengambilan keputusan bisnis. Saya juga terbiasa bekerja dalam tim lintas fungsi dan berkolaborasi dengan berbagai pemangku kepentingan untuk menyusun strategi berbasis data.`,
  photo: '',
  education: [{ institute: 'Universitas Indonesia', degree: 'S1 Statistika', year: '2020' }],
  experience: [
    {
      company: 'Bank BRI',
      position: 'Data Analyst',
      year: '2021 - Sekarang',
      description: 'Menganalisis data transaksi nasabah untuk mendukung strategi pemasaran dan mitigasi risiko.',
    },
    {
      company: 'Shopee Indonesia',
      position: 'Data Analyst Intern',
      year: '2020',
      description: 'Membantu tim data dalam melakukan eksplorasi data pengguna dan membuat dashboard interaktif.',
    },
  ],
  skills: ['SQL', 'Python', 'Tableau', 'Power BI', 'Machine Learning'],
  projects: [
    {
      projectName: 'Customer Segmentation',
      description: 'Mengelompokkan pelanggan berdasarkan perilaku belanja menggunakan algoritma clustering.',
    },
    {
      projectName: 'Sales Forecasting',
      description: 'Memprediksi penjualan produk menggunakan model regresi time series.',
    },
  ],
  socialLinks: {
    facebook: '',
    github: 'sitiaisyah-github',
    instagram: 'sitiaisyah_ig',
    linkedin: 'siti-aisyah-linkedin',
    twitter: '',
  },
};

export const dummyData = [dummyData1, dummyData2, dummyData3];
