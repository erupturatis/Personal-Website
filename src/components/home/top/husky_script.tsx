// @ts-nocheck

export type paramsHuskyScript = {
  leftEyeBaseX: number;
  leftEyeBaseY: number;
  rightEyeBaseX: number;
  rightEyeBaseY: number;
  leftEyeCenterOffsetX: number;
  leftEyeCenterOffsetY: number;
  rightEyeCenterOffsetX: number;
  rightEyeCenterOffsetY: number;
  scale: number;
  addInterval: any; // used to clear all intervals on exiting the page
  addEvent: any; // used to clear all event listeners on exiting the page
  scrollEyes?: boolean;
  baseSize?: number;
  count?: number;
};

export function huskyScript(params: paramsHuskyScript) {
  console.log('called again');
  const mouseCoordUpdate = (event: any) => {
    // get mouse position
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    // console.log(mouseX, mouseY);
    this.mouseX = mouseX;
    this.mouseY = mouseY;

    if (!this.started) {
      console.log('starting');
      this.started = true;
      let interval = setInterval(loop, 1000 / 1);
      params.addInterval(interval);
    }
  };

  const scrollUpdater = () => {
    const scrollY = window.scrollY;
    this.mouseY = scrollY + params.baseSize / 2;
    this.mouseX = window.innerWidth / 2;
  };

  const loop = () => {
    let rect = svg?.getBoundingClientRect();
    this.rect = rect;
    console.log('running', this.rect, params.count);
    // calculates vector from center of eyes to mouse
    const leftEyeX = this.mouseX - (params.leftEyeBaseX + params.leftEyeCenterOffsetX + this.rect.x);
    const leftEyeY = this.mouseY - (params.leftEyeBaseY + params.leftEyeCenterOffsetX + this.rect.y);
    const rightEyeX = this.mouseX - (params.rightEyeBaseX + params.rightEyeCenterOffsetX + this.rect.x);
    const rightEyeY = this.mouseY - (params.rightEyeBaseY + params.rightEyeCenterOffsetY + this.rect.y);

    // calculates angle of vector
    const leftEyeAngle = Math.atan2(leftEyeY, leftEyeX);
    const rightEyeAngle = Math.atan2(rightEyeY, rightEyeX);

    // calculates new eye position
    let radiusLeft: number = 5 * params.scale;
    let radiusRight: number = 10 * params.scale;
    let movementSmoothing: number = 0.1;

    // calculates all displacements
    let leftEyeDisplacementX: number = Math.cos(leftEyeAngle) * radiusLeft;
    let leftEyeDisplacementY: number = Math.sin(leftEyeAngle) * radiusLeft;
    let rightEyeDisplacementX: number = Math.cos(rightEyeAngle) * radiusRight;
    let rightEyeDisplacementY: number = Math.sin(rightEyeAngle) * radiusRight;

    const leftEyeExpectedX = params.leftEyeBaseX + leftEyeDisplacementX;
    const leftEyeExpectedY = params.leftEyeBaseY + leftEyeDisplacementY;
    const rightEyeExpectedX = params.rightEyeBaseX + rightEyeDisplacementX;
    const rightEyeExpectedY = params.rightEyeBaseY + rightEyeDisplacementY;

    // getting current eye position
    const leftEyeCurrentX = parseFloat(this.leftEye.getAttribute('x'));
    const leftEyeCurrentY = parseFloat(this.leftEye.getAttribute('y'));
    const rightEyeCurrentX = parseFloat(this.rightEye.getAttribute('x'));
    const rightEyeCurrentY = parseFloat(this.rightEye.getAttribute('y'));

    // calculating diff between expected and current position
    const leftEyeDiffX = leftEyeExpectedX - leftEyeCurrentX;
    const leftEyeDiffY = leftEyeExpectedY - leftEyeCurrentY;
    const rightEyeDiffX = rightEyeExpectedX - rightEyeCurrentX;
    const rightEyeDiffY = rightEyeExpectedY - rightEyeCurrentY;
    // calculates new eye position
    const leftEyeNewX = leftEyeCurrentX + leftEyeDiffX * movementSmoothing;
    const leftEyeNewY = leftEyeCurrentY + leftEyeDiffY * movementSmoothing;
    const rightEyeNewX = rightEyeCurrentX + rightEyeDiffX * movementSmoothing;
    const rightEyeNewY = rightEyeCurrentY + rightEyeDiffY * movementSmoothing;

    // sets new eye position
    this.leftEye.setAttribute('x', leftEyeNewX.toString());
    this.leftEye.setAttribute('y', leftEyeNewY.toString());
    this.rightEye.setAttribute('x', rightEyeNewX.toString());
    this.rightEye.setAttribute('y', rightEyeNewY.toString());
  };
  if (params.scrollEyes) {
    let scrollInt = setInterval(scrollUpdater, 1000 / 60);
    let loopInt = setInterval(loop, 1000 / 1);
    params.addInterval(scrollInt);
    params.addInterval(loopInt);
  } else {
    function addEventListenerWithReference() {
      document.addEventListener('mousemove', mouseCoordUpdate);
      return mouseCoordUpdate; // Return the listener function reference
    }

    let eListener = addEventListenerWithReference();
    setTimeout(() => {
      document.removeEventListener('mousemove', eListener);
      console.log('removed 1 listener');
    }, 1000);

    params.addEvent(eListener);
  }
  let svg = document.querySelector('#huskySvg');

  const leftEye = document.querySelector('#lefteye');
  const rightEye = document.querySelector('#righteye');

  this.leftEye = leftEye;
  this.rightEye = rightEye;
  // start loop 60 frames per second
}
