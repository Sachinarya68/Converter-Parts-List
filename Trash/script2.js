const converterData = {
    "25A (400V-500V)": {
        "2Q": [
            { description: "Thyristor modules", quantity: 3, code: "DCA0008018P1", type: "SKKT27/16E", notes: "*" },
            { description: "Power interface board", quantity: 1, code: "3ADT306100R1", type: "SDCS-PIN-11", notes: "DCF501,502, DCF 601, 602 (1)" },
            { description: "Semiconductor fuses", quantity: 3, code: "DCZ9838767P1", type: "170M1564", notes: "" },
            { description: "Cooling fan", quantity: 1, code: "DCA0017670P1", type: "CN52B2", notes: "" }
        ],
        "4Q": [
            { description: "Thyristor modules", quantity: 6, code: "DCA0008018P1", type: "SKKT27/16E", notes: "*" },
            { description: "Power interface board", quantity: 1, code: "3ADT306100R1", type: "SDCS-PIN-11", notes: "DCF501,502, DCF 601, 602 (1)" },
            { description: "Semiconductor fuses", quantity: 3, code: "DCZ9838767P1", type: "170M1564", notes: "" },
            { description: "Cooling fan", quantity: 2, code: "DCA0017670P1", type: "CN52B2", notes: "" }
        ]
    },
    "50A (400V-500V)": {
        "2Q": [
            { description: "Thyristor modules", quantity: 5, code: "DCA0011132P1", type: "SKKT42/16E *", notes: "" },
            { description: "Power interface board", quantity: 2, code: "3ADT306100R1", type: "SDCS-PIN-11", notes: "DCF501,502, DCF 601, 602 (1)" },
            { description: "Semiconductor fuses", quantity: 3, code: "DCZ9838791P1", type: "170M1566", notes: "" },
            { description: "Cooling fan", quantity: 4, code: "DCA0017670P1", type: "CN52B2", notes: "" }
        ],
        "4Q": [
            { description: "Thyristor modules", quantity: 3, code: "DCA0011132P1", type: "SKKT42/16E *", notes: "" },
            { description: "Power interface board", quantity: 2, code: "3ADT306100R1", type: "SDCS-PIN-11", notes: "DCF501,502, DCF 601, 602 (1)" },
            { description: "Semiconductor fuses", quantity: 3, code: "DCZ9838791P1", type: "170M1566", notes: "" },
            { description: "Cooling fan", quantity: 1, code: "DCA0017670P1", type: "CN52B2", notes: "" }]
    },
    "50A (600V)": {
        "2Q": [
            { description: "Thyristor modules", quantity: 3, code: "DCA0011906P1", type: "SKKT57/20E *", notes: "" },
            { description: "Power interface board", quantity: 4, code: "3BSE005716R1", type: "SDCS-PIN-12", notes: "" },
            { description: "Semiconductor fuses", quantity: 2, code: "DCZ9838791P1", type: "170M1566", notes: "" },
            { description: "Cooling fan", quantity: 1, code: "DCA0017670P1", type: "CN52B2", notes: "" }
        ],
        "4Q": [
            { description: "Thyristor modules", quantity: 2, code: "DCA001132P1", type: "SKKT42/16E *", notes: "" },
            { description: "Power interface board", quantity: 1, code: "3ADT306100R1", type: "SDCS-PIN-11", notes: "DCF501,502, DCF 601, 602 (1)" },
            { description: "Semiconductor fuses", quantity: 1, code: "DCZ9838791P1", type: "170M1566", notes: "" },
            { description: "Cooling fan", quantity: 1, code: "DCA0017670P1", type: "CN52B2", notes: "" }]
    },
    "75A (400V-500V)": {
        "2Q": [
            { description: "Thyristor modules", quantity: 5, code: "DCA0011914P1", type: "SKKT57/16E *", notes: "" },
            { description: "Power interface board", quantity: 2, code: "3ADT306100R1", type: "SDCS-PIN-11", notes: "DCF501,502, DCF 601, 602 (1)" },
            { description: "Semiconductor fuses", quantity: 2, code: "DCA0012686P1", type: "170M1568", notes: "" },
            { description: "Cooling fan", quantity: 1, code: "DCA0017670P1", type: "CN52B2", notes: "" }
        ],
        "4Q": [
            { description: "Thyristor modules", quantity: 3, code: "DCA0011914P1", type: "SKKT57/16E *", notes: "" },
            { description: "Power interface board", quantity: 1, code: "3ADT306100R1", type: "SDCS-PIN-11", notes: "DCF501,502, DCF 601, 602 (1)" },
            { description: "Semiconductor fuses", quantity: 1, code: "DCA0012686P1", type: "170M1568", notes: "" },
            { description: "Cooling fan", quantity: 2, code: "DCA0017670P1", type: "CN52B2", notes: "" }]
    },
    "100A (400V-500V)": {
        "2Q": [
            { description: "Thyristor modules", quantity: 6, code: "DCA0011931P1", type: "SKKT106/16E *", notes: "" },
            { description: "Power interface board", quantity: 4, code: "3ADT306100R1", type: "SDCS-PIN-205B", notes: "Repl. SDCS PIN-21 and PIN205" },
            { description: "Semiconductor fuses", quantity: 2, code: "DCA0012694P1", type: "170M3815", notes: "" },
            { description: "Cooling fan", quantity: 1, code: "DCA0012678P1", type: "W2E143-AA09-252", notes: "" }
        ],
        "4Q": [
            { description: "Thyristor modules", quantity: 3, code: "DCA0011931P1", type: "SKKT106/16E *", notes: "" },
            { description: "Power interface board", quantity: 1, code: "3ADT306100R1", type: "SDCS-PIN-205B", notes: "Repl. SDCS PIN-21 and PIN205" },
            { description: "Semiconductor fuses", quantity: 3, code: "DCA0012694P1", type: "170M3815", notes: "" },
            { description: "Cooling fan", quantity: 1, code: "DCA0012678P1", type: "W2E143-AA09-25", notes: "" }]
    },
    "110A (400V-500V)": {
        "2Q": [
            { description: "Thyristor modules", quantity: 1, code: "DCA0011922P1", type: "SKKT72/20E *", notes: "" },
            { description: "Power interface board", quantity: 2, code: "3ADT312500R2", type: "SDCS-PIN-206B", notes: "Repl. SDCS PIN-23 and PIN206" },
            { description: "Semiconductor fuses", quantity: 3, code: "DCA0012694P1", type: "170M3815", notes: "" },
            { description: "Cooling fan", quantity: 4, code: "DCA0012678P1", type: "W2E143-AA09-252", notes: "" }
        ],
        "4Q": [
            { description: "Thyristor modules", quantity: 2, code: "DCA0011922P1", type: "SKKT72/20E *", notes: "" },
            { description: "Power interface board", quantity: 5, code: "3ADT312500R2", type: "SDCS-PIN-206B", notes: "Repl. SDCS PIN-23 and PIN206" },
            { description: "Semiconductor fuses", quantity: 3, code: "DCA0012694P1", type: "170M3815", notes: "" },
            { description: "Cooling fan", quantity: 4, code: "DCA0012678P1", type: "W2E143-AA09-25", notes: "" }]
    },
    "140A (400V-500V)": {
        "2Q": [
            { description: "Thyristor modules", quantity: 4, code: "DCA0011931P1", type: "SKKT106/16E *", notes: "" },
            { description: "Power interface board", quantity: 2, code: "3ADT312500R1", type: "SDCS-PIN-205B", notes: "Repl. SDCS PIN-21 and PIN205" },
            { description: "Semiconductor fuses", quantity: 3, code: "DCA0012694P1", type: "170M3815", notes: "" },
            { description: "Cooling fan", quantity: 1, code: "DCA0012678P1", type: "W2E143-AA09-25", notes: "" }
        ],
        "4Q": [
            { description: "Thyristor modules", quantity: 3, code: "DCA0011931P1", type: "SKKT106/16E *", notes: "" },
            { description: "Power interface board", quantity: 1, code: "3ADT312500R1", type: "SDCS-PIN-205B", notes: "Repl. SDCS PIN-21 and PIN205" },
            { description: "Semiconductor fuses", quantity: 2, code: "DCA0012694P1", type: "170M3815", notes: "" },
            { description: "Cooling fan", quantity: 2, code: "DCA0012678P1", type: "W2E143-AA09-25", notes: "" }]
    },
};

const converterSelect = document.getElementById('converterSelect');
const qSelect = document.getElementById('qSelect');
const partsTableBody = document.querySelector('#partsTable tbody');

Object.keys(converterData).forEach(key => {
    const option = document.createElement('option');
    option.value = key;
    option.textContent = key;
    converterSelect.appendChild(option);
});

function updateTable() {
    const type = converterSelect.value;
    const qType = qSelect.value;
    const parts = converterData[type][qType];

    partsTableBody.innerHTML = "";
    parts.forEach(part => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${part.description}</td>
          <td>${part.quantity}</td>
          <td>${part.code}</td>
          <td>${part.type}</td>
          <td>${part.notes}</td>
        `;
        partsTableBody.appendChild(row);
    });
}

converterSelect.addEventListener('change', updateTable);
qSelect.addEventListener('change', updateTable);

window.onload = updateTable;