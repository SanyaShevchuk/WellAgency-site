let english = document.querySelectorAll("#english");

let ukrainian = document.querySelectorAll("#ukrainian");

let russian = document.querySelectorAll("#russian");

for(let i=0; i < russian.length;i++){
    russian[i].classList.add("active-lang");
}

for(let i=0; i < english.length; i++){
    english[i].onclick = function(){
        for(let i = 0; i < english.length; i++){
            english[i].classList.add("active-lang");
            english[i].classList.remove("not-active-lang");

            russian[i].classList.remove("active-lang");
            russian[i].classList.add("not-active-lang");

            ukrainian[i].classList.remove("active-lang");
            ukrainian[i].classList.add("not-active-lang");
        }

        let months_li = document.querySelectorAll("#month li");
        for(let i=0; i < months_li.length; i++){
            months_li[i].style.marginRight = "4.9%";
        }

        document.querySelector(".landing_text h1").textContent =
            "Digital Marketing Solutions to help your business";
        document.querySelector(".landing_text p").textContent =
            "Our digital marketing specialists provide high-quality "
            +"customized solutions to meet the unique needs of your business.";

        document.querySelector("#menu_contacts a").textContent = "Contacts";
        document.querySelector("#menu_whoWe a").textContent = "Who are we";
        document.querySelector("#menu_services a").textContent = "Service";
        document.querySelector("#menu_howWeWork a").textContent = "How do we work";

        document.querySelector(".HowWeWork h1").textContent = "How does we work?"
        document.querySelector(".HowWeWork p").textContent = "Thanks to the many approaches"
            +" we take to increase traffic to your site, we optimize every aspect of your "
            +" online presence to turn this traffic into a solid sale."

        let months = document.querySelectorAll("#month li a");
        for(let i=0; i < months.length; i++){
            if(i==0) months[i].textContent = "January";
            if(i==1) months[i].textContent = "February";
            if(i==2) months[i].textContent = "March";
            if(i==3) months[i].textContent = "April";
            if(i==4) months[i].textContent = "May";
            if(i==5) months[i].textContent = "June";
            if(i==6) months[i].textContent = "July";
            if(i==7) months[i].textContent = "August";
            if(i==8) months[i].textContent = "September";
            if(i==9) months[i].textContent = "October";
            if(i==10) months[i].textContent = "November";
            if(i==11) months[i].textContent = "December";
        }

        document.querySelector(".service h1").textContent = "Service";
        document.querySelector(".service p").textContent = "We will analyze your business"
        +" and check all aspects of marketing to help you in the right approach to expanding "
        +" your online business. After the consultation, evaluate the growth of your return "
        +" on investment and return to us with your marketing plan from our experts, and they "
        +" will help your business get ahead of the game."

        let footer_a = document.querySelectorAll("footer a");
        for(let i=0 ; i<footer_a.length; i++){
            if(i==0) footer_a[0].textContent = "Contacts";
            if(i==1) footer_a[1].textContent = "Who are we";
            if(i==2) footer_a[2].textContent = "Service";
            if(i==3) footer_a[3].textContent = "How do we work";
        }

        document.querySelector(".registration p").textContent = "Addressing us you will receive "
        +"timely solution of your tasks and support even after the completion of the project."

        document.querySelector("#Contacts #projectDescription span").textContent = "Project Description";

        let inputs = document.querySelectorAll("#Contacts input");
        for(let i=0; i < inputs.length; i++){
            if(i==0) inputs[0].placeholder = "Full name";
            if(i==1) inputs[1].placeholder = "Contact number";
            if(i==3) inputs[3].placeholder = "Project Description";
        }

        let startButtons = document.querySelectorAll(".start_project_btn");

        for(let i=0; i < startButtons.length; i++){
            startButtons[i].textContent = "Start Project";
        }

        let service_items = document.querySelectorAll(".service_item a");
        for(let i=0; i < service_items.length;i++){
            if(i==2) service_items[2].textContent = "Design";
            if(i==4) service_items[4].textContent = "Marketing audit";
            if(i==5) service_items[5].textContent = "Web analytics";
            if(i==6) service_items[6].textContent = "Mailing in messengers";
            if(i==7) service_items[7].textContent = "Strategy";
        }

        let names = document.querySelectorAll(".mySlides h1");
        for(let i=0; i < names.length; i++){
            if(i==0) names[0].textContent = "Kirill";
            if(i==1) names[1].textContent = "Nikolay";
            if(i==2) names[2].textContent = "Aleksii";
            if(i==3) names[3].textContent = "Nikita";
            if(i==4) names[4].textContent = "Oksana";
        }

        let infos = document.querySelectorAll(".mySlides p");
        for(let i=0; i < names.length; i++){
            if(i==0) infos[0].textContent = "He doesn’t like terribly when every second one talks about "+
            "his audience with the following words: «My client is men, with an income above average.»";
            if(i==1) infos[1].textContent = "Sooo dislikes when someone asks to make a simple design."
            +" But we are even wondering if such a project will appear, where you just have to "+
            " add a pinch of a collective farm. What will he do?";
            if(i==2) infos[2].textContent = "Always believes that he will exceed KPI on "
                +"projects. And always exceeds! Generally he likes to analyze and measure "
                +"everything, he measures everything with us and he measures everything for you";
            if(i==3) infos[3].textContent = "Nikita loves to be creative. Loves so much that"
                + " we were forced to set a daily limit. By the way"
                +" checked - nothing does not use.";
            if(i==4) infos[4].textContent = "In general, these texts on the site entrusted to"
            +" me. Therefore, I will simply talk about my main principle in the strategy: God "
            +"forbid, go to the creative for the sake of creativity.";
        }
    }
}

for(let i=0; i < ukrainian.length; i++){
    ukrainian[i].onclick = function(){
        for(let i=0; i < ukrainian.length; i++){
            english[i].classList.remove("active-lang");
            english[i].classList.add("not-active-lang");

            russian[i].classList.remove("active-lang");
            russian[i].classList.add("not-active-lang");

            ukrainian[i].classList.add("active-lang");
            ukrainian[i].classList.remove("not-active-lang");
        }

        let months_li = document.querySelectorAll("#month li");
        for(let i=0; i < months_li.length; i++){
            months_li[i].style.marginRight = "4.55%";
        }

        document.querySelector(".landing_text h1").textContent =
            "Цифрові Маркетингові Рішення, які допоможуть вашему бізнесу";
        document.querySelector(".landing_text p").textContent =
            "Наші спеціалісти з цифрового маркетингу надають висококваліфіковані індивідуальні "
            +" рішення, відповідно до унікальним потребам вашего Бізнесу."

        document.querySelector("#menu_contacts a").textContent = "Контакти";
        document.querySelector("#menu_whoWe a").textContent = "Хто ми";
        document.querySelector("#menu_services a").textContent = "Сервіс";
        document.querySelector("#menu_howWeWork a").textContent = "Як ми працюємо";

        document.querySelector(".HowWeWork h1").textContent = "Як ми працюємо?"
        document.querySelector(".HowWeWork p").textContent = "Завдяки численним підходам, яких ми " +
        "дотримуємося для збільшення трафіку на ваш сайт, ми оптимізуємо кожен аспект вашої "
        +"присутності в Інтернеті, щоб перетворити цей трафік в солідні продажі."

        let months = document.querySelectorAll("#month li a");
        for(let i=0; i < months.length; i++){
            if(i==0) months[i].textContent = "Січень";
            if(i==1) months[i].textContent = "Лютий";
            if(i==2) months[i].textContent = "Березень";
            if(i==3) months[i].textContent = "Квітень";
            if(i==4) months[i].textContent = "Травень";
            if(i==5) months[i].textContent = "Червень";
            if(i==6) months[i].textContent = "Липень";
            if(i==7) months[i].textContent = "Серпень";
            if(i==8) months[i].textContent = "Вересень";
            if(i==9) months[i].textContent = "Жовтень";
            if(i==10) months[i].textContent = "Листопад";
            if(i==11) months[i].textContent = "Грудень";
        }

        document.querySelector(".service h1").textContent = "Сервіс";
        document.querySelector(".service p").textContent = "Ми проаналізуємо ваш бізнес і перевіримо "+
            "всі аспекти маркетингу, щоб допомогти вам у правильному підході до розширення вашого бізнесу "+
            "в Інтернеті. Після консультації оціните зростання своєї рентабельності інвестицій і повертайтеся "+
            "до нас за вашим маркетинговим планом від наших експертів, і вони допоможуть вашому бізнесу "+
            "випередити гру."
        let footer_a = document.querySelectorAll("footer a");
        for(let i=0 ; i<footer_a.length; i++){
            if(i==0) footer_a[0].textContent = "Контакти";
            if(i==1) footer_a[1].textContent = "Хто ми";
            if(i==2) footer_a[2].textContent = "Сервіс";
            if(i==3) footer_a[3].textContent = "Як ми працюємо";
        }

        document.querySelector(".registration p").textContent = "Звертаючись до нас ви отримаєте своєчасне "+
        "рішення ваших завдань і підтримку навіть після завершення проекту."

        document.querySelector("#Contacts #projectDescription span").textContent = "Опис проекту";
        let inputs = document.querySelectorAll("#Contacts input");
        for(let i=0; i < inputs.length; i++){
            if(i==0) inputs[0].placeholder = "П.І.Б.";
            if(i==1) inputs[1].placeholder = "Контактний номер";
            if(i==3) inputs[3].placeholder = "Опис проекту";
        }

        let startButtons = document.querySelectorAll(".start_project_btn");

        for(let i=0; i < startButtons.length; i++){
            startButtons[i].textContent = "Почати проект";
        }

        let service_items = document.querySelectorAll(".service_item a");
        for(let i=0; i < service_items.length;i++){
            if(i==4) service_items[4].textContent = "Маркетинговий аудит";
            if(i==5) service_items[5].textContent = "Web-аналітика";
            if(i==6) service_items[6].textContent = "Розсилка в месенджерах";
            if(i==7) service_items[7].textContent = "Стратегія";
        }

        let names = document.querySelectorAll(".mySlides h1");
        for(let i=0; i < names.length; i++){
            if(i==0) names[0].textContent = "Кирил";
            if(i==1) names[1].textContent = "Миколай";
            if(i==2) names[2].textContent = "Олексій";
            if(i==3) names[3].textContent = "Микита";
            if(i==4) names[4].textContent = "Оксана";
        }

        let infos = document.querySelectorAll(".mySlides p");
        for(let i=0; i < names.length; i++){
            if(i==0) infos[0].textContent = "Страшно не любить, коли кожен другий"
                +" розповідає про свою ЦА наступними словами. «Мій клієнт - чоловіки, "
                +" з доходом вище середнього».";
            if(i==1) infos[1].textContent = "Дуууже не любить, коли хтось просить заколхозити"
                +" дизайн. Але нам вже навіть цікаво, чи з'явиться такий проект, де просто"
                +" доведеться додати дрібничку колгоспу. Що він буде робити?";
            if(i==2) infos[2].textContent = "Завжди вірить, що перевиконає KPI по проектам. "
                +" І завжди перевиконує! Взагалі любить все аналізувати і міряти, міряє у нас "
                +"і вам все померяєт"
            if(i==3) infos[3].textContent = "Микита дуже любить креативити. Так сильно любить, що"
            + " ми були змушені встановити денний ліміт. До речі, перевіряли - нічого, крім айкосів "
            +" своїх, не вживає.";
            if(i==4) infos[4].textContent = "Взагалі ці тексти на сайт довірили мені. Тому я "
            + "просто розповім про свій головний принцип в стратегії: не дай бог піти в креатив "
            +"заради креативу";
        }
    }
}


for(let i=0; i < russian.length; i++){
    russian[i].onclick = function(){
        for(let i=0; i<russian.length; i++){
            english[i].classList.remove("active-lang");
            english[i].classList.add("not-active-lang");

            russian[i].classList.add("active-lang");
            russian[i].classList.remove("not-active-lang");

            ukrainian[i].classList.remove("active-lang");
            ukrainian[i].classList.add("not-active-lang");

        }

        let months_li = document.querySelectorAll("#month li");
        for(let i=0; i < months_li.length; i++){
            months_li[i].style.marginRight = "4.9%";
        }

        document.querySelector(".landing_text h1").textContent =
            "Цифровые Маркетинговые Решения, которые помогут вашему бизнесу";
        document.querySelector(".landing_text p").textContent = "Наши специалисты по " +
        "цифровому маркетингу предоставляют высококачественные индивидуальные решения, " +
        "соответствующие уникальным потребностям вашего бизнеса."
        document.querySelector("#menu_contacts a").textContent = "Контакты";
        document.querySelector("#menu_whoWe a").textContent = "Кто мы";
        document.querySelector("#menu_services a").textContent = "Услуги";
        document.querySelector("#menu_howWeWork a").textContent = "Как мы работаем";

        document.querySelector(".HowWeWork h1").textContent = "Как мы работаем ?"
        document.querySelector(".HowWeWork p").textContent = "Благодаря многочисленным "+
        "подходам, которым мы придерживаемся для увеличения трафика на ваш сайт, мы " +
        "оптимизируем каждый аспект вашего присутствия в Интернете, чтобы  превратить " +
        "этот трафик в солидные продажи."

        let months = document.querySelectorAll("#month li a");
        for(let i=0; i < months.length; i++){
            if(i==0) months[i].textContent = "Январь";
            if(i==1) months[i].textContent = "Февраль";
            if(i==2) months[i].textContent = "Март";
            if(i==3) months[i].textContent = "Апрель";
            if(i==4) months[i].textContent = "Май";
            if(i==5) months[i].textContent = "Июнь";
            if(i==6) months[i].textContent = "Июль";
            if(i==7) months[i].textContent = "Август";
            if(i==8) months[i].textContent = "Сентябрь";
            if(i==9) months[i].textContent = "Октябрь";
            if(i==10) months[i].textContent = "Ноябрь";
            if(i==11) months[i].textContent = "Декабрь";
        }

        document.querySelector(".service h1").textContent = "Услуги";
        document.querySelector(".service p").textContent = "Мы проанализируем " +
        "ваш бизнес и проверим все аспекты маркетинга, чтобы помочь вам в правильном " +
        "подходе к расширению вашего бизнеса в Интернете. После консультации оцените " +
        "рост своей рентабельности инвестиций и возвращайтесь к нам за вашим маркетинговым " +
        "планом от наших экспертов, и они помогут вашему бизнесу опередить игру."

        let footer_a = document.querySelectorAll("footer a");
        for(let i=0 ; i<footer_a.length; i++){
            if(i==0) footer_a[0].textContent = "Контакты";
            if(i==1) footer_a[1].textContent = "Кто мы";
            if(i==2) footer_a[2].textContent = "Услуги";
            if(i==3) footer_a[3].textContent = "Как мы работаем";
        }

        document.querySelector(".registration p").textContent = " Обращаясь к нам вы получите "+
        "своевременное решение ваших задач и поддержку даже после завершения проекта."

        document.querySelector("#Contacts #projectDescription span").textContent = "Описание проекта";
        let inputs = document.querySelectorAll("#Contacts input");
        for(let i=0; i < inputs.length; i++){
            if(i==0) inputs[0].placeholder = "Ф.И.О.";
            if(i==1) inputs[1].placeholder = "Контактный номер";
            if(i==3) inputs[3].placeholder = "Описание проекта";
        }

        let startButtons = document.querySelectorAll(".start_project_btn");

        for(let i=0; i < startButtons.length; i++){
            startButtons[i].textContent = "Начать проект";
        }

        let service_items = document.querySelectorAll(".service_item a");
        for(let i=0; i < service_items.length;i++){
            if(i==2) service_items[2].textContent = "Дизайн";
            if(i==4) service_items[4].textContent = "Маркетинговый аудит";
            if(i==5) service_items[5].textContent = "Web-аналитика";
            if(i==6) service_items[6].textContent = "Рассылка в мессенджерах";
            if(i==7) service_items[7].textContent = "Стратегия";
        }

        let names = document.querySelectorAll(".mySlides h1");
        for(let i=0; i < names.length; i++){
            if(i==0) names[0].textContent = "Кирилл";
            if(i==1) names[1].textContent = "Николай";
            if(i==2) names[2].textContent = "Алексей";
            if(i==3) names[3].textContent = "Никита";
            if(i==4) names[4].textContent = "Оксана";
        }

        let infos = document.querySelectorAll(".mySlides p");
        for(let i=0; i < names.length; i++){
            if(i==0) infos[0].textContent = " Страшно не любит, когда каждый второй рассказывает "
                +"о своей ЦА следующими словами «Мой клиент – мужчины, с доходом выше среднего».";
            if(i==1) infos[1].textContent = "Ооочень не любит, когда кто-то просит заколхозить дизайн."
                +" Но нам уже даже интересно, появится ли такой проект, где просто придется добавить "
                +" щепотку колхоза. Что он будет делать?";
            if(i==2) infos[2].textContent = "Всегда верит, что перевыполнит KPI по проектам. И всегда"
                +" перевыполняет! Вообще любит все анализировать и мерять, меряет у нас и вам все померяет";
            if(i==3) infos[3].textContent = "Никита очень любит креативить. Так сильно любит, что"
                +" мы были вынуждены  установить дневной лимит. Кстати, проверяли -  ничего, кроме "
                +"айкосов своих, не употребляет.";
            if(i==4) infos[4].textContent = "Вообще эти тексты на сайт доверили мне. Поэтому я просто "
            +"расскажу о своем главном принципе в стратегии: не дай бог уйти в креатив ради креатива.";
        }
    }
}
