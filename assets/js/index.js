(function () {
  'use strict';

  // Sidebar functionality
  const sidebar = document.querySelector('.sidebar');
  const sidebarOpenButtons = document.querySelectorAll('.sidebar-open');
  const sidebarCloseButton = document.querySelector('.sidebar-close');
  const sidebarOverlay = document.querySelector('.sidebar-overlay');
  let sidebarTrigger = null;

  if (!sidebar || !sidebarOpenButtons.length) return;

  const isSidebarOpen = () =>
    document.body.classList.contains('sidebar--opened');

  const setExpandedState = (isExpanded) => {
    sidebarOpenButtons.forEach((button) => {
      button.setAttribute('aria-expanded', String(isExpanded));
    });
  };

  const openSidebar = (button) => {
    sidebarTrigger = button;
    document.body.classList.add('sidebar--opened');
    sidebar.setAttribute('aria-hidden', 'false');
    setExpandedState(true);

    if (sidebarCloseButton) {
      sidebarCloseButton.focus({ preventScroll: true });
    }
  };

  const closeSidebar = () => {
    document.body.classList.remove('sidebar--opened');
    sidebar.setAttribute('aria-hidden', 'true');
    setExpandedState(false);

    if (sidebarTrigger) {
      sidebarTrigger.focus({ preventScroll: true });
      sidebarTrigger = null;
    }
  };

  sidebarOpenButtons.forEach((button) => {
    button.addEventListener('click', () => {
      openSidebar(button);
    });
  });

  if (sidebarCloseButton) {
    sidebarCloseButton.addEventListener('click', closeSidebar);
  }

  if (sidebarOverlay) {
    sidebarOverlay.addEventListener('click', closeSidebar);
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isSidebarOpen()) {
      closeSidebar();
    }
  });
})();
