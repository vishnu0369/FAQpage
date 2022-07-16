let a=[{
    "myid":1,"question":"1.How do you write 'Hello World' in an alert box?",
    "answer":"alert('Hello World');"
    },{
        "myid":2,"question":"2.Which method is used to insert a new element at the end of an array?",
        "answer":"push()"
        },{
            "myid":3,"question":"3.How do you write a JavaScript array?",
            "answer":"var colors = ['red', 'green', 'blue']"
    }]

let ans="";
a.map((ques)=>{

    // document.getElementById("q"+ques.myid).innerHTML=ques.question;
    // document.getElementById("a"+ques.myid).innerHTML=ques.answer;
    ans=ans+`
    <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
                <button id="q${ques.myid}" class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne${ques.myid}" aria-expanded="true" aria-controls="collapseOne">
              ${ques.question}
            </button>
            </h2>
            <div id="collapseOne${ques.myid}" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div id="a${ques.myid}" class="accordion-body">
                    ${ques.answer}
                </div>
            </div>
        </div>
        `
    
})

document.getElementById("accordionExample").innerHTML=ans;