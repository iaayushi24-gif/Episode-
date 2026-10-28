#!/usr/bin/env python3
import re

with open("today-in-episode/index.html") as f:
    html = f.read()

with open("today-in-episode/app.js") as f:
    js = f.read()

# Find all getElementById calls
ids_in_js = set(re.findall(r'getElementById\(["\']([^"\']+)["\']\)', js))
# Find all id="..." in html
ids_in_html = set(re.findall(r'id=["\']([^"\']+)["\']', html))

print("Total IDs checked in JS:", len(ids_in_js))
missing = ids_in_js - ids_in_html
if missing:
    print("MISSING IDs in HTML:", missing)
else:
    print("All IDs in JS match HTML elements!")

# Check classes referenced in JS querySelector / querySelectorAll
classes_in_js = set(re.findall(r'querySelector(?:All)?\(["\']\.([a-zA-Z0-9_-]+)["\']\)', js))
classes_in_html = set(re.findall(r'class=["\']([^"\']+)["\']', html))
all_html_classes = set()
for c in classes_in_html:
    all_html_classes.update(c.split())

missing_classes = classes_in_js - all_html_classes
print("Total classes checked in JS:", len(classes_in_js))
print("Missing classes (could be dynamically generated):", missing_classes)
