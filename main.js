  // Sélectionner l'élément soleil
        const soleil = document.querySelector('.soleil_cercle');
        const body = document.body;
        const starsContainer = document.getElementById('stars');

 

        

        
        soleil.addEventListener('click', function() {
            body.classList.toggle('dark-mode');
        });




    let currentQuestionIndex = 0;
        const questions = document.querySelectorAll('.q1');
        const totalQuestions = questions.length;
        const backBtn = document.getElementById('backBtn');
        const nextBtn = document.getElementById('nextBtn');
        const currentQuestionSpan = document.getElementById('currentQuestion');
        const answers = {};

        function showQuestion(index) {
            questions.forEach(q => q.classList.remove('active'));
            questions[index].classList.add('active');
            currentQuestionSpan.textContent = index + 1;

            backBtn.disabled = index === 0;
            
            if (index === totalQuestions - 1) {
                nextBtn.textContent = 'Terminer';
            } else {
                nextBtn.textContent = 'Next';
            }
        }

        function isQuestionAnswered(index) {
            const questionName = `question${index + 1}`;
            const radios = document.querySelectorAll(`input[name="${questionName}"]`);
            return Array.from(radios).some(radio => radio.checked);
        }

        nextBtn.addEventListener('click', () => {
            if (!isQuestionAnswered(currentQuestionIndex)) {
                alert('Veuillez sélectionner une réponse avant de continuer.');
                return;
            }

            if (currentQuestionIndex < totalQuestions - 1) {
                currentQuestionIndex++;
                showQuestion(currentQuestionIndex);
            } else {
                alert('Quiz terminé ! Merci pour vos réponses.');
            }
        });

        backBtn.addEventListener('click', () => {
            if (currentQuestionIndex > 0) {
                currentQuestionIndex--;
                showQuestion(currentQuestionIndex);
            }
        });

        showQuestion(currentQuestionIndex);


const menuIcon = document.getElementById('menuIcon');
const menuList = document.getElementById('menuList'); 

menuIcon.addEventListener('click', function(e) {
    e.stopPropagation(); 
    menuList.classList.toggle('active');
});


document.addEventListener('click', function(e) {
    if (!e.target.closest('.menu-container') && !e.target.closest('.menu')) {
        menuList.classList.remove('active');
    }
});
        