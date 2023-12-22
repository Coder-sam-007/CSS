# Image Sprites

## Introduction

An image sprite is a technique in web development where multiple images are combined into a single image. This single image is then used to reduce the number of server requests, ultimately improving the performance of a webpage. The individual images within the sprite can be displayed selectively using CSS.

## Advantages of Image Sprites

1. **Reduced HTTP Requests:** Instead of loading multiple images individually, a single sprite reduces the number of HTTP requests, which can significantly improve page load times.

2. **Faster Loading:** Since one large image is loaded instead of several small ones, the loading process is more efficient.

3. **Caching Benefits:** Once the sprite is loaded, it can be cached by the browser, leading to quicker subsequent page views.

## How to Create and Use Image Sprites

### Step 1: Create the Sprite Image

Combine individual images into a single sprite image. This can be done manually using image editing tools like Photoshop, or you can use online tools to automate the process.

### Step 2: Define CSS for Image Sprites

Use CSS to define the background image and specify the dimensions of the individual images within the sprite. Use the `background-position` property to display the desired portion of the sprite.

```css
/* CSS for Image Sprite */
.sprite {
  background-image: url("sprites.png");
  background-repeat: no-repeat;
}

/* CSS for Individual Icons in the Sprite */
.icon1 {
  width: 32px;
  height: 32px;
  background-position: 0 0; /* Position of the first icon in the sprite */
}

.icon2 {
  width: 32px;
  height: 32px;
  background-position: -32px 0; /* Position of the second icon in the sprite */
}

.icon3 {
  width: 32px;
  height: 32px;
  background-position: -64px 0; /* Position of the third icon in the sprite */
}
```

### Step 3: HTML Markup

- Use the defined CSS classes in your HTML markup.

```
<div class="sprite icon1"></div>
<div class="sprite icon2"></div>
<div class="sprite icon3"></div>
```

- The sprite class sets the background image for all elements.
- The icon1, icon2, and icon3 classes define the position and dimensions of each individual icon within the sprite.
- This way, the browser loads a single sprite image, and you can display different parts of it for various elements on your webpage, optimizing performance.

https://www.w3schools.com/css/tryit.asp?filename=trycss_sprites_nav
