const datasets = {
  reference: {
    claimNumber: "20042047",
    workerAppId: "712041",
    submitted: "March 28, 2024 20:43",
    workerName: "Chethan M",
    prescriptionDrugs: [
      { drugName: "Naproxen", prescriptionDate: "February 28, 2024", purchasedDate: "February 29, 2024", provider: "Dr. Best", amount: "$20.00" }
    ],
    otcDrugs: [
      { drugName: "Advil", purchasedDate: "March 28, 2024", amount: "$8.00", seller: "Shoppers Drug Mart", reason: "Pain" }
    ],
    medicalSupplies: [
      { item: "Tensor", purchasedDate: "February 28, 2024", prescribed: "Yes", provider: "Dr. Best", amount: "$10.00", seller: "Shoppers Drug Mart" }
    ],
    parking: [
      { address: "333 St Mary Ave, Winnipeg MB R3C4A5, Canada", date: "March 28, 2024", amount: "$10.00", meterUsed: "yes", meterNumber: "12245" }
    ],
    mileage: [
      { date: "March 28, 2024", facility: "HSC, 820 Sherbrook St, Winnipeg MB R3A 1R9, Canada", workplace: "WCB, 333 Broadway, Winnipeg MB R3C 4W3, Canada", km: "20 km" }
    ],
    busTaxi: [
      { date: "March 28, 2024", start: "", facility: "HSC Winnipeg Women’s Hospital, 665 William Ave, Winnipeg MB R3E 0Z2, Canada", mode: "Bus", fare: "$3.00" },
      { date: "March 27, 2024", start: "25 Furby St, Winnipeg MB R3C2A2, Canada", facility: "440 Edmonton St, Winnipeg MB R3B 2M4, Canada", mode: "Taxi", fare: "$15.00" }
    ],
    privacyAccepted: true
  },

  multiple: {
    claimNumber: "20042047",
    workerAppId: "712041",
    submitted: "September 1, 2026 16:20",
    workerName: "Chethan M",
    prescriptionDrugs: [
      { drugName: "Naproxen", prescriptionDate: "February 28, 2024", purchasedDate: "February 29, 2024", provider: "Dr. Best", amount: "$20.00" },
      { drugName: "Ibuprofen", prescriptionDate: "March 2, 2024", purchasedDate: "March 3, 2024", provider: "Dr. Brown", amount: "$14.00" },
      { drugName: "Acetaminophen", prescriptionDate: "March 6, 2024", purchasedDate: "March 7, 2024", provider: "Dr. Green", amount: "$18.00" }
    ],
    otcDrugs: [
      { drugName: "Advil", purchasedDate: "March 28, 2024", amount: "$8.00", seller: "Shoppers Drug Mart", reason: "Pain" },
      { drugName: "Tylenol", purchasedDate: "March 29, 2024", amount: "$9.00", seller: "Rexall", reason: "Headache" },
      { drugName: "Cold Medicine", purchasedDate: "March 30, 2024", amount: "$12.00", seller: "London Drugs", reason: "Cold" }
    ],
    medicalSupplies: [
      { item: "Tensor", purchasedDate: "February 28, 2024", prescribed: "Yes", provider: "Dr. Best", amount: "$10.00", seller: "Shoppers Drug Mart" },
      { item: "Wrist Brace", purchasedDate: "March 5, 2024", prescribed: "Yes", provider: "Dr. Brown", amount: "$24.00", seller: "Rexall" },
      { item: "Ice Pack", purchasedDate: "March 8, 2024", prescribed: "No", provider: "", amount: "$7.00", seller: "London Drugs" }
    ],
    parking: [
      { address: "333 St Mary Ave, Winnipeg MB R3C4A5, Canada", date: "March 28, 2024", amount: "$10.00", meterUsed: "yes", meterNumber: "12245" },
      { address: "820 Sherbrook St, Winnipeg MB R3A 1R9, Canada", date: "March 29, 2024", amount: "$12.00", meterUsed: "yes", meterNumber: "12880" }
    ],
    mileage: [
      { date: "March 28, 2024", facility: "HSC, 820 Sherbrook St, Winnipeg MB R3A 1R9, Canada", workplace: "WCB, 333 Broadway, Winnipeg MB R3C 4W3, Canada", km: "20 km" },
      { date: "March 29, 2024", facility: "333 St Mary Ave, Winnipeg MB R3C4A5, Canada", workplace: "WCB, 333 Broadway, Winnipeg MB R3C 4W3, Canada", km: "14 km" }
    ],
    busTaxi: [
      { date: "March 28, 2024", start: "", facility: "HSC Winnipeg Women’s Hospital, 665 William Ave, Winnipeg MB R3E 0Z2, Canada", mode: "Bus", fare: "$3.00" },
      { date: "March 27, 2024", start: "25 Furby St, Winnipeg MB R3C2A2, Canada", facility: "440 Edmonton St, Winnipeg MB R3B 2M4, Canada", mode: "Taxi", fare: "$15.00" },
      { date: "March 31, 2024", start: "50 Main St, Winnipeg MB", facility: "HSC Winnipeg, Winnipeg MB", mode: "Bus", fare: "$4.00" }
    ],
    privacyAccepted: true
  }
};

const esc = (value) => String(value ?? "")
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;")
  .replaceAll("'", "&#039;");

function table(headers, rows, widths = []) {
  const colgroup = widths.length
    ? `<colgroup>${widths.map(w => `<col style="width:${w}%">`).join("")}</colgroup>`
    : "";
  return `<table>${colgroup}<thead><tr>${headers.map(h => `<th>${h}</th>`).join("")}</tr></thead><tbody>${rows.join("")}</tbody></table>`;
}

function header(data) {
  return `
    <header class="page-header">

      <div class="header-left">
        <img 
          class="logo" 
          src="assets/wcb-logo.jpg" 
          alt="Workers Compensation Board of Manitoba"
        />

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
          Medical &amp; Travel Expense<br>
          Request
        </h1>

        <div class="claim-box">
          Claim No. ${esc(data.claimNumber)}
        </div>
      </div>

    </header>
  `;
}

function footer(data, page, total) {
  return `<footer class="footer"><div>Worker App ID: ${esc(data.workerAppId)}</div><div class="footer-right">Submitted: ${esc(data.submitted)}<br>Page ${page} of ${total}</div></footer>`;
}

function row(cells) {
  return `<tr>${cells.map(c => `<td class="dynamic">${esc(c)}</td>`).join("")}</tr>`;
}

function pageOne(data, total) {
  return `<section class="page page-break">
    ${header(data)}
    <p class="intro"><span class="worker-name">${esc(data.workerName)}</span> requested reimbursement for the following medical and/or travel expenses:</p>

    <section class="section"><h2>Prescription Drugs</h2>${table(
      ["Drug Name", "Prescription Date", "Date Purchased", "Healthcare Provider Name", "Paid Amount"],
      data.prescriptionDrugs.map(x => row([x.drugName, x.prescriptionDate, x.purchasedDate, x.provider, x.amount])),
      [20, 17, 17, 33, 13]
    )}</section>

    <section class="section"><h2>Over-the-Counter Drugs</h2>${table(
      ["Drug Name", "Date Purchased", "Paid Amount", "Seller's Name", "Reason for Purchasing"],
      data.otcDrugs.map(x => row([x.drugName, x.purchasedDate, x.amount, x.seller, x.reason])),
      [20, 17, 12, 24, 27]
    )}</section>

    <section class="section"><h2>Bandages, Braces or Other Medical Supplies</h2>${table(
      ["Item Purchased", "Date Purchased", "Was this Prescribed?", "Healthcare Provider Name", "Paid Amount", "Seller's Name"],
      data.medicalSupplies.map(x => row([x.item, x.purchasedDate, x.prescribed, x.provider, x.amount, x.seller])),
      [20, 11, 10, 24, 12, 23]
    )}</section>

    <section class="section"><h2>Parking for Medical Appointments</h2>${table(
      ["Address of Healthcare Provider/Medical Facility", "Date", "Paid Amount", "Meter Used?", "Meter Number"],
      data.parking.map(x => row([x.address, x.date, x.amount, x.meterUsed, x.meterNumber])),
      [39, 18, 14, 14, 15]
    )}</section>

    <section class="section"><h2>Mileage to Medical Appointments</h2>
      <p class="mileage-note">The WCB will generally reimburse only those transportation costs which are in excess of costs that would be incurred by the worker while travelling to and from work.</p>
      ${table(
        ["Appointment Date", "Address of Healthcare Provider/Medical Facility", "Address of Workplace", "Number of km (Round Trip)"],
        data.mileage.map(x => row([x.date, x.facility, x.workplace, x.km])),
        [18, 31, 31, 20]
      )}
    </section>
    ${footer(data, 1, total)}
  </section>`;
}

function pageTwo(data, total) {
  return `<section class="page">
    ${header(data)}

    <section class="section">
      <h2>Bus or Taxi Fare for Medical Appointments<sup>*</sup></h2>
      <p class="note"><strong>*Note:</strong> Pre-approval is required from your WCB representative to claim taxi fare(s).</p>
      ${table(
        ["Appointment Date", "Address of Starting Point", "Address of Healthcare Provider/Medical Facility", "Bus or Taxi (indicate one)", "Total Fare Paid"],
        data.busTaxi.map(x => row([x.date, x.start, x.facility, x.mode, x.fare])),
        [14, 25, 34, 14, 13]
      )}
    </section>

    <div class="privacy"><span class="checkbox">${data.privacyAccepted ? "✓" : ""}</span><span>I understand that the <u style="color:#1d4f72;">Privacy Notice</u> applies to the personal information collected in this document.</span></div>
    ${footer(data, 2, total)}
  </section>`;
}

function render(data) {
  // The reference document is two pages. We keep that structure for the baseline implementation.
  document.getElementById("document").innerHTML = pageOne(data, 2) + pageTwo(data, 2);
}

function loadDataset() {
  render(datasets[document.getElementById("datasetSelect").value]);
}

document.getElementById("renderBtn").addEventListener("click", loadDataset);
document.getElementById("printBtn").addEventListener("click", () => window.print());
loadDataset();
