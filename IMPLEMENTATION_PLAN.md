# برنامه پیاده‌سازی وب‌سایت شخصی Portfolio

## 1. مقدمه و قواعد اجرا

این سند مسیر پیاده‌سازی مرحله‌ای محصول تعریف‌شده در [PRD.md](./PRD.md) را برای توسعه AI-assisted مشخص می‌کند. هر phase باید کوچک، قابل‌بررسی و مستقل باشد و فقط پس از تأیید خروجی‌های phase قبلی آغاز شود.

### تصمیم فنی این برنامه

در PRD، `TypeScript` ذکر شده است؛ اما آخرین درخواست اجرایی، استفاده از `JavaScript` را مشخص می‌کند. این برنامه از `Nuxt`، `Vue 3`، `JavaScript` و `Tailwind CSS` استفاده می‌کند. برای حفظ مزایای ساختار typed بدون تبدیل پروژه به TypeScript، مدل محتوای local با `JSDoc` و `// @ts-check` مستند می‌شود. پیش از شروع implementation، این تغییر stack باید به‌عنوان جایگزین الزام TypeScript در PRD پذیرفته‌شده در نظر گرفته شود.

### قواعد مشترک همه phaseها

- مرجع UI طرح [Portfolio Complete Home Page Design در Figma](https://www.figma.com/design/dXC9vnlZClLbiT0p80EgYa/Portfolio-Complete-home-page-Design--Community-?node-id=3-15&t=9mO6NjTpmJWcjVP0-0) است و خروجی باید در desktop تا حد ممکن `pixel-perfect` باشد.
- Services، Reviews، Blog و Contact Form نباید پیاده‌سازی شوند؛ سایر اجزای Figma حفظ می‌شوند.
- English زبان پیش‌فرض و SSRشده است؛ فارسی زبان دوم با `RTL` کامل است.
- content، locale logic و UI components باید از یکدیگر جدا بمانند.
- database، CMS، authentication، backend و dependency غیرضروری خارج از دامنه هستند.
- verificationهای این سند بخشی از اجرای آینده‌اند و در زمان ایجاد این برنامه اجرا نمی‌شوند.

## 2. نمای کلی phaseها

| Phase | عنوان | خروجی اصلی |
|---|---|---|
| 1 | Project Setup | پروژه Nuxt آماده، Tailwind فعال و ساختار محتوا تعریف‌شده |
| 2 | Base Layout and Reusable Components | App shell، Navigation، localization و اجزای مشترک |
| 3 | Portfolio Content Sections | تمام sectionهای محتوایی متصل به داده local |
| 4 | Responsive Design | چیدمان پایدار در موبایل، تبلت و دسکتاپ و RTL صحیح |
| 5 | Animations and Contact Interactions | motion سبک، لینک‌های تماس و تعاملات کامل |
| 6 | UI Refinement and SEO | تطبیق pixel-perfect، accessibility، performance و SEO |
| 7 | GitHub and Deployment | repository مستند، deployment پایدار و release نهایی |

---

## Phase 1 — Project Setup

### Goal

ایجاد یک پایه ساده و قابل‌فهم برای پروژه Nuxt و آماده‌کردن ساختار فایل‌ها، Tailwind، assetها و محتوای دو‌زبانه بدون شروع طراحی sectionها.

### Main tasks

1. ایجاد پروژه Nuxt با Vue 3 و JavaScript و انتخاب `npm` به‌عنوان package manager.
2. افزودن و پیکربندی Tailwind CSS با روش رسمی سازگار با نسخه Nuxt انتخاب‌شده.
3. تعریف stylesheet سراسری برای resetهای محدود، رنگ پس‌زمینه، typography پایه، smooth scrolling و focus styles.
4. ایجاد ساختار beginner-friendly زیر:
   - `components/` برای UI components؛
   - `composables/` برای locale و رفتارهای مشترک؛
   - `data/` برای محتوای English و فارسی؛
   - `assets/css/` برای styleهای سراسری؛
   - `public/images/` برای تصاویر؛
   - `public/documents/` برای Resume PDF.
5. استخراج design tokenهای پایه از Figma شامل رنگ‌ها، font family، font sizeهای اصلی، spacing، border radius، container width و shadowها.
6. تعریف ساختار local content برای `profile`، `navigation`، `about`، `skills`، `experiences`، `projects`، `contact`، `footer` و `seo` در هر دو locale.
7. مستندسازی shape داده‌ها با JSDoc و فعال‌کردن بررسی editor با `// @ts-check` برای فایل‌های content و locale logic.
8. قراردادن placeholderهای PRD برای اطلاعات تأییدنشده و تهیه فهرست assetهای لازم از جمله profile image، project images، icons، Resume PDF و Open Graph image.
9. تنظیم English به‌عنوان داده پیش‌فرضی که در SSR render می‌شود؛ دسترسی به `localStorage` باید فقط در client انجام شود.

### Expected deliverables

- پروژه Nuxt قابل توسعه با Tailwind CSS.
- ساختار پوشه‌ها و naming convention مشخص.
- design tokenهای اولیه مطابق Figma.
- مدل محتوای local دو‌زبانه با JSDoc.
- inventory کامل placeholderها و assetهای موردنیاز.
- تنظیمات پایه SSR و locale پیش‌فرض English.

### Dependencies

- PRD تأییدشده.
- دسترسی خواندنی به فایل Figma.
- نسخه LTS پشتیبانی‌شده Node.js و `npm`.
- تصمیم ثبت‌شده برای استفاده از JavaScript به‌جای TypeScript.

### Verification and acceptance checks

- ساختار پروژه فقط از Nuxt، Vue 3، JavaScript و Tailwind CSS استفاده کند.
- package غیرضروری، backend، database یا CMS اضافه نشده باشد.
- همه گروه‌های محتوایی PRD در data model وجود داشته باشند.
- داده English کامل‌ترین fallback باشد و دسترسی server-side به browser API وجود نداشته باشد.
- placeholderها قابل جست‌وجو و در componentها hard-code نشده باشند.
- tokenهای اصلی با مقادیر Figma مستند شده باشند.

---

## Phase 2 — Base Layout and Reusable Components

### Goal

ساخت اسکلت semantic صفحه، مدیریت زبان و مجموعه کوچک componentهای reusable که sectionهای بعدی روی آن‌ها ساخته می‌شوند.

### Main tasks

1. ایجاد App shell با `header`، `nav`، `main` و `footer` و container سراسری مطابق عرض طرح Figma.
2. تعریف section IDهای پایدار: `home`، `about`، `skills`، `experience`، `portfolio` و `contact`.
3. ساخت Navigation desktop مطابق Figma و آماده‌سازی mobile menu جمع‌شونده.
4. ایجاد Language Switcher برای `en` و `fa` با ویژگی‌های زیر:
   - English به‌عنوان default؛
   - تغییر هم‌زمان محتوا، `lang` و `dir`؛
   - ذخیره انتخاب معتبر در `localStorage`؛
   - fallback به English در صورت خطا یا مقدار نامعتبر؛
   - جلوگیری از SSR hydration mismatch.
5. ساخت componentهای مشترک حداقلی:
   - `AppContainer` برای عرض و padding صفحه؛
   - `SectionHeading` برای heading لایه‌ای Figma؛
   - `BaseButton` یا `BaseLink` برای CTAها؛
   - `BaseCard` فقط در صورتی که واقعاً بین چند section مشترک باشد؛
   - `SocialLinks` برای استفاده در Contact و Footer.
6. افزودن smooth scrolling و `scroll-margin` برای جلوگیری از پنهان‌شدن عنوان section زیر header.
7. تعریف focus state، active state، hover state و labelهای accessible برای Navigation و Language Switcher.

### Expected deliverables

- اسکلت single-page با semantic landmarks.
- Navigation desktop و mobile قابل استفاده.
- تغییر زبان English/Farsi با LTR/RTL صحیح.
- مجموعه کوچک و مستند componentهای reusable.
- heading و CTAهای مشترک با ظاهر پایه منطبق بر Figma.

### Dependencies

- تکمیل Phase 1.
- data model و design tokenهای پایه.
- labelهای Navigation در هر دو زبان.

### Verification and acceptance checks

- صفحه فقط یک `main` داشته باشد و landmarkها semantic باشند.
- تمام Navigation itemها به section ID درست اشاره کنند.
- mobile menu با keyboard باز و بسته شود و `aria-expanded` صحیح داشته باشد.
- انتخاب یک Navigation item منوی موبایل را ببندد.
- تغییر locale تمام labelهای موجود را به‌روزرسانی کند.
- `html lang` و `dir` برای English و فارسی صحیح باشند.
- reload صفحه زبان ذخیره‌شده را بازیابی کند و مقدار نامعتبر به English برگردد.
- در حالت بدون `localStorage`، صفحه بدون crash با English کار کند.

---

## Phase 3 — Portfolio Content Sections

### Goal

پیاده‌سازی تمام sectionهای محتوایی موردنیاز با استفاده از داده local، ساختار Figma و placeholderهای تأییدشده؛ بدون ورود به responsive polish یا animation پیشرفته.

### Main tasks

1. پیاده‌سازی Hero مطابق Figma شامل:
   - `{{FULL_NAME}}`، `{{PROFESSIONAL_TITLE}}` و `{{PROFESSIONAL_SUMMARY}}`؛
   - profile image و حلقه‌ها/اشکال تزئینی؛
   - CTAهای Portfolio، Contact و Resume؛
   - تنها `h1` صفحه.
2. پیاده‌سازی About با heading لایه‌ای، معرفی حرفه‌ای و career interests.
3. پیاده‌سازی Skills بر اساس cardهای Figma و داده‌های دسته‌بندی‌شده؛ بدون درصد ساختگی یا progress bar.
4. پیاده‌سازی Experience به‌ترتیب جدیدترین به قدیمی‌ترین با title، company، date range و description.
5. پیاده‌سازی Portfolio cardها با image، title، description، technologies، Live Demo و GitHub link اختیاری.
6. پیاده‌سازی Contact مطابق Figma با Address، Phone، Email و social links و حذف کامل Contact Form.
7. پیاده‌سازی Footer مطابق Figma با نام مالک، social links و سال جاری dynamic.
8. حذف Services، Reviews و Blog از page flow و Navigation؛ نباید برای آن‌ها empty section یا placeholder ساخته شود.
9. افزودن fallback برای image، Resume و لینک‌های اختیاری:
   - project یا social link نامعتبر render نشود؛
   - image ناموجود layout را نشکند؛
   - Resume CTA بدون فایل معتبر غیرفعال یا مخفی باشد.
10. اطمینان از وجود نسخه English و فارسی برای همه متن‌های قابل مشاهده.

### Expected deliverables

- صفحه کامل از Hero تا Footer با تمام محتوای PRD.
- sectionهای About، Skills، Experience، Portfolio و Contact متصل به local data.
- CTAها و لینک‌های شرطی بدون مقصد شکسته.
- عدم وجود Services، Reviews، Blog و Contact Form.

### Dependencies

- تکمیل Phase 2.
- محتوای placeholder دو‌زبانه.
- تصاویر و iconهای استخراج‌شده یا جایگزین مجاز.
- مسیر موردانتظار Resume PDF.

### Verification and acceptance checks

- ترتیب sectionها با نسخه Figma پس از حذف sectionهای خارج از دامنه سازگار باشد.
- Hero نام، عنوان، خلاصه، تصویر و CTAهای موردنیاز را نمایش دهد.
- Skills دسته‌بندی شده و Experience مرتب‌شده باشد.
- هر project card اطلاعات الزامی را نمایش دهد و لینک‌های خالی را render نکند.
- Contact شامل Address، Phone، Email و social links باشد و هیچ input یا submit button نداشته باشد.
- Email با `mailto:`، Phone با `tel:` و لینک‌های خارجی با `noopener noreferrer` آماده شوند.
- Footer سال جاری را بدون مقدار hard-coded نمایش دهد.
- همه متن‌ها با تغییر locale تعویض شوند و محتوای ساختگی به‌عنوان داده واقعی ارائه نشود.

---

## Phase 4 — Responsive Design

### Goal

تطبیق pixel-perfect نمای desktop با یک رفتار mobile-first پایدار که در English و فارسی بدون overflow یا شکست layout کار کند.

### Main tasks

1. پیاده‌سازی layout اولیه برای عرض 320px و سپس افزودن breakpointهای لازم برای تبلت و desktop.
2. تطبیق header و Navigation:
   - mobile menu در اندازه کوچک؛
   - Navigation کامل در desktop؛
   - header height و offsets مطابق Figma.
3. تنظیم Hero برای نمایش ستونی در موبایل و ترکیب متن/تصویر مطابق Figma در desktop.
4. تبدیل Skills، Experience و Portfolio به layout تک‌ستونی در موبایل و چندستونی در فضای بزرگ‌تر.
5. حفظ visual hierarchy، ترتیب محتوا، card proportions و spacing اصلی Figma در desktop.
6. تنظیم Contact و Footer برای stacking در موبایل و alignment مطابق Figma در desktop.
7. بررسی طول بیشتر متن فارسی، wrapping عنوان‌ها، تاریخ‌ها و CTAها.
8. جلوگیری از overflow در تصاویر، headingهای پس‌زمینه، عناصر تزئینی و mobile menu.
9. تعیین ابعاد و aspect ratio تصاویر برای جلوگیری از layout shift.

### Expected deliverables

- layout mobile-first کامل.
- breakpointهای محدود، روشن و قابل نگهداری.
- نمای desktop نزدیک به Figma و نمای موبایل سازگار با همان design language.
- پشتیبانی پایدار LTR و RTL در تمام sectionها.

### Dependencies

- تکمیل تمام sectionها در Phase 3.
- design tokenها و ابعاد اصلی Figma.
- نمونه متن‌های واقعی یا placeholderهایی با طول نزدیک به محتوای نهایی.

### Verification and acceptance checks

- در عرض‌های 320px، 768px، 1280px و عرض desktop مرجع Figma هیچ horizontal overflow ناخواسته وجود نداشته باشد.
- محتوا overlap یا clipping نداشته باشد و تصاویر از container خارج نشوند.
- cardها در موبایل تک‌ستونی و در desktop مطابق طرح چندستونی باشند.
- Navigation موبایل قابل استفاده و Navigation desktop با Figma هم‌راستا باشد.
- تغییر LTR/RTL ترتیب خواندن، alignment و focus order را خراب نکند.
- CTAها و targetهای لمسی اندازه و فاصله مناسب داشته باشند.

---

## Phase 5 — Animations and Contact Interactions

### Goal

افزودن تعاملات ضروری و motion سبک بدون کاهش performance، accessibility یا سادگی معماری.

### Main tasks

1. افزودن transitionهای کوتاه برای CTAها، links، cards، Language Switcher و mobile menu.
2. در صورت نیاز بصری، افزودن reveal animation سبک برای sectionها با CSS و `IntersectionObserver` داخلی مرورگر؛ بدون animation library.
3. تعریف رفتار `prefers-reduced-motion: reduce` برای حذف یا فوری‌کردن motion غیرضروری.
4. تکمیل interactionهای Contact:
   - بازکردن email با `mailto:`؛
   - بازکردن Phone با `tel:`؛
   - بازکردن social links در tab جدید؛
   - نمایش focus، hover و active state قابل تشخیص.
5. تکمیل interactionهای Hero و Portfolio:
   - scroll به section مقصد؛
   - دانلود Resume با نام فایل قابل‌فهم؛
   - بازکردن Live Demo و GitHub به‌صورت امن.
6. اطمینان از نبود Contact Form، client-side submission یا سرویس خارجی فرم.

### Expected deliverables

- motion محدود و هماهنگ با Figma.
- تمام CTAها و لینک‌های تماس عملیاتی.
- تجربه کامل برای mouse، touch و keyboard.
- fallback قابل استفاده در reduced-motion و نبود IntersectionObserver.

### Dependencies

- تکمیل responsive layout در Phase 4.
- URLهای تأییدشده Contact، social profiles و projects.
- فایل نهایی Resume یا تصمیم مشخص برای مخفی‌ماندن CTA.

### Verification and acceptance checks

- همه لینک‌ها مقصد، protocol و رفتار tab صحیح داشته باشند.
- CTAهای داخلی به section صحیح scroll کنند.
- interactionهای اصلی فقط با keyboard قابل انجام باشند.
- focus indicator در تمام عناصر تعاملی قابل مشاهده باشد.
- با فعال‌بودن reduced-motion هیچ animation غیرضروری اجرا نشود.
- غیرفعال‌بودن animation دسترسی به هیچ محتوا یا عملکردی را محدود نکند.
- هیچ form field، submit logic یا network request برای Contact وجود نداشته باشد.

---

## Phase 6 — UI Refinement and SEO

### Goal

نهایی‌کردن تطبیق pixel-perfect، accessibility، performance، محتوای دو‌زبانه و metadata پیش از انتشار.

### Main tasks

1. مقایسه صفحه با frame اصلی Figma در عرض desktop مرجع و اصلاح اختلاف‌های قابل مشاهده در:
   - container width و alignment؛
   - spacing و section height؛
   - typography و line height؛
   - colors، borders، radiusها و shadows؛
   - اندازه و crop تصاویر؛
   - headingهای لایه‌ای و عناصر تزئینی.
2. بررسی اینکه تنها تفاوت‌های ساختاری با Figma حذف Services، Reviews، Blog و Contact Form باشند.
3. تکمیل accessibility:
   - semantic landmarks و heading hierarchy؛
   - یک `h1`؛
   - alt text مناسب؛
   - accessible names؛
   - contrast هدف `WCAG 2.1 AA`؛
   - focus order منطقی.
4. تکمیل SEO با APIهای داخلی Nuxt:
   - `title` و meta description؛
   - Open Graph title، description، type و image؛
   - canonical URL پس از مشخص‌شدن domain؛
   - favicon و social preview assets؛
   - English content در SSR output.
5. بهینه‌سازی performance بدون dependency اضافی:
   - فرمت و اندازه مناسب imageها؛
   - lazy loading برای تصاویر زیر fold؛
   - ابعاد صریح تصاویر؛
   - حذف asset و style بلااستفاده؛
   - جلوگیری از JavaScript غیرضروری.
6. بازبینی کامل محتوا و جایگزینی placeholderهای عمومی با داده تأییدشده پیش از release.
7. بررسی browser compatibility برای نسخه آخر و یک نسخه قبل Chrome، Edge، Firefox و Safari.

### Expected deliverables

- UI نهایی با تطبیق نزدیک و قابل دفاع با Figma.
- metadata کامل SEO و Open Graph.
- صفحه accessible و keyboard-friendly.
- assetهای بهینه و محتوای نهایی دو‌زبانه.
- release checklist تکمیل‌شده.

### Dependencies

- تکمیل Phase 5.
- محتوای واقعی و تأییدشده مالک Portfolio.
- Resume، profile image، project images و Open Graph image نهایی.
- URL نهایی سایت برای canonical metadata.

### Verification and acceptance checks

- screenshot نمای desktop با Figma مقایسه شود و اختلاف‌های خارج از چهار حذف مجاز اصلاح شوند.
- UI در breakpointهای هدف و هر دو locale بازبینی شود.
- فقط یک `h1` و hierarchy صحیح headingها وجود داشته باشد.
- تمام تصاویر alt مناسب و تمام controls نام accessible داشته باشند.
- contrast متن و controlها معیار AA را برآورده کند.
- title، description و Open Graph metadata در HTML تولیدشده وجود داشته باشند.
- محتوای English در SSR output و بدون وابستگی به client JavaScript قابل مشاهده باشد.
- Lighthouse موبایل در شرایط متعارف هدف Performance حداقل 90 را دنبال کند.
- هیچ placeholder ضروری، لینک شکسته یا asset مفقود در release باقی نماند.

---

## Phase 7 — GitHub and Deployment

### Goal

آماده‌سازی repository قابل نگهداری، اتصال آن به deployment و انتشار نسخه production با مسیر بازگشت روشن.

### Main tasks

1. ایجاد یا تکمیل Git repository و تعریف `.gitignore` مناسب Nuxt، Node.js، outputها و فایل‌های محیطی.
2. ایجاد GitHub repository و pushکردن تاریخچه‌ای با commitهای کوچک و توصیفی بر اساس phaseها.
3. تکمیل `README.md` با موارد زیر:
   - معرفی کوتاه پروژه؛
   - stack و پیش‌نیازها؛
   - روش install و اجرای local؛
   - محل و ساختار ویرایش محتوا؛
   - محل تصاویر و Resume؛
   - روش build و deployment؛
   - لینک Figma و اشاره به چهار حذف مجاز.
4. اطمینان از نبود secret، API key، داده خصوصی یا فایل محیطی حساس در repository.
5. اتصال GitHub repository به Vercel به‌عنوان platform پیش‌فرض deployment برای Nuxt.
6. تنظیم branch اصلی برای production و فعال‌کردن preview deployment برای branchها یا pull requestها.
7. ثبت domain نهایی در SEO metadata و بررسی Open Graph URLها پس از دریافت production URL.
8. انجام release verification روی deployment واقعی و ثبت مشکلات فقط در صورت مشاهده نقص قابل تکرار.
9. ایجاد tag یا release مشخص برای نسخه `v1.0.0` پس از تأیید نهایی.

### Expected deliverables

- GitHub repository تمیز و مستند.
- README مناسب توسعه‌دهنده مبتدی.
- production deployment روی Vercel.
- preview deployment برای تغییرات بعدی.
- نسخه releaseشده `v1.0.0` با URL قابل اشتراک‌گذاری.

### Dependencies

- تکمیل و تأیید Phase 6.
- دسترسی مجاز به GitHub و Vercel.
- production domain یا URL نهایی Vercel.
- تأیید مالک برای انتشار عمومی اطلاعات Portfolio.

### Verification and acceptance checks

- clone و setup پروژه با دستورهای README برای توسعه‌دهنده جدید قابل تکرار باشد.
- production build فقط پس از اجازه صریح اجرا و بدون خطای مسدودکننده تکمیل شود.
- deployment در URL عمومی با HTTPS قابل دسترسی باشد.
- refresh مستقیم صفحه و anchor linkها خطای 404 ایجاد نکنند.
- metadata، favicon، Open Graph image و canonical URL روی production درست باشند.
- Email، Phone، Resume، social links، Live Demo و GitHub links در محیط production بررسی شوند.
- language persistence، LTR/RTL، mobile menu و reduced-motion روی deployment کار کنند.
- repository شامل secret، build artifact ناخواسته یا placeholder ضروری نباشد.

---

## 3. ترتیب تحویل و کنترل تغییرات

- پایان هر phase یک checkpoint مستقل است و باید قبل از شروع phase بعدی review شود.
- در هر checkpoint فقط فایل‌ها و رفتارهای همان phase بررسی شوند تا خطایابی برای AI-assisted development ساده بماند.
- هر تغییر خارج از PRD—از جمله افزودن section، dependency، CMS، form service یا animation library—نیازمند تصمیم و به‌روزرسانی مستندات است.
- اطلاعات واقعی مالک Portfolio باید فقط از داده‌های تأییدشده جایگزین placeholderها شوند.
- انتشار نهایی تا تکمیل همه acceptance checkهای Phase 6 و Phase 7 انجام نشود.
