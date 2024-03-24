//calculates the speed of a car to check if they are within the speed limits
//if the car is below the speed limit output "ok"
//if the car is over the speed limit give 1 demerit per every 5 kms
//if demerits are more than 12 print "license suspended"

function speedDetect(input) {
  const speedLimit = 70;
  let total = 0;

  if (input < speedLimit) {
    console.log("ok");
  } else if (input > speedLimit) {
    const demerits = (input - speedLimit) / 5;
    total += demerits;
    console.log(total);
    if (`${total}` > 12) {
      console.log("License suspended");
    }
  } else {
    console.log("nill");
  }
}
speedDetect(190);
