window.addEventListener('load', () => {
  const addRectButton = document.getElementById('addRectButton');
  const treeDiv = document.getElementById('treeDiv');
  const sourceTextArea = document.getElementById('sourceTextArea');
  const canvasSvg = document.getElementById('canvasSvg');

  const mutationObserver = new MutationObserver((mutationList, observer) => {
    const fragment = document.createDocumentFragment();
    for (const child of canvasSvg.children) {
      const childDiv = document.createElement('div');
      switch (child.tagName) {
        case 'rect': {
          childDiv.textContent = 'Rect';
          const xInput = document.createElement('input');
          xInput.type = 'number';
          xInput.value = child.getAttribute('x') || 0;
          xInput.addEventListener('input', () => child.setAttribute('x', xInput.value));
          childDiv.append(xInput);
          const yInput = document.createElement('input');
          yInput.type = 'number';
          yInput.value = child.getAttribute('y') || 0;
          yInput.addEventListener('input', () => child.setAttribute('y', yInput.value));
          childDiv.append(yInput);
          const widthInput = document.createElement('input');
          widthInput.type = 'number';
          widthInput.value = child.getAttribute('width') || 0;
          widthInput.addEventListener('input', () => child.setAttribute('width', widthInput.value));
          childDiv.append(widthInput);
          const heightInput = document.createElement('input');
          heightInput.type = 'number';
          heightInput.value = child.getAttribute('height') || 0;
          heightInput.addEventListener('input', () => child.setAttribute('height', heightInput.value));
          childDiv.append(heightInput);
          const strokeInput = document.createElement('input');
          strokeInput.value = child.getAttribute('stroke');
          strokeInput.addEventListener('input', () => child.setAttribute('stroke', strokeInput.value));
          childDiv.append(strokeInput);
          break;
        }
        default: {
          childDiv.textContent = child.tagName;
          break;
        }
      }

      fragment.append(childDiv);
    }

    treeDiv.innerHTML = '';
    treeDiv.append(fragment);

    sourceTextArea.value = canvasSvg.innerHTML;
  });

  mutationObserver.observe(canvasSvg, {
    attributeOldValue: true,
    attributes: true,
    characterData: true,
    characterDataOldValue: true,
    childList: true,
    subtree: true,
  });

  // Invoke the initial mount
  canvasSvg.innerHTML = `<text x="10" y="20">Hello, world!</text>`;

  sourceTextArea.addEventListener('input', () => {
    canvasSvg.innerHTML = sourceTextArea.value;
  });

  addRectButton.addEventListener('click', () => {
    const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    canvasSvg.append(rect);
  });
});
