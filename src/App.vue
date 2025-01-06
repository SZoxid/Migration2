<template>
  <div class="max-w-[1920px] m-auto">
    <header
      class="w-[1920px] m-auto top-0 fixed z-50"
      style="
        background-image: url('../public/imgs/Slice.png');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
      "
    >
      <nav
        class="w-[1620px] flex justify-between items-center m-auto pt-[40px] pb-[20px]"
      >
        <img
          src="../public/imgs/header-logo.png"
          alt="img"
          class="w-[128px] h-[45px]"
        />
        <ul
          class="w-[730px] flex items-center justify-between list-none ml-[-470px]"
        >
          <li
            class="text-[15px] font-medium font-Montserrat transition-transform transition-colors duration-300 transform origin-center hover:scale-110 hover:text-[#73767a]"
          >
            <a href="#vacancies" class="text-[#25272a] no-underline"
              >Вакансии</a
            >
          </li>
          <li
            class="text-[15px] font-medium font-Montserrat transition-transform transition-colors duration-300 transform origin-center hover:scale-110 hover:text-[#73767a]"
          >
            <a href="#services" class="text-[#25272a] no-underline">Услуги</a>
          </li>
          <li
            class="text-[15px] font-medium font-Montserrat transition-transform transition-colors duration-300 transform origin-center hover:scale-110 hover:text-[#73767a]"
          >
            <a href="#info-tips" class="text-[#25272a] no-underline"
              >Информационные подсказки</a
            >
          </li>
          <li
            class="text-[15px] font-medium font-Montserrat transition-transform transition-colors duration-300 transform origin-center hover:scale-110 hover:text-[#73767a]"
          >
            <a href="#courses" class="text-[#25272a] no-underline"
              >Учебные курсы</a
            >
          </li>
          <li
            class="text-[15px] font-medium font-Montserrat transition-transform transition-colors duration-300 transform origin-center hover:scale-110 hover:text-[#73767a]"
          >
            <a href="#news" class="text-[#25272a] no-underline">Новости</a>
          </li>
          <li
            class="text-[15px] font-medium font-Montserrat transition-transform transition-colors duration-300 transform origin-center hover:scale-110 hover:text-[#73767a]"
          >
            <a href="#faq" class="text-[#25272a] no-underline">F.A.Q</a>
          </li>
        </ul>
        <div class="flex items-center gap-[45px]">
          <select
            name="language"
            id="language-select"
            class="border-none bg-transparent text-[15px] text-[#25272a] font-medium font-Montserrat"
          >
            <option class="border-none" value="ru">Ру</option>
            <option class="border-none" value="uz">Уз</option>
          </select>
          <button
            class="w-[106px] h-[41px] rounded-[50px] border border-[#fb7e42] text-[18px] text-[#25272a] font-semibold font-Montserrat bg-transparent hover:bg-[#fb7e42] hover:text-white hover:border-transparent transition duration-500"
          >
            Войти
          </button>
        </div>
      </nav>
    </header>
    <main>
      <!-- after header section -->
      <section
        class="max-w-[1920px] mt-[103px] border"
        style="
          background-image: url('../public/imgs/Slice.png');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        "
      >
        <div class="w-[1620px] flex justify-between m-auto mt-[78px]">
          <div class="h-[515px]">
            <h2
              class="text-[55px] text-[#25272a] font-normal font-Montserrat mt-[117px]"
            >
              Labor
            </h2>
            <h1 class="text-[55px] font-semibold font-Montserrat mt-[-20px]">
              Migration
            </h1>
            <p
              class="w-[380px] text-[20px] text-[#25272a] font-normal font-Montserrat mt-[45px]"
            >
              Программный комплекс запущен в информационной системе «Единая
              национальная система труда»
            </p>
            <div class="flex items-center mt-[60px]">
              <div class="relative flex items-center">
                <img
                  src="../public/imgs/search-icon.svg"
                  alt="img"
                  class="absolute left-[8px] w-[38px] h-[38px] rounded-[50%] bg-[#fb7e42] p-[10px]"
                />
                <input
                  type="text"
                  placeholder="Например, строитель, няня, водитель…"
                  class="w-[385px] h-[55px] rounded-[50px] border-none pl-[69px] pr-[15px] text-[15px] text-[#25272a80] font-normal font-Montserrat shadow-xl"
                />
              </div>
              <p
                class="text-[20px] text-[#25272a] font-bold font-Montserrat ml-[20px]"
              >
                Найти работу
              </p>
              <button
                class="flex items-center justify-center w-[47px] h-[47px] border border-[#25272a4d] rounded-[50%] ml-[10px] bg-none hover:bg-[#fb7e42] hover:text-white hover:border-none hover:transition-[0.5s]"
              >
                <img
                  src="../public/imgs/Arrow-right.png"
                  alt="img"
                  class="w-[24px] h-[24px]"
                />
              </button>
            </div>
          </div>
          <div
            class="flex flex-col items-center border rounded-[30px] w-[770px] h-[515px] bg-[#00000008]"
            style="
              background-image: url('../../imgs/header_right-bgimg.png');
              background-size: cover;
              background-position: center;
              background-repeat: no-repeat;
            "
          >
            <h2
              class="text-[45px] text-[#25272a] font-semibold font-Inter mt-[68px]"
            >
              Анкета
            </h2>
            <p
              class="text-[15px] text-[#25272acc] font-light font-Inter text-center mt-[9px]"
            >
              для осуществления <br />
              трудовой деятельности зарубежом
            </p>
            <img
              src="../public/imgs/header_right-imgcenter.png"
              alt="img"
              class="mt-[25px]"
            />
            <div
              class="relative w-[100%] flex justify-between items-end top-[-24px]"
            >
              <img
                src="../public/imgs/header_right-imgman.png"
                alt="img"
                class="w-[255px] h-[211px]"
              />
              <button
                class="absolute flex justify-center items-center border-none rounded-[50px] bg-[#fb7e42] w-[144px] h-[40px] left-[313px] text-[16px] text-white text-center font-semibold font-Montserrat gap-[9px]"
              >
                Начать
                <img
                  src="../public/imgs/arrov-right_white.png"
                  alt="img"
                  class="w-[18px] h-[12px]"
                />
              </button>
              <img
                src="../public/imgs/header_right-imgwoman.png"
                alt="img"
                class="w-[161px] h-[210px] pr-[20px]"
              />
            </div>
          </div>
        </div>
        <div
          class="flex justify-center items-center w-[1620px] h-[266px] m-auto mt-[46px] gap-[95px] rounded-[35px] bg-white shadow-2xl mb-[75px]"
        >
          <div
            class="w-[310px] h-[210px] flex flex-col justify-center border-r-2 border-r-[#fb7e424d]"
          >
            <img
              src="../public/imgs/header_bottom-img1.png"
              alt="img"
              class="w-[68px] h-[39px] mt-[40px]"
            />
            <h3
              class="text-[35px] text-[#25272a] font-semibold font-Montserrat mt-[30px]"
            >
              1 939 381
            </h3>
            <p class="text-[18px] text-[#25272acc] font-medium font-Montserrat">
              Зарегистрированных <br />
              граждан
            </p>
          </div>
          <div
            class="w-[310px] h-[210px] flex flex-col justify-center border-r-2 border-r-[#fb7e424d]"
          >
            <img
              src="../public/imgs/header_bottom-img2.png"
              alt="img"
              class="w-[68px] h-[45px] mt-[40px]"
            />
            <h3
              class="text-[35px] text-[#25272a] font-semibold font-Montserrat mt-[27px]"
            >
              498
            </h3>
            <p class="text-[18px] text-[#25272acc] font-medium font-Montserrat">
              Соглашений с <br />
              работодателями
            </p>
          </div>
          <div
            class="w-[310px] h-[210px] flex flex-col justify-center border-r-2 border-r-[#fb7e424d]"
          >
            <img
              src="../public/imgs/header_bottom-img3.png"
              alt="img"
              class="w-[50px] h-[50px] ml-[px] mt-[40px]"
            />
            <h3
              class="text-[35px] text-[#25272a] font-semibold font-Montserrat mt-[25px]"
            >
              6 711
            </h3>
            <p class="text-[18px] text-[#25272acc] font-medium font-Montserrat">
              Предоставленные <br />
              вакансии
            </p>
          </div>
          <div class="w-[190px] h-[210px] flex flex-col justify-center">
            <img
              src="../public/imgs/header_bottom-img4.png"
              alt="img"
              class="w-[70px] h-[74px] ml-[px] mt-[40px]"
            />
            <h3
              class="text-[35px] text-[#25272a] font-semibold font-Montserrat mt-[25px]"
            >
              2 773 691
            </h3>
            <p class="text-[18px] text-[#25272acc] font-medium font-Montserrat">
              Предоставленных <br />
              услуг
            </p>
          </div>
        </div>
      </section>
      <!-- uslugi section -->
      <section class="max-w-[1620px] m-auto mt-[90px]">
        <div class="w-[985px] flex justify-between pl-[47px] pr-[47px] m-auto">
          <button
            class="text-[24px] font-normal font-Montserrat"
            :class="{
              'text-[#0046B8] underline text-[28px] font-semibold':
                selectedButton === 1,
              'text-[#25272AB2]': selectedButton !== 1,
            }"
            @click="setSelectedButton(1)"
          >
            Услуги
          </button>
          <button
            class="text-[24px] font-normal font-Montserrat"
            :class="{
              'text-[#0046B8] underline text-[28px] font-semibold':
                selectedButton === 2,
              'text-[#25272AB2]': selectedButton !== 2,
            }"
            @click="setSelectedButton(2)"
          >
            Информационные подсказки
          </button>
          <button
            :class="[
              'text-[24px] font-normal font-Montserrat',
              {
                'text-[#0046B8] underline text-[28px] font-semibold':
                  selectedButton === 3,
                'text-[#25272AB2]': selectedButton !== 3,
              },
            ]"
            @click="setSelectedButton(3)"
          >
            Реестры
          </button>
        </div>
        <div v-if="selectedButton === 1">
          <div class="w-[1620px] flex justify-between m-auto mt-[72px]">
            <div class="w-[390px] rounded-[10px] border border-[#0046B833]">
              <div>
                <img
                  src="../public/imgs/uslugi-img1.png"
                  alt="img"
                  class="w-[390px] h-[217px]"
                />
              </div>
              <div class="p-[20px]">
                <h2
                  class="text-[18px] text-[#25272A] font-semibold font-Montserrat"
                >
                  Прекращение действия подтверждения на право трудовой
                  деятельности
                </h2>
                <p
                  class="text-[15px] text-[#25272ACC] font-normal font-Montserrat mt-[11px]"
                >
                  Услуга для физических и юридических лиц
                </p>
                <button
                  class="w-[149px] h-[41px] border-none rounded-[5px] bg-[#0046B8] text-[18px] text-white font-medium font-Montserrat mt-[20px]"
                >
                  Подать заявку
                </button>
              </div>
            </div>
            <div class="w-[390px] rounded-[10px] border border-[#0046B833]">
              <div>
                <img
                  src="../public/imgs/uslugi-img2.png"
                  alt="img"
                  class="w-[390px] h-[217px]"
                />
              </div>
              <div class="p-[20px]">
                <h2
                  class="text-[18px] text-[#25272A] font-semibold font-Montserrat"
                >
                  Прекращение действия подтверждения на право трудовой
                  деятельности
                </h2>
                <p
                  class="text-[15px] text-[#25272ACC] font-normal font-Montserrat mt-[11px]"
                >
                  Услуга для физических и юридических лиц
                </p>
                <button
                  class="w-[149px] h-[41px] border-none rounded-[5px] bg-[#0046B8] text-[18px] text-white font-medium font-Montserrat mt-[20px]"
                >
                  Подать заявку
                </button>
              </div>
            </div>
            <div class="w-[390px] rounded-[10px] border border-[#0046B833]">
              <div>
                <img
                  src="../public/imgs/uslugi-img3.png"
                  alt="img"
                  class="w-[390px] h-[217px]"
                />
              </div>
              <div class="p-[20px]">
                <h2
                  class="text-[18px] text-[#25272A] font-semibold font-Montserrat"
                >
                  Прекращение действия подтверждения на право трудовой
                  деятельности
                </h2>
                <p
                  class="text-[15px] text-[#25272ACC] font-normal font-Montserrat mt-[11px]"
                >
                  Услуга для физических и юридических лиц
                </p>
                <button
                  class="w-[149px] h-[41px] border-none rounded-[5px] bg-[#0046B8] text-[18px] text-white font-medium font-Montserrat mt-[20px]"
                >
                  Подать заявку
                </button>
              </div>
            </div>
            <div class="w-[390px] rounded-[10px] border border-[#0046B833]">
              <div>
                <img
                  src="../public/imgs/uslugi-img4.png"
                  alt="img"
                  class="w-[390px] h-[217px]"
                />
              </div>
              <div class="p-[20px]">
                <h2
                  class="text-[18px] text-[#25272A] font-semibold font-Montserrat"
                >
                  Прекращение действия подтверждения на право трудовой
                  деятельности
                </h2>
                <p
                  class="text-[15px] text-[#25272ACC] font-normal font-Montserrat mt-[11px]"
                >
                  Услуга для физических и юридических лиц
                </p>
                <button
                  class="w-[149px] h-[41px] border-none rounded-[5px] bg-[#0046B8] text-[18px] text-white font-medium font-Montserrat mt-[20px]"
                >
                  Подать заявку
                </button>
              </div>
            </div>
          </div>
          <div class="w-[1620px] flex justify-between m-auto mt-[20px]">
            <div class="w-[390px] rounded-[10px] border border-[#0046B833]">
              <div>
                <img
                  src="../public/imgs/uslugi-img5.png"
                  alt="img"
                  class="w-[390px] h-[217px]"
                />
              </div>
              <div class="p-[20px]">
                <h2
                  class="text-[18px] text-[#25272A] font-semibold font-Montserrat"
                >
                  Прекращение действия подтверждения на право трудовой
                  деятельности
                </h2>
                <p
                  class="text-[15px] text-[#25272ACC] font-normal font-Montserrat mt-[11px]"
                >
                  Услуга для физических и юридических лиц
                </p>
                <button
                  class="w-[149px] h-[41px] border-none rounded-[5px] bg-[#0046B8] text-[18px] text-white font-medium font-Montserrat mt-[20px]"
                >
                  Подать заявку
                </button>
              </div>
            </div>
            <div class="w-[390px] rounded-[10px] border border-[#0046B833]">
              <div>
                <img
                  src="../public/imgs/uslugi-img6.png"
                  alt="img"
                  class="w-[390px] h-[217px]"
                />
              </div>
              <div class="p-[20px]">
                <h2
                  class="text-[18px] text-[#25272A] font-semibold font-Montserrat"
                >
                  Прекращение действия подтверждения на право трудовой
                  деятельности
                </h2>
                <p
                  class="text-[15px] text-[#25272ACC] font-normal font-Montserrat mt-[11px]"
                >
                  Услуга для физических и юридических лиц
                </p>
                <button
                  class="w-[149px] h-[41px] border-none rounded-[5px] bg-[#0046B8] text-[18px] text-white font-medium font-Montserrat mt-[20px]"
                >
                  Подать заявку
                </button>
              </div>
            </div>
            <div class="w-[390px] rounded-[10px] border border-[#0046B833]">
              <div>
                <img
                  src="../public/imgs/uslugi-img7.png"
                  alt="img"
                  class="w-[390px] h-[217px]"
                />
              </div>
              <div class="p-[20px]">
                <h2
                  class="text-[18px] text-[#25272A] font-semibold font-Montserrat"
                >
                  Прекращение действия подтверждения на право трудовой
                  деятельности
                </h2>
                <p
                  class="text-[15px] text-[#25272ACC] font-normal font-Montserrat mt-[11px]"
                >
                  Услуга для физических и юридических лиц
                </p>
                <button
                  class="w-[149px] h-[41px] border-none rounded-[5px] bg-[#0046B8] text-[18px] text-white font-medium font-Montserrat mt-[20px]"
                >
                  Подать заявку
                </button>
              </div>
            </div>
            <div class="w-[390px] rounded-[10px] border border-[#0046B833]">
              <div>
                <img
                  src="../public/imgs/uslugi-img8.png"
                  alt="img"
                  class="w-[390px] h-[217px]"
                />
              </div>
              <div class="p-[20px]">
                <h2
                  class="text-[18px] text-[#25272A] font-semibold font-Montserrat"
                >
                  Прекращение действия подтверждения на право трудовой
                  деятельности
                </h2>
                <p
                  class="text-[15px] text-[#25272ACC] font-normal font-Montserrat mt-[11px]"
                >
                  Услуга для физических и юридических лиц
                </p>
                <button
                  class="w-[149px] h-[41px] border-none rounded-[5px] bg-[#0046B8] text-[18px] text-white font-medium font-Montserrat mt-[20px]"
                >
                  Подать заявку
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          v-if="selectedButton === 2"
          class="w-[1620px] mt-[57px] flex justify-between pb-[100px]"
        >
          <div
            class="w-[777px] h-[731px] overflow-y-auto rounded-[35px]"
            style="
              background: linear-gradient(140deg, #f7dcc733 18%, #eee5fa33 85%);
            "
          >
            <button
              class="w-[729px] flex m-auto mt-[51px] text-[24px] text-[#25272A] font-semibold font-Montserrat"
            >
              Регистрация патента
            </button>
            <div
              class="w-[729px] h-[85px] flex items-center border-t m-auto mt-[32px] pl-[24px] text-[22px] text-[#25272ABF] font-medium font-Montserrat hover:cursor-pointer"
            >
              Порядок правовой, социальной защиты и финансовой <br />
              поддержки трудовых мигрантов за рубежом
            </div>
            <div
              class="w-[729px] h-[85px] flex items-center border-t m-auto mt-[10px] pl-[24px] text-[22px] text-[#25272ABF] font-medium font-Montserrat hover:cursor-pointer"
            >
              Порядок правовой, социальной защиты и финансовой <br />
              поддержки трудовых мигрантов за рубежом
            </div>
            <div
              class="w-[729px] h-[85px] flex items-center border-t m-auto mt-[10px] pl-[24px] text-[22px] text-[#25272ABF] font-medium font-Montserrat hover:cursor-pointer"
            >
              Порядок правовой, социальной защиты и финансовой <br />
              поддержки трудовых мигрантов за рубежом
            </div>
            <div
              class="w-[729px] h-[85px] flex items-center border-t m-auto mt-[10px] pl-[24px] text-[22px] text-[#25272ABF] font-medium font-Montserrat hover:cursor-pointer"
            >
              Порядок правовой, социальной защиты и финансовой <br />
              поддержки трудовых мигрантов за рубежом
            </div>
            <div
              class="w-[729px] h-[85px] flex items-center border-t m-auto mt-[10px] pl-[24px] text-[22px] text-[#25272ABF] font-medium font-Montserrat hover:cursor-pointer"
            >
              Порядок правовой, социальной защиты и финансовой <br />
              поддержки трудовых мигрантов за рубежом
            </div>
            <div
              class="w-[729px] h-[85px] flex items-center border-t m-auto mt-[10px] pl-[24px] mb-[14px] text-[22px] text-[#25272ABF] font-medium font-Montserrat hover:cursor-pointer"
            >
              Порядок правовой, социальной защиты и финансовой <br />
              поддержки трудовых мигрантов за рубежом
            </div>
          </div>
          <div class="w-[777px] h-[710px] mt-[19px] overflow-y-auto">
            <p>
              1 января 2015 г. вышли Федеральный закон «О внесении изменений в
              Федеральный закон« О правовом положении иностранных граждан в
              Российской Федерации »№ 357-ФЗ от 24.11.2014 г. и Закон Российской
              Федерации« О правовом положении иностранных граждан в Российской
              Федерации ». Вступили в силу изменения в отдельные законодательные
              акты Российской Федерации ». Будет введен единый патентный
              документ для физических, индивидуальных предпринимателей и
              юридических лиц для ведения открытой трудовой деятельности на
              территории Российской Федерации. Для получения патента необходимо
              обратиться в миграционную службу в течение 30 дней с момента
              въезда в РФ. (Внимание! За несвоевременную подачу документов
              взимается штраф от 10 000 до 15 000 рублей). -документ,
              подтверждающий ваш перевод в миграционный аккаунт; -документы,
              удостоверяющие вашу личность; -миграционная карта, в которой
              должна быть указана цель приезда в РФ (Внимание! Если указана
              другая цель, получить патент нельзя); - медицинский полис или
              договор страхования здоровья; - Справка об отсутствии инфекционных
              заболеваний; - Свидетельство о знании русского языка, знании
              истории и права России. Вы должны получить или отказать в выдаче
              патента в течение 10 дней с момента получения необходимых
              документов и отпечатков пальцев. Патент выдается на срок от одного
              месяца до одного года, вы имеете право продлить его еще на год. Вы
              можете оплачивать его каждый месяц или за 12 месяцев. Патент
              действителен, если за него внесена предоплата. Размер аванса
              определяется органами власти субъектов Российской Федерации.
              Размер аванса на 2018 год в Москве составит 4500 рублей, в
              Московской области - 4300 рублей. Биллинг! Вы имеете право
              переоформить патент как минимум за 10 рабочих дней до истечения
              12-месячного периода с даты выдачи оригинального патента. При этом
              количество заявок на переоформление патента не должно превышать
              одного раза. Патент выдается иностранному гражданину на срок от 1
              до 12 месяцев. Срок действия переоформленного патента может быть
              продлен несколько раз с 1 месяца. В этом случае общий срок
              действия патента, включая продления, не должен превышать 12
              месяцев с даты его переоформления. шшяша Помните! С полученным
              патентом вы можете работать только в том субъекте Российской
              Федерации, где этот патент был выдан. В этом случае вы также
              можете подать заявку на получение второго патента в другом
              предмете, с которым вы планируете снова работать. У вас есть два
              способа заполнить все указанные выше документы: - через Единые
              миграционные центры в Москве и Московской области, которые
              предоставляют миграционные услуги, они предоставляют полный спектр
              услуг, в том числе: медицинский полис или договор медицинского
              страхования, медицинское обследование и справку об отсутствии
              инфекционных заболеваний, анализы и выдать свидетельство о знании
              русского языка, знании истории и права России; - самостоятельно; В
              этом случае всю информацию о перечне медицинских, страховых и
              образовательных организаций, имеющих право оказывать услуги и
              оформлять необходимые документы для регистрации патента, следует
              получать в территориальных подразделениях ММББ МВД РФ (ГУВМ МВД
              РФ). Внимание! Даже если вы самостоятельно получили медицинский
              полис или договор медицинского страхования, справку об отсутствии
              инфекционных заболеваний, свободное владение русским языком,
              справку о знании российской истории и законодательства, вы все
              равно можете лично обратиться в Единые миграционные центры в
              Москве и Москве. региона. Вам нужно будет связаться. Так что
              постарайтесь заранее найти работодателя, у которого вы планируете
              работать, но он оплатит эти расходы. В Москве и Московской области
              действуют Единые миграционные центры, которые предоставляют полный
              спектр услуг по миграционным вопросам, включая подготовку
              документов для выдачи патентов, а также помощь и консультации при
              подготовке документов для выдачи в МВД. в Москве и Московской
              области. Помните! После получения патента иностранный гражданин
              должен заключить трудовой или гражданско-правовой договор с
              работодателем (физическим или юридическим лицом).
            </p>
          </div>
        </div>
        <div v-if="selectedButton === 3">
          <div class="w-[1620px] mt-[76px]">
            <div class="w-[1200px] flex justify-end">
              <h2
                class="text-[28px] text-[#0046B8] font-medium font-Montserrat"
              >
                Лицензированные частные агентства по трудоустройству (10)
              </h2>
            </div>
            <div class="flex justify-between mt-[20px] border">
              <div class="w-[260px] h-[643px] rounded-[10px]">
                <button
                  class="text-[18px] text-[#25272A] font-semibold font-Montserrat text-start mt-[81px] ml-[42px]"
                  :class="{ 'text-[#0046B8]': activeTab === 1 }"
                  @click="activeTab = 1"
                >
                  Реестр частных <br />
                  агентств <br />
                  занятости (ЧАЗ)
                </button>
                <button
                  class="w-[196px] h-[105px] flex items-end border-t border-t-[#0046B833] text-[18px] text-[#25272A] font-semibold font-Montserrat text-start mt-[29px] ml-[42px]"
                  :class="{ 'text-[#0046B8]': activeTab === 2 }"
                  @click="activeTab = 2"
                >
                  Реестр
                  <br />
                  направлений <br />
                  обучения
                </button>
              </div>
              <div
                class="w-[1340px] h-[690px] rounded-t-[10px]"
                v-if="activeTab === 1"
              >
                <table class="border-spacing-0 border-separate">
                  <tr class="w-full h-[67px] bg-[#0046B80D]">
                    <th
                      class="w-[72px] h-full text-[18px] text-[#25272A] font-medium font-Montserrat border border-[#0046B84D] rounded-tl-[10px]"
                    >
                      №
                    </th>
                    <th
                      class="w-[390px] h-full text-[18px] text-[#25272A] font-medium font-Montserrat text-start pl-[10px] border border-[#0046B84D]"
                    >
                      Название
                    </th>
                    <th
                      class="w-[360px] h-full text-[18px] text-[#25272A] font-medium font-Montserrat text-start pl-[10px] border border-[#0046B84D]"
                    >
                      Адрес
                    </th>
                    <th
                      class="w-[183px] h-full text-[18px] text-[#25272A] font-medium font-Montserrat text-start pl-[10px] border border-[#0046B84D]"
                    >
                      Номер телефона
                    </th>
                    <th
                      class="w-[142px] h-full text-[18px] text-[#25272A] font-medium font-Montserrat text-start pl-[10px] border border-[#0046B84D]"
                    >
                      Регистрацио <br />
                      нный номер
                    </th>
                    <th
                      class="w-[193px] h-full text-[18px] text-[#25272A] font-medium font-Montserrat text-start pl-[10px] border border-[#0046B84D] rounded-tr-[10px]"
                    >
                      Номер лицензии и дата
                    </th>
                  </tr>
                  <tr class="w-full h-[67px]">
                    <td
                      class="w-[72px] h-full text-center text-[18px] text-[#25272ACC] font-normal font-Montserrat border border-[#0046B84D]"
                    >
                      1
                    </td>
                    <td
                      class="w-[390px] h-full text-start text-[18px] text-[#25272ACC] font-normal font-Montserrat pl-[10px] border border-[#0046B84D]"
                    >
                      " Reiwa xususiy bandlik agentligi" МЧЖ
                    </td>
                    <td
                      class="w-[360px] h-full text-start text-[18px] text-[#25272ACC] font-normal font-Montserrat pl-[10px] border border-[#0046B84D]"
                    >
                      Андижон вил. Андижон ш. Бобуршох кўчаси 11-уй
                    </td>
                    <td
                      class="w-[183px] h-full text-start text-[18px] text-[#25272ACC] font-normal font-Montserrat pl-[10px] border border-[#0046B84D]"
                    >
                      (97) 744-20-10
                    </td>
                    <td
                      class="w-[142px] h-full text-start text-[18px] text-[#25272ACC] font-normal font-Montserrat pl-[10px] border border-[#0046B84D]"
                    >
                      0033
                    </td>
                    <td
                      class="w-[193px] h-full text-start text-[18px] text-[#25272ACC] font-normal font-Montserrat pl-[10px] border border-[#0046B84D]"
                    >
                      №0022 / 18.01.2019
                    </td>
                  </tr>
                  <tr class="w-full h-[67px]">
                    <td
                      class="w-[72px] h-full text-center text-[18px] text-[#25272ACC] font-normal font-Montserrat border border-[#0046B84D]"
                    >
                      2
                    </td>
                    <td
                      class="w-[390px] h-full text-start text-[18px] text-[#25272ACC] font-normal font-Montserrat pl-[10px] border border-[#0046B84D]"
                    >
                      " Reiwa xususiy bandlik agentligi" МЧЖ
                    </td>
                    <td
                      class="w-[360px] h-full text-start text-[18px] text-[#25272ACC] font-normal font-Montserrat pl-[10px] border border-[#0046B84D]"
                    >
                      Андижон вил. Андижон ш. Бобуршох кўчаси 11-уй
                    </td>
                    <td
                      class="w-[183px] h-full text-start text-[18px] text-[#25272ACC] font-normal font-Montserrat pl-[10px] border border-[#0046B84D]"
                    >
                      (97) 744-20-10
                    </td>
                    <td
                      class="w-[142px] h-full text-start text-[18px] text-[#25272ACC] font-normal font-Montserrat pl-[10px] border border-[#0046B84D]"
                    >
                      0033
                    </td>
                    <td
                      class="w-[193px] h-full text-start text-[18px] text-[#25272ACC] font-normal font-Montserrat pl-[10px] border border-[#0046B84D]"
                    >
                      №0022 / 18.01.2019
                    </td>
                  </tr>
                  <tr class="w-full h-[67px]">
                    <td
                      class="w-[72px] h-full text-center text-[18px] text-[#25272ACC] font-normal font-Montserrat border border-[#0046B84D]"
                    >
                      3
                    </td>
                    <td
                      class="w-[390px] h-full text-start text-[18px] text-[#25272ACC] font-normal font-Montserrat pl-[10px] border border-[#0046B84D]"
                    >
                      " Reiwa xususiy bandlik agentligi" МЧЖ
                    </td>
                    <td
                      class="w-[360px] h-full text-start text-[18px] text-[#25272ACC] font-normal font-Montserrat pl-[10px] border border-[#0046B84D]"
                    >
                      Андижон вил. Андижон ш. Бобуршох кўчаси 11-уй
                    </td>
                    <td
                      class="w-[183px] h-full text-start text-[18px] text-[#25272ACC] font-normal font-Montserrat pl-[10px] border border-[#0046B84D]"
                    >
                      (97) 744-20-10
                    </td>
                    <td
                      class="w-[142px] h-full text-start text-[18px] text-[#25272ACC] font-normal font-Montserrat pl-[10px] border border-[#0046B84D]"
                    >
                      0033
                    </td>
                    <td
                      class="w-[193px] h-full text-start text-[18px] text-[#25272ACC] font-normal font-Montserrat pl-[10px] border border-[#0046B84D]"
                    >
                      №0022 / 18.01.2019
                    </td>
                  </tr>
                  <tr class="w-full h-[67px]">
                    <td
                      class="w-[72px] h-full text-center text-[18px] text-[#25272ACC] font-normal font-Montserrat border border-[#0046B84D]"
                    >
                      4
                    </td>
                    <td
                      class="w-[390px] h-full text-start text-[18px] text-[#25272ACC] font-normal font-Montserrat pl-[10px] border border-[#0046B84D]"
                    >
                      " Reiwa xususiy bandlik agentligi" МЧЖ
                    </td>
                    <td
                      class="w-[360px] h-full text-start text-[18px] text-[#25272ACC] font-normal font-Montserrat pl-[10px] border border-[#0046B84D]"
                    >
                      Андижон вил. Андижон ш. Бобуршох кўчаси 11-уй
                    </td>
                    <td
                      class="w-[183px] h-full text-start text-[18px] text-[#25272ACC] font-normal font-Montserrat pl-[10px] border border-[#0046B84D]"
                    >
                      (97) 744-20-10
                    </td>
                    <td
                      class="w-[142px] h-full text-start text-[18px] text-[#25272ACC] font-normal font-Montserrat pl-[10px] border border-[#0046B84D]"
                    >
                      0033
                    </td>
                    <td
                      class="w-[193px] h-full text-start text-[18px] text-[#25272ACC] font-normal font-Montserrat pl-[10px] border border-[#0046B84D]"
                    >
                      №0022 / 18.01.2019
                    </td>
                  </tr>
                  <tr class="w-full h-[67px]">
                    <td
                      class="w-[72px] h-full text-center text-[18px] text-[#25272ACC] font-normal font-Montserrat border border-[#0046B84D]"
                    >
                      5
                    </td>
                    <td
                      class="w-[390px] h-full text-start text-[18px] text-[#25272ACC] font-normal font-Montserrat pl-[10px] border border-[#0046B84D]"
                    >
                      " Reiwa xususiy bandlik agentligi" МЧЖ
                    </td>
                    <td
                      class="w-[360px] h-full text-start text-[18px] text-[#25272ACC] font-normal font-Montserrat pl-[10px] border border-[#0046B84D]"
                    >
                      Андижон вил. Андижон ш. Бобуршох кўчаси 11-уй
                    </td>
                    <td
                      class="w-[183px] h-full text-start text-[18px] text-[#25272ACC] font-normal font-Montserrat pl-[10px] border border-[#0046B84D]"
                    >
                      (97) 744-20-10
                    </td>
                    <td
                      class="w-[142px] h-full text-start text-[18px] text-[#25272ACC] font-normal font-Montserrat pl-[10px] border border-[#0046B84D]"
                    >
                      0033
                    </td>
                    <td
                      class="w-[193px] h-full text-start text-[18px] text-[#25272ACC] font-normal font-Montserrat pl-[10px] border border-[#0046B84D]"
                    >
                      №0022 / 18.01.2019
                    </td>
                  </tr>
                  <tr class="w-full h-[67px]">
                    <td
                      class="w-[72px] h-full text-center text-[18px] text-[#25272ACC] font-normal font-Montserrat border border-[#0046B84D]"
                    >
                      6
                    </td>
                    <td
                      class="w-[390px] h-full text-start text-[18px] text-[#25272ACC] font-normal font-Montserrat pl-[10px] border border-[#0046B84D]"
                    >
                      " Reiwa xususiy bandlik agentligi" МЧЖ
                    </td>
                    <td
                      class="w-[360px] h-full text-start text-[18px] text-[#25272ACC] font-normal font-Montserrat pl-[10px] border border-[#0046B84D]"
                    >
                      Андижон вил. Андижон ш. Бобуршох кўчаси 11-уй
                    </td>
                    <td
                      class="w-[183px] h-full text-start text-[18px] text-[#25272ACC] font-normal font-Montserrat pl-[10px] border border-[#0046B84D]"
                    >
                      (97) 744-20-10
                    </td>
                    <td
                      class="w-[142px] h-full text-start text-[18px] text-[#25272ACC] font-normal font-Montserrat pl-[10px] border border-[#0046B84D]"
                    >
                      0033
                    </td>
                    <td
                      class="w-[193px] h-full text-start text-[18px] text-[#25272ACC] font-normal font-Montserrat pl-[10px] border border-[#0046B84D]"
                    >
                      №0022 / 18.01.2019
                    </td>
                  </tr>
                  <tr class="w-full h-[67px]">
                    <td
                      class="w-[72px] h-full text-center text-[18px] text-[#25272ACC] font-normal font-Montserrat border border-[#0046B84D]"
                    >
                      7
                    </td>
                    <td
                      class="w-[390px] h-full text-start text-[18px] text-[#25272ACC] font-normal font-Montserrat pl-[10px] border border-[#0046B84D]"
                    >
                      " Reiwa xususiy bandlik agentligi" МЧЖ
                    </td>
                    <td
                      class="w-[360px] h-full text-start text-[18px] text-[#25272ACC] font-normal font-Montserrat pl-[10px] border border-[#0046B84D]"
                    >
                      Андижон вил. Андижон ш. Бобуршох кўчаси 11-уй
                    </td>
                    <td
                      class="w-[183px] h-full text-start text-[18px] text-[#25272ACC] font-normal font-Montserrat pl-[10px] border border-[#0046B84D]"
                    >
                      (97) 744-20-10
                    </td>
                    <td
                      class="w-[142px] h-full text-start text-[18px] text-[#25272ACC] font-normal font-Montserrat pl-[10px] border border-[#0046B84D]"
                    >
                      0033
                    </td>
                    <td
                      class="w-[193px] h-full text-start text-[18px] text-[#25272ACC] font-normal font-Montserrat pl-[10px] border border-[#0046B84D]"
                    >
                      №0022 / 18.01.2019
                    </td>
                  </tr>
                  <tr class="w-full h-[67px]">
                    <td
                      class="w-[72px] h-full text-center text-[18px] text-[#25272ACC] font-normal font-Montserrat border border-[#0046B84D]"
                    >
                      8
                    </td>
                    <td
                      class="w-[390px] h-full text-start text-[18px] text-[#25272ACC] font-normal font-Montserrat pl-[10px] border border-[#0046B84D]"
                    >
                      " Reiwa xususiy bandlik agentligi" МЧЖ
                    </td>
                    <td
                      class="w-[360px] h-full text-start text-[18px] text-[#25272ACC] font-normal font-Montserrat pl-[10px] border border-[#0046B84D]"
                    >
                      Андижон вил. Андижон ш. Бобуршох кўчаси 11-уй
                    </td>
                    <td
                      class="w-[183px] h-full text-start text-[18px] text-[#25272ACC] font-normal font-Montserrat pl-[10px] border border-[#0046B84D]"
                    >
                      (97) 744-20-10
                    </td>
                    <td
                      class="w-[142px] h-full text-start text-[18px] text-[#25272ACC] font-normal font-Montserrat pl-[10px] border border-[#0046B84D]"
                    >
                      0033
                    </td>
                    <td
                      class="w-[193px] h-full text-start text-[18px] text-[#25272ACC] font-normal font-Montserrat pl-[10px] border border-[#0046B84D]"
                    >
                      №0022 / 18.01.2019
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
          <div class="w-[1620px] mt-[76px]">
            <div class="w-[1583px] flex justify-end">
              <h2
                class="text-[28px] text-[#0046B8] font-medium font-Montserrat"
              >
                Направления обучения, предоставляемые агентством по внешней
                трудовой миграции
              </h2>
            </div>
            <div class="flex justify-between mt-[20px]">
              <div
                class="w-[1340px] h-[690px] rounded-t-[10px]"
                v-if="activeTab === 2"
              >
                <table class="border-spacing-0 border-separate">
                  <tr class="w-full h-[67px] bg-[#0046B80D]">
                    <th
                      class="w-[72px] h-full text-[18px] text-[#25272A] font-medium font-Montserrat border border-[#0046B84D] rounded-tl-[10px]"
                    >
                      №
                    </th>
                    <th
                      class="w-[370px] h-full text-[18px] text-[#25272A] font-medium font-Montserrat text-start pl-[10px] border border-[#0046B84D]"
                    >
                      Название организации
                    </th>
                    <th
                      class="w-[290px] h-full text-[18px] text-[#25272A] font-medium font-Montserrat text-start pl-[10px] border border-[#0046B84D]"
                    >
                      Тип обучения
                    </th>
                    <th
                      class="w-[290px] h-full text-[18px] text-[#25272A] font-medium font-Montserrat text-start pl-[10px] border border-[#0046B84D]"
                    >
                      Название направления
                    </th>
                    <th
                      class="w-[320px] h-full text-[18px] text-[#25272A] font-medium font-Montserrat text-start pl-[10px] border border-[#0046B84D] rounded-tr-[10px]"
                    >
                      Продолжительность обучения
                    </th>
                  </tr>
                  <tr class="w-full h-[67px]">
                    <td
                      class="w-[72px] h-full text-center text-[18px] text-[#25272ACC] font-normal font-Montserrat border border-[#0046B84D]"
                    >
                      1
                    </td>
                    <td
                      class="w-[370px] h-full text-start text-[18px] text-[#25272ACC] font-normal font-Montserrat pl-[10px] border border-[#0046B84D]"
                    >
                      "MANSURBEK O'QUV TEKS" MCHJ
                    </td>
                    <td
                      class="w-[290px] h-full text-start text-[18px] text-[#25272ACC] font-normal font-Montserrat pl-[10px] border border-[#0046B84D]"
                    >
                      Иностранный
                    </td>
                    <td
                      class="w-[290px] h-full text-start text-[18px] text-[#25272ACC] font-normal font-Montserrat pl-[10px] border border-[#0046B84D]"
                    >
                      Монтажные работы
                    </td>
                    <td
                      class="w-[320px] h-full text-start text-[18px] text-[#25272ACC] font-normal font-Montserrat pl-[10px] border border-[#0046B84D]"
                    >
                      4 месяца
                    </td>
                  </tr>
                  <tr class="w-full h-[67px]">
                    <td
                      class="w-[72px] h-full text-center text-[18px] text-[#25272ACC] font-normal font-Montserrat border border-[#0046B84D]"
                    >
                      2
                    </td>
                    <td
                      class="w-[370px] h-full text-start text-[18px] text-[#25272ACC] font-normal font-Montserrat pl-[10px] border border-[#0046B84D]"
                    >
                      "MANSURBEK O'QUV TEKS" MCHJ
                    </td>
                    <td
                      class="w-[290px] h-full text-start text-[18px] text-[#25272ACC] font-normal font-Montserrat pl-[10px] border border-[#0046B84D]"
                    >
                      Иностранный
                    </td>
                    <td
                      class="w-[290px] h-full text-start text-[18px] text-[#25272ACC] font-normal font-Montserrat pl-[10px] border border-[#0046B84D]"
                    >
                      Монтажные работы
                    </td>
                    <td
                      class="w-[320px] h-full text-start text-[18px] text-[#25272ACC] font-normal font-Montserrat pl-[10px] border border-[#0046B84D]"
                    >
                      4 месяца
                    </td>
                  </tr>
                  <tr class="w-full h-[67px]">
                    <td
                      class="w-[72px] h-full text-center text-[18px] text-[#25272ACC] font-normal font-Montserrat border border-[#0046B84D]"
                    >
                      3
                    </td>
                    <td
                      class="w-[370px] h-full text-start text-[18px] text-[#25272ACC] font-normal font-Montserrat pl-[10px] border border-[#0046B84D]"
                    >
                      "MANSURBEK O'QUV TEKS" MCHJ
                    </td>
                    <td
                      class="w-[290px] h-full text-start text-[18px] text-[#25272ACC] font-normal font-Montserrat pl-[10px] border border-[#0046B84D]"
                    >
                      Иностранный
                    </td>
                    <td
                      class="w-[290px] h-full text-start text-[18px] text-[#25272ACC] font-normal font-Montserrat pl-[10px] border border-[#0046B84D]"
                    >
                      Монтажные работы
                    </td>
                    <td
                      class="w-[320px] h-full text-start text-[18px] text-[#25272ACC] font-normal font-Montserrat pl-[10px] border border-[#0046B84D]"
                    >
                      4 месяца
                    </td>
                  </tr>
                  <tr class="w-full h-[67px]">
                    <td
                      class="w-[72px] h-full text-center text-[18px] text-[#25272ACC] font-normal font-Montserrat border border-[#0046B84D]"
                    >
                      4
                    </td>
                    <td
                      class="w-[370px] h-full text-start text-[18px] text-[#25272ACC] font-normal font-Montserrat pl-[10px] border border-[#0046B84D]"
                    >
                      "MANSURBEK O'QUV TEKS" MCHJ
                    </td>
                    <td
                      class="w-[290px] h-full text-start text-[18px] text-[#25272ACC] font-normal font-Montserrat pl-[10px] border border-[#0046B84D]"
                    >
                      Иностранный
                    </td>
                    <td
                      class="w-[290px] h-full text-start text-[18px] text-[#25272ACC] font-normal font-Montserrat pl-[10px] border border-[#0046B84D]"
                    >
                      Монтажные работы
                    </td>
                    <td
                      class="w-[320px] h-full text-start text-[18px] text-[#25272ACC] font-normal font-Montserrat pl-[10px] border border-[#0046B84D]"
                    >
                      4 месяца
                    </td>
                  </tr>
                  <tr class="w-full h-[67px]">
                    <td
                      class="w-[72px] h-full text-center text-[18px] text-[#25272ACC] font-normal font-Montserrat border border-[#0046B84D]"
                    >
                      5
                    </td>
                    <td
                      class="w-[370px] h-full text-start text-[18px] text-[#25272ACC] font-normal font-Montserrat pl-[10px] border border-[#0046B84D]"
                    >
                      "MANSURBEK O'QUV TEKS" MCHJ
                    </td>
                    <td
                      class="w-[290px] h-full text-start text-[18px] text-[#25272ACC] font-normal font-Montserrat pl-[10px] border border-[#0046B84D]"
                    >
                      Иностранный
                    </td>
                    <td
                      class="w-[290px] h-full text-start text-[18px] text-[#25272ACC] font-normal font-Montserrat pl-[10px] border border-[#0046B84D]"
                    >
                      Монтажные работы
                    </td>
                    <td
                      class="w-[320px] h-full text-start text-[18px] text-[#25272ACC] font-normal font-Montserrat pl-[10px] border border-[#0046B84D]"
                    >
                      4 месяца
                    </td>
                  </tr>
                  <tr class="w-full h-[67px]">
                    <td
                      class="w-[72px] h-full text-center text-[18px] text-[#25272ACC] font-normal font-Montserrat border border-[#0046B84D]"
                    >
                      6
                    </td>
                    <td
                      class="w-[370px] h-full text-start text-[18px] text-[#25272ACC] font-normal font-Montserrat pl-[10px] border border-[#0046B84D]"
                    >
                      "MANSURBEK O'QUV TEKS" MCHJ
                    </td>
                    <td
                      class="w-[290px] h-full text-start text-[18px] text-[#25272ACC] font-normal font-Montserrat pl-[10px] border border-[#0046B84D]"
                    >
                      Иностранный
                    </td>
                    <td
                      class="w-[290px] h-full text-start text-[18px] text-[#25272ACC] font-normal font-Montserrat pl-[10px] border border-[#0046B84D]"
                    >
                      Монтажные работы
                    </td>
                    <td
                      class="w-[320px] h-full text-start text-[18px] text-[#25272ACC] font-normal font-Montserrat pl-[10px] border border-[#0046B84D]"
                    >
                      4 месяца
                    </td>
                  </tr>
                  <tr class="w-full h-[67px]">
                    <td
                      class="w-[72px] h-full text-center text-[18px] text-[#25272ACC] font-normal font-Montserrat border border-[#0046B84D]"
                    >
                      7
                    </td>
                    <td
                      class="w-[370px] h-full text-start text-[18px] text-[#25272ACC] font-normal font-Montserrat pl-[10px] border border-[#0046B84D]"
                    >
                      "MANSURBEK O'QUV TEKS" MCHJ
                    </td>
                    <td
                      class="w-[290px] h-full text-start text-[18px] text-[#25272ACC] font-normal font-Montserrat pl-[10px] border border-[#0046B84D]"
                    >
                      Иностранный
                    </td>
                    <td
                      class="w-[290px] h-full text-start text-[18px] text-[#25272ACC] font-normal font-Montserrat pl-[10px] border border-[#0046B84D]"
                    >
                      Монтажные работы
                    </td>
                    <td
                      class="w-[320px] h-full text-start text-[18px] text-[#25272ACC] font-normal font-Montserrat pl-[10px] border border-[#0046B84D]"
                    >
                      4 месяца
                    </td>
                  </tr>
                  <tr class="w-full h-[67px]">
                    <td
                      class="w-[72px] h-full text-center text-[18px] text-[#25272ACC] font-normal font-Montserrat border border-[#0046B84D]"
                    >
                      8
                    </td>
                    <td
                      class="w-[370px] h-full text-start text-[18px] text-[#25272ACC] font-normal font-Montserrat pl-[10px] border border-[#0046B84D]"
                    >
                      "MANSURBEK O'QUV TEKS" MCHJ
                    </td>
                    <td
                      class="w-[290px] h-full text-start text-[18px] text-[#25272ACC] font-normal font-Montserrat pl-[10px] border border-[#0046B84D]"
                    >
                      Иностранный
                    </td>
                    <td
                      class="w-[290px] h-full text-start text-[18px] text-[#25272ACC] font-normal font-Montserrat pl-[10px] border border-[#0046B84D]"
                    >
                      Монтажные работы
                    </td>
                    <td
                      class="w-[320px] h-full text-start text-[18px] text-[#25272ACC] font-normal font-Montserrat pl-[10px] border border-[#0046B84D]"
                    >
                      4 месяца
                    </td>
                  </tr>
                  <tr class="w-full h-[67px]">
                    <td
                      class="w-[72px] h-full text-center text-[18px] text-[#25272ACC] font-normal font-Montserrat border border-[#0046B84D]"
                    >
                      9
                    </td>
                    <td
                      class="w-[370px] h-full text-start text-[18px] text-[#25272ACC] font-normal font-Montserrat pl-[10px] border border-[#0046B84D]"
                    >
                      "MANSURBEK O'QUV TEKS" MCHJ
                    </td>
                    <td
                      class="w-[290px] h-full text-start text-[18px] text-[#25272ACC] font-normal font-Montserrat pl-[10px] border border-[#0046B84D]"
                    >
                      Иностранный
                    </td>
                    <td
                      class="w-[290px] h-full text-start text-[18px] text-[#25272ACC] font-normal font-Montserrat pl-[10px] border border-[#0046B84D]"
                    >
                      Монтажные работы
                    </td>
                    <td
                      class="w-[320px] h-full text-start text-[18px] text-[#25272ACC] font-normal font-Montserrat pl-[10px] border border-[#0046B84D]"
                    >
                      4 месяца
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- vakansii section -->
      <section class="max-w-[1620px] mt-[100px] m-auto">
        <div>
          <h2 class="text-[28px] text-[#25272A] font-bold font-Montserrat">
            Вакансии
          </h2>
        </div>
        <div class="w-[777px] flex justify-between mt-[30px]">
          <div class="relative">
            <img
              src=""
              alt="img"
              class="absolute w-[24px] h-[24px] top-[13px] left-[14px]"
            />
            <input
              type="text"
              placeholder="Например, строитель, няня, водитель…"
              class="w-[402px] h-[50px] rounded-[5px] pl-[62px] pr-[10px] bg-[#fff] border text-[15px] text-[#25272A80] font-normal font-Montserrat"
            />
          </div>
          <select
            name=""
            id=""
            class="w-[167px] rounded-[5px] text-[15px] text-[#25272A80] font-normal font-Montserrat border pl-[11px]"
          >
            <option value="Россия">Россия</option>
            <option value="Казахстан">Казахстан</option>
            <option value="Япония">Япония</option>
          </select>
          <button
            class="w-[182px] rounded-[5px] bg-[#FB7E42] border-none text-[20px] text-white font-bold font-Montserrat"
          >
            Найти работу
          </button>
        </div>
        <div class="flex justify-between mt-[44px] pb-[110px]">
          <div
            class="w-[402px] h-[746px] border-2 border-white rounded-[10px] bg-[#EBDDFB4D] pl-[28px] overflow-y-auto"
          >
            <h2
              class="text-[20px] text-[#25272A] font-semibold font-Montserrat mt-[20px]"
            >
              769 рабочих мест
            </h2>
            <select
              name=""
              id=""
              class="w-[345px] h-[40px] rounded-[5px] text-[15px] text-[#25272A] font-normal font-Montserrat pl-[17px] pr-[8px] mt-[19px]"
            >
              <option value="Россия">Россия</option>
              <option value="Казахстан">Казахстан</option>
              <option value="Япония">Япония</option>
            </select>
            <div
              class="w-[345px] rounded-[7px] bg-[#0000000D] border pl-[17px] mt-[18px] mb-[18px]"
            >
              <h2
                class="text-[18px] text-[#25272A] font-medium font-Montserrat mt-[18px]"
              >
                Консультант по продажам
              </h2>
              <p
                class="text-[18px] text-[#25272A] font-medium font-Montserrat mt-[10px]"
              >
                TotaalBED
              </p>
              <p
                class="text-[18px] text-[#25272A99] font-normal font-Montserrat mt-[10px]"
              >
                Германия
              </p>
              <div class="flex border gap-[15px] mt-[13px]">
                <p
                  class="w-[107px] h-[33px] bg-[#F4C3A066] border rounded-[4px] text-[20px] text-[#25272A] font-medium font-Montserrat text-center"
                >
                  800$
                </p>
                <p
                  class="w-[107px] h-[33px] bg-[#F4C3A033] border rounded-[4px] text-[18px] text-[#25272A] font-medium font-Montserrat text-center"
                >
                  20 часов
                </p>
              </div>
              <p
                class="text-[15px] text-[#25272AB2] font-semibold font-Montserrat mt-[13px] pb-[11px]"
              >
                Вчера
              </p>
            </div>
            <div
              class="w-[345px] rounded-[7px] bg-[#0000000D] border pl-[17px] mb-[18px]"
            >
              <h2
                class="text-[18px] text-[#25272A] font-medium font-Montserrat mt-[18px]"
              >
                Консультант по продажам
              </h2>
              <p
                class="text-[18px] text-[#25272A] font-medium font-Montserrat mt-[10px]"
              >
                TotaalBED
              </p>
              <p
                class="text-[18px] text-[#25272A99] font-normal font-Montserrat mt-[10px]"
              >
                Германия
              </p>
              <div class="flex border gap-[15px] mt-[13px]">
                <p
                  class="w-[107px] h-[33px] bg-[#F4C3A066] border rounded-[4px] text-[20px] text-[#25272A] font-medium font-Montserrat text-center"
                >
                  800$
                </p>
                <p
                  class="w-[107px] h-[33px] bg-[#F4C3A033] border rounded-[4px] text-[18px] text-[#25272A] font-medium font-Montserrat text-center"
                >
                  20 часов
                </p>
              </div>
              <p
                class="text-[15px] text-[#25272AB2] font-semibold font-Montserrat mt-[13px] pb-[11px]"
              >
                Вчера
              </p>
            </div>
            <div
              class="w-[345px] rounded-[7px] bg-[#0000000D] border pl-[17px] mb-[18px]"
            >
              <h2
                class="text-[18px] text-[#25272A] font-medium font-Montserrat mt-[18px]"
              >
                Консультант по продажам
              </h2>
              <p
                class="text-[18px] text-[#25272A] font-medium font-Montserrat mt-[10px]"
              >
                TotaalBED
              </p>
              <p
                class="text-[18px] text-[#25272A99] font-normal font-Montserrat mt-[10px]"
              >
                Германия
              </p>
              <div class="flex border gap-[15px] mt-[13px]">
                <p
                  class="w-[107px] h-[33px] bg-[#F4C3A066] border rounded-[4px] text-[20px] text-[#25272A] font-medium font-Montserrat text-center"
                >
                  800$
                </p>
                <p
                  class="w-[107px] h-[33px] bg-[#F4C3A033] border rounded-[4px] text-[18px] text-[#25272A] font-medium font-Montserrat text-center"
                >
                  20 часов
                </p>
              </div>
              <p
                class="text-[15px] text-[#25272AB2] font-semibold font-Montserrat mt-[13px] pb-[11px]"
              >
                Вчера
              </p>
            </div>
          </div>
          <div
            class="w-[1178px] h-[746px] border-2 border-white rounded-[10px] bg-[#EBDDFB4D]"
          >
            <div
              class="w-[1111px] flex justify-between m-auto border-b-2 pl-[28px]"
            >
              <div>
                <h2
                  class="text-[20xp] text-[#25272A] font-semibold font-Montserrat mt-[20px]"
                >
                  Опубликовано вчера
                </h2>
                <p class="text-[18px] font-medium font-Montserrat mt-[17px]">
                  Консультант по продажам
                </p>
                <p
                  class="text-[18px] text-[#25272A] font-medium font-Montserrat mt-[5px] pb-[15px]"
                >
                  TotaalBED
                </p>
              </div>
              <div class="mt-[70px]">
                <button
                  class="w-[149px] h-[41px] border bg-[#0046B8] rounded-[5px] text-[18px] text-[#fff] font-medium font-Montserrat"
                >
                  Подать заявку
                </button>
              </div>
            </div>
            <div class="w-[1111px] flex justify-between m-auto bg-[#EBDDFB4D]">
              <div class="w-[560px] flex border-r-2 border-[#EBDEFC]">
                <div class="mt-[42px] h-[525px] flex flex-col justify-between">
                  <div
                    class="w-[66px] h-[66px] flex justify-center items-center rounded-full bg-white"
                  >
                    <img
                      src="../public/imgs/vakansii-flag.png"
                      alt="img"
                      class="w-[37px] h-[37px]"
                    />
                  </div>
                  <div
                    class="w-[66px] h-[66px] flex justify-center items-center rounded-full bg-white"
                  >
                    <img
                      src="../public/imgs/vakansii-flag.png"
                      alt="img"
                      class="w-[37px] h-[37px]"
                    />
                  </div>
                  <div
                    class="w-[66px] h-[66px] flex justify-center items-center rounded-full bg-white"
                  >
                    <img
                      src="../public/imgs/vakansii-flag.png"
                      alt="img"
                      class="w-[37px] h-[37px]"
                    />
                  </div>
                  <div
                    class="w-[66px] h-[66px] flex justify-center items-center rounded-full bg-white"
                  >
                    <img
                      src="../public/imgs/vakansii-flag.png"
                      alt="img"
                      class="w-[37px] h-[37px]"
                    />
                  </div>
                  <div
                    class="w-[66px] h-[66px] flex justify-center items-center rounded-full bg-white"
                  >
                    <img
                      src="../public/imgs/vakansii-flag.png"
                      alt="img"
                      class="w-[37px] h-[37px]"
                    />
                  </div>
                  <div
                    class="w-[66px] h-[66px] flex justify-center items-center rounded-full bg-white"
                  >
                    <img
                      src="../public/imgs/vakansii-flag.png"
                      alt="img"
                      class="w-[37px] h-[37px]"
                    />
                  </div>
                </div>
                <div
                  class="h-[525px] flex flex-col justify-between mt-[42px] ml-[36px]"
                >
                  <p
                    class="mt-[22px] text-[18x] text-[#25272A] font-normal font-Montserrat"
                  >
                    Страна <b>Германия</b>
                  </p>
                  <p
                    class="text-[18x] text-[#25272A] font-normal font-Montserrat"
                  >
                    Город <b>Неймеген</b>
                  </p>
                  <p
                    class="text-[18x] text-[#25272A] font-normal font-Montserrat"
                  >
                    Зарплата <b>800$</b>
                  </p>
                  <p
                    class="text-[18x] text-[#25272A] font-normal font-Montserrat"
                  >
                    Часы работы <b>20</b> часов в неделю
                  </p>
                  <p
                    class="text-[18x] text-[#25272A] font-normal font-Montserrat"
                  >
                    Постоянная занятость
                  </p>
                  <p
                    class="mb-[22px] text-[18x] text-[#25272A] font-normal font-Montserrat"
                  >
                    Образование Высшее
                  </p>
                </div>
              </div>
              <div class="w-[525px] overflow-y-auto">
                <h1
                  class="text-[18px] text-[#25272A] font-semibold font-Montserrat mt-[42px]"
                >
                  Описание работы
                </h1>
                <p
                  class="h-[490px] text-[15px] text-[#25272A0] font-normal font-Montserrat mt-[20px]"
                >
                  Консультант по продажам Неймеген <br />
                  Неполный рабочий день 20 часов в неделю <br />
                  Как продавец-консультант, вы следите за тем, чтобы покупатель
                  чувствовал себя желанным гостем в магазине. Вы знаете, как
                  преобразовать пожелания покупателя в подходящие рекомендации
                  по сну, и готовы предпринять этот дополнительный шаг. <br />
                  Что вы будете делать в качестве консультанта по продажам
                  TotaalBED? <br />
                  Будучи увлеченным продавцом-консультантом, вы знаете, как
                  установить контакт с каждым покупателем, создать ощущение, что
                  ему рады, а также получить преимущество. Благодаря вашему
                  опыту и сервису вы знаете, как превзойти пожелания клиента, и
                  благодаря вашему коммерческому стремлению вы рассматриваете
                  достижение целевых показателей продаж как приятную задачу.
                  Консультант по продажам Неймеген <br />
                  Неполный рабочий день 20 часов в неделю <br />
                  Как продавец-консультант, вы следите за тем, чтобы покупатель
                  чувствовал себя желанным гостем в магазине. Вы знаете, как
                  преобразовать пожелания покупателя в подходящие рекомендации
                  по сну, и готовы предпринять этот дополнительный шаг. <br />
                  Что вы будете делать в качестве консультанта по продажам
                  TotaalBED? <br />
                  Будучи увлеченным продавцом-консультантом, вы знаете, как
                  установить контакт с каждым покупателем, создать ощущение, что
                  ему рады, а также получить преимущество. Благодаря вашему
                  опыту и сервису вы знаете, как превзойти пожелания клиента, и
                  благодаря вашему коммерческому стремлению вы рассматриваете
                  достижение целевых показателей продаж как приятную задачу.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- search after vakasii section -->
      <section
        class="w-[full] h-[281px] flex flex-col justify-center items-center bg-[url('../public/imgs/vakansii-bgimg.png')] bg-cover bg-center mb-[30px]"
      >
        <h2 class="text-[40px] text-white font-bold font-Montserrat mt-[50px]">
          Найдите работу по стране
        </h2>
        <div class="w-[777px] flex justify-between mt-[29px]">
          <div>
            <img
              src=""
              alt="img"
              class="absolute w-[24px] h-[24px] top-[13px] left-[14px]"
            />
            <input
              type="text"
              placeholder="Например, строитель, няня, водитель…"
              class="w-[402px] h-[50px] rounded-[5px] pl-[62px] pr-[10px] bg-[#fff] border text-[15px] text-[#25272A80] font-normal font-Montserrat"
            />
          </div>
          <select
            name=""
            id=""
            class="w-[167px] rounded-[5px] text-[15px] text-[#25272A80] font-normal font-Montserrat border pl-[11px]"
          >
            <option value="Россия">Россия</option>
            <option value="Казахстан">Казахстан</option>
            <option value="Япония">Япония</option>
          </select>
          <button
            class="w-[182px] rounded-[5px] bg-[#FB7E42] border-none text-[20px] text-white font-bold font-Montserrat"
          >
            Найти работу
          </button>
        </div>
      </section>
      <!-- vakansii after search section -->
      <section class="w-[1620px] m-auto mb-[92px]">
        <div class="flex justify-between">
          <a href="#" class="relative w-[800px] h-[418px]">
            <img
              src="../public/imgs/vakansii--koreaimg.png"
              alt="img"
              class="w-full h-full"
            />
            <div class="absolute top-[33px] left-[48px] text-white">
              <h2 class="text-[35px] font-normal font-Montserrat">Корея</h2>
              <p class="text-[35px] font-normal font-Montserrat">20 вакансий</p>
            </div>
          </a>
          <a href="#" class="relative w-[362px] h-[418px]">
            <img
              src="../public/imgs/vakansii--turkieimg.png"
              alt="img"
              class="w-full h-full"
            />
            <div class="absolute top-[310px] left-[26px] text-white">
              <h2 class="text-[35px] font-normal font-Montserrat">Турция</h2>
              <p class="text-[35px] font-normal font-Montserrat">14 вакансий</p>
            </div>
          </a>
          <div class="flex flex-col">
            <a href="#" class="relative w-[418px] h-[260px]">
              <img
                src="../public/imgs/vakansii--ruminiaimg.png"
                alt="img"
                class="w-full h-full"
              />
              <div class="absolute top-[33px] left-[26px] text-white">
                <h2 class="text-[35px] font-normal font-Montserrat">Румыния</h2>
                <p class="text-[35px] font-normal font-Montserrat">
                  9 вакансий
                </p>
              </div>
            </a>
            <a href="#" class="relative w-[418px] h-[138px] mt-[20px]">
              <img
                src="../public/imgs/vakansii--germanyimg.png"
                alt="img"
                class="w-full h-full"
              />
              <div class="absolute top-[35px] left-[26px] text-white">
                <h2 class="text-[35px] font-normal font-Montserrat">
                  Германия
                </h2>
                <p class="text-[35px] font-normal font-Montserrat">
                  15 вакансий
                </p>
              </div>
            </a>
          </div>
        </div>
        <div class="flex justify-between mt-[20px]">
          <a href="#" class="relative w-[390px] h-[239px]">
            <img
              src="../public/imgs/vakansii--kazahstanimg.png"
              alt="img"
              class="w-full h-full"
            />
            <div class="absolute top-[20px] left-[48px] text-white">
              <h2 class="text-[35px] font-normal font-Montserrat">Казахстан</h2>
              <p class="text-[35px] font-normal font-Montserrat">40 вакансий</p>
            </div>
          </a>
          <a href="#" class="relative w-[390px] h-[239px]">
            <img
              src="../public/imgs/vakansii--polshaimg.png"
              alt="img"
              class="w-full h-full"
            />
            <div class="absolute top-[20px] left-[26px] text-white">
              <h2 class="text-[35px] font-normal font-Montserrat">Польша</h2>
              <p class="text-[35px] font-normal font-Montserrat">21 вакансий</p>
            </div>
          </a>
          <a href="#" class="relative w-[800px] h-[239px]">
            <img
              src="../public/imgs/vakansii--russianimg.png"
              alt="img"
              class="w-full h-full"
            />
            <div class="absolute top-[20px] left-[26px] text-white">
              <h2 class="text-[35px] font-normal font-Montserrat">Россия</h2>
              <p class="text-[35px] font-normal font-Montserrat">43 вакансий</p>
            </div>
          </a>
        </div>
      </section>
      <!-- uchebniye kursi section -->
      <section class="w-full h-[883px] m-auto bg-[#F4C3A01A]">
        <div class="w-[1620px] m-auto">
          <div class="mt-[66px]">
            <h2
              class="text-[28px] text-[#25272A] font-semibold font-Montserrat"
            >
              Учебные курсы
            </h2>
          </div>
          <div class="mt-[34px] w-[1620px] flex justify-between">
            <div class="w-[877px] flex justify-between items-end">
              <button
                class="w-[109px] h-[41px] flex items-center text-[18px] text-[#25272A] font-normal font-Montserrat border-b-2"
              >
                Все
              </button>
              <button
                class="w-[227px] h-[41px] flex items-center text-[18px] text-[#25272A] font-normal font-Montserrat border-b-2"
              >
                По направлениям
              </button>
              <button
                class="w-[174px] h-[41px] flex items-center text-[18px] text-[#25272A] font-normal font-Montserrat border-b-2"
              >
                По регионам
              </button>
              <button
                class="w-[162px] h-[41px] flex items-center text-[18px] text-[#25272A] font-normal font-Montserrat border-b-2"
              >
                По городам
              </button>
              <button
                class="w-[169px] h-[41px] text-[18px] text-[#25272A] font-normal font-Montserrat border-b-2"
              >
                По организациям
              </button>
            </div>
            <div
              class="w-[478px] h-[50px] rounded-[5px] bg-white flex justify-between items-center gap-[13px] p-4"
            >
              <label class="flex items-center gap-[10px]">
                <input
                  type="checkbox"
                  class="w-[24px] h-[24px] text-[18px] text-[#25272ACC] border-[1px] border-[#8A93A6D9] rounded-[4px]"
                />
                <span
                  class="text-[18px] text-[#25272ACC] font-normal font-Montserrat"
                  >Бесплатные курсы</span
                >
              </label>
              <label class="flex items-center gap-[10px]">
                <input
                  type="checkbox"
                  class="w-[24px] h-[24px] text-[18px] text-[#25272ACC] border-[#8A93A6D9] rounded-[4px]"
                />
                <span
                  class="text-[18px] text-[#25272ACC] font-normal font-Montserrat"
                  >Платные курсы</span
                >
              </label>
            </div>
          </div>
          <div class="w-full flex justify-center mt-[70px]">
            <div class="w-[830px] flex justify-between">
              <select
                name=""
                id=""
                class="w-[250px] h-[50px] rounded-[10px] bg-[#F4C3A01A] pl-[20px] border-[1px] border-[#FB7E424D] text-[20px]text-[#25272A] font-normal font-Montserrat"
              >
                <option value="lorem">Направление</option>
              </select>
              <select
                name=""
                id=""
                class="w-[250px] h-[50px] rounded-[10px] bg-[#F4C3A01A] pl-[20px] border-[1px] border-[#FB7E424D] text-[20px]text-[#25272A] font-normal font-Montserrat"
              >
                <option value="lorem">Область</option>
              </select>
              <select
                name=""
                id=""
                class="w-[250px] h-[50px] rounded-[10px] bg-[#F4C3A01A] pl-[20px] border-[1px] border-[#FB7E424D] text-[20px]text-[#25272A] font-normal font-Montserrat"
              >
                <option value="lorem">Город/район</option>
              </select>
            </div>
          </div>
        </div>
        <div class="w-full flex justify-end mt-[107px]">
          <div
            class="w-[1765px] h-[252px] flex items-center bg-white rounded-l-[250px] border-2 border-red-500"
          >
            <div class="ml-[15px] flex mt-[-65px]">
              <img
                src="../public/imgs/kursi__woman-img.svg"
                alt="img"
                class="w-[352px] h-[371px] object-contain"
              />
            </div>

            <Swiper
              class="flex w-[1120px] h-[209px] border"
              :slidesPerView="3"
              ref="mySwiper"
              @swiper="onSwiper"
              loop
            >
              <SwiperSlide
                class="w-[270px] h-[209px] ml-[32px] flex"
                v-for="(item, index) in items"
                :key="index"
              >
                <div class="w-[53px] h-[53px] mt-[6px] ml-[5px]">
                  <img :src="item.image" alt="img" class="w-full h-full" />
                </div>

                <div class="ml-[25px] mt-[40px]">
                  <p
                    class="text-[20px] text-[#25272A] font-normal font-Montserrat leading-[26px]"
                  >
                    {{ item.title }}
                  </p>
                  <h2
                    class="text-[20px] text-[#25272A] font-medium font-Montserrat leading-[26px]"
                  >
                    ООО EDUCATION
                  </h2>
                  <p
                    class="text-[18px] text-[#25272A] font-normal font-Montserrat leading-[26px]"
                  >
                    Бухарская область
                  </p>
                  <p
                    class="text-[20px] text-[#25272AB2] font-normal font-Montserrat leading-[26px]"
                  >
                    г. Бухара
                  </p>

                  <button
                    class="h-[50px] flex justify-between items-center gap-[18px] mt-[13px]"
                  >
                    <p
                      class="text-[14px] text-[#FB7E42] font-bold font-Montserrat"
                    >
                      Подать заявку
                    </p>
                    <span
                      class="w-[50px] h-[50px] rounded-full border flex items-center justify-center"
                    >
                      <img
                        src="../public/imgs/Arrow-right.png"
                        alt="arrow"
                        class="w-[24px] h-[24px]"
                      />
                    </span>
                  </button>
                </div>
              </SwiperSlide>

              <!-- <SwiperSlide
                class="w-[343px] h-[209px] ml-[108px] border-l-2 border-l-[#0046B866] border-l-dashed flex"
              >
                <div class="w-[53px] h-[53px] mt-[6px] ml-[45px]">
                  <img
                    src="../public/imgs/kursi__shveya-img.png"
                    alt="img"
                    class="w-full h-full"
                  />
                </div>

                <div class="ml-[15px] mt-[40px]">
                  <p
                    class="text-[20px] text-[#25272A] font-normal font-Montserrat leading-[26px]"
                  >
                    Швея
                  </p>
                  <h2
                    class="text-[20px] text-[#25272A] font-medium font-Montserrat leading-[26px]"
                  >
                    ООО СМАРТ
                  </h2>
                  <p
                    class="text-[18px] text-[#25272A] font-normal font-Montserrat leading-[26px]"
                  >
                    Самаркандская область
                  </p>
                  <p
                    class="text-[20px] text-[#25272AB2] font-normal font-Montserrat leading-[26px]"
                  >
                    г. Самарканд
                  </p>

                  <button
                    class="h-[50px] flex justify-between items-center gap-[18px] mt-[13px]"
                  >
                    <p
                      class="text-[14px] text-[#FB7E42] font-bold font-Montserrat"
                    >
                      Подать заявку
                    </p>
                    <span
                      class="w-[50px] h-[50px] rounded-full border flex items-center justify-center"
                    >
                      <img
                        src="../public/imgs/Arrow-right.png"
                        alt="arrow"
                        class="w-[24px] h-[24px]"
                      />
                    </span>
                  </button>
                </div>
              </SwiperSlide>

              <SwiperSlide
                class="w-[343px] h-[209px] ml-[65px] border-l-2 border-l-[#0046B866] border-l-dashed flex"
              >
                <div class="w-[53px] h-[53px] mt-[6px] ml-[45px]">
                  <img
                    src="../public/imgs/kursi__parikmaher-img.png"
                    alt="img"
                    class="w-full h-full"
                  />
                </div>

                <div class="ml-[15px] mt-[40px]">
                  <p
                    class="text-[20px] text-[#25272A] font-normal font-Montserrat leading-[26px]"
                  >
                    Парикмахер
                  </p>
                  <h2
                    class="text-[20px] text-[#25272A] font-medium font-Montserrat leading-[26px]"
                  >
                    ООО СМАРТ
                  </h2>
                  <p
                    class="text-[18px] text-[#25272A] font-normal font-Montserrat leading-[26px]"
                  >
                    Самаркандская область
                  </p>
                  <p
                    class="text-[20px] text-[#25272AB2] font-normal font-Montserrat leading-[26px]"
                  >
                    г. Самарканд
                  </p>

                  <button
                    class="h-[50px] flex justify-between items-center gap-[18px] mt-[13px]"
                  >
                    <p
                      class="text-[14px] text-[#FB7E42] font-bold font-Montserrat"
                    >
                      Подать заявку
                    </p>
                    <span
                      class="w-[50px] h-[50px] rounded-full border flex items-center justify-center"
                    >
                      <img
                        src="../public/imgs/Arrow-right.png"
                        alt="arrow"
                        class="w-[24px] h-[24px]"
                      />
                    </span>
                  </button>
                </div>
              </SwiperSlide>

              <SwiperSlide
                class="w-[343px] h-[209px] ml-[65px] border-l-2 border-l-[#0046B866] border-l-dashed flex"
              >
                <div class="w-[53px] h-[53px] mt-[6px] ml-[45px]">
                  <img
                    src="../public/imgs/kursi__parikmaher-img.png"
                    alt="img"
                    class="w-full h-full"
                  />
                </div>

                <div class="ml-[15px] mt-[40px]">
                  <p
                    class="text-[20px] text-[#25272A] font-normal font-Montserrat leading-[26px]"
                  >
                    Парикмахер
                  </p>
                  <h2
                    class="text-[20px] text-[#25272A] font-medium font-Montserrat leading-[26px]"
                  >
                    ООО СМАРТ
                  </h2>
                  <p
                    class="text-[18px] text-[#25272A] font-normal font-Montserrat leading-[26px]"
                  >
                    Самаркандская область
                  </p>
                  <p
                    class="text-[20px] text-[#25272AB2] font-normal font-Montserrat leading-[26px]"
                  >
                    г. Самарканд
                  </p>

                  <button
                    class="h-[50px] flex justify-between items-center gap-[18px] mt-[13px]"
                  >
                    <p
                      class="text-[14px] text-[#FB7E42] font-bold font-Montserrat"
                    >
                      Подать заявку
                    </p>
                    <span
                      class="w-[50px] h-[50px] rounded-full border flex items-center justify-center"
                    >
                      <img
                        src="../public/imgs/Arrow-right.png"
                        alt="arrow"
                        class="w-[24px] h-[24px]"
                      />
                    </span>
                  </button>
                </div>
              </SwiperSlide>

              <SwiperSlide
                class="w-[343px] h-[209px] ml-[65px] border-l-2 border-l-[#0046B866] border-l-dashed flex"
              >
                <div class="w-[53px] h-[53px] mt-[6px] ml-[45px]">
                  <img
                    src="../public/imgs/kursi__parikmaher-img.png"
                    alt="img"
                    class="w-full h-full"
                  />
                </div>

                <div class="ml-[15px] mt-[40px]">
                  <p
                    class="text-[20px] text-[#25272A] font-normal font-Montserrat leading-[26px]"
                  >
                    Парикмахер
                  </p>
                  <h2
                    class="text-[20px] text-[#25272A] font-medium font-Montserrat leading-[26px]"
                  >
                    ООО СМАРТ
                  </h2>
                  <p
                    class="text-[18px] text-[#25272A] font-normal font-Montserrat leading-[26px]"
                  >
                    Самаркандская область
                  </p>
                  <p
                    class="text-[20px] text-[#25272AB2] font-normal font-Montserrat leading-[26px]"
                  >
                    г. Самарканд
                  </p>

                  <button
                    class="h-[50px] flex justify-between items-center gap-[18px] mt-[13px]"
                  >
                    <p
                      class="text-[14px] text-[#FB7E42] font-bold font-Montserrat"
                    >
                      Подать заявку
                    </p>
                    <span
                      class="w-[50px] h-[50px] rounded-full border flex items-center justify-center"
                    >
                      <img
                        src="../public/imgs/Arrow-right.png"
                        alt="arrow"
                        class="w-[24px] h-[24px]"
                      />
                    </span>
                  </button>
                </div>
              </SwiperSlide> -->
            </Swiper>

            <div
              class="w-[50px] h-[50px] flex items-center justify-center border border-[#25272A4D] rounded-full ml-[147px]"
            >
              <button @click="goPrev">
                <img
                  src="../public/imgs/Arrow-right.png"
                  alt="img"
                  style="transform: rotate(180deg)"
                />
              </button>
              <button @click="goNext">
                <img src="../public/imgs/Arrow-right.png" alt="img" />
              </button>
            </div>
          </div>
        </div>
        <div class="w-full text-center mt-[42px]">
          <a
            href=""
            class="text-[15px] text-[#0046B8] font-medium font-Montserrat"
            >Посмотреть все</a
          >
        </div>
      </section>
      <!-- FAQ -->
      <section>
        <div
          class="w-full h-[350px] bg-[url('../public/imgs/faqsection__bg-img.png')] bg-cover bg-center"
        >
          <h2
            class="text-[80px] text-[#FFFFFF] text-center font-extrabold font-Montserrat pt-[90px]"
          >
            FAQ
          </h2>
          <p
            class="text-[40px] text-[#FFFFFF] text-center font-semibold font-Montserrat"
          >
            Часто Задаваемые Вопросы
          </p>
        </div>
        <div class="w-full h-[927px] bg-[#F4C3A01A]">
          <div class="w-[1620px] flex justify-between border gap-[40px] m-auto">
            <!-- Левый блок -->
            <div class="w-[789px]">
              <div
                class="dropdown mt-[60px]"
                v-for="(item, index) in leftItems"
                :key="index"
              >
                <div
                  class="dropdown-header w-[789px] h-[120px] border rounded-[10px] text-[22px] text-[#25272A] font-medium font-Montserrat pl-[61px] flex items-center cursor-pointer"
                  @click="toggleDropdown(index, 'left')"
                >
                  {{ item.question }}
                </div>
                <div
                  v-show="leftDropdowns[index]"
                  class="dropdown-content bg-white border rounded-[10px] mt-[10px]"
                >
                  <div
                    class="p-4 hover:bg-gray-100 cursor-pointer"
                    v-for="(option, idx) in item.options"
                    :key="idx"
                  >
                    {{ option }}
                  </div>
                </div>
              </div>
            </div>

            <!-- Правый блок -->
            <div class="w-[789px]">
              <div
                class="dropdown mt-[60px]"
                v-for="(item, index) in rightItems"
                :key="index"
              >
                <div
                  class="dropdown-header w-[789px] h-[120px] border rounded-[10px] text-[22px] text-[#25272A] font-medium font-Montserrat pl-[61px] flex items-center cursor-pointer"
                  @click="toggleDropdown(index, 'right')"
                >
                  {{ item.question }}
                </div>
                <div
                  v-show="rightDropdowns[index]"
                  class="dropdown-content bg-white border rounded-[10px] mt-[10px]"
                >
                  <div
                    class="p-4 hover:bg-gray-100 cursor-pointer"
                    v-for="(option, idx) in item.options"
                    :key="idx"
                  >
                    {{ option }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- news section -->
      <section
        class="bg-gradient-to-r from-[rgba(125,36,239,0.2)] to-[rgba(251,126,66,0.2)] bg-[length:100%_100%] bg-no-repeat"
      >
        <div
          class="w-[1620px] h-[1020px] flex justify-between gap-[30px] m-auto"
        >
          <div>
            <h2
              class="text-[28px] text-[#25272A] font-bold font-Montserrat mt-[74px]"
            >
              Новости
            </h2>
            <img
              src="../public/imgs/newssection__stroyka.png"
              alt="img"
              class="w-[1071px] h-[628px] mt-[70px]"
            />
            <h3
              class="text-[22px] text-[#25272A] font-semibold font-Montserrat mt-[24px]"
            >
              Xalqaro mehnat migratsiyasi masalalari ko‘rib chiqilmoqda
            </h3>
            <span class="flex items-center mt-[15px]">
              <p
                class="text-[18px] text-[#25272A80] font-medium font-Montserrat mr-[30px]"
              >
                2023-10-20 12:26:41
              </p>
              <img
                src="../public/imgs/black__eye.png"
                alt="img"
                class="w-[17.5px] h-[12px] mr-[12px]"
              />
              <p class="text-[15px] text-[#25272A] font-medium font-Montserrat">
                142
              </p>
            </span>
          </div>
          <div>
            <div class="h-[196px] flex items-center gap-[16px] mt-[185px]">
              <img
                src="../public/imgs/newssection__dokum.png"
                alt="img"
                class="w-[308px] h-[196px]"
              />
              <div class="w-[195px] h-[168px]">
                <h2
                  class="text-[15px] text-[#25272A] font-medium font-Montserrat"
                >
                  Xalqaro mehnat <br />
                  migratsiyasi masalalari ko‘rib chiqilmoqda
                </h2>
                <p
                  class="text-[15px] text-[#25272A80] font-medium font-Montserrat mt-[12px]"
                >
                  2023-10-20 12:26:41
                </p>
                <span class="flex items-center mt-[12px]">
                  <img
                    src="../public/imgs/black__eye.png"
                    alt="img"
                    class="w-[17.5px] h-[12px] mr-[12px]"
                  />
                  <p
                    class="text-[15px] text-[#25272A] font-medium font-Montserrat"
                  >
                    256
                  </p>
                </span>
                <button
                  class="w-[115px] flex justify-between items-center mt-[12px] text-[15px] text-[#25272A] font-semibold font-Montserrat"
                >
                  Подобнее
                  <img
                    src="../public/imgs/arrow-right_orange.png"
                    alt="img"
                    class="w-[8px] h-[14.5px]"
                  />
                </button>
              </div>
            </div>

            <div class="h-[196px] flex items-center gap-[16px] mt-[20px]">
              <img
                src="../public/imgs/newssection__shveynya.png"
                alt="img"
                class="w-[308px] h-[196px]"
              />
              <div class="w-[195px] h-[168px]">
                <h2
                  class="text-[15px] text-[#25272A] font-medium font-Montserrat"
                >
                  Xalqaro mehnat <br />
                  migratsiyasi masalalari ko‘rib chiqilmoqda
                </h2>
                <p
                  class="text-[15px] text-[#25272A80] font-medium font-Montserrat mt-[12px]"
                >
                  2023-10-20 12:26:41
                </p>
                <span class="flex items-center mt-[12px]">
                  <img
                    src="../public/imgs/black__eye.png"
                    alt="img"
                    class="w-[17.5px] h-[12px] mr-[12px]"
                  />
                  <p
                    class="text-[15px] text-[#25272A] font-medium font-Montserrat"
                  >
                    256
                  </p>
                </span>
                <button
                  class="w-[115px] flex justify-between items-center mt-[12px] text-[15px] text-[#25272A] font-semibold font-Montserrat"
                >
                  Подобнее
                  <img
                    src="../public/imgs/arrow-right_orange.png"
                    alt="img"
                    class="w-[8px] h-[14.5px]"
                  />
                </button>
              </div>
            </div>

            <div class="h-[196px] flex items-center gap-[16px] mt-[20px]">
              <img
                src="../public/imgs/newssection__gaz.png"
                alt="img"
                class="w-[308px] h-[196px]"
              />
              <div class="w-[195px] h-[168px]">
                <h2
                  class="text-[15px] text-[#25272A] font-medium font-Montserrat"
                >
                  Xalqaro mehnat <br />
                  migratsiyasi masalalari ko‘rib chiqilmoqda
                </h2>
                <p
                  class="text-[15px] text-[#25272A80] font-medium font-Montserrat mt-[12px]"
                >
                  2023-10-20 12:26:41
                </p>
                <span class="flex items-center mt-[12px]">
                  <img
                    src="../public/imgs/black__eye.png"
                    alt="img"
                    class="w-[17.5px] h-[12px] mr-[12px]"
                  />
                  <p
                    class="text-[15px] text-[#25272A] font-medium font-Montserrat"
                  >
                    256
                  </p>
                </span>
                <button
                  class="w-[115px] flex justify-between items-center mt-[12px] text-[15px] text-[#25272A] font-semibold font-Montserrat"
                >
                  Подобнее
                  <img
                    src="../public/imgs/arrow-right_orange.png"
                    alt="img"
                    class="w-[8px] h-[14.5px]"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- mobile app section -->
      <section class="w-full h-[1085px]">
        <div class="w-[1620px] flex m-auto">
          <div>
            <div class="mt-[382px] w-[382px]">
              <p class="text-[28px] text-[#25272A] font-bold font-Montserrat">
                Загрузите
              </p>
              <h2 class="text-[60px] text-[#25272A] font-bold font-Montserrat">
                Мобильное
              </h2>
              <p class="text-[30px] text-[#25272A] font-normal font-Montserrat">
                приложение
              </p>
            </div>
            <div class="mt-[289px] flex items-center gap-[25px]">
              <div>
                <img
                  src="../public/imgs/onfooter__qr-code.png"
                  alt="img"
                  class="w-[74px] h-[74px]"
                />
              </div>
              <div class="h-[69px]">
                <h3
                  class="text-[18px] text-[#25272A] font-semibold font-Montserrat"
                >
                  Oтсканируйте
                </h3>
                <p
                  class="text-[18px] text-[#25272A] font-normal font-Montserrat"
                >
                  QR-код, чтобы <br />
                  получить приложение
                </p>
              </div>
            </div>
            <div class="mt-[47px]">
              <img src="../public/imgs/onfooter__install.png" alt="img" />
            </div>
          </div>
          <div>
            <img
              src="../public/imgs/onfooter__img.png"
              alt="img"
              class="w-[1200px] h-[1085px]"
            />
          </div>
        </div>
      </section>
    </main>
    <!-- footer  -->
    <footer
      class="w-[1920px] h-[530px] mb-[470px] border bg-gradient-to-r from-[#FCE8DC] via-[#F5F5F5] to-[#FFFFFF] bg-[length:100%_100%] bg-no-repeat"
    >
      <div class="w-[1290px] h-[268px] m-auto mt-[83px]">
        <div>
          <h2 class="text-[32px] text-[#25272A] font-bold font-Montserrat">
            Полезные ссылки
          </h2>
        </div>
        <div
          class="flex items-center justify-between gap-[20px] mt-[30px] w-full"
        >
          <div
            class="w-[300px] h-[198px] bg-white rounded-[20px] shadow-md relative"
          >
            <button
              class="w-[40px] h-[40px] flex items-center justify-center rounded-full border bg-white relative right-[24px] top-[79px]"
            >
              <img
                src="../public/imgs/arrow-right_orange.png"
                alt="img"
                class="w-[10px] h-[16px]"
              />
            </button>
            <img
              src="../public/imgs/footer__img1.png"
              alt="img"
              class="w-[64px] h-[64px] m-auto relative top-[-20px]"
            />
            <p
              class="text-[18px] text-[#718193] font-normal font-Montserrat text-center top-[90px] left-[20px] absolute"
            >
              O‘zbekiston Respublikasi Oliy <br />
              Majlisining Senati
            </p>
            <a
              href="#"
              class="text-[16px] text-[#2988F5] font-normal font-Montserrat text-center block absolute top-[158px] left-[120px]"
              >senat.uz</a
            >
          </div>
          <div class="w-[300px] h-[198px] bg-white rounded-[20px] shadow-md">
            <img
              src="../public/imgs/footer__img1.png"
              alt="img"
              class="w-[64px] h-[64px] m-auto mt-0 relative top-[20px]"
            />
            <p
              class="text-[18px] text-[#718193] font-normal font-Montserrat text-center mt-[26px]"
            >
              Axborot va ommaviy <br />
              kommunikatsiyalar agentligi
            </p>
            <a
              href="#"
              class="text-[16px] text-[#2988F5] font-normal font-Montserrat text-center mt-[14px] block"
              >senat.uz</a
            >
          </div>
          <div class="w-[300px] h-[198px] bg-white rounded-[20px] shadow-md">
            <img
              src="../public/imgs/footer__img1.png"
              alt="img"
              class="w-[64px] h-[64px] m-auto mt-0 relative top-[20px]"
            />
            <p
              class="text-[18px] text-[#718193] font-normal font-Montserrat text-center mt-[26px]"
            >
              Davlat Test Markazi
            </p>
            <a
              href="#"
              class="text-[16px] text-[#2988F5] font-normal font-Montserrat text-center mt-[40px] block"
              >senat.uz</a
            >
          </div>
          <div
            class="w-[300px] h-[198px] bg-white rounded-[20px] shadow-md relative"
          >
            <button
              class="w-[40px] h-[40px] flex items-center justify-center rounded-full border bg-white relative left-[282px] top-[79px]"
            >
              <img
                src="../public/imgs/arrow-right_orange.png"
                alt="img"
                class="w-[10px] h-[16px]"
              />
            </button>
            <img
              src="../public/imgs/footer__img1.png"
              alt="img"
              class="w-[64px] h-[64px] m-auto relative top-[-20px]"
            />
            <p
              class="text-[18px] text-[#718193] font-normal font-Montserrat text-center top-[90px] left-[45px] absolute"
            >
              Yagona interaktiv davlat <br />
              xizmatlari portali
            </p>
            <a
              href="#"
              class="text-[16px] text-[#2988F5] font-normal font-Montserrat text-center block absolute top-[158px] left-[120px]"
              >senat.uz</a
            >
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperInstance: null,
      items: [
        { title: "Слайд 1", image: "/imgs/kursi__bodoprovod.png" },
        { title: "Слайд 2", image: "/imgs/kursi__bodoprovod.png" },
        { title: "Слайд 3", image: "/imgs/kursi__bodoprovod.png" },
        { title: "Слайд 4", image: "/imgs/kursi__bodoprovod.png" },
        { title: "Слайд 5", image: "/imgs/kursi__bodoprovod.png" },
        { title: "Слайд 5", image: "/imgs/kursi__bodoprovod.png" },
        { title: "Слайд 5", image: "/imgs/kursi__bodoprovod.png" },
      ],
      leftItems: [
        {
          question:
            "Я хочу работать заграницей, куда мне подать заявку на это?",
          options: [
            "Какие требования к гражданам, желающим работать заграницей?",
          ],
        },
        {
          question:
            "Какие требования к гражданам, желающим работать заграницей?",
          options: [
            "Какие требования к гражданам, желающим работать заграницей?",
          ],
        },
      ],
      rightItems: [
        {
          question:
            "Какие виды услуг частные агенства занятости предоставляют гражданам?",
          options: [
            "Какие требования к гражданам, желающим работать заграницей?",
          ],
        },
      ],
      leftDropdowns: [false, false],
      rightDropdowns: [false],
      selectedButton: 1,
    };
  },
  methods: {
    toggleDropdown(index, side) {
      if (side === "left") {
        this.leftDropdowns[index] = !this.leftDropdowns[index];
      } else if (side === "right") {
        this.rightDropdowns[index] = !this.rightDropdowns[index];
      }
    },
    onSwiper(swiper) {
      this.swiperInstance = swiper;
    },
    goPrev() {
      if (this.swiperInstance) {
        this.swiperInstance.slidePrev();
      }
    },
    goNext() {
      if (this.swiperInstance) {
        this.swiperInstance.slideNext();
      }
    },
    setSelectedButton(index) {
      this.selectedButton = index;
    },
  },
};
</script>

<style></style>
