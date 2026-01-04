let rect = document.querySelector("#center");

rect.addEventListener("mousemove", function (details) {
  const rectBox = rect.getBoundingClientRect();
  const mouseX = details.clientX - rectBox.left;

  const halfWidth = rectBox.width / 2;


  if (mouseX < halfWidth) {
    var  redColor = gsap.utils.mapRange(0,halfWidth,255,0,mouseX);

    gsap.to(rect, {
      backgroundColor: `rgb(${Math.round(redColor)}, 0, 0)`,
      ease: "power4.out"
    });
  } else {
    var blueColor = gsap.utils.mapRange(halfWidth, rectBox.width,0,255,mouseX);
     gsap.to(rect,{
      backgroundColor: `rgb(0,0,${blueColor})`,
      ease: "power4.out"
     })

     console.log(blueColor)
  }
});

rect.addEventListener("mouseleave", function(){
  gsap.to(rect,{
    backgroundColor: "black"
  })
})




