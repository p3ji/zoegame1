// Cozy Plating Game - Main Game Logic & Audio Engine
import { THEMES, CLIENTS, PLATES, INGREDIENTS } from './assets.js';

// --- GAME STATE ---
let currentThemeId = 'tea_party';
let currentClient = CLIENTS[0];
let currentPlateId = 'porcelain_plate';
let placedItems = []; // Array of { id, itemType, x, y, rotation, scale, zIndex, flipX }
let activeItemId = null;
let itemCounter = 0;
let highestZIndex = 1;

// Stats & Journal
let totalDishesCreated = 0;
let journal = [];

// --- AUDIO ENGINE (Web Audio API) ---
let audioCtx = null;
let masterGain = null;

// Soundscapes (Ambient Loops)
const ambientNodes = {
  rain: null,
  fireplace: null,
  chimes: null
};
const ambientGains = {
  rain: null,
  fireplace: null,
  chimes: null
};

// Initialize Audio Context on first interaction
function initAudio() {
  if (audioCtx) return;
  
  try {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    audioCtx = new AudioContextClass();
    
    // Master Volume Control
    masterGain = audioCtx.createGain();
    masterGain.gain.setValueAtTime(0.5, audioCtx.currentTime); // 50% default volume
    masterGain.connect(audioCtx.destination);
    
    // Start Ambient Soundscapes
    startRainSoundscape();
    startFireplaceSoundscape();
    startChimesScheduler();
  } catch (e) {
    console.error("Web Audio API not supported", e);
  }
}

// Resume audio context if suspended (browser security)
function resumeAudio() {
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
}

// Helper: Synthesize Noise Buffer (for rain & crackle)
function createNoiseBuffer(color = 'white') {
  const bufferSize = 2 * audioCtx.sampleRate;
  const noiseBuffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
  const output = noiseBuffer.getChannelData(0);
  
  let lastOut = 0.0;
  for (let i = 0; i < bufferSize; i++) {
    const white = Math.random() * 2 - 1;
    if (color === 'brown') {
      // Brown noise (filter/integrate white noise)
      output[i] = (lastOut + (0.02 * white)) / 1.02;
      lastOut = output[i];
      output[i] *= 3.5; // compensation gain
    } else {
      // White noise
      output[i] = white;
    }
  }
  return noiseBuffer;
}

// --- SOUNDSCAPE: RAIN ---
function startRainSoundscape() {
  const noise = audioCtx.createBufferSource();
  noise.buffer = createNoiseBuffer('white');
  noise.loop = true;
  
  // High-cut filter for cozy soft rumble of rain
  const filter = audioCtx.createBiquadFilter();
  filter.type = 'lowpass';
  filter.frequency.setValueAtTime(600, audioCtx.currentTime);
  
  ambientGains.rain = audioCtx.createGain();
  ambientGains.rain.gain.setValueAtTime(0, audioCtx.currentTime); // Start muted
  
  noise.connect(filter);
  filter.connect(ambientGains.rain);
  ambientGains.rain.connect(masterGain);
  noise.start();
  
  // Raindrop spikes generator
  setInterval(() => {
    if (ambientGains.rain.gain.value > 0) {
      triggerSingleRaindrop();
    }
  }, 120);
}

function triggerSingleRaindrop() {
  // Synthesize single raindrop tap on window/roof
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  
  osc.type = 'sine';
  const baseFreq = 80 + Math.random() * 100;
  osc.frequency.setValueAtTime(baseFreq, audioCtx.currentTime);
  osc.frequency.exponentialRampToValueAtTime(10, audioCtx.currentTime + 0.05);
  
  gain.gain.setValueAtTime(0.005 * Math.random(), audioCtx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.05);
  
  osc.connect(gain);
  gain.connect(masterGain);
  
  osc.start();
  osc.stop(audioCtx.currentTime + 0.06);
}

// --- SOUNDSCAPE: FIREPLACE ---
function startFireplaceSoundscape() {
  const noise = audioCtx.createBufferSource();
  noise.buffer = createNoiseBuffer('brown');
  noise.loop = true;
  
  const filter = audioCtx.createBiquadFilter();
  filter.type = 'lowpass';
  filter.frequency.setValueAtTime(120, audioCtx.currentTime); // Low fireplace hum
  
  ambientGains.fireplace = audioCtx.createGain();
  ambientGains.fireplace.gain.setValueAtTime(0, audioCtx.currentTime); // Start muted
  
  noise.connect(filter);
  filter.connect(ambientGains.fireplace);
  ambientGains.fireplace.connect(masterGain);
  noise.start();
  
  // Random fireplace sparks crackle generator
  setInterval(() => {
    if (ambientGains.fireplace.gain.value > 0 && Math.random() < 0.15) {
      triggerFireplaceCrackle();
    }
  }, 200);
}

function triggerFireplaceCrackle() {
  const bufferSize = audioCtx.sampleRate * 0.02; // very short crackle
  const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < bufferSize; i++) {
    data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize / 3));
  }
  
  const source = audioCtx.createBufferSource();
  source.buffer = buffer;
  
  const filter = audioCtx.createBiquadFilter();
  filter.type = 'highpass';
  filter.frequency.setValueAtTime(2000, audioCtx.currentTime);
  
  const gain = audioCtx.createGain();
  gain.gain.setValueAtTime(0.02 + Math.random() * 0.03, audioCtx.currentTime);
  
  source.connect(filter);
  filter.connect(gain);
  gain.connect(masterGain);
  
  source.start();
}

// --- SOUNDSCAPE: WIND CHIMES ---
function startChimesScheduler() {
  ambientGains.chimes = audioCtx.createGain();
  ambientGains.chimes.gain.setValueAtTime(0, audioCtx.currentTime); // Start muted
  ambientGains.chimes.connect(masterGain);
  
  setInterval(() => {
    if (ambientGains.chimes.gain.value > 0 && Math.random() < 0.1) {
      triggerChime();
    }
  }, 4000);
}

function triggerChime() {
  // A beautiful wind chime uses multiple resonant sine waves
  const root = 600 + Math.random() * 800;
  const frequencies = [root, root * 1.2, root * 1.5, root * 2.1];
  const now = audioCtx.currentTime;
  
  frequencies.forEach((f, idx) => {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    
    osc.type = 'sine';
    osc.frequency.setValueAtTime(f, now);
    
    // Slow decay
    const duration = 1.5 + Math.random() * 2;
    gain.gain.setValueAtTime(0.0, now);
    gain.gain.linearRampToValueAtTime(0.012 / frequencies.length, now + 0.05);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);
    
    osc.connect(gain);
    gain.connect(ambientGains.chimes);
    
    osc.start(now);
    osc.stop(now + duration + 0.1);
  });
}

// --- INTERACTIVE SOUND EFFECTS ---
export function playSFX(type) {
  if (!audioCtx) return;
  resumeAudio();
  
  const now = audioCtx.currentTime;
  
  switch(type) {
    case 'wood_tap': {
      // Soothing wooden knock
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(140, now);
      osc.frequency.exponentialRampToValueAtTime(60, now + 0.08);
      
      gain.gain.setValueAtTime(0.25, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.1);
      
      osc.connect(gain);
      gain.connect(masterGain);
      osc.start(now);
      osc.stop(now + 0.12);
      break;
    }
    case 'ceramic_clink': {
      // Soft high clink of porcelain
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      
      osc.type = 'sine';
      osc.frequency.setValueAtTime(1800, now);
      osc.frequency.exponentialRampToValueAtTime(1200, now + 0.15);
      
      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);
      
      osc.connect(gain);
      gain.connect(masterGain);
      osc.start(now);
      osc.stop(now + 0.22);
      break;
    }
    case 'sauce_splat': {
      // Squelchy soft splash
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      
      osc.type = 'sine';
      osc.frequency.setValueAtTime(220, now);
      osc.frequency.exponentialRampToValueAtTime(80, now + 0.07);
      
      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
      
      osc.connect(gain);
      gain.connect(masterGain);
      osc.start(now);
      osc.stop(now + 0.10);
      break;
    }
    case 'paper_crunch': {
      // Soft rustling sound
      const bufferSize = audioCtx.sampleRate * 0.15;
      const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize / 4));
      }
      
      const source = audioCtx.createBufferSource();
      source.buffer = buffer;
      
      const filter = audioCtx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(800, now);
      filter.Q.setValueAtTime(1.5, now);
      
      const gain = audioCtx.createGain();
      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);
      
      source.connect(filter);
      filter.connect(gain);
      gain.connect(masterGain);
      source.start(now);
      break;
    }
    case 'trash_delete': {
      // Satisfying sweep down
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      
      osc.type = 'sine';
      osc.frequency.setValueAtTime(320, now);
      osc.frequency.exponentialRampToValueAtTime(80, now + 0.15);
      
      gain.gain.setValueAtTime(0.15, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);
      
      osc.connect(gain);
      gain.connect(masterGain);
      osc.start(now);
      osc.stop(now + 0.18);
      break;
    }
  }
}

// Control Volume & States
export function setMasterVolume(val) {
  initAudio();
  if (masterGain) {
    masterGain.gain.linearRampToValueAtTime(val, audioCtx.currentTime + 0.05);
  }
}

export function toggleAmbientSound(type, state) {
  initAudio();
  resumeAudio();
  const gainNode = ambientGains[type];
  if (gainNode) {
    const targetVolume = state ? 0.35 : 0.0;
    gainNode.gain.linearRampToValueAtTime(targetVolume, audioCtx.currentTime + 0.8);
  }
}

// --- GAME LOGIC ---

// Load Data from Local Storage
function loadData() {
  try {
    const savedCount = localStorage.getItem('cozy_plating_dishes_count');
    if (savedCount) {
      totalDishesCreated = parseInt(savedCount, 10);
    }
    const savedJournal = localStorage.getItem('cozy_plating_journal');
    if (savedJournal) {
      journal = JSON.parse(savedJournal);
    }
  } catch (e) {
    console.error("Local storage could not be loaded", e);
  }
  updateStatsUI();
}

// Save Data to Local Storage
function saveData() {
  try {
    localStorage.setItem('cozy_plating_dishes_count', totalDishesCreated.toString());
    localStorage.setItem('cozy_plating_journal', JSON.stringify(journal));
  } catch (e) {
    console.error("Local storage could not be saved", e);
  }
  updateStatsUI();
}

function updateStatsUI() {
  const counterEl = document.getElementById('dishes-counter');
  if (counterEl) {
    counterEl.textContent = totalDishesCreated;
  }
}

// Select Plate
export function selectPlate(plateId) {
  if (!PLATES[plateId]) return;
  currentPlateId = plateId;
  
  // Play plate specific tap sound
  playSFX(PLATES[plateId].sound || 'ceramic_clink');
  
  // Render Plate in Canvas
  const canvasPlate = document.getElementById('canvas-plate-layer');
  if (canvasPlate) {
    canvasPlate.innerHTML = PLATES[plateId].svg;
  }
}

// Change Active Client / Theme
export function setClientTheme(clientIndex) {
  currentClient = CLIENTS[clientIndex];
  currentThemeId = currentClient.theme;
  
  // Update Prompt UI
  document.getElementById('client-name').textContent = currentClient.name;
  document.getElementById('client-avatar').textContent = currentClient.avatar;
  const msgs = currentClient.messages;
  const randomMsg = msgs[Math.floor(Math.random() * msgs.length)];
  document.getElementById('client-bubble-text').textContent = `"${randomMsg}"`;
  
  // Set Recommended Plate
  const themeObj = THEMES[currentThemeId];
  if (themeObj && themeObj.recommendedPlate) {
    selectPlate(themeObj.recommendedPlate);
  }
  
  // Refresh Drawer Category & Content
  renderIngredientDrawer();
  
  // Clean plate for new client
  clearPlate();
}

export function clearPlate() {
  placedItems = [];
  activeItemId = null;
  itemCounter = 0;
  highestZIndex = 1;
  renderPlacedItems();
  hideItemControls();
}

// Spawn Ingredient onto Plate
export function addIngredientToPlate(ingredientId) {
  const ingData = INGREDIENTS[ingredientId];
  if (!ingData) return;
  
  // Play ingredient sound
  playSFX(ingData.sound || 'sauce_splat');
  
  itemCounter++;
  highestZIndex++;
  
  // Stagger spawn coordinates so they don't pile up directly on top of each other
  const offset = (placedItems.length % 5) * 15 - 30;
  
  const newItem = {
    id: `item-${itemCounter}`,
    itemType: ingredientId,
    x: offset,
    y: offset,
    rotation: 0,
    scale: 1.0,
    zIndex: highestZIndex,
    flipX: false
  };
  
  placedItems.push(newItem);
  activeItemId = newItem.id;
  
  renderPlacedItems();
  updateItemControls();
}

// Render Placed Ingredients (Persistent DOM update to maintain pointer capture)
function renderPlacedItems() {
  const container = document.getElementById('canvas-ingredients-layer');
  if (!container) return;
  
  // Remove elements that are no longer in placedItems
  const activeIds = placedItems.map(item => item.id);
  Array.from(container.children).forEach(el => {
    if (!activeIds.includes(el.id)) {
      el.remove();
    }
  });
  
  // Add new or update existing elements
  placedItems.forEach(item => {
    let el = document.getElementById(item.id);
    if (!el) {
      el = document.createElement('div');
      el.id = item.id;
      el.className = 'placed-item';
      
      const data = INGREDIENTS[item.itemType];
      el.innerHTML = data.svg;
      
      setupItemInteraction(el, item);
      container.appendChild(el);
    }
    
    // Update active highlight classes
    if (activeItemId === item.id) {
      el.classList.add('active');
    } else {
      el.classList.remove('active');
    }
    
    // Update transform and zIndex styles directly without rebuilding element
    el.style.transform = `translate(-50%, -50%) translate(${item.x}px, ${item.y}px) rotate(${item.rotation}deg) scale(${item.scale}) scaleX(${item.flipX ? -1 : 1})`;
    el.style.zIndex = item.zIndex;
  });
}

// Pointer Event Drag System
function setupItemInteraction(el, item) {
  let isDragging = false;
  let startX = 0;
  let startY = 0;
  let itemStartX = 0;
  let itemStartY = 0;
  
  el.addEventListener('pointerdown', (e) => {
    e.stopPropagation();
    initAudio(); // Initialize audio if not already done
    resumeAudio();
    
    activeItemId = item.id;
    renderPlacedItems();
    updateItemControls();
    
    isDragging = true;
    startX = e.clientX;
    startY = e.clientY;
    itemStartX = item.x;
    itemStartY = item.y;
    
    el.setPointerCapture(e.pointerId);
    el.classList.add('dragging');
  });
  
  el.addEventListener('pointermove', (e) => {
    if (!isDragging) return;
    e.stopPropagation();
    
    const dx = e.clientX - startX;
    const dy = e.clientY - startY;
    
    item.x = itemStartX + dx;
    item.y = itemStartY + dy;
    
    // Bounds clamping within plate canvas (say, 160px from center max)
    const distance = Math.sqrt(item.x * item.x + item.y * item.y);
    if (distance > 170) {
      const angle = Math.atan2(item.y, item.x);
      item.x = 170 * Math.cos(angle);
      item.y = 170 * Math.sin(angle);
    }
    
    el.style.transform = `translate(-50%, -50%) translate(${item.x}px, ${item.y}px) rotate(${item.rotation}deg) scale(${item.scale}) scaleX(${item.flipX ? -1 : 1})`;
  });
  
  el.addEventListener('pointerup', (e) => {
    if (!isDragging) return;
    isDragging = false;
    el.releasePointerCapture(e.pointerId);
    el.classList.remove('dragging');
    
    // Gentle tap sound when placed down
    playSFX(INGREDIENTS[item.itemType].sound === 'ceramic_clink' ? 'ceramic_clink' : 'wood_tap');
  });
  
  el.addEventListener('pointercancel', (e) => {
    if (!isDragging) return;
    isDragging = false;
    el.releasePointerCapture(e.pointerId);
    el.classList.remove('dragging');
  });
}

// Update Active Selection Controls Panel
function updateItemControls() {
  const activeItem = placedItems.find(i => i.id === activeItemId);
  const panel = document.getElementById('item-controls-panel');
  
  if (!activeItem || !panel) {
    hideItemControls();
    return;
  }
  
  panel.classList.remove('hidden');
  
  // Update values of slider controls
  const rotateSlider = document.getElementById('control-rotate');
  const scaleSlider = document.getElementById('control-scale');
  
  if (rotateSlider) rotateSlider.value = activeItem.rotation;
  if (scaleSlider) scaleSlider.value = activeItem.scale;
}

function hideItemControls() {
  const panel = document.getElementById('item-controls-panel');
  if (panel) panel.classList.add('hidden');
}

// Set Transform from sliders
export function handleRotateControl(val) {
  const item = placedItems.find(i => i.id === activeItemId);
  if (!item) return;
  item.rotation = parseInt(val, 10);
  renderPlacedItems();
}

export function handleScaleControl(val) {
  const item = placedItems.find(i => i.id === activeItemId);
  if (!item) return;
  item.scale = parseFloat(val);
  renderPlacedItems();
}

export function handleFlipControl() {
  const item = placedItems.find(i => i.id === activeItemId);
  if (!item) return;
  item.flipX = !item.flipX;
  playSFX('wood_tap');
  renderPlacedItems();
}

export function handleLayerUpControl() {
  const item = placedItems.find(i => i.id === activeItemId);
  if (!item) return;
  highestZIndex++;
  item.zIndex = highestZIndex;
  playSFX('wood_tap');
  renderPlacedItems();
}

export function handleLayerDownControl() {
  const item = placedItems.find(i => i.id === activeItemId);
  if (!item) return;
  
  // Find minimum z-index and put it below it
  const minZ = Math.min(...placedItems.map(i => i.zIndex));
  item.zIndex = minZ - 1;
  playSFX('wood_tap');
  renderPlacedItems();
}

export function handleDeleteControl() {
  if (!activeItemId) return;
  placedItems = placedItems.filter(i => i.id !== activeItemId);
  activeItemId = null;
  playSFX('trash_delete');
  renderPlacedItems();
  hideItemControls();
}

// --- RENDER DRAWER CONTENTS ---
function renderIngredientDrawer() {
  const drawer = document.getElementById('drawer-items-container');
  if (!drawer) return;
  
  drawer.innerHTML = '';
  
  const themeObj = THEMES[currentThemeId];
  if (!themeObj) return;
  
  themeObj.ingredients.forEach(id => {
    const data = INGREDIENTS[id];
    if (!data) return;
    
    const card = document.createElement('button');
    card.className = 'drawer-card';
    card.title = data.name;
    card.innerHTML = `
      <div class="card-visual">${data.svg}</div>
      <span class="card-label">${data.name}</span>
    `;
    
    card.addEventListener('click', () => {
      addIngredientToPlate(id);
    });
    
    drawer.appendChild(card);
  });
}

function renderPlateDrawer() {
  const container = document.getElementById('plate-selection-row');
  if (!container) return;
  
  container.innerHTML = '';
  Object.keys(PLATES).forEach(id => {
    const plate = PLATES[id];
    const button = document.createElement('button');
    button.className = `plate-btn ${currentPlateId === id ? 'active' : ''}`;
    button.title = plate.name;
    button.innerHTML = plate.svg;
    
    button.addEventListener('click', () => {
      selectPlate(id);
      document.querySelectorAll('.plate-btn').forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
    });
    
    container.appendChild(button);
  });
}

// --- POLAROID SHOT & SAVING ---
// Render SVG elements and Plate to a Canvas
async function renderDishToCanvas(canvas, size = 450) {
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');
  
  // Fill warm cream farmhouse linen background
  ctx.fillStyle = '#FAF7E8';
  ctx.fillRect(0, 0, size, size);
  
  // Draw soft texture cross-hatching
  ctx.strokeStyle = '#EAE2C2';
  ctx.lineWidth = 1;
  ctx.globalAlpha = 0.4;
  for (let i = 0; i < size; i += 12) {
    ctx.beginPath(); ctx.moveTo(i, 0); ctx.lineTo(i, size); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(0, i); ctx.lineTo(size, i); ctx.stroke();
  }
  ctx.globalAlpha = 1.0;
  
  // Render Plate SVG
  const plateSvg = PLATES[currentPlateId].svg;
  await drawSvgToCanvasContext(ctx, plateSvg, 25, 25, size - 50, size - 50);
  
  // Render Ingredients
  const sortedItems = [...placedItems].sort((a, b) => a.zIndex - b.zIndex);
  const centerOffset = size / 2;
  
  for (const item of sortedItems) {
    const ingData = INGREDIENTS[item.itemType];
    if (!ingData) continue;
    
    ctx.save();
    // Translate to center, apply position offset
    // Placed item coordinates are relative to plate center (200x200 grid in SVG, we translate to canvas scale)
    const canvasScale = (size - 50) / 400; // ratio of canvas size to standard 400x400 plate coordinates
    const posX = centerOffset + (item.x * canvasScale);
    const posY = centerOffset + (item.y * canvasScale);
    
    ctx.translate(posX, posY);
    ctx.rotate((item.rotation * Math.PI) / 180);
    ctx.scale(item.scale * canvasScale * 1.5, item.scale * canvasScale * 1.5); // adjustment factor for display sizing
    if (item.flipX) {
      ctx.scale(-1, 1);
    }
    
    // Draw SVG
    // Placed ingredients default grid is 100x100 or 120x120. We draw centered on translate.
    const viewBox = ingData.svg.match(/viewBox="0 0 (\d+) (\d+)"/);
    const w = viewBox ? parseInt(viewBox[1], 10) : 100;
    const h = viewBox ? parseInt(viewBox[2], 10) : 100;
    
    await drawSvgToCanvasContext(ctx, ingData.svg, -w/2, -h/2, w, h);
    ctx.restore();
  }
}

// Helper: Convert SVG String to Blob and draw onto canvas
function drawSvgToCanvasContext(ctx, svgString, x, y, width, height) {
  return new Promise((resolve) => {
    // Add xmlns if not present
    let cleanSvg = svgString.trim();
    if (!cleanSvg.includes('xmlns=')) {
      cleanSvg = cleanSvg.replace('<svg', '<svg xmlns="http://www.w3.org/2000/svg"');
    }
    
    const svgBlob = new Blob([cleanSvg], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(svgBlob);
    const img = new Image();
    
    img.onload = () => {
      ctx.drawImage(img, x, y, width, height);
      URL.revokeObjectURL(url);
      resolve();
    };
    img.onerror = () => {
      console.error("Failed to load SVG for canvas render", cleanSvg);
      URL.revokeObjectURL(url);
      resolve();
    };
    img.src = url;
  });
}

export async function finishPlating() {
  if (placedItems.length === 0) {
    alert("Place some ingredients on your plate first!");
    return;
  }
  
  playSFX('paper_crunch');
  
  // Show spinner / loading state on button
  const finishBtn = document.getElementById('btn-finish-plating');
  finishBtn.textContent = 'Snapping Polaroid...';
  finishBtn.disabled = true;
  
  // Create flat image
  const tempCanvas = document.createElement('canvas');
  await renderDishToCanvas(tempCanvas, 500);
  const dataUrl = tempCanvas.toDataURL('image/png');
  
  // Create default dish comment based on theme and ingredients
  const dateStr = new Date().toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' });
  const themeName = THEMES[currentThemeId].name;
  
  // Reset button state
  finishBtn.textContent = 'Finish Plating 📷';
  finishBtn.disabled = false;
  
  // Show Polaroid Modal
  const modal = document.getElementById('polaroid-save-modal');
  const polaroidImg = document.getElementById('polaroid-shot-image');
  const modalTitle = document.getElementById('modal-dish-title');
  const modalDate = document.getElementById('modal-dish-date');
  const clientResponseText = document.getElementById('client-response-text');
  
  polaroidImg.src = dataUrl;
  modalTitle.value = `My ${themeName}`;
  modalDate.textContent = dateStr;
  
  // Generate client response
  const responseMsg = generateClientFeedback();
  clientResponseText.innerHTML = `<strong>${currentClient.name}:</strong> "${responseMsg}"`;
  
  // Open Modal
  modal.classList.remove('hidden');
}

function generateClientFeedback() {
  const itemsUsed = placedItems.map(i => i.itemType);
  
  // Check matching ingredients
  const themeData = THEMES[currentThemeId];
  const matchedCount = itemsUsed.filter(item => themeData.ingredients.includes(item)).length;
  
  if (matchedCount === 0) {
    return "Oh! That looks very unique... not quite what I imagined, but it has a very creative vibe.";
  } else if (matchedCount < 3) {
    return "This is lovely! A neat arrangement. I appreciate the visual feel you've created here.";
  } else {
    return "Absolutely magical! The colors, the layout, it is precisely what I needed to cozy up today. Thank you so much!";
  }
}

export function savePolaroidToJournal() {
  const modalTitle = document.getElementById('modal-dish-title').value || "Cozy Dish";
  const polaroidImg = document.getElementById('polaroid-shot-image').src;
  const dateStr = document.getElementById('modal-dish-date').textContent;
  
  const dishLog = {
    id: `dish-${Date.now()}`,
    title: modalTitle,
    date: dateStr,
    themeId: currentThemeId,
    clientName: currentClient.name,
    imageData: polaroidImg,
    itemCount: placedItems.length
  };
  
  journal.unshift(dishLog); // add to top
  totalDishesCreated++;
  
  saveData();
  
  // Close modal
  document.getElementById('polaroid-save-modal').classList.add('hidden');
  
  // Soft success sound
  playSFX('paper_crunch');
  
  // Clear the plate
  clearPlate();
}

// --- RENDER JOURNAL VIEW ---
export function renderJournalView() {
  const container = document.getElementById('journal-list');
  if (!container) return;
  
  container.innerHTML = '';
  
  if (journal.length === 0) {
    container.innerHTML = `
      <div class="empty-journal-msg">
        <p>Your journal is empty.</p>
        <p style="font-size:0.9rem; opacity:0.7">Create beautiful dishes and click "Finish Plating" to save them here! 📖</p>
      </div>
    `;
    return;
  }
  
  journal.forEach(dish => {
    const card = document.createElement('div');
    card.className = 'journal-polaroid-card';
    card.innerHTML = `
      <div class="polaroid-photo-wrapper">
        <img class="polaroid-img" src="${dish.imageData}" alt="${dish.title}">
      </div>
      <div class="polaroid-caption">
        <h3 class="polaroid-title">${dish.title}</h3>
        <div class="polaroid-meta">
          <span>${dish.date}</span> • <span>${dish.clientName}'s Request</span>
        </div>
      </div>
      <button class="btn-delete-polaroid" title="Delete from Journal">✕</button>
    `;
    
    // Delete polaroid button click
    card.querySelector('.btn-delete-polaroid').addEventListener('click', (e) => {
      e.stopPropagation();
      if (confirm("Are you sure you want to delete this memory from your journal?")) {
        deleteJournalEntry(dish.id);
      }
    });
    
    container.appendChild(card);
  });
}

function deleteJournalEntry(id) {
  journal = journal.filter(d => d.id !== id);
  saveData();
  playSFX('trash_delete');
  renderJournalView();
}

// --- INITIALIZATION ---
window.addEventListener('DOMContentLoaded', () => {
  // Bind global UI events
  loadData();
  renderPlateDrawer();
  setClientTheme(0);
  
  // Client selection navigation
  const clientBtns = document.querySelectorAll('.client-select-btn');
  clientBtns.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
      clientBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      setClientTheme(idx);
    });
  });
  
  // Ambient Sound Toggles
  const rainToggle = document.getElementById('soundscape-rain');
  const fireToggle = document.getElementById('soundscape-fire');
  const chimeToggle = document.getElementById('soundscape-chime');
  const volControl = document.getElementById('volume-control');
  
  [rainToggle, fireToggle, chimeToggle].forEach(toggle => {
    toggle.addEventListener('change', (e) => {
      const type = e.target.dataset.sound;
      toggleAmbientSound(type, e.target.checked);
      playSFX('wood_tap');
    });
  });
  
  volControl.addEventListener('input', (e) => {
    setMasterVolume(parseFloat(e.target.value));
  });
  
  // Canvas Control Bindings
  document.getElementById('control-rotate').addEventListener('input', (e) => {
    handleRotateControl(e.target.value);
  });
  document.getElementById('control-scale').addEventListener('input', (e) => {
    handleScaleControl(e.target.value);
  });
  document.getElementById('btn-flip').addEventListener('click', handleFlipControl);
  document.getElementById('btn-layer-up').addEventListener('click', handleLayerUpControl);
  document.getElementById('btn-layer-down').addEventListener('click', handleLayerDownControl);
  document.getElementById('btn-delete-item').addEventListener('click', handleDeleteControl);
  
  // Plate and Game Control Bindings
  document.getElementById('btn-clear-plate').addEventListener('click', () => {
    if (placedItems.length > 0 && confirm("Clear your plate and start fresh?")) {
      clearPlate();
      playSFX('trash_delete');
    }
  });
  
  document.getElementById('btn-finish-plating').addEventListener('click', finishPlating);
  
  // Journal Modal bindings
  document.getElementById('btn-open-journal').addEventListener('click', () => {
    playSFX('paper_crunch');
    renderJournalView();
    document.getElementById('journal-overlay').classList.remove('hidden');
  });
  
  document.getElementById('btn-close-journal').addEventListener('click', () => {
    playSFX('paper_crunch');
    document.getElementById('journal-overlay').classList.add('hidden');
  });
  
  document.getElementById('btn-modal-save').addEventListener('click', savePolaroidToJournal);
  document.getElementById('btn-modal-cancel').addEventListener('click', () => {
    playSFX('paper_crunch');
    document.getElementById('polaroid-save-modal').classList.add('hidden');
  });
  
  // Click outside to close modals
  document.getElementById('polaroid-save-modal').addEventListener('click', (e) => {
    if (e.target.id === 'polaroid-save-modal') {
      document.getElementById('polaroid-save-modal').classList.add('hidden');
    }
  });
  
  document.getElementById('journal-overlay').addEventListener('click', (e) => {
    if (e.target.id === 'journal-overlay') {
      document.getElementById('journal-overlay').classList.add('hidden');
    }
  });
  
  // Close active selection when clicking elsewhere on the table
  document.getElementById('tabletop-wood').addEventListener('click', (e) => {
    if (e.target.id === 'tabletop-wood' || e.target.id === 'canvas-plate-layer') {
      activeItemId = null;
      renderPlacedItems();
      hideItemControls();
    }
  });
});
