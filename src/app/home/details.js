import { Button } from "protractor";

const surnameInput = document.querySelector('#surname');
const forenamesInput = document.querySelector('#forenames');
const provideaddressInput = document.querySelector('#provide-address');
const dateofbirthInput = document.querySelector('#date-of-birth');
const idnumberInput = document.querySelector('#id-number');
const telephoneInput = document.querySelector('#telephone');
const emailaddressInput = document.querySelector('#email-address');
const countyInput = document.querySelector('#county');
const nameofthesponsorInput = document.querySelector('#name-of-the-sponsor');
const dateofjoiningtheschemeInput = document.querySelector('#date-of-joining-the-scheme');
const dateofleavingtheschemeInput = document.querySelector('#date-of-leaving-the-scheme'); 
const nameofthetrusteeInput = document.querySelector('#name-of-the-trustee');
const addressofthetrusteeInput = document.querySelector('#address-of-the-trustee');
const nameofthesponsorcomplaintInput = document.querySelector('#name-of-the-sponsor-complaint');
const addressofthesponsorInput = document.querySelector('#address-of-the-sponsor');
const nameofthemanagerInput = document.querySelector('#name-of-the-manager');
const addressofthemanagerInput = document.querySelector('#address-of-the-manager');
const reportdetailsInput = document.querySelector('#report-details');
const previousproceedingsInput = document.querySelector('#previous-proceedings');
const complaintexplanationInput = document.querySelector('#complaint-explanation');
const nameaddressoftherepresntativeInput = document.querySelector('#name-address-of-the-representative');
const representativetelephonenumberInput = document.querySelector('#representative-telephone-number');
const representativesignatureInput = document.querySelector('#representative-signature');
const submitBtn = document.querySelector('#submit-button');
const alertCtrl = document.querySelector('#ion-alert-controller');
const complaintsList = document.querySelector ( '#complaint');

submitBtn.addEventListener('click', ( ) => {
    const enteredsurname = surnameInput.nodeValue;
    const enteredforenames = forenamesInput.nodeValue;
    const enteredprovideaddress = provideaddressInput.nodeValue;
    const entereddateofbirthofbirth = dateofbirthInput.nodeValue;
    const enteredidnumber = idnumberInput.nodeValue;
    const enteredtelephone = telephoneInput.nodeValue;
    const enteredemailaddress = emailaddressInput.nodeValue;
    const enteredcounty = countyInput.nodeValue;
    const enterednameofthesponsor = nameofthesponsorInput.nodeValue;
    const entereddateofjoiningthescheme = dateofjoiningtheschemeInput.nodeValue;
    const entereddateofleavingthescheme = dateofleavingtheschemeInput.nodeValue;
    const enterednameofthetrustee = nameofthetrusteeInput.nodeValue;
    const enteredaddressofthetrustee = addressofthetrusteeInput.nodeValue;
    const enterednameofthesponsorcomplaint= nameofthesponsorcomplaintInput.nodeValue;
    const enteredaddressofthesponsor = addressofthesponsorInput.nodeValue;
    const enterednameofthemanager = nameofthemanagerInput.nodeValue;
    const enteredaddressofthemanager = addressofthemanagerInput.nodeValue;
    const enteredreportdetails = reportdetailsInput.nodeValue;
    const enteredpreviousproceedings = previousproceedingsInput.nodeValue;
    const enteredcompliantexplanation = complaintexplanationInput.nodeValue;
    const enterednameaddressoftherepresentative = nameaddressoftherepresntativeInput.nodeValue;
    const enteredrepresentativetelephonenumber = representativetelephonenumberInput.nodeValue;
    const enteredrepresentativesignature = representativesignatureInput.nodeValue; 
   

    if ( enteredsurname.trim().length <=0||enteredforenames <=0||enteredidnumber<=0||
    enteredprovideaddress<=0||entereddateofbirthofbirth<=0||enteredidnumber<=0||
    enteredtelephone<=0||enteredemailaddress<=0||enteredcounty<=0||enterednameofthesponsor<=0
    ||entereddateofjoiningthescheme<=0||entereddateofleavingthescheme<=0||enterednameofthetrustee<=0||
    enteredaddressofthetrustee<=0||enterednameofthesponsorcomplaint<=0||enteredaddressofthesponsor<=0||
    enterednameofthemanager<=0||enteredaddressofthemanager<=0||enteredreportdetails<=0||
    enteredpreviousproceedings<=0||enteredcompliantexplanation<=0||enterednameaddressoftherepresentative<=0
    ||enteredrepresentativetelephonenumber<=0||enteredrepresentativesignature<=0|| enteredforenames.trim().length <=0

    )
    export class Alertgit push
     { 
    
  constructor ('public alertController()' = 'AlertController')
  }
    {
        alertCtrl.create({message:'Please enter valid details!',
         header: 'Invalid Inputs',
        buttons: ['Okay!']
        });then( alertElement);
        return;
    } 
    console.log(enteredforenames,enteredsurname,enteredidnumber,enteredprovideaddress,entereddateofbirthofbirth,enteredidnumber
        ,enteredtelephone,enteredemailaddress,enteredcounty,enterednameofthesponsor,entereddateofjoiningthescheme,
        entereddateofleavingthescheme,enterednameofthetrustee,enteredaddressofthetrustee,
        enterednameofthesponsorcomplaint,enteredaddressofthesponsor,enterednameofthemanager,
        enteredaddressofthemanager,enteredreportdetails,enteredpreviousproceedings,enteredcompliantexplanation,
        enterednameaddressoftherepresentative,enteredrepresentativetelephonenumber,enteredrepresentativesignature )
});
