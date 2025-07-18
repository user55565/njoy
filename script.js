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
        aboutText: "",
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
        language: "Language:"
    },
    sk: {
        aboutTab: "O nás",
        servicesTab: "Čo ponúkame",
        contactTab: "Kontakt",
        aboutTitle: "Budúcnosť predaja je tu",
        aboutText: "",
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
        language: "Jazyk:"
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
        document.querySelector('#about p').innerHTML = t.aboutText;

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