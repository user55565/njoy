const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.tab-content');
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        contents.forEach(c => c.classList.remove('active'));
        tab.classList.add('active');
        document.getElementById(tab.dataset.tab).classList.add('active');
    });
});

const translations = {
    en: {
        aboutTab: "About Us",
        servicesTab: "What We Offer",
        contactTab: "Contact",
        aboutTitle: "The future of sales is here",
        aboutLead: "<strong>With a new generation of smart vending machines.</strong>",
        aboutFeatures: `Discover a vending machine that does more than just sell.<br>
Thanks to advanced technology, you will increase sales, reduce costs and gain a new channel for targeted digital advertising. Your customers get a fast, intuitive and modern way to shop – anytime, anywhere.`,
        aboutQuality: "<em>Designed with an emphasis on quality, efficiency and sustainability.</em>",
        aboutQuality2: `These automated devices were developed based on the real needs of customers.<br>
The result? A reliable solution that meets the highest technical and environmental standards while looking elegant and professional in any environment.`,
        aboutSummary: "<strong>Get more out of your space...</strong>",
        servicesTitle: "What We Offer",
        servicesList: [
            "Custom Web Development",
            "Mobile App Solutions",
            "Cloud Integration",
            "Consulting & Support"
        ],
        contactTitle: "Contact",
        contactText: "Have questions or want to work with us?",
        contactBtn: "Email Us",
        subtitle: "Empowering Your Digital Experience",
        language: "Language:",
        contactPhone: "Phone"
    },
    sk: {
        aboutTab: "O nás",
        servicesTab: "Čo ponúkame",
        contactTab: "Kontakt",
        aboutTitle: "Budúcnosť predaja je tu",
        aboutLead: "<strong>S inteligentnými automatmi novej generácie</strong>",
        aboutFeatures: `Objavte automat, ktorý robí viac než len predáva.<br>
Vďaka pokročilej technológii zvýšite tržby, znížite náklady a získate nový kanál na cielenú digitálnu reklamu. Vaši zákazníci získajú rýchly, intuitívny a moderný spôsob nakupovania – kedykoľvek a kdekoľvek.`,
        aboutQuality: "<em>Navrhnuté s dôrazom na kvalitu, efektivitu a udržateľnosť</em>",
        aboutQuality2: `Tieto automatizované zariadenia boli vyvinuté na základe reálnych potrieb zákazníkov.<br>
Výsledok? Spoľahlivé riešenie, ktoré spĺňa najvyššie technické aj ekologické štandardy a zároveň pôsobí elegantne a profesionálne v každom prostredí.`,
        aboutSummary: "<strong>Získajte viac zo svojho priestoru...</strong>",
        servicesTitle: "Čo ponúkame",
        servicesList: [
            "Vývoj webových aplikácií na mieru",
            "Mobilné riešenia",
            "Cloudová integrácia",
            "Poradenstvo a podpora"
        ],
        contactTitle: "Kontakt",
        contactText: "Máte otázky alebo s nami chcete spolupracovať?",
        contactBtn: "Napíšte nám",
        language: "Jazyk:",
        contactPhone: "Telefón"
    }
};

const langSwitch = document.getElementById('lang-switch');
if (langSwitch) {
    langSwitch.addEventListener('change', function () {
        const lang = this.value;
        const t = translations[lang];
        // Language label
        document.querySelector('.lang-label-text').textContent = t.language;

        // Slogan/subtitle (always English)
        document.querySelector('.subtitle').textContent = "Engage. Optimize. Grow.";

        // Tabs
        document.querySelector('[data-tab="about"]').textContent = t.aboutTab;
        document.querySelector('[data-tab="services"]').textContent = t.servicesTab;
        document.querySelector('[data-tab="contact"]').textContent = t.contactTab;

        // About section
        document.querySelector('#about h2').textContent = t.aboutTitle;
        document.getElementById('about-lead').innerHTML = t.aboutLead;
        document.getElementById('about-features').innerHTML = t.aboutFeatures;
        document.getElementById('about-quality').innerHTML = t.aboutQuality;
        document.getElementById('about-quality2').innerHTML = t.aboutQuality2;
        document.getElementById('about-summary').innerHTML = t.aboutSummary;

        // Services section
        document.querySelector('#services h2').textContent = t.servicesTitle;
        const servicesUl = document.querySelector('#services ul');
        servicesUl.innerHTML = '';
        t.servicesList.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            servicesUl.appendChild(li);
        });

        // Contact section
        document.querySelector('#contact h2').textContent = t.contactTitle;
        document.querySelector('#contact p').textContent = t.contactText;
        // If you have a contact button, update its text:
        const contactBtn = document.querySelector('#contact .contact-btn');
        if (contactBtn) contactBtn.textContent = t.contactBtn;
        // Translate phone label
        const phoneLabel = document.querySelector('#contact strong[phone-label]');
        if (phoneLabel) phoneLabel.textContent = t.contactPhone + ":";
    });
}