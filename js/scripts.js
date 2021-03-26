function triangleTest(t1, t2, t3) {
  alert("triangle test with " + t1 + ", " + t2 + " and " + t3)

  const t1t2 = false
  const t1t3 = false
  const t2t3 = false

  if (t1 + t2 ) {
    alert("triangle is EQUILATERAL")
  } else {
    switch (t1) {
      case (t2):
        alert("isoceles, 1st and 2nd side-lengths are equal")
        break
      case (t3):
        alert("isoceles, 1st and 3rd side-lengths are equal")
        break
    }
  }
}

// alert("triangle is EQUILATERAL")
// alert("isoceles, 1st and 2nd side-lengths are equal")
// alert("isoceles, 1st and 3rd side-lengths are equal")
// alert("isoceles, 2nd and 3rd side-lengths are equal")
// alert("triangle is SCALENE")

$(document).ready(function() {
  alert("document ready")

  // Do form stuff to get the side-lengths when submitted
  $("#theForm").submit(function() {
    const sideA = parseInt($("input#sideA").val())
    const sideB = parseInt($("input#sideB").val())
    const sideC = parseInt($("input#sideC").val())
  
    event.preventDefault()

    // Pass side-lengths as arguments to function
    alert("about to test side-lengths provided")
    triangleTest(sideA, sideB, sideC)
  } )
})