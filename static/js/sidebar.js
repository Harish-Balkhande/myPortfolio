const sections = document.querySelectorAll("section");
const nav = document.querySelectorAll("nav .nav-tabs");
console.log(nav)
const options = {
    threshold: "0.6", //0.6 === 60% of the section should be visible
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
        if (e.isIntersecting){
            // console.log(e.target.id)
            var inter = e
            

            
            
            
            
            
            
            
            //changing navbar style on scroll to next secti
            // nav.forEach((e)=>{
            //     // console.log("nav :",e.name)
            //     // console.log("Intersection :",inter.target.id)
            //     if(inter.target.id == e.name){
            //         e.classList.add("active-tab");                    
            //     }
            //     else{
            //         e.classList.remove("active-tab");
            //     }
            // })
        }
    });
}, options);

sections.forEach((section) => {
    observer.observe(section);
})