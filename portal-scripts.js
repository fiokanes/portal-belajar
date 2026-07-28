/* ============================================
   PORTAL BELAJAR FIONA - Universal Scripts
   ============================================ */

// ============ BUBBLE ANIMATION ============
function createBubbles() {
    const container = document.querySelector('.bg-animation');
    if (!container) return;
    for (let i = 0; i < 15; i++) {
        const bubble = document.createElement('div');
        bubble.className = 'bubble';
        const size = Math.random() * 50 + 20;
        bubble.style.width = size + 'px';
        bubble.style.height = size + 'px';
        bubble.style.left = Math.random() * 100 + '%';
        bubble.style.bottom = '-100px';
        bubble.style.animationDelay = Math.random() * 10 + 's';
        bubble.style.animationDuration = (Math.random() * 10 + 10) + 's';
        container.appendChild(bubble);
    }
}

// ============ SCROLL TO TOP ============
function initScrollTop() {
    const scrollTopBtn = document.getElementById('scrollTop');
    if (!scrollTopBtn) return;
    window.addEventListener('scroll', function() {
        scrollTopBtn.classList.toggle('visible', window.scrollY > 500);
    });
}

// ============ INTERSECTION OBSERVER ============
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.bab-card, .info-card, .materi-item, .vocab-card, .content-section').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
}

// ============ COUNTER ANIMATION ============
function animateCounter(element, target) {
    let start = 0;
    const increment = target / 125;
    function update() {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start);
            requestAnimationFrame(update);
        } else {
            element.textContent = target;
        }
    }
    update();
}

function initCounterAnimation() {
    const statsBar = document.querySelector('.stats-bar');
    if (!statsBar) return;
    const statsObserver = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            document.querySelectorAll('.stat-number').forEach(stat => {
                const num = parseInt(stat.textContent);
                if (!isNaN(num)) {
                    stat.textContent = '0';
                    animateCounter(stat, num);
                }
            });
            statsObserver.disconnect();
        }
    });
    statsObserver.observe(statsBar);
}

// ============ QUIZ SYSTEM ============
class QuizSystem {
    constructor(questions, options = {}) {
        this.questions = questions;
        this.currentIndex = 0;
        this.score = 0;
        this.correctCount = 0;
        this.answered = false;
        this.totalQuestions = questions.length;
        this.scorePerQuestion = options.scorePerQuestion || 10;
        this.scoreId = options.scoreId || 'quizScore';
        this.countId = options.countId || 'quizCount';
        this.correctId = options.correctId || 'quizCorrect';
        this.questionId = options.questionId || 'quizQuestion';
        this.optionsId = options.optionsId || 'quizOptions';
        this.feedbackId = options.feedbackId || 'quizFeedback';
        this.nextBtnId = options.nextBtnId || 'nextBtn';
        this.modalId = options.modalId || 'quizModal';
        this.modalScoreId = options.modalScoreId || 'modalScore';
        this.modalMessageId = options.modalMessageId || 'modalMessage';
    }

    start() {
        this.currentIndex = 0;
        this.score = 0;
        this.correctCount = 0;
        this.updateDisplay();
        this.showQuestion();
    }

    showQuestion() {
        if (this.currentIndex >= this.totalQuestions) {
            this.end();
            return;
        }
        this.answered = false;
        const q = this.questions[this.currentIndex];
        const questionEl = document.getElementById(this.questionId);
        const optionsEl = document.getElementById(this.optionsId);
        const feedbackEl = document.getElementById(this.feedbackId);
        const nextBtn = document.getElementById(this.nextBtnId);

        if (questionEl) questionEl.innerHTML = `<div class="question-text">${q.question}</div>`;
        if (feedbackEl) feedbackEl.textContent = '';
        if (nextBtn) nextBtn.classList.add('hidden');

        const countEl = document.getElementById(this.countId);
        if (countEl) countEl.textContent = `${this.currentIndex + 1}/${this.totalQuestions}`;

        if (optionsEl) {
            optionsEl.innerHTML = q.options.map((opt, i) =>
                `<button class="quiz-option" onclick="quiz.checkAnswer(${i})">${opt}</button>`
            ).join('');
        }
    }

    checkAnswer(selected) {
        if (this.answered) return;
        this.answered = true;
        const q = this.questions[this.currentIndex];
        const options = document.querySelectorAll('.quiz-option');

        options.forEach((opt, i) => {
            opt.disabled = true;
            if (i === q.correct) opt.classList.add('correct');
            else if (i === selected) opt.classList.add('wrong');
        });

        const feedbackEl = document.getElementById(this.feedbackId);
        if (selected === q.correct) {
            this.score += this.scorePerQuestion;
            this.correctCount++;
            if (feedbackEl) feedbackEl.innerHTML = '<span style="color: #00e676;">✅ Benar! +' + this.scorePerQuestion + ' poin</span>';
        } else {
            if (feedbackEl) feedbackEl.innerHTML = `<span style="color: #ff5252;">❌ Salah! Jawaban: ${q.options[q.correct]}</span>`;
        }

        this.updateDisplay();
        const nextBtn = document.getElementById(this.nextBtnId);
        if (nextBtn) nextBtn.classList.remove('hidden');
    }

    next() {
        this.currentIndex++;
        this.showQuestion();
    }

    end() {
        const modal = document.getElementById(this.modalId);
        const modalScore = document.getElementById(this.modalScoreId);
        const modalMessage = document.getElementById(this.modalMessageId);

        if (modalScore) modalScore.textContent = this.score;
        if (modalMessage) {
            const maxScore = this.totalQuestions * this.scorePerQuestion;
            const percentage = (this.score / maxScore) * 100;
            if (percentage === 100) modalMessage.textContent = '🏆 SEMPURNA! Kamu hebat!';
            else if (percentage >= 70) modalMessage.textContent = '👏 Bagus! Terus belajar!';
            else if (percentage >= 50) modalMessage.textContent = '💪 Cukup bagus!';
            else modalMessage.textContent = '📚 Ayo belajar lagi!';
        }
        if (modal) modal.classList.remove('hidden');
    }

    restart() {
        const modal = document.getElementById(this.modalId);
        if (modal) modal.classList.add('hidden');
        this.start();
    }

    updateDisplay() {
        const scoreEl = document.getElementById(this.scoreId);
        const correctEl = document.getElementById(this.correctId);
        if (scoreEl) scoreEl.textContent = this.score;
        if (correctEl) correctEl.textContent = this.correctCount;
    }
}

// ============ SECTION NAVIGATION ============
function scrollToSection(id) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    document.querySelectorAll('.nav-tab').forEach(btn => btn.classList.remove('active'));
    if (event && event.target) event.target.classList.add('active');
}

// ============ INITIALIZE ============
document.addEventListener('DOMContentLoaded', function() {
    createBubbles();
    initScrollTop();
    initScrollAnimations();
    initCounterAnimation();
});
