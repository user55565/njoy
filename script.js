// Tab switching logic
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

// Example: Language switching logic (expand as needed)
const translations = {
    en: {
        aboutTab: "About Us",
        servicesTab: "What We Offer",
        contactTab: "Contact",
        aboutTitle: "About Us",
        aboutText: "At the forefront of technological advancement, our company leverages cutting-edge platforms and scalable architectures to deliver seamless integration and unparalleled efficiency. By harnessing next-generation frameworks and agile methodologies, we empower enterprises to unlock new dimensions of productivity and innovation.",
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
        subtitle: "Empowering Your Digital Experience"
    },
    sk: {
        aboutTab: "O nás",
        servicesTab: "Čo ponúkame",
        contactTab: "Kontakt",
        aboutTitle: "O nás",
        aboutText: "Na čele technologického pokroku naša spoločnosť využíva najmodernejšie platformy a škálovateľné architektúry na zabezpečenie bezproblémovej integrácie a bezkonkurenčnej efektivity. Vďaka využívaniu najnovších frameworkov a agilných metodológií umožňujeme podnikom odomknúť nové dimenzie produktivity a inovácií.",
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
        subtitle: "Posilňujeme vaše digitálne zážitky"
    }
};

const langSwitch = document.getElementById('lang-switch');
if (langSwitch) {
    langSwitch.addEventListener('change', function () {
        const lang = this.value;
        const t = translations[lang];

        // Slogan/subtitle
        document.querySelector('.subtitle').textContent = t.subtitle;

        // Tabs
        document.querySelector('[data-tab="about"]').textContent = t.aboutTab;
        document.querySelector('[data-tab="services"]').textContent = t.servicesTab;
        document.querySelector('[data-tab="contact"]').textContent = t.contactTab;

        // About section
        document.querySelector('#about h2').textContent = t.aboutTitle;
        document.querySelector('#about p').textContent = t.aboutText;

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
        document.querySelector('#contact .contact-btn').textContent = t.contactBtn;
    });
}