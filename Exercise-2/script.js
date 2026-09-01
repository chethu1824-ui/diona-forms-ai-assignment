const datasets = {

  // =========================
  // REFERENCE DATA
  // =========================
  reference: {

    claimNumber: "20042047 WP",
    workerAppId: "712041",
    workerName: "Chethan M",
    reportDate: "September 1, 2026",
    submitted: "September 1, 2026 16:20",

    workUpdate: "Terrible. Testing Testing",

    returnToWork: {
      status: "I have not returned to work",
      date: "",
      duties: ""
    },

    expectedReturnDate: "",

    concerns: "",

    employerContact: "",

    recovery: {
      status: "I have not fully recovered from my workplace injury",
      comments: ""
    },

    painLevel: 5,

    medicalTreatment: {
      status: "I am continuing to receive medical treatment",
      providerType: "",
      providerName: "",
      lastTreatmentDate: "",
      frequency: ""
    },

    physiotherapy: {
      status: "",
      frequency: ""
    },

    homeExercises: {
      status: "I am not doing home exercises",
      details: ""
    },

    additionalInformation: "",

    medication: {
      status: "I am taking medication",
      name: ""
    },

    nextTreatment: "",

    certification:
      "I certify that the information provided in this report is true and complete to the best of my knowledge.",

    privacyAccepted: true
  },


  // =========================
  // MULTIPLE / TEST DATA
  // =========================
  multiple: {

    claimNumber: "20042047 WP",
    workerAppId: "712041",
    workerName: "Chethan M",
    reportDate: "September 1, 2026",
    submitted: "September 1, 2026 16:20",

    workUpdate:
      "I am feeling better and making progress with my recovery.",

    returnToWork: {
      status: "I have returned to work",
      date: "August 26, 2026",
      duties: "Modified duties / reduced hours"
    },

    expectedReturnDate: "September 15, 2026",

    concerns:
      "I have some concerns about increasing my work hours.",

    employerContact:
      "Yes - I have been in contact with my employer.",

    recovery: {
      status: "I have not fully recovered from my workplace injury",
      comments:
        "My pain has improved, but I still experience discomfort after extended activity."
    },

    painLevel: 7,

    medicalTreatment: {
      status: "I am continuing to receive medical treatment",
      providerType: "Physiotherapist",
      providerName: "Dr. Brown",
      lastTreatmentDate: "August 29, 2026",
      frequency: "Twice a week"
    },

    physiotherapy: {
      status: "Yes",
      frequency: "Twice a week"
    },

    homeExercises: {
      status: "I am doing home exercises",
      details:
        "Stretching, strengthening exercises and walking."
    },

    additionalInformation:
      "I am continuing to follow the treatment plan recommended by my healthcare provider.",

    medication: {
      status: "I am taking medication",
      name: "Ibuprofen"
    },

    nextTreatment: "September 5, 2026",

    certification:
      "I certify that the information provided in this report is true and complete to the best of my knowledge.",

    privacyAccepted: true
  }
};


// =====================================
// HTML ESCAPING
// =====================================

function esc(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}


// =====================================
// CHECKBOX
// =====================================

function checkbox(checked) {
  return `
    <span class="checkbox">
      ${checked ? "✓" : ""}
    </span>
  `;
}


// =====================================
// RADIO / OPTION
// =====================================

function option(label, selected) {
  return `
    <span class="option">
      ${checkbox(selected)}
      <span>${esc(label)}</span>
    </span>
  `;
}


// =====================================
// HEADER
// =====================================

function header(data) {

  return `
    <header class="page-header">

      <div class="header-left">

        <img
          class="logo"
          src="assets/wcb-logo.jpg"
          alt="Workers Compensation Board of Manitoba"
        >

        <div class="contact">
          333 Broadway<br>
          Winnipeg, MB R3C 4W3<br>
          Phone: (204) 954-4321<br>
          Toll Free: 1-855-954-4321<br>
          wcb.mb.ca
        </div>

      </div>


      <div class="title-block">

        <h1>
          Worker Progress<br>
          Report
        </h1>

        <div class="claim-box">
          Claim No. ${esc(data.claimNumber)}
        </div>

      </div>

    </header>
  `;
}


// =====================================
// FOOTER
// =====================================

function footer(data, page, total) {

  return `
    <footer class="footer">

      <div>
        Worker App ID: ${esc(data.workerAppId)}
      </div>

      <div class="footer-right">
        Submitted: ${esc(data.submitted)}<br>
        Page ${page} of ${total}
      </div>

    </footer>
  `;
}


// =====================================
// PAIN SCALE
// =====================================

function painScale(level) {

  let html = "";

  for (let i = 1; i <= 10; i++) {

    html += `
      <span class="pain-number ${i === Number(level) ? "selected" : ""}">
        ${i}
      </span>
    `;
  }

  return html;
}


// =====================================
// PAGE 1
// =====================================

function pageOne(data, total) {

  return `

    <section class="page page-break">

      ${header(data)}


      <div class="report-date">
        ${esc(data.reportDate)}
      </div>


      <section class="intro-section">

        <h2>
          How is your recovery progressing?
        </h2>

        <p class="answer">
          ${esc(data.workUpdate)}
        </p>

      </section>


      <section class="section">

        <h2>Return to Work</h2>

        <p>
          Please provide an update about your return to work.
        </p>


        <div class="options">

          ${option(
            "I have returned to work",
            data.returnToWork.status === "I have returned to work"
          )}

          ${option(
            "I have not returned to work",
            data.returnToWork.status === "I have not returned to work"
          )}

        </div>


        <div class="field-row">

          <div class="field">

            <strong>
              Return to work date:
            </strong>

            <div class="field-value">
              ${esc(data.returnToWork.date)}
            </div>

          </div>


          <div class="field">

            <strong>
              Duties / hours:
            </strong>

            <div class="field-value">
              ${esc(data.returnToWork.duties)}
            </div>

          </div>

        </div>

      </section>


      <section class="section">

        <h2>
          Expected Return to Work
        </h2>

        <p>
          Expected return to work date:
        </p>

        <div class="field-value">
          ${esc(data.expectedReturnDate)}
        </div>

      </section>


      <section class="section">

        <h2>
          Concerns About Returning to Work
        </h2>

        <p class="answer">
          ${esc(data.concerns)}
        </p>

      </section>


      <section class="section">

        <h2>
          Employer Contact
        </h2>

        <p class="answer">
          ${esc(data.employerContact)}
        </p>

      </section>


      <section class="section">

        <h2>
          Recovery
        </h2>

        <div class="options">

          ${option(
            "I have fully recovered from my workplace injury",
            data.recovery.status ===
              "I have fully recovered from my workplace injury"
          )}

          ${option(
            "I have not fully recovered from my workplace injury",
            data.recovery.status ===
              "I have not fully recovered from my workplace injury"
          )}

        </div>


        <p class="answer">
          ${esc(data.recovery.comments)}
        </p>

      </section>


      ${footer(data, 1, total)}

    </section>
  `;
}


// =====================================
// PAGE 2
// =====================================

function pageTwo(data, total) {

  return `

    <section class="page page-break">

      ${header(data)}


      <section class="section">

        <h2>
          Current Pain / Discomfort
        </h2>

        <p>
          On a scale of 1 to 10, where 1 is the least
          amount of pain and 10 is the most:
        </p>


        <div class="pain-scale">

          ${painScale(data.painLevel)}

        </div>

      </section>


      <section class="section">

        <h2>
          Medical Treatment
        </h2>


        <div class="options">

          ${option(
            "I am continuing to receive medical treatment",
            data.medicalTreatment.status ===
              "I am continuing to receive medical treatment"
          )}

          ${option(
            "I have completed my medical treatment",
            data.medicalTreatment.status ===
              "I have completed my medical treatment"
          )}

        </div>


        <div class="details-grid">

          <div>
            <strong>
              Healthcare provider type:
            </strong>

            <div class="field-value">
              ${esc(data.medicalTreatment.providerType)}
            </div>
          </div>


          <div>
            <strong>
              Healthcare provider:
            </strong>

            <div class="field-value">
              ${esc(data.medicalTreatment.providerName)}
            </div>
          </div>


          <div>
            <strong>
              Last treatment:
            </strong>

            <div class="field-value">
              ${esc(data.medicalTreatment.lastTreatmentDate)}
            </div>
          </div>


          <div>
            <strong>
              Treatment frequency:
            </strong>

            <div class="field-value">
              ${esc(data.medicalTreatment.frequency)}
            </div>
          </div>

        </div>

      </section>


      <section class="section">

        <h2>
          Chiropractor / Physiotherapist
        </h2>

        <div class="options">

          ${option(
            "Yes",
            data.physiotherapy.status === "Yes"
          )}

          ${option(
            "No",
            data.physiotherapy.status === "No"
          )}

        </div>


        <div class="field-value">
          ${esc(data.physiotherapy.frequency)}
        </div>

      </section>


      <section class="section">

        <h2>
          Home Exercises
        </h2>

        <div class="options">

          ${option(
            "I am doing home exercises",
            data.homeExercises.status ===
              "I am doing home exercises"
          )}

          ${option(
            "I am not doing home exercises",
            data.homeExercises.status ===
              "I am not doing home exercises"
          )}

        </div>


        <p class="answer">
          ${esc(data.homeExercises.details)}
        </p>

      </section>


      <section class="section">

        <h2>
          Other Information
        </h2>

        <p class="answer">
          ${esc(data.additionalInformation)}
        </p>

      </section>


      ${footer(data, 2, total)}

    </section>
  `;
}


// =====================================
// PAGE 3
// =====================================

function pageThree(data, total) {

  return `

    <section class="page">

      ${header(data)}


      <section class="section">

        <h2>
          Medication
        </h2>


        <div class="options">

          ${option(
            "I am taking medication",
            data.medication.status ===
              "I am taking medication"
          )}

          ${option(
            "I am not taking medication",
            data.medication.status ===
              "I am not taking medication"
          )}

        </div>


        <div class="field">

          <strong>
            Medication:
          </strong>

          <div class="field-value">
            ${esc(data.medication.name)}
          </div>

        </div>

      </section>


      <section class="section">

        <h2>
          Next Medical Treatment
        </h2>

        <div class="field-value">
          ${esc(data.nextTreatment)}
        </div>

      </section>


      <section class="certification">

        <h2>
          Certification
        </h2>

        <p>
          ${esc(data.certification)}
        </p>

      </section>


      <div class="privacy">

        ${checkbox(data.privacyAccepted)}

        <span>
          I understand that the
          <u>Privacy Notice</u>
          applies to the personal information
          collected in this document.
        </span>

      </div>


      ${footer(data, 3, total)}

    </section>
  `;
}


// =====================================
// RENDER DOCUMENT
// =====================================

function render(data) {

  const totalPages = 3;

  document.getElementById("document").innerHTML =

    pageOne(data, totalPages) +

    pageTwo(data, totalPages) +

    pageThree(data, totalPages);
}


// =====================================
// LOAD SELECTED DATASET
// =====================================

function loadDataset() {

  const selected =
    document.getElementById("datasetSelect").value;

  render(datasets[selected]);
}


// =====================================
// BUTTONS
// =====================================

document
  .getElementById("renderBtn")
  .addEventListener("click", loadDataset);


document
  .getElementById("printBtn")
  .addEventListener("click", () => {
    window.print();
  });


// =====================================
// INITIAL LOAD
// =====================================

loadDataset();