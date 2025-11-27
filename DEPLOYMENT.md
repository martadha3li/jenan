# تعليمات النشر على Vercel

## الطريقة الأسهل: رفع مباشر

### 1. رفع الملفات
- اذهب إلى [vercel.com](https://vercel.com)
- سجل دخولك
- اضغط "New Project"
- اختر "Browse Template" → "Deploy"
- ارفع جميع الملفات من مجلد `deployment`

### 2. إعدادات النشر
- **Framework Preset**: Other
- **Build Command**: (اتركه فارغ)
- **Output Directory**: (اتركه فارغ)
- **Install Command**: (اتركه فارغ)

### 3. النشر
- اضغط "Deploy"
- انتظر 1-2 دقيقة
- ستحصل على رابط مثل: `https://your-app-name.vercel.app`

## الطريقة الثانية: GitHub

### 1. إنشاء مستودع
- اذهب إلى GitHub
- اضغط "New repository"
- سمّه: `mafatih-al-jinan`
- اجعله Public
- اضغط "Create repository"

### 2. رفع الملفات
- اضغط "uploading an existing file"
- ارفع جميع الملفات من مجلد `deployment`
- أضف رسالة: "Initial commit - PWA app"
- اضغط "Commit changes"

### 3. الربط بـ Vercel
- اذهب إلى Vercel
- اضغط "New Project"
- اختر "Import Git Repository"
- اختر مستودعك
- اضغط "Import"
- اتبع نفس إعدادات النشر أعلاه

## بعد النشر

### رابط التطبيق
ستحصل على رابط مثل:
- `https://mafatih-al-jinan.vercel.app`
- `https://your-app-name.vercel.app`

### مشاركة الرابط
انسخ الرابط وشاركه مع أي شخص

### تثبيت على الهاتف
- افتح الرابط في المتصفح
- اضغط "Install App" أو "إضافة للشاشة الرئيسية"

## استكشاف الأخطاء

### التطبيق لا يظهر بشكل صحيح
- تأكد من رفع جميع الملفات
- تحقق من اسم `index.html` (يجب أن يكون بالضبط)
- انتظر دقائق قليلة بعد النشر

### مشاكل PWA
- تأكد من رفع `manifest.json`
- تحقق من وجود الأيقونات
- اضغط "Refresh" في المتصفح

### النصوص العربية لا تظهر
- هذا طبيعي في بعض المتصفحات
- جرب Chrome أو Safari
- تأكد من استخدام HTTPS

## تخصيص الرابط

### اسم المستخدم
- `https://your-name.vercel.app/mafatih-al-jinan`

### اسم مخصص
- اذهب إلى إعدادات المشروع
- اضغط "Domains"
- أضف نطاقك الخاص

## دعم
للحصول على مساعدة: [دعم Vercel](https://vercel.com/support)