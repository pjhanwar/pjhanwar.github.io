function toggleCourses(obj){
	var cNode = obj.parentNode.getElementsByClassName("courses")[0];
	if(obj.getAttribute("courses-visible") == "true"){
		cNode.classList.add("hidden");
		obj.setAttribute("courses-visible", "false");
		obj.innerHTML = "View courses";
	}else{
		cNode.classList.remove("hidden");
		obj.setAttribute("courses-visible", "true");
		obj.innerHTML = "Hide courses";
	}
}
