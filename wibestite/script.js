// Плавная прокрутка для навигации
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Анимация появления карточек рецептов
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.recipe-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(50px)';
    card.style.transition = 'all 0.5s ease-out';
    observer.observe(card);
});

// Модальное окно для рецептов
const recipes = [
    {
        id: 1,
        name: "Салат Оливье",
        image: "images/olivier.jpg",
        description: "Традиционный новогодний салат Оливье",
        category: "Салаты"
    },
    {
        id: 2,
        name: "Новогодние капкейки",
        image: "images/cake.jpg",
        description: "Нежные капкейки с праздничным декором",
        category: "Десерты"
    },
    {
        id: 3,
        name: "Винегрет",
        image: "images/vinegret.jpg",
        description: "Классический винегрет с зеленым горошком",
        category: "Салаты"
    },
    {
        id: 4,
        name: "Крабовый салат",
        image: "images/crab.jpg",
        description: "Любимый всеми крабовый салат с кукурузой",
        category: "Салаты"
    },
    {
        id: 5,
        name: "Утка с яблоками",
        image: "images/duck.jpg",
        description: "Сочная утка с яблоками и апельсинами",
        category: "Горячие блюда"
    },
    {
        id: 6,
        name: "Говядина по-строгановски",
        image: "images/beef.jpg",
        description: "Нежная говядина в сливочном соусе",
        category: "Горячие блюда"
    },
    {
        id: 7,
        name: "Селедка под шубой",
        image: "images/shuba.jpg",
        description: "Традиционная селедка под шубой",
        category: "Салаты"
    },
    {
        id: 8,
        name: "Запеченная рыба",
        image: "images/fish.jpg",
        description: "Рыба, запеченная с овощами",
        category: "Горячие блюда"
    },
    {
        id: 9,
        name: "Курица с грибами",
        image: "images/chicken.jpg",
        description: "Сочная курица с грибами в сливочном соусе",
        category: "Горячие блюда"
    },
    {
        id: 10,
        name: "Торт 'Зимняя сказка'",
        image: "images/cake.jpg",
        description: "Воздушный торт с кремом и зимним декором",
        category: "Десерты"
    },
    {
        id: 11,
        name: "Новогоднее печенье",
        image: "images/cookies.jpg",
        description: "Имбирное печенье с праздничным декором",
        category: "Десерты"
    }
];

// Детальные рецепты
const recipeDetails = {
    1: { // Салат Оливье
        ingredients: [
            '4 картофеля',
            '2 моркови',
            '4 яйца',
            '300г вареной колбасы или отварного мяса',
            '4 соленых огурца',
            '1 банка зеленого горошка',
            '1 луковица',
            'Майонез',
            'Соль и перец по вкусу'
        ],
        instructions: [
            'Отварите картофель, морковь и яйца до готовности',
            'Нарежьте все ингредиенты мелкими кубиками одинакового размера',
            'Мелко нарежьте лук',
            'Смешайте все нарезанные ингредиенты в большой миске',
            'Добавьте консервированный горошек',
            'Заправьте майонезом, посолите и поперчите по вкусу',
            'Перемешайте все ингредиенты',
            'Поставьте салат в холодильник на 1-2 часа для пропитки'
        ]
    },
    2: { // Новогодние капкейки
        ingredients: [
            '250г муки',
            '200г сахара',
            '2 яйца',
            '120г сливочного масла',
            '120мл молока',
            '2 ч.л. разрыхлителя',
            'Ванильный экстракт',
            'Крем для украшения',
            'Новогодние топперы'
        ],
        instructions: [
            'Разогрейте духовку до 180°C',
            'Смешайте сухие ингредиенты в одной миске',
            'В другой миске взбейте масло с сахаром, добавьте яйца и ваниль',
            'Постепенно добавляйте сухие ингредиенты, чередуя с молоком',
            'Разложите тесто по формочкам',
            'Выпекайте 20-25 минут',
            'Остудите и украсьте кремом и новогодними топперами'
        ]
    },
    3: { // Винегрет
        ingredients: [
            '3 картофеля',
            '2 моркови',
            '2 свеклы',
            '2 соленых огурца',
            '100г зеленого горошка',
            '1 луковица',
            'Растительное масло',
            'Соль и перец по вкусу'
        ],
        instructions: [
            'Отварите овощи до готовности',
            'Нарежьте все ингредиенты мелкими кубиками',
            'Мелко нарежьте лук',
            'Смешайте все ингредиенты',
            'Заправьте маслом, посолите и поперчите',
            'Дайте настояться 1-2 часа в холодильнике'
        ]
    },
    4: { // Крабовый салат
        ingredients: [
            '200г крабовых палочек',
            '4 яйца',
            '1 банка кукурузы',
            '200г риса',
            '2 огурца',
            'Майонез',
            'Соль и перец по вкусу'
        ],
        instructions: [
            'Отварите рис и яйца',
            'Нарежьте крабовые палочки',
            'Нарежьте огурцы кубиками',
            'Смешайте все ингредиенты',
            'Заправьте майонезом',
            'Посолите и поперчите по вкусу'
        ]
    },
    5: { // Утка с яблоками
        ingredients: [
            '1 утка (2-2.5 кг)',
            '4-5 яблок',
            '2 апельсина',
            'Мед',
            'Соль, перец',
            'Специи по вкусу'
        ],
        instructions: [
            'Подготовьте утку, натрите солью и специями',
            'Нарежьте яблоки и апельсины',
            'Нафаршируйте утку фруктами',
            'Смажьте утку медом',
            'Запекайте при 180°C 2-2.5 часа',
            'Периодически поливайте утку выделяющимся соком'
        ]
    },
    6: { // Говядина по-строгановски
        ingredients: [
            '600г говядины',
            '300г грибов',
            '2 луковицы',
            '200мл сливок',
            'Сливочное масло',
            'Соль, перец',
            'Зелень для украшения'
        ],
        instructions: [
            'Нарежьте мясо соломкой',
            'Обжарьте мясо на сильном огне',
            'Добавьте нарезанный лук и грибы',
            'Влейте сливки, тушите 5-7 минут',
            'Посолите, поперчите',
            'Подавайте с картофельным пюре'
        ]
    },
    7: { // Селедка под шубой
        ingredients: [
            '2 филе сельди',
            '4 картофеля',
            '3 моркови',
            '2 свеклы',
            '3 яйца',
            'Майонез',
            'Лук репчатый'
        ],
        instructions: [
            'Отварите овощи и яйца',
            'Нарежьте сельдь и лук',
            'Выложите слоями: картофель, сельдь с луком, морковь, яйца, свеклу',
            'Каждый слой промазывайте майонезом',
            'Украсьте тертой свеклой сверху',
            'Дайте настояться 6-8 часов в холодильнике'
        ]
    },
    8: { // Запеченная рыба
        ingredients: [
            '1 кг рыбы (судак или дорада)',
            '2 лимона',
            'Розмарин',
            'Чеснок',
            'Оливковое масло',
            'Соль, перец'
        ],
        instructions: [
            'Подготовьте рыбу, натрите солью и перцем',
            'Нафаршируйте лимоном и розмарином',
            'Сбрызните оливковым маслом',
            'Запекайте при 180°C 25-30 минут',
            'Подавайте с лимоном и зеленью'
        ]
    },
    9: { // Курица с грибами
        ingredients: [
            '600г куриного филе',
            '400г грибов',
            '2 луковицы',
            '200мл сливок',
            'Сливочное масло',
            'Соль, перец',
            'Зелень'
        ],
        instructions: [
            'Нарежьте курицу кубиками',
            'Обжарьте курицу до золотистого цвета',
            'Добавьте нарезанные грибы и лук',
            'Влейте сливки, тушите 10-15 минут',
            'Посыпьте рубленой зеленью'
        ]
    },
    10: { // Торт "Зимняя сказка"
        ingredients: [
            '200г сливочного масла',
            '200г сахара',
            '4 яйца',
            '300г муки',
            'Ванильный экстракт',
            'Крем:',
            '500мл сливок',
            '200г маскарпоне',
            'Белый шоколад для украшения'
        ],
        instructions: [
            'Приготовьте бисквитное тесто',
            'Выпекайте коржи при 180°C',
            'Взбейте сливки с маскарпоне',
            'Соберите торт, промазывая коржи кремом',
            'Украсьте белым шоколадом и зимним декором',
            'Охладите торт минимум 2 часа'
        ]
    },
    11: { // Новогоднее печенье
        ingredients: [
            '300г муки',
            '150г сливочного масла',
            '100г сахара',
            '1 яйцо',
            '1 ч.л. корицы',
            '1/2 ч.л. имбиря',
            'Глазурь для украшения'
        ],
        instructions: [
            'Замесите тесто из всех ингредиентов',
            'Охладите тесто 1 час',
            'Раскатайте и вырежьте фигурки',
            'Выпекайте при 180°C 10-12 минут',
            'Остудите и украсьте глазурью'
        ]
    }
};

// Функция для отображения деталей рецепта
function showRecipeDetails(recipeId) {
    const recipe = recipes.find(r => r.id === recipeId);
    const details = recipeDetails[recipeId];
    
    if (!recipe || !details) return;

    const modal = document.createElement('div');
    modal.className = 'recipe-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-modal" onclick="this.parentElement.parentElement.remove()">&times;</span>
            <h2>${recipe.name}</h2>
            <img src="${recipe.image}" alt="${recipe.name}">
            <div class="recipe-details">
                <h3>Ингредиенты:</h3>
                <ul>
                    ${details.ingredients.map(ing => `<li>${ing}</li>`).join('')}
                </ul>
                <h3>Приготовление:</h3>
                <ol>
                    ${details.instructions.map(inst => `<li>${inst}</li>`).join('')}
                </ol>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
}

// Функция для отображения рецептов по категории
function displayRecipesByCategory(category = 'all') {
    const recipesContainer = document.getElementById('recipes-container');
    recipesContainer.innerHTML = '';

    const filteredRecipes = category === 'all' 
        ? recipes 
        : recipes.filter(recipe => recipe.category === category);

    filteredRecipes.forEach(recipe => {
        const recipeCard = document.createElement('div');
        recipeCard.className = 'recipe-card';
        recipeCard.innerHTML = `
            <div class="recipe-image">
                <img src="${recipe.image}" alt="${recipe.name}">
            </div>
            <div class="recipe-content">
                <h3>${recipe.name}</h3>
                <p>${recipe.description}</p>
                <div class="recipe-actions">
                    <button class="like-btn" onclick="likeRecipe(this)">
                        <i class="far fa-heart"></i> <span>0</span>
                    </button>
                    <button class="recipe-btn" onclick="showRecipeDetails(${recipe.id})">
                        Смотреть рецепт
                    </button>
                </div>
            </div>
        `;
        recipesContainer.appendChild(recipeCard);
    });
}

// Функция для лайков рецептов
function likeRecipe(button) {
    const likeCount = button.querySelector('span');
    const icon = button.querySelector('i');
    if (icon.classList.contains('far')) {
        icon.classList.replace('far', 'fas');
        icon.style.color = '#ff4444';
        likeCount.textContent = parseInt(likeCount.textContent) + 1;
    } else {
        icon.classList.replace('fas', 'far');
        icon.style.color = '';
        likeCount.textContent = parseInt(likeCount.textContent) - 1;
    }
}

// Инициализация отображения рецептов
document.addEventListener('DOMContentLoaded', () => {
    displayRecipesByCategory();
});

// Таймер обратного отсчета
function updateCountdown() {
    const now = new Date();
    const newYear = new Date(now.getFullYear() + 1, 0, 1);
    const diff = newYear - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = days.toString().padStart(2, '0');
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
}

setInterval(updateCountdown, 1000);
updateCountdown();

// Инициализация IndexedDB
let db;
const dbName = "RecipesDB";
const dbVersion = 1;

const initDB = () => {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(dbName, dbVersion);

        request.onerror = (event) => {
            console.error("Database error:", event.target.error);
            reject(event.target.error);
        };

        request.onsuccess = (event) => {
            db = event.target.result;
            resolve(db);
        };

        request.onupgradeneeded = (event) => {
            const db = event.target.result;
            if (!db.objectStoreNames.contains('comments')) {
                const store = db.createObjectStore('comments', { keyPath: 'id', autoIncrement: true });
                store.createIndex('recipe', 'recipe', { unique: false });
                store.createIndex('date', 'date', { unique: false });
            }
        };
    });
};

// Функция загрузки комментариев
const loadComments = () => {
    return new Promise((resolve, reject) => {
        const transaction = db.transaction(['comments'], 'readonly');
        const store = transaction.objectStore('comments');
        const request = store.getAll();

        request.onsuccess = () => {
            resolve(request.result.sort((a, b) => new Date(b.date) - new Date(a.date)));
        };

        request.onerror = () => {
            reject(request.error);
        };
    });
};

// Функция добавления комментария
async function addComment() {
    const recipeSelect = document.getElementById('recipe-select');
    const authorInput = document.getElementById('comment-author');
    const commentText = document.getElementById('comment-text');
    
    if (!recipeSelect.value || !authorInput.value.trim() || !commentText.value.trim()) {
        alert('Пожалуйста, заполните все поля');
        return;
    }

    const comment = {
        recipe: recipeSelect.value,
        author: authorInput.value.trim(),
        text: commentText.value.trim(),
        date: new Date().toISOString(),
        likes: 0
    };

    try {
        const transaction = db.transaction(['comments'], 'readwrite');
        const store = transaction.objectStore('comments');
        await new Promise((resolve, reject) => {
            const request = store.add(comment);
            request.onsuccess = () => resolve();
            request.onerror = () => reject(request.error);
        });

        // Очищаем форму
        recipeSelect.value = '';
        authorInput.value = '';
        commentText.value = '';

        // Показываем уведомление
        showNotification('Комментарий успешно добавлен!');

        // Обновляем отображение комментариев
        await displayComments();
    } catch (error) {
        console.error('Ошибка при добавлении комментария:', error);
        showNotification('Ошибка при добавлении комментария', 'error');
    }
}

// Функция отображения комментариев
async function displayComments() {
    const commentsContainer = document.getElementById('comments-container');
    const loadingIndicator = document.createElement('div');
    loadingIndicator.className = 'loading-indicator';
    loadingIndicator.textContent = 'Загрузка комментариев...';
    commentsContainer.innerHTML = '';
    commentsContainer.appendChild(loadingIndicator);

    try {
        const comments = await loadComments();

        if (comments.length === 0) {
            commentsContainer.innerHTML = `
                <div class="no-comments">
                    <i class="far fa-comments"></i>
                    <p>Пока нет комментариев. Будьте первым!</p>
                </div>
            `;
            return;
        }

        commentsContainer.innerHTML = comments.map(comment => `
            <div class="comment" data-id="${comment.id}">
                <div class="comment-header">
                    <span class="comment-author">${comment.author}</span>
                    <span class="comment-date">${new Date(comment.date).toLocaleString('ru-RU')}</span>
                </div>
                <div class="comment-recipe">Блюдо: ${comment.recipe}</div>
                <p class="comment-text">${comment.text}</p>
                <div class="comment-actions">
                    <button class="like-btn ${comment.likes > 0 ? 'liked' : ''}" onclick="likeComment(${comment.id})">
                        <i class="far fa-heart"></i>
                        <span>${comment.likes}</span>
                    </button>
                </div>
            </div>
        `).join('');
    } catch (error) {
        console.error('Ошибка при загрузке комментариев:', error);
        commentsContainer.innerHTML = '<p class="error">Ошибка при загрузке комментариев</p>';
    }
}

// Функция для лайков комментариев
async function likeComment(id) {
    try {
        const transaction = db.transaction(['comments'], 'readwrite');
        const store = transaction.objectStore('comments');
        const request = store.get(id);

        request.onsuccess = async () => {
            const comment = request.result;
            comment.likes += 1;
            
            const updateRequest = store.put(comment);
            updateRequest.onsuccess = async () => {
                await displayComments();
            };
        };
    } catch (error) {
        console.error('Ошибка при добавлении лайка:', error);
    }
}

// Функция показа уведомлений
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.classList.add('show');
    }, 100);

    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', async () => {
    try {
        await initDB();
        await displayComments();
    } catch (error) {
        console.error('Ошибка при инициализации:', error);
    }
});

// Система новостей
const staticNews = [
    {
        title: "Как украсить дом к Новому году: лучшие идеи декора",
        description: "Создайте праздничную атмосферу с помощью простых и красивых украшений. Узнайте, как сделать ваш дом по-настоящему новогодним!",
        publishedAt: "2023-12-26T15:30:00",
        urlToImage: "https://images.unsplash.com/photo-1544273677-c433136021d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        url: "#"
    },
    {
        title: "Топ-5 новогодних десертов, которые можно приготовить за час",
        description: "Простые и вкусные рецепты праздничных десертов, которые порадуют всю семью. От классического имбирного печенья до шоколадных трюфелей.",
        publishedAt: "2023-12-25T14:20:00",
        urlToImage: "https://images.unsplash.com/photo-1481391319762-47dff72954d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        url: "#"
    },
    {
        title: "Новогодние традиции разных стран мира",
        description: "Узнайте, как встречают Новый год в разных уголках планеты. Интересные факты и необычные обычаи празднования.",
        publishedAt: "2023-12-24T12:15:00",
        urlToImage: "https://images.unsplash.com/photo-1514446472686-551be53b8420?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        url: "#"
    },
    {
        title: "Идеи подарков для всей семьи",
        description: "Подборка оригинальных подарков для каждого члена семьи. От практичных до креативных идей, которые точно понравятся вашим близким.",
        publishedAt: "2023-12-23T10:45:00",
        urlToImage: "https://images.unsplash.com/photo-1511988617509-a57c8a288659?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        url: "#"
    },
    {
        title: "Новогодние игры и развлечения для всей семьи",
        description: "Сборник веселых игр и активностей, которые сделают ваш праздник незабываемым. Идеально для семейного времяпрепровождения!",
        publishedAt: "2023-12-22T09:30:00",
        urlToImage: "https://images.unsplash.com/photo-1482517967863-00e15c9b44be?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        url: "#"
    }
];

// Функция получения новостей
async function fetchNews() {
    const newsContainer = document.getElementById('news-container');
    newsContainer.innerHTML = '<p class="loading">Загрузка новостей...</p>';
    
    try {
        // Имитируем задержку загрузки
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        newsContainer.innerHTML = '';
        
        staticNews.forEach(article => {
            const newsItem = document.createElement('div');
            newsItem.className = 'news-item';
            
            const imageUrl = article.urlToImage || 'https://via.placeholder.com/400x200?text=Новости';
            
            newsItem.innerHTML = `
                <div class="news-image">
                    <img src="${imageUrl}" alt="${article.title}" 
                         onerror="this.src='https://via.placeholder.com/400x200?text=Новости'">
                </div>
                <div class="news-content">
                    <h3>${article.title}</h3>
                    <div class="date">${new Date(article.publishedAt).toLocaleString('ru-RU')}</div>
                    <p>${article.description}</p>
                    <div class="news-actions">
                        <button class="like-btn" onclick="likeNews(this)">
                            <i class="far fa-heart"></i> <span>0</span>
                        </button>
                        <button class="share-btn" onclick="shareNews('${article.title}')">
                            <i class="fas fa-share"></i> Поделиться
                        </button>
                    </div>
                </div>
            `;
            newsContainer.appendChild(newsItem);
        });
    } catch (error) {
        console.error('Ошибка при загрузке новостей:', error);
        newsContainer.innerHTML = `
            <div class="error-message">
                <h3>Не удалось загрузить новости</h3>
                <p>Пожалуйста, проверьте подключение к интернету и попробуйте обновить страницу</p>
                <button onclick="fetchNews()" class="retry-btn">Попробовать снова</button>
            </div>
        `;
    }
}

// Функция для лайков
function likeNews(button) {
    const likeCount = button.querySelector('span');
    const icon = button.querySelector('i');
    if (icon.classList.contains('far')) {
        icon.classList.replace('far', 'fas');
        icon.style.color = '#ff4444';
        likeCount.textContent = parseInt(likeCount.textContent) + 1;
    } else {
        icon.classList.replace('fas', 'far');
        icon.style.color = '';
        likeCount.textContent = parseInt(likeCount.textContent) - 1;
    }
}

// Функция для шеринга
function shareNews(title) {
    if (navigator.share) {
        navigator.share({
            title: title,
            text: 'Посмотрите эту интересную новогоднюю новость!',
            url: window.location.href
        })
        .catch(error => console.log('Ошибка при попытке поделиться:', error));
    } else {
        alert('К сожалению, ваш браузер не поддерживает функцию шеринга');
    }
}

// Загружаем новости при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    fetchNews();
    // Обновляем новости каждые 5 минут
    setInterval(fetchNews, 300000);
});
