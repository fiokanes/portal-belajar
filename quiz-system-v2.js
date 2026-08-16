/**
 * ==========================================
 * QUIZ SYSTEM v2.0 - INTERAKTIF & LENGKAP
 * Fitur: Input Nama, Soal Random, Penjelasan, Leaderboard
 * ==========================================
 */

class QuizSystem {
    constructor(mapel, babData) {
        this.mapel = mapel;
        this.babData = babData; // Bank soal per bab
        this.currentBab = null;
        this.questions = [];
        this.currentQuestion = 0;
        this.score = 0;
        this.userName = '';
        this.answers = [];
        this.totalQuestions = 10; // Jumlah soal per kuis
        this.leaderboardKey = `leaderboard_${mapel}`;
    }

    // ============ INPUT NAME MODAL ============
    showNameInput(babId) {
        this.currentBab = babId;
        const modal = document.createElement('div');
        modal.className = 'quiz-modal-overlay';
        modal.id = 'nameModal';
        modal.innerHTML = `
            <div class="quiz-modal">
                <div class="quiz-modal-header">
                    <h2>📝 Masukkan Namamu</h2>
                    <p>Siap mengerjakan kuis ${this.mapel}?</p>
                </div>
                <div class="quiz-modal-body">
                    <input type="text" id="userNameInput" placeholder="Ketik namamu di sini..." 
                           maxlength="20" autocomplete="off">
                    <p class="input-hint">Nama akan muncul di leaderboard!</p>
                </div>
                <div class="quiz-modal-footer">
                    <button class="btn-cancel" onclick="quizSystem.closeModal()">Batal</button>
                    <button class="btn-start" onclick="quizSystem.startQuiz()">
                        🚀 Mulai Kuis!
                    </button>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
        
        // Focus input
        setTimeout(() => {
            document.getElementById('userNameInput').focus();
        }, 100);
        
        // Enter to start
        document.getElementById('userNameInput').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.startQuiz();
        });
        
        // Play sound
        if (window.AudioSystem) window.AudioSystem.playPop();
    }

    closeModal() {
        const modal = document.getElementById('nameModal');
        if (modal) modal.remove();
        if (window.AudioSystem) window.AudioSystem.playClick();
    }

    // ============ START QUIZ ============
    startQuiz() {
        const input = document.getElementById('userNameInput');
        this.userName = input.value.trim();
        
        if (!this.userName) {
            input.style.borderColor = '#f44336';
            input.style.animation = 'shake 0.5s ease';
            setTimeout(() => {
                input.style.borderColor = '#ddd';
                input.style.animation = '';
            }, 500);
            return;
        }
        
        this.closeModal();
        this.score = 0;
        this.currentQuestion = 0;
        this.answers = [];
        
        // Get random questions
        this.questions = this.getRandomQuestions(this.currentBab);
        
        // Show quiz
        this.showQuiz();
        
        // Play sound
        if (window.AudioSystem) window.AudioSystem.playNavigate();
    }

    // ============ GET RANDOM QUESTIONS ============
    getRandomQuestions(babId) {
        const bab = this.babData[babId];
        if (!bab || !bab.questions || bab.questions.length === 0) {
            console.error('No questions found for bab:', babId);
            return [];
        }
        
        // Shuffle and pick questions
        const shuffled = [...bab.questions].sort(() => Math.random() - 0.5);
        return shuffled.slice(0, Math.min(this.totalQuestions, shuffled.length));
    }

    // ============ SHOW QUIZ ============
    showQuiz() {
        const question = this.questions[this.currentQuestion];
        if (!question) {
            this.showResult();
            return;
        }

        const progress = ((this.currentQuestion) / this.questions.length) * 100;
        
        const modal = document.createElement('div');
        modal.className = 'quiz-modal-overlay';
        modal.id = 'quizModal';
        modal.innerHTML = `
            <div class="quiz-modal quiz-modal-large">
                <div class="quiz-progress-bar">
                    <div class="quiz-progress-fill" style="width: ${progress}%"></div>
                </div>
                <div class="quiz-modal-header">
                    <div class="quiz-info">
                        <span class="quiz-name">👤 ${this.userName}</span>
                        <span class="quiz-score">⭐ ${this.score} poin</span>
                    </div>
                    <h2>Soal ${this.currentQuestion + 1} dari ${this.questions.length}</h2>
                </div>
                <div class="quiz-modal-body">
                    <div class="quiz-question-text">
                        <p>${question.question}</p>
                        ${question.image ? `<img src="${question.image}" alt="Soal" class="quiz-image">` : ''}
                    </div>
                    <div class="quiz-options-container">
                        ${question.options.map((opt, i) => `
                            <button class="quiz-option-btn" onclick="quizSystem.checkAnswer(${i}, ${question.correct})" data-index="${i}">
                                <span class="option-letter">${String.fromCharCode(65 + i)}</span>
                                <span class="option-text">${opt}</span>
                            </button>
                        `).join('')}
                    </div>
                    <div class="quiz-explanation" id="quizExplanation" style="display: none;">
                        <div class="explanation-icon"></div>
                        <div class="explanation-text"></div>
                    </div>
                </div>
                <div class="quiz-modal-footer" id="quizFooter" style="display: none;">
                    <button class="btn-next" onclick="quizSystem.nextQuestion()">
                        ${this.currentQuestion < this.questions.length - 1 ? '➡️ Soal Berikutnya' : '📊 Lihat Hasil'}
                    </button>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
        
        // Animate options
        setTimeout(() => {
            document.querySelectorAll('.quiz-option-btn').forEach((btn, i) => {
                btn.style.animationDelay = `${i * 0.1}s`;
                btn.classList.add('animate-in');
            });
        }, 100);
    }

    // ============ CHECK ANSWER ============
    checkAnswer(selected, correct) {
        const question = this.questions[this.currentQuestion];
        const options = document.querySelectorAll('.quiz-option-btn');
        const explanation = document.getElementById('quizExplanation');
        const footer = document.getElementById('quizFooter');
        
        // Disable all options
        options.forEach(opt => {
            opt.style.pointerEvents = 'none';
        });
        
        // Mark correct and wrong
        options[correct].classList.add('correct');
        if (selected !== correct) {
            options[selected].classList.add('wrong');
        }
        
        // Update score
        const isCorrect = selected === correct;
        if (isCorrect) {
            this.score += 10;
            if (window.AudioSystem) window.AudioSystem.playSuccess();
        } else {
            if (window.AudioSystem) window.AudioSystem.playError();
        }
        
        // Save answer
        this.answers.push({
            question: question.question,
            selected: selected,
            correct: correct,
            isCorrect: isCorrect,
            explanation: question.explanation
        });
        
        // Show explanation (hanya jika soal memiliki penjelasan)
        if (question.explanation) {
            explanation.style.display = 'flex';
            explanation.className = `quiz-explanation ${isCorrect ? 'explanation-correct' : 'explanation-wrong'}`;
            explanation.querySelector('.explanation-icon').textContent = isCorrect ? '✅' : '❌';
            explanation.querySelector('.explanation-text').innerHTML = `
                <strong>${isCorrect ? 'Benar!' : 'Salah!'}</strong>
                <p>${question.explanation}</p>
            `;
        }
        
        // Show footer
        footer.style.display = 'flex';
        
        // Update score display
        document.querySelector('.quiz-score').textContent = `⭐ ${this.score} poin`;
    }

    // ============ NEXT QUESTION ============
    nextQuestion() {
        // Remove current modal
        const modal = document.getElementById('quizModal');
        if (modal) modal.remove();
        
        this.currentQuestion++;
        
        if (this.currentQuestion < this.questions.length) {
            this.showQuiz();
        } else {
            this.showResult();
        }
        
        if (window.AudioSystem) window.AudioSystem.playClick();
    }

    // ============ SHOW RESULT ============
    showResult() {
        // Save to leaderboard
        this.saveToLeaderboard();
        
        // 🎁 Hadiah XP (ProgressSystem)
        let gainedXP = 0;
        if (typeof ProgressSystem !== 'undefined') {
            const total = this.questions.length;
            gainedXP = ProgressSystem.quizFinished(this.score, total, true);
            try { document.dispatchEvent(new CustomEvent('pb-xp-updated')); } catch (e) {}
        }
        
        const percentage = Math.round((this.score / (this.questions.length * 10)) * 100);
        let grade, message, emoji;
        
        if (percentage >= 90) {
            grade = 'A+';
            message = 'Luar biasa! Kamu sangat menguasai materi ini!';
            emoji = '🏆';
        } else if (percentage >= 80) {
            grade = 'A';
            message = 'Bagus sekali! Pemahamanmu sangat baik!';
            emoji = '🌟';
        } else if (percentage >= 70) {
            grade = 'B';
            message = 'Cukup baik! Tingkatkan lagi ya!';
            emoji = '👍';
        } else if (percentage >= 60) {
            grade = 'C';
            message = 'Lumayan! Belajar lagi yuk!';
            emoji = '📚';
        } else {
            grade = 'D';
            message = 'Ayo semangat belajar lagi!';
            emoji = '💪';
        }
        
        // Show confetti for high scores
        if (percentage >= 80 && window.VisualEffects) {
            window.VisualEffects.showConfetti();
        }
        
        const modal = document.createElement('div');
        modal.className = 'quiz-modal-overlay';
        modal.id = 'resultModal';
        modal.innerHTML = `
            <div class="quiz-modal quiz-modal-result">
                <div class="result-header">
                    <div class="result-emoji">${emoji}</div>
                    <h2>Kuis Selesai!</h2>
                </div>
                <div class="result-body">
                    <div class="result-stats">
                        <div class="stat-card">
                            <span class="stat-value">${this.score}</span>
                            <span class="stat-label">Poin</span>
                        </div>
                        <div class="stat-card">
                            <span class="stat-value">${percentage}%</span>
                            <span class="stat-label">Benar</span>
                        </div>
                        <div class="stat-card">
                            <span class="stat-value">${grade}</span>
                            <span class="stat-label">Nilai</span>
                        </div>
                    </div>
                    <p class="result-message">${message}</p>
                    ${gainedXP ? `<p class="xp-reward">⭐ +${gainedXP} XP! Klik XP di atas untuk melihat progresmu.</p>` : ''}
                    
                    <div class="result-detail">
                        <h3>📋 Rincian Jawaban:</h3>
                        <div class="answer-list">
                            ${this.answers.map((ans, i) => `
                                <div class="answer-item ${ans.isCorrect ? 'answer-correct' : 'answer-wrong'}">
                                    <span class="answer-number">${i + 1}</span>
                                    <div class="answer-info">
                                        <p class="answer-question">${ans.question.substring(0, 60)}...</p>
                                        <p class="answer-explanation">${ans.explanation}</p>
                                    </div>
                                    <span class="answer-status">${ans.isCorrect ? '✅' : '❌'}</span>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    
                    <div class="result-leaderboard">
                        <h3>🏆 Leaderboard</h3>
                        <div class="leaderboard-list" id="resultLeaderboard"></div>
                    </div>
                </div>
                <div class="result-footer">
                    <button class="btn-retry" onclick="quizSystem.retryQuiz()">
                        🔄 Coba Lagi
                    </button>
                    <button class="btn-back" onclick="quizSystem.closeResult()">
                        🏠 Kembali
                    </button>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
        
        // Load leaderboard
        this.loadLeaderboard('resultLeaderboard');
        
        // Play sound
        if (window.AudioSystem) {
            if (percentage >= 80) {
                window.AudioSystem.playLevelUp();
            } else {
                window.AudioSystem.playGameOver();
            }
        }
    }

    // ============ LEADERBOARD ============
    saveToLeaderboard() {
        let leaderboard = this.getLeaderboard();
        
        leaderboard.push({
            name: this.userName,
            score: this.score,
            percentage: Math.round((this.score / (this.questions.length * 10)) * 100),
            date: new Date().toLocaleDateString('id-ID'),
            bab: this.currentBab
        });
        
        // Sort by score descending
        leaderboard.sort((a, b) => b.score - a.score);
        
        // Keep top 10
        leaderboard = leaderboard.slice(0, 10);
        
        localStorage.setItem(this.leaderboardKey, JSON.stringify(leaderboard));
    }

    getLeaderboard() {
        const data = localStorage.getItem(this.leaderboardKey);
        return data ? JSON.parse(data) : [];
    }

    loadLeaderboard(containerId) {
        const leaderboard = this.getLeaderboard();
        const container = document.getElementById(containerId);
        
        if (!container) return;
        
        if (leaderboard.length === 0) {
            container.innerHTML = '<p class="no-data">Belum ada data. Jadilah yang pertama!</p>';
            return;
        }
        
        container.innerHTML = leaderboard.map((entry, i) => `
            <div class="leaderboard-item ${i < 3 ? 'top-three' : ''} ${entry.name === this.userName ? 'current-user' : ''}">
                <span class="rank">${i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : i + 1}</span>
                <span class="player-name">${entry.name}</span>
                <span class="player-score">${entry.score} poin</span>
                <span class="player-date">${entry.date}</span>
            </div>
        `).join('');
    }

    // ============ RETRY QUIZ ============
    retryQuiz() {
        this.closeResult();
        this.showNameInput(this.currentBab);
    }

    closeResult() {
        const modal = document.getElementById('resultModal');
        if (modal) modal.remove();
        if (window.AudioSystem) window.AudioSystem.playClick();
    }
}

// ============ GLOBAL QUIZ SYSTEM INSTANCE ============
let quizSystem = null;

// ============ STYLES ============
const quizStyles = document.createElement('style');
quizStyles.textContent = `
    /* ============ QUIZ MODAL ============ */
    .quiz-modal-overlay {
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

    .quiz-modal {
        background: white;
        border-radius: 25px;
        width: 100%;
        max-width: 500px;
        max-height: 90vh;
        overflow-y: auto;
        animation: scaleIn 0.3s ease;
        box-shadow: 0 20px 60px rgba(0,0,0,0.3);
    }

    .quiz-modal-large {
        max-width: 600px;
    }

    .quiz-modal-result {
        max-width: 700px;
    }

    .quiz-progress-bar {
        height: 6px;
        background: #e0e0e0;
        border-radius: 25px 25px 0 0;
        overflow: hidden;
    }

    .quiz-progress-fill {
        height: 100%;
        background: linear-gradient(90deg, #4caf50, #8bc34a);
        transition: width 0.5s ease;
    }

    .quiz-modal-header {
        padding: 25px 30px 15px;
        text-align: center;
    }

    .quiz-modal-header h2 {
        color: #1a237e;
        font-size: 1.4em;
        margin: 10px 0;
    }

    .quiz-info {
        display: flex;
        justify-content: space-between;
        font-size: 0.9em;
        color: #666;
    }

    .quiz-name, .quiz-score {
        background: #f5f5f5;
        padding: 5px 12px;
        border-radius: 15px;
        font-weight: 500;
    }

    .quiz-modal-body {
        padding: 20px 30px;
    }

    .quiz-question-text {
        background: #f8f9fa;
        border-radius: 15px;
        padding: 20px;
        margin-bottom: 20px;
        border-left: 4px solid #1a237e;
    }

    .quiz-question-text p {
        font-size: 1.1em;
        color: #333;
        line-height: 1.6;
        margin: 0;
    }

    .quiz-image {
        max-width: 100%;
        border-radius: 10px;
        margin-top: 15px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    }

    .quiz-options-container {
        display: flex;
        flex-direction: column;
        gap: 12px;
    }

    .quiz-option-btn {
        display: flex;
        align-items: center;
        gap: 15px;
        padding: 15px 20px;
        background: #f8f9fa;
        border: 2px solid #e0e0e0;
        border-radius: 15px;
        cursor: pointer;
        transition: all 0.3s ease;
        text-align: left;
        font-size: 1em;
        opacity: 0;
        transform: translateX(-20px);
    }

    .quiz-option-btn.animate-in {
        animation: slideInLeft 0.3s ease forwards;
    }

    @keyframes slideInLeft {
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }

    .quiz-option-btn:hover {
        border-color: #1a237e;
        background: #e8eaf6;
        transform: translateX(5px);
    }

    .quiz-option-btn.correct {
        border-color: #4caf50;
        background: #e8f5e9;
        animation: pulseCorrect 0.5s ease;
    }

    @keyframes pulseCorrect {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.02); }
    }

    .quiz-option-btn.wrong {
        border-color: #f44336;
        background: #ffebee;
        animation: shake 0.5s ease;
    }

    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-10px); }
        75% { transform: translateX(10px); }
    }

    .option-letter {
        width: 35px;
        height: 35px;
        border-radius: 50%;
        background: #1a237e;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        flex-shrink: 0;
    }

    .option-text {
        flex: 1;
        color: #333;
    }

    .quiz-explanation {
        margin-top: 20px;
        padding: 15px 20px;
        border-radius: 15px;
        display: flex;
        gap: 15px;
        align-items: flex-start;
        animation: fadeInUp 0.3s ease;
    }

    @keyframes fadeInUp {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
    }

    .explanation-correct {
        background: #e8f5e9;
        border: 2px solid #4caf50;
    }

    .explanation-wrong {
        background: #ffebee;
        border: 2px solid #f44336;
    }

    .explanation-icon {
        font-size: 1.5em;
        flex-shrink: 0;
    }

    .explanation-text strong {
        display: block;
        margin-bottom: 5px;
        font-size: 1.1em;
    }

    .explanation-text p {
        margin: 0;
        color: #555;
        font-size: 0.95em;
        line-height: 1.5;
    }

    .quiz-modal-footer {
        padding: 20px 30px;
        display: flex;
        justify-content: flex-end;
        gap: 10px;
    }

    .btn-next, .btn-start, .btn-retry, .btn-back, .btn-cancel {
        padding: 12px 25px;
        border-radius: 25px;
        border: none;
        font-size: 1em;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
    }

    .btn-next, .btn-start {
        background: linear-gradient(135deg, #1a237e, #283593);
        color: white;
    }

    .btn-next:hover, .btn-start:hover {
        transform: translateY(-2px);
        box-shadow: 0 5px 15px rgba(26, 35, 126, 0.4);
    }

    .btn-retry {
        background: linear-gradient(135deg, #4caf50, #66bb6a);
        color: white;
    }

    .btn-back {
        background: #f5f5f5;
        color: #333;
    }

    .btn-cancel {
        background: transparent;
        color: #666;
        border: 2px solid #e0e0e0;
    }

    /* ============ NAME INPUT MODAL ============ */
    .quiz-modal-body input[type="text"] {
        width: 100%;
        padding: 15px 20px;
        border: 2px solid #e0e0e0;
        border-radius: 15px;
        font-size: 1.1em;
        font-family: inherit;
        transition: all 0.3s ease;
        outline: none;
    }

    .quiz-modal-body input[type="text"]:focus {
        border-color: #1a237e;
        box-shadow: 0 0 0 3px rgba(26, 35, 126, 0.1);
    }

    .input-hint {
        color: #888;
        font-size: 0.85em;
        margin-top: 10px;
    }

    /* ============ RESULT MODAL ============ */
    .result-header {
        text-align: center;
        padding: 30px;
        background: linear-gradient(135deg, #1a237e, #283593);
        color: white;
        border-radius: 25px 25px 0 0;
    }

    .result-emoji {
        font-size: 4em;
        margin-bottom: 10px;
    }

    .result-header h2 {
        font-size: 1.8em;
        margin: 0;
    }

    .result-body {
        padding: 30px;
    }

    .result-stats {
        display: flex;
        justify-content: center;
        gap: 20px;
        margin-bottom: 25px;
    }

    .stat-card {
        background: #f8f9fa;
        border-radius: 15px;
        padding: 20px 25px;
        text-align: center;
        min-width: 100px;
    }

    .stat-value {
        display: block;
        font-size: 2em;
        font-weight: bold;
        color: #1a237e;
    }

    .stat-label {
        color: #888;
        font-size: 0.9em;
    }

    .result-message {
        text-align: center;
        font-size: 1.1em;
        color: #555;
        margin-bottom: 25px;
    }

    .result-detail {
        margin-bottom: 25px;
    }

    .result-detail h3 {
        color: #1a237e;
        margin-bottom: 15px;
    }

    .answer-list {
        max-height: 300px;
        overflow-y: auto;
    }

    .answer-item {
        display: flex;
        align-items: center;
        gap: 15px;
        padding: 12px 15px;
        background: #f8f9fa;
        border-radius: 10px;
        margin-bottom: 10px;
        border-left: 4px solid transparent;
    }

    .answer-correct {
        border-left-color: #4caf50;
    }

    .answer-wrong {
        border-left-color: #f44336;
    }

    .answer-number {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background: #1a237e;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        font-size: 0.9em;
        flex-shrink: 0;
    }

    .answer-info {
        flex: 1;
    }

    .answer-question {
        font-weight: 600;
        color: #333;
        margin: 0 0 5px 0;
        font-size: 0.95em;
    }

    .answer-explanation {
        color: #666;
        margin: 0;
        font-size: 0.85em;
        line-height: 1.4;
    }

    .answer-status {
        font-size: 1.2em;
    }

    .result-leaderboard {
        margin-top: 25px;
    }

    .result-leaderboard h3 {
        color: #1a237e;
        margin-bottom: 15px;
    }

    .leaderboard-list {
        background: #f8f9fa;
        border-radius: 15px;
        padding: 15px;
    }

    .leaderboard-item {
        display: flex;
        align-items: center;
        gap: 15px;
        padding: 10px 15px;
        border-radius: 10px;
        margin-bottom: 8px;
        background: white;
        transition: all 0.3s ease;
    }

    .leaderboard-item:hover {
        transform: translateX(5px);
    }

    .leaderboard-item.top-three {
        background: linear-gradient(135deg, #fff8e1, #ffffff);
    }

    .leaderboard-item.current-user {
        background: #e3f2fd;
        border: 2px solid #1a237e;
    }

    .rank {
        font-size: 1.2em;
        width: 30px;
        text-align: center;
    }

    .player-name {
        flex: 1;
        font-weight: 600;
        color: #333;
    }

    .player-score {
        color: #1a237e;
        font-weight: 500;
    }

    .player-date {
        color: #888;
        font-size: 0.85em;
    }

    .no-data {
        text-align: center;
        color: #888;
        padding: 20px;
    }

    .result-footer {
        padding: 20px 30px;
        display: flex;
        justify-content: center;
        gap: 15px;
    }

    /* ============ RESPONSIVE ============ */
    @media (max-width: 600px) {
        .quiz-modal {
            margin: 10px;
            max-height: 95vh;
        }
        
        .quiz-modal-header, .quiz-modal-body, .quiz-modal-footer {
            padding: 15px 20px;
        }
        
        .result-stats {
            flex-direction: column;
            gap: 10px;
        }
        
        .stat-card {
            min-width: auto;
        }
        
        .answer-item {
            flex-wrap: wrap;
        }
    }
`;
document.head.appendChild(quizStyles);

// Export
window.QuizSystem = QuizSystem;
