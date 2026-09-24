const fs = require('fs');
const path = require('path');

function removeReactImport(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  // Remove `import React from 'react';` or `import React, { ... } from 'react';`
  // We want to remove `React, ` or `React from 'react';`
  // Since we only use functional components, we don't need React in scope.
  
  // 1. Exact "import React from 'react';"
  content = content.replace(/import React from 'react';\r?\n/g, '');
  // 2. "import React, { useState } from 'react';" -> "import { useState } from 'react';"
  content = content.replace(/import React, /g, 'import ');

  fs.writeFileSync(filePath, content, 'utf8');
}

function walk(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walk(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      removeReactImport(fullPath);
    }
  }
}

walk(path.join(__dirname, 'src'));
