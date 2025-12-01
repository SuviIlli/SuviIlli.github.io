document.addEventListener('DOMContentLoaded', function () {
  const tabButtons = Array.from(document.querySelectorAll('.tab-btn'));
  const panels = {
    exp: document.getElementById('panel-exp'),
    hci: document.getElementById('panel-hci')
  };

  function activateTab(targetKey, pushHistory = true) {
    tabButtons.forEach(btn => {
      const key = btn.getAttribute('data-target');
      const isActive = key === targetKey;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-selected', String(isActive));
      const panel = panels[key];
      if (panel) {
        if (isActive) {
          panel.removeAttribute('hidden');
        } else {
          panel.setAttribute('hidden', '');
        }
      }
    });

    // update URL hash for deep-linking
    if (pushHistory) {
      const hash = targetKey === 'exp' ? '' : `#hci`;
      history.replaceState(null, '', hash || 'research.html');
    }
  }

  // initialize: choose tab based on hash
  const hash = location.hash.toLowerCase();
  if (hash === '#hci') {
    activateTab('hci', false);
  } else {
    // default to Experimental Cosmology
    activateTab('exp', false);
  }

  // clicks
  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-target');
      activateTab(target);
    });
  });

  // keyboard accessibility: left/right arrows switch tabs
  document.addEventListener('keydown', (e) => {
    const activeIndex = tabButtons.findIndex(b => b.classList.contains('active'));
    if (e.key === 'ArrowRight') {
      const next = (activeIndex + 1) % tabButtons.length;
      tabButtons[next].focus();
      tabButtons[next].click();
    } else if (e.key === 'ArrowLeft') {
      const prev = (activeIndex - 1 + tabButtons.length) % tabButtons.length;
      tabButtons[prev].focus();
      tabButtons[prev].click();
    }
  });
});