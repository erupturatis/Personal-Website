//@ts-nocheck
import React from 'react';
import { useEffect } from 'react';

class Particle {
  constructor(effect, x, y, color) {
    this.effect = effect;

    this.originX = Math.floor(x);
    this.originY = Math.floor(y);
    this.x = this.originX;
    this.y = this.originY;
    this.color = color;
    this.size = this.effect.gap;
    this.vx = 0;
    this.vy = 0;
    this.friction = 0.9;
    this.ease = 0.1;
    this.dx = 0;
    this.dy = 0;
    this.distance = 0;
    this.force = 0;
    this.angle = 0;
  }
  draw(context) {
    context.fillStyle = this.color;
    context.fillRect(this.x, this.y, this.size, this.size);
  }
  update() {
    this.dx = this.effect.mouse.x - this.x;
    this.dy = this.effect.mouse.y - this.y;
    this.distance = this.dx * this.dx + this.dy * this.dy;
    this.force = -this.effect.mouse.radius / this.distance;

    if (this.distance < this.effect.mouse.radius) {
      this.angle = Math.atan2(this.dy, this.dx);
      this.vx += this.force * Math.cos(this.angle);
      this.vy += this.force * Math.sin(this.angle);
    }

    this.x += (this.vx *= this.friction) + (this.originX - this.x) * this.ease;
    this.y += (this.vy *= this.friction) + (this.originY - this.y) * this.ease;
  }
  warp(dispersion) {
    this.x = Math.random() * this.effect.width;
    this.y = Math.random() * this.effect.height;
    // this.ease = dispersion;
  }
}

class Effect {
  constructor(image, canvas) {
    this.canvasCoord = canvas.getBoundingClientRect();
    this.image = image;
    this.width = canvas.width;
    this.height = canvas.height;
    this.particlesArray = [];
    this.centerX = this.width * 0.5;
    this.centerY = this.height * 0.5;
    this.x = this.centerX - this.image.width * 0.5;
    this.y = this.centerY - this.image.height * 0.5;
    this.gap = 3;
    this.mouse = {
      radius: 10000,
      x: undefined,
      y: undefined,
    };
    window.addEventListener('mousemove', (event) => {
      this.mouse.x = event.x - this.canvasCoord.left;
      this.mouse.y = window.scrollY - this.canvasCoord.y + event.y;
      // console.log();
      // console.log(this.mouse.x, this.mouse.y);
      // console.log(this.canvasCoord);
    });
    this.methods = {
      warp: this.warp.bind(this),
    };
  }
  set ease(value) {
    this.particlesArray.forEach((particle) => (particle.ease = value));
  }

  init(context) {
    context.drawImage(this.image, this.x, this.y);
    const pixels = context.getImageData(0, 0, this.width, this.height).data;
    for (let y = 0; y < this.height; y += this.gap) {
      for (let x = 0; x < this.width; x += this.gap) {
        const index = (y * this.width + x) * 4;
        const red = pixels[index];
        const green = pixels[index + 1];
        const blue = pixels[index + 2];
        const alpha = pixels[index + 3];

        const color = 'rgb(' + red + ',' + green + ',' + blue + ')';
        if (alpha > 0) {
          this.particlesArray.push(new Particle(this, x, y, color));
        }
      }
    }
  }
  draw(context) {
    this.particlesArray.forEach((particle) => particle.draw(context));
  }
  update() {
    this.particlesArray.forEach((particle) => particle.update());
  }
  warp(dispersion) {
    this.particlesArray.forEach((particle) => particle.warp(dispersion));
  }
  chooseMethod(method, arg) {
    return () => {
      this.methods[method](...arg);
    };
  }
}

const WebDev = () => {
  useEffect(() => {
    const canvas = document.getElementById('canvasWeb');
    const ctx = canvas.getContext('2d');
    const image = new Image();
    image.src = '/lefteye.png';
    const { width, height } = image;
    image.width = width;
    image.height = height;
    console.log(width, height);
    image.onload = () => {
      const effect = new Effect(image, canvas);
      effect.init(ctx);

      function animate() {
        // console.log('animate');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        effect.draw(ctx);
        effect.update();
        requestAnimationFrame(animate);
      }

      function factory(instance, method, arg) {
        return () => {
          instance.chooseMethod(method, arg)();
        };
      }

      let warp = factory(effect, 'warp', [0.1]);
      // this.document.getElementById('warpButton').addEventListener('click', warp);

      animate();
    };

    function setRadius(radius) {
      effect.mouse.radius = radius;
    }
    function setEase(ease) {
      // console.log(ease);
      effect.ease = ease;
    }
  }, []);

  return (
    <div>
      <canvas id="canvasWeb" width="500" height="500" />
    </div>
  );
};

export default WebDev;
