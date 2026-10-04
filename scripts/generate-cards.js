import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createCanvas, GlobalFonts } from '@napi-rs/canvas';
import matter from 'gray-matter';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const EN_CONTENT_DIR = path.join(__dirname, '..', 'content', 'laws');
const ZHTW_CONTENT_DIR = path.join(__dirname, '..', 'content', 'laws', 'zh-TW');

const PUBLIC_CARDS_DIR = path.join(__dirname, '..', 'public', 'cards');
const EN_CARDS_DIR = path.join(PUBLIC_CARDS_DIR, 'en');
const ZHTW_CARDS_DIR = path.join(PUBLIC_CARDS_DIR, 'zh-TW');

// Ensure directories exist
fs.mkdirSync(EN_CARDS_DIR, { recursive: true });
fs.mkdirSync(ZHTW_CARDS_DIR, { recursive: true });

const CATEGORY_NAMES = {
  en: {
    'first-way': 'The First Way: Flow',
    'second-way': 'The Second Way: Feedback',
    'third-way': 'The Third Way: Learning',
  },
  'zh-TW': {
    'first-way': '第一步工作法：流動',
    'second-way': '第二步工作法：回饋',
    'third-way': '第三步工作法：學習',
  },
};

function wrapText(ctx, text, maxWidth) {
  const hasCJK = /[\u4e00-\u9fa5]/.test(text);
  const lines = [];

  if (hasCJK) {
    let currentLine = '';
    for (let i = 0; i < text.length; i++) {
      const char = text[i];
      const testLine = currentLine + char;
      if (ctx.measureText(testLine).width > maxWidth && currentLine.length > 0) {
        lines.push(currentLine);
        currentLine = char;
      } else {
        currentLine = testLine;
      }
    }
    if (currentLine) lines.push(currentLine);
  } else {
    const words = text.split(' ');
    let currentLine = '';
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      const testLine = currentLine ? `${currentLine} ${word}` : word;
      if (ctx.measureText(testLine).width > maxWidth && currentLine) {
        lines.push(currentLine);
        currentLine = word;
      } else {
        currentLine = testLine;
      }
    }
    if (currentLine) lines.push(currentLine);
  }

  return lines;
}

function drawCard(law, locale, outputPath) {
  const width = 1200;
  const height = 630;
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  // Background gradient: Deep slate (#0F172A) to dark background (#090D16)
  const bgGradient = ctx.createLinearGradient(0, 0, width, height);
  bgGradient.addColorStop(0, '#0F172A');
  bgGradient.addColorStop(1, '#070A10');
  ctx.fillStyle = bgGradient;
  ctx.fillRect(0, 0, width, height);

  // Outer Border Accent
  ctx.strokeStyle = 'rgba(59, 130, 246, 0.25)';
  ctx.lineWidth = 4;
  ctx.strokeRect(20, 20, width - 40, height - 40);

  // Top Glowing Radial Gradient
  const glowGradient = ctx.createRadialGradient(width - 200, 150, 10, width - 200, 150, 400);
  glowGradient.addColorStop(0, 'rgba(59, 130, 246, 0.15)');
  glowGradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
  ctx.fillStyle = glowGradient;
  ctx.fillRect(0, 0, width, height);

  // Header Bar: Brand Logo & Title
  ctx.fillStyle = '#FFFFFF';
  ctx.font = 'bold 28px sans-serif';
  ctx.fillText(locale === 'zh-TW' ? '敏捷法則' : 'Laws of Agile', 60, 80);

  ctx.fillStyle = '#3B82F6';
  ctx.font = 'bold 22px sans-serif';
  ctx.fillText('lawsofagile.com', width - 260, 80);

  // Divider Line
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(60, 110);
  ctx.lineTo(width - 60, 110);
  ctx.stroke();

  // Category Badge
  const categoryText = CATEGORY_NAMES[locale]?.[law.category] || law.category;
  ctx.fillStyle = 'rgba(59, 130, 246, 0.15)';
  ctx.fillRect(60, 140, ctx.measureText(categoryText).width + 32, 38);
  ctx.strokeStyle = 'rgba(59, 130, 246, 0.4)';
  ctx.lineWidth = 1;
  ctx.strokeRect(60, 140, ctx.measureText(categoryText).width + 32, 38);

  ctx.fillStyle = '#60A5FA';
  ctx.font = 'bold 16px sans-serif';
  ctx.fillText(categoryText.toUpperCase(), 76, 165);

  // Law Title
  ctx.fillStyle = '#FFFFFF';
  ctx.font = 'black 54px sans-serif';
  const titleY = 250;
  ctx.fillText(law.name, 60, titleY);

  // Summary / Definition Text
  ctx.fillStyle = '#CBD5E1';
  ctx.font = '30px sans-serif';
  const summaryLines = wrapText(ctx, law.summary, width - 120);
  let summaryY = titleY + 60;
  summaryLines.slice(0, 3).forEach((line) => {
    ctx.fillText(line, 60, summaryY);
    summaryY += 44;
  });

  // Origin Quote Box (if space permits)
  if (law.origin?.quote && summaryY < 480) {
    ctx.fillStyle = 'rgba(255, 255, 255, 0.03)';
    ctx.fillRect(60, summaryY + 20, width - 120, 90);
    ctx.strokeStyle = '#3B82F6';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(60, summaryY + 20);
    ctx.lineTo(60, summaryY + 110);
    ctx.stroke();

    ctx.fillStyle = '#94A3B8';
    ctx.font = 'italic 20px sans-serif';
    const quoteLines = wrapText(ctx, `"${law.origin.quote}"`, width - 180);
    if (quoteLines[0]) ctx.fillText(quoteLines[0], 84, summaryY + 55);
    if (quoteLines[1]) ctx.fillText(quoteLines[1], 84, summaryY + 85);
  }

  // Footer Branding Accent
  ctx.fillStyle = '#64748B';
  ctx.font = 'bold 16px sans-serif';
  ctx.fillText('LAWS OF AGILE • MASTER THE INVISIBLE FORCES THAT GOVERN SOFTWARE DELIVERY', 60, height - 45);

  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync(outputPath, buffer);
}

function generateAllCards() {
  // English Cards
  const enFiles = fs.readdirSync(EN_CONTENT_DIR).filter((f) => f.endsWith('.md'));
  enFiles.forEach((file) => {
    const filePath = path.join(EN_CONTENT_DIR, file);
    const content = fs.readFileSync(filePath, 'utf-8');
    const { data } = matter(content);
    if (data.id) {
      const outputPathEn = path.join(EN_CARDS_DIR, `${data.id}.png`);
      const outputPathRoot = path.join(PUBLIC_CARDS_DIR, `${data.id}.png`);
      drawCard(data, 'en', outputPathEn);
      drawCard(data, 'en', outputPathRoot);
    }
  });

  // Traditional Chinese Cards
  if (fs.existsSync(ZHTW_CONTENT_DIR)) {
    const zhTwFiles = fs.readdirSync(ZHTW_CONTENT_DIR).filter((f) => f.endsWith('.md'));
    zhTwFiles.forEach((file) => {
      const filePath = path.join(ZHTW_CONTENT_DIR, file);
      const content = fs.readFileSync(filePath, 'utf-8');
      const { data } = matter(content);
      if (data.id) {
        const outputPathZh = path.join(ZHTW_CARDS_DIR, `${data.id}.png`);
        drawCard(data, 'zh-TW', outputPathZh);
      }
    });
  }

  console.log('Cards successfully generated in public/cards/');
}

generateAllCards();
