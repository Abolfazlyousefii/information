import { useState } from 'react'
import './App.css'

const steps = [
  'اطلاعات شخصی',
  'مدارک',
  'بدهی‌ها',
  'اسناد وام',
  'اضطراری',
  'اطلاعات همسر',
]

const field = (label, required = false, placeholder = '') => (
  <label className="field" key={`${label}-${placeholder}`}>
    <span>
      {label}
      {required && <em> *</em>}
    </span>
    <input placeholder={placeholder} />
  </label>
)

function App() {
  const [submitted, setSubmitted] = useState(false)

  if (submitted) {
    return (
      <main className="success-page" dir="rtl" lang="fa">
        <section className="success-card">
          <div className="success-icon">✓</div>
          <h1>اطلاعات با موفقیت ثبت شد</h1>
          <p>اطلاعات پرسنلی شما دریافت و ثبت گردید. از همکاری شما متشکریم.</p>
          <button className="primary">مشاهده آرشیو فرم‌ها</button>
          <button className="ghost" onClick={() => setSubmitted(false)}>
            ثبت فرم جدید
          </button>
        </section>
      </main>
    )
  }

  return (
    <main className="page" dir="rtl" lang="fa">
      <header className="top-head">
        <div className="brand">
          <div>
            <h2>سیستم ثبت اطلاعات پرسنلی</h2>
            <p>Human Resources Management System</p>
          </div>
          <div className="logo">لوگو</div>
        </div>
      </header>

      <section className="hero-head">
        <div className="title-block">
          <h1>فرم جامع ثبت اطلاعات پرسنلی</h1>
          <p>لطفاً تمامی بخش‌ها را با دقت و صحت کامل تکمیل نمایید</p>
        </div>
        <div className="progress-wrap">
          <strong>100%</strong>
          <span>پیشرفت تکمیل فرم</span>
          <small>مرحله 6 از 6</small>
          <div className="bar">
            <div />
          </div>
        </div>
      </section>

      <section className="stepper" aria-hidden="true">
        {steps.map((step, idx) => (
          <div className="step" key={step}>
            <div className={`bullet ${idx === 0 ? 'current' : 'done'}`}>{idx + 1}</div>
            <span>{step}</span>
          </div>
        ))}
      </section>

      <section className="form-area">
        <article className="card blue">
          <header>اطلاعات شخصی</header>
          <div className="grid3">
            {field('نام', true, 'نام')}
            {field('نام خانوادگی', true, 'نام خانوادگی')}
            {field('نام پدر', true, 'نام پدر')}
            {field('کد ملی', true, '۱۰ رقم')}
            {field('شماره شناسنامه', true, 'شماره شناسنامه')}
            {field('تاریخ تولد', true, 'mm/dd/yyyy')}
            {field('محل تولد', false, 'شهر / استان')}
            {field('محل صدور شناسنامه', false, 'شهر / اداره ثبت')}
            {field('جنسیت', true, 'انتخاب کنید')}
            {field('وضعیت تأهل', true, 'انتخاب کنید')}
            {field('مذهب', false, 'مثال: شیعه، سنی')}
            {field('ملیت', false, 'ایرانی')}
            {field('شماره موبایل', true, '...۹۱۲')}
            {field('شماره منزل', false, '...۰۲۱')}
            {field('ایمیل', false, 'example@email.com')}
          </div>
          <label className="field full"><span>آدرس منزل <em>*</em></span><textarea placeholder="آدرس کامل محل سکونت" /></label>
        </article>

        <article className="card purple">
          <header>مدارک</header>
          <div className="uploads">
            {['کپی صفحه اول شناسنامه *', 'کپی صفحه توضیحات شناسنامه', 'کپی کارت ملی (رو) *', 'کپی کارت ملی (پشت) *', 'برگه ثبت ثنا *', 'مدرک تحصیلی', 'کارت پایان خدمت / معافیت', 'سایر مدارک'].map((t) => (
              <div className="upload" key={t}>
                <h4>{t}</h4>
                <div className="drop">فایل را اینجا رها کنید یا کلیک کنید</div>
              </div>
            ))}
          </div>
        </article>

        <article className="card orange">
          <header>بدهی‌ها</header>
          <h3>خریدهای اقساطی</h3>
          <div className="table-row">شرح کالا/خدمات | مبلغ کل | تعداد اقساط | مبلغ هر قسط | تاریخ شروع | مانده بدهی</div>
          <h3>وام‌ها</h3>
          <div className="table-row">نوع وام | مبلغ کل | قسط ماهانه | اقساط باقیمانده | تاریخ تسویه | مانده بدهی</div>
        </article>

        <article className="card green">
          <header>اسناد وام</header>
          <div className="grid3">
            {field('شماره ثبت سند', true, 'شماره ثبت در دفترخانه')}
            {field('تاریخ ثبت سند', true, 'mm/dd/yyyy')}
            {field('نام دفترخانه', false, 'نام دفتر اسناد رسمی')}
            {field('نوع سند', true, 'انتخاب کنید')}
            {field('مبلغ سند (ریال)', true, 'مبلغ به ریال')}
            {field('تاریخ انقضا/سررسید', false, 'mm/dd/yyyy')}
          </div>
          <h3>ضامن اول</h3>
          <div className="grid3">
            {field('نام و نام خانوادگی ضامن', false, 'نام کامل ضامن')}
            {field('کد ملی ضامن', false, '۱۰ رقم')}
            {field('شماره موبایل ضامن', false, '...۹۱۲')}
          </div>
          <h3>ضامن دوم</h3>
          <div className="grid3">
            {field('نام و نام خانوادگی ضامن', false, 'نام کامل ضامن')}
            {field('کد ملی ضامن', false, '۱۰ رقم')}
            {field('شماره موبایل ضامن', false, '...۹۱۲')}
          </div>
        </article>

        <article className="card red">
          <header>اضطراری</header>
          <div className="grid3">
            {field('نام و نام خانوادگی', true, 'نام کامل')}
            {field('نسبت با پرسنل', true, 'انتخاب کنید')}
            {field('شماره موبایل', true, '...۹۱۲')}
            {field('شماره منزل', false, '...۰۲۱')}
            {field('شماره محل کار', false, 'شماره محل کار')}
            {field('کد ملی', false, '(اختیاری)')}
          </div>
          <label className="field full"><span>آدرس</span><textarea placeholder="آدرس کامل مخاطب اضطراری" /></label>
        </article>

        <article className="card blue">
          <header>اطلاعات همسر</header>
          <div className="grid3">
            {field('نام', false, 'نام')}
            {field('نام خانوادگی', false, 'نام خانوادگی')}
            {field('کد ملی', false, '۱۰ رقم')}
            {field('شماره موبایل', false, '...۹۱۲')}
            {field('شماره منزل', false, '...۰۲۱')}
            {field('محل کار', false, 'نام سازمان')}
          </div>
        </article>

        <button className="submit" onClick={() => setSubmitted(true)}>
          ثبت نهایی فرم
        </button>
      </section>

      <footer>سیستم مدیریت منابع انسانی — نسخه ۱.۰ — تمامی اطلاعات محرمانه است</footer>
    </main>
  )
}

export default App
