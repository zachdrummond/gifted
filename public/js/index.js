$(document).ready(function () {
  // Sets up Foundation JavaScript
  $(document).foundation();

  // LOGIN PAGE
  //=================================================================

  // Login Button Event Listener
  $("#loginBtn").on("click", function (event) {
    event.preventDefault();

    // Retrieves the User's entered Email
    userEmail = $("#userEmail").val().trim();

    if (!userEmail) {
      return;
    }
    // AJAX Call - Checks to see if the user's account is valid
    $.get("/api/user/" + userEmail)
      .then(function (response) {
        window.name = response[0].id;
        console.log(window.name);
        $("#userEmail").val("");
      })
      .catch(function (error) {
        console.log(error);
      });
  });

  // Received Gifts Image Event Listener
  $(".giftsReceivedImg").on("click", function (event) {
    console.log(window.name);
    $.get("/received", { userId: window.name })
      .then(function (response) {
        window.location.href = "/received";
      })
      .catch(function (error) {
        console.log(error);
      });
  });

  // Sent Gifts Image Event Listener
  $(".giftsSentImg").on("click", function (event) {
    window.location.href = "/sent";
  });

  // SIGN UP PAGE
  //=================================================================
  // Create Account Button Event Listener
  $("#createAccountBtn").on("click", function (event) {
    event.preventDefault();

    // Retrieves the User's entered Name and Email
    const newUser = {
      name: $("#userName").val().trim(),
      email: $("#userEmail").val().trim(),
    };

    if (!newUser.name || !newUser.email) {
      return;
    }

    // AJAX Call - Creates a new User Account
    $.post("/api/add/user", newUser)
      .then(function (response) {
        window.location.href = "/";
      })
      .catch(function (error) {
        console.log(error);
      });
  });

  // FUNCTIONS for RECEIVED and SENT GIFTS PAGE
  //=================================================================
  // Deletes a gift in the database
  function deleteGift(type, id) {
    $.ajax(`/api/${type}/${id}`, {
      type: "DELETE",
    })
      .then(() => {})
      .catch(function (error) {
        console.log(error);
      });
  }

  // Changes a row to forms for the user to edit
  function editGifts(tableRow) {
    for (let i = 0; i < tableRow.length; i++) {
      tableRow[i].children[0].setAttribute("class", "displayNone");
      tableRow[i].children[1].removeAttribute("class");
    }
    tableRow[5].children[0].setAttribute("class", "displayNone");
    for (let j = 1; j < 5; j++) {
      tableRow[5].children[j].removeAttribute("class");
    }
  }

  // Updates a gift in the database
  function updateGift(type, editedGift) {
    $.ajax(`/api/edit/${type}`, { type: "PUT", data: editedGift })
      .then(() => {
        location.reload();
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  // RECEIVED and SENT GIFTS PAGE
  //=================================================================
  // Received Gifts Order Submit Button Event Listener
  $("#orderGiftsReceived").on("click", function (event) {
    event.preventDefault();
    window.location.href = "/received/" + $("#orderReceived").val();
  });

  // Sent Gifts Order Submit Button Event Listener
  $("#orderGiftsSent").on("click", function (event) {
    event.preventDefault();
    window.location.href = "/sent/" + $("#orderSent").val();
  });

  // Edit Button Event Listener
  $(".editbtn").on("click", function (event) {
    if ($(this).text() === "edit") {
      //Changes Edit Button to Submit
      $(this).text("submit");

      const tableRow = $(this).parent().siblings();
      editGifts(tableRow);
    } else if ($(this).text() === "submit") {
      //Changes Submit Button to Edit
      $(this).text("edit");

      const id = $(this).data("id");
      let type = "";
      let editedGift = {};
      console.log(window.name);

      // Creates a New Received Gift
      if (location.pathname === "/received") {
        editedGift = {
          id: id,
          user_id: window.name,
          senderName: $("#editedSender" + id).val(),
          senderAddress: $("#editedAddress" + id).val(),
          giftReceived: $("#editedGift" + id).val(),
          occasion: $("#editedOccasion" + id).val(),
          dateReceived: $("#editedDate" + id).val(),
          thankYou: $('input[name="thankYou"]:checked').val(),
        };
        type = "received";
      } else if (location.pathname === "/sent") {
        // Creates a New Sent Gift
        editedGift = {
          id: id,
          user_id: window.name,
          receiverName: $("#editedReceiver" + id).val(),
          receiverAddress: $("#editedAddress" + id).val(),
          giftSent: $("#editedGift" + id).val(),
          occasion: $("#editedOccasion" + id).val(),
          dateSent: $("#editedDate" + id).val(),
          cost: $("#editedCost" + id).val(),
        };
        type = "sent";
      }
      updateGift(type, editedGift);
    }
  });

  // Delete Button Event Listener
  $(".deletebtn").on("click", function () {
    const id = $(this).data("id");

    if (location.pathname === "/received") {
      deleteGift("received", id);
    } else if (location.pathname === "/sent") {
      deleteGift("sent", id);
    }
  });

  //reload page on closing of modal
  $(".modalClose").on("click", function () {
    location.reload();
  });

  // FUNCTIONS for ADD GIFTS PAGE
  //=================================================================
  // Adds a Gift to the Database
  function addGift(type, newGift) {
    $.post(`/api/add/${type}`, newGift)
      .then(() => {
        console.log("Post Route Worked");
        window.location.href = `/${type}`;
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  // ADD GIFTS PAGES
  //=================================================================
  // Add Gift Button Event Listener
  $(".addGift").on("click", function (event) {
    event.preventDefault();
    let type = "";
    let newGift = {};

    console.log(window.name);

    if (location.pathname === "/add/received") {
      // Creates a Received Gift
      newGift = {
        user_id: window.name,
        senderName: $("#senderName").val(),
        senderAddress: $("#senderAddress").val(),
        giftReceived: $("#giftReceived").val(),
        occasion: $("#occasionReceived").val(),
        dateReceived: $("#dateReceived").val(),
        thankYou: $('input[name="thankYou"]:checked').val(),
      };

      if (
        !newGift.senderName ||
        !newGift.senderAddress ||
        !newGift.giftReceived ||
        !newGift.occasion ||
        !newGift.dateReceived ||
        !newGift.thankYou
      ) {
        return;
      }
      type = "received";
    } else if (location.pathname === "/add/sent") {
      // Creates a Received Gift
      newGift = {
        user_id: window.name,
        receiverName: $("#receiverName").val(),
        receiverAddress: $("#receiverAddress").val(),
        giftSent: $("#giftSent").val(),
        occasion: $("#occasionSent").val(),
        dateSent: $("#dateSent").val(),
        cost: $("#cost").val(),
      };

      if (
        !newGift.receiverName ||
        !newGift.receiverAddress ||
        !newGift.giftSent ||
        !newGift.occasion ||
        !newGift.dateSent ||
        !newGift.cost
      ) {
        return;
      }
      type = "sent";
    }
    addGift(type, newGift);
  });
});
