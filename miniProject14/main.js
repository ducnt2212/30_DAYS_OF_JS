document.body.style.fontFamily = "Arial";

const title = document.getElementById("title");
title.style.textAlign = "center";

function modifyInputContainer(input_container, title, input, feedback) {
  input_container.style.marginLeft = "35%";
  input_container.style.marginTop = "15px";
  input_container.style.marginBottom = "15px";

  title.style.textAlign = "left";
  title.style.marginBottom = "5px";
  title.style.fontWeight = "550";

  input.style.width = "60%";
  input.style.maxWidth = "500px";
  input.style.marginTop = "10px";
  input.style.marginLeft = "5px";
  input.style.padding = "10px";
  input.style.fontSize = "17.5px";
  input.style.borderRadius = "5px";

  feedback.style.width = "45%";
  feedback.style.textAlign = "center";
  feedback.style.color = "orange";
  feedback.style.fontWeight = "600";
  feedback.style.marginTop = "15px";
  feedback.style.marginBottom = "20px";
  feedback.style.marginLeft = "5%";
}

function modifyLayout() {
  //firstName
  const first_name_input_container = document.querySelector(
    ".first-name-input-container"
  );

  const first_name_title = document.querySelector(".first-name-title");

  const first_name_input = document.querySelector("#first-name-input");

  const first_name_feedback = document.querySelector("#first-name-feedback");
  modifyInputContainer(
    first_name_input_container,
    first_name_title,
    first_name_input,
    first_name_feedback
  );

  //lastName
  const last_name_input_container = document.querySelector(
    ".last-name-input-container"
  );

  const last_name_title = document.querySelector(".last-name-title");

  const last_name_input = document.querySelector("#last-name-input");

  const last_name_feedback = document.querySelector("#last-name-feedback");

  modifyInputContainer(
    last_name_input_container,
    last_name_title,
    last_name_input,
    last_name_feedback
  );

  //email
  const email_input_container = document.querySelector(
    ".email-input-container"
  );

  const email_title = document.querySelector(".email-title");

  const email_input = document.querySelector("#email-input");

  const email_feedback = document.querySelector("#email-feedback");

  modifyInputContainer(
    email_input_container,
    email_title,
    email_input,
    email_feedback
  );

  //password
  const password_input_container = document.querySelector(
    ".password-input-container"
  );

  const password_title = document.querySelector(".password-title");

  const password_input = document.querySelector("#password-input");

  const password_feedback = document.querySelector("#password-feedback");

  modifyInputContainer(
    password_input_container,
    password_title,
    password_input,
    password_feedback
  );

  //telephone
  const telephone_input_container = document.querySelector(
    ".telephone-input-container"
  );

  const telephone_title = document.querySelector(".telephone-title");

  const telephone_input = document.querySelector("#telephone-input");

  const telephone_feedback = document.querySelector("#telephone-feedback");

  modifyInputContainer(
    telephone_input_container,
    telephone_title,
    telephone_input,
    telephone_feedback
  );

  //yourBio
  const your_bio_input_container = document.querySelector(
    ".your-bio-input-container"
  );

  const your_bio_title = document.querySelector(".your-bio-title");

  const your_bio_input = document.querySelector("#your-bio-input");

  const your_bio_feedback = document.querySelector("#your-bio-feedback");

  modifyInputContainer(
    your_bio_input_container,
    your_bio_title,
    your_bio_input,
    your_bio_feedback
  );

  //submit
  const submit = document.querySelector("#submit");
  submit.style.marginLeft = "35.75%";
  submit.style.backgroundColor = "rgb(64,64,64)";
  submit.style.color = "white";
  submit.style.padding = "12.5px 50px";
  submit.style.borderStyle = "none";
  submit.style.borderRadius = "5px";
  submit.style.fontSize = "17.5px";
}
modifyLayout();

function pageFuntion() {
  let first_name_Validation = false;
  const first_name_input = document.querySelector("#first-name-input");
  first_name_input.addEventListener("input", (e) => {
    const first_name_feedback = document.querySelector("#first-name-feedback");

    let pattern = /^[a-zA-Z0-9]{3,16}$/;
    if (e.target.value == "" || pattern.test(e.target.value) == false) {
      first_name_feedback.textContent =
        "First name must be alphanumeric and contain 3 - 16 characters";
      first_name_input.style.borderColor = "red";
      first_name_Validation = false;
    } else {
      first_name_feedback.textContent = "";
      first_name_input.style.borderColor = "green";
      first_name_Validation = true;
    }
  });

  let last_name_Validation = false;
  const last_name_input = document.querySelector("#last-name-input");
  last_name_input.addEventListener("input", (e) => {
    const last_name_feedback = document.querySelector("#last-name-feedback");

    let pattern = /^[a-zA-z0-9]{3,16}$/;

    if (e.target.value == "" || pattern.test(e.target.value) == false) {
      last_name_feedback.textContent =
        "Last name must be alphanumeric and contain 3 - 16 characters";
      last_name_input.style.borderColor = "red";
      last_name_Validation = false;
    } else {
      last_name_feedback.textContent = "";
      last_name_input.style.borderColor = "green";
      last_name_Validation = true;
    }
  });

  let email_Validation = false;
  const email_input = document.querySelector("#email-input");
  email_input.addEventListener("input", (e) => {
    const email_feedback = document.querySelector("#email-feedback");

    let pattern =
      /^[^.~`#$%^&*()":;'?/<>,]([0-9A-Za-z\_\-]?)+(\.?(([0-9A-Za-z\_\-]+)([0-9A-Za-z]+)))+@[a-zA-Z]{2,}\.[a-zA-Z]{2,}(\.?[a-zA-Z]{2,})*$/;
    if (e.target.value == "" || pattern.test(e.target.value) == false) {
      email_feedback.textContent =
        "Email must be a valid address, e.g. example@example.com";
      email_input.style.borderColor = "red";
      email_Validation = false;
      email_input.style.backgroundColor = "";
    } else {
      email_feedback.textContent = "";
      email_input.style.borderColor = "green";
      email_Validation = true;
      email_input.style.backgroundColor = "aliceblue";
    }
  });

  let password_Validation = false;
  const password_input = document.querySelector("#password-input");
  password_input.addEventListener("input", (e) => {
    const password_feedback = document.querySelector("#password-feedback");

    let pattern = /^[a-zA-Z0-9\@\_\-]{6,20}$/;
    if (e.target.value == "" || pattern.test(e.target.value) == false) {
      password_feedback.textContent =
        "Password must be alphanumeric (@, _ and - are also allowed) and between 6 - 20 characters";
      password_input.style.borderColor = "red";
      password_Validation = false;
    } else {
      password_feedback.textContent = "";
      password_input.style.borderColor = "green";
      password_Validation = true;
    }
  });

  let telephone_Validation = false;
  const telephone_input = document.querySelector("#telephone-input");
  telephone_input.addEventListener("input", (e) => {
    const telephone_feedback = document.querySelector("#telephone-feedback");

    let pattern = /^[0-9]{3}\-[0-9]{3}\-[0-9]{3}$/;
    if (e.target.value == "" || pattern.test(e.target.value) == false) {
      telephone_feedback.textContent =
        "A valid Telephone number (10 digits and 333-333-3334)";
      telephone_input.style.borderColor = "red";
      telephone_Validation = false;
      telephone_input.style.backgroundColor = "";
    } else {
      telephone_feedback.textContent = "";
      telephone_input.style.borderColor = "green";
      telephone_Validation = true;
      telephone_input.style.backgroundColor = "aliceblue";
    }

    //We can format the phone number while typing
  });

  let your_bio_Validation = false;
  const your_bio_input = document.querySelector("#your-bio-input");
  your_bio_input.addEventListener("input", (e) => {
    const your_bio_feedback = document.querySelector("#your-bio-feedback");

    /* The dot in regex helps to accept the whitespace between words and makes the 
        regex to check the length of the input, not the length of the first word*/
    let pattern = /^[a-zA-Z\_\-].{8,50}$/;
    if (e.target.value == "" || pattern.test(e.target.value) == false) {
      your_bio_feedback.textContent =
        "Bio must contain only lowercase letters, underscores, hyphens and be 8 - 50 characters";
      your_bio_input.style.borderColor = "red";
      your_bio_Validation = false;
    } else {
      your_bio_feedback.textContent = "";
      your_bio_input.style.borderColor = "green";
      your_bio_Validation = true;
    }
  });

  function modifySubmitFunction() {
    function changeColorSubmitButton(input) {
      const submit = document.querySelector("#submit");
      input.addEventListener("input", () => {
        if (
          first_name_Validation == false ||
          last_name_Validation == false ||
          email_Validation == false ||
          password_Validation == false ||
          telephone_Validation == false ||
          your_bio_Validation == false
        ) {
          submit.style.backgroundColor = "rgb(64,64,64)";
        } else {
          submit.style.backgroundColor = "green";
        }
      });
    }
    changeColorSubmitButton(first_name_input);
    changeColorSubmitButton(last_name_input);
    changeColorSubmitButton(email_input);
    changeColorSubmitButton(password_input);
    changeColorSubmitButton(telephone_input);
    changeColorSubmitButton(your_bio_input);
  }
  modifySubmitFunction();
}
pageFuntion();
