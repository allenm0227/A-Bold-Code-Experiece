// script.js — navigation, modal, interactions & chatbot
document.addEventListener('DOMContentLoaded', () => {
  // set years
  ['year','year2','year3','year4','year5'].forEach(id=>{
    const el=document.getElementById(id);
    if(el) el.textContent=new Date().getFullYear();
  });

  // mobile nav toggle
  document.querySelectorAll('.nav-toggle').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const nav = document.querySelector('.nav');
      if(!nav) return;
      nav.classList.toggle('open');
    });
  });

  // highlight nav based on file name
  const links = document.querySelectorAll('.nav-link');
  const path = window.location.pathname.split('/').pop();
  links.forEach(a=>{
    const href = a.getAttribute('href');
    if (href === path || (href === 'index.html' && path === '')) a.classList.add('active');
  });

  // modal
  const modal = document.getElementById('modal');
  const modalBody = document.getElementById('modal-body');
  const modalClose = document.querySelector('.modal-close');

  function openModal(html) {
    if (!modal || !modalBody) return;
    modalBody.innerHTML = html;
    modal.setAttribute('aria-hidden','false');
    document.body.style.overflow = 'hidden';
  }
  function closeModal() {
    if (!modal || !modalBody) return;
    modal.setAttribute('aria-hidden','true');
    modalBody.innerHTML = '';
    document.body.style.overflow = '';
  }

  if (modal) {
    modalClose && modalClose.addEventListener('click', closeModal);
    modal.addEventListener('click', (e)=> { if (e.target === modal) closeModal(); });
    document.addEventListener('keydown', (e)=> {
      if (e.key === 'Escape' && modal.getAttribute('aria-hidden')==='false') closeModal();
    });
  }

  // card expand interactions
  document.querySelectorAll('.open-card').forEach(btn=>{
    btn.addEventListener('click', (e)=>{
      const card = e.target.closest('.exp-card, .project-card') || e.target.closest('article');
      if (!card) return;
      const title = card.dataset.title || card.querySelector('h3')?.textContent || 'Details';
      const hidden = card.querySelector('.exp-hidden');
      let content = `<h2>${title}</h2>`;
      if (hidden) content += hidden.innerHTML;
      else if (btn.dataset.detail) content += `<p>${btn.dataset.detail}</p>`;
      else content += '<p>No extra details provided.</p>';
      content += '<p class="muted">Source: Mekhi Allen — resume (2025)</p>';
      if (modal) openModal(content);
    });
  });

  // demo contact form submission
  const contactForm = document.getElementById('contact-form');
  if(contactForm) contactForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    alert('Demo form: replace with a server endpoint for real submissions.');
  });

  // --- Simple FAQ Chatbot ---
  const chatToggle = document.getElementById('chatbot-toggle');
  const chatWindow = document.getElementById('chatbot-window');
  const chatClose = document.getElementById('chatbot-close');
  const chatMessages = document.getElementById('chatbot-messages');
  const chatForm = document.getElementById('chatbot-form');
  const chatInput = document.getElementById('chatbot-input');

  function addChatMessage(text, from='bot'){
    if(!chatMessages) return;
    const div = document.createElement('div');
    div.className = `chatbot-msg ${from}`;
    div.textContent = text;
    chatMessages.appendChild(div);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  function openChat(){
    if(!chatWindow) return;
    chatWindow.setAttribute('aria-hidden','false');
  }
  function closeChatbox(){
    if(!chatWindow) return;
    chatWindow.setAttribute('aria-hidden','true');
  }

  chatToggle && chatToggle.addEventListener('click', openChat);
  chatClose && chatClose.addEventListener('click', closeChatbox);

  if(chatForm && chatInput){
    chatForm.addEventListener('submit', (e)=>{
      e.preventDefault();
      const text = chatInput.value.trim();
      if(!text) return;
      addChatMessage(text,'user');
      chatInput.value = '';

      const reply = getChatbotReply(text.toLowerCase());
      setTimeout(()=>addChatMessage(reply,'bot'), 300);
    });
  }

  function getChatbotReply(msg){
    // Very simple rule-based FAQ logic
    if(msg.includes('hello') || msg.includes('hi')){
      return "Hi! I'm Mekhi's portfolio bot. Ask me about my skills, projects, experience, or availability.";
    }
    if(msg.includes('skill')){
      return "Core skills: HTML, CSS, JavaScript, Java, Python, IT/Cybersecurity fundamentals, UI design, community outreach, and residence life leadership.";
    }
    if(msg.includes('language') || msg.includes('programming')){
      return "I work with Java, Python, JavaScript, and HTML/CSS. I'm also building experience with cybersecurity tools and workflows.";
    }
    if(msg.includes('project') || msg.includes('echo reads') || msg.includes('read and rise')){
      return "Key projects include Echo Reads (an interactive literacy app), Bulldog Scholars Academy mentoring & tech support, and media/graphics work for Capital Christian Fellowship.";
    }
    if(msg.includes('experience') || msg.includes('job') || msg.includes('work')){
      return "Experience highlights: AAAS Making & Innovation Showcase student innovator, Resident Assistant at Kennard Hall, and Lifeguard/Instructor's Aide for M-NCPPC SAARC.";
    }
    if(msg.includes('resume') || msg.includes('cv')){
      return "You can view and download my resume from the Resume page on this site. It includes education, technical skills, and leadership roles.";
    }
    if(msg.includes('available') || msg.includes('availability') || msg.includes('internship')){
      return "I'm open to internships and collaborative projects related to IT, cybersecurity, educational technology, and student support.";
    }
    if(msg.includes('github')){
      return "My main portfolio repository is at github.com/allenm0227/A-Bold-Code-Experiece, where you can view this site's source code.";
    }
    return "Great question! I can talk about my skills, programming languages, projects (like Echo Reads), experience as an RA and lifeguard, or my availability for internships.";
  }
});