// REVEALS THE CALCULATOR WHEN HEADING IS CLICKED
function change() {
    var x = document.getElementById("bam");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

//Listen for submit returns error if selection missing or
document.getElementById('calc-form').addEventListener('submit', function(e){
  // hide results
  document.getElementById('results').style.display = "none";
  // show loader
  document.getElementById('loading').style.display = "block";
  setTimeout(calculateResults, 1000);
  e.preventDefault();
  document.getElementById('calc').style.display = "none";
});

//Calculate results
function calculateResults(){
  //UI VARS
  const rateRate = parseFloat(endTime.value);
  // compute charges
  const charges = rateRate;
  if(isFinite(rateRate)){
    // show results
    document.getElementById('results').style.display = "block";
    // hide spinner
    document.getElementById('loading').style.display = "none";
  } else {
    showError('Please check your options');
  }
}
function hide(){
  document.getElementById("results").style.display = "none";
  document.getElementById("calc").style.display = "block";
}
// show numbers
function showError(error){
  document.getElementById('results').style.display = "none";
  // hide spinner
  document.getElementById('loading').style.display = "none";
  // create a div
  const errorDiv = document.createElement('div');
  // get elements
  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading');
  // add class
  errorDiv.className = 'alert alert-danger';
  // create text node and append
  errorDiv.appendChild(document.createTextNode(error));
// insert error above heading
 card.insertBefore(errorDiv, heading);
// clear error after 3 seconds
setTimeout(clearError, 1150);
}
//clear error
function clearError(){
  document.querySelector('.alert').remove();
  document.getElementById('calc').style.display = "block";
  }
// get select menu value
function getTripValue()
{
 selectedValue = document.getElementById('tripSelect').value;
}
function getCarValue()
{
 selectedValue2 = document.getElementById('carSelect').value;
 addUp();
}
// SELECTS TRIP MODE AND CAR TYPE - DISPLAYS PICTURE OF CAR SELECTED
function addUp()
//GO CAR PRODUCT
{
  //gocity
  if((selectedValue == '1' || selectedValue == '2') && selectedValue2 === "a") {
    quarterlyRate = 2;
    cap = 60;
    document.getElementById('bye').style.display = "block";
    document.getElementById('bye2').style.display = "none";
    document.getElementById('bye3').style.display = "none";
    document.getElementById('bye4').style.display = "none";
    document.getElementById('bye5').style.display = "none";
    document.getElementById('bye6').style.display = "none";
    document.getElementById('bye7').style.display = "none";
    document.getElementById('bye8').style.display = "none";
  }
  //gotripper
  if((selectedValue == '1' || selectedValue == '2') && selectedValue2 === "b") {
    quarterlyRate = 2.50;
    cap = 70;
    document.getElementById('bye').style.display = "none";
    document.getElementById('bye2').style.display = "block";
    document.getElementById('bye3').style.display = "none";
    document.getElementById('bye4').style.display = "none";
    document.getElementById('bye5').style.display = "none";
    document.getElementById('bye6').style.display = "none";
    document.getElementById('bye7').style.display = "none";
    document.getElementById('bye8').style.display = "none";
  }
  //goVan
  if((selectedValue == '1' || selectedValue == '2') && selectedValue2 === "c"){
    quarterlyRate = 2.50;
    cap = 70;
    document.getElementById('bye').style.display = "none";
    document.getElementById('bye2').style.display = "none";
    document.getElementById('bye3').style.display = "block";
    document.getElementById('bye4').style.display = "none";
    document.getElementById('bye5').style.display = "none";
    document.getElementById('bye6').style.display = "none";
    document.getElementById('bye7').style.display = "none";
    document.getElementById('bye8').style.display = "none";
  }
  //goelectrici3
  if((selectedValue == '1' || selectedValue == '2') && selectedValue2 === "d"){
    quarterlyRate = 3;
    cap = 80;
    document.getElementById('bye').style.display = "none";
    document.getElementById('bye2').style.display = "none";
    document.getElementById('bye3').style.display = "none";
    document.getElementById('bye4').style.display = "block";
    document.getElementById('bye5').style.display = "none";
    document.getElementById('bye6').style.display = "none";
    document.getElementById('bye7').style.display = "none";
    document.getElementById('bye8').style.display = "none";
  }
  //goelectric zoe
  if((selectedValue == '1' || selectedValue == '2') && selectedValue2 === "e"){
    quarterlyRate = 2.50;
    cap = 70;
    document.getElementById('bye').style.display = "none";
    document.getElementById('bye2').style.display = "none";
    document.getElementById('bye3').style.display = "none";
    document.getElementById('bye4').style.display = "none";
    document.getElementById('bye5').style.display = "block";
    document.getElementById('bye6').style.display = "none";
    document.getElementById('bye7').style.display = "none";
    document.getElementById('bye8').style.display = "none";
  }
  //goexplore
  if((selectedValue == '1' || selectedValue == '2') && selectedValue2 === "f"){
    quarterlyRate = 3;
    cap = 80;
    document.getElementById('bye').style.display = "none";
    document.getElementById('bye2').style.display = "none";
    document.getElementById('bye3').style.display = "none";
    document.getElementById('bye4').style.display = "none";
    document.getElementById('bye5').style.display = "none";
    document.getElementById('bye6').style.display = "block";
    document.getElementById('bye7').style.display = "none";
    document.getElementById('bye8').style.display = "none";
  }
  //go undercover
  if((selectedValue == '1' || selectedValue == '2') && selectedValue2 === "g"){
    quarterlyRate = 2.25;
    cap = 65;
    document.getElementById('bye').style.display = "none";
    document.getElementById('bye2').style.display = "none";
    document.getElementById('bye3').style.display = "none";
    document.getElementById('bye4').style.display = "none";
    document.getElementById('bye5').style.display = "none";
    document.getElementById('bye6').style.display = "none";
    document.getElementById('bye7').style.display = "block";
    document.getElementById('bye8').style.display = "none";
  }
  //go cargo
  if((selectedValue == '1' || selectedValue == '2') && selectedValue2 === "h"){
    quarterlyRate = 3;
    cap = 80;
    document.getElementById('bye').style.display = "none";
    document.getElementById('bye2').style.display = "none";
    document.getElementById('bye3').style.display = "none";
    document.getElementById('bye4').style.display = "none";
    document.getElementById('bye5').style.display = "none";
    document.getElementById('bye6').style.display = "none";
    document.getElementById('bye7').style.display = "none";
    document.getElementById('bye8').style.display = "block";
  }
}

 let cap;
// GETS TRIP TYPE, CAR TYPE, RATE, TIME, AND KMS AND CALCULATES TRIP COSTS.
function sums(){
  if(selectedValue == '1'){
    km = 0.50;
  }
  if(selectedValue == '2'){
    km = 0.10;
  }
  kmValue = document.getElementById("amount").value;
  if(kmValue <= 50){
    kmValue1 = 0;
  }
  if(kmValue > 50){
    kmValue1 = kmValue - 50;
  }
  kmSums = ((kmValue1) * (km));

  a = document.getElementById("startDate").value;
  b = document.getElementById("startTime").value;
  c = document.getElementById("endDate").value;
  d = document.getElementById("endTime").value;

  var array = b.split(':');
  var  startTime = moment(a).add(array[0], 'h').add(array[1], 'm')
  var array = d.split(':');
  var  endTime = moment(c).add(array[0], 'h').add(array[1], 'm')
  var rateRate = (Math.ceil((endTime - startTime) / (1000 * 60 * 15)) * (quarterlyRate));


  document.getElementById("yup").innerHTML = "€"+(rateRate+kmSums);
  console.log(cap);
}

// NEED TO FEED IN DISCOUNT BASED ON AN IF STATEMENT
// IF startTime === 00:00, 01:00, 02:00, 03:00, 04:00, 05:00, 06:00, 07:00, 08:00 divide by 2 (half price)

// NEED TO PUT IN CAP PER class
// IF selectedValue2 === "a" && sums > 80 sums = 80
