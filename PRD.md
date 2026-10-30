# سند نیازمندی محصول (PRD) — وب‌سایت شخصی Portfolio

## 1. Product Overview

### 1.1 معرفی محصول

این محصول یک وب‌سایت شخصی تک‌صفحه‌ای و دو‌زبانه برای معرفی سوابق حرفه‌ای، مهارت‌ها، تجربه‌های کاری، پروژه‌ها و راه‌های ارتباطی `{{FULL_NAME}}` است. هدف اصلی آن فراهم‌کردن یک نمای حرفه‌ای، سریع و قابل‌اعتماد برای Recruiters و Employers است؛ به‌گونه‌ای که بتوانند در مدت کوتاهی تناسب فرد با فرصت‌های شغلی را ارزیابی و برای ادامه ارتباط اقدام کنند.

وب‌سایت با `Nuxt`، `Vue 3`، `TypeScript` و `Tailwind CSS` ساخته می‌شود. محتوای Portfolio به‌صورت local و typed در پروژه نگهداری خواهد شد و محصول به database، authentication، admin panel یا backend نیاز ندارد.

### 1.2 زبان و جهت نمایش

- زبان پیش‌فرض وب‌سایت English است.
- زبان دوم فارسی است و باید با جهت `RTL` نمایش داده شود.
- کاربر می‌تواند از طریق Language Switcher زبان را تغییر دهد.
- انتخاب زبان در مرورگر ذخیره می‌شود و در بازدید بعدی بازیابی خواهد شد.
- محتوای English باید در خروجی اولیه و SSRشده در دسترس باشد.

### 1.3 جهت طراحی

پیاده‌سازی رابط کاربری باید بر اساس طرح زیر و به‌صورت `pixel-perfect` انجام شود:

**Figma Design:** [Portfolio Complete Home Page Design](https://www.figma.com/design/dXC9vnlZClLbiT0p80EgYa/Portfolio-Complete-home-page-Design--Community-?node-id=3-15&t=9mO6NjTpmJWcjVP0-0)

فاصله‌گذاری، اندازه‌ها، typography، رنگ‌ها، borderها، radiusها، تصاویر، iconها، چیدمان، نسبت عناصر و visual hierarchy باید تا حد ممکن با Figma منطبق باشند. تغییرات responsive باید هویت بصری و ترتیب محتوایی طرح اصلی را حفظ کنند و صرفاً برای استفاده صحیح در اندازه‌های کوچک‌تر تطبیق داده شوند.

تنها تفاوت‌های مجاز با طرح مرجع عبارت‌اند از:

- حذف کامل section مربوط به Services؛
- حذف کامل section مربوط به Reviews؛
- حذف کامل section مربوط به Blog؛
- حذف Contact Form از Contact section.

سایر sectionها و اجزای طرح، از جمله Navigation، Hero، About، Skills، Experience، Portfolio، اطلاعات تماس، social links و Footer باید مطابق Figma حفظ شوند. محتوای placeholder می‌تواند جایگزین متن و تصاویر نمونه طرح شود، اما نباید ساختار یا presentation بصری آن را تغییر دهد.

### 1.4 دامنه نسخه اول

نسخه اول شامل Navigation، Hero، About، Skills، Experience، Portfolio، Contact و Footer است. قابلیت‌های زیر خارج از دامنه هستند:

- database یا CMS؛
- authentication و admin panel؛
- Contact Form و ارسال server-side؛
- Blog، Testimonials/Reviews و Services؛
- analytics پیشرفته، dashboard یا قابلیت‌های اجتماعی؛
- صفحه جداگانه برای هر پروژه؛
- theme switcher میان dark و light.

## 2. Problem Statement

اطلاعات حرفه‌ای یک فرد معمولاً میان رزومه، پروفایل‌های اجتماعی و repositoryهای مختلف پراکنده است. این پراکندگی باعث می‌شود Recruiters و Employers برای شناخت توانمندی‌ها، تجربه‌ها و نمونه‌کارهای فرد زمان بیشتری صرف کنند یا نتوانند تصویری منسجم از ارزش حرفه‌ای او به دست آورند.

محصول باید یک مرجع مرکزی، سریع و قابل‌استفاده ایجاد کند که مهم‌ترین اطلاعات حرفه‌ای را با ساختاری واضح نمایش دهد، کیفیت پروژه‌ها را قابل ارزیابی کند و مسیر تماس یا دریافت رزومه را کوتاه سازد. همچنین باید برای مخاطبان فارسی‌زبان و انگلیسی‌زبان، در موبایل و دسکتاپ، تجربه‌ای مناسب ارائه دهد.

## 3. Product Goals

### 3.1 اهداف اصلی

1. ارائه خلاصه‌ای روشن از هویت و جایگاه حرفه‌ای `{{FULL_NAME}}` در بخش Hero.
2. امکان بررسی سریع مهارت‌ها، تجربه‌های کاری و پروژه‌های منتخب توسط Recruiters.
3. فراهم‌کردن دسترسی مستقیم به live demo، GitHub repository، رزومه PDF، email و social profiles.
4. ارائه تجربه responsive، قابل‌دسترس و دو‌زبانه در یک صفحه واحد.
5. نگهداری ساده محتوا برای یک توسعه‌دهنده مبتدی، بدون نیاز به زیرساخت یا dependency غیرضروری.
6. رعایت SEO پایه برای معرفی بهتر صفحه در موتورهای جست‌وجو و هنگام اشتراک‌گذاری لینک.

### 3.2 شاخص‌های موفقیت نسخه اول

- همه sectionهای اصلی از Navigation قابل دسترسی باشند.
- تغییر زبان تمام محتوای قابل مشاهده و جهت صفحه را به‌درستی به‌روزرسانی کند.
- تمام CTAها و لینک‌های دارای مقدار معتبر به مقصد درست هدایت شوند.
- صفحه در viewportهای موبایل، تبلت و دسکتاپ بدون horizontal overflow ناخواسته قابل استفاده باشد.
- تمام تعاملات اصلی با keyboard قابل انجام باشند.
- محتوای اصلی English بدون وابستگی به اجرای client-side JavaScript در HTML اولیه موجود باشد.

## 4. Target Audience

### 4.1 مخاطب اصلی

**Recruiters:** افرادی که باید در زمان محدود عنوان حرفه‌ای، مهارت‌های کلیدی، سابقه کاری، پروژه‌های شاخص و راه تماس با مالک Portfolio را بررسی کنند.

### 4.2 مخاطبان ثانویه

- **Employers و Hiring Managers:** برای ارزیابی دقیق‌تر تجربه و تناسب فنی فرد با موقعیت شغلی.
- **Clients:** برای مشاهده کیفیت نمونه‌کارها و تصمیم‌گیری درباره همکاری پروژه‌ای.
- **Professional Collaborators:** برای شناخت حوزه‌های تخصصی و یافتن راه ارتباط حرفه‌ای.

### 4.3 نیازهای مشترک مخاطبان

- دریافت سریع اطلاعات بدون جست‌وجوی پیچیده؛
- مشاهده پروژه‌ها همراه با نقش فرد و technologies استفاده‌شده؛
- اطمینان از به‌روز و معتبر بودن لینک‌ها؛
- استفاده آسان در موبایل و دسکتاپ؛
- امکان تماس یا دانلود رزومه با حداقل تعامل.

## 5. User Stories

| ID | User Story | معیار پذیرش |
|---|---|---|
| US-01 | به‌عنوان Recruiter می‌خواهم نام، عنوان حرفه‌ای و ارزش پیشنهادی فرد را بلافاصله ببینم تا تناسب اولیه او را ارزیابی کنم. | اطلاعات اصلی در Hero و پیش از نیاز به scroll طولانی نمایش داده شود. |
| US-02 | به‌عنوان Recruiter می‌خواهم به sectionهای اصلی دسترسی مستقیم داشته باشم تا اطلاعات موردنیازم را سریع پیدا کنم. | انتخاب هر Navigation item کاربر را با smooth scrolling به section متناظر منتقل کند. |
| US-03 | به‌عنوان بازدیدکننده فارسی‌زبان می‌خواهم زبان را به فارسی تغییر دهم تا محتوا را با جهت درست مطالعه کنم. | پس از انتخاب فارسی، متن ترجمه شود و `dir="rtl"` و language metadata مناسب اعمال شود. |
| US-04 | به‌عنوان بازدیدکننده بازگشتی می‌خواهم زبان انتخابی من حفظ شود تا مجبور به انتخاب مجدد نباشم. | انتخاب معتبر زبان بعد از reload و بازدید مجدد بازیابی شود. |
| US-05 | به‌عنوان Hiring Manager می‌خواهم مهارت‌ها را به‌صورت دسته‌بندی‌شده ببینم تا دامنه توانمندی فرد را سریع بررسی کنم. | هر skill زیر یک category مشخص نمایش داده شود و اطلاعات در هر دو زبان موجود باشد. |
| US-06 | به‌عنوان Recruiter می‌خواهم سوابق کاری را به ترتیب زمانی ببینم تا مسیر شغلی فرد را درک کنم. | هر سابقه شامل job title، company، بازه زمانی و توضیح کوتاه باشد و موارد جدیدتر ابتدا نمایش داده شوند. |
| US-07 | به‌عنوان Client یا Employer می‌خواهم پروژه‌های منتخب، technologies و لینک‌های مرتبط را ببینم تا کیفیت کار را ارزیابی کنم. | هر project card اطلاعات الزامی را نمایش دهد و لینک‌های موجود قابل بازشدن باشند. |
| US-08 | به‌عنوان Recruiter می‌خواهم رزومه را دانلود کنم تا آن را در فرایند استخدام نگهداری یا به اشتراک بگذارم. | CTA رزومه به PDF محلی معتبر متصل باشد و نام فایل دانلودی قابل‌فهم باشد. |
| US-09 | به‌عنوان بازدیدکننده می‌خواهم اطلاعات تماس و social profileهای فرد را ببینم تا همکاری را ادامه دهم. | Contact مطابق Figma شامل Address، Phone، Email و social links باشد، `mailto:` و `tel:` درست عمل کنند و Contact Form نمایش داده نشود. |
| US-10 | به‌عنوان کاربر keyboard یا screen reader می‌خواهم صفحه را بدون مانع پیمایش کنم تا به همه محتوای اصلی دسترسی داشته باشم. | ترتیب focus منطقی، focus indicator قابل مشاهده، landmarkها و labelهای مناسب وجود داشته باشند. |

## 6. Functional Requirements

### 6.1 ساختار محتوا و Localization

#### FR-01 — منبع محتوای محلی

تمام محتوای Portfolio باید در یک ساختار local و typed نگهداری شود. مدل محتوا باید حداقل اطلاعات مربوط به profile، navigation، skills، experiences، projects، contact و SEO را برای هر دو زبان پوشش دهد.

**Acceptance Criteria:**

- محتوای شخصی برای تغییرات معمول نیازمند ویرایش componentها نباشد.
- TypeScript نبودن fieldهای الزامی یا استفاده از locale نامعتبر را مشخص کند.
- هیچ درخواست runtime به database یا CMS انجام نشود.

#### FR-02 — Language Switcher

Navigation باید کنترل تغییر زبان میان `en` و `fa` را ارائه دهد.

**Acceptance Criteria:**

- زبان اولیه English باشد، مگر اینکه مقدار معتبر قبلی در مرورگر ذخیره شده باشد.
- تغییر زبان، تمام متن‌های محتوایی، labelهای navigation، CTAها و SEO client-side قابل‌تغییر را هماهنگ به‌روزرسانی کند.
- در English مقدار `lang="en"` و `dir="ltr"` و در فارسی مقدار `lang="fa"` و `dir="rtl"` روی document اعمال شود.
- مقدار انتخاب‌شده فقط با APIهای مرورگر و بدون backend ذخیره شود.
- مقدار ذخیره‌شده نامعتبر نادیده گرفته شود و English fallback باشد.

### 6.2 Navigation

#### FR-03 — Navigation اصلی

Navigation باید لینک‌های Home، About، Skills، Experience، Portfolio و Contact را نمایش دهد.

**Acceptance Criteria:**

- هر لینک به `id` یکتای section متناظر اشاره کند.
- حرکت بین sectionها smooth باشد.
- section مقصد هنگام استفاده از navigation ثابت زیر header پنهان نشود.
- وضعیت hover و keyboard focus برای عناصر تعاملی قابل تشخیص باشد.

#### FR-04 — Navigation موبایل

در viewportهای کوچک، لینک‌ها باید در منوی جمع‌شونده قرار گیرند.

**Acceptance Criteria:**

- دکمه منو نام accessible و وضعیت `aria-expanded` صحیح داشته باشد.
- منو با انتخاب یک لینک بسته شود.
- کاربر بتواند منو را تنها با keyboard باز، پیمایش و بسته کند.
- بازبودن منو باعث horizontal overflow صفحه نشود.

### 6.3 Hero

#### FR-05 — معرفی اولیه

Hero باید `{{FULL_NAME}}`، `{{PROFESSIONAL_TITLE}}`، متن کوتاه `{{PROFESSIONAL_SUMMARY}}` و تصویر `{{PROFILE_IMAGE}}` را نمایش دهد.

**Acceptance Criteria:**

- فقط یک `h1` در صفحه وجود داشته باشد و نام یا عنوان حرفه‌ای را شامل شود.
- تصویر دارای alt text معنادار باشد؛ اگر صرفاً تزئینی است alt خالی داشته باشد.
- نبود تصویر واقعی layout را خراب نکند و placeholder یا fallback مناسب نمایش داده شود.

#### FR-06 — CTAهای Hero

Hero باید CTAهای مشاهده پروژه‌ها، تماس و دانلود رزومه را ارائه دهد.

**Acceptance Criteria:**

- CTA پروژه‌ها به Portfolio و CTA تماس به Contact منتقل شود.
- CTA رزومه به فایل محلی `{{RESUME_PDF_PATH}}` متصل باشد.
- در صورت موجودنبودن PDF، CTA در نسخه production نباید لینک شکسته تولید کند و باید تا زمان افزودن فایل غیرفعال یا حذف شود.

### 6.4 About

#### FR-07 — معرفی حرفه‌ای

About باید background حرفه‌ای، سطح یا مدت experience، حوزه‌های تخصصی و career interests را با placeholderهای `{{ABOUT_TEXT}}` و `{{CAREER_INTERESTS}}` نمایش دهد.

**Acceptance Criteria:**

- محتوا در هر دو زبان موجود باشد.
- متن با heading مشخص و paragraphهای کوتاه و خوانا ارائه شود.
- اطلاعات شخصی تأییدنشده به‌صورت ساختگی درج نشود.

### 6.5 Skills

#### FR-08 — مهارت‌های دسته‌بندی‌شده

Skills باید مهارت‌های فنی و حرفه‌ای را در categoryهای قابل‌تعریف نمایش دهد؛ مانند Frontend، Backend/Tools و Professional Skills.

**Acceptance Criteria:**

- هر category عنوان و حداقل یک skill قابل‌پیکربندی داشته باشد.
- هر skill حداقل شامل نام باشد؛ icon و توضیح کوتاه اختیاری هستند.
- سطح مهارت به‌صورت درصد یا progress bar نمایش داده نشود، مگر داده واقعی و قابل دفاع ارائه شود.
- cardها در موبایل ستونی و در صفحه بزرگ چندستونی باشند.

### 6.6 Experience

#### FR-09 — سوابق کاری

Experience باید سابقه‌های کاری را به‌صورت timeline یا cardهای زمانی نمایش دهد.

**Acceptance Criteria:**

- هر مورد شامل `{{JOB_TITLE}}`، `{{COMPANY_NAME}}`، `{{START_DATE}}`، `{{END_DATE_OR_PRESENT}}` و `{{JOB_DESCRIPTION}}` باشد.
- موارد به‌ترتیب جدیدترین به قدیمی‌ترین نمایش داده شوند.
- تاریخ و وضعیت Present در هر دو زبان قالب خوانا داشته باشند.
- توضیح هر تجربه کوتاه و متمرکز بر مسئولیت یا دستاورد باشد.

### 6.7 Portfolio

#### FR-10 — نمایش پروژه‌ها

Portfolio باید مجموعه‌ای از project cardهای منتخب را نمایش دهد.

**Acceptance Criteria:**

- هر card شامل `{{PROJECT_TITLE}}`، `{{PROJECT_DESCRIPTION}}`، `{{PROJECT_IMAGE}}` و فهرست technologies باشد.
- هر پروژه بتواند به‌صورت مستقل Live Demo و GitHub URL اختیاری داشته باشد.
- لینک اختیاری فقط زمانی نمایش داده شود که URL معتبر برای آن موجود باشد.
- لینک‌های خارجی در tab جدید باز شوند و از `rel="noopener noreferrer"` استفاده کنند.
- تصویر ناموجود با fallback ثابت جایگزین شود و layout card حفظ شود.
- در نسخه اول modal، filtering، pagination و صفحه جزئیات پروژه وجود نداشته باشد.

### 6.8 Contact

#### FR-11 — راه‌های ارتباطی

Contact باید مطابق طرح Figma اطلاعات `{{ADDRESS}}`، `{{PHONE_NUMBER}}`، `{{EMAIL}}` و social links قابل‌پیکربندی مانند `{{LINKEDIN_URL}}` و `{{GITHUB_PROFILE_URL}}` را نمایش دهد، اما Contact Form را شامل نشود.

**Acceptance Criteria:**

- email از لینک `mailto:` استفاده کند.
- شماره تلفن از لینک `tel:` استفاده کند و Address به‌صورت متن قابل‌خواندن نمایش داده شود.
- social link فقط در صورت داشتن URL معتبر نمایش داده شود.
- هر لینک دارای نام قابل‌فهم برای screen reader باشد.
- ساختار و presentation اطلاعات تماس و social links با Figma منطبق باشد.
- Contact Form و کنترل‌های Name، Email، Subject، Message و Submit نمایش داده نشوند.

### 6.9 Footer

#### FR-12 — اطلاعات Footer

Footer باید نام مالک، copyright و دسترسی کوتاه به social links را نمایش دهد.

**Acceptance Criteria:**

- متن شامل `{{FULL_NAME}}` و سال جاری باشد.
- سال بدون نیاز به ویرایش سالانه از تاریخ سیستم تولید شود.
- متن Copyright در هر دو زبان ارائه شود.

### 6.10 تعاملات و Motion

#### FR-13 — انیمیشن‌های سبک

محصول می‌تواند از transitionهای کوتاه برای hover، بازشدن menu و نمایان‌شدن محتوا استفاده کند.

**Acceptance Criteria:**

- motion مانع دسترسی به محتوا یا تعامل نشود.
- در صورت فعال‌بودن `prefers-reduced-motion: reduce`، animationهای غیرضروری حذف یا به حالت فوری تبدیل شوند.
- هیچ animation سنگین، autoplay media یا dependency بزرگ صرفاً برای جلوه بصری اضافه نشود.

## 7. Non-Functional Requirements

### NFR-01 — Technology Stack

- پروژه باید از `Nuxt`، `Vue 3`، `TypeScript` و `Tailwind CSS` استفاده کند.
- componentها باید با الگوی استاندارد Vue 3 و ساختار ساده و beginner-friendly نوشته شوند.
- افزودن dependency جدید تنها زمانی مجاز است که با APIهای داخلی Vue/Nuxt و CSS قابل پیاده‌سازی معقول نباشد.

### NFR-02 — Responsive Design

- طراحی باید mobile-first باشد.
- صفحه باید حداقل در عرض‌های 320px، 768px و 1280px بدون overlap، محتوای بریده یا horizontal overflow ناخواسته قابل استفاده باشد.
- cardها باید در موبایل تک‌ستونی و با افزایش فضای صفحه به چیدمان چندستونی تبدیل شوند.
- Navigation موبایل و desktop باید رفتار سازگار و قابل پیش‌بینی داشته باشند.

### NFR-03 — Accessibility

- ساختار صفحه باید از عناصر semantic شامل `header`، `nav`، `main`، `section` و `footer` استفاده کند.
- heading hierarchy باید منطقی باشد و صفحه فقط یک `h1` داشته باشد.
- تمام تعاملات باید با keyboard قابل انجام باشند و focus indicator قابل مشاهده داشته باشند.
- متن و کنترل‌های تعاملی باید حداقل با سطح `WCAG 2.1 AA` از نظر contrast هدف‌گذاری شوند.
- تصاویر informative باید alt text معنادار و تصاویر تزئینی alt خالی داشته باشند.
- تغییر زبان و جهت نباید ترتیب خواندن screen reader یا ترتیب focus را مختل کند.

### NFR-04 — Performance

- تصاویر باید در اندازه مناسب، با فرمت بهینه و برای محتوای پایین صفحه با lazy loading بارگذاری شوند.
- تصویر اصلی Hero نباید بدون تعیین ابعاد باعث layout shift محسوس شود.
- JavaScript و dependencyهای غیرضروری نباید به bundle اضافه شوند.
- هدف نسخه production در شرایط متعارف، امتیاز حداقل 90 برای Performance در Lighthouse موبایل است؛ نتیجه ممکن است با محیط اجرا و شبکه تغییر کند.

### NFR-05 — SEO و Social Sharing

- صفحه باید title و meta description معنادار با placeholderهای `{{SEO_TITLE}}` و `{{SEO_DESCRIPTION}}` داشته باشد.
- metadata پایه Open Graph شامل title، description، type و `{{OG_IMAGE}}` تعریف شود.
- URLهای sectionها باید anchorهای قابل‌فهم و پایدار داشته باشند.
- محتوای اصلی English در SSR output وجود داشته باشد.
- metadata نباید شامل ادعا یا اطلاعات شخصی تأییدنشده باشد.

### NFR-06 — Browser Compatibility

- نسخه آخر و یک نسخه قبل از Chrome، Edge، Firefox و Safari باید پشتیبانی شوند.
- قابلیت‌های اصلی نباید به API آزمایشی یا browser-specific وابسته باشند.
- در صورت نبود پشتیبانی از ذخیره‌سازی مرورگر، سایت باید با English پیش‌فرض و بدون خطای مسدودکننده کار کند.

### NFR-07 — Maintainability

- داده‌های محتوایی، منطق locale و componentهای نمایشی باید مسئولیت‌های مجزا داشته باشند.
- Typeها و نام‌گذاری fieldها باید برای content editor فنی قابل‌فهم باشند.
- مقدارهای رنگ، spacing و typography تکرارشونده باید از theme/config یا utilityهای استاندارد Tailwind استفاده کنند.
- placeholderها باید به‌آسانی قابل جست‌وجو باشند و قبل از انتشار با اطلاعات واقعی جایگزین شوند.

### NFR-08 — Reliability و Graceful Degradation

- نبود project link، social link، تصویر یا فایل رزومه نباید باعث crash یا layout شکسته شود.
- لینک‌های اختیاری بدون مقدار معتبر نباید render شوند.
- خطای دسترسی به browser storage نباید مانع نمایش محتوای صفحه شود.
- بدون animation نیز تمام محتوا و عملکردهای اصلی در دسترس باشند.

### NFR-09 — Privacy و Security

- هیچ اطلاعات حساس، secret، API key یا داده‌ای فراتر از اطلاعات حرفه‌ای عمومی در repository قرار نگیرد.
- لینک‌های خارجی که در tab جدید باز می‌شوند باید `noopener noreferrer` داشته باشند.
- محصول نباید بدون نیاز مشخص cookie، tracker یا داده شخصی بازدیدکننده ذخیره کند؛ تنها ترجیح زبان می‌تواند local ذخیره شود.

### NFR-10 — معیار آمادگی انتشار

نسخه اول زمانی آماده انتشار است که:

- تمام requirementهای `FR-01` تا `FR-13` و `NFR-01` تا `NFR-09` برآورده شده باشند؛
- همه placeholderهای ضروری برای محتوای عمومی با داده تأییدشده جایگزین شده باشند؛
- هیچ لینک شکسته یا CTA بدون مقصد معتبر در صفحه وجود نداشته باشد؛
- رفتار LTR/RTL، keyboard navigation و layout در viewportهای هدف بررسی شده باشد؛
- sectionهای خارج از دامنه وارد محصول نشده باشند.
