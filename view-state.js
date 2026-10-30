// Preserve the focused control and all scroll containers across synchronous renders.
export function captureView(root) {
  const doc = root.ownerDocument || root, active = doc.activeElement;
  const key = active?.id ? ['id', active.id]: [...(active?.attributes || [])].filter(a => a.name.startsWith('data-')).map(a => [a.name,
  a.value])[0];
  const offsets = [... root.querySelectorAll('*')].filter(e => e.scrollTop || e.scrollLeft).map(e =>( {
    id: e.id, classes: e.className, top: e.scrollTop, left: e.scrollLeft
  }));
  const expanded = [... root.querySelectorAll('details')].filter(e => e.open).map(e => e.querySelector('summary')?.textContent);
  const win = doc.defaultView, x = win?.scrollX || 0, y = win?.scrollY || 0, top = root.scrollTop;
  return() => {
    for (const details of root.querySelectorAll('details')) if (expanded.includes(details.querySelector?.('summary')?.textContent)) details.open
    = true;
    let next = active?.isConnected ? active: null;
    if (!next && key) next = [... root.querySelectorAll(key[0] === 'id' ? '[id]': (
      `[` +
      `${key[0]}` +
      `]`
    ))].find(e => e.getAttribute(key[0]) === key[1]);
    next?.focus( {
      preventScroll: true
    });
    for (const o of offsets) {
      const e = o.id ? doc.getElementById(o.id): [... root.querySelectorAll('*')].find(e => e.className === o.classes);
      if (e) {
        e.scrollTop = o.top;
        e.scrollLeft = o.left;
      }
    }
    if (root !== doc) root.scrollTop = top;
    win?.scrollTo(x, y);
  };
}
