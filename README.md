# Win Innwa လက်ကွက် လေ့ကျင့်ခန်း

ကွန်ပျူတာ၊ တက်ဘလက်၊ ဖုန်း အားလုံးတွင် သုံးနိုင်သော Win Innwa (မြန်မာ Win ဖောင့်) စာရိုက် လေ့ကျင့်ခန်း web app။

- အဆင့် ၁ (လွယ်) မှ ၁၀ (ခက်) — အဆင့်တိုင်းတွင် လေ့ကျင့်ခန်း ၂၀ ကျော်
- အဆင့် ၉–၁၀: ပါဠိ စကားလုံးနှင့် ဂါထာများ (ဆင့်ဗျည်း Alt ကုဒ်များ)
- ဘေးတွင် လမ်းညွှန် — နောက်ထပ် နှိပ်ရမည့် ကီး၊ Shift/Alt ကုဒ်၊ သုံးရမည့် လက်ချောင်း
- ဖုန်း/တက်ဘလက်အတွက် Win Innwa ကီးဘုတ်ပုံ (Alt ကီးဖြင့် ဂဏန်း ၄ လုံး)
- တိုးတက်မှုကို browser ထဲတွင် မှတ်ထားသည်၊ offline (PWA) သုံးနိုင်သည်

## ဖိုင်များ
- `index.html` — app (UI၊ ကီးဘုတ်၊ လမ်းညွှန်)
- `core.js` — Unicode → Win Innwa ကီးအစဉ် ပြောင်းစနစ်၊ Alt ကုဒ်ဇယား၊ အဆင့် ၁၀ ခု၏ စာများ
- `sw.js`, `manifest.webmanifest`, `icon.svg` — offline / home screen အတွက်

လေ့ကျင့်ခန်းအသစ် ထည့်ရန် `core.js` ထဲက `LEVELS[n].items` တွင် Unicode မြန်မာစာ ရေးထည့်ရုံပါပဲ၊ Win ကီးအစဉ်ကို အလိုအလျောက် တွက်ပေးပါသည်။

App link: https://kyawmyohlaing623-sketch.github.io/win-innwa-typing/

Win Innwa ကီး/Alt ကုဒ်ဇယားကို ThanLwinSoft ၏ Win Innwa converter ဇယားနှင့် တိုက်စစ်ထားပါသည်။
