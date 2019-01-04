function formValidation(form){
	var ufname=document.contactus.fname;
	var ulname=document.contactus.lname;
	var uemail=document.contactus.email;
	var upno=document.contactus.pno;
	var umssg=document.contactus.mssg;
	var ufname_len=ufname.value.length;
	if(ufname_len>60)
	{	alert('Length of First name should not be less than 61');
		ufname.focus();
		return false;
	}
	var letters=/^[a-zA-Z]+$/;
	if(!(ufname.value.match(letters)))
	{	alert("First name must have alphabet characters only");
		ufname.focus();
		return false;
	}
	var ulname_len=ulname.value.length;
	if(ulname_len>60)
	{
		alert('Length of Last name should less than 61');
		ulname.focus();
		return false;
	}
	if(!(ulname.value.match(letters)))
	{	alert("Last name must have alphabet characters only");
		ulname.focus();
		return false;
	}
	var uemail_len=uemail.value.length;
	if(ulname_len>129)
	{
		alert('Email length should be less than 129');
		ulname.focus();
		return false;
	}
	var mailformat=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if(!(uemail.value.match(mailformat)))
	{	alert("You have entered an invalid email address!");
		uemail.focus();
		return false;
	}
	var upno_len=upno.value.length;
	if(upno_len!=10)
	{	alert('Pno length should be equal to 10');
		upno.focus();
		return false;
	}
	var letters1=/^[0-9]{10}+$/;
	if(!(upno.value.match(letters1)))
	{	alert('Pno should contain numeric alphabets only');
		upno.focus();
		return false;
	}
	var umssg_len=umssg.value.length;
	if(umssg_len>501)
	{
		alert('Message length should be less than '+mx);
		ulname.focus();
		return false;
	}
	return true;
}