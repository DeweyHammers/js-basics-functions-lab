const distanceFromHqInBlocks = (value) => {
  return Math.abs(42 - value);
}

const distanceFromHqInFeet = (value) => {
  const blocks = distanceFromHqInBlocks(value);
  return blocks * 264;
}

const distanceTravelledInFeet = (start, destination) => {
  return Math.abs((start - destination)*264);
}

const calculatesFarePrice = (start, destination) => {
  let distance = Math.abs((start - destination)*264)

  if (distance <= 400) {
    return 0 
  } else if (distance > 400 && distance < 2000) {
    const cost = Math.abs(distance - 400) * 2
    return parseFloat(`${cost.toString().slice(0, 1)}.${cost.toString().slice(1, 3)}`)
  } else if (distance >= 2000 && distance < 2500) {
    return 25
  } else {
    return 'cannot travel that far'
  }
}