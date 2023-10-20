export const SIGN_IN_URL = "https://artisan-api-q9uw.onrender.com/signin";
export const SIGN_UP_URL = "https://artisan-api-q9uw.onrender.com/signup";
export const CREATE_USER =
  "https://artisan-api-q9uw.onrender.com/create-userProfile";

export const DISTRICTS = [
  "Ajmer",
  "Kota",
  "Udaipur",
  "Jaipur",
  "Jaisalmer",
  "Bhilwara",
  "Rajsamand",
  "Sirohi",
  "Dungapur",
  "Jalore",
  "Banswara",
  "Pali",
  "Sri Ganganagar",
  "Pratapgarh",
  "Sawai Madhopur",
  "Barmer",
  "Chittorgarh",
  "Sikar",
  "Jhalawar",
  "Bundi",
  "Dausa",
  "Karauli",
  "Nagaur",
  "Churu",
  "Dholpur",
  "Jhunjhunu",
  "Hanumangarh",
  "Bikaner",
  "Jodhpur",
  "Alwar",
  "Tonk",
  "Bharatpur",
  "Baran",
];

export const TEMPLATE_1 = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>{{name}}</title>
    <style>
      .wrapper {
        display: flex;
        width: 100%;
        height: fit-content;
        justify-content: space-evenly;
        align-items: center;
        flex-direction: column;
        background-color: #f0d7d7;
        min-height: 100vh;
      }

      * {
        padding: 0;
        margin: 0;

        font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
          sans-serif;
      }

      .pfpImg {
        width: 150px;
        height: 150px;
        border-radius: 100%;
        border: 2px solid black;
      }

      .name {
        color: rgb(17 24 39);
        font-weight: 700;
        font-size: 3rem;
        line-height: 2rem;
      }

      .businessName {
        color: rgb(17 24 39);
        font-weight: 700;
        font-size: 1.5rem;
        /* line-height: 2rem; */
      }

      .businessAddress {
        color: rgb(17 24 39);
        font-weight: 500;
        font-size: 1.2rem;
        /* line-height: 2rem; */
      }

      .bAddWrapper {
        display: flex;
        gap: 4rem;
        justify-content: center;
        align-items: center;
        border: 2px solid #c6b0b0;
        padding: 1rem 2rem;
        border-radius: 1rem;
        width:fit-content;
      }

      .bAddWrapper svg {
        transform: scale(1.5);
        display: none;
      }

      .bDetailWrapper {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        justify-content: center;
        align-items: center;
        border: 2px solid #c6b0b0;
        padding: 1rem 2rem;
        border-radius: 1rem;
      }

      .about {
        font-size: x-large;
        font-weight: 800;
      }

      .businessDetails {
        color: rgb(17 24 39);
        font-weight: 500;
        font-size: 1.2rem;
      }

      .socials_wrapper {
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }

      .socials_wrapper svg {
        transform: scale(1.5);
        display: none;
      }

      .socials_wrapper a {
        text-decoration: none;
        font-weight: 900;
        letter-spacing: 3px;
        color: grey;
      }

      .socials_wrapper div {
        display: flex;
        gap: 1rem;
      }

      .red {
        color: red;
      }

      .center{
        text-align:center;
      }

    </style>
  </head>

  <body>
    <div class="wrapper">
      <p class="red center">
        TEMPLATE_1 : This is a dummy Profile, made for development purposes.
      </p>
      <img src="{{pfp}}" alt="ProfilePhoto" class="pfpImg" />
      <p class="name">{{name}}</p>
      <p class="businessName">{{businessName}}</p>
      <div class="bAddWrapper">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 384 512"
        >
          <path
            d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"
          />
        </svg>
        <p class="businessAddress">{{businessAddress}}</p>
      </div>
      <div class="bDetailWrapper">
        <p class="about">ABOUT</p>

        <p class="businessDetails">{{businessDetails}}</p>
      </div>
      <div class="socials_wrapper">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 448 512"
          >
            <path
              d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
            />
          </svg>
          <a href="{{instagram}}">Instagram</a>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 512 512"
          >
            <path
              d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
            />
          </svg>
          <a href="{{twitter}}">Twitter</a>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 512 512"
          >
            <path
              d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"
            />
          </svg>
          <a href="{{facebook}}">Facebook</a>
        </div>
      </div>
    </div>
  </body>
</html>
`;

export const TEMPLATE_2 = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>{{name}}</title>
    <style>
      .wrapper {
        display: flex;
        width: 100%;
        height: fit-content;
        justify-content: space-evenly;
        align-items: center;
        flex-direction: column;
        background-color: #dfe2a7;
        min-height: 100vh;
      }

      * {
        padding: 0;
        margin: 0;

        font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
          sans-serif;
      }

      .pfpImg {
        width: 150px;
        height: 150px;
        border-radius: 100%;
        border: 2px solid black;
      }

      .name {
        color: rgb(17 24 39);
        font-weight: 700;
        font-size: 3rem;
        line-height: 2rem;
      }

      .businessName {
        color: rgb(17 24 39);
        font-weight: 700;
        font-size: 1.5rem;
        /* line-height: 2rem; */
      }

      .businessAddress {
        color: rgb(17 24 39);
        font-weight: 500;
        font-size: 1.2rem;
        /* line-height: 2rem; */
      }

      .bAddWrapper {
        display: flex;
        gap: 4rem;
        justify-content: center;
        align-items: center;
        border: 2px solid #a7aa7c;
        padding: 1rem 2rem;
        border-radius: 1rem;
      }

      .bAddWrapper svg {
        transform: scale(1.5);
        display: none;
      }

      .bDetailWrapper {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        justify-content: center;
        align-items: center;
        border: 2px solid #a7aa7c;
        padding: 1rem 2rem;
        border-radius: 1rem;
      }

      .about {
        font-size: x-large;
        font-weight: 800;
      }

      .businessDetails {
        color: rgb(17 24 39);
        font-weight: 500;
        font-size: 1.2rem;
      }

      .socials_wrapper {
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }

      .socials_wrapper svg {
        transform: scale(1.5);
        display: none;
      }

      .socials_wrapper a {
        text-decoration: none;
        font-weight: 900;
        letter-spacing: 3px;
        color: grey;
      }

      .socials_wrapper div {
        display: flex;
        gap: 1rem;
      }
      .red {
        color: red;
      }
      .center{
        text-align:center;
      }
     
    </style>
  </head>

  <body>
    <div class="wrapper">
      <p class="red center">
        TEMPLATE_2 : This is a dummy Profile, made for development purposes.
      </p>
      <img src="{{pfp}}" alt="ProfilePhoto" class="pfpImg" />
      <p class="name">{{name}}</p>
      <p class="businessName">{{businessName}}</p>
      <div class="bAddWrapper">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 384 512"
        >
          <path
            d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"
          />
        </svg>
        <p class="businessAddress">{{businessAddress}}</p>
      </div>
      <div class="bDetailWrapper">
        <p class="about">ABOUT</p>

        <p class="businessDetails">{{businessDetails}}</p>
      </div>
      <div class="socials_wrapper">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 448 512"
          >
            <path
              d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
            />
          </svg>
          <a href="{{instagram}}">Instagram</a>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 512 512"
          >
            <path
              d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
            />
          </svg>
          <a href="{{twitter}}">Twitter</a>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 512 512"
          >
            <path
              d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"
            />
          </svg>
          <a href="{{facebook}}">Facebook</a>
        </div>
      </div>
    </div>
  </body>
</html>
`;
