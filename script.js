
["Python","Pandas","NumPy","Matplotlib","Seaborn","HTML","CSS","GitHub"].forEach(t=>{const s=document.createElement("span");s.className="chip";s.textContent=t;document.getElementById("sk").appendChild(s)});
const io=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){x.target.classList.add("in");x.target.querySelectorAll(".c").forEach(c=>{const n=+c.dataset.n;let i=0;const t=setInterval(()=>{c.textContent=++i;if(i>=n)clearInterval(t)},900/n)});io.unobserve(x.target)}}),{threshold:.15});
document.querySelectorAll(".rv").forEach(e=>io.observe(e));
addEventListener("scroll",()=>{document.getElementById("big").style.transform="translateY("+scrollY*.25+"px)"},{passive:true});
document.getElementById("f").addEventListener("submit",e=>{
e.preventDefault();
document.getElementById("msg").innerHTML='This form is not working right now due to some issues. Please contact Dev Sethiya by email at <a href="https://mail.google.com/mail/?view=cm&fs=1&to=devsethiya2007@gmail.com&su=Hello%20Dev" target="_blank" rel="noopener" style="color:inherit;text-decoration:underline">devsethiya2007@gmail.com</a> or on <a href="https://www.linkedin.com/in/dev-sethiya-242523430" target="_blank" rel="noopener" style="color:inherit;text-decoration:underline">LinkedIn</a>.';
});

