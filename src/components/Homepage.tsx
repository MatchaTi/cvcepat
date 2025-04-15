import { Icon } from '@iconify/react/dist/iconify.js';
import MainLayout from './MainLayout';
import { Link } from 'react-router';
import clsx from 'clsx';

export default function Homepage() {
  return (
    <MainLayout>
      <main>
        <Hero />
        <Why />
        <Steps />
        <FAQ />
        <Footer />
      </main>
    </MainLayout>
  );
}

function Hero() {
  return (
    <section className='flex relative flex-col gap-6 justify-center items-center -mt-36 w-full h-screen text-center text-balance'>
      <div className='absolute top-1/2 left-1/2 w-40 h-40 rounded-full -translate-x-1/2 -translate-y-1/2 bg-primary/20 -z-10 blur-2xl lg:h-100 lg:w-100'></div>
      <div className='hidden absolute rounded-full lg:block bg-secondary/10 top-1/8 left-1/16 -z-10 h-120 w-120 blur-2xl'></div>
      <div className='hidden absolute right-0 bottom-0 rounded-full lg:block bg-accent/10 -z-10 h-150 w-150 blur-2xl'></div>
      <div className='p-4 text-2xl rounded lg:p-6 bg-primary w-fit'>
        <Icon icon='mynaui:lightning-solid' />
      </div>
      <h1 className='relative z-10 max-w-2xl text-2xl font-bold md:text-6xl md:leading-16'>
        Bikin CV mudah, praktis, dan serba wooshh wooshh
      </h1>
      <p className='max-w-2xl'>
        CVCEPAT membantu kamu menyusun CV yang menarik dan siap pakai tanpa ribet. Pilih template, isi data, dan ekspor
        ke PDF — semudah itu!
      </p>
      <Link to='/form' className='btn btn-primary'>
        Buat CV Sekarang
      </Link>
    </section>
  );
}

function Why() {
  return (
    <section className='flex relative flex-col gap-6 justify-center items-center text-center'>
      <div className='space-y-2'>
        <h2 className='text-2xl font-bold md:text-4xl md:leading-16'>Kenapa Memilih CVCEPAT?</h2>
        <p className='max-w-4xl text-balance'>
          CVCEPAT adalah alat yang dirancang untuk memudahkan kamu dalam membuat CV yang menarik. Dengan fitur-fitur
          yang kami tawarkan, kamu bisa membuat CV dalam waktu singkat tanpa mengorbankan kualitas.
        </p>
      </div>
      <img src='/laptop.png' alt='Laptop' />

      <WhyItem
        icon='mdi:theme-outline'
        title='Beragam Tema Menarik'
        description='Tersedia berbagai pilihan tema CV yang dapat disesuaikan dengan gaya dan kebutuhanmu, mulai dari formal hingga kreatif.'
        position='top-[20%] left-[10%]'
        color='bg-primary'
      />

      <WhyItem
        icon='mingcute:layout-line'
        title='Pilihan Layout yang Fleksibel'
        description='Atur tata letak informasi sesuai keinginanmu. Pilih dari berbagai struktur layout yang memudahkan perekrut membaca CV-mu dengan cepat.'
        position='top-[40%] right-[2%]'
        color='bg-secondary'
      />

      <WhyItem
        icon='mynaui:lightning-solid'
        title='Isi Data Sekali, CV Langsung Jadi!'
        description='Isi formulir cepat, dan data kamu otomatis diubah menjadi CV siap kirim.'
        position='right-[5%] bottom-[10%]'
        color='bg-accent'
      />

      <WhyItem
        icon='proicons:pdf-2'
        title='Ekspor ke PDF Sekali Klik'
        description='Unduh CV kamu dalam format PDF dengan mudah dan siap dipakai.'
        position='top-[60%] left-[5%]'
        color='bg-neutral'
      />
    </section>
  );
}

function WhyItem({
  icon,
  title,
  description,
  position,
  color,
}: {
  icon: string;
  title: string;
  description: string;
  position: string;
  color: string;
}) {
  return (
    <div className={clsx('alert flex max-w-xl flex-col items-start gap-2 shadow-lg lg:absolute', position)}>
      <div className={clsx('w-fit rounded p-2', color)}>
        <Icon icon={icon} />
      </div>
      <h3 className='font-bold'>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Steps() {
  return (
    <section className='py-10 space-y-10 lg:py-40 lg:px-40'>
      <div className='space-y-2 text-center text-balance'>
        <h2 className='text-2xl font-bold md:text-4xl md:leading-16'>Buat CV-mu dengan Cepat</h2>
        <p>Buat CV keren dengan beberapa langkah mudah.</p>
      </div>

      <div className='grid gap-4 place-items-center lg:grid-cols-2 lg:gap-20'>
        <div className='pt-4 pl-4 rounded-lg bg-base-200'>
          <img src='/personal.png' alt='personal' className='w-full rounded-tl-lg' />
        </div>
        <div>
          <StepItem
            icon='material-symbols:person-outline'
            title='Masukkan Data Pribadi'
            description='Isi formulir dengan informasi pribadi, pendidikan, pengalaman kerja, dan keterampilan yang relevan.'
            color='bg-primary'
          />
        </div>
      </div>

      <div className='grid gap-4 place-items-center lg:grid-cols-2 lg:gap-20'>
        <div className='pt-4 pr-4 rounded-lg lg:order-1 bg-base-200'>
          <img src='/tema.png' alt='tema' className='w-full rounded-tr-lg' />
        </div>
        <div>
          <StepItem
            icon='material-symbols:design-services-outline'
            title='Pilih Tema dan Layout'
            description='Pilih tema dan tata letak yang sesuai dengan gaya dan kebutuhanmu.'
            color='bg-secondary'
          />
        </div>
      </div>

      <div className='grid gap-4 place-items-center lg:grid-cols-2 lg:gap-20'>
        <div className='pt-4 pl-4 rounded-lg bg-base-200'>
          <img src='/preview.png' alt='preview' className='w-full rounded-tl-lg' />
        </div>
        <div>
          <StepItem
            icon='icon-park-outline:preview-open'
            title='Real-time Preview'
            description='Lihat pratinjau CV secara langsung saat mengisi formulir. Pastikan semuanya terlihat bagus sebelum mengunduh.'
            color='bg-accent'
          />
        </div>
      </div>

      <div className='grid gap-4 place-items-center lg:grid-cols-2 lg:gap-20'>
        <div className='pt-4 pr-4 rounded-lg lg:order-1 bg-base-200'>
          <img src='/download.png' alt='download' className='w-full rounded-tr-lg' />
        </div>
        <div>
          <StepItem
            icon='material-symbols:download-rounded'
            title='Unduh CV dalam Format PDF'
            description='Setelah selesai, unduh CV kamu dalam format PDF siap kirim. Mudah dan cepat!'
            color='bg-neutral'
          />
        </div>
      </div>
    </section>
  );
}

function StepItem({
  icon,
  title,
  description,
  color,
}: {
  icon: string;
  title: string;
  description: string;
  color: string;
}) {
  return (
    <div className={clsx('flex flex-col items-start gap-4')}>
      <div className={clsx('rounded p-4', color)}>
        <Icon icon={icon} />
      </div>
      <h3 className='text-2xl font-bold'>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function FAQ() {
  return (
    <section className='grid gap-6 items-center py-20 lg:grid-cols-2 lg:py-40 lg:px-40'>
      <div className='space-y-2'>
        <div className='badge badge-primary'>
          <Icon icon='mingcute:question-line' />
          <span>FAQ</span>
        </div>
        <h2 className='text-2xl font-bold md:text-4xl md:leading-16'>Pertanyaan yang Sering Diajukan</h2>
        <p className='max-w-4xl text-balance'>
          Temukan jawaban untuk pertanyaan umum tentang penggunaan CVCEPAT. Jika ada pertanyaan lain, jangan ragu untuk
          menghubungi kami!
        </p>
      </div>
      <div className='space-y-4'>
        <FAQItem
          title='Apakah bisa mengedit kembali CV setelah di-download?'
          description='CV yang telah diunduh dalam format PDF tidak bisa langsung diedit. Namun, kamu tetap bisa kembali ke CVCEPAT, melakukan perubahan, dan mengunduh versi terbarunya kapan saja.'
        />
        <FAQItem
          title='Apakah data saya aman?'
          description='Ya, data kamu aman. Semua data disimpan secara lokal di perangkat melalui local storage, sehingga tidak dikirim atau disimpan di server manapun. Kamu punya kendali penuh atas data yang kamu masukkan.'
        />
        <FAQItem
          title='Format file apa yang bisa saya download?'
          description='Saat ini, CVCEPAT mendukung pengunduhan dalam format PDF, sehingga siap langsung digunakan untuk keperluan lamaran kerja, magang, maupun portofolio.'
        />
        <FAQItem
          title='Apakah project ini open source?'
          description='Ya, CVCEPAT adalah proyek open source. Kamu bebas melihat, mempelajari, atau bahkan berkontribusi pada kode sumbernya. Link repositori tersedia di navbar.'
        />
      </div>
    </section>
  );
}

function FAQItem({ title, description }: { title: string; description: string }) {
  return (
    <div tabIndex={0} className='border collapse-arrow bg-base-100 border-base-300 collapse'>
      <div className='font-semibold collapse-title'>{title}</div>
      <div className='text-sm collapse-content'>{description}</div>
    </div>
  );
}

function Footer() {
  return (
    <footer className='lg:px-40 lg:pt-40'>
      <div className='p-6 space-y-4 text-center rounded-lg bg-base-content text-base-100'>
        <h2 className='mx-auto max-w-5xl text-2xl font-bold md:text-5xl text-balance md:leading-16'>
          Mulai perjalanan karirmu dengan CV yang menarik!
        </h2>
        <p className='mx-auto max-w-4xl text-balance'>
          Buat CV keren dengan beberapa langkah mudah. Pilih template, isi data, dan ekspor ke PDF — semudah itu!
        </p>
        <Link to='/form' className='btn btn-primary'>
          Buat CV Sekarang
        </Link>
      </div>
      <div className='flex flex-col gap-4 justify-center items-center pt-10 text-center'>
        <p className='text-sm text-balance'>Dibuat dengan ❤️ oleh Kelompok 8 Kommas</p>
      </div>
    </footer>
  );
}
