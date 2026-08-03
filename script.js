// ================================
// MOBILE MENU
// ================================

function toggleMenu() {

    const navLinks = document.getElementById("navLinks");

    navLinks.classList.toggle("active");

}


// ================================
// MODEL DESIGNS
// ================================

const designs = {

    suits: [
        {
            image: "images/suits/suit1.jpg",
            name: "Classic Black Suit"
        },
        {
            image: "images/suits/suit2.jpg",
            name: "Premium Wedding Suit"
        },
        {
            image: "images/suits/suit3.jpg",
            name: "Modern Designer Suit"
        }
    ],


    shirts: [
        {
            image: "images/shirts/shirt1.jpg",
            name: "Premium Formal Shirt"
        },
        {
            image: "images/shirts/shirt2.jpg",
            name: "Classic Casual Shirt"
        },
        {
            image: "images/shirts/shirt3.jpg",
            name: "Designer Shirt"
        }
    ],


    pants: [
        {
            image: "images/pants/pant1.jpg",
            name: "Classic Formal Pant"
        },
        {
            image: "images/pants/pant2.jpg",
            name: "Premium Trouser"
        },
        {
            image: "images/pants/pant3.jpg",
            name: "Modern Fit Pant"
        }
    ],


    sherwanis: [
        {
            image: "images/sherwanis/sherwani1.jpg",
            name: "Royal Sherwani"
        },
        {
            image: "images/sherwanis/sherwani2.jpg",
            name: "Wedding Sherwani"
        },
        {
            image: "images/sherwanis/sherwani3.jpg",
            name: "Designer Sherwani"
        }
    ],


    jodhpuri: [
        {
            image: "images/jodhpuri/jodhpuri1.jpg",
            name: "Classic Jodhpuri"
        },
        {
            image: "images/jodhpuri/jodhpuri2.jpg",
            name: "Royal Jodhpuri"
        },
        {
            image: "images/jodhpuri/jodhpuri3.jpg",
            name: "Designer Jodhpuri"
        }
    ],


    alterations: [
        {
            image: "images/alterations/alteration1.jpg",
            name: "Suit Alterations"
        },
        {
            image: "images/alterations/alteration2.jpg",
            name: "Shirt Alterations"
        },
        {
            image: "images/alterations/alteration3.jpg",
            name: "Pant Alterations"
        }
    ]

};


// ================================
// SHOW CATEGORY
// ================================

function showCategory(category) {

    const gallery = document.getElementById("modelGallery");

    gallery.innerHTML = "";

    const title = document.createElement("h3");

    title.textContent =
        category.charAt(0).toUpperCase() +
        category.slice(1);

    gallery.appendChild(title);


    designs[category].forEach(function(design) {

        const card = document.createElement("div");

        card.className = "model-card";


        card.innerHTML = `

            <img
                src="${design.image}"
                alt="${design.name}"
            >

            <div class="model-info">

                <h3>${design.name}</h3>

                <button
                    class="select-design-btn"
                    onclick="selectDesign('${design.name}')"
                >
                    Select This Design
                </button>

            </div>

        `;


        gallery.appendChild(card);

    });

}


// ================================
// SELECT DESIGN
// ================================

function selectDesign(designName) {

    const phoneNumber = "918885304733";

    const message =
        "Hello Javed Exclusive Tailoring,%0A%0A" +
        "I am interested in this design:%0A" +
        designName +
        "%0A%0AI would like to know more details.";

    const whatsappURL =
        "https://wa.me/" +
        phoneNumber +
        "?text=" +
        message;

    window.open(
        whatsappURL,
        "_blank"
    );

}


// ================================
// UPLOAD YOUR OWN DESIGN
// ================================

function previewDesign(event) {

    const file =
        event.target.files[0];

    const uploadedImage =
        document.getElementById("uploadedImage");


    if (!file) {

        uploadedImage.innerHTML = "";

        return;

    }


    const reader =
        new FileReader();


    reader.onload = function(e) {

        uploadedImage.innerHTML = `

            <h3>Your Design</h3>

            <img
                src="${e.target.result}"
                alt="Uploaded Design"
            >

            <br><br>

            <button
                class="select-design-btn"
                onclick="sendUploadedDesign()"
            >
                Send Design on WhatsApp
            </button>

        `;

    };


    reader.readAsDataURL(file);

}


// ================================
// UPLOADED DESIGN WHATSAPP
// ================================

function sendUploadedDesign() {

    const phoneNumber =
        "918885304733";

    const message =
        "Hello Javed Exclusive Tailoring,%0A%0A" +
        "I have uploaded a design that I would like to discuss with you.";

    const whatsappURL =
        "https://wa.me/" +
        phoneNumber +
        "?text=" +
        message;

    window.open(
        whatsappURL,
        "_blank"
    );

}