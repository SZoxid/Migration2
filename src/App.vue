<script>
</script>

<template>
  <div class="max-w-[1920px] m-auto">
    <header class="w-[1920px] m-auto top-0 fixed z-50"
      style="background-image: url('../public/imgs/Slice.png'); background-size: cover; background-position: center; background-repeat: no-repeat;">
      <nav class="w-[1620px] flex justify-between  items-center m-auto pt-[40px] pb-[20px]">
        <img src="../public/imgs/header-logo.png" alt="img" class="w-[128px] h-[45px]">
        <ul class="w-[730px] flex items-center justify-between list-none ml-[-470px]">
          <li
            class="text-[15px] font-medium  font-Montserrat transition-transform transition-colors duration-300 transform origin-center hover:scale-110 hover:text-[#73767a]">
            <a href="#vacancies" class="text-[#25272a] no-underline">Вакансии</a>
          </li>
          <li
            class="text-[15px] font-medium font-Montserrat transition-transform transition-colors duration-300 transform origin-center hover:scale-110 hover:text-[#73767a]">
            <a href="#services" class="text-[#25272a] no-underline">Услуги</a>
          </li>
          <li
            class="text-[15px] font-medium font-Montserrat transition-transform transition-colors duration-300 transform origin-center hover:scale-110 hover:text-[#73767a]">
            <a href="#info-tips" class="text-[#25272a] no-underline">Информационные подсказки</a>
          </li>
          <li
            class="text-[15px] font-medium font-Montserrat transition-transform transition-colors duration-300 transform origin-center hover:scale-110 hover:text-[#73767a]">
            <a href="#courses" class="text-[#25272a] no-underline">Учебные курсы</a>
          </li>
          <li
            class="text-[15px] font-medium font-Montserrat transition-transform transition-colors duration-300 transform origin-center hover:scale-110 hover:text-[#73767a]">
            <a href="#news" class="text-[#25272a] no-underline">Новости</a>
          </li>
          <li
            class="text-[15px] font-medium font-Montserrat transition-transform transition-colors duration-300 transform origin-center hover:scale-110 hover:text-[#73767a]">
            <a href="#faq" class="text-[#25272a] no-underline">F.A.Q</a>
          </li>
        </ul>
        <div class="flex items-center gap-[45px]">
          <select name="language" id="language-select"
            class="border-none bg-transparent text-[15px] text-[#25272a] font-medium font-Montserrat">
            <option class="border-none" value="ru">Ру</option>
            <option class="border-none" value="uz">Уз</option>
          </select>
          <button
            class="w-[106px] h-[41px] rounded-[50px] border border-[#fb7e42] text-[18px] text-[#25272a] font-semibold font-Montserrat bg-transparent hover:bg-[#fb7e42] hover:text-white hover:border-transparent transition duration-500">
            Войти
          </button>
        </div>
      </nav>
    </header>
    <main>
      <section class="max-w-[1920px] mt-[103px] border"
        style="background-image: url('../public/imgs/Slice.png'); background-size: cover; background-position: center; background-repeat: no-repeat;">
        <div class="w-[1620px] flex justify-between m-auto mt-[78px]">
          <div class="h-[515px]">
            <h2 class="text-[55px] text-[#25272a] font-normal font-Montserrat mt-[117px]">Labor</h2>
            <h1 class="text-[55px] font-semibold font-Montserrat mt-[-20px]">Migration</h1>
            <p class="w-[380px] text-[20px] text-[#25272a] font-normal font-Montserrat mt-[45px]">
              Программный комплекс запущен в информационной системе "Единая
              национальная система труда"
            </p>
            <div class="flex items-center mt-[60px]">
              <div class="relative flex items-center">
                <img src="../public/imgs/search-icon.svg" alt="img"
                  class="absolute left-[8px] w-[38px] h-[38px] rounded-[50%] bg-[#fb7e42] p-[10px]" />
                <input type="text" placeholder="Например, строитель, няня, водитель…"
                  class="w-[385px] h-[55px] rounded-[50px] border-none pl-[69px] pr-[15px] text-[15px] text-[#25272a80] font-normal font-Montserrat shadow-xl" />
              </div>
              <p class="text-[20px] text-[#25272a] font-bold font-Montserrat ml-[20px]">Найти работу</p>
              <button
                class="flex items-center justify-center w-[47px] h-[47px] border border-[#25272a4d] rounded-[50%] ml-[10px] bg-none hover:bg-[#fb7e42] hover:text-white hover:border-none hover:transition-[0.5s]">
                <img src="../public/imgs/Arrow-right.png" alt="img" class="w-[24px] h-[24px]" /></button>
            </div>
          </div>
          <div class="flex flex-col items-center border rounded-[30px] w-[770px] h-[515px] bg-[#00000008]"
            style="background-image: url('../../imgs/header_right-bgimg.png'); background-size: cover; background-position: center; background-repeat: no-repeat;">
            <h2 class="text-[45px] text-[#25272a] font-semibold font-Inter mt-[68px]">Анкета</h2>
            <p class="text-[15px] text-[#25272acc] font-light font-Inter text-center mt-[9px]">
              для осуществления <br />
              трудовой деятельности зарубежом
            </p>
            <img src="../public/imgs/header_right-imgcenter.png" alt="img" class="mt-[25px]" />
            <div class="relative w-[100%] flex justify-between items-end top-[-24px]">
              <img src="../public/imgs/header_right-imgman.png" alt="img" class="w-[255px] h-[211px] " />
              <button
                class="absolute flex justify-center items-center border-none rounded-[50px] bg-[#fb7e42] w-[144px] h-[40px] left-[313px] text-[16px] text-white text-center font-semibold font-Montserrat gap-[9px]">Начать
                <img src="../public/imgs/arrov-right_white.png" alt="img" class="w-[18px] h-[12px]" /></button>
              <img src="../public/imgs/header_right-imgwoman.png" alt="img" class="w-[161px] h-[210px] pr-[20px]" />
            </div>
          </div>
        </div>
        <div
          class="flex justify-center items-center w-[1620px] h-[266px]  m-auto mt-[46px] gap-[95px] rounded-[35px] bg-white shadow-2xl mb-[75px]">
          <div class="w-[310px] h-[210px] flex flex-col justify-center border-r-2 border-r-[#fb7e424d]">
            <img src="../public/imgs/header_bottom-img1.png" alt="img" class="w-[68px] h-[39px] mt-[40px]" />
            <h3 class="text-[35px] text-[#25272a] font-semibold font-Montserrat mt-[30px]">1 939 381</h3>
            <p class="text-[18px] text-[#25272acc] font-medium font-Montserrat">
              Зарегистрированных <br />
              граждан
            </p>
          </div>
          <div class="w-[310px] h-[210px] flex flex-col justify-center border-r-2 border-r-[#fb7e424d] ">
            <img src="../public/imgs/header_bottom-img2.png" alt="img" class="w-[68px] h-[45px] mt-[40px]" />
            <h3 class="text-[35px] text-[#25272a] font-semibold font-Montserrat mt-[27px]">498</h3>
            <p class="text-[18px] text-[#25272acc] font-medium font-Montserrat">
              Соглашений с <br />
              работодателями
            </p>
          </div>
          <div class="w-[310px] h-[210px] flex flex-col justify-center border-r-2 border-r-[#fb7e424d]  ">
            <img src="../public/imgs/header_bottom-img3.png" alt="img" class="w-[50px] h-[50px] ml-[px] mt-[40px]" />
            <h3 class="text-[35px] text-[#25272a] font-semibold font-Montserrat mt-[25px]">6 711</h3>
            <p class="text-[18px] text-[#25272acc] font-medium font-Montserrat">
              Предоставленные <br />
              вакансии
            </p>
          </div>
          <div class="w-[190px] h-[210px] flex flex-col justify-center">
            <img src="../public/imgs/header_bottom-img4.png" alt="img" class="w-[70px] h-[74px] ml-[px] mt-[40px]" />
            <h3 class="text-[35px] text-[#25272a] font-semibold font-Montserrat mt-[25px]">2 773 691</h3>
            <p class="text-[18px] text-[#25272acc] font-medium font-Montserrat">
              Предоставленных <br />
              услуг
            </p>
          </div>
        </div>
      </section>
      <section class="w-[1620px] m-auto mt-[90px] ">
        <div class="w-[985px] flex justify-between pl-[47px] pr-[47px] m-auto">
          <button class="text-[28px] text-[#0046B8] font-semibold font-Montserrat underline">Услуги</button>
          <button class="text-[24px] text-[#25272AB2] font-normal font-Montserrat">Информационные подсказки</button>
          <button class="text-[24px] text-[#25272AB2] font-normal font-Montserrat">Реестры</button>
        </div>
        <!-- <div>
          <div class="w-[1620px] flex justify-between m-auto mt-[72px]">
            <div class="w-[390px] rounded-[10px] border border-[#0046B833]">
              <div>
                <img src="../public/imgs/uslugi-img1.png" alt="img" class="w-[390px] h-[217px]">
              </div>
              <div class="p-[20px]">
                <h2 class="text-[18px] text-[#25272A] font-semibold font-Montserrat">Прекращение
                  действия подтверждения на право трудовой деятельности</h2>
                <p class="text-[15px] text-[#25272ACC] font-normal font-Montserrat mt-[11px]">Услуга для
                  физических и юридических лиц</p>
                <button
                  class="w-[149px] h-[41px] border-none rounded-[5px] bg-[#0046B8] text-[18px] text-white font-medium font-Montserrat mt-[20px]">Подать
                  заявку</button>
              </div>
            </div>
            <div class="w-[390px] rounded-[10px] border border-[#0046B833]">
              <div>
                <img src="../public/imgs/uslugi-img2.png" alt="img" class="w-[390px] h-[217px]">
              </div>
              <div class="p-[20px]">
                <h2 class="text-[18px] text-[#25272A] font-semibold font-Montserrat">Прекращение
                  действия подтверждения на право трудовой деятельности</h2>
                <p class="text-[15px] text-[#25272ACC] font-normal font-Montserrat mt-[11px]">Услуга для
                  физических и юридических лиц</p>
                <button
                  class="w-[149px] h-[41px] border-none rounded-[5px] bg-[#0046B8] text-[18px] text-white font-medium font-Montserrat mt-[20px]">Подать
                  заявку</button>
              </div>
            </div>
            <div class="w-[390px] rounded-[10px] border border-[#0046B833]">
              <div>
                <img src="../public/imgs/uslugi-img3.png" alt="img" class="w-[390px] h-[217px]">
              </div>
              <div class="p-[20px]">
                <h2 class="text-[18px] text-[#25272A] font-semibold font-Montserrat">Прекращение
                  действия подтверждения на право трудовой деятельности</h2>
                <p class="text-[15px] text-[#25272ACC] font-normal font-Montserrat mt-[11px]">Услуга для
                  физических и юридических лиц</p>
                <button
                  class="w-[149px] h-[41px] border-none rounded-[5px] bg-[#0046B8] text-[18px] text-white font-medium font-Montserrat mt-[20px]">Подать
                  заявку</button>
              </div>
            </div>
            <div class="w-[390px] rounded-[10px] border border-[#0046B833]">
              <div>
                <img src="../public/imgs/uslugi-img4.png" alt="img" class="w-[390px] h-[217px]">
              </div>
              <div class="p-[20px]">
                <h2 class="text-[18px] text-[#25272A] font-semibold font-Montserrat">Прекращение
                  действия подтверждения на право трудовой деятельности</h2>
                <p class="text-[15px] text-[#25272ACC] font-normal font-Montserrat mt-[11px]">Услуга для
                  физических и юридических лиц</p>
                <button
                  class="w-[149px] h-[41px] border-none rounded-[5px] bg-[#0046B8] text-[18px] text-white font-medium font-Montserrat mt-[20px]">Подать
                  заявку</button>
              </div>
            </div>
          </div>
          <div class="w-[1620px] flex justify-between m-auto mt-[20px]">
            <div class="w-[390px] rounded-[10px] border border-[#0046B833]">
              <div>
                <img src="../public/imgs/uslugi-img5.png" alt="img" class="w-[390px] h-[217px]">
              </div>
              <div class="p-[20px]">
                <h2 class="text-[18px] text-[#25272A] font-semibold font-Montserrat">Прекращение
                  действия подтверждения на право трудовой деятельности</h2>
                <p class="text-[15px] text-[#25272ACC] font-normal font-Montserrat mt-[11px]">Услуга для
                  физических и юридических лиц</p>
                <button
                  class="w-[149px] h-[41px] border-none rounded-[5px] bg-[#0046B8] text-[18px] text-white font-medium font-Montserrat mt-[20px]">Подать
                  заявку</button>
              </div>
            </div>
            <div class="w-[390px] rounded-[10px] border border-[#0046B833]">
              <div>
                <img src="../public/imgs/uslugi-img6.png" alt="img" class="w-[390px] h-[217px]">
              </div>
              <div class="p-[20px]">
                <h2 class="text-[18px] text-[#25272A] font-semibold font-Montserrat">Прекращение
                  действия подтверждения на право трудовой деятельности</h2>
                <p class="text-[15px] text-[#25272ACC] font-normal font-Montserrat mt-[11px]">Услуга для
                  физических и юридических лиц</p>
                <button
                  class="w-[149px] h-[41px] border-none rounded-[5px] bg-[#0046B8] text-[18px] text-white font-medium font-Montserrat mt-[20px]">Подать
                  заявку</button>
              </div>
            </div>
            <div class="w-[390px] rounded-[10px] border border-[#0046B833]">
              <div>
                <img src="../public/imgs/uslugi-img7.png" alt="img" class="w-[390px] h-[217px]">
              </div>
              <div class="p-[20px]">
                <h2 class="text-[18px] text-[#25272A] font-semibold font-Montserrat">Прекращение
                  действия подтверждения на право трудовой деятельности</h2>
                <p class="text-[15px] text-[#25272ACC] font-normal font-Montserrat mt-[11px]">Услуга для
                  физических и юридических лиц</p>
                <button
                  class="w-[149px] h-[41px] border-none rounded-[5px] bg-[#0046B8] text-[18px] text-white font-medium font-Montserrat mt-[20px]">Подать
                  заявку</button>
              </div>
            </div>
            <div class="w-[390px] rounded-[10px] border border-[#0046B833]">
              <div>
                <img src="../public/imgs/uslugi-img8.png" alt="img" class="w-[390px] h-[217px]">
              </div>
              <div class="p-[20px]">
                <h2 class="text-[18px] text-[#25272A] font-semibold font-Montserrat">Прекращение
                  действия подтверждения на право трудовой деятельности</h2>
                <p class="text-[15px] text-[#25272ACC] font-normal font-Montserrat mt-[11px]">Услуга для
                  физических и юридических лиц</p>
                <button
                  class="w-[149px] h-[41px] border-none rounded-[5px] bg-[#0046B8] text-[18px] text-white font-medium font-Montserrat mt-[20px]">Подать
                  заявку</button>
              </div>
            </div>
          </div>
        </div> -->
        <!-- <div class="w-[1620px] mt-[57px] flex justify-between pb-[100px]">
          <div class="w-[777px] h-[731px] overflow-y-auto rounded-[35px]"
            style="background: linear-gradient(140deg, #F7DCC733 18%, #EEE5FA33 85%);">
            <button
              class="w-[729px] flex m-auto mt-[51px] text-[24px] text-[#25272A] font-semibold font-Montserrat">Регистрация
              патента</button>
            <div
              class="w-[729px] h-[85px] flex items-center border-t m-auto mt-[32px] pl-[24px] text-[22px] text-[#25272ABF] font-medium font-Montserrat hover:cursor-pointer">
              Порядок правовой, социальной защиты и финансовой <br> поддержки трудовых мигрантов за рубежом
            </div>
            <div
              class="w-[729px] h-[85px] flex items-center border-t m-auto mt-[10px] pl-[24px] text-[22px] text-[#25272ABF] font-medium font-Montserrat hover:cursor-pointer">
              Порядок правовой, социальной защиты и финансовой <br> поддержки трудовых мигрантов за рубежом
            </div>
            <div
              class="w-[729px] h-[85px] flex items-center border-t m-auto mt-[10px] pl-[24px] text-[22px] text-[#25272ABF] font-medium font-Montserrat hover:cursor-pointer">
              Порядок правовой, социальной защиты и финансовой <br> поддержки трудовых мигрантов за рубежом
            </div>
            <div
              class="w-[729px] h-[85px] flex items-center border-t m-auto mt-[10px] pl-[24px] text-[22px] text-[#25272ABF] font-medium font-Montserrat hover:cursor-pointer">
              Порядок правовой, социальной защиты и финансовой <br> поддержки трудовых мигрантов за рубежом
            </div>
            <div
              class="w-[729px] h-[85px] flex items-center border-t m-auto mt-[10px] pl-[24px] text-[22px] text-[#25272ABF] font-medium font-Montserrat hover:cursor-pointer">
              Порядок правовой, социальной защиты и финансовой <br> поддержки трудовых мигрантов за рубежом
            </div>
            <div
              class="w-[729px] h-[85px] flex items-center border-t m-auto mt-[10px] pl-[24px] mb-[14px] text-[22px] text-[#25272ABF] font-medium font-Montserrat hover:cursor-pointer">
              Порядок правовой, социальной защиты и финансовой <br> поддержки трудовых мигрантов за рубежом
            </div>

          </div>
          <div class="w-[777px] h-[710px] mt-[19px] overflow-y-auto">
            <p>1 января 2015 г. вышли Федеральный закон «О внесении изменений в Федеральный закон« О правовом положении
              иностранных граждан в Российской Федерации »№ 357-ФЗ от 24.11.2014 г. и Закон Российской Федерации« О
              правовом положении иностранных граждан в Российской Федерации ». Вступили в силу изменения в отдельные
              законодательные акты Российской Федерации ». Будет введен единый патентный документ для физических,
              индивидуальных предпринимателей и юридических лиц для ведения открытой трудовой деятельности на территории
              Российской Федерации.

              Для получения патента необходимо обратиться в миграционную службу в течение 30 дней с момента въезда в РФ.
              (Внимание! За несвоевременную подачу документов взимается штраф от 10 000 до 15 000 рублей).
              -документ, подтверждающий ваш перевод в миграционный аккаунт;
              -документы, удостоверяющие вашу личность;
              -миграционная карта, в которой должна быть указана цель приезда в РФ (Внимание! Если указана другая цель,
              получить патент нельзя);
              - медицинский полис или договор страхования здоровья;
              - Справка об отсутствии инфекционных заболеваний;
              - Свидетельство о знании русского языка, знании истории и права России.

              Вы должны получить или отказать в выдаче патента в течение 10 дней с момента получения необходимых
              документов и отпечатков пальцев. Патент выдается на срок от одного месяца до одного года, вы имеете право
              продлить его еще на год. Вы можете оплачивать его каждый месяц или за 12 месяцев. Патент действителен,
              если за него внесена предоплата. Размер аванса определяется органами власти субъектов Российской
              Федерации. Размер аванса на 2018 год в Москве составит 4500 рублей, в Московской области - 4300 рублей.

              Биллинг! Вы имеете право переоформить патент как минимум за 10 рабочих дней до истечения 12-месячного
              периода с даты выдачи оригинального патента. При этом количество заявок на переоформление патента не
              должно превышать одного раза. Патент выдается иностранному гражданину на срок от 1 до 12 месяцев.

              Срок действия переоформленного патента может быть продлен несколько раз с 1 месяца. В этом случае общий
              срок действия патента, включая продления, не должен превышать 12 месяцев с даты его переоформления.

              Помните! С полученным патентом вы можете работать только в том субъекте Российской Федерации, где этот
              патент был выдан. В этом случае вы также можете подать заявку на получение второго патента в другом
              предмете, с которым вы планируете снова работать.

              У вас есть два способа заполнить все указанные выше документы:

              - через Единые миграционные центры в Москве и Московской области, которые предоставляют миграционные
              услуги, они предоставляют полный спектр услуг, в том числе: медицинский полис или договор медицинского
              страхования, медицинское обследование и справку об отсутствии инфекционных заболеваний, анализы и выдать
              свидетельство о знании русского языка, знании истории и права России;
              - самостоятельно; В этом случае всю информацию о перечне медицинских, страховых и образовательных
              организаций, имеющих право оказывать услуги и оформлять необходимые документы для регистрации патента,
              следует получать в территориальных подразделениях ММББ МВД РФ (ГУВМ МВД РФ).
              Внимание! Даже если вы самостоятельно получили медицинский полис или договор медицинского страхования,
              справку об отсутствии инфекционных заболеваний, свободное владение русским языком, справку о знании
              российской истории и законодательства, вы все равно можете лично обратиться в Единые миграционные центры в
              Москве и Москве. региона. Вам нужно будет связаться.

              Так что постарайтесь заранее найти работодателя, у которого вы планируете работать, но он оплатит эти
              расходы.

              В Москве и Московской области действуют Единые миграционные центры, которые предоставляют полный спектр
              услуг по миграционным вопросам, включая подготовку документов для выдачи патентов, а также помощь и
              консультации при подготовке документов для выдачи в МВД. в Москве и Московской области.

              Помните! После получения патента иностранный гражданин должен заключить трудовой или гражданско-правовой
              договор с работодателем (физическим или юридическим лицом).</p>
          </div>
        </div> -->
        <!-- <div class="w-[1620px] mt-[76px]">
          <div class="w-[1200px] flex justify-end">
            <h2 class="text-[28px] text-[#0046B8] font-medium font-Montserrat">Лицензированные частные агентства по
              трудоустройству (10)</h2>
          </div>
          <div class="flex justify-between mt-[20px] border">
            <div class="w-[260px] h-[643px] rounded-[10px]">
              <button
                class="text-[18px] text-[#25272A] font-semibold font-Montserrat text-start mt-[81px] ml-[42px]">Реестр
                частных <br> агентств <br> занятости (ЧАЗ)</button>
              <button
                class="w-[196px] h-[105px] flex items-end border-t border-t-[#0046B833] text-[18px] text-[#25272A] font-semibold font-Montserrat text-start mt-[29px] ml-[42px]">Реестр
                <br>
                направлений <br> обучения</button>
            </div>
            <div class="w-[1340px] h-[690px] rounded-t-[10px]">
              <table class=" border-spacing-0 border-separate">
                <tr class="w-full h-[67px] bg-[#0046B80D]">
                  <th
                    class="w-[72px] h-full text-[18px] text-[#25272A] font-medium font-Montserrat border border-[#0046B84D] rounded-tl-[10px]">
                    №
                  </th>
                  <th
                    class="w-[390px] h-full text-[18px] text-[#25272A] font-medium font-Montserrat text-start pl-[10px] border border-[#0046B84D]">
                    Название</th>
                  <th
                    class="w-[360px] h-full text-[18px] text-[#25272A] font-medium font-Montserrat text-start pl-[10px] border border-[#0046B84D]">
                    Адрес</th>
                  <th
                    class="w-[183px] h-full text-[18px] text-[#25272A] font-medium font-Montserrat text-start pl-[10px] border border-[#0046B84D]">
                    Номер
                    телефона</th>
                  <th
                    class="w-[142px] h-full text-[18px] text-[#25272A] font-medium font-Montserrat text-start pl-[10px] border border-[#0046B84D]">
                    Регистрацио <br>
                    нный номер</th>
                  <th
                    class="w-[193px] h-full text-[18px] text-[#25272A] font-medium font-Montserrat text-start pl-[10px] border border-[#0046B84D] rounded-tr-[10px]">
                    Номер
                    лицензии и дата</th>
                </tr>
                <tr class="w-full h-[67px]">
                  <td
                    class="w-[72px] h-full text-center text-[18px] text-[#25272ACC] font-normal font-Montserrat border border-[#0046B84D]">
                    1</td>
                  <td
                    class="w-[390px] h-full text-start text-[18px] text-[#25272ACC] font-normal font-Montserrat pl-[10px] border border-[#0046B84D]">
                    " Reiwa xususiy bandlik agentligi" МЧЖ</td>
                  <td
                    class="w-[360px] h-full text-start text-[18px] text-[#25272ACC] font-normal font-Montserrat pl-[10px] border border-[#0046B84D]">
                    Андижон вил. Андижон ш. Бобуршох кўчаси 11-уй</td>
                  <td
                    class="w-[183px] h-full text-start text-[18px] text-[#25272ACC] font-normal font-Montserrat pl-[10px] border border-[#0046B84D]">
                    (97) 744-20-10</td>
                  <td
                    class="w-[142px] h-full text-start text-[18px] text-[#25272ACC] font-normal font-Montserrat pl-[10px] border border-[#0046B84D]">
                    0033</td>
                  <td
                    class="w-[193px] h-full text-start text-[18px] text-[#25272ACC] font-normal font-Montserrat pl-[10px] border border-[#0046B84D]">
                    №0022 / 18.01.2019</td>
                </tr>
                <tr class="w-full h-[67px]">
                  <td
                    class="w-[72px] h-full text-center text-[18px] text-[#25272ACC] font-normal font-Montserrat border border-[#0046B84D]">
                    2</td>
                  <td
                    class="w-[390px] h-full text-start text-[18px] text-[#25272ACC] font-normal font-Montserrat pl-[10px] border border-[#0046B84D]">
                    " Reiwa xususiy bandlik agentligi" МЧЖ</td>
                  <td
                    class="w-[360px] h-full text-start text-[18px] text-[#25272ACC] font-normal font-Montserrat pl-[10px] border border-[#0046B84D]">
                    Андижон вил. Андижон ш. Бобуршох кўчаси 11-уй</td>
                  <td
                    class="w-[183px] h-full text-start text-[18px] text-[#25272ACC] font-normal font-Montserrat pl-[10px] border border-[#0046B84D]">
                    (97) 744-20-10</td>
                  <td
                    class="w-[142px] h-full text-start text-[18px] text-[#25272ACC] font-normal font-Montserrat pl-[10px] border border-[#0046B84D]">
                    0033</td>
                  <td
                    class="w-[193px] h-full text-start text-[18px] text-[#25272ACC] font-normal font-Montserrat pl-[10px] border border-[#0046B84D]">
                    №0022 / 18.01.2019</td>
                </tr>
                <tr class="w-full h-[67px]">
                  <td
                    class="w-[72px] h-full text-center text-[18px] text-[#25272ACC] font-normal font-Montserrat border border-[#0046B84D]">
                    3</td>
                  <td
                    class="w-[390px] h-full text-start text-[18px] text-[#25272ACC] font-normal font-Montserrat pl-[10px] border border-[#0046B84D]">
                    " Reiwa xususiy bandlik agentligi" МЧЖ</td>
                  <td
                    class="w-[360px] h-full text-start text-[18px] text-[#25272ACC] font-normal font-Montserrat pl-[10px] border border-[#0046B84D]">
                    Андижон вил. Андижон ш. Бобуршох кўчаси 11-уй</td>
                  <td
                    class="w-[183px] h-full text-start text-[18px] text-[#25272ACC] font-normal font-Montserrat pl-[10px] border border-[#0046B84D]">
                    (97) 744-20-10</td>
                  <td
                    class="w-[142px] h-full text-start text-[18px] text-[#25272ACC] font-normal font-Montserrat pl-[10px] border border-[#0046B84D]">
                    0033</td>
                  <td
                    class="w-[193px] h-full text-start text-[18px] text-[#25272ACC] font-normal font-Montserrat pl-[10px] border border-[#0046B84D]">
                    №0022 / 18.01.2019</td>
                </tr>
                <tr class="w-full h-[67px]">
                  <td
                    class="w-[72px] h-full text-center text-[18px] text-[#25272ACC] font-normal font-Montserrat border border-[#0046B84D]">
                    4</td>
                  <td
                    class="w-[390px] h-full text-start text-[18px] text-[#25272ACC] font-normal font-Montserrat pl-[10px] border border-[#0046B84D]">
                    " Reiwa xususiy bandlik agentligi" МЧЖ</td>
                  <td
                    class="w-[360px] h-full text-start text-[18px] text-[#25272ACC] font-normal font-Montserrat pl-[10px] border border-[#0046B84D]">
                    Андижон вил. Андижон ш. Бобуршох кўчаси 11-уй</td>
                  <td
                    class="w-[183px] h-full text-start text-[18px] text-[#25272ACC] font-normal font-Montserrat pl-[10px] border border-[#0046B84D]">
                    (97) 744-20-10</td>
                  <td
                    class="w-[142px] h-full text-start text-[18px] text-[#25272ACC] font-normal font-Montserrat pl-[10px] border border-[#0046B84D]">
                    0033</td>
                  <td
                    class="w-[193px] h-full text-start text-[18px] text-[#25272ACC] font-normal font-Montserrat pl-[10px] border border-[#0046B84D]">
                    №0022 / 18.01.2019</td>
                </tr>
                <tr class="w-full h-[67px]">
                  <td
                    class="w-[72px] h-full text-center text-[18px] text-[#25272ACC] font-normal font-Montserrat border border-[#0046B84D]">
                    5</td>
                  <td
                    class="w-[390px] h-full text-start text-[18px] text-[#25272ACC] font-normal font-Montserrat pl-[10px] border border-[#0046B84D]">
                    " Reiwa xususiy bandlik agentligi" МЧЖ</td>
                  <td
                    class="w-[360px] h-full text-start text-[18px] text-[#25272ACC] font-normal font-Montserrat pl-[10px] border border-[#0046B84D]">
                    Андижон вил. Андижон ш. Бобуршох кўчаси 11-уй</td>
                  <td
                    class="w-[183px] h-full text-start text-[18px] text-[#25272ACC] font-normal font-Montserrat pl-[10px] border border-[#0046B84D]">
                    (97) 744-20-10</td>
                  <td
                    class="w-[142px] h-full text-start text-[18px] text-[#25272ACC] font-normal font-Montserrat pl-[10px] border border-[#0046B84D]">
                    0033</td>
                  <td
                    class="w-[193px] h-full text-start text-[18px] text-[#25272ACC] font-normal font-Montserrat pl-[10px] border border-[#0046B84D]">
                    №0022 / 18.01.2019</td>
                </tr>
                <tr class="w-full h-[67px]">
                  <td
                    class="w-[72px] h-full text-center text-[18px] text-[#25272ACC] font-normal font-Montserrat border border-[#0046B84D]">
                    6</td>
                  <td
                    class="w-[390px] h-full text-start text-[18px] text-[#25272ACC] font-normal font-Montserrat pl-[10px] border border-[#0046B84D]">
                    " Reiwa xususiy bandlik agentligi" МЧЖ</td>
                  <td
                    class="w-[360px] h-full text-start text-[18px] text-[#25272ACC] font-normal font-Montserrat pl-[10px] border border-[#0046B84D]">
                    Андижон вил. Андижон ш. Бобуршох кўчаси 11-уй</td>
                  <td
                    class="w-[183px] h-full text-start text-[18px] text-[#25272ACC] font-normal font-Montserrat pl-[10px] border border-[#0046B84D]">
                    (97) 744-20-10</td>
                  <td
                    class="w-[142px] h-full text-start text-[18px] text-[#25272ACC] font-normal font-Montserrat pl-[10px] border border-[#0046B84D]">
                    0033</td>
                  <td
                    class="w-[193px] h-full text-start text-[18px] text-[#25272ACC] font-normal font-Montserrat pl-[10px] border border-[#0046B84D]">
                    №0022 / 18.01.2019</td>
                </tr>
                <tr class="w-full h-[67px]">
                  <td
                    class="w-[72px] h-full text-center text-[18px] text-[#25272ACC] font-normal font-Montserrat border border-[#0046B84D]">
                    7</td>
                  <td
                    class="w-[390px] h-full text-start text-[18px] text-[#25272ACC] font-normal font-Montserrat pl-[10px] border border-[#0046B84D]">
                    " Reiwa xususiy bandlik agentligi" МЧЖ</td>
                  <td
                    class="w-[360px] h-full text-start text-[18px] text-[#25272ACC] font-normal font-Montserrat pl-[10px] border border-[#0046B84D]">
                    Андижон вил. Андижон ш. Бобуршох кўчаси 11-уй</td>
                  <td
                    class="w-[183px] h-full text-start text-[18px] text-[#25272ACC] font-normal font-Montserrat pl-[10px] border border-[#0046B84D]">
                    (97) 744-20-10</td>
                  <td
                    class="w-[142px] h-full text-start text-[18px] text-[#25272ACC] font-normal font-Montserrat pl-[10px] border border-[#0046B84D]">
                    0033</td>
                  <td
                    class="w-[193px] h-full text-start text-[18px] text-[#25272ACC] font-normal font-Montserrat pl-[10px] border border-[#0046B84D]">
                    №0022 / 18.01.2019</td>
                </tr>
                <tr class="w-full h-[67px]">
                  <td
                    class="w-[72px] h-full text-center text-[18px] text-[#25272ACC] font-normal font-Montserrat border border-[#0046B84D]">
                    8</td>
                  <td
                    class="w-[390px] h-full text-start text-[18px] text-[#25272ACC] font-normal font-Montserrat pl-[10px] border border-[#0046B84D]">
                    " Reiwa xususiy bandlik agentligi" МЧЖ</td>
                  <td
                    class="w-[360px] h-full text-start text-[18px] text-[#25272ACC] font-normal font-Montserrat pl-[10px] border border-[#0046B84D]">
                    Андижон вил. Андижон ш. Бобуршох кўчаси 11-уй</td>
                  <td
                    class="w-[183px] h-full text-start text-[18px] text-[#25272ACC] font-normal font-Montserrat pl-[10px] border border-[#0046B84D]">
                    (97) 744-20-10</td>
                  <td
                    class="w-[142px] h-full text-start text-[18px] text-[#25272ACC] font-normal font-Montserrat pl-[10px] border border-[#0046B84D]">
                    0033</td>
                  <td
                    class="w-[193px] h-full text-start text-[18px] text-[#25272ACC] font-normal font-Montserrat pl-[10px] border border-[#0046B84D]">
                    №0022 / 18.01.2019</td>
                </tr>
              </table>
            </div>
          </div>
        </div> -->

        <div class="w-[1620px] mt-[76px]">
          <div class="w-[1583px] flex justify-end">
            <h2 class="text-[28px] text-[#0046B8] font-medium font-Montserrat">Направления обучения, предоставляемые
              агентством по внешней трудовой миграции</h2>
          </div>
          <div class="flex justify-between mt-[20px]">
            <div class="w-[260px] h-[643px] rounded-[10px]">
              <button
                class="text-[18px] text-[#25272A] font-semibold font-Montserrat text-start mt-[81px] ml-[42px]">Реестр
                частных <br> агентств <br> занятости (ЧАЗ)</button>
              <button
                class="w-[196px] h-[105px] flex items-end border-t border-t-[#0046B833] text-[18px] text-[#25272A] font-semibold font-Montserrat text-start mt-[29px] ml-[42px]">Реестр
                <br>
                направлений <br> обучения</button>
            </div>
            <div class="w-[1340px] h-[690px] rounded-t-[10px]">
              <table class=" border-spacing-0 border-separate">
                <tr class="w-full h-[67px] bg-[#0046B80D]">
                  <th
                    class="w-[72px] h-full text-[18px] text-[#25272A] font-medium font-Montserrat border border-[#0046B84D] rounded-tl-[10px]">
                    №
                  </th>
                  <th
                    class="w-[370px] h-full text-[18px] text-[#25272A] font-medium font-Montserrat text-start pl-[10px] border border-[#0046B84D]">
                    Название организации</th>
                  <th
                    class="w-[290px] h-full text-[18px] text-[#25272A] font-medium font-Montserrat text-start pl-[10px] border border-[#0046B84D]">
                    Тип обучения
                  </th>
                  <th
                    class="w-[290px] h-full text-[18px] text-[#25272A] font-medium font-Montserrat text-start pl-[10px] border border-[#0046B84D]">
                    Название направления
                  </th>
                  <th
                    class="w-[320px] h-full text-[18px] text-[#25272A] font-medium font-Montserrat text-start pl-[10px] border border-[#0046B84D] rounded-tr-[10px]">
                    Продолжительность обучения
                  </th>
                </tr>
                <tr class="w-full h-[67px]">
                  <td
                    class="w-[72px] h-full text-center text-[18px] text-[#25272ACC] font-normal font-Montserrat border border-[#0046B84D]">
                    1</td>
                  <td
                    class="w-[370px] h-full text-start text-[18px] text-[#25272ACC] font-normal font-Montserrat pl-[10px] border border-[#0046B84D]">
                    "MANSURBEK O'QUV TEKS" MCHJ
                  </td>
                  <td
                    class="w-[290px] h-full text-start text-[18px] text-[#25272ACC] font-normal font-Montserrat pl-[10px] border border-[#0046B84D]">
                    Иностранный
                  </td>
                  <td
                    class="w-[290px] h-full text-start text-[18px] text-[#25272ACC] font-normal font-Montserrat pl-[10px] border border-[#0046B84D]">
                    Монтажные работы
                  </td>
                  <td
                    class="w-[320px] h-full text-start text-[18px] text-[#25272ACC] font-normal font-Montserrat pl-[10px] border border-[#0046B84D]">
                    4 месяца</td>
                </tr>
                <tr class="w-full h-[67px]">
                  <td
                    class="w-[72px] h-full text-center text-[18px] text-[#25272ACC] font-normal font-Montserrat border border-[#0046B84D]">
                    2</td>
                  <td
                    class="w-[370px] h-full text-start text-[18px] text-[#25272ACC] font-normal font-Montserrat pl-[10px] border border-[#0046B84D]">
                    "MANSURBEK O'QUV TEKS" MCHJ
                  </td>
                  <td
                    class="w-[290px] h-full text-start text-[18px] text-[#25272ACC] font-normal font-Montserrat pl-[10px] border border-[#0046B84D]">
                    Иностранный
                  </td>
                  <td
                    class="w-[290px] h-full text-start text-[18px] text-[#25272ACC] font-normal font-Montserrat pl-[10px] border border-[#0046B84D]">
                    Монтажные работы
                  </td>
                  <td
                    class="w-[320px] h-full text-start text-[18px] text-[#25272ACC] font-normal font-Montserrat pl-[10px] border border-[#0046B84D]">
                    4 месяца</td>
                </tr>
                <tr class="w-full h-[67px]">
                  <td
                    class="w-[72px] h-full text-center text-[18px] text-[#25272ACC] font-normal font-Montserrat border border-[#0046B84D]">
                    3</td>
                  <td
                    class="w-[370px] h-full text-start text-[18px] text-[#25272ACC] font-normal font-Montserrat pl-[10px] border border-[#0046B84D]">
                    "MANSURBEK O'QUV TEKS" MCHJ
                  </td>
                  <td
                    class="w-[290px] h-full text-start text-[18px] text-[#25272ACC] font-normal font-Montserrat pl-[10px] border border-[#0046B84D]">
                    Иностранный
                  </td>
                  <td
                    class="w-[290px] h-full text-start text-[18px] text-[#25272ACC] font-normal font-Montserrat pl-[10px] border border-[#0046B84D]">
                    Монтажные работы
                  </td>
                  <td
                    class="w-[320px] h-full text-start text-[18px] text-[#25272ACC] font-normal font-Montserrat pl-[10px] border border-[#0046B84D]">
                    4 месяца</td>
                </tr>
                <tr class="w-full h-[67px]">
                  <td
                    class="w-[72px] h-full text-center text-[18px] text-[#25272ACC] font-normal font-Montserrat border border-[#0046B84D]">
                    4</td>
                  <td
                    class="w-[370px] h-full text-start text-[18px] text-[#25272ACC] font-normal font-Montserrat pl-[10px] border border-[#0046B84D]">
                    "MANSURBEK O'QUV TEKS" MCHJ
                  </td>
                  <td
                    class="w-[290px] h-full text-start text-[18px] text-[#25272ACC] font-normal font-Montserrat pl-[10px] border border-[#0046B84D]">
                    Иностранный
                  </td>
                  <td
                    class="w-[290px] h-full text-start text-[18px] text-[#25272ACC] font-normal font-Montserrat pl-[10px] border border-[#0046B84D]">
                    Монтажные работы
                  </td>
                  <td
                    class="w-[320px] h-full text-start text-[18px] text-[#25272ACC] font-normal font-Montserrat pl-[10px] border border-[#0046B84D]">
                    4 месяца</td>
                </tr>
                <tr class="w-full h-[67px]">
                  <td
                    class="w-[72px] h-full text-center text-[18px] text-[#25272ACC] font-normal font-Montserrat border border-[#0046B84D]">
                    5</td>
                  <td
                    class="w-[370px] h-full text-start text-[18px] text-[#25272ACC] font-normal font-Montserrat pl-[10px] border border-[#0046B84D]">
                    "MANSURBEK O'QUV TEKS" MCHJ
                  </td>
                  <td
                    class="w-[290px] h-full text-start text-[18px] text-[#25272ACC] font-normal font-Montserrat pl-[10px] border border-[#0046B84D]">
                    Иностранный
                  </td>
                  <td
                    class="w-[290px] h-full text-start text-[18px] text-[#25272ACC] font-normal font-Montserrat pl-[10px] border border-[#0046B84D]">
                    Монтажные работы
                  </td>
                  <td
                    class="w-[320px] h-full text-start text-[18px] text-[#25272ACC] font-normal font-Montserrat pl-[10px] border border-[#0046B84D]">
                    4 месяца</td>
                </tr>
                <tr class="w-full h-[67px]">
                  <td
                    class="w-[72px] h-full text-center text-[18px] text-[#25272ACC] font-normal font-Montserrat border border-[#0046B84D]">
                    6</td>
                  <td
                    class="w-[370px] h-full text-start text-[18px] text-[#25272ACC] font-normal font-Montserrat pl-[10px] border border-[#0046B84D]">
                    "MANSURBEK O'QUV TEKS" MCHJ
                  </td>
                  <td
                    class="w-[290px] h-full text-start text-[18px] text-[#25272ACC] font-normal font-Montserrat pl-[10px] border border-[#0046B84D]">
                    Иностранный
                  </td>
                  <td
                    class="w-[290px] h-full text-start text-[18px] text-[#25272ACC] font-normal font-Montserrat pl-[10px] border border-[#0046B84D]">
                    Монтажные работы
                  </td>
                  <td
                    class="w-[320px] h-full text-start text-[18px] text-[#25272ACC] font-normal font-Montserrat pl-[10px] border border-[#0046B84D]">
                    4 месяца</td>
                </tr>
                <tr class="w-full h-[67px]">
                  <td
                    class="w-[72px] h-full text-center text-[18px] text-[#25272ACC] font-normal font-Montserrat border border-[#0046B84D]">
                    7</td>
                  <td
                    class="w-[370px] h-full text-start text-[18px] text-[#25272ACC] font-normal font-Montserrat pl-[10px] border border-[#0046B84D]">
                    "MANSURBEK O'QUV TEKS" MCHJ
                  </td>
                  <td
                    class="w-[290px] h-full text-start text-[18px] text-[#25272ACC] font-normal font-Montserrat pl-[10px] border border-[#0046B84D]">
                    Иностранный
                  </td>
                  <td
                    class="w-[290px] h-full text-start text-[18px] text-[#25272ACC] font-normal font-Montserrat pl-[10px] border border-[#0046B84D]">
                    Монтажные работы
                  </td>
                  <td
                    class="w-[320px] h-full text-start text-[18px] text-[#25272ACC] font-normal font-Montserrat pl-[10px] border border-[#0046B84D]">
                    4 месяца</td>
                </tr>
                <tr class="w-full h-[67px]">
                  <td
                    class="w-[72px] h-full text-center text-[18px] text-[#25272ACC] font-normal font-Montserrat border border-[#0046B84D]">
                    8</td>
                  <td
                    class="w-[370px] h-full text-start text-[18px] text-[#25272ACC] font-normal font-Montserrat pl-[10px] border border-[#0046B84D]">
                    "MANSURBEK O'QUV TEKS" MCHJ
                  </td>
                  <td
                    class="w-[290px] h-full text-start text-[18px] text-[#25272ACC] font-normal font-Montserrat pl-[10px] border border-[#0046B84D]">
                    Иностранный
                  </td>
                  <td
                    class="w-[290px] h-full text-start text-[18px] text-[#25272ACC] font-normal font-Montserrat pl-[10px] border border-[#0046B84D]">
                    Монтажные работы
                  </td>
                  <td
                    class="w-[320px] h-full text-start text-[18px] text-[#25272ACC] font-normal font-Montserrat pl-[10px] border border-[#0046B84D]">
                    4 месяца</td>
                </tr>
                <tr class="w-full h-[67px]">
                  <td
                    class="w-[72px] h-full text-center text-[18px] text-[#25272ACC] font-normal font-Montserrat border border-[#0046B84D]">
                    9</td>
                  <td
                    class="w-[370px] h-full text-start text-[18px] text-[#25272ACC] font-normal font-Montserrat pl-[10px] border border-[#0046B84D]">
                    "MANSURBEK O'QUV TEKS" MCHJ
                  </td>
                  <td
                    class="w-[290px] h-full text-start text-[18px] text-[#25272ACC] font-normal font-Montserrat pl-[10px] border border-[#0046B84D]">
                    Иностранный
                  </td>
                  <td
                    class="w-[290px] h-full text-start text-[18px] text-[#25272ACC] font-normal font-Montserrat pl-[10px] border border-[#0046B84D]">
                    Монтажные работы
                  </td>
                  <td
                    class="w-[320px] h-full text-start text-[18px] text-[#25272ACC] font-normal font-Montserrat pl-[10px] border border-[#0046B84D]">
                    4 месяца</td>
                </tr>

              </table>
            </div>
          </div>
        </div>
      </section>
    </main>
    <footer></footer>
  </div>
</template>

<style></style>
