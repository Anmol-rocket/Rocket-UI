document.addEventListener('DOMContentLoaded', function() {
      const closeSidebarBtn = document.getElementById('closeSidebar');
      const sidebar = document.getElementById('sidebar');
      closeSidebarBtn.addEventListener('click', function() {
        sidebar.classList.add('closed');
        if (mainContent) mainContent.classList.add('full');
      });
    });
    // Copy to clipboard functionality
    function copyCode(button) {
      const codeBlock = button.closest('.code-container').querySelector('code');
      const text = codeBlock.textContent;
      
      navigator.clipboard.writeText(text).then(() => {
        button.textContent = 'Copied!';
        button.classList.add('copied');
        
        setTimeout(() => {
          button.textContent = 'Copy';
          button.classList.remove('copied');
        }, 2000);
      });
    }

    // Scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.scroll-animate').forEach(el => {
      observer.observe(el);
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });

    // Tooltip functionality
    document.querySelectorAll('[data-tooltip]').forEach(function(el) {
      el.addEventListener('mouseenter', function() {
        let tip = document.createElement('div');
        tip.className = 'tooltip-popup';
        tip.textContent = el.getAttribute('data-tooltip');
        document.body.appendChild(tip);
        const rect = el.getBoundingClientRect();
        tip.style.position = 'absolute';
        tip.style.left = rect.left + window.scrollX + 'px';
        tip.style.top = (rect.top + window.scrollY - tip.offsetHeight - 8) + 'px';
        tip.style.background = '#222';
        tip.style.color = '#fff';
        tip.style.padding = '4px 10px';
        tip.style.borderRadius = '6px';
        tip.style.fontSize = '0.95rem';
        tip.style.zIndex = 9999;
        el._tip = tip;
      });
      el.addEventListener('mouseleave', function() {
        if (el._tip) el._tip.remove();
      });
      el.addEventListener('focus', function() {
        el.dispatchEvent(new Event('mouseenter'));
      });
      el.addEventListener('blur', function() {
        el.dispatchEvent(new Event('mouseleave'));
      });
    });

    // Rating functionality
    document.querySelectorAll('.rating').forEach(function(rating) {
      const stars = rating.querySelectorAll('span');
      stars.forEach(function(star, idx) {
        star.style.cursor = 'pointer';
        star.addEventListener('click', function() {
          stars.forEach((s, i) => {
            s.textContent = i <= idx ? '★' : '☆';
          });
        });
      });
    });

    // Notification Center functionality
    document.querySelectorAll('.notification-center').forEach(function(center) {
      center.querySelectorAll('.notification').forEach(function(note) {
        note.style.cursor = 'pointer';
        note.addEventListener('click', function() {
          note.remove();
        });
      });
      // Add notification demo
      if (!center.querySelector('.add-note-btn')) {
        const btn = document.createElement('button');
        btn.textContent = 'Add Notification';
        btn.className = 'demo-btn demo-btn-primary add-note-btn';
        btn.onclick = function() {
          const note = document.createElement('div');
          note.className = 'notification';
          note.textContent = 'New notification';
          note.style.cursor = 'pointer';
          note.onclick = function() { note.remove(); };
          center.appendChild(note);
        };
        center.appendChild(btn);
      }
    });

    // File Upload functionality
    document.querySelectorAll('input[type="file"]').forEach(function(input) {
      input.addEventListener('change', function() {
        let label = input.nextElementSibling;
        if (!label || !label.classList.contains('file-label')) {
          label = document.createElement('span');
          label.className = 'file-label';
          input.parentNode.insertBefore(label, input.nextSibling);
        }
        label.textContent = input.files.length ? input.files[0].name : 'No file chosen';
      });
    });

    // Dropdown functionality
    document.querySelectorAll('.dropdown-toggle').forEach(function(toggle) {
      toggle.addEventListener('click', function() {
        const menu = toggle.nextElementSibling;
        if (menu && menu.classList.contains('dropdown-menu')) {
          menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
        }
      });
      document.addEventListener('click', function(e) {
        if (!toggle.contains(e.target) && toggle.nextElementSibling && toggle.nextElementSibling.classList.contains('dropdown-menu')) {
          toggle.nextElementSibling.style.display = 'none';
        }
      });
    });

    // Drawer functionality
    document.querySelectorAll('.drawer .drawer-toggle').forEach(function(toggle) {
      toggle.addEventListener('click', function() {
        const drawer = toggle.closest('.drawer');
        drawer.classList.toggle('open');
      });
    });
    // Sidebar open/close logic
    // Slider button logic for sidebar
    const sliderSidebarBtn = document.getElementById('sliderSidebarBtn');
    sliderSidebarBtn.addEventListener('click', function() {
      if (sidebar.classList.contains('closed')) {
        openSidebar();
      } else {
        closeSidebar();
      }
    });
    const openSidebarBtn = document.getElementById('openSidebar');
    const sidebar = document.getElementById('sidebar');
    const closeSidebarBtn = document.getElementById('closeSidebar');
    const heroSection = document.getElementById('home');
    const mainContent = document.querySelector('.main-content');
    function openSidebar() {
      sidebar.classList.remove('closed');
      if (mainContent) mainContent.classList.remove('full');
    }
    function closeSidebar() {
      sidebar.classList.add('closed');
      if (mainContent) mainContent.classList.add('full');
    }

    openSidebarBtn.addEventListener('click', function() {
      openSidebar();
      heroSection.style.display = 'none';
    });
    closeSidebarBtn.addEventListener('click', function() {
      closeSidebar();
      // Optionally hide hero if needed, but main content should remain visible
    });

    // Sidebar navigation links
    sidebar.querySelectorAll('a').forEach(function(link) {
      link.addEventListener('click', function(e) {
        if (link.getAttribute('href') === '#home') {
          e.preventDefault();
          closeSidebar();
          heroSection.style.display = 'flex';
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else if (link.getAttribute('href') === '#docs') {
          e.preventDefault();
          openSidebar();
          const docsSection = document.getElementById('docs');
          if (docsSection) {
            docsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      });
    });
