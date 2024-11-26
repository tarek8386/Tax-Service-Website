const step1 = document.getElementById('step-1');
const step2 = document.getElementById('step-2');
const step3 = document.getElementById('step-3');

const step1NextBtn = document.getElementById('step-1-next');
const step2PrevBtn = document.getElementById('step-2-prev');
const step2NextBtn = document.getElementById('step-2-next');
const step3PrevBtn = document.getElementById('step-3-prev');

step1NextBtn.addEventListener('click', ()=>{
    step1.style.display="none";
    step2.style.display="block";
})
step2PrevBtn.addEventListener('click', ()=>{
    step1.style.display="block";
    step2.style.display="none";
})
step2NextBtn.addEventListener('click', ()=>{
    step2.style.display="none";
    step3.style.display="block";
})
step3PrevBtn.addEventListener('click', ()=>{
    step3.style.display="none";
    step2.style.display="block";
})


const uploadBtn = document.getElementById('upload-btn');
const fileInput = document.getElementById('file-upload');
const uploadArea = document.getElementById('upload-area');
const uploadedFilesList = document.getElementById('uploaded-files-list');
const submitBtn = document.getElementById('submit-step-form-btn');

// Global array to store uploaded files
let uploadedFiles = [];

// Click to trigger file input
uploadArea.addEventListener('click', function() {
    fileInput.click(); // Trigger the hidden file input
});

// Handle file input change (for click upload)
fileInput.addEventListener('change', function() {
    handleFileUpload(this.files);
});

// Drag and Drop functionality
uploadArea.addEventListener('dragover', (e) => {
    e.preventDefault();  // Prevent default to allow drop
    uploadArea.style.borderColor = 'green';  // Change border on dragover
});

uploadArea.addEventListener('dragleave', () => {
    uploadArea.style.borderColor = '#ccc';  // Reset border on drag leave
});

uploadArea.addEventListener('drop', (e) => {
    e.preventDefault();  // Prevent default behavior (prevent file from being opened)
    uploadArea.style.borderColor = '#ccc';  // Reset border after drop
    handleFileUpload(e.dataTransfer.files);  // Handle the dropped files
});

// Function to handle file uploads
function handleFileUpload(files) {
    const allowedTypes = [
        "application/pdf", 
        "application/msword", 
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document", // .docx
        "application/vnd.ms-excel", // .xls
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", // .xlsx
        "text/plain"
    ];

    for (const file of files) {
        if (allowedTypes.includes(file.type)) {
            // Store the file in the global array
            uploadedFiles.push(file);

            const fileElement = document.createElement('div');
            fileElement.classList.add('uploaded-file');
            fileElement.innerHTML = `
                <span>${file.name}</span>
                <button class="close-btn" onclick="removeFile(this, '${file.name}')">X</button>
            `;
            uploadedFilesList.appendChild(fileElement);
        } else {
            console.log(`File type not allowed: ${file.name}`);
        }
    }
}

// Function to remove a file from the uploaded list
function removeFile(button, fileName) {
    // Remove the file element from the DOM
    button.parentElement.remove();

    // Remove the file from the global array by its name
    uploadedFiles = uploadedFiles.filter(file => file.name !== fileName);
}

// Log files when clicking the submit button
submitBtn.addEventListener('click', function() {
    console.log("Uploaded files:", uploadedFiles);
});


// toggle active rate box
document.querySelectorAll('.rate-box').forEach(box => {
    box.addEventListener('click', function() {
        // Remove active class from all rate boxes
        document.querySelectorAll('.rate-box').forEach(item => item.classList.remove('active-rate-box'));
        
        // Add active class to the clicked box
        this.classList.add('active-rate-box');
        
        // Update the hidden input value with the clicked box's id
        document.getElementById('rate-type').value = this.id;
    });
});




