"use client";

import { useEffect, useRef } from "react";

interface FallingSymbol {
  x: number;
  y: number;
}

interface MatrixEffect {
  ctx: CanvasRenderingContext2D;
  width: number;
  height: number;
  columns: number;
  fontSize: number;
  fallingSymbols: FallingSymbol[];
}

function generateMatrixEffect(
  canvas: HTMLCanvasElement,
  options: { fontSize: number },
): MatrixEffect {
  const { width, height } = canvas;
  const columns = Math.ceil(width / options.fontSize);

  const fallingSymbols = Array.from({ length: columns }, (_, i) => ({
    x: i,
    y: 0,
  }));

  const ctx = canvas.getContext("2d");
  if (!ctx) throw "Could not get canvas context";

  return {
    ctx,
    width,
    height,
    columns,
    fontSize: options.fontSize,
    fallingSymbols,
  };
}

function drawMatrixEffect(
  effect: MatrixEffect,
  charStr: string,
): FallingSymbol[] {
  effect.ctx.fillStyle = "rgba(23,23,23,0.6)";
  effect.ctx.fillRect(0, 0, effect.width, effect.height);

  const nextFallingSymbols = effect.fallingSymbols.map((symbol) => {
    const char = charStr.charAt(Math.floor(Math.random() * charStr.length));

    const pixelX = symbol.x * effect.fontSize;
    const pixelY = symbol.y * effect.fontSize;

    drawSymbol(effect.ctx, char, pixelX, pixelY);

    const newY =
      pixelY > effect.height && Math.random() > 0.9995 ? 0 : symbol.y + 1;

    return { x: symbol.x, y: newY };
  });

  return nextFallingSymbols;
}

function drawSymbol(
  ctx: CanvasRenderingContext2D,
  char: string,
  x: number,
  y: number,
) {
  ctx.font = "18px monospace";
  ctx.fillStyle = "rgb(168 85 247)";
  ctx.fillText(char, x, y);
}

function MatrixEffectCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.width =
      document.documentElement.clientWidth || document.body.clientWidth;
    canvas.height =
      document.documentElement.clientHeight || document.body.clientHeight;

    let frameCount = 0;
    let animationFrameId: number;

    const effect = generateMatrixEffect(canvas, { fontSize: 18 });

    const render = () => {
      frameCount++;

      effect.fallingSymbols = drawMatrixEffect(
        effect,
        "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      );

      animationFrameId = window.requestAnimationFrame(render);
    };
    render();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas className="absolute left-0 top-0" ref={canvasRef}></canvas>;
}

export default MatrixEffectCanvas;
