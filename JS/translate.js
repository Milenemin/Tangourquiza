let isDanish = true;

const danishContent = `
    <main id="mainContent">
      <button class="translate" onclick="toggleLanguage()">Translate</button>
      <!-- <div class="hero">
        <video autoplay muted loop playsinline preload="auto" onloadeddata="this.currentTime=2;">
          <source src="/tango.mp4" type="video/mp4" />
          Din browser understøtter ikke video-tagget.
        </video>
      </div> -->

      <div class="hero">
        <video id="heroVideo" autoplay muted playsinline preload="auto">
          <source src="/tango.mp4" type="video/mp4" />
          Din browser understøtter ikke video-tagget.
        </video>
      </div>

      <div class="h1-tango">
        <div class="tango-tekst">
          <h2 class="h1">Hvad er Tango</h2>
          <div class="p-tango">
            <p>Tango er en dans og musikstil, der startede i Argentina i slut 1800 tallet. <br /><br />Den er kendt for at være tæt, rolig og meget fokuseret på kontakt mellem to personer. <br /><br /></p>
            <p>Musikken har en tydelig rytme, som gør det let at følge hinanden. I tango handler det mest om at lytte til hinanden og bevæge sig sammen i stedet for at lave svære trin.</p>
          </div>
          <svg class="forsidesvg-1" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 164.6 155">
            <!-- Generator: Adobe Illustrator 30.0.0, SVG Export Plug-In . SVG Version: 2.1.1 Build 123)  -->
            <defs>
              <style>
                .st0 {
                  fill: none;
                }

                .st0,
                .st1 {
                  stroke: #001a18;
                  stroke-miterlimit: 10;
                }

                .st1 {
                  fill: #001a18;
                }
              </style>
            </defs>
            <g id="Layer_3">
              <circle class="st0" cx="73" cy="82" r="72.5" />
              <circle class="st0" cx="73" cy="82" r="72.5" />
              <circle class="st0" cx="73" cy="82" r="72.5" />
              <circle class="st0" cx="73" cy="82" r="72.5" />
            </g>
            <g id="Layer_4">
              <circle class="st0" cx="73" cy="82" r="26" />
              <circle class="st0" cx="73" cy="82" r="23" />
              <circle class="st1" cx="73" cy="82" r="2" />
            </g>
            <g id="Layer_5">
              <path
                class="st0"
                d="M147.3,11.7c-6.3-.2-12.4,4-14.5,9.9s.2,13,5.2,16.7c1.2.9,2.8,1.8,2.9,3.4,0,.4,0,.8,0,1.2-1,7.2-2,14.3-3.1,21.5-1,7.2-2.5,15.2-8.4,19.3-.7-.8-2.1-.4-2.9.4s-1.1,1.8-1.8,2.7-1.9,1.4-2.8.8c-.2-.1-.3-.3-.5-.3-.3,0-.5.2-.7.4-2.4,2.4-4.8,4.8-7.3,7.2-2.6,2.6-5.4,5.4-6.3,9-.3,1-.3,2.1,0,3.1s1.4,1.7,2.5,1.6c.5,0,.9-.3,1.4-.5,1.6-.4,3.1.8,3.9,2.2s1.3,3,2.4,4.1,3.2,1.6,4.2.3"
              />
              <path class="st0" d="M119.4,111.2c-1.8-1.1-3.2-2.8-4.1-4.8-.1-.3-.2-.6-.2-1,0-.9.9-1.4,1.7-1.8,2.7-1.5,5.3-3.1,7.7-5,.8-.6,1.5-1.2,1.9-2s.4-2-.3-2.6" />
              <path
                class="st0"
                d="M128.7,92c1.8-.9,3.3-2.2,4.5-3.8.3-.4.5-1,.1-1.2-.1,0-.3,0-.4-.2-.5-.2-.6-1-.3-1.4s.8-.7,1.3-1c4.2-2.2,6.9-6.6,8.2-11.2s1.4-9.4,1.6-14.2c.3-5.1.7-10.3,1.1-15.4,0-.7.2-1.5.7-2,.4-.3.9-.5,1.3-.5,2.6-.4,5.5.3,7.9-.8,1-.4,1.8-1.2,2.6-1.9,1-1,2-2,2.8-3.1,2.1-3.1,2.6-7.2,1.3-10.7"
              />
              <path class="st0" d="M160.3,20.8c-.3-2-1.3-3.9-2.8-5.3-.5-.4-1-1-.8-1.5,0-.2.2-.3.4-.5,1-.7,2.3-.4,3.5-.5.3,0,.7,0,.9-.3.2-.2.4-.5.5-.7,1-2.4,1.7-4.9,2.1-7.4" />
              <path class="st0" d="M147.1,11.6c.5,0,1,0,1.4-.1.3-.1.6-.3.7-.7,0-.2,0-.4,0-.7-.1-.4-.4-.7-.7-.9-.2-.1-.3-.2-.5-.3-.5-.5-.4-1.3-.2-2,.3-1,.7-1.9,1.1-2.8.3-.7.7-1.5,1.1-2.1s1.1-1.2,1.9-1.4c1-.3,2,0,3,.2,1.3.3,2.5.8,3.7,1.5" />
              <path class="st0" d="M39.5,94.7c.7,4.9,2.1,10,5.5,13.6,3,3.2,7.1,5.1,11.1,6.9" />
              <path class="st0" d="M34.2,102.4c1.4,6.3,5.4,11.8,10.3,15.9s10.9,6.9,16.9,9.2" />
              <path class="st0" d="M28.1,107.5c2.1,8.2,7.9,15,14.8,19.9s15,7.8,23.1,10" />
            </g>
          </svg>
        </div>

        <img class="Teachingclass2 Teachingclass-img" src="/img/Teachingclass2.webp" alt="" />
      </div>

      <div class="line"></div>

      <section class="h2-tango">
        <div class="tango-tekst2">
          <h2>Vores hold</h2>
          <p class="p-tango p-tango-desk">Vi tilbyder hold på forskellige niveauer så der er plads til alle. <br /><br />Der er undervisning forskellige dage og tidspunkter på ugen - se vores holdoversigt og se hvad der passer dig.</p>

          <div class="btn category-btn">
            <a href="holdplan.html"> Holdplan </a>
          </div>
        </div>
        <img class="Teachingclass3 Teachingclass-img" src="img/index3.webp" alt="" />
      </section>

      <div class="line"></div>
      <section class="h2-tango">
        <div class="tango-tekst3">
          <h2 class="h2-desk">Ny i tango?</h2>
 <img class="accordion" src="svg/Accordiongreen.svg" alt="accordion" />
          <p class="p-tango">Er du ny i tango? <br />Hos Tango Urquiza har vi mange års erfaring med at undervise begyndere i tango. <br /><br />Vi tilbyder begynderhold flere gange om året, så hold øje med vores holdplan.</p>

          <div class="btn holdplan">
            <a href="tangony.html"> Læs Mere</a>
          </div>
        </div>
        <img class="nytango" src="img/nyitango.webp" alt="" />
      </section>
      <div class="line"></div>
      <section class="h2-tango">
        <div class="tango-tekst4">
          <h2 class="h2-desk">Tango fællesskab</h2>
          <div class="h2-svg">
            <img class="forsidesvg-2" src="/svg/Violingreen.svg" alt="" />
          </div>

          <p class="p-tango">Hos Tango Urquiza går vi op i, at der er et godt fælleskab og en god stemning. <br />Tango er ikke bare dans, tango er et fællesskab, hvor du får lov til at udtrykke dig gennem dansen.</p>
          <br />
          <div class="btn holdplan">
            <a href="tangofaellesskab.html"> Fællesskab</a>
          </div>
        </div>
        <img class="Teachingclass3 Teachingclass1 Teachingclass-img" src="/img/Milonga.webp" alt="" />
      </section>
      <div class="dansende-grafik"></div>
    </main>
  `;

const englishContent = `
 
  
  <main id="mainContent">
      <button class="translate" onclick="toggleLanguage()">Translate</button>
      <!-- <div class="hero">
        <video autoplay muted loop playsinline preload="auto" onloadeddata="this.currentTime=2;">
          <source src="/tango.mp4" type="video/mp4" />
          Din browser understøtter ikke video-tagget.
        </video>
      </div> -->

      <div class="hero">
        <video id="heroVideo" autoplay muted playsinline preload="auto">
          <source src="/tango.mp4" type="video/mp4" />
          Din browser understøtter ikke video-tagget.
        </video>
      </div>

      <div class="h1-tango">
        <div class="tango-tekst">
          <h2 class="h1">What is Tango</h2>
          <div class="p-tango">
            <p>Tango is a dance and music style that originated in Argentina in the late 1800s.
      It is known for being close, calm, and strongly focused on connection between two people. <br /><br /></p>
            <p>The music has a clear rhythm that makes it easy to follow each other.
          Tango is about listening and moving together rather than difficult steps.</p>
          </div>
          <svg class="forsidesvg-1" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 164.6 155">
            <!-- Generator: Adobe Illustrator 30.0.0, SVG Export Plug-In . SVG Version: 2.1.1 Build 123)  -->
            <defs>
              <style>
                .st0 {
                  fill: none;
                }

                .st0,
                .st1 {
                  stroke: #001a18;
                  stroke-miterlimit: 10;
                }

                .st1 {
                  fill: #001a18;
                }
              </style>
            </defs>
            <g id="Layer_3">
              <circle class="st0" cx="73" cy="82" r="72.5" />
              <circle class="st0" cx="73" cy="82" r="72.5" />
              <circle class="st0" cx="73" cy="82" r="72.5" />
              <circle class="st0" cx="73" cy="82" r="72.5" />
            </g>
            <g id="Layer_4">
              <circle class="st0" cx="73" cy="82" r="26" />
              <circle class="st0" cx="73" cy="82" r="23" />
              <circle class="st1" cx="73" cy="82" r="2" />
            </g>
            <g id="Layer_5">
              <path
                class="st0"
                d="M147.3,11.7c-6.3-.2-12.4,4-14.5,9.9s.2,13,5.2,16.7c1.2.9,2.8,1.8,2.9,3.4,0,.4,0,.8,0,1.2-1,7.2-2,14.3-3.1,21.5-1,7.2-2.5,15.2-8.4,19.3-.7-.8-2.1-.4-2.9.4s-1.1,1.8-1.8,2.7-1.9,1.4-2.8.8c-.2-.1-.3-.3-.5-.3-.3,0-.5.2-.7.4-2.4,2.4-4.8,4.8-7.3,7.2-2.6,2.6-5.4,5.4-6.3,9-.3,1-.3,2.1,0,3.1s1.4,1.7,2.5,1.6c.5,0,.9-.3,1.4-.5,1.6-.4,3.1.8,3.9,2.2s1.3,3,2.4,4.1,3.2,1.6,4.2.3"
              />
              <path class="st0" d="M119.4,111.2c-1.8-1.1-3.2-2.8-4.1-4.8-.1-.3-.2-.6-.2-1,0-.9.9-1.4,1.7-1.8,2.7-1.5,5.3-3.1,7.7-5,.8-.6,1.5-1.2,1.9-2s.4-2-.3-2.6" />
              <path
                class="st0"
                d="M128.7,92c1.8-.9,3.3-2.2,4.5-3.8.3-.4.5-1,.1-1.2-.1,0-.3,0-.4-.2-.5-.2-.6-1-.3-1.4s.8-.7,1.3-1c4.2-2.2,6.9-6.6,8.2-11.2s1.4-9.4,1.6-14.2c.3-5.1.7-10.3,1.1-15.4,0-.7.2-1.5.7-2,.4-.3.9-.5,1.3-.5,2.6-.4,5.5.3,7.9-.8,1-.4,1.8-1.2,2.6-1.9,1-1,2-2,2.8-3.1,2.1-3.1,2.6-7.2,1.3-10.7"
              />
              <path class="st0" d="M160.3,20.8c-.3-2-1.3-3.9-2.8-5.3-.5-.4-1-1-.8-1.5,0-.2.2-.3.4-.5,1-.7,2.3-.4,3.5-.5.3,0,.7,0,.9-.3.2-.2.4-.5.5-.7,1-2.4,1.7-4.9,2.1-7.4" />
              <path class="st0" d="M147.1,11.6c.5,0,1,0,1.4-.1.3-.1.6-.3.7-.7,0-.2,0-.4,0-.7-.1-.4-.4-.7-.7-.9-.2-.1-.3-.2-.5-.3-.5-.5-.4-1.3-.2-2,.3-1,.7-1.9,1.1-2.8.3-.7.7-1.5,1.1-2.1s1.1-1.2,1.9-1.4c1-.3,2,0,3,.2,1.3.3,2.5.8,3.7,1.5" />
              <path class="st0" d="M39.5,94.7c.7,4.9,2.1,10,5.5,13.6,3,3.2,7.1,5.1,11.1,6.9" />
              <path class="st0" d="M34.2,102.4c1.4,6.3,5.4,11.8,10.3,15.9s10.9,6.9,16.9,9.2" />
              <path class="st0" d="M28.1,107.5c2.1,8.2,7.9,15,14.8,19.9s15,7.8,23.1,10" />
            </g>
          </svg>
        </div>

        <img class="Teachingclass2 Teachingclass-img" src="/img/Teachingclass2.webp" alt="" />
      </div>

      <div class="line"></div>

      <section class="h2-tango">
        <div class="tango-tekst2">
          <h2>Our Classes</h2>
          <p class="p-tango p-tango-desk">We offer lasses of different levels, so there is the possibility for everyone to join. <br /><br />There are classes sveral days of the week - Take a look at our weekly schedule to see which class suits you best. </p>

          <div class="btn category-btn">
            <a href="holdplan.html"> Schedule </a>
          </div>
        </div>
        <img class="Teachingclass3 Teachingclass-img" src="img/index3.webp" alt="" />
      </section>

      <div class="line"></div>
      <section class="h2-tango">
        <div class="tango-tekst3">
        
          <h2 class="h2-desk">New to Tango?</h2>
           <img class="accordion" src="svg/Accordiongreen.svg" alt="accordion" />
<p class="p-tango">Are you new to tango? <br />At Tango Urquiza, we have many years experience in teaching beginners tango. <br /><br />We offer beginner classes several times a year, so keep an eye on our schedule.</p>           
          <p class="p-tango"> The beginner class is for those who have never danced before.</p>

          <div class="btn holdplan">
            <a href="tangony.html"> Read More</a>
          </div>
        </div>
        <img class="nytango" src="img/nyitango.webp" alt="" />
      </section>
      <div class="line"></div>
      <section class="h2-tango">
        <div class="tango-tekst4">
          <h2 class="h2-desk">Tango Community</h2>
          <div class="h2-svg">
            <img class="forsidesvg-2" src="/svg/Violingreen.svg" alt="" />
          </div>

          <p class="p-tango">At Tango Urquiza, we value that there is a good atmosphere and a warm environment.  <br />Tango is not just a dance, it's a community, where you can express yourself through the dance.</p>
          <br />
          <div class="btn holdplan">
            <a href="tangofaellesskab.html"> Community</a>
          </div>
        </div>
        <img class="Teachingclass3 Teachingclass1 Teachingclass-img" src="/img/Milonga.webp" alt="" />
      </section>
      <div class="dansende-grafik"></div>
    </main>  `;

function toggleLanguage() {
  const main = document.getElementById("mainContent");

  if (isDanish) {
    main.innerHTML = englishContent;
  } else {
    main.innerHTML = danishContent;
  }

  isDanish = !isDanish;
}
