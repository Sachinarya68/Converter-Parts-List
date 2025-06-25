const data = {
    "400-500V": {
        "25A": [
            { description: "Thyristor modules", q2: "3", q4: "6", code: "DCA0008018P1", type: "SKKT27/16E *", notes: "" },
            { description: "Power interface board", q2: "1", q4: "1", code: "3ADT306100R1", type: "SDCS-PIN-11", notes: "DCF501,502, DCF 601, 602 (1)" },
            { description: "Semiconductor fuses", q2: "3", q4: "3", code: "DC29838767P1", type: "170M1564", notes: "" },
            { description: "Cooling fan", q2: "2", q4: "1", code: "DCA0017670P1", type: "CN5822", notes: "" }
        ],
        "50A": [
            { description: "Thyristor modules", q2: "3", q4: "4", code: "DCA0011132P1", type: "SKKT42/16E *", notes: "" },
            { description: "Power interface board", q2: "2", q4: "1", code: "3ADT306100R1", type: "SDCS-PIN-11", notes: "DCF501,502, DCF 601, 602 (1)" },
            { description: "Semiconductor fuses", q2: "1", q4: "1", code: "DC29838719P1", type: "170M1566", notes: "" },
            { description: "Cooling fan", q2: "3", q4: "1", code: "DCA0017670P1", type: "CN5822", notes: "" }
        ],
        "75A": [
            { description: "Thyristor modules", q2: "2", q4: "4", code: "DCA0011914P1", type: "SKKT57/16E", notes: "" },
            { description: "Power interface board", q2: "1", q4: "2", code: "3ADT306100R1", type: "SDCS-PIN-11", notes: "DCF501,502, DCF 601, 602 (1)" },
            { description: "Semiconductor fuses", q2: "3", q4: "1", code: "DCA0012686P1", type: "170M1568", notes: "" },
            { description: "Cooling fan", q2: "2", q4: "1", code: "DCA0017670P1", type: "CN5822", notes: "" }
        ],
        "100A": [
            { description: "Thyristor modules", q2: "1", q4: "1", code: "DCA0011931P1", type: "SKKT106/16E", notes: "" },
            { description: "Power interface board", q2: "2", q4: "1", code: "3ADT306100R1", type: "SDCS-PIN-205B", notes: "Repl. SDCS PIN-21 and PIN205" },
            { description: "Semiconductor fuses", q2: "3", q4: "2", code: "DCA0012694P1", type: "170M3815", notes: "" },
            { description: "Cooling fan", q2: "1", q4: "1", code: "DCA0012678P1", type: "W2E143-AA09-252", notes: "" }
        ],
        "110A": [
            { description: "Thyristor modules", q2: "2", q4: "1", code: "DCA0011922P1", type: "SKKT72/16E", notes: "" },
            { description: "Power interface board", q2: "1", q4: "1", code: "3ADT312500R2", type: "SDCS-PIN-206B", notes: "Repl. SDCS PIN-23 and PIN206" },
            { description: "Semiconductor fuses", q2: "3", q4: "4", code: "DCA0008843P1", type: "170M1567", notes: "" },
            { description: "Cooling fan", q2: "4", q4: "1", code: "DCA0012678P1", type: "W2E143-AA09-252CN5822", notes: "" }
        ],
        "140A": [
            { description: "Thyristor modules", q2: "3", q4: "5", code: "DCA0011393P1", type: "SKKT106/16E", notes: "" },
            { description: "Power interface board", q2: "1", q4: "1", code: "3ADT312500R1", type: "SDCS-PIN-205B", notes: "Repl. SDCS PIN-21 and PIN205" },
            { description: "Semiconductor fuses", q2: "3", q4: "2", code: "DCA0012694P1", type: "170M3815", notes: "" },
            { description: "Cooling fan", q2: "1", q4: "1", code: "DCA0012678P1", type: "W2E143-AA09-25", notes: "" }
        ]
    },
    "600V": {
        "110A": [
            { description: "Thyristor modules", q2: "3", q4: "1", code: "DCA001922P1", type: "SKKT72/20E", notes: "" },
            { description: "Power interface board", q2: "1", q4: "1", code: "3ADT315200R2", type: "SDCS-PIN 206B", notes: "Repl. SDCS PIN-23 and PIN206" },
            { description: "Fuse F101-F103 on PIN206B", q2: "3", q4: "1", code: "3BSE070100R1", type: "KTK-R6A/600V", notes: "" },
            { description: "Semiconductor fuses", q2: "3", q4: "1", code: "DCA0021694P1", type: "170M3815", notes: "" },
            { description: "Cooling fan", q2: "1", q4: "1", code: "DCA0012678P1", type: "WE2143-AA09-25", notes: "" }
        ]
    }
};

const voltageSelect = document.getElementById("voltageSelect");
const amperageSelect = document.getElementById("amperageSelect");
const tableBody = document.querySelector("#partsTable tbody");

function populateDropdown(dropdown, options) {
    dropdown.innerHTML = '<option value="" disabled selected>Select</option>';
    options.forEach(option => {
        const opt = document.createElement("option");
        opt.value = option;
        opt.textContent = option;
        dropdown.appendChild(opt);
    });
}

function updateAmperageOptions() {
    const voltage = voltageSelect.value;
    const amperageOptions = voltage ? Object.keys(data[voltage]) : [];
    populateDropdown(amperageSelect, amperageOptions);
    tableBody.innerHTML = '';
}

function updateTable() {
    const voltage = voltageSelect.value;
    const amperage = amperageSelect.value;
    const showQ2 = document.getElementById("q2Check").checked;
    const showQ4 = document.getElementById("q4Check").checked;

    if (!data[voltage]?.[amperage]) {
        tableBody.innerHTML = '';
        return;
    }

    const parts = data[voltage][amperage];
    tableBody.innerHTML = parts.map(row => `
        <tr>
            <td>${row.description}</td>
            <td class="col-q2">${row.q2}</td>
            <td class="col-q4">${row.q4}</td>
            <td>${row.code}</td>
            <td>${row.type}</td>
            <td>${row.notes}</td>
        </tr>
    `).join('');

    // Toggle visibility AFTER rows are rendered
    document.querySelectorAll("th.col-q2, td.col-q2").forEach(cell =>
        cell.classList.toggle("hide-col", !showQ2)
    );
    document.querySelectorAll("th.col-q4, td.col-q4").forEach(cell =>
        cell.classList.toggle("hide-col", !showQ4)
    );
}

// Initialize
populateDropdown(voltageSelect, Object.keys(data));
voltageSelect.addEventListener("change", updateAmperageOptions);
amperageSelect.addEventListener("change", updateTable);

document.getElementById("q2Check").addEventListener("change", updateTable);
document.getElementById("q4Check").addEventListener("change", updateTable);

