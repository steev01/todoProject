/*
function lettersOnly (input){
	var regex =/[^a-z]/gi;
	input.value = input.value.replace (regex, "");
}
*/
 const inputs = document.querySelectorAll('input');

  const patterns ={
  	tname:/^\d{11}$/,
  	fname:/^[a-z\d]{5,12}$/i,
  	lname:/^[a-z\d]{5,12}$/i,
  	ename:/^([a-z\d\.-]+)@([a-z\d]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/
  };

  // validate funcion
  function validate(field,regex){
    if (regex.test(field.value)){
    	field.className = 'valid';
    } else{
    	field.className = 'invalid';
    }
  }

  inputs.forEach((input) => {
  	input.addEventListener('keyup',(e) => {
       //console.log(e.target.attributes.name.value);
       validate(e.target,patterns[e.target.attributes.name.value])
  	});

  });
  

function lettersOnly(){

	const fname = document.forms['contact']['fname'].value;
	const lname = document.forms['contact']['lname'].value;
	const ename = document.forms['contact']['ename'].value;
	const tname = document.forms['contact']['tname'].value;
	const ssname = document.getElementById("ssname");
	const sname = document.getElementById("sname");
	const slname = document.getElementById("slname");
	const sename = document.getElementById("sename");
	const spname = document.getElementById("spname");
	ssname.innerHTML='';
	sname.innerHTML='';
	slname.innerHTML='';
	sename.innerHTML='';
	spname.innerHTML='';

    if ((fname == null || fname == "") && (lname == null || lname == "") && 
    	(ename == null || ename == "") && (tname == null || tname == "")) 
    {
	   	ssname.innerHTML='All fields must be filled'; 
	   	return false; 
	}
	if (fname == null || fname == "") {
		sname.innerHTML='FirstName is required';
		return false;
	}

	if (lname == null || lname == "") {
		slname.innerHTML='LastName is required';
		return false;
	}
	if (ename == null || ename == "") {
		sename.innerHTML='Email is required';
		return false;
	}
	if (tname == null || tname == "") {
		spname.innerHTML='Phone number is required';
		return false;
	}
	 return true;

}