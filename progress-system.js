/**
 * ==========================================
 * PROGRESS SYSTEM v1.0 — Portal Belajar Fiona
 * XP, Level, Progres Belajar, Lanjut Belajar
 * Disimpan di localStorage (per browser)
 * ==========================================
 */

const ProgressSystem = (function() {
    // ============ KEY STORAGE ============
    const KEY_XP = 'pb_xp';
    const KEY_PROGRESS = 'pb_progress';
    const KEY_LAST = 'pb_last_visit';
    const XP_PER_LEVEL = 50;
    const XP_QUIZ = 10;        // selesai kuis
    const XP_QUIZ_PERFECT = 5; // bonus nilai sempurna
    const XP_BAB_DONE = 20;    // tandai bab selesai

    // ============ UTIL STORAGE (aman walau localStorage mati) ============
    function read(key, fallback) {
        try {
            const raw = localStorage.getItem(key);
            return raw === null ? fallback : JSON.parse(raw);
        } catch (e) { return fallback; }
    }
    function write(key, value) {
        try { localStorage.setItem(key, JSON.stringify(value)); return true; }
        catch (e) { return false; }
    }

    // ============ XP & LEVEL ============
    function getXP() { return read(KEY_XP, 0); }
    function addXP(n) {
        const newXP = getXP() + n;
        write(KEY_XP, newXP);
        return newXP;
    }
    function getLevel() { return Math.floor(getXP() / XP_PER_LEVEL) + 1; }
    function getLevelProgress() { return getXP() % XP_PER_LEVEL; } // XP menuju level berikutnya

    // ============ PROGRES BAB ============
    // Struktur: { mapel: { babId: { done: bool, best: number } } }
    function getProgress() { return read(KEY_PROGRESS, {}); }
    function markBabDone(mapel, babId, bestScore) {
        const p = getProgress();
        if (!p[mapel]) p[mapel] = {};
        const prev = p[mapel][babId] || { done: false, best: 0 };
        const isNew = !prev.done;
        p[mapel][babId] = {
            done: true,
            best: Math.max(prev.best, bestScore || 0)
        };
        write(KEY_PROGRESS, p);
        if (isNew) addXP(XP_BAB_DONE); // XP hanya sekali per bab
        return { isNew, xp: isNew ? XP_BAB_DONE : 0 };
    }
    function isBabDone(mapel, babId) {
        const p = getProgress();
        return !!(p[mapel] && p[mapel][babId] && p[mapel][babId].done);
    }
    function getBabBest(mapel, babId) {
        const p = getProgress();
        return (p[mapel] && p[mapel][babId] && p[mapel][babId].best) || 0;
    }
    function countDone() {
        const p = getProgress();
        let n = 0;
        Object.values(p).forEach(m => Object.values(m).forEach(b => { if (b.done) n++; }));
        return n;
    }

    // ============ LANJUT BELAJAR ============
    function setLastVisit(mapel, babId, href, label) {
        write(KEY_LAST, { mapel, babId, href, label, time: Date.now() });
    }
    function getLastVisit() { return read(KEY_LAST, null); }

    // ============ KUIS (dipanggil sistem quiz) ============
    function quizFinished(score, total, perfectBonus) {
        let gained = XP_QUIZ;
        if (perfectBonus && score === total) gained += XP_QUIZ_PERFECT;
        addXP(gained);
        return gained;
    }

    return {
        XP_PER_LEVEL, XP_QUIZ, XP_QUIZ_PERFECT, XP_BAB_DONE,
        getXP, addXP, getLevel, getLevelProgress,
        getProgress, markBabDone, isBabDone, getBabBest, countDone,
        setLastVisit, getLastVisit,
        quizFinished
    };
})();
