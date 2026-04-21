import { useState } from 'react'
import './App.css'

const stepLabels = [
  'اطلاعات شخصی',
  'مدارک',
  'بدهی‌ها',
  'اسناد وام',
  'اضطراری',
  'اطلاعات همسر',
]

function CardSection({ title, icon, colorClass, children }) {
  return (
    <section className="form-card">
      <div className={`card-header ${colorClass}`}>
        <span className="card-icon">{icon}</span>
        <h3>{title}</h3>
      </div>
      <div className="card-body">{children}</div>
    </section>
  )
}

function App() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <div className="page" dir="rtl">
      <header className="top-header">
        <div className="title-group">
          <div>
            <h1>سیستم ثبت اطلاعات پرسنلی</h1>
            <p>Human Resources Management System</p>
          </div>
          <div className="logo-circle">HR</div>
        </div>
      </header>

      <section className="hero-bar">
        <div>
          <h2>فرم جامع ثبت اطلاعات پرسنلی</h2>
          <p>لطفا تمامی بخش‌ها را با دقت و صحت کامل تکمیل نمایید</p>
        </div>
        <div className="progress-wrap">
          <strong>100%</strong>
          <span>پیشرفت تکمیل فرم</span>
          <div className="progress-track">
            <div className="progress-fill" />
          </div>
          <small>مرحله 6 از 6</small>
        </div>
      </section>

      <section className="steps">
        {stepLabels.map((step, i) => (
          <div key={step} className="step-item done">
            <span>{i + 1}</span>
            <p>{step}</p>
          </div>
        ))}
      </section>

      {submitted && (
        <section className="success-box">
          <div className="check">✓</div>
          <h3>اطلاعات با موفقیت ثبت شد</h3>
          <p>اطلاعات پرسنلی شما ثبت شد. از همکاری شما متشکریم.</p>
        </section>
      )}

      <main className="content">
        <CardSection title="اطلاعات شخصی" icon="👤" colorClass="blue">
          <div className="grid-3">
            <input placeholder="نام" />
            <input placeholder="نام خانوادگی" />
            <input placeholder="نام پدر" />
            <input placeholder="کد ملی" />
            <input placeholder="شماره شناسنامه" />
            <input placeholder="تاریخ تولد" />
            <input placeholder="محل تولد" />
            <input placeholder="وضعیت تاهل" />
            <input placeholder="شماره موبایل" />
          </div>
        </CardSection>

        <CardSection title="مدارک و مستندات" icon="📄" colorClass="purple">
          <div className="grid-2">
            <label className="upload-box">کپی صفحه اول شناسنامه</label>
            <label className="upload-box">کپی کارت ملی (رو)</label>
            <label className="upload-box">کپی توضیحات شناسنامه</label>
            <label className="upload-box">کپی کارت ملی (پشت)</label>
          </div>
        </CardSection>

        <CardSection title="اطلاعات بدهی‌ها" icon="🧾" colorClass="orange">
          <div className="grid-3">
            <input placeholder="شرح کالا/خدمات" />
            <input placeholder="مبلغ کل" />
            <input placeholder="تعداد اقساط" />
            <input placeholder="مبلغ هر قسط" />
            <input placeholder="تاریخ شروع" />
            <input placeholder="مانده بدهی" />
          </div>
        </CardSection>

        <CardSection title="اسناد وام" icon="📑" colorClass="green">
          <div className="grid-3">
            <input placeholder="شماره ثبت سند" />
            <input placeholder="نوع سند" />
            <input placeholder="مبلغ سند" />
            <input placeholder="تاریخ ثبت" />
            <input placeholder="نام بانک / موسسه" />
            <input placeholder="شماره حساب وام" />
          </div>
        </CardSection>

        <CardSection title="اطلاعات تماس اضطراری" icon="☎" colorClass="red">
          <div className="grid-3">
            <input placeholder="نام و نام خانوادگی" />
            <input placeholder="نسبت با پرسنل" />
            <input placeholder="شماره موبایل" />
            <input placeholder="شماره منزل" />
            <input placeholder="شماره محل کار" />
            <input placeholder="آدرس" />
          </div>
        </CardSection>

        <CardSection title="اطلاعات همسر" icon="❤" colorClass="teal">
          <div className="grid-3">
            <input placeholder="نام و نام خانوادگی همسر" />
            <input placeholder="کد ملی همسر" />
            <input placeholder="شماره موبایل همسر" />
            <input placeholder="شغل همسر" />
            <input placeholder="محل کار همسر" />
            <input placeholder="آدرس محل کار همسر" />
          </div>
        </CardSection>

        <button className="submit-btn" onClick={() => setSubmitted(true)}>
          ثبت نهایی فرم
        </button>
      </main>

      <footer className="footer">سیستم مدیریت منابع انسانی — نسخه ۱.۰ — تمامی اطلاعات محرمانه است</footer>
    </div>
  )
}

export default App
