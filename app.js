// Quiz Application Logic
class QuizApp {
    constructor() {
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.playerName = '';
        this.userAnswers = [];
        this.questions = this.shuffleArray([...quizData]);

        this.initializeElements();
        this.attachEventListeners();
        this.loadLeaderboard();
        this.loadTopScorer();
        this.displayTopScores();
    }

    initializeElements() {
        // Screens
        this.welcomeScreen = document.getElementById('welcomeScreen');
        this.quizScreen = document.getElementById('quizScreen');
        this.resultsScreen = document.getElementById('resultsScreen');
        this.leaderboardScreen = document.getElementById('leaderboardScreen');

        // Welcome screen elements
        this.playerNameInput = document.getElementById('playerName');
        this.startQuizBtn = document.getElementById('startQuizBtn');
        this.topScoresList = document.getElementById('topScoresList');

        // Top scorer showcase elements
        this.topScorerName = document.getElementById('topScorerName');
        this.topScorerScore = document.getElementById('topScorerScore');
        this.topScorerPercentage = document.getElementById('topScorerPercentage');
        this.topScorerDate = document.getElementById('topScorerDate');
        this.championBadge = document.getElementById('championBadge');

        // Quiz screen elements
        this.currentQuestionEl = document.getElementById('currentQuestion');
        this.totalQuestionsEl = document.getElementById('totalQuestions');
        this.currentScoreEl = document.getElementById('currentScore');
        this.progressBar = document.getElementById('progressBar');
        this.topicBadge = document.getElementById('topicBadge');
        this.questionText = document.getElementById('questionText');
        this.optionsContainer = document.getElementById('optionsContainer');
        this.feedbackContainer = document.getElementById('feedbackContainer');
        this.nextBtn = document.getElementById('nextBtn');

        // Results screen elements
        this.resultEmoji = document.getElementById('resultEmoji');
        this.playerNameDisplay = document.getElementById('playerNameDisplay');
        this.finalScore = document.getElementById('finalScore');
        this.scorePercentage = document.getElementById('scorePercentage');
        this.scoreMessage = document.getElementById('scoreMessage');
        this.correctCount = document.getElementById('correctCount');
        this.incorrectCount = document.getElementById('incorrectCount');
        this.accuracyRate = document.getElementById('accuracyRate');
        this.restartBtn = document.getElementById('restartBtn');
        this.viewLeaderboardBtn = document.getElementById('viewLeaderboardBtn');

        // Leaderboard screen elements
        this.leaderboardList = document.getElementById('leaderboardList');
        this.backToResultsBtn = document.getElementById('backToResultsBtn');

        this.totalQuestionsEl.textContent = this.questions.length;
    }

    attachEventListeners() {
        this.startQuizBtn.addEventListener('click', () => this.startQuiz());
        this.playerNameInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.startQuiz();
        });
        this.nextBtn.addEventListener('click', () => this.nextQuestion());
        this.restartBtn.addEventListener('click', () => this.restartQuiz());
        this.viewLeaderboardBtn.addEventListener('click', () => this.showLeaderboard());
        this.backToResultsBtn.addEventListener('click', () => this.showResults());
    }

    shuffleArray(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }

    startQuiz() {
        this.playerName = this.playerNameInput.value.trim();

        if (!this.playerName) {
            this.playerNameInput.classList.add('wrong-answer');
            this.playerNameInput.focus();
            setTimeout(() => {
                this.playerNameInput.classList.remove('wrong-answer');
            }, 500);
            return;
        }

        this.welcomeScreen.classList.add('hidden');
        this.quizScreen.classList.remove('hidden');
        this.displayQuestion();
    }

    displayQuestion() {
        const question = this.questions[this.currentQuestionIndex];

        // Update progress
        this.currentQuestionEl.textContent = this.currentQuestionIndex + 1;
        this.currentScoreEl.textContent = this.score;
        const progress = ((this.currentQuestionIndex + 1) / this.questions.length) * 100;
        this.progressBar.style.width = `${progress}%`;

        // Update question content
        this.topicBadge.textContent = question.topic;
        this.questionText.textContent = question.question;

        // Clear previous options and feedback
        this.optionsContainer.innerHTML = '';
        this.feedbackContainer.classList.add('hidden');
        this.nextBtn.classList.add('hidden');

        // Create option buttons
        question.options.forEach((option, index) => {
            const optionBtn = document.createElement('button');
            optionBtn.className = 'option-btn w-full text-left px-6 py-4 bg-space-gray/50 hover:bg-space-gray border-2 border-white/10 hover:border-cosmic-purple/50 rounded-xl transition-all duration-300 text-lg font-medium';
            optionBtn.innerHTML = `
                <span class="inline-block w-8 h-8 rounded-full bg-cosmic-purple/20 text-cosmic-purple text-center leading-8 mr-3 font-bold">
                    ${String.fromCharCode(65 + index)}
                </span>
                ${option}
            `;
            optionBtn.addEventListener('click', () => this.selectAnswer(option, optionBtn));
            this.optionsContainer.appendChild(optionBtn);
        });

        // Add fade-in animation
        this.optionsContainer.classList.add('fade-in');
    }

    selectAnswer(selectedOption, selectedBtn) {
        const question = this.questions[this.currentQuestionIndex];
        const isCorrect = selectedOption === question.answer;

        // Disable all option buttons
        const allOptions = this.optionsContainer.querySelectorAll('.option-btn');
        allOptions.forEach(btn => {
            btn.disabled = true;
            btn.classList.remove('hover:bg-space-gray', 'hover:border-cosmic-purple/50');
        });

        // Store user answer
        this.userAnswers.push({
            question: question.question,
            userAnswer: selectedOption,
            correctAnswer: question.answer,
            isCorrect: isCorrect
        });

        // Update score
        if (isCorrect) {
            this.score++;
            this.currentScoreEl.textContent = this.score;
        }

        // Highlight correct and wrong answers
        allOptions.forEach(btn => {
            const optionText = btn.textContent.trim().substring(1).trim();
            if (optionText === question.answer) {
                btn.classList.add('correct-answer', 'border-green-500', 'bg-green-500/20');
                btn.innerHTML = `
                    <span class="inline-block w-8 h-8 rounded-full bg-green-500 text-white text-center leading-8 mr-3 font-bold">
                        ✓
                    </span>
                    ${optionText}
                `;
            } else if (btn === selectedBtn && !isCorrect) {
                btn.classList.add('wrong-answer', 'border-red-500', 'bg-red-500/20');
                btn.innerHTML = `
                    <span class="inline-block w-8 h-8 rounded-full bg-red-500 text-white text-center leading-8 mr-3 font-bold">
                        ✗
                    </span>
                    ${optionText}
                `;
            }
        });

        // Show feedback
        this.showFeedback(isCorrect);

        // Show next button
        this.nextBtn.classList.remove('hidden');
    }

    showFeedback(isCorrect) {
        this.feedbackContainer.classList.remove('hidden');

        if (isCorrect) {
            this.feedbackContainer.className = 'mt-8 p-6 rounded-xl bg-green-500/10 border-2 border-green-500/50 fade-in';
            this.feedbackContainer.innerHTML = `
                <div class="flex items-center">
                    <span class="text-4xl mr-4">🎉</span>
                    <div>
                        <h3 class="text-xl font-bold text-green-400 mb-1">Correct!</h3>
                        <p class="text-gray-300">Great job! You got it right.</p>
                    </div>
                </div>
            `;
        } else {
            const question = this.questions[this.currentQuestionIndex];
            this.feedbackContainer.className = 'mt-8 p-6 rounded-xl bg-red-500/10 border-2 border-red-500/50 fade-in';
            this.feedbackContainer.innerHTML = `
                <div class="flex items-center">
                    <span class="text-4xl mr-4">💡</span>
                    <div>
                        <h3 class="text-xl font-bold text-red-400 mb-1">Incorrect</h3>
                        <p class="text-gray-300">The correct answer is: <span class="font-bold text-green-400">${question.answer}</span></p>
                    </div>
                </div>
            `;
        }
    }

    nextQuestion() {
        this.currentQuestionIndex++;

        if (this.currentQuestionIndex < this.questions.length) {
            this.displayQuestion();
        } else {
            this.showResults();
        }
    }

    showResults() {
        this.quizScreen.classList.add('hidden');
        this.leaderboardScreen.classList.add('hidden');
        this.resultsScreen.classList.remove('hidden');

        // Calculate statistics
        const percentage = Math.round((this.score / this.questions.length) * 100);
        const correctAnswers = this.score;
        const incorrectAnswers = this.questions.length - this.score;

        // Update result elements
        this.playerNameDisplay.textContent = this.playerName;
        this.finalScore.textContent = this.score;
        this.scorePercentage.textContent = `${percentage}%`;
        this.correctCount.textContent = correctAnswers;
        this.incorrectCount.textContent = incorrectAnswers;
        this.accuracyRate.textContent = `${percentage}%`;

        // Set emoji and message based on score
        if (percentage >= 90) {
            this.resultEmoji.textContent = '🏆';
            this.scoreMessage.textContent = 'Outstanding! You\'re a TypeScript & Angular master!';
            this.createConfetti();
        } else if (percentage >= 75) {
            this.resultEmoji.textContent = '🌟';
            this.scoreMessage.textContent = 'Excellent work! You know your stuff!';
        } else if (percentage >= 60) {
            this.resultEmoji.textContent = '👍';
            this.scoreMessage.textContent = 'Good job! Keep learning and improving!';
        } else if (percentage >= 40) {
            this.resultEmoji.textContent = '📚';
            this.scoreMessage.textContent = 'Not bad! There\'s room for improvement.';
        } else {
            this.resultEmoji.textContent = '💪';
            this.scoreMessage.textContent = 'Keep practicing! You\'ll get better!';
        }

        // Save to leaderboard
        this.saveToLeaderboard();
    }

    createConfetti() {
        const colors = ['#8B5CF6', '#EC4899', '#3B82F6', '#14B8A6', '#F97316'];
        for (let i = 0; i < 50; i++) {
            setTimeout(() => {
                const confetti = document.createElement('div');
                confetti.className = 'confetti';
                confetti.style.left = Math.random() * 100 + 'vw';
                confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
                confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
                document.body.appendChild(confetti);

                setTimeout(() => confetti.remove(), 5000);
            }, i * 30);
        }
    }

    saveToLeaderboard() {
        const leaderboard = this.getLeaderboard();

        const entry = {
            name: this.playerName,
            score: this.score,
            percentage: Math.round((this.score / this.questions.length) * 100),
            date: new Date().toISOString(),
            totalQuestions: this.questions.length
        };

        leaderboard.push(entry);
        leaderboard.sort((a, b) => b.score - a.score);

        localStorage.setItem('quizLeaderboard', JSON.stringify(leaderboard));
    }

    getLeaderboard() {
        const data = localStorage.getItem('quizLeaderboard');
        return data ? JSON.parse(data) : [];
    }

    loadLeaderboard() {
        // This method is called on initialization
        this.leaderboard = this.getLeaderboard();
    }

    async loadTopScorer() {
        try {
            // Try to load from db.json first
            const response = await fetch('db.json');
            if (response.ok) {
                const data = await response.json();
                if (data.topScorers && data.topScorers.length > 0) {
                    this.displayTopScorer(data.topScorers[0]);
                    return;
                }
            }
        } catch (error) {
            console.log('Could not load db.json, using localStorage');
        }

        // Fallback to localStorage
        const leaderboard = this.getLeaderboard();
        if (leaderboard.length > 0) {
            const topScorer = leaderboard[0];
            this.displayTopScorer({
                name: topScorer.name,
                score: topScorer.score,
                totalQuestions: topScorer.totalQuestions || 60,
                percentage: topScorer.percentage,
                date: topScorer.date,
                badge: this.getBadge(topScorer.percentage)
            });
        } else {
            // Show default/demo data
            this.displayTopScorer({
                name: 'Be the first!',
                score: 0,
                totalQuestions: 60,
                percentage: 0,
                date: new Date().toISOString(),
                badge: 'ROOKIE'
            });
        }
    }

    getBadge(percentage) {
        if (percentage >= 95) return 'LEGEND';
        if (percentage >= 90) return 'MASTER';
        if (percentage >= 80) return 'EXPERT';
        if (percentage >= 70) return 'PRO';
        if (percentage >= 60) return 'ADVANCED';
        return 'ROOKIE';
    }

    displayTopScorer(scorer) {
        if (!this.topScorerName) return;

        this.topScorerName.textContent = scorer.name;
        this.topScorerScore.textContent = scorer.score;
        this.topScorerPercentage.textContent = `${scorer.percentage}%`;

        const date = new Date(scorer.date);
        this.topScorerDate.innerHTML = `
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg>
            ${date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
        `;

        this.championBadge.textContent = scorer.badge || this.getBadge(scorer.percentage);

        // Update badge color based on level
        const badgeColors = {
            'LEGEND': 'bg-yellow-500/30 border-yellow-500 text-yellow-400',
            'MASTER': 'bg-cosmic-orange/30 border-cosmic-orange text-cosmic-orange',
            'EXPERT': 'bg-purple-500/30 border-purple-500 text-purple-400',
            'PRO': 'bg-blue-500/30 border-blue-500 text-blue-400',
            'ADVANCED': 'bg-green-500/30 border-green-500 text-green-400',
            'ROOKIE': 'bg-gray-500/30 border-gray-500 text-gray-400'
        };

        const badge = scorer.badge || this.getBadge(scorer.percentage);
        this.championBadge.className = `px-3 py-1 rounded-full text-xs font-bold ${badgeColors[badge] || badgeColors['ROOKIE']}`;
    }

    displayTopScores() {
        const topScores = this.getLeaderboard().slice(0, 5);

        if (topScores.length === 0) {
            this.topScoresList.innerHTML = '<p class="text-center text-gray-500">No scores yet. Be the first!</p>';
            return;
        }

        this.topScoresList.innerHTML = topScores.map((entry, index) => {
            const medal = index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : '🎯';
            return `
                <div class="flex items-center justify-between p-3 bg-space-gray/30 rounded-lg hover:bg-space-gray/50 transition-all">
                    <div class="flex items-center gap-3">
                        <span class="text-2xl">${medal}</span>
                        <div>
                            <p class="font-semibold text-white">${entry.name}</p>
                            <p class="text-xs text-gray-400">${new Date(entry.date).toLocaleDateString()}</p>
                        </div>
                    </div>
                    <div class="text-right">
                        <p class="font-bold text-cosmic-teal">${entry.score}/${entry.totalQuestions}</p>
                        <p class="text-xs text-gray-400">${entry.percentage}%</p>
                    </div>
                </div>
            `;
        }).join('');
    }

    showLeaderboard() {
        this.resultsScreen.classList.add('hidden');
        this.leaderboardScreen.classList.remove('hidden');

        const leaderboard = this.getLeaderboard();

        if (leaderboard.length === 0) {
            this.leaderboardList.innerHTML = '<p class="text-center text-gray-400 text-lg">No entries yet. Be the first to take the quiz!</p>';
            return;
        }

        this.leaderboardList.innerHTML = leaderboard.map((entry, index) => {
            let medalClass = '';
            let medal = '';

            if (index === 0) {
                medal = '🥇';
                medalClass = 'medal-gold';
            } else if (index === 1) {
                medal = '🥈';
                medalClass = 'medal-silver';
            } else if (index === 2) {
                medal = '🥉';
                medalClass = 'medal-bronze';
            } else {
                medal = `#${index + 1}`;
            }

            return `
                <div class="flex items-center justify-between p-6 bg-space-gray/50 rounded-xl border border-white/10 hover:border-cosmic-purple/50 transition-all hover-lift">
                    <div class="flex items-center gap-4">
                        <span class="text-3xl font-bold ${medalClass} min-w-[3rem] text-center">${medal}</span>
                        <div>
                            <p class="font-bold text-xl text-white">${entry.name}</p>
                            <p class="text-sm text-gray-400">${new Date(entry.date).toLocaleString()}</p>
                        </div>
                    </div>
                    <div class="text-right">
                        <p class="text-3xl font-bold bg-gradient-to-r from-cosmic-purple to-cosmic-pink bg-clip-text text-transparent">
                            ${entry.score}/${entry.totalQuestions}
                        </p>
                        <p class="text-lg font-semibold text-cosmic-teal">${entry.percentage}%</p>
                    </div>
                </div>
            `;
        }).join('');
    }

    restartQuiz() {
        // Reset quiz state
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.userAnswers = [];
        this.questions = this.shuffleArray([...quizData]);

        // Reset UI
        this.resultsScreen.classList.add('hidden');
        this.welcomeScreen.classList.remove('hidden');
        this.playerNameInput.value = '';
        this.loadTopScorer();
        this.displayTopScores();
    }
}

// Initialize the quiz app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new QuizApp();
});
