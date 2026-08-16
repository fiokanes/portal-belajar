/**
 * ==========================================
 * MESIN QUIZ & GAME INTERAKTIF v2.0
 * Bank soal kini SATU SUMBER: quiz-data.js (QUIZ_DATA)
 * File ini adalah mesin kuis + adaptor format:
 * QUIZ_DATA {question, options, correct} -> quizDatabase {question, options, answer}
 * ==========================================
 */

// ============ BANK SOAL (dibangun otomatis dari QUIZ_DATA) ============
const quizDatabase = {};
if (typeof QUIZ_DATA !== 'undefined') {
    Object.keys(QUIZ_DATA).forEach(mapel => {
        const data = QUIZ_DATA[mapel];
        quizDatabase[mapel] = [];
        // Format 1: { bab: { title, questions: [...] } }  (struktur v2)
        if (data && !Array.isArray(data)) {
            Object.values(data).forEach(bab => {
                if (bab && Array.isArray(bab.questions)) {
                    bab.questions.forEach(q => {
                        quizDatabase[mapel].push({
                            question: q.question,
                            options: q.options,
                            answer: q.correct
                        });
                    });
                }
            });
        }
        // Format 2: array langsung [{ question, options, correct }]
        else if (Array.isArray(data)) {
            data.forEach(q => {
                quizDatabase[mapel].push({
                    question: q.question,
                    options: q.options,
                    answer: q.correct
                });
            });
        }
    });
} else {
    console.warn('[quiz-game-system] quiz-data.js belum dimuat. Kuis tidak akan muncul.');
}


// Fungsi untuk mengacak array
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Fungsi untuk membuat kuis dengan soal acak
function createQuiz(mapel, containerId, numQuestions = 5) {
    const container = document.getElementById(containerId);
    if (!container || !quizDatabase[mapel]) return;

    const shuffledQuestions = shuffleArray(quizDatabase[mapel]);
    const selectedQuestions = shuffledQuestions.slice(0, numQuestions);

    let quizHTML = '';
    selectedQuestions.forEach((q, index) => {
        quizHTML += `
            <div class="quiz-question" data-question="${index}">
                <p>${index + 1}. ${q.question}</p>
                <div class="quiz-options">
                    ${q.options.map((opt, optIndex) => `
                        <label class="quiz-option">
                            <input type="radio" name="q${index}" value="${optIndex}">
                            <span>${opt}</span>
                        </label>
                    `).join('')}
                </div>
            </div>
        `;
    });

    quizHTML += `
        <button class="quiz-btn" onclick="checkQuiz('${mapel}', ${numQuestions})">🎯 Periksa Jawaban</button>
        <div id="quizResult" class="quiz-result"></div>
    `;

    container.innerHTML = quizHTML;
    window[`answers_${mapel}`] = selectedQuestions.map(q => q.answer);
}

// Fungsi untuk memeriksa jawaban kuis
function checkQuiz(mapel, numQuestions) {
    const answers = window[`answers_${mapel}`];
    if (!answers) return;

    let score = 0;
    let feedback = [];

    for (let i = 0; i < numQuestions; i++) {
        const selected = document.querySelector(`input[name="q${i}"]:checked`);
        if (selected) {
            if (parseInt(selected.value) === answers[i]) {
                score++;
                feedback.push(`Soal ${i + 1}: ✅ Benar!`);
            } else {
                feedback.push(`Soal ${i + 1}: ❌ Salah`);
            }
        } else {
            feedback.push(`Soal ${i + 1}: ⚠️ Belum dijawab`);
        }
    }

    const resultElement = document.getElementById('quizResult');
    const percentage = (score / numQuestions) * 100;

    resultElement.style.display = 'block';
    resultElement.className = 'quiz-result show';

    if (score === numQuestions) {
        resultElement.classList.add('excellent');
        resultElement.innerHTML = `
            <h3>🎉 SELAMAT! Jawabanmu Sempurna! 🎉</h3>
            <p style="font-size: 1.5em; margin: 15px 0;">Skor: ${score}/${numQuestions} (${percentage}%)</p>
            <p>Kamu sudah sangat memahami materi ini! 🏆</p>
            <button class="quiz-btn" onclick="restartQuiz('${mapel}', ${numQuestions})" style="background: #4caf50; margin-top: 15px;">🔄 Coba Lagi dengan Soal Baru</button>
        `;
        if (window.ClickSounds) ClickSounds.play('success');
    } else if (percentage >= 60) {
        resultElement.classList.add('good');
        resultElement.innerHTML = `
            <h3>👍 Bagus! Terus Belajar!</h3>
            <p style="font-size: 1.5em; margin: 15px 0;">Skor: ${score}/${numQuestions} (${percentage}%)</p>
            <p>${feedback.join('<br>')}</p>
            <button class="quiz-btn" onclick="restartQuiz('${mapel}', ${numQuestions})" style="background: #ff9800; margin-top: 15px;">🔄 Coba Lagi dengan Soal Baru</button>
        `;
    } else {
        resultElement.classList.add('try-again');
        resultElement.innerHTML = `
            <h3>📖 Ayo Belajar Lagi!</h3>
            <p style="font-size: 1.5em; margin: 15px 0;">Skor: ${score}/${numQuestions} (${percentage}%)</p>
            <p>${feedback.join('<br>')}</p>
            <button class="quiz-btn" onclick="restartQuiz('${mapel}', ${numQuestions})" style="background: #f44336; margin-top: 15px;">🔄 Coba Lagi dengan Soal Baru</button>
        `;
        if (window.ClickSounds) ClickSounds.play('error');
    }

    // 🎁 Hadiah XP (ProgressSystem)
    if (typeof ProgressSystem !== 'undefined') {
        const gained = ProgressSystem.quizFinished(score, numQuestions, true);
        resultElement.innerHTML += `<p class="xp-reward">⭐ +${gained} XP! Klik XP di atas untuk melihat progresmu.</p>`;
        try { document.dispatchEvent(new CustomEvent('pb-xp-updated')); } catch (e) {}
    }

    resultElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// Fungsi restart kuis
function restartQuiz(mapel, numQuestions) {
    createQuiz(mapel, 'quizContainer', numQuestions);
    document.getElementById('quizResult').style.display = 'none';
    if (window.ClickSounds) ClickSounds.play('whoosh');
}

// Game: Kuis Cepat dengan Timer
function createQuickQuiz(containerId, questions, timePerQuestion = 10) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const shuffledQuestions = shuffleArray(questions);
    let currentQuestion = 0;
    let score = 0;
    let timer;
    let timeLeft;

    function showQuestion() {
        if (currentQuestion >= shuffledQuestions.length) {
            clearInterval(timer);
            container.innerHTML = `
                <div class="game-complete">
                    <h3>🎉 Kuis Selesai!</h3>
                    <p style="font-size: 1.5em;">Skor akhir: ${score}/${shuffledQuestions.length}</p>
                    <p>${score === shuffledQuestions.length ? 'Sempurna! 🏆' : score >= shuffledQuestions.length/2 ? 'Bagus! 👍' : 'Terus belajar! 📚'}</p>
                    <button class="quiz-btn" onclick="createQuickQuiz('${containerId}', Object.values(quizDatabase).flat(), ${timePerQuestion})">🔄 Main Lagi</button>
                </div>
            `;
            return;
        }

        const q = shuffledQuestions[currentQuestion];
        timeLeft = timePerQuestion;

        container.innerHTML = `
            <div class="game-content">
                <h3>⚡ Kuis Cepat</h3>
                <p class="game-score">Skor: ${score} | Soal: ${currentQuestion + 1}/${shuffledQuestions.length}</p>
                <div class="timer" id="timer">⏱️ ${timeLeft}</div>
                <p class="game-question">${q.question}</p>
                <div class="game-options">
                    ${q.options.map((opt, index) => `
                        <button class="game-option-btn" onclick="selectQuickAnswer(${index})">${opt}</button>
                    `).join('')}
                </div>
            </div>
        `;

        clearInterval(timer);
        timer = setInterval(() => {
            timeLeft--;
            const timerEl = document.getElementById('timer');
            if (timerEl) timerEl.textContent = `⏱️ ${timeLeft}`;
            if (timeLeft <= 0) {
                clearInterval(timer);
                if (window.ClickSounds) ClickSounds.play('error');
                alert(`⏰ Waktu habis! Jawaban: ${q.options[q.answer]}`);
                currentQuestion++;
                showQuestion();
            }
        }, 1000);
    }

    window.selectQuickAnswer = function(index) {
        clearInterval(timer);
        const q = shuffledQuestions[currentQuestion];

        if (index === q.answer) {
            score++;
            if (window.ClickSounds) ClickSounds.play('success');
            alert('✅ Benar!');
        } else {
            if (window.ClickSounds) ClickSounds.play('error');
            alert(`❌ Salah! Jawaban: ${q.options[q.answer]}`);
        }

        currentQuestion++;
        showQuestion();
    };

    showQuestion();
}

// Game: Tebak Kata
function createWordGame(containerId, words) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const shuffledWords = shuffleArray(words);
    let currentWord = 0;
    let score = 0;

    function showWord() {
        if (currentWord >= shuffledWords.length) {
            container.innerHTML = `
                <div class="game-complete">
                    <h3>🎉 Permainan Selesai!</h3>
                    <p style="font-size: 1.5em;">Skor akhir: ${score}/${shuffledWords.length}</p>
                    <button class="quiz-btn" onclick="createWordGame('${containerId}', ${JSON.stringify(words)})">🔄 Main Lagi</button>
                </div>
            `;
            return;
        }

        const word = shuffledWords[currentWord];
        const scrambled = shuffleArray(word.split('')).join('');

        container.innerHTML = `
            <div class="game-content">
                <h3>🔤 Tebak Kata</h3>
                <p class="game-score">Skor: ${score}/${currentWord}</p>
                <div class="scrambled-word">${scrambled}</div>
                <input type="text" class="game-input" id="gameInput" placeholder="Tulis jawaban..." onkeypress="if(event.key==='Enter')checkWord()">
                <button class="quiz-btn" onclick="checkWord()">✅ Cek Jawaban</button>
                <p class="game-hint">Petunjuk: ${word.length} huruf</p>
            </div>
        `;

        document.getElementById('gameInput').focus();
    }

    window.checkWord = function() {
        const input = document.getElementById('gameInput').value.trim().toLowerCase();
        const correct = shuffledWords[currentWord].toLowerCase();

        if (input === correct) {
            score++;
            if (window.ClickSounds) ClickSounds.play('success');
            alert('✅ Benar!');
        } else {
            if (window.ClickSounds) ClickSounds.play('error');
            alert(`❌ Salah! Jawaban: ${shuffledWords[currentWord]}`);
        }

        currentWord++;
        showWord();
    };

    showWord();
}

// Game: Match the Pair (Mencocokkan)
function createMatchGame(containerId, pairs) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const shuffledLeft = shuffleArray(pairs.map(p => p[0]));
    const shuffledRight = shuffleArray(pairs.map(p => p[1]));
    let selectedLeft = null;
    let matchedPairs = 0;

    container.innerHTML = `
        <div class="game-content">
            <h3>🔗 Cocokkan Pasangan</h3>
            <p class="game-score">Pasangan cocok: ${matchedPairs}/${pairs.length}</p>
            <div class="match-grid">
                <div class="match-column">
                    <h4>Kolom A</h4>
                    ${shuffledLeft.map((item, i) => `
                        <button class="match-item" data-side="left" data-index="${i}" onclick="selectMatchItem(this, 'left', ${i})">${item}</button>
                    `).join('')}
                </div>
                <div class="match-column">
                    <h4>Kolom B</h4>
                    ${shuffledRight.map((item, i) => `
                        <button class="match-item" data-side="right" data-index="${i}" onclick="selectMatchItem(this, 'right', ${i})">${item}</button>
                    `).join('')}
                </div>
            </div>
        </div>
    `;

    window.selectMatchItem = function(el, side, index) {
        if (el.classList.contains('matched')) return;
        
        document.querySelectorAll(`.match-item[data-side="${side}"]`).forEach(item => {
            item.classList.remove('selected');
        });
        el.classList.add('selected');

        if (side === 'left') {
            selectedLeft = index;
        } else if (selectedLeft !== null) {
            // Check if match is correct
            const leftItem = shuffledLeft[selectedLeft];
            const rightItem = shuffledRight[index];
            
            const isCorrect = pairs.some(p => p[0] === leftItem && p[1] === rightItem);
            
            if (isCorrect) {
                matchedPairs++;
                document.querySelector(`.match-item[data-side="left"][data-index="${selectedLeft}"]`).classList.add('matched');
                el.classList.add('matched');
                if (window.ClickSounds) ClickSounds.play('success');
                
                if (matchedPairs === pairs.length) {
                    setTimeout(() => {
                        container.innerHTML = `
                            <div class="game-complete">
                                <h3>🎉 Semua Pasangan Cocok!</h3>
                                <p style="font-size: 1.5em;">Kamu berhasil!</p>
                                <button class="quiz-btn" onclick="createMatchGame('${containerId}', ${JSON.stringify(pairs)})">🔄 Main Lagi</button>
                            </div>
                        `;
                    }, 500);
                }
            } else {
                if (window.ClickSounds) ClickSounds.play('error');
                alert('❌ Pasangan tidak cocok!');
            }
            
            selectedLeft = null;
            document.querySelectorAll('.match-item').forEach(item => {
                if (!item.classList.contains('matched')) {
                    item.classList.remove('selected');
                }
            });
        }
    };
}

// Export functions
window.QuizSystem = {
    createQuiz,
    checkQuiz,
    restartQuiz,
    createQuickQuiz,
    createWordGame,
    createMatchGame,
    shuffleArray,
    quizDatabase
};