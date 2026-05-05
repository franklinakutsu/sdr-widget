(function () {
  var script = document.currentScript || (function () {
    var scripts = document.getElementsByTagName('script');
    return scripts[scripts.length - 1];
  })();

  var SDR_USER_EMAIL = script.getAttribute('data-email') || '';
  var SDR_URL_SESSION  = 'https://x8ki-letl-twmt.n7.xano.io/api:8o1zjx4u';
  var SDR_URL_MESSAGE  = 'https://x8ki-letl-twmt.n7.xano.io/api:2kCTFnYm';
  var SDR_URL_CHECKOUT = 'https://x8ki-letl-twmt.n7.xano.io/api:YY82Ce_K';

  var SDR_AVATAR_SVG = '<svg width="14" height="14" viewBox="0 0 57 56" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.6583 1.61995L2.20646 17.3725C2.04597 17.7626 1.984 18.1862 2.02602 18.606C2.06804 19.0257 2.21276 19.4287 2.44739 19.7793C2.68203 20.1298 2.99936 20.4172 3.37138 20.6161C3.7434 20.815 4.15867 20.9192 4.58051 20.9196H25.9749C26.6483 20.9218 27.2935 21.1903 27.7697 21.6665C28.2459 22.1426 28.5143 22.7878 28.5165 23.4612V32.2592C28.5188 32.9326 28.7872 33.5778 29.2634 34.054C29.7396 34.5301 30.3848 34.7986 31.0582 34.8008C31.4414 34.7998 31.8192 34.7112 32.1629 34.5418C32.5066 34.3723 32.807 34.1266 33.0412 33.8233L56.4187 4.16158C56.7196 3.78381 56.9077 3.32871 56.9614 2.84871C57.015 2.3687 56.932 1.88331 56.7218 1.44842C56.5117 1.01354 56.183 0.64686 55.7736 0.390609C55.3642 0.134357 54.8907 -0.00104129 54.4077 6.03004e-06H11.0603C10.5522 0.00410829 10.0565 0.157114 9.63457 0.440082C9.2126 0.72305 8.88288 1.12356 8.68623 1.59202L8.6583 1.61995Z" fill="#00C2E0"/><path d="M48.3189 54.1284L54.7708 38.3759C54.9313 37.9857 54.9932 37.5621 54.9512 37.1423C54.9092 36.7226 54.7645 36.3197 54.5298 35.9691C54.2952 35.6185 53.9779 35.3311 53.6059 35.1322C53.2338 34.9333 52.8186 34.8291 52.3967 34.8287H31.0023C30.3289 34.8265 29.6837 34.558 29.2076 34.0819C28.7314 33.6057 28.4629 32.9605 28.4607 32.2871V23.4891C28.4585 22.8157 28.19 22.1705 27.7138 21.6944C27.2376 21.2182 26.5925 20.9497 25.919 20.9475C25.5359 20.9485 25.158 21.0371 24.8143 21.2066C24.4706 21.376 24.1702 21.6218 23.936 21.9251L0.558576 51.5868C0.257624 51.9645 0.0694969 52.4196 0.0158602 52.8996C-0.0377765 53.3796 0.0452588 53.865 0.255403 54.2999C0.465548 54.7348 0.794254 55.1015 1.20367 55.3577C1.61308 55.614 2.08655 55.7494 2.56954 55.7483H45.917C46.425 55.7442 46.9207 55.5912 47.3427 55.3083C47.7646 55.0253 48.0944 54.6248 48.291 54.1563L48.3189 54.1284Z" fill="#850AD6"/></svg>';

  // Inject Google Fonts - Inter
  var fontLink1 = document.createElement('link');
  fontLink1.rel = 'preconnect';
  fontLink1.href = 'https://fonts.googleapis.com';
  document.head.appendChild(fontLink1);

  var fontLink2 = document.createElement('link');
  fontLink2.rel = 'preconnect';
  fontLink2.href = 'https://fonts.gstatic.com';
  fontLink2.crossOrigin = 'anonymous';
  document.head.appendChild(fontLink2);

  var fontLink3 = document.createElement('link');
  fontLink3.rel = 'stylesheet';
  fontLink3.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap';
  document.head.appendChild(fontLink3);

  // Inject styles
  var style = document.createElement('style');
  style.textContent = '#sdr-chat{--roxo:#850ad6;--azul-escuro:#02044f;--rosa:#f72985;--cinza25:#f2f2f2;--cinza35:#d9d9d9;--cinza60:#a1a1a1;--cinza75:#797979;--cinza100:#585858;--preto:#111010;--branco:#fff;font-family:\'Inter\',\'Segoe UI\',sans-serif;position:fixed;bottom:24px;right:24px;z-index:999999;display:flex;flex-direction:column;align-items:flex-end;gap:12px}#sdr-trigger-row{display:flex;align-items:center;gap:8px}#sdr-trigger{width:52px;height:52px;border-radius:50%;background:var(--azul-escuro);border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;box-shadow:4px 4px 8px rgba(0,0,0,.4);transition:transform .2s,box-shadow .2s;flex-shrink:0;position:relative}#sdr-trigger:hover{transform:scale(1.06);box-shadow:4px 4px 14px rgba(0,0,0,.5)}#sdr-trigger.open{background:var(--roxo)}#sdr-badge{display:none;position:absolute;top:-2px;right:-2px;width:18px;height:18px;border-radius:50%;background:var(--rosa);color:var(--branco);font-size:11px;font-weight:600;align-items:center;justify-content:center;border:2px solid var(--branco)}#sdr-badge.show{display:flex}#sdr-icon-open{display:block}#sdr-icon-close{display:none}#sdr-trigger.open #sdr-icon-open{display:none}#sdr-trigger.open #sdr-icon-close{display:block}#sdr-balloon{display:flex;align-items:center;gap:12px;background:var(--azul-escuro);border-radius:100px;padding:12px 14px 12px 18px;box-shadow:4px 4px 8px rgba(0,0,0,.4);cursor:pointer;animation:sdr-balloon-in .3s ease;white-space:nowrap}#sdr-balloon:hover{opacity:.92}#sdr-balloon span{font-size:14px;font-weight:500;color:var(--branco);letter-spacing:.01em}#sdr-balloon-close{width:16px;height:16px;border-radius:50%;background:none;border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;padding:0;flex-shrink:0;opacity:.7;transition:opacity .15s}#sdr-balloon-close:hover{opacity:1}@keyframes sdr-balloon-in{from{opacity:0;transform:translateX(10px) scale(.95)}to{opacity:1;transform:translateX(0) scale(1)}}#sdr-window{display:none;position:absolute;bottom:68px;right:0;width:360px;height:520px;background:var(--branco);border-radius:16px;box-shadow:0 8px 40px rgba(2,4,79,.18),0 2px 8px rgba(0,0,0,.08);flex-direction:column;overflow:hidden;border:1px solid var(--cinza35);animation:sdr-slide-in .25s ease;transition:width .25s ease,height .25s ease}#sdr-window.open{display:flex}#sdr-window.expanded{width:520px;height:700px}@keyframes sdr-slide-in{from{opacity:0;transform:translateY(16px) scale(.97)}to{opacity:1;transform:translateY(0) scale(1)}}#sdr-header{display:flex;align-items:center;gap:10px;padding:14px 16px;background:var(--azul-escuro);color:var(--branco);flex-shrink:0}#sdr-avatar{position:relative;width:36px;height:36px;border-radius:50%;background:var(--branco);display:flex;align-items:center;justify-content:center;flex-shrink:0}#sdr-avatar::after{content:\'\';position:absolute;bottom:1px;right:1px;width:9px;height:9px;border-radius:50%;background:#4ade80;border:2px solid var(--azul-escuro)}#sdr-header-info{flex:1;display:flex;flex-direction:column;gap:1px}#sdr-header-name{font-size:14px;font-weight:600}#sdr-header-status{font-size:11px;opacity:.6}#sdr-header-actions{display:flex;align-items:center;gap:4px}#sdr-expand-btn,#sdr-close-btn{background:none;border:none;color:rgba(255,255,255,.6);cursor:pointer;padding:4px;border-radius:6px;display:flex;align-items:center;transition:color .15s}#sdr-expand-btn:hover,#sdr-close-btn:hover{color:var(--branco)}#sdr-icon-expand{display:block}#sdr-icon-collapse{display:none}#sdr-window.expanded #sdr-icon-expand{display:none}#sdr-window.expanded #sdr-icon-collapse{display:block}#sdr-messages{flex:1;overflow-y:auto;padding:16px 14px;display:flex;flex-direction:column;gap:10px;background:var(--cinza25);scroll-behavior:smooth}#sdr-messages::-webkit-scrollbar{width:4px}#sdr-messages::-webkit-scrollbar-thumb{background:var(--cinza35);border-radius:4px}.sdr-msg{display:flex;align-items:flex-end;gap:7px;max-width:85%}.sdr-msg.user{align-self:flex-end;flex-direction:row-reverse}.sdr-msg.assistant{align-self:flex-start}.sdr-msg-av{width:26px;height:26px;border-radius:50%;background:var(--branco);display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-bottom:2px;box-shadow:0 1px 3px rgba(0,0,0,.08)}.sdr-msg-bubble{padding:9px 13px;border-radius:14px;font-size:13.5px;line-height:1.5;display:flex;flex-direction:column;gap:3px;word-break:break-word}.sdr-msg.user .sdr-msg-bubble{background:var(--azul-escuro);color:var(--branco);border-bottom-right-radius:4px}.sdr-msg.assistant .sdr-msg-bubble{background:var(--branco);color:var(--preto);border-bottom-left-radius:4px;box-shadow:0 1px 4px rgba(0,0,0,.07)}.sdr-msg-time{font-size:10px;opacity:.45;align-self:flex-end}.sdr-msg.user .sdr-msg-time{color:rgba(255,255,255,.6)}.sdr-checkout-form{margin-top:4px;margin-left:33px;max-width:calc(85% - 33px);display:flex;flex-direction:column;gap:10px}.sdr-checkout-submit{padding:9px 13px;border-radius:4px;background:#00C2E0;color:var(--branco);border:none;cursor:pointer;font-family:inherit;font-size:13.5px;font-weight:600;transition:opacity .15s,transform .1s;box-shadow:0 1px 4px rgba(0,194,224,.3);width:100%}.sdr-checkout-submit:hover:not(:disabled){opacity:.92;transform:translateY(-1px)}.sdr-checkout-submit:disabled{opacity:.5;cursor:not-allowed}.sdr-checkout-error{font-size:12px;color:var(--rosa);display:none}.sdr-checkout-error.show{display:block}.sdr-dots{display:flex;gap:4px;align-items:center;padding:4px 0}.sdr-dots span{width:6px;height:6px;border-radius:50%;background:var(--cinza60);animation:sdr-bounce 1.2s infinite ease-in-out}.sdr-dots span:nth-child(2){animation-delay:.2s}.sdr-dots span:nth-child(3){animation-delay:.4s}@keyframes sdr-bounce{0%,80%,100%{transform:scale(.7);opacity:.4}40%{transform:scale(1);opacity:1}}#sdr-error{display:none;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:12px;color:var(--cinza75);font-size:13px}#sdr-error.show{display:flex}#sdr-error button{padding:7px 18px;border-radius:8px;background:var(--roxo);color:var(--branco);border:none;cursor:pointer;font-size:13px}#sdr-footer{display:flex;align-items:flex-end;gap:8px;padding:10px 12px;border-top:1px solid var(--cinza35);background:var(--branco);flex-shrink:0}#sdr-input{flex:1;padding:9px 12px;border-radius:10px;border:1px solid var(--cinza35);background:var(--cinza25);font-family:inherit;font-size:13.5px;color:var(--preto);resize:none;outline:none;line-height:1.5;transition:border-color .15s;max-height:120px;overflow-y:auto}#sdr-input:focus{border-color:var(--azul-escuro)}#sdr-input::placeholder{color:var(--cinza60)}#sdr-input:disabled{opacity:.5;cursor:not-allowed}#sdr-send{width:38px;height:38px;border-radius:10px;background:var(--azul-escuro);color:var(--branco);border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:background .15s,transform .1s}#sdr-send:hover:not(:disabled){transform:scale(1.05)}#sdr-send:disabled{opacity:.4;cursor:not-allowed}@media(max-width:480px){#sdr-window{width:calc(100vw - 24px);right:-8px;height:75vh;bottom:72px}#sdr-window.expanded{width:calc(100vw - 8px);height:90vh;right:-8px}#sdr-balloon span{font-size:13px}}';
  document.head.appendChild(style);

  // Inject HTML
  var container = document.createElement('div');
  container.innerHTML = '<div id="sdr-chat"><div id="sdr-window"><div id="sdr-header"><div id="sdr-avatar"><svg width="20" height="20" viewBox="0 0 57 56" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.6583 1.61995L2.20646 17.3725C2.04597 17.7626 1.984 18.1862 2.02602 18.606C2.06804 19.0257 2.21276 19.4287 2.44739 19.7793C2.68203 20.1298 2.99936 20.4172 3.37138 20.6161C3.7434 20.815 4.15867 20.9192 4.58051 20.9196H25.9749C26.6483 20.9218 27.2935 21.1903 27.7697 21.6665C28.2459 22.1426 28.5143 22.7878 28.5165 23.4612V32.2592C28.5188 32.9326 28.7872 33.5778 29.2634 34.054C29.7396 34.5301 30.3848 34.7986 31.0582 34.8008C31.4414 34.7998 31.8192 34.7112 32.1629 34.5418C32.5066 34.3723 32.807 34.1266 33.0412 33.8233L56.4187 4.16158C56.7196 3.78381 56.9077 3.32871 56.9614 2.84871C57.015 2.3687 56.932 1.88331 56.7218 1.44842C56.5117 1.01354 56.183 0.64686 55.7736 0.390609C55.3642 0.134357 54.8907 -0.00104129 54.4077 6.03004e-06H11.0603C10.5522 0.00410829 10.0565 0.157114 9.63457 0.440082C9.2126 0.72305 8.88288 1.12356 8.68623 1.59202L8.6583 1.61995Z" fill="#00C2E0"/><path d="M48.3189 54.1284L54.7708 38.3759C54.9313 37.9857 54.9932 37.5621 54.9512 37.1423C54.9092 36.7226 54.7645 36.3197 54.5298 35.9691C54.2952 35.6185 53.9779 35.3311 53.6059 35.1322C53.2338 34.9333 52.8186 34.8291 52.3967 34.8287H31.0023C30.3289 34.8265 29.6837 34.558 29.2076 34.0819C28.7314 33.6057 28.4629 32.9605 28.4607 32.2871V23.4891C28.4585 22.8157 28.19 22.1705 27.7138 21.6944C27.2376 21.2182 26.5925 20.9497 25.919 20.9475C25.5359 20.9485 25.158 21.0371 24.8143 21.2066C24.4706 21.376 24.1702 21.6218 23.936 21.9251L0.558576 51.5868C0.257624 51.9645 0.0694969 52.4196 0.0158602 52.8996C-0.0377765 53.3796 0.0452588 53.865 0.255403 54.2999C0.465548 54.7348 0.794254 55.1015 1.20367 55.3577C1.61308 55.614 2.08655 55.7494 2.56954 55.7483H45.917C46.425 55.7442 46.9207 55.5912 47.3427 55.3083C47.7646 55.0253 48.0944 54.6248 48.291 54.1563L48.3189 54.1284Z" fill="#850AD6"/></svg></div><div id="sdr-header-info"><span id="sdr-header-name">Patricia</span><span id="sdr-header-status">Online agora</span></div><div id="sdr-header-actions"><button id="sdr-expand-btn" aria-label="Expandir chat"><svg id="sdr-icon-expand" width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><svg id="sdr-icon-collapse" width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M8 3v5H3M21 8h-5V3M3 16h5v5M16 21v-5h5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button><button id="sdr-close-btn" aria-label="Fechar chat"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M18 6L6 18M6 6l12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg></button></div></div><div id="sdr-messages"><div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%"><div class="sdr-dots"><span></span><span></span><span></span></div></div></div><div id="sdr-error"><p>N\u00e3o foi poss\u00edvel conectar. Tente novamente.</p><button>Reconectar</button></div><div id="sdr-footer"><textarea id="sdr-input" placeholder="Digite sua mensagem..." rows="1"></textarea><button id="sdr-send" disabled><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button></div></div><div id="sdr-trigger-row"><div id="sdr-balloon"><span>Falar com vendedora</span><button id="sdr-balloon-close" aria-label="Fechar bal\u00e3o"><svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M1 1L9 9M9 1L1 9" stroke="#C7C8D8" stroke-width="1.5" stroke-linecap="round"/></svg></button></div><button id="sdr-trigger" aria-label="Abrir chat"><svg id="sdr-icon-open" width="26" height="26" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#vz-clip)"><path d="M3.98166 1.49969L1.68828 7.20284C1.63133 7.34423 1.60937 7.4978 1.62435 7.64994C1.63933 7.80208 1.69078 7.94809 1.77415 8.07504C1.85752 8.20198 1.97022 8.30594 2.10228 8.3777C2.23434 8.44946 2.38167 8.4868 2.53121 8.48642H10.1002C10.3384 8.4874 10.5667 8.58461 10.7352 8.75689C10.9037 8.92916 10.9987 9.16254 10.9997 9.40617V12.5896C11.0007 12.8332 11.0957 13.0666 11.2642 13.2389C11.4327 13.4111 11.661 13.5083 11.8992 13.5093C12.035 13.5093 12.1689 13.4774 12.2906 13.416C12.4123 13.3546 12.5186 13.2654 12.6013 13.1553L20.8747 2.42928C20.9809 2.29256 21.0473 2.12798 21.0661 1.95443C21.085 1.78089 21.0556 1.60542 20.9814 1.44817C20.9071 1.29093 20.791 1.15828 20.6464 1.06547C20.5017 0.972655 20.3344 0.923435 20.1636 0.923462H4.82159C4.64118 0.923867 4.46492 0.978781 4.31494 1.0813C4.16496 1.18383 4.04797 1.32938 3.97865 1.49969H3.98166Z" stroke="#F2F2F2" stroke-width="2"/><path d="M18.0183 20.4905L20.3015 14.7904C20.3584 14.649 20.3804 14.4955 20.3654 14.3433C20.3504 14.1912 20.299 14.0452 20.2156 13.9182C20.1323 13.7913 20.0196 13.6873 19.8875 13.6156C19.7554 13.5438 19.6081 13.5065 19.4586 13.5068H11.8896C11.6513 13.5059 11.4231 13.4087 11.2546 13.2364C11.0861 13.0641 10.991 12.8307 10.9901 12.5871V9.40308C10.9891 9.15945 10.894 8.92607 10.7256 8.7538C10.5571 8.58152 10.3288 8.48431 10.0905 8.48334C9.95481 8.48335 9.8209 8.51528 9.69916 8.57666C9.57743 8.63804 9.47113 8.72723 9.38849 8.83732L1.12532 19.5708C1.01907 19.7075 0.952698 19.8722 0.933845 20.0458C0.914993 20.2194 0.944421 20.3949 1.01875 20.5521C1.09308 20.7094 1.20929 20.842 1.35403 20.9348C1.49877 21.0276 1.66617 21.0767 1.837 21.0766H17.1778C17.3582 21.0762 17.5345 21.0213 17.6845 20.9187C17.8344 20.8162 17.9514 20.6707 18.0208 20.5004L18.0183 20.4905Z" stroke="#F2F2F2" stroke-width="2"/></g><defs><clipPath id="vz-clip"><rect width="22" height="22" fill="white"/></clipPath></defs></svg><svg id="sdr-icon-close" width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M18 6L6 18M6 6l12 12" stroke="white" stroke-width="2" stroke-linecap="round"/></svg><span id="sdr-badge"></span></button></div></div>';
  document.body.appendChild(container.firstChild);

  function sdrEnsureBody() {
  var w = document.getElementById('sdr-chat');
  if (w && w.parentElement !== document.body) {
    document.body.appendChild(w);
  }
}

// Tenta imediatamente e após delays
sdrEnsureBody();
setTimeout(sdrEnsureBody, 100);
setTimeout(sdrEnsureBody, 500);
setTimeout(sdrEnsureBody, 1000);

// Observer que monitora mudanças no DOM e reposiciona se necessário
var observer = new MutationObserver(function() {
  sdrEnsureBody();
});
observer.observe(document.body, { childList: true, subtree: true });

  // State
  var sdrState = 'idle';
  var sdrLeadId = null;
  var sdrConvId = null;
  var sdrUnread = 0;
  var sdrIsOpen = false;
  var sdrIsTyping = false;
  var sdrLocalMsgs = [];

  (function () {
    var saved = localStorage.getItem('sdr_session');
    if (saved) {
      try {
        var s = JSON.parse(saved);
        sdrLeadId = s.lead_id; sdrConvId = s.conversation_id; sdrState = 'saved';
      } catch (e) { localStorage.removeItem('sdr_session'); }
    }
  })();

  // Event listeners
  document.getElementById('sdr-expand-btn').onclick = function () {
    document.getElementById('sdr-window').classList.toggle('expanded');
    sdrScrollBottom();
  };
  document.getElementById('sdr-close-btn').onclick = sdrToggle;
  document.getElementById('sdr-balloon-close').onclick = function (e) {
    e.stopPropagation();
    document.getElementById('sdr-balloon').style.display = 'none';
  };
  document.getElementById('sdr-balloon').onclick = sdrToggle;
  document.getElementById('sdr-trigger').onclick = sdrToggle;
  document.getElementById('sdr-send').onclick = sdrSend;
  document.getElementById('sdr-error').querySelector('button').onclick = sdrInit;

  var inputEl = document.getElementById('sdr-input');
  inputEl.disabled = true;
  inputEl.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sdrSend(); }
  });
  inputEl.addEventListener('input', function () {
    this.style.height = 'auto';
    this.style.height = Math.min(this.scrollHeight, 120) + 'px';
  });

  function sdrToggle() {
    sdrIsOpen = !sdrIsOpen;
    var win = document.getElementById('sdr-window');
    var trig = document.getElementById('sdr-trigger');
    var badge = document.getElementById('sdr-badge');
    var ball = document.getElementById('sdr-balloon');
    if (sdrIsOpen) {
      win.classList.add('open'); trig.classList.add('open');
      ball.style.display = 'none';
      sdrUnread = 0; badge.classList.remove('show');
      if (sdrState === 'idle') sdrInit();
      else if (sdrState === 'saved' || sdrState === 'active') {
        if (sdrLocalMsgs.length > 0) { sdrRenderFromCache(); sdrEnableInput(); sdrState = 'active'; }
        sdrLoadHistory(false);
      }
    } else {
      win.classList.remove('open'); trig.classList.remove('open');
    }
  }

  function sdrInit() {
    sdrState = 'initializing'; sdrShowLoading();
    fetch(SDR_URL_SESSION + '/start', {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: SDR_USER_EMAIL, source_page: window.location.href,
        utm_source: sdrGetParam('utm_source'), utm_medium: sdrGetParam('utm_medium'), utm_campaign: sdrGetParam('utm_campaign')
      })
    })
    .then(function (r) { if (!r.ok) throw new Error(r.status); return r.json(); })
    .then(function (data) {
      sdrLeadId = data.lead_id; sdrConvId = data.conversation_id;
      localStorage.setItem('sdr_session', JSON.stringify({ lead_id: data.lead_id, conversation_id: data.conversation_id }));
      sdrState = 'active'; sdrLoadHistory(true);
    })
    .catch(function (e) { console.error('[SdrChat]', e); sdrState = 'error'; sdrShowError(); });
  }

  function sdrLoadHistory(isNew) {
    if (!sdrConvId) return;
    fetch(SDR_URL_SESSION + '/history?conversation_id=' + sdrConvId)
    .then(function (r) { return r.json(); })
    .then(function (data) {
      var msgs = data.messages || [];
      sdrLocalMsgs = msgs; sdrRenderMessages(msgs);
      sdrState = 'active'; sdrEnableInput();
      if (isNew && msgs.length === 0) sdrGreeting();
    })
    .catch(function () { sdrState = 'active'; sdrEnableInput(); if (isNew) sdrGreeting(); });
  }

  function sdrGreeting() {
    sdrShowTyping();
    fetch(SDR_URL_MESSAGE + '/send', {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ lead_id: sdrLeadId, conversation_id: sdrConvId, message: '__init__' })
    })
    .then(function (r) { return r.json(); })
    .then(function (data) {
      sdrHideTyping();
      sdrLocalMsgs.push({ role: 'assistant', content: data.message, sent_at: Date.now(), show_checkout: false });
      sdrAppendMessage('assistant', data.message, Date.now(), true, false);
    })
    .catch(function () { sdrHideTyping(); });
  }

  function sdrSend() {
    var input = document.getElementById('sdr-input');
    var text = input.value.trim();
    if (!text || sdrIsTyping || sdrState !== 'active') return;
    sdrLocalMsgs.push({ role: 'user', content: text, sent_at: Date.now() });
    sdrAppendMessage('user', text);
    input.value = ''; input.style.height = 'auto';
    sdrIsTyping = true; sdrDisableInput(); sdrShowTyping();
    fetch(SDR_URL_MESSAGE + '/send', {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ lead_id: sdrLeadId, conversation_id: sdrConvId, message: text })
    })
    .then(function (r) { if (!r.ok) throw new Error(); return r.json(); })
    .then(function (data) {
      sdrHideTyping();
      var showCheckout = data.show_checkout === true;
      sdrLocalMsgs.push({ role: 'assistant', content: data.message, sent_at: Date.now(), show_checkout: showCheckout });
      sdrAppendMessage('assistant', data.message, Date.now(), true, showCheckout);
      if (!sdrIsOpen) { sdrUnread++; var b = document.getElementById('sdr-badge'); b.textContent = sdrUnread; b.classList.add('show'); }
    })
    .catch(function () { sdrHideTyping(); sdrAppendMessage('assistant', 'Desculpe, ocorreu um erro. Tente novamente.'); })
    .finally(function () { sdrIsTyping = false; sdrEnableInput(); });
  }

  function sdrClose() {
    if (!sdrConvId || sdrState !== 'active') return;
    fetch(SDR_URL_SESSION + '/close', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ lead_id: sdrLeadId, conversation_id: sdrConvId, reason: 'page_unload' }) });
    localStorage.removeItem('sdr_session');
  }
  window.addEventListener('beforeunload', sdrClose);

  function sdrRenderFromCache() {
    var el = document.getElementById('sdr-messages'); el.innerHTML = '';
    sdrLocalMsgs.forEach(function (m) { sdrAppendMessage(m.role, m.content, m.sent_at, false, m.show_checkout === true); });
    sdrScrollBottom();
  }

  function sdrRenderMessages(msgs) {
    var el = document.getElementById('sdr-messages'); el.innerHTML = '';
    msgs.forEach(function (m) { sdrAppendMessage(m.role, m.content, m.sent_at, false, false); });
    sdrScrollBottom();
  }

  function sdrAppendMessage(role, content, ts, scroll, showCheckout) {
    var el = document.getElementById('sdr-messages');
    var div = document.createElement('div');
    div.className = 'sdr-msg ' + role;
    div.innerHTML = (role === 'assistant' ? '<div class="sdr-msg-av">' + SDR_AVATAR_SVG + '</div>' : '') +
      '<div class="sdr-msg-bubble"><span>' + sdrEscape(content) + '</span>' +
      '<time class="sdr-msg-time">' + sdrFormatTime(ts || Date.now()) + '</time></div>';
    el.appendChild(div);
    if (role === 'assistant' && showCheckout) {
      var formId = 'sdr-form-' + Date.now() + '-' + Math.random().toString(36).slice(2, 7);
      var form = document.createElement('div');
      form.className = 'sdr-checkout-form';
      form.id = formId;
      form.innerHTML =
        '<button class="sdr-checkout-submit">Ir para o pagamento</button>' +
        '<span class="sdr-checkout-error" id="' + formId + '-erro"></span>';
      form.querySelector('.sdr-checkout-submit').onclick = function () { sdrSubmitCheckout(formId); };
      el.appendChild(form);
    }
    if (scroll !== false) sdrScrollBottom();
  }

  function sdrSubmitCheckout(formId) {
    var btn = document.querySelector('#' + formId + ' .sdr-checkout-submit');
    var erro = document.getElementById(formId + '-erro');
    btn.disabled = true;
    btn.textContent = 'Gerando link...';
    erro.classList.remove('show');
    fetch(SDR_URL_CHECKOUT + '/checkout', {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ lead_id: sdrLeadId, plano: 'profissional', periodo: 'mensal' })
    })
    .then(function (r) { return r.json(); })
    .then(function (data) {
      if (data.checkout_url) {
        window.open(data.checkout_url, '_blank');
        btn.textContent = 'Link gerado!';
      } else {
        erro.textContent = data.erro || 'Não foi possível gerar o link. Tente novamente.';
        erro.classList.add('show');
        btn.disabled = false;
        btn.textContent = 'Ir para o pagamento';
      }
    })
    .catch(function () {
      erro.textContent = 'Erro de conexão. Tente novamente.';
      erro.classList.add('show');
      btn.disabled = false;
      btn.textContent = 'Ir para o pagamento';
    });
  }

  function sdrShowLoading() { document.getElementById('sdr-messages').innerHTML = '<div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%"><div class="sdr-dots"><span></span><span></span><span></span></div></div>'; }
  function sdrShowError() { sdrShowLoading(); document.getElementById('sdr-error').classList.add('show'); }
  function sdrShowTyping() { var el = document.getElementById('sdr-messages'); var d = document.createElement('div'); d.id = 'sdr-typing'; d.className = 'sdr-msg assistant'; d.innerHTML = '<div class="sdr-msg-av">' + SDR_AVATAR_SVG + '</div><div class="sdr-msg-bubble"><div class="sdr-dots"><span></span><span></span><span></span></div></div>'; el.appendChild(d); sdrScrollBottom(); }
  function sdrHideTyping() { var t = document.getElementById('sdr-typing'); if (t) t.remove(); }
  function sdrEnableInput() { var i = document.getElementById('sdr-input'); i.disabled = false; document.getElementById('sdr-send').disabled = false; i.focus(); }
  function sdrDisableInput() { document.getElementById('sdr-input').disabled = true; document.getElementById('sdr-send').disabled = true; }
  function sdrScrollBottom() { var el = document.getElementById('sdr-messages'); setTimeout(function () { el.scrollTop = el.scrollHeight; }, 50); }
  function sdrFormatTime(ts) { return new Date(ts).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }); }
  function sdrGetParam(name) { return new URLSearchParams(window.location.search).get(name) || undefined; }
  function sdrEscape(str) { return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br>'); }
})();