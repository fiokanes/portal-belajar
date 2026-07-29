/**
 * ==========================================
 * SIMULATION SYSTEM v1.0
 * Simulasi Interaktif untuk Semua Mata Pelajaran
 * ==========================================
 */

class SimulationSystem {
    constructor() {
        this.currentSim = null;
    }

    // ============ SHOW SIMULATION MODAL ============
    show(type, data) {
        this.currentSim = type;
        
        const modal = document.createElement('div');
        modal.className = 'sim-modal-overlay';
        modal.id = 'simModal';
        
        let content = '';
        switch(type) {
            case 'diagram':
                content = this.createDiagram(data);
                break;
            case 'timeline':
                content = this.createTimeline(data);
                break;
            case 'process':
                content = this.createProcess(data);
                break;
            case 'interactive':
                content = this.createInteractive(data);
                break;
            case 'comparison':
                content = this.createComparison(data);
                break;
            default:
                content = this.createDiagram(data);
        }
        
        modal.innerHTML = `
            <div class="sim-modal">
                <div class="sim-header">
                    <h2>${data.title || 'Simulasi Interaktif'}</h2>
                    <button class="sim-close" onclick="simulationSystem.close()">✕</button>
                </div>
                <div class="sim-body">
                    ${content}
                </div>
                <div class="sim-footer">
                    <p class="sim-hint">💡 Klik atau hover pada elemen untuk melihat detail</p>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
        
        // Initialize interactive elements
        this.initInteractive();
        
        if (window.AudioSystem) window.AudioSystem.playPop();
    }

    close() {
        const modal = document.getElementById('simModal');
        if (modal) modal.remove();
        if (window.AudioSystem) window.AudioSystem.playClick();
    }

    // ============ DIAGRAM SIMULATION ============
    createDiagram(data) {
        return `
            <div class="sim-diagram">
                <div class="diagram-container">
                    ${data.items.map((item, i) => `
                        <div class="diagram-node" style="--delay: ${i * 0.1}s" data-info="${item.info || ''}">
                            <div class="node-icon">${item.icon}</div>
                            <div class="node-label">${item.label}</div>
                            ${item.children ? `
                                <div class="node-children">
                                    ${item.children.map(child => `
                                        <div class="child-node">
                                            <span>${child.icon}</span>
                                            <span>${child.label}</span>
                                        </div>
                                    `).join('')}
                                </div>
                            ` : ''}
                        </div>
                        ${i < data.items.length - 1 ? '<div class="diagram-arrow">→</div>' : ''}
                    `).join('')}
                </div>
                <div class="diagram-info" id="diagramInfo">
                    <p>Klik pada elemen untuk melihat informasi</p>
                </div>
            </div>
        `;
    }

    // ============ TIMELINE SIMULATION ============
    createTimeline(data) {
        return `
            <div class="sim-timeline">
                <div class="timeline-container">
                    ${data.events.map((event, i) => `
                        <div class="timeline-event ${i % 2 === 0 ? 'left' : 'right'}" style="--delay: ${i * 0.15}s">
                            <div class="event-marker">
                                <div class="marker-dot"></div>
                            </div>
                            <div class="event-content">
                                <div class="event-date">${event.date}</div>
                                <div class="event-icon">${event.icon}</div>
                                <h4>${event.title}</h4>
                                <p>${event.description}</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    // ============ PROCESS SIMULATION ============
    createProcess(data) {
        return `
            <div class="sim-process">
                <div class="process-steps">
                    ${data.steps.map((step, i) => `
                        <div class="process-step" style="--delay: ${i * 0.1}s" data-step="${i + 1}">
                            <div class="step-number">${i + 1}</div>
                            <div class="step-icon">${step.icon}</div>
                            <div class="step-content">
                                <h4>${step.title}</h4>
                                <p>${step.description}</p>
                            </div>
                            ${i < data.steps.length - 1 ? '<div class="step-arrow">▼</div>' : ''}
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    // ============ INTERACTIVE SIMULATION ============
    createInteractive(data) {
        return `
            <div class="sim-interactive">
                <div class="interactive-area">
                    ${data.elements.map((el, i) => `
                        <div class="interactive-element" 
                             style="left: ${el.x}%; top: ${el.y}%"
                             data-info="${el.info}"
                             onclick="simulationSystem.showInfo(this)">
                            <span class="element-icon">${el.icon}</span>
                            <span class="element-label">${el.label}</span>
                        </div>
                    `).join('')}
                </div>
                <div class="interactive-info" id="interactiveInfo">
                    <p>Klik pada elemen untuk melihat informasi</p>
                </div>
            </div>
        `;
    }

    // ============ COMPARISON SIMULATION ============
    createComparison(data) {
        return `
            <div class="sim-comparison">
                <div class="comparison-container">
                    <div class="comparison-side left-side">
                        <h3>${data.left.title}</h3>
                        <div class="comparison-icon">${data.left.icon}</div>
                        <ul>
                            ${data.left.items.map(item => `<li>${item}</li>`).join('')}
                        </ul>
                    </div>
                    <div class="comparison-divider">
                        <span>VS</span>
                    </div>
                    <div class="comparison-side right-side">
                        <h3>${data.right.title}</h3>
                        <div class="comparison-icon">${data.right.icon}</div>
                        <ul>
                            ${data.right.items.map(item => `<li>${item}</li>`).join('')}
                        </ul>
                    </div>
                </div>
            </div>
        `;
    }

    // ============ SHOW INFO ============
    showInfo(element) {
        const info = element.getAttribute('data-info');
        const infoPanel = document.getElementById('interactiveInfo') || document.getElementById('diagramInfo');
        
        if (infoPanel && info) {
            infoPanel.innerHTML = `<p>${info}</p>`;
            infoPanel.style.animation = 'none';
            infoPanel.offsetHeight;
            infoPanel.style.animation = 'fadeInUp 0.3s ease';
        }
        
        // Highlight element
        document.querySelectorAll('.interactive-element, .diagram-node').forEach(el => {
            el.classList.remove('active');
        });
        element.classList.add('active');
        
        if (window.AudioSystem) window.AudioSystem.playPop();
    }

    // ============ INITIALIZE INTERACTIVE ============
    initInteractive() {
        // Add hover effects
        document.querySelectorAll('.diagram-node, .timeline-event, .process-step, .interactive-element').forEach(el => {
            el.addEventListener('mouseenter', function() {
                this.style.transform = 'scale(1.05)';
            });
            el.addEventListener('mouseleave', function() {
                this.style.transform = '';
            });
        });
    }
}

// ============ GLOBAL INSTANCE ============
let simulationSystem = new SimulationSystem();

// ============ STYLES ============
const simStyles = document.createElement('style');
simStyles.textContent = `
    /* ============ SIMULATION MODAL ============ */
    .sim-modal-overlay {
        position: fixed;
        top: 0; left: 0;
        width: 100%; height: 100%;
        background: rgba(0,0,0,0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        animation: fadeIn 0.3s ease;
        padding: 20px;
    }

    .sim-modal {
        background: white;
        border-radius: 25px;
        width: 100%;
        max-width: 900px;
        max-height: 90vh;
        overflow-y: auto;
        animation: scaleIn 0.3s ease;
        box-shadow: 0 20px 60px rgba(0,0,0,0.3);
    }

    .sim-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 25px 30px;
        border-bottom: 2px solid #f0f0f0;
    }

    .sim-header h2 {
        color: #1a237e;
        margin: 0;
        font-size: 1.5em;
    }

    .sim-close {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        border: none;
        background: #f5f5f5;
        color: #666;
        font-size: 1.2em;
        cursor: pointer;
        transition: all 0.3s ease;
    }

    .sim-close:hover {
        background: #e0e0e0;
        transform: rotate(90deg);
    }

    .sim-body {
        padding: 30px;
    }

    .sim-footer {
        padding: 15px 30px;
        border-top: 2px solid #f0f0f0;
        text-align: center;
    }

    .sim-hint {
        color: #888;
        font-size: 0.9em;
        margin: 0;
    }

    /* ============ DIAGRAM ============ */
    .diagram-container {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        gap: 20px;
        padding: 20px;
    }

    .diagram-node {
        background: linear-gradient(135deg, #e3f2fd, #ffffff);
        border: 2px solid #1a237e;
        border-radius: 15px;
        padding: 20px;
        text-align: center;
        cursor: pointer;
        transition: all 0.3s ease;
        animation: fadeInUp 0.5s ease forwards;
        animation-delay: var(--delay);
        opacity: 0;
        min-width: 120px;
    }

    .diagram-node:hover, .diagram-node.active {
        transform: translateY(-5px);
        box-shadow: 0 10px 30px rgba(26, 35, 126, 0.2);
        background: linear-gradient(135deg, #1a237e, #283593);
        color: white;
    }

    .node-icon {
        font-size: 2.5em;
        margin-bottom: 10px;
    }

    .node-label {
        font-weight: 600;
        font-size: 0.95em;
    }

    .diagram-arrow {
        font-size: 2em;
        color: #1a237e;
        animation: pulse 1.5s ease infinite;
    }

    @keyframes pulse {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.5; }
    }

    .diagram-info {
        background: #f8f9fa;
        border-radius: 15px;
        padding: 20px;
        margin-top: 20px;
        text-align: center;
        min-height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    /* ============ TIMELINE ============ */
    .timeline-container {
        position: relative;
        padding: 20px 0;
    }

    .timeline-container::before {
        content: '';
        position: absolute;
        left: 50%;
        top: 0;
        bottom: 0;
        width: 3px;
        background: linear-gradient(to bottom, #1a237e, #283593);
        transform: translateX(-50%);
    }

    .timeline-event {
        position: relative;
        width: 45%;
        padding: 20px;
        background: white;
        border-radius: 15px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        margin-bottom: 30px;
        animation: fadeInUp 0.5s ease forwards;
        animation-delay: var(--delay);
        opacity: 0;
        transition: all 0.3s ease;
    }

    .timeline-event:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 30px rgba(0,0,0,0.15);
    }

    .timeline-event.left {
        margin-left: 5%;
    }

    .timeline-event.right {
        margin-left: 50%;
    }

    .event-marker {
        position: absolute;
        top: 30px;
        width: 20px;
        height: 20px;
    }

    .timeline-event.left .event-marker {
        right: -35px;
    }

    .timeline-event.right .event-marker {
        left: -35px;
    }

    .marker-dot {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: #1a237e;
        border: 3px solid white;
        box-shadow: 0 0 0 3px #1a237e;
    }

    .event-date {
        font-size: 0.85em;
        color: #1a237e;
        font-weight: 600;
        margin-bottom: 10px;
    }

    .event-icon {
        font-size: 2em;
        margin-bottom: 10px;
    }

    .event-content h4 {
        color: #333;
        margin-bottom: 10px;
    }

    .event-content p {
        color: #666;
        margin: 0;
        line-height: 1.5;
    }

    /* ============ PROCESS ============ */
    .process-steps {
        display: flex;
        flex-direction: column;
        gap: 20px;
        max-width: 600px;
        margin: 0 auto;
    }

    .process-step {
        display: flex;
        align-items: flex-start;
        gap: 20px;
        padding: 20px;
        background: white;
        border-radius: 15px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        animation: fadeInLeft 0.5s ease forwards;
        animation-delay: var(--delay);
        opacity: 0;
        transition: all 0.3s ease;
        cursor: pointer;
    }

    .process-step:hover {
        transform: translateX(10px);
        box-shadow: 0 10px 30px rgba(0,0,0,0.15);
    }

    .step-number {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: linear-gradient(135deg, #1a237e, #283593);
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        font-size: 1.2em;
        flex-shrink: 0;
    }

    .step-icon {
        font-size: 2em;
        flex-shrink: 0;
    }

    .step-content {
        flex: 1;
    }

    .step-content h4 {
        color: #1a237e;
        margin-bottom: 5px;
    }

    .step-content p {
        color: #666;
        margin: 0;
        line-height: 1.5;
    }

    .step-arrow {
        text-align: center;
        color: #1a237e;
        font-size: 1.5em;
        margin: -10px 0;
        animation: bounce 1s ease infinite;
    }

    @keyframes bounce {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(5px); }
    }

    /* ============ INTERACTIVE ============ */
    .interactive-area {
        position: relative;
        width: 100%;
        height: 400px;
        background: linear-gradient(135deg, #e3f2fd, #ffffff);
        border-radius: 15px;
        border: 2px solid #1a237e;
        overflow: hidden;
    }

    .interactive-element {
        position: absolute;
        background: white;
        border: 2px solid #1a237e;
        border-radius: 10px;
        padding: 10px 15px;
        cursor: pointer;
        transition: all 0.3s ease;
        display: flex;
        align-items: center;
        gap: 8px;
        transform: translate(-50%, -50%);
    }

    .interactive-element:hover, .interactive-element.active {
        background: #1a237e;
        color: white;
        transform: translate(-50%, -50%) scale(1.1);
        box-shadow: 0 5px 15px rgba(26, 35, 126, 0.3);
    }

    .element-icon {
        font-size: 1.5em;
    }

    .element-label {
        font-weight: 600;
        font-size: 0.9em;
    }

    .interactive-info {
        background: #f8f9fa;
        border-radius: 15px;
        padding: 20px;
        margin-top: 20px;
        text-align: center;
        min-height: 60px;
    }

    /* ============ COMPARISON ============ */
    .comparison-container {
        display: flex;
        gap: 20px;
        align-items: stretch;
    }

    .comparison-side {
        flex: 1;
        background: white;
        border-radius: 15px;
        padding: 25px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        transition: all 0.3s ease;
    }

    .comparison-side:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 30px rgba(0,0,0,0.15);
    }

    .left-side {
        border-top: 4px solid #1a237e;
    }

    .right-side {
        border-top: 4px solid #e53935;
    }

    .comparison-side h3 {
        text-align: center;
        margin-bottom: 15px;
        color: #333;
    }

    .comparison-icon {
        text-align: center;
        font-size: 3em;
        margin-bottom: 20px;
    }

    .comparison-side ul {
        list-style: none;
        padding: 0;
    }

    .comparison-side li {
        padding: 10px 0;
        border-bottom: 1px solid #f0f0f0;
        color: #555;
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .comparison-side li::before {
        content: '✓';
        color: #4caf50;
        font-weight: bold;
    }

    .comparison-divider {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 60px;
        flex-shrink: 0;
    }

    .comparison-divider span {
        background: #1a237e;
        color: white;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        font-size: 1.2em;
    }

    /* ============ ANIMATIONS ============ */
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }

    @keyframes fadeInUp {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }

    @keyframes fadeInLeft {
        from { opacity: 0; transform: translateX(-20px); }
        to { opacity: 1; transform: translateX(0); }
    }

    @keyframes scaleIn {
        from { transform: scale(0.9); opacity: 0; }
        to { transform: scale(1); opacity: 1; }
    }

    /* ============ RESPONSIVE ============ */
    @media (max-width: 768px) {
        .sim-modal {
            margin: 10px;
            max-height: 95vh;
        }

        .sim-header, .sim-body, .sim-footer {
            padding: 15px 20px;
        }

        .timeline-container::before {
            left: 20px;
        }

        .timeline-event {
            width: calc(100% - 50px);
            margin-left: 50px !important;
        }

        .timeline-event.left .event-marker,
        .timeline-event.right .event-marker {
            left: -40px;
            right: auto;
        }

        .comparison-container {
            flex-direction: column;
        }

        .comparison-divider {
            width: 100%;
            height: 40px;
        }

        .interactive-area {
            height: 300px;
        }
    }
`;
document.head.appendChild(simStyles);

// Export
window.SimulationSystem = SimulationSystem;
window.simulationSystem = simulationSystem;
