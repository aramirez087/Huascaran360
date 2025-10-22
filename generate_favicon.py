#!/usr/bin/env python3
"""Generate favicon.ico from SVG"""

from PIL import Image, ImageDraw

# Create a 32x32 image with transparency
size = 32
img = Image.new('RGBA', (size, size), (0, 0, 0, 0))
draw = ImageDraw.Draw(img)

# Background
draw.rectangle([(0, 0), (size, size)], fill='#11131b')

# Mountain path (simplified)
points = [
    (2, 30),   # Start left
    (10, 16),  # First peak
    (14, 22),  # Valley
    (19, 12),  # Highest peak
    (28, 30),  # End right
]
draw.polygon(points, fill='#d92532')

# Base line
draw.line([(2, 30), (30, 30)], fill='#d92532', width=2)

# Cyclist dot (yellow)
draw.ellipse([(13, 21), (17, 25)], fill='#fcbf49')

# Save as ICO
img.save('favicon.ico', format='ICO', sizes=[(32, 32), (16, 16)])

# Also save as PNG
img.save('favicon-32x32.png', format='PNG')
print('Success! favicon.ico and favicon-32x32.png created!')
