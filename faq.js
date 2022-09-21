const faqData = [{
        id: 1,
        question: "Who are we?",
        answer: "We enable upscaling careers through flexible, interactive and collaborative learning. We believe in building learning communities by bringing together mentors, young minds, and creators.",
    },
    {
        id: 2,
        question: "What do we do?",
        answer: "Building learning communities with Our Affordable & Competent Courses",
    },
    {
        id: 3,
        question: "Are the community classes boring?",
        answer: "No, not at all!!!",
    },
];


const faqs = [];
const mainContainer = document.querySelector(".accordian_body");


/* function showFaq() {

} */

function createFaq() {

    // <div class="faq">
    //   <div class="faq_header">
    //     <h3></h3>
    //     <div class="show_btn" display="flex" justifyContent="center" alignItem="center"></div>
    //   </div>
    //    <p class="hidden"></p>
    // </div>

    //for-of loop to iterate  the question and answer array. 

    for (const value of faqData) {
        let oneque = value.question;
        let oneans = value.answer;

        //create div
        let faqdiv = document.createElement("div");
        faqdiv.className = "faq ";

        // create faq-header
        let faqheader = document.createElement("div");
        faqheader.className = "faq_header ";


        // create h3
        let faqh3 = document.createElement("h3");
        faqh3.className = "h3";
        faqh3.innerHTML = oneque;


        //create button
        let faqbtn = document.createElement("div");
        faqbtn.className = "show_btn";
        faqbtn.style.display = "flex";
        faqbtn.style.alignItems = "center";
        faqbtn.style.justifyContent = "center";
        faqbtn.innerHTML = "+";

        faqbtn.addEventListener("click", btnStatusUpdate);

        //create paragraph
        let faqpara = document.createElement("p");
        faqpara.className = "p hidden";
        faqpara.innerHTML = oneans;

        //append h3 and button in faqheader and para in faqdiv
        mainContainer.append(faqdiv);
        faqdiv.append(faqheader);
        faqheader.appendChild(faqh3);
        faqheader.appendChild(faqbtn);

        faqdiv.append(faqpara);


    }




}

function btnStatusUpdate(event) {
    //to get the triggered source
    let source = event.target.parentElement;
    console.log(source);

    //to get the next sibling to show the para
    let showPara = source.nextSibling;
    console.log(showPara);


    //get the classname of the para
    let check = showPara.className;


    //toggle btw hidden and show button
    if (check == "p hidden") {
        removeP.className = "p";
    } else {
        removeP.className = "p hidden";
    }

}
showFaq();
createFaq();