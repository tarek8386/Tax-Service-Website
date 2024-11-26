const uploadBtn = document.getElementById("upload-btn");
const fileInput = document.getElementById("file-upload");
const uploadArea = document.getElementById("upload-area");
const uploadedFilesList = document.getElementById("uploaded-files-list");
const containerTitle = document.querySelector(".container-title");

// Click to trigger file input
uploadArea.addEventListener("click", function () {
  fileInput.click(); // Trigger the hidden file input
});

// Handle file input change (for click upload)
fileInput.addEventListener("change", function () {
  handleFileUpload(this.files);
});

// Drag and Drop functionality
uploadArea.addEventListener("dragover", (e) => {
  e.preventDefault(); // Prevent default to allow drop
  uploadArea.style.borderColor = "green"; // Change border on dragover
});

uploadArea.addEventListener("dragleave", () => {
  uploadArea.style.borderColor = "#ccc"; // Reset border on drag leave
});

uploadArea.addEventListener("drop", (e) => {
  e.preventDefault(); // Prevent default behavior (prevent file from being opened)
  uploadArea.style.borderColor = "#ccc"; // Reset border after drop
  handleFileUpload(e.dataTransfer.files); // Handle the dropped files
});

// Function to handle file uploads
function handleFileUpload(files) {
  const allowedTypes = [
    "application/pdf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document", // .docx
    "application/vnd.ms-excel", // .xls
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", // .xlsx
    "text/plain",
  ];

  for (const file of files) {
    if (allowedTypes.includes(file.type)) {
      const fileElement = document.createElement("div");
      fileElement.classList.add("uploaded-file");
      fileElement.innerHTML = `
                <span>${file.name}</span>
                <button class="close-btn" onclick="removeFile(this)">X</button>
            `;
      uploadedFilesList.appendChild(fileElement);
    } else {
      alert(`File type not allowed: ${file.name}`);
    }
  }

  // Hide container title after upload
  if (uploadedFilesList.children.length > 0) {
    containerTitle.style.display = "none";
  }
}

// Function to remove a file from the uploaded list
function removeFile(button) {
  button.parentElement.remove(); // Remove the file element from the DOM

  // Show the container title again if no files are uploaded
  if (uploadedFilesList.children.length === 0) {
    containerTitle.style.display = "block";
  }
}

// toggle active rate box
document.querySelectorAll(".rate-box").forEach((box) => {
  box.addEventListener("click", function () {
    // Remove active class from all rate boxes
    document
      .querySelectorAll(".rate-box")
      .forEach((item) => item.classList.remove("active-rate-box"));

    // Add active class to the clicked box
    this.classList.add("active-rate-box");

    // Update the hidden input value with the clicked box's id
    document.getElementById("rate-type").value = this.id;
  });
});

// for profile step forms
const step1 = document.getElementById("form-step-1");
const step2 = document.getElementById("form-step-2");
const step3 = document.getElementById("form-step-3");

const step1NextBtn = document.getElementById("form-step-1-next-btn");
const step2NextBtn = document.getElementById("form-step-2-next-btn");
const step2PrevBtn = document.getElementById("form-step-2-prev-btn");
const step3PrevBtn = document.getElementById("form-step-3-prev-btn");

step1NextBtn.addEventListener("click", () => {
  step1.style.display = "none";
  step2.style.display = "block";
});
step2PrevBtn.addEventListener("click", () => {
  step1.style.display = "block";
  step2.style.display = "none";
});
step2NextBtn.addEventListener("click", () => {
  step2.style.display = "none";
  step3.style.display = "block";
});
step3PrevBtn.addEventListener("click", () => {
  step3.style.display = "none";
  step2.style.display = "block";
});




// for upload profile photo

// Get the elements
const uploadContainer = document.getElementById("uploadContainer");
const photoFileInput = document.getElementById("upload-profile-photo-input");
const uploadText = document.getElementById("uploadText");
const uploadedPhotoContainer = document.getElementById(
  "uploadedPhotoContainer"
);
const uploadedImage = document.getElementById("uploadedImage");
const deleteBtn = document.getElementById("deleteBtn");

// Handle clicking on the upload container
uploadContainer.addEventListener("click", () => {
  photoFileInput.click(); // Open file dialog when container is clicked
});

// Handle file input change
photoFileInput.addEventListener("change", function (event) {
  const file = event.target.files[0];

  if (file) {
    const reader = new FileReader();

    // Show the uploaded image preview
    reader.onload = function (e) {
      uploadedImage.src = e.target.result;
      uploadedPhotoContainer.style.display = "block"; // Show image container
      uploadText.style.display = "none"; // Hide upload text
    };

    reader.readAsDataURL(file);
  }
});

// Handle drag-and-drop functionality
uploadContainer.addEventListener("dragover", (event) => {
  event.preventDefault(); // Prevent default behavior (open as a link)
  uploadContainer.style.borderColor = "green";
});

uploadContainer.addEventListener("dragleave", (event) => {
  event.preventDefault(); // Prevent default behavior (open as a link)
  uploadContainer.style.borderColor = "#ccc";

});


uploadContainer.addEventListener("drop", (event) => {
  event.preventDefault();
  uploadContainer.style.borderColor = "#ccc";
  const file = event.dataTransfer.files[0];

  if (file) {
    photoFileInput.files = event.dataTransfer.files; // Update file input
    const reader = new FileReader();

    // Show the uploaded image preview
    reader.onload = function (e) {
      uploadedImage.src = e.target.result;
      uploadedPhotoContainer.style.display = "block"; // Show image container
      uploadText.style.display = "none"; // Hide upload text
    };

    reader.readAsDataURL(file);
  }
});

// Handle delete button click
deleteBtn.addEventListener("click", (event) => {
  event.stopPropagation();
  photoFileInput.value = "";
  uploadedImage.src = "";
  uploadedPhotoContainer.style.display = "none";
  uploadText.style.display = "block";
});



// upload service profile photo
// for upload profile photo

// Get the elements
const serviceUploadContainer = document.getElementById("service-uploadContainer");
const servicePhotoFileInput = document.getElementById("service-upload-profile-photo-input");
const serviceUploadText = document.getElementById("service-uploadText");
const serviceUploadedPhotoContainer = document.getElementById(
  "service-uploadedPhotoContainer"
);
const serviceUploadedImage = document.getElementById("service-uploadedImage");
const serviceDeleteBtn = document.getElementById("service-deleteBtn");

// Handle clicking on the upload container
serviceUploadContainer.addEventListener("click", () => {
  servicePhotoFileInput.click(); // Open file dialog when container is clicked
});

// Handle file input change
servicePhotoFileInput.addEventListener("change", function (event) {
  const file = event.target.files[0];

  if (file) {
    const reader = new FileReader();

    // Show the uploaded image preview
    reader.onload = function (e) {
      serviceUploadedImage.src = e.target.result;
      serviceUploadedPhotoContainer.style.display = "block"; // Show image container
      serviceUploadText.style.display = "none"; // Hide upload text
    };

    reader.readAsDataURL(file);
  }
});

// Handle drag-and-drop functionality
serviceUploadContainer.addEventListener("dragover", (event) => {
  event.preventDefault(); // Prevent default behavior (open as a link)
  serviceUploadContainer.style.borderColor = "green";
});

serviceUploadContainer.addEventListener("dragleave", (event) => {
  event.preventDefault(); // Prevent default behavior (open as a link)
  serviceUploadContainer.style.borderColor = "#ccc";

});


serviceUploadContainer.addEventListener("drop", (event) => {
  event.preventDefault();
  serviceUploadContainer.style.borderColor = "#ccc";
  const file = event.dataTransfer.files[0];

  if (file) {
    servicePhotoFileInput.files = event.dataTransfer.files; // Update file input
    const reader = new FileReader();

    // Show the uploaded image preview
    reader.onload = function (e) {
      serviceUploadedImage.src = e.target.result;
      serviceUploadedPhotoContainer.style.display = "block"; // Show image container
      serviceUploadText.style.display = "none"; // Hide upload text
    };

    reader.readAsDataURL(file);
  }
});

// Handle delete button click
serviceDeleteBtn.addEventListener("click", (event) => {
  event.stopPropagation();
  servicePhotoFileInput.value = "";
  serviceUploadedImage.src = "";
  serviceUploadedPhotoContainer.style.display = "none";
  serviceUploadText.style.display = "block";
});




// for select items
// Get the container for selected items
const selectedItemsContainer = document.querySelector('.service-categories-selected-items');

// Get all items in the modal
const modalItems = document.querySelectorAll('.service-categories-modal .item');

// Function to add item to the selected container and mark it as active
function addItemToSelected(item, itemId, itemText) {
  // Create a new div for the selected item
  const selectedItem = document.createElement('div');
  selectedItem.className = 'selected-item';
  selectedItem.id = 'selected-' + itemId;

  // Add the item text with a remove button
  selectedItem.innerHTML = `
    <span>${itemText}</span> <span class="remove-btn">×</span>
  `;

  // Append the selected item to the container
  selectedItemsContainer.appendChild(selectedItem);

  // Add active class to the item in the modal
  item.classList.add('active');

  // Add event listener to the remove button
  selectedItem.querySelector('.remove-btn').addEventListener('click', function() {
    selectedItem.remove(); // Remove the item on clicking the remove button

    // Remove the active class when the item is removed
    item.classList.remove('active');
  });
}

// Add click event listeners to all modal items
modalItems.forEach(item => {
  item.addEventListener('click', function() {
    const itemId = item.id;
    const itemText = item.textContent;

    // Check if the item is already selected
    if (!document.getElementById('selected-' + itemId)) {
      addItemToSelected(item, itemId, itemText);
    }
  });
});



// for categories modal
document.addEventListener('DOMContentLoaded', function () {
    const openModalButton = document.querySelector('.service-categories-btn');
    const modalContainer = document.querySelector('.service-categories-modal');

    openModalButton.addEventListener('click', function () {
        modalContainer.classList.toggle('open');
    });

    // Close modal if clicked outside of it
    document.addEventListener('click', function (event) {
        if (!modalContainer.contains(event.target) &&
            !openModalButton.contains(event.target)) {
            modalContainer.classList.remove('open');

        }
    });
});



// // select availability
const checkboxes = document.querySelectorAll('.form-check-input');

  // Add event listeners to each checkbox
  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function() {
      const parentItem = checkbox.closest('.item'); // Find the parent .item div
      const availableContent = parentItem.querySelector('.available-content');
      const unavailableContent = parentItem.querySelector('.unavailable-content');

      if (checkbox.checked) {
        // Show available content and hide unavailable content when checked
        availableContent.style.display = 'flex';
        unavailableContent.style.display = 'none';
      } else {
        // Show unavailable content and hide available content when unchecked
        availableContent.style.display = 'none';
        unavailableContent.style.display = 'block';
      }
    });

    // Trigger initial state based on the checkbox being pre-checked or unchecked
    checkbox.dispatchEvent(new Event('change'));
  });
