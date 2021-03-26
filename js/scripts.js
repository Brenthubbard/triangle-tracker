// Business logic: Can be before the document loads
function triangleTest(side1, side2, side3) {
  alert("triangle test with " + side1 + ", " + side2 + " and " + side3)

  // Is it a triangle?
  // if (not a number stuff) {
  // "The sum of the lengths of any two sides of
  // a triangle is less than or equal to the length of the third side"
  if (Number.isNaN(side1) || Number.isNaN(side2) || Number.isNaN(side3)) {
    alert("WHY WOULD YOU DO THIS")
    alert("SERIOUSLY")
    alert("...")
  } else if (side1 + side2 <= side3 || side1 + side3 <= side2 || side2 + side3 <= side1) {
    alert("Not a triangle")
  } else if (side1 === side2 && side1 === side3) {
    alert("All sides match: triangle is EQUILATERAL")
  } else if (side1 === side2 || side1 === side3 || side2 === side3) {
    alert("Two sides match: triangle is ISOCELES")
  } else {
    alert("No sides match: triangle is SCALENE")
  }
}


// alert("Not a triangle")
// alert("All sides match: triangle is EQUILATERAL")
// alert("1st and 2nd side-lengths are equal: triangle is ISOCELES")
// alert("1st and 3rd side-lengths are equal: triangle is ISOCELES")
// alert("2nd and 3rd side-lengths are equal: triangle is ISOCELES")
// alert("No sides match: triangle is SCALENE")


// User-interface logic: Must be *after* the document loads or else things could break
$(document).ready(function () {
  alert("document ready")

  // Do form stuff to get the side-lengths when submitted
  $("#theForm").submit(function () {
    const sideA = parseInt($("input#sideA").val())
    const sideB = parseInt($("input#sideB").val())
    const sideC = parseInt($("input#sideC").val())

    event.preventDefault()

    // Pass side-lengths as arguments to function
    alert("about to test side-lengths provided")
    triangleTest(sideA, sideB, sideC)
  })
})