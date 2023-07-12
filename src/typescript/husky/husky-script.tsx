export type IParamsHuskyScript = {
  leftEyeBaseX: number;
  leftEyeBaseY: number;
  rightEyeBaseX: number;
  rightEyeBaseY: number;
  leftEyeCenterOffsetX: number;
  leftEyeCenterOffsetY: number;
  rightEyeCenterOffsetX: number;
  rightEyeCenterOffsetY: number;
  scale: number;
  addAnimation: (newAnimation: any) => void; // used to clear all intervals on exiting the page
  addEvent: (newEvent: any) => void; // used to clear all event listeners on exiting the page
  scrollEyes: boolean;
  baseSize: number;
  count?: number;
};

export class HuskyObject {
  targetX: number = 0;
  targetY: number = 0;
  started: boolean;
  leftEye: any;
  rightEye: any;
  params: IParamsHuskyScript;
  rect: any;
  svg: any;

  constructor(params: IParamsHuskyScript) {
    this.started = false;
    this.params = params;
    this.startProtocol();
  }
  mouseCoordinatesUpdates = (event: any) => {
    // get mouse position
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    this.targetX = mouseX;
    this.targetY = mouseY;
  };

  scrollCoordinatesUpdater = () => {
    const scrollY = window.scrollY;
    this.targetY = scrollY + this.params.baseSize / 2;
    this.targetX = window.innerWidth / 2;
  };

  startAnimation = () => {
    if (!this.started) {
      this.started = true;
      requestAnimationFrame(this.mainAnimationLoop);
      this.params.addAnimation(() => {
        this.started = false;
      });
    }
  };

  addEventListenerWithReference(eventListener: any) {
    document.addEventListener('mousemove', eventListener);
    this.params.addEvent(eventListener);
  }

  startProtocol = () => {
    this.svg = document.querySelector('#huskySvg');

    const leftEye = document.querySelector('#lefteye');
    const rightEye = document.querySelector('#righteye');

    this.leftEye = leftEye;
    this.rightEye = rightEye;

    // selects based on param whether the eyes should follow the mouse or scroll
    const scroll = this.params.scrollEyes;
    const targetCoordinatesFunction = scroll
      ? this.scrollCoordinatesUpdater
      : this.mouseCoordinatesUpdates;
    this.addEventListenerWithReference(targetCoordinatesFunction);
    // starts the main animation loop
    this.startAnimation();
  };

  mainAnimationLoop = () => {
    if (!this.started) return;
    let rect = this.svg?.getBoundingClientRect();
    this.rect = rect;
    // calculates vector from center of eyes to mouse
    const leftEyeX =
      this.targetX -
      (this.params.leftEyeBaseX +
        this.params.leftEyeCenterOffsetX +
        this.rect.x);
    const leftEyeY =
      this.targetY -
      (this.params.leftEyeBaseY +
        this.params.leftEyeCenterOffsetX +
        this.rect.y);
    const rightEyeX =
      this.targetX -
      (this.params.rightEyeBaseX +
        this.params.rightEyeCenterOffsetX +
        this.rect.x);
    const rightEyeY =
      this.targetY -
      (this.params.rightEyeBaseY +
        this.params.rightEyeCenterOffsetY +
        this.rect.y);

    // calculates angle of vector
    const leftEyeAngle = Math.atan2(leftEyeY, leftEyeX);
    const rightEyeAngle = Math.atan2(rightEyeY, rightEyeX);

    // calculates new eye position
    let radiusLeft: number = 5 * this.params.scale;
    let radiusRight: number = 10 * this.params.scale;
    let movementSmoothing: number = 0.06;

    // calculates all displacements
    let leftEyeDisplacementX: number = Math.cos(leftEyeAngle) * radiusLeft;
    let leftEyeDisplacementY: number = Math.sin(leftEyeAngle) * radiusLeft;
    let rightEyeDisplacementX: number = Math.cos(rightEyeAngle) * radiusRight;
    let rightEyeDisplacementY: number = Math.sin(rightEyeAngle) * radiusRight;

    const leftEyeExpectedX = this.params.leftEyeBaseX + leftEyeDisplacementX;
    const leftEyeExpectedY = this.params.leftEyeBaseY + leftEyeDisplacementY;
    const rightEyeExpectedX = this.params.rightEyeBaseX + rightEyeDisplacementX;
    const rightEyeExpectedY = this.params.rightEyeBaseY + rightEyeDisplacementY;

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
    let leftEyeNewX = leftEyeCurrentX + leftEyeDiffX * movementSmoothing;
    let leftEyeNewY = leftEyeCurrentY + leftEyeDiffY * movementSmoothing;
    let rightEyeNewX = rightEyeCurrentX + rightEyeDiffX * movementSmoothing;
    let rightEyeNewY = rightEyeCurrentY + rightEyeDiffY * movementSmoothing;

    // sets new eye position
    this.leftEye.setAttribute('x', leftEyeNewX.toString());
    this.leftEye.setAttribute('y', leftEyeNewY.toString());
    this.rightEye.setAttribute('x', rightEyeNewX.toString());
    this.rightEye.setAttribute('y', rightEyeNewY.toString());

    requestAnimationFrame(this.mainAnimationLoop);
  };
}
