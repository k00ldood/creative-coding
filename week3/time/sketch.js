let debug = false
let pool1, pool2, pool3, faucet;

const water = { r: 86, g: 186, b: 209 }
const outline = { r: 97, g: 72, b: 52}
const bg = { r: 127, g: 82, b: 62}

class Faucet {
  constructor(centerX, maxY) {
    this.x = centerX
    this.y = maxY - 15 // the strokeWeight
    this.steps = this.y / 60
    this.lasty = 0
  }

  draw() {
    stroke(water.r, water.g, water.b)
    strokeWeight(15)
    this.lasty += this.steps
    point(this.x, this.lasty)
    if (this.lasty > this.y) this.lasty = 0
  }
}

class Pool {
  constructor(startx, starty, width, height, spill_height) {
    this.startx = startx
    this.starty = starty
    this.width = width
    this.height = height
    this.door_y = (this.height / 2) + this.starty // initial, p4.y
    this.spill_h = spill_height
    this.last_fill = 0
  }

  draw(f, max) {
    const v = f()
    const p1 = { x: this.startx, y: this.starty },
          p2 = { x: this.startx, y: this.starty + this.height },
          p3 = { x: this.startx + this.width, y: this.starty + this.height },
          p4 = { x: this.startx + this.width, y: (this.height / 2) + this.starty };

    // background
    noStroke()
    fill(bg.r, bg.g, bg.b)
    rect(this.startx, p3.y, this.width + 2, height)

    // stroke of container to compensate water visually being blocked
    const strokeH = 5

    // water level
    fill(water.r, water.g, water.b)
    let fill_height = map(v, 0, max, p2.y - strokeH, p4.y)

    // for animating water level dropping
    if (v < this.last_fill) {
      if (debug) console.log("dropping water level")
      this.last_fill -= 1
      fill_height = map(this.last_fill, 0, max, p2.y - strokeH, p4.y)
    } else {
      this.last_fill = v
    }

    noStroke()
    beginShape()
    vertex(p1.x, fill_height)
    vertex(p2.x, p2.y)
    vertex(p3.x, p3.y)
    vertex(p4.x, fill_height)
    endShape()

    // edge of water, visual only
    const quarter = (p3.x - p1.x) / 4
    const c1_x = p1.x + quarter + random(50)
    const c1_y = fill_height + -15
    const c2_x = p1.x + (quarter * 3) + random(50)
    bezier(p1.x, fill_height, c1_x, c1_y, c2_x, fill_height, p4.x, fill_height)
    
    // container outline
    strokeWeight(strokeH * 2)
    stroke(outline.r, outline.g, outline.b)
    line(p1.x, p1.y, p2.x, p2.y)
    line(p2.x, p2.y, p3.x, p3.y)


    // spill effect, based on the door height
    if (fill_height <= this.door_y) {
      noStroke()
      quad(p3.x - 3, fill_height - 1, p3.x - 3, this.spill_h, p3.x + 30, this.spill_h, p3.x + 20, fill_height + 25)
    }

    // animate door
    if (v === 0) { // v === 0
      this.door_y += 2
      if (this.door_y > p3.y) this.door_y = p3.y
    } else {
      this.door_y -= 2
      if (this.door_y < p4.y) this.door_y = p4.y
    }
    stroke(outline.r, outline.g, outline.b)
    line(p3.x, p3.y, p4.x, this.door_y)


    if (!debug) return
    stroke(0,0,0)
    strokeWeight(10)
    point(p1.x, p1.y)
    point(p2.x, p2.y)
    point(p3.x, p3.y)
    point(p4.x, p4.y)
  }
}

function setup(){
  canvas = createCanvas(800,800);

  const padding = 10
  const p_maxW = (width / 2) / 3
  const p_maxH = (height / 2) / 3
  
  faucet = new Faucet(padding + p_maxW / 2, p_maxH)

  // last arg, is next pool(?, x, ?, x) x + x
  let offset = padding
  pool1 = new Pool(offset, 0, p_maxW, p_maxH, p_maxH + p_maxH)
  offset += p_maxW
  pool2 = new Pool(offset, p_maxH, p_maxW + (padding * 5), p_maxH, p_maxH * 2 + p_maxH)
  offset += p_maxW + (padding * 5)
  pool3 = new Pool(offset, p_maxH * 2, p_maxW + (padding * 9), p_maxH, 700)
}

function draw(){
  background(220);

  noStroke()
  fill(bg.r, bg.g, bg.b)
  rect(0, 10, 10, height)

  faucet.draw()

  pool1.draw(second, 60)
  pool2.draw(minute, 60)
  pool3.draw(hour, 24)

  if (!debug) return
  noStroke()
  fill(0, 0, 0)
  textSize(32)
  text(second(), 10, 700)
  text(minute(), 150, 700)
  text(hour(), 300, 700)
}

function mousePressed() {
  if (!debug) return
  console.log(mouseX, mouseY)
}