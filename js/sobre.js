// ===== Config =====
const WA_PHONE = '5538988064942'; // Troque para DDI+DDD+número. Ex: 5599999999999

// Links opcionais: se preencher, a opção abre o link; se deixar vazio, usa o fluxo interno.
const LINKS = {
    PROCONSVATE: 'proconsvate.html', // ex: 'https://seusite.com/proconsvate'
    ODS: '',         // ex: 'https://seusite.com/ods'
    FEEDBACK: ''     // ex: 'https://forms.gle/...'
};

// ===== DOM =====
const els = {
    launcher: document.getElementById('launcher'),
    chat: document.getElementById('chat'),
    close: document.getElementById('close'),
    messages: document.getElementById('messages'),
    quick: document.getElementById('quick'),
    footer: document.getElementById('footer'),
    input: document.getElementById('input'),
    send: document.getElementById('send'),
};

// ===== Util =====
function addMsg(text, who = 'bot', asHTML = false) {
    const el = document.createElement('div');
    el.className = `msg ${who}`;
    if (asHTML) { el.innerHTML = text; } else { el.textContent = text; }
    els.messages.appendChild(el);
    els.messages.scrollTop = els.messages.scrollHeight;
}

function setQuick(options) {
    els.quick.innerHTML = '';
    options.forEach(o => {
        const b = document.createElement('button');
        b.textContent = o.label;
        b.onclick = o.onClick;
        els.quick.appendChild(b);
    });
}

// Mantido, mas não é mais chamado pelos fluxos abaixo
function openWhatsApp() {
    const text = encodeURIComponent('Olá, vim do site e preciso de ajuda.');
    window.open(`https://wa.me/${WA_PHONE}?text=${text}`, '_blank', 'noopener');
}

// ===== Viewer SPA (JS-only, sem alterar HTML) =====
// Normaliza caminho para comparação
function normalize(href) {
    try {
        const u = new URL(href, location.href);
        return u.pathname.replace(/^\//, '').toLowerCase();
    } catch (_) {
        return String(href).replace(/^\//, '').toLowerCase();
    }
}

// Mapa inverso: pathname -> chave do LINKS
const ROUTES = Object.fromEntries(
    Object.entries(LINKS)
        .filter(([_, v]) => v)
        .map(([k, v]) => [normalize(v), k])
);

// Cria e gerencia o overlay com iframe
function ensureViewer() {
    const wrap = document.createElement('div');
    wrap.id = 'viewer-wrap';
    wrap.style.cssText = 'position:fixed;inset:0;display:none;background:rgba(0,0,0,.6);z-index:2147483647;';
    const panel = document.createElement('div');
    panel.style.cssText = 'position:absolute;top:5vh;left:5vw;width:90vw;height:90vh;background:#fff;box-shadow:0 10px 40px rgba(0,0,0,.4);border-radius:8px;overflow:hidden;';
    const btn = document.createElement('button');
    btn.setAttribute('aria-label','Fechar');
    btn.textContent = '×';
    btn.style.cssText = 'position:absolute;top:8px;right:12px;font:600 24px/1 system-ui;border:0;background:transparent;cursor:pointer;z-index:1;';
    const frame = document.createElement('iframe');
    frame.id = 'viewer-frame';
    frame.title = 'Visualização';
    frame.style.cssText = 'width:100%;height:100%;border:0;';
    panel.appendChild(btn);
    panel.appendChild(frame);
    wrap.appendChild(panel);
    document.body.appendChild(wrap);

    function open(url) {
        frame.src = url;
        wrap.style.display = 'block';
    }
    function hide() {
        wrap.style.display = 'none';
        frame.removeAttribute('src');
    }

    btn.addEventListener('click', hide);
    wrap.addEventListener('click', e => { if (e.target === wrap) hide(); });

    return { open, hide, get isOpen() { return wrap.style.display === 'block'; } };
}
const viewer = ensureViewer();

// Abre link se existir; se interno, mostra no viewer; se externo, nova aba.
// Retorna true se navegou, false se não havia URL.
// Substitua apenas ESTA função:
function openLink(url) {
    if (!url) return false;          // 1) sem URL -> não navega
    window.location.assign(url);     // 2) navega na mesma aba (responsivo do próprio destino)
    return true;                     // 3) sinaliza que navegou
    const key = ROUTES[normalize(url)];
    openInViewer(url, key, true);
    return true;
}

// Navega no viewer e mantém histórico
function openInViewer(url, key, push = true) {
    viewer.open(url);
    if (push) history.pushState({ viewer: true, key }, '', key ? `#${key}` : location.href);
}

// Abre link se existir; caso contrário executa o fluxo informado
function goOrFlow(url, flowFn) {
    if (openLink(url)) return;
    flowFn();
}

// Voltar/Avançar do navegador e hash inicial
function handlePopstate() {
    const key = location.hash.slice(1).toUpperCase();
    if (LINKS[key]) {
        openInViewer(LINKS[key], key, false);
    } else {
        viewer.hide();
    }
}
window.addEventListener('popstate', handlePopstate);
window.addEventListener('DOMContentLoaded', () => { if (location.hash) handlePopstate(); });

// ===== Fluxos =====
function boot() {
    addMsg('Olá! Escolha uma opção.');
    setQuick([
        { label: 'Conhecer a PROCONSVATE', onClick: () => goOrFlow(LINKS.PROCONSVATE, flowProconsvate) },
        { label: 'Conhecer as ODS', onClick: () => goOrFlow(LINKS.ODS, flowODS) },
        { label: 'Deixar um feedback', onClick: () => goOrFlow(LINKS.FEEDBACK, flowFeedback) }
    ]);
}

function flowProconsvate() {
    addMsg('<strong>PROCONSVATE</strong><br>Resumo institucional aqui. (incerteza: você preenche)', 'bot', true);
    addMsg('Escolha um tópico:', 'bot');
    setQuick([
        { label: 'O que é?', onClick: () => addMsg('Definição objetiva da PROCONSVATE.') },
        { label: 'Serviços', onClick: () => addMsg('Lista breve dos serviços prestados.') },
        { label: 'Voltar', onClick: boot }
    ]);
}

function flowODS() {
    addMsg('<strong>ODS</strong><br>As 17 metas globais da ONU para 2030.', 'bot', true);
    setQuick([
        { label: 'Ver as 17', onClick: () => addMsg('1. Pobreza • 2. Fome • 3. Saúde • 4. Educação • 5. Igualdade • 6. Água • 7. Energia • 8. Trabalho • 9. Indústria • 10. Desigualdades • 11. Cidades • 12. Consumo • 13. Clima • 14. Vida na água • 15. Vida terrestre • 16. Paz/Justiça • 17. Parcerias.') },
        {
            label: 'Por que importam?',
            onClick: () => addMsg(
`1 - Guiam ações globais contra pobreza, fome, desigualdade e crise climática.
2 - Estabelecem metas comuns até 2030.
3 - Integram dimensões sociais, econômicas e ambientais.
4 - Promovem justiça e inclusão com educação, saúde e igualdade.
5 - Protegem o planeta com energia limpa e preservação.
6 - Fortalecem parcerias internacionais.
7 - Incentivam inovação e responsabilidade no progresso humano.`)
        },
        { label: 'Voltar', onClick: boot }
    ]);
}

function flowFeedback() {
    addMsg('Digite seu feedback abaixo e clique em Enviar. Obrigado!');
    els.footer.style.display = 'flex';
    els.input.focus();
    setQuick([
        { label: 'Voltar', onClick: () => { els.footer.style.display = 'none'; boot(); } }
    ]);
}

// ===== Feedback =====
function submitFeedback() {
    const text = els.input.value.trim();
    if (!text) return;
    addMsg(text, 'user'); // usuário sempre em texto puro
    els.input.value = '';

    const items = JSON.parse(localStorage.getItem('feedbacks') || '[]');
    items.push({ text, at: new Date().toISOString() });
    localStorage.setItem('feedbacks', JSON.stringify(items));

    addMsg('Recebido. Valeu pelo feedback!');
}

// ===== Eventos =====
els.launcher.addEventListener('click', () => {
    els.chat.classList.toggle('open');
    if (els.chat.classList.contains('open') && els.messages.childElementCount === 0) boot();
});

els.close.addEventListener('click', () => els.chat.classList.remove('open'));
els.send.addEventListener('click', submitFeedback);
els.input.addEventListener('keydown', e => { if (e.key === 'Enter') submitFeedback(); });
window.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
        if (viewer.isOpen) viewer.hide(); else els.chat.classList.remove('open');
    }
});
