# Thinking Process Guidelines

## Table of Contents

- [Thinking Process Guidelines](#thinking-process-guidelines)
  - [Table of Contents](#table-of-contents)
  - [1. Workflow Planning](#1-workflow-planning)
  - [2.1. Board Functions (Hardcoded)](#21-board-functions-hardcoded)
  - [2.2. Board Functions (Generated)](#22-board-functions-generated)
  - [3. Input Functions](#3-input-functions)
  - [4. Movement Functions](#4-movement-functions)
  - [5. Game Rule Functions](#5-game-rule-functions)
  - [6. Game Play Loop](#6-game-play-loop)
- [WRITE YOUR THINKING PROCESS BELOW. ](#write-your-thinking-process-below)

## <span style="font-weight:bold; color: black; background-color: gold; padding: 0.5rem 2rem;">1. Workflow Planning</span>

↳ Draw a flowchart or write steps describing:

<p style="display: flex; align-items: center; gap: 1rem;">
<span style="font-weight:bold; color: wheat; background-color: blue; padding: 0.5rem 2rem; border-radius: 0.5em;">Game start</span>
<span style="color: wheat; font-weight:bold; font-size:2rem; ">→</span>
<span style="font-weight:bold; color: wheat; background-color: blue; padding: 0.5rem 2rem; border-radius: 0.5em;">Read input</span>
<span style="color: wheat; font-weight:bold; font-size:2rem;">→</span>
<span style="font-weight:bold; color: wheat; background-color: blue; padding: 0.5rem 2rem; border-radius: 0.5em;">Update position</span>
<span style="color: wheat; font-weight:bold; font-size:2rem;">→</span>
<span style="font-weight:bold; color: wheat; background-color: blue; padding: 0.5rem 2rem; border-radius: 0.5em;">Check rules</span>
<span style="color: wheat; font-weight:bold; font-size:2rem;">→</span>
<span style="font-weight:bold; color: wheat; background-color: blue; padding: 0.5rem 2rem; border-radius: 0.5em;">End/Continue</span>
</p>

↳ Must include:

- Input/output of each function.
- Edge cases (invalid input, boundaries, hole/hat tiles).

## <span style="font-weight:bold; color: black; background-color: gold; padding: 0.5rem 2rem; margin-top: 1rem; border-buttom: none;">2.1. Board Functions (Hardcoded)</span>

↳ Prints the hardcoded board in terminal.

<span style="font-weight:bold; color: gold;">Thinking process should explain:</span>

- How the board is represented (2D array).
- Tile types (PLAYER, EMPTY, HOLE, HAT).

## <span style="font-weight:bold; color: black; background-color: gold; padding: 0.5rem 2rem;">2.2. Board Functions (Generated)</span>

↳ Creates a random board with player, hat, and holes.
↳ Prints the board in terminal.

<span style="font-weight:bold; color: gold;">Thinking process should explain:</span>

- How the board is represented (2D array).
- Tile types (PLAYER, EMPTY, HOLE, HAT).
- How random placement avoids overlaps.

## <span style="font-weight:bold; color: black; background-color: gold; padding: 0.5rem 2rem;">3. Input Functions</span>

↳ Reads and validates user input (w, a, s, d).
↳ Logs invalid input.

<span style="font-weight:bold; color: gold;">Thinking process should explain:</span>

- Input/output.
- Edge cases (invalid input, boundaries).
- How player position is updated.

## <span style="font-weight:bold; color: black; background-color: gold; padding: 0.5rem 2rem;">4. Movement Functions</span>

↳ Updates playerRow / playerCol based on the move.

<span style="font-weight:bold; color: gold;">Thinking process should explain:</span>

- Input/output.
- Edge cases (invalid input, boundaries).
- How player position is updated.

## <span style="font-weight:bold; color: black; background-color: gold; padding: 0.5rem 2rem;">5. Game Rule Functions</span>

↳ Checks for out-of-bounds, falling into a hole, or finding the hat.

<span style="font-weight:bold; color: pink;">&nbsp;Game Rules:&nbsp;</span>

- Wins by finding the hat.
- Loses by landing in a hole.
- Loses by moving outside the board.

<span style="font-weight:bold; color: gold;">Thinking process should explain:</span>

- How to determine win/loss conditions.
- Handling messages for win/loss conditions.

## <span style="font-weight:bold; color: black; background-color: gold; padding: 0.5rem 2rem;">6. Game Play Loop</span>

↳ Combine all functions into a playable loop.
↳ Ensure messages appear correctly, board prints at start, and invalid input is handled.

<span style="font-weight:bold; color: gold;">Thinking process should explain:</span>

- How to determine win/loss conditions.
- Handling messages for win/loss conditions
- How to update the board when the player moves.

---

# <p style="display: flex; align-items: center; gap: 0.5em;"><span style="font-weight:bold; color: white; background-color: lightSeaGreen; padding: 0.5rem 2rem;">WRITE YOUR THINKING PROCESS BELOW.</span><span style="font-weight:bold; color: white; background-color: lightSeaGreen; padding: 0.5rem 0;">&nbsp;</span></p>

# 🧠 THINK PROCESS – ขั้นตอนการคิดและออกแบบเกม Hat Game

ไฟล์นี้อธิบาย "กระบวนการคิด" (Think Process) ตั้งแต่เริ่มออกแบบ ไปจนถึงการเขียนฟังก์ชันต่าง ๆ  
โดยเน้นการแยกปัญหาให้เป็นส่วนเล็ก ๆ เพื่อทำให้โค้ดอ่านง่าย แก้ไขง่าย และเข้าใจลอจิกได้ชัดเจน

---
# Thinking Process

## 1. Workflow Planning

ผมออกแบบเกมตามลำดับการทำงานนี้:

**Start → Print Board → Read Input → Validate Input → Calculate New Position → Check Tile → Update or End**

ลำดับที่เกิดขึ้นใน 1 เทิร์นของเกม:

1. แสดงกระดานด้วย `printBoard()`
2. รับ input จากผู้เล่นด้วย `getMove()`
3. ตรวจว่าผู้เล่นพิมพ์ทิศทางถูกหรือไม่ด้วย `isValidMove()`
4. ถ้า input ถูกต้อง → หาตำแหน่งใหม่ด้วย `getNewPosition()`
5. ใช้ `checkMoveResult()` เพื่อตรวจว่า:
   - เดินออกนอกกระดาน (`out`)
   - เดินลงหลุม (`hole`)
   - เดินไปถึงหมวก (`hat`)
   - หรือเดินได้ปกติ (`ok`)
6. ถ้าเดินได้ → อัปเดตตำแหน่งของผู้เล่นบนกระดานด้วย `updatePlayerPosition()`
7. ถ้าเจอผลลัพธ์ที่ทำให้เกมจบ (`out`, `hole`, `hat`) → แสดงข้อความและหยุดเกม

### Edge Cases ที่คิดไว้
- ผู้เล่นพิมพ์ตัวอื่นที่ไม่ใช่ w/a/s/d
- เดินเกินขอบ array
- เจอหลุมทันที
- เจอหมวกทันที


---

## 2.1. Board Functions (Hardcoded)

กระดานแบบกำหนดเอง (hardcoded) แทนการสร้างแบบสุ่ม:

```js
let board = [
  [PLAYER, EMPTY, HOLE],
  [EMPTY,  HOLE,  EMPTY],
  [EMPTY,  HAT,   EMPTY],
];
```

### ตัวอักษรบนกระดาน
- `PLAYER = "*"` ผู้เล่น
- `EMPTY = "░"` ช่องว่าง
- `HOLE = "O"` หลุม
- `HAT = "^"` หมวก

### การแสดงกระดาน
ใช้ `printBoard()` โดยแปลง array 2 มิติให้เป็นข้อความหลายบรรทัด:

```js
const drawing = board
  .map(row => row.join(""))
  .join("\n");
```

กระดานจะแสดงแบบนี้:

```
*░O
░O░
░^░
```

---

## 2.2. Board Functions (Generated)

(เวอร์ชันนี้ยังไม่ได้ทำ generate board)

แต่ถ้าจะทำแนวคิดคือ:
- สร้าง 2D array เปล่า
- วาง player ที่ (0,0)
- สุ่มตำแหน่งหมวก (ไม่ให้ซ้ำ)
- สุ่มหลุมตามเปอร์เซ็นต์ แล้วต้องไม่ทับ player/hut
- ใช้ while-loop เพื่อกัน overlap

---

## 3. Input Functions

ผมใช้ `getMove()` เพื่อรับ input จากผู้เล่น:

```js
function getMove() {
  const move = prompt("Which way? (w/a/s/d): ");
  return move;
}
```

จากนั้นใช้ `isValidMove()` ตรวจว่า input ถูกต้องไหม:

```js
move === "w" || move === "a" || move === "s" || move === "d"
```

ถ้าไม่ถูกต้อง:
- แสดงข้อความเตือน
- `continue` เพื่อกลับไปถามใหม่ทันที

---

## 4. Movement Functions

ฟังก์ชัน `getNewPosition()` รับ input และตำแหน่งปัจจุบัน
แล้วคิดตำแหน่งใหม่ของผู้เล่น:

```js
if (move === "w") newRow--;
if (move === "s") newRow++;
if (move === "a") newCol--;
if (move === "d") newCol++;
```

คอนเซป:
- แถว (row) = ขึ้น/ลง
- คอลัมน์ (col) = ซ้าย/ขวา

ฟังก์ชันนี้แค่ “คำนวณตำแหน่งใหม่” ยังไม่เช็คแพ้/ชนะ

---

## 5. Game Rule Functions

เช็คผลของการขยับด้วย `checkMoveResult()`:

```js
if (isOutOfBounds(...)) return "out";
if (tile === HOLE)      return "hole";
if (tile === HAT)       return "hat";
return "ok";
```

ผลที่เป็นไปได้:
- `"out"` เดินออกนอกกระดาน  แพ้
- `"hole"` ตกหลุม  แพ้
- `"hat"` เจอหมวก ชนะ
- `"ok"` เดินได้ปกติ

ผมแยกฟังก์ชัน `isOutOfBounds()` เพื่อให้โค้ดอ่านง่ายขึ้น

---

## 6. Game Play Loop

ฟังก์ชัน `playGame()` คือแกนหลักของเกม:

1. แสดงกระดาน
2. รับ input
3. validate input
4. คำนวณตำแหน่งใหม่
5. เช็คผลลัพธ์ของการเดิน
6. ตัดสินแพ้-ชนะ
7. ถ้าปลอดภัย อัปเดตตำแหน่งผู้เล่น

โครง loop:

```js
while (playing) {
  printBoard(board);
  const move = getMove();

  if (!isValidMove(move)) continue;

  const { newRow, newCol } = getNewPosition(...);

  const result = checkMoveResult(newRow, newCol, board);

  // ตรวจ out / hole / hat
  // ถ้าปลอดภัย → updatePlayerPosition()
}
```

ลูปจะหยุดเมื่อ:
- เดินออกนอกกระดาน
- ตกหลุม
- เจอหมวก

---
