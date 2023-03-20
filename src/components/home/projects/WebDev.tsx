//@ts-nocheck
import React from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';

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
    this.gap = 5;
    this.mouse = {
      radius: 10000,
      x: undefined,
      y: undefined,
    };
    window.addEventListener('mousemove', (event) => {
      this.mouse.x = event.x - this.canvasCoord.left;
      this.mouse.y = window.scrollY - this.canvasCoord.y + event.y;
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
    let startX = this.x;
    let startY = this.y;
    startX = Math.floor(startX);
    startY = Math.floor(startY);

    for (let x = startX; x < this.image.height + startX; x += this.gap) {
      for (let y = startY; y < this.image.width + startY + 20; y += this.gap) {
        const index = (y + x * this.width) * 4;
        const red = pixels[index];
        const green = pixels[index + 1];
        const blue = pixels[index + 2];
        const alpha = pixels[index + 3];
        const color = 'rgb(' + red + ',' + green + ',' + blue + ')';
        if (alpha > 0) {
          this.particlesArray.push(new Particle(this, y, x, color));
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
type Props = {
  widthP: number;
  heightP: number;
};
const WebDev = ({ widthP, heightP }: Props) => {
  const canvasWrapperRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const canvas = document.getElementById('canvasWeb');
    canvas.width = widthP;
    canvas.height = heightP;

    const ctx = canvas.getContext('2d');
    const image = new Image();
    image.src = '/js.png';
    const { width, height } = image;
    image.width = width;
    image.height = height;
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
    <div className="w-[500px] h-[500px] relative">
      <div className="opacity-50  text-center text-xl">Hover me</div>
      <div className="absolute ml-[-250px] mt-[-250px] ">
        <canvas id="canvasWeb" width={500} height={500} />
      </div>
    </div>
  );
};

export default WebDev;
