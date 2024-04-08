export const FLAG = false;

export let idBlackCharPairs = [
  { id: "ibr", value: "&#9820;" },
  { id: "ibk", value: "&#9822;" },
  { id: "ibb", value: "&#9821;" },
  { id: "ibq", value: "&#9819;" },
  { id: "ibking", value: "&#9818;" },
  { id: "ibb2", value: "&#9821;" },
  { id: "ibk2", value: "&#9822;" },
  { id: "ibr2", value: "&#9820;" },
];

export let idWhiteCharValuePairs = [
  { id: "iwr", value: "&#9814;" },
  { id: "iwk", value: "&#9816;" },
  { id: "iww", value: "&#9815;" },
  { id: "iwq", value: "&#9813;" },
  { id: "iwking", value: "&#9812;" },
  { id: "iww2", value: "&#9815;" },
  { id: "iwk2", value: "&#9816;" },
  { id: "iwr2", value: "&#9814;" },
];

// Define an array of black pawn IDs
export let iblackPawns = [
  "black-pawn1",
  "black-pawn2",
  "black-pawn3",
  "black-pawn4",
  "black-pawn5",
  "black-pawn6",
  "black-pawn7",
  "black-pawn8",
];
export let iwhitePawns = [
  "white-pawn1",
  "white-pawn2",
  "white-pawn3",
  "white-pawn4",
  "white-pawn5",
  "white-pawn6",
  "white-pawn7",
  "white-pawn8",
];

export let containerIDs = [
  ["wbox1", "bbox1", "wbox2", "bbox2", "wbox3", "bbox3", "wbox4", "bbox4"],
  ["bbox5", "wbox5", "bbox6", "wbox6", "bbox7", "wbox7", "bbox8", "wbox8"],
  [
    "wbox9",
    "bbox9",
    "wbox10",
    "bbox10",
    "wbox11",
    "bbox11",
    "wbox12",
    "bbox12",
  ],
  [
    "bbox13",
    "wbox13",
    "bbox14",
    "wbox14",
    "bbox15",
    "wbox15",
    "bbox16",
    "wbox16",
  ],
  [
    "wbox17",
    "bbox17",
    "wbox18",
    "bbox18",
    "wbox19",
    "bbox19",
    "wbox20",
    "bbox20",
  ],
  [
    "bbox21",
    "wbox21",
    "bbox22",
    "wbox22",
    "bbox23",
    "wbox23",
    "bbox24",
    "wbox24",
  ],
  [
    "wbox25",
    "bbox25",
    "wbox26",
    "bbox26",
    "wbox27",
    "bbox27",
    "wbox28",
    "bbox28",
  ],
  [
    "bbox29",
    "wbox29",
    "bbox30",
    "wbox30",
    "bbox31",
    "wbox31",
    "bbox32",
    "wbox32",
  ],
];
export let chessboard = [
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
];
console.log("initial zeros valued ", chessboard);
console.log(typeof chessboard);

export const blackPieces = [
  "&#9820;", // Black Rook
  "&#9822;", // Black Knight
  "&#9821;", // Black Bishop
  "&#9819;", // Black Queen
  "&#9818;", // Black King
  "&#9821;", // Black Bishop
  "&#9822;", // Black Knight
  "&#9820;", // Black Rook
  "&#9823;", // Black Pawn
];

export const whitePieces = [
  "&#9814;", // White Rook
  "&#9816;", // White Knight
  "&#9815;", // White Bishop
  "&#9813;", // White Queen
  "&#9812;", // White King
  "&#9815;", // White Bishop
  "&#9816;", // White Knight
  "&#9814;", // White Rook
  "&#9817;", // White Pawn
];

export const blackPiecesValues = [
  { piece: "&#9820;", priority: 0.9 }, // Black Rook
  { piece: "&#9822;", priority: 0.7 }, // Black Knight
  { piece: "&#9821;", priority: 0.7 }, // Black Bishop
  { piece: "&#9819;", priority: 0.8 }, // Black Queen
  { piece: "&#9818;", priority: 1.0 }, // Black King
  { piece: "&#9821;", priority: 0.7 }, // Black Bishop
  { piece: "&#9822;", priority: 0.7 }, // Black Knight
  { piece: "&#9820;", priority: 0.9 }, // Black Rook
  { piece: "&#9823;", priority: 0.5 }, // Black Pawn
];

export const whitePiecesValues = [
  { piece: "&#9814;", priority: 0.9 }, // White Rook
  { piece: "&#9816;", priority: 0.7 }, // White Knight
  { piece: "&#9815;", priority: 0.7 }, // White Bishop
  { piece: "&#9813;", priority: 0.8 }, // White Queen
  { piece: "&#9812;", priority: 1.0 }, // White King
  { piece: "&#9815;", priority: 0.7 }, // White Bishop
  { piece: "&#9816;", priority: 0.7 }, // White Knight
  { piece: "&#9814;", priority: 0.9 }, // White Rook
  { piece: "&#9817;", priority: 0.5 }, // White Pawn
];

export let initial_Black_Pawn_Position =
  // BLACK SIDE PAWNS COLLECTIONS
  ["bbox5", "wbox5", "bbox6", "wbox6", "bbox7", "wbox7", "bbox8", "wbox8"];

export let initial_White_Pawn_Position = [
  // WHITE SIDE PAWNS COLLECTIONS
  "wbox25",
  "bbox25",
  "wbox26",
  "bbox26",
  "wbox27",
  "bbox27",
  "wbox28",
  "bbox28",
];

// Mapping between bbox elements and corresponding wbox elements
export let initial_box_mapping_for_black_pawns = {
  bbox5: ["wbox9", "bbox13"],
  wbox5: ["bbox9", "wbox13"],
  bbox6: ["wbox10", "bbox14"],
  wbox6: ["bbox10", "wbox14"],
  bbox7: ["wbox11", "bbox15"],
  wbox7: ["bbox11", "wbox15"],
  bbox8: ["wbox12", "bbox16"],
  wbox8: ["bbox12", "wbox16"],
  // Add more mappings as needed
};

export let initial_box_mapping_for_white_pawns = {
  wbox25: ["bbox21", "bbox17"],
  bbox25: ["wbox21", "wbox17"],
  wbox26: ["bbox22", "bbox18"],
  bbox26: ["wbox22", "wbox18"],
  wbox27: ["bbox23", "bbox19"],
  bbox27: ["wbox23", "wbox19"],
  wbox28: ["bbox24", "bbox20"],
  bbox28: ["wbox24", "wbox20"],
};

export let initial_BlackSideOne_GapForPawns = [
  "wbox9",
  "bbox9",
  "wbox10",
  "bbox10",
  "wbox11",
  "bbox11",
  "wbox12",
  "bbox12",
];

export let initial_BlackSide_TwoGapForPawns = [
  "wbox9",
  "bbox9",
  "wbox10",
  "bbox10",
  "wbox11",
  "bbox11",
  "wbox12",
  "bbox12",
  "bbox13",
  "wbox13",
  "bbox14",
  "wbox14",
  "bbox15",
  "wbox15",
  "bbox16",
  "wbox16",
];

export let initial_WhiteSideOne_GapForPawns = [
  "wbox17",
  "bbox17",
  "wbox18",
  "bbox18",
  "wbox19",
  "bbox19",
  "wbox20",
  "bbox20",
];

export let initial_WhiteSide_TwoGapForPawns = [
  "wbox17",
  "bbox17",
  "wbox18",
  "bbox18",
  "wbox19",
  "bbox19",
  "wbox20",
  "bbox20",
  "bbox21",
  "wbox21",
  "bbox22",
  "wbox22",
  "bbox23",
  "wbox23",
  "bbox24",
  "wbox24",
];

// Iterate over each object and set ID and value for black pieces
idBlackCharPairs.forEach(function (pair) {
  let element = document.getElementById(pair.id);
  if (element) {
    element.innerHTML = pair.value;
  }
});

// Iterate over each object and set ID and value for white pieces
idWhiteCharValuePairs.forEach(function (pair) {
  let element = document.getElementById(pair.id);
  if (element) {
    element.innerHTML = pair.value;
  }
});

// Iterate over each black pawn ID and set its innerHTML to "&#9823;"
iblackPawns.forEach((pawnId) => {
  document.getElementById(pawnId).innerHTML = "&#9823;";
});

iwhitePawns.forEach((pawnId) => {
  document.getElementById(pawnId).innerHTML = "&#9817;";
});

export let clickedBlackPawnId; // Define a global variable to store the clicked ID

initial_Black_Pawn_Position.forEach(function (id) {
  let element = document.getElementById(id);
  if (element) {
    element.addEventListener("click", function () {
      clickedBlackPawnId = id; // Update the value of clickedId with the clicked ID
      // alert("ID " + clickedBlackPawnId + " is clicked!");
    });
  } else {
    console.error("Element not found with ID: " + id);
  }
});

export let clickedWhitePawnId; // Define a global variable to store the clicked ID

initial_White_Pawn_Position.forEach(function (id) {
  let element = document.getElementById(id);
  if (element) {
    element.addEventListener("click", function () {
      clickedWhitePawnId = id; // Update the value of clickedId with the clicked ID
      // alert("ID " + clickedWhitePawnId + " is clicked!");
    });
  } else {
    console.error("Element not found with ID: " + id);
  }
});

// Get the span element with the ID 'b9'
export const spanElement = document.getElementById("white-pawn1");

// Check if the span element has any text content
if (spanElement.textContent.trim() !== "") {
  // Trigger an alert if there is text content
  console.log("There is a value inside the span element with ID ", spanElement);
}

// Print indices and values of each element in the 2D array
for (let i = 0; i < chessboard.length; i++) {
  for (let j = 0; j < chessboard[i].length; j++) {
    // console.log(`Index (${i}, ${j}): ${chessboard[i][j]}`);
  }
}

// Function to print the values residing inside HTML nodes with given IDs
export function printNodeValues(containerIDs) {
  containerIDs.forEach((rowIDs) => {
    rowIDs.forEach((id) => {
      const node = document.getElementById(id);
      if (node) {
        // console.log(node.innerText);
      }
    });
  });
}

// Call the function with the containerIDs array
printNodeValues(containerIDs);

// Chess Board Value Printer
export function printSpanValues(containerIDs) {
  containerIDs.forEach((rowIDs) => {
    rowIDs.forEach((id) => {
      const node = document.getElementById(id);
      if (node) {
        const span = node.querySelector("span");
        if (span) {
          // console.log(`Value inside ${id}: ${span.innerText}`);
        }
      }
    });
  });
}

// Checking pawns
export function first_white_pawn_clicking(pawnIds) {
  pawnIds.forEach(function (pawnId) {
    var pawnElement = document.getElementById(pawnId);
    if (pawnElement) {
      pawnElement.addEventListener("click", function () {
        // Show alert when the pawn is clicked
        // alert("Pawn ID: " + pawnId);
      });
    } else {
      console.error("Pawn element not found with ID: " + pawnId);
    }
  });
}
// }

// export let clickedWhitePawn = false;
// export let clickedBlackPawn = false;
// export let blackTurn = false;

// // Function to add click event listeners to black pawns
// export function show_Step_For_Pawn_Initially(pawnIds) {
//   if (pawnIds === initial_White_Pawn_Position) {
//     alert("white one called");
//     pawnIds.forEach(function (pawnId) {
//       var pawnElement = document.getElementById(pawnId);
//       if (pawnElement) {
//         pawnElement.addEventListener("click", function () {
//           if (clickedWhitePawn) {
//             console.log("Another white pawn cannot be clicked");
//             return; // Exit the function if a white pawn has already been clicked
//           }
//           // Show alert when a white pawn is clicked
//           // alert("White pawn showing steps: " + pawnId);
//           let matchedValues;
//           if (initial_box_mapping_for_white_pawns.hasOwnProperty(pawnId)) {
//             matchedValues = initial_box_mapping_for_white_pawns[pawnId];
//             console.log("for white pawns steps1-->", matchedValues);
//             firstMove(matchedValues, pawnId, matchedValues);
//           } else {
//             // alert("No match found for pawn ID: " + pawnId);
//             return; // Exit the function if no match is found
//           }
//           clickedWhitePawn = true;
//           blackTurn = true; // Set blackTurn to true for black's turn
//         });
//       } else {
//         console.error("Pawn element not found with ID: " + pawnId);
//       }
//     });
//   } else if (pawnIds === initial_Black_Pawn_Position) {
//     alert("black one called");
//   } else {
//     console.error("Invalid pawnIds");
//   }
// }

// function firstMove(possibleMove, currentPawnPosition, stepsArray) {
//   // Highlight the squares where the pawn can move
//   possibleMove.forEach(function (value) {
//     let element = document.getElementById(value);
//     let currentSpan = document.getElementById(currentPawnPosition);
//     const span = currentSpan.querySelector("span");
//     const spanValue = span.innerHTML; // Use innerHTML to get the content of the span

//     if (element) {
//       element.classList.add("highLightPawn");

//       // Add click event listener to highlighted squares
//       element.addEventListener("click", function () {
//         console.log("Square clicked: " + value);

//         if (currentSpan) {
//           if (span) {
//             span.innerHTML = ""; // Remove the content of the span
//             span.removeAttribute("id"); // Remove the id attribute of the span
//           } else {
//             console.error("Span element not found inside currentSpan");
//           }
//         } else {
//           console.error("currentSpan element not found");
//         }

//         document.getElementById(value).innerHTML = spanValue; // Set the content of the clicked square to the span value
//         document.getElementById(value).classList.remove("highLightPawn");
//         // Loop through stepsArray and remove the 'highLightPawn' class from corresponding elements
//         stepsArray.forEach(function (id) {
//           const element = document.getElementById(id);
//           if (element) {
//             // Remove the 'highLightPawn' class
//             element.classList.remove("highLightPawn");

//             // Remove event listeners
//             const clonedElement = element.cloneNode(true);
//             element.parentNode.replaceChild(clonedElement, element);
//             console.log("White move is completed");
//           } else {
//             console.error("Element not found with ID:", id);
//           }
//         });
//       });
//     } else {
//       console.error("Element not found with ID: " + value);
//     }
//   });
//   clickedWhitePawn = true;
//   blackTurn = true;
// }

// show_Step_For_Pawn_Initially(initial_White_Pawn_Position);


// // Function to add click event listeners to black pawns
// export function show_Step_For_PawnBlack_Initially(pawnIds) {
//   if (pawnIds === initial_Black_Pawn_Position) {
//     alert("black one called");
//     pawnIds.forEach(function (pawnId) {
//       var pawnElement = document.getElementById(pawnId);
//       if (pawnElement) {
//         pawnElement.addEventListener("click", function () {
//           if (clickedBlackPawn) {
//             console.log("Another black pawn cannot be clicked");
//             return; // Exit the function if a black pawn has already been clicked
//           }
//           // Show alert when a black pawn is clicked
//           // alert("Black pawn showing steps: " + pawnId);
//           let matchedValues;
//           if (initial_box_mapping_for_black_pawns.hasOwnProperty(pawnId)) {
//             matchedValues = initial_box_mapping_for_black_pawns[pawnId];
//             console.log("for black pawns steps1-->", matchedValues);
//             firstBlackMove(matchedValues, pawnId, matchedValues);
//           } else {
//             // alert("No match found for pawn ID: " + pawnId);
//             return; // Exit the function if no match is found
//           }
//           clickedBlackPawn = true; // Set clickedBlackPawn to true for black's turn
//         });
//       } else {
//         console.error("Pawn element not found with ID: " + pawnId);
//       }
//     });
//   } else if (pawnIds === initial_White_Pawn_Position) {
//     alert("white one called");
//   } else {
//     console.error("Invalid pawnIds");
//   }
// }

// function firstBlackMove(possibleMove, currentPawnPosition, stepsArray) {
//   // Highlight the squares where the pawn can move
//   possibleMove.forEach(function (value) {
//     let element = document.getElementById(value);
//     let currentSpan = document.getElementById(currentPawnPosition);
//     const span = currentSpan.querySelector("span");
//     const spanValue = span.innerHTML;

//     if (element) {
//       element.classList.add("highLightPawn");
//       element.addEventListener("click", function () {
//         console.log("Square clicked: " + value);
//         if (currentSpan) {
//           if (span) {
//             span.innerHTML = "";
//             span.removeAttribute("id");
//           } else {
//             console.error("Span element not found inside currentSpan");
//           }
//         } else {
//           console.error("currentSpan element not found");
//         }
//         document.getElementById(value).innerHTML = spanValue;
//         document.getElementById(value).classList.remove("highLightPawn");
//         stepsArray.forEach(function (id) {
//           const element = document.getElementById(id);
//           if (element) {
//             element.classList.remove("highLightPawn");
//             const clonedElement = element.cloneNode(true);
//             element.parentNode.replaceChild(clonedElement, element);
//             console.log("Black move is completed");
//           } else {
//             console.error("Element not found with ID:", id);
//           }
//         });
//       });
//     } else {
//       console.error("Element not found with ID: " + value);
//     }
//   });
//   clickedBlackPawn = true;
//   blackTurn = false;
// }

// // Call the function for initializing click event listeners for black pawns
// show_Step_For_PawnBlack_Initially(initial_Black_Pawn_Position);


export let clickedWhitePawn = false;
export let clickedBlackPawn = false;
export let blackTurn = false;

// Function to add click event listeners to black pawns
export function show_Step_For_Pawn_Initially(pawnIds) {
  if (pawnIds === initial_White_Pawn_Position) {
    alert("white one called");
    pawnIds.forEach(function (pawnId) {
      var pawnElement = document.getElementById(pawnId);
      if (pawnElement) {
        pawnElement.addEventListener("click", function () {
          if (blackTurn) {
            console.log("It's black's turn. White cannot move now.");
            return; // Exit the function if it's not white's turn
          }
          if (clickedWhitePawn) {
            console.log("Another white pawn cannot be clicked");
            return; // Exit the function if a white pawn has already been clicked
          }
          // Show alert when a white pawn is clicked
          // alert("White pawn showing steps: " + pawnId);
          let matchedValues;
          if (initial_box_mapping_for_white_pawns.hasOwnProperty(pawnId)) {
            matchedValues = initial_box_mapping_for_white_pawns[pawnId];
            console.log("for white pawns steps1-->", matchedValues);
            firstMove(matchedValues, pawnId, matchedValues);
          } else {
            // alert("No match found for pawn ID: " + pawnId);
            return; // Exit the function if no match is found
          }
          clickedWhitePawn = true;
          blackTurn = true; // Set blackTurn to true for black's turn
        });
      } else {
        console.error("Pawn element not found with ID: " + pawnId);
      }
    });
  } else if (pawnIds === initial_Black_Pawn_Position) {
    alert("black one called");
  } else {
    console.error("Invalid pawnIds");
  }
}

// Function to add click event listeners to black pawns
export function show_Step_For_PawnBlack_Initially(pawnIds) {
  if (pawnIds === initial_Black_Pawn_Position) {
    alert("black one called");
    pawnIds.forEach(function (pawnId) {
      var pawnElement = document.getElementById(pawnId);
      if (pawnElement) {
        pawnElement.addEventListener("click", function () {
          if (!blackTurn) {
            console.log("It's white's turn. Black cannot move now.");
            return; // Exit the function if it's not black's turn
          }
          if (clickedBlackPawn) {
            console.log("Another black pawn cannot be clicked");
            return; // Exit the function if a black pawn has already been clicked
          }
          // Show alert when a black pawn is clicked
          // alert("Black pawn showing steps: " + pawnId);
          let matchedValues;
          if (initial_box_mapping_for_black_pawns.hasOwnProperty(pawnId)) {
            matchedValues = initial_box_mapping_for_black_pawns[pawnId];
            console.log("for black pawns steps1-->", matchedValues);
            firstBlackMove(matchedValues, pawnId, matchedValues);
          } else {
            // alert("No match found for pawn ID: " + pawnId);
            return; // Exit the function if no match is found
          }
          clickedBlackPawn = true; // Set clickedBlackPawn to true for black's turn
        });
      } else {
        console.error("Pawn element not found with ID: " + pawnId);
      }
    });
  } else if (pawnIds === initial_White_Pawn_Position) {
    alert("white one called");
  } else {
    console.error("Invalid pawnIds");
  }
}

// Function for white's first move
function firstMove(possibleMove, currentPawnPosition, stepsArray) {
  // Highlight the squares where the pawn can move
  possibleMove.forEach(function (value) {
    let element = document.getElementById(value);
    let currentSpan = document.getElementById(currentPawnPosition);
    const span = currentSpan.querySelector("span");
    const spanValue = span.innerHTML; // Use innerHTML to get the content of the span

    if (element) {
      element.classList.add("highLightPawn");

      // Add click event listener to highlighted squares
      element.addEventListener("click", function () {
        console.log("Square clicked: " + value);

        if (currentSpan) {
          if (span) {
            span.innerHTML = ""; // Remove the content of the span
            span.removeAttribute("id"); // Remove the id attribute of the span
          } else {
            console.error("Span element not found inside currentSpan");
          }
        } else {
          console.error("currentSpan element not found");
        }

        document.getElementById(value).innerHTML = spanValue; // Set the content of the clicked square to the span value
        document.getElementById(value).classList.remove("highLightPawn");
        // Loop through stepsArray and remove the 'highLightPawn' class from corresponding elements
        stepsArray.forEach(function (id) {
          const element = document.getElementById(id);
          if (element) {
            // Remove the 'highLightPawn' class
            element.classList.remove("highLightPawn");

            // Remove event listeners
            const clonedElement = element.cloneNode(true);
            element.parentNode.replaceChild(clonedElement, element);
            console.log("White move is completed");
          } else {
            console.error("Element not found with ID:", id);
          }
        });
      });
    } else {
      console.error("Element not found with ID: " + value);
    }
  });
  clickedWhitePawn = true;
  blackTurn = true;
}

// Function for black's first move
function firstBlackMove(possibleMove, currentPawnPosition, stepsArray) {
  // Highlight the squares where the pawn can move
  possibleMove.forEach(function (value) {
    let element = document.getElementById(value);
    let currentSpan = document.getElementById(currentPawnPosition);
    const span = currentSpan.querySelector("span");
    const spanValue = span.innerHTML;

    if (element) {
      element.classList.add("highLightPawn");
      element.addEventListener("click", function () {
        console.log("Square clicked: " + value);
        if (currentSpan) {
          if (span) {
            span.innerHTML = "";
            span.removeAttribute("id");
          } else {
            console.error("Span element not found inside currentSpan");
          }
        } else {
          console.error("currentSpan element not found");
        }
        document.getElementById(value).innerHTML = spanValue;
        document.getElementById(value).classList.remove("highLightPawn");
        stepsArray.forEach(function (id) {
          const element = document.getElementById(id);
          if (element) {
            element.classList.remove("highLightPawn");
            const clonedElement = element.cloneNode(true);
            element.parentNode.replaceChild(clonedElement, element);
            console.log("Black move is completed");
          } else {
            console.error("Element not found with ID:", id);
          }
        });
      });
    } else {
      console.error("Element not found with ID: " + value);
    }
  });
  clickedBlackPawn = true;
  blackTurn = false;
}

// Call the function for initializing click event listeners for white and black pawns
show_Step_For_Pawn_Initially(initial_White_Pawn_Position);
show_Step_For_PawnBlack_Initially(initial_Black_Pawn_Position);
