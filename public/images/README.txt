====================================================================
📁 APNI 3 IMAGES KO YAHAN RAKHEIN (D:\portfolio design rintu\public\images\)
====================================================================

Yahan 3 images ka setup ready hai:

1️⃣ IMAGE 1 (Circle - Anime Character):
   - Naam rakhein: avatar-anime.png (ya .jpg, .svg)
   - Ye image website load/refresh hone par sabse pehle circle mein dikhegi.
   - Saath mein likha hoga: "psst, click me! ↗"

2️⃣ IMAGE 2 (Circle - Secret Real Photo):
   - Naam rakhein: avatar-real.png (ya .jpg)
   - Jab koi circle ya "psst, click me!" par click karega:
     -> Anime image gayab ho jayegi
     -> Aapki ye real photo smooth animation ke saath aa jayegi
     -> "you found me! 🎉" text likha aayega aur confetti celebration hoga!
   - Wapas click karne par fir se anime image aa sakti hai.

3️⃣ IMAGE 3 (Rectangle - Hero Banner Background):
   - Naam rakhein: hero-banner.png (ya .jpg, .svg)
   - Ye upar jo bada rectangle box hai wahan background image banegi.
   - Note: Yahan koi .mp4 video mat daalna, sirf image (.png ya .jpg) lagani hai.

--------------------------------------------------------------------
KAISE CHANGE KAREIN?
1. Apni teen images is folder (public/images/) mein paste kar dein:
   - avatar-anime.png
   - avatar-real.png
   - hero-banner.png

2. Agar naam ya extension alag hai, toh "src/data/portfolioData.ts" file kholein:
   Lines 12 se 24 tak path update kar dein:
   avatarAnimeImage: "/images/avatar-anime.png",
   avatarRealImage:  "/images/avatar-real.png",
   heroBannerImage:  "/images/hero-banner.png",
====================================================================
