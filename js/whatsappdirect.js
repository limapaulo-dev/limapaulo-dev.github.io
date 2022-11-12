const isMobile = () => /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
const pcOnly = document.getElementsByClassName('pc');
const userLocale = navigator.languages && navigator.languages.length ? navigator.languages[0] : navigator.language;

if (isMobile()) {
  for (element of pcOnly) {
    element.style.display = 'none';
  }
}

// fetch('/data/countriesData.json')
//   .then((res) => res.json())
//   .then((data) => (countriesData = data['Countries Data']));

// const ok = countriesData;

// for (const [i, country] of countriesData.entries()) {
//   console.log(i, country);
//   // const newLi = document.createElement("li");
//   // const newAnchor = document.createElement("a");
//   // newAnchor.classList.add("dropdown-item text-truncate");
//   // newAnchor.setAttribute("onclick","getCountry()");

//   // const fixedDialCode = country["dialCode"].replace(/([+ -])/g, '')

//   // newAnchor.setAttribute("value",country["dialCode"]);
//   // document.querySelector('.dropdown-item text-truncate').appendChild(newLi);
//   // document.querySelector(`.dropdown-item text-truncate li:nth-of-type(${i})`).appendChild(newLi);
// }

const contact = () => {
  const contactMsg = 'Hi! This is my contact number 📞';
  document.querySelector('textarea.form-control').value = contactMsg;
};

const coupon = () => {
  const getDiscont = () => Math.floor(Math.random() * 4 + 2) * 10;
  const getCoupon = getDiscont();
  const couponMsg = `Dear customer,\nuse this coupon for ${getCoupon}%OFF on your next order!\nDIRECTSAVE${getCoupon}\nSee you soon 😍`;
  document.querySelector('textarea.form-control').value = couponMsg;
};

const appointment = () => {
  const date = new Date();
  const dayOfWeekName = date.toLocaleString(userLocale, { weekday: 'long' });
  const monthName = date.toLocaleString(userLocale, { month: 'short' });
  let dayNumb = date.getDate();
  let yearNumb = date.getFullYear();
  const hourNumb = date.toLocaleString(userLocale, { hour: 'numeric', hour12: true });
  if (navigator.language === 'pt-BR') {
    hourNumb = `${date.toLocaleString(userLocale, { hour: 'numeric', hour12: false })} horas`;
  }
  const appointmentMsg = `Hello!\nJust a friendly reminder of your appointment 🗓️\n${dayOfWeekName}, ${monthName} ${dayNumb}, ${yearNumb} at ${hourNumb}`;
  document.querySelector('textarea.form-control').value = appointmentMsg;
};

const services = () => {
  const servicesMsg = "Thank you for contacting our services!\nwe'll get back to you as soon as possible 🙋";
  document.querySelector('textarea.form-control').value = servicesMsg;
};

const getCountry = () => {
  document.querySelector('#dropdown-country-code').onclick = (liCountry) => {
    console.log(liCountry);
    const liCountryText = liCountry.target.innerText;
    console.log(liCountryText);
    const liCountryValue = liCountry.target.getAttribute('value');
    //console.log(document.querySelector('#country-code-btn').value);
    console.log(liCountryValue);
    const liCountryFlag = liCountry.target.querySelector('img').src;
    console.log(liCountryFlag);
    document.querySelector('#country-code-btn span').innerText = liCountryText;
    document.querySelector('#country-code-btn img').src = liCountryFlag;
    document.querySelector('#country-code-btn').value = liCountryValue;
  };
};

const directMsg = () => {
  const countryCode = document.querySelector('#country-code-btn').value;
  const phoneNumb = document.querySelector('#phone-number-input').value;
  document.querySelector('#phone-number-input').value = `${countryCode}${phoneNumb}`;
  setTimeout(() => {
    document.querySelector('#phone-number-input').value = phoneNumb;
  }, 10);
};
