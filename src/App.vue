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
              Программный комплекс запущен в информационной системе «Единая
              национальная система труда»
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
      <section class="w-[1620px] m-auto mt-[90px] border border-black">
        <div class="w-[985px] h-[53px] flex justify-between pl-[47px] pr-[47px] m-auto ">
          <button class="text-[28px] text-[#0046B8] font-semibold font-Montserrat underline">Услуги</button>
          <button class="text-[24px] text-[#25272AB2] font-normal font-Montserrat">Информационные подсказки</button>
          <button class="text-[24px] text-[#25272AB2] font-normal font-Montserrat">Реестры</button>
        </div>
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
      </section>
    </main>
    <footer></footer>
  </div>
</template>

<style></style>
