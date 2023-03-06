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
};

export async function huskyScript(params: paramsHuskyScript) {
    const mouseCoordUpdate = (event: any) => {
        // get mouse position
        const mouseX = event.clientX;
        const mouseY = event.clientY;
        // console.log(mouseX, mouseY);
        this.mouseX = mouseX;
        this.mouseY = mouseY;

        if (!this.started) {
            this.started = true;
            setInterval(loop, 1000 / 60);
        }
    };
    const loop = () => {
        // calculates vector from center of eyes to mouse
        const leftEyeX = this.mouseX - (params.leftEyeBaseX + params.leftEyeCenterOffsetX);
        const leftEyeY = this.mouseY - (params.leftEyeBaseY + params.leftEyeCenterOffsetX);
        const rightEyeX = this.mouseX - (params.rightEyeBaseX + params.rightEyeCenterOffsetX);
        const rightEyeY = this.mouseY - (params.rightEyeBaseY + params.rightEyeCenterOffsetY);

        // calculates angle of vector
        const leftEyeAngle = Math.atan2(leftEyeY, leftEyeX);
        const rightEyeAngle = Math.atan2(rightEyeY, rightEyeX);

        // calculates new eye position
        let radiusLeft: number = 5 * params.scale;
        let radiusRight: number = 8 * params.scale;
        let movementSmoothing: number = 0.4;

        const leftEyeNewX = params.leftEyeBaseX + Math.cos(leftEyeAngle) * radiusLeft;
        const leftEyeNewY = params.leftEyeBaseY + Math.sin(leftEyeAngle) * radiusLeft;
        const rightEyeNewX = params.rightEyeBaseX + Math.cos(rightEyeAngle) * radiusRight;
        const rightEyeNewY = params.rightEyeBaseY + Math.sin(rightEyeAngle) * radiusRight;

        // sets new eye position
        this.leftEye.setAttribute('x', leftEyeNewX.toString());
        this.leftEye.setAttribute('y', leftEyeNewY.toString());
        this.rightEye.setAttribute('x', rightEyeNewX.toString());
        this.rightEye.setAttribute('y', rightEyeNewY.toString());
    };

    document.addEventListener('mousemove', mouseCoordUpdate);
    // gets reference to husky eyes
    const leftEye = document.querySelector('#lefteye');
    const rightEye = document.querySelector('#righteye');

    this.leftEye = leftEye;
    this.rightEye = rightEye;
    // start loop 60 frames per second
}
