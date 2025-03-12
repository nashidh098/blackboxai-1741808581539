// Initialize default news if none exists
document.addEventListener('DOMContentLoaded', function() {
    if (!localStorage.getItem('news')) {
        const defaultNews = [{
            title: "ރާއްޖޭގެ ފަތުރުވެރިކަން އިތުރަށް ކުރިއަރަމުން",
            category: "business",
            content: `ރާއްޖޭގެ ފަތުރުވެރިކަމުގެ ދާއިރާ އިތުރަށް ކުރިއަރަމުންދާކަމަށް މިނިސްޓްރީ އޮފް ޓޫރިޒަމްއިން ހާމަކޮށްފިއެވެ. މިއަހަރުގެ ފުރަތަމަ ކުއާޓަރގައި 500،000 އަށްވުރެ ގިނަ ފަތުރުވެރިން ރާއްޖެއަށް ޒިޔާރަތްކޮށްފައިވާކަމަށް މިނިސްޓްރީން ބުނެއެވެ.

"މިއީ ވޭތުވެދިޔަ އަހަރުގެ މި މުއްދަތާ އަޅާބަލާއިރު 15% އިތުރު އަދަދެކެވެ. އަދި ކުރިއަށް އޮތް މަސްތަކުގައިވެސް މި ކުރިއެރުން ދެމެހެއްޓޭނެކަމަށް ލަފާކުރެވެއެވެ،" މިނިސްޓްރީގެ ސްޓެޓިސްޓިކްސް ޑިޕާޓްމަންޓުގެ ވެރިޔާ ވިދާޅުވިއެވެ.

އާ ރިސޯޓުތައް ހުޅުވުމާއި، ބައިނަލްއަޤްވާމީ އެއަރލައިންތަކުން ރާއްޖެއަށް ދަތުރުތައް އިތުރުކުރަމުންދިއުމަކީ މި ކުރިއެރުމަށް މަގުފަހިކޮށްދޭ ކަންކަން ކަމުގައި ފާހަގަކުރެވެއެވެ.`,
            isBreaking: true,
            date: new Date().toISOString(),
            image: null
        }];
        localStorage.setItem('news', JSON.stringify(defaultNews));
    }

    // Load news from localStorage
    const news = JSON.parse(localStorage.getItem('news') || '[]');
    
    // Display breaking news in ticker
    const tickerContainer = document.getElementById('news-ticker');
    if (tickerContainer) {
        const breakingNews = news.filter(item => item.isBreaking);
        if (breakingNews.length > 0) {
            tickerContainer.innerHTML = `
                <div class="ticker-content">
                    ${breakingNews.map(item => item.title).join(' | ')}
                </div>
            `;
        } else {
            tickerContainer.innerHTML = `
                <div class="ticker-content">
                    މިވަގުތު އާ ޚަބަރެއް ނެތް
                </div>
            `;
        }
    }

    // Display hero slider
    const heroSlider = document.getElementById('hero-slider');
    if (heroSlider) {
        if (news.length > 0) {
            heroSlider.innerHTML = news.slice(0, 3).map((item, index) => `
                <div class="hero-slide ${index === 0 ? 'active' : ''}" 
                     style="background: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.7))">
                    <div class="hero-slide-content">
                        <h2 class="text-3xl font-bold mb-4 text-white">${item.title}</h2>
                        <p class="text-gray-200 mb-4">${item.content.substring(0, 150)}...</p>
                        <a href="article.html?id=${index}" class="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                            އިތުރަށް ކިޔާ
                        </a>
                    </div>
                </div>
            `).join('');

            // Slider functionality
            let currentSlide = 0;
            const slides = heroSlider.querySelectorAll('.hero-slide');
            
            function showSlide(n) {
                slides.forEach(slide => slide.style.display = 'none');
                slides[n].style.display = 'block';
            }

            function nextSlide() {
                currentSlide = (currentSlide + 1) % slides.length;
                showSlide(currentSlide);
            }

            // Initialize first slide
            showSlide(0);

            // Change slide every 5 seconds
            setInterval(nextSlide, 5000);
        } else {
            heroSlider.innerHTML = `
                <div class="flex items-center justify-center min-h-[400px] bg-gray-100">
                    <p class="text-gray-500">ޚަބަރެއް ނެތް</p>
                </div>
            `;
        }
    }

    // Display latest news grid
    const latestNewsGrid = document.getElementById('latest-news');
    if (latestNewsGrid) {
        if (news.length > 0) {
            latestNewsGrid.innerHTML = news.slice(0, 6).map((item, index) => `
                <div class="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:-translate-y-1">
                    <div class="p-6">
                        <div class="flex items-center mb-4">
                            <span class="text-sm text-blue-600 bg-blue-50 px-3 py-1 rounded-full">${item.category}</span>
                            <span class="text-sm text-gray-500 mr-4">
                                ${new Date(item.date).toLocaleDateString('dv-MV')}
                            </span>
                        </div>
                        <h3 class="text-xl font-bold mb-3">${item.title}</h3>
                        <p class="text-gray-600 mb-4">${item.content.substring(0, 150)}...</p>
                        <a href="article.html?id=${index}" class="text-blue-600 hover:text-blue-800 font-medium">
                            އިތުރަށް ކިޔާ
                            <i class="fas fa-arrow-left mr-1"></i>
                        </a>
                    </div>
                </div>
            `).join('');
        } else {
            latestNewsGrid.innerHTML = `
                <div class="col-span-2 flex items-center justify-center min-h-[300px] bg-gray-100 rounded-lg">
                    <p class="text-gray-500">ޚަބަރެއް ނެތް</p>
                </div>
            `;
        }
    }

    // Display popular news sidebar
    const popularNews = document.getElementById('popular-news');
    if (popularNews) {
        if (news.length > 0) {
            popularNews.innerHTML = news.slice(0, 5).map((item, index) => `
                <a href="article.html?id=${index}" class="block hover:bg-gray-50 rounded-lg p-4 transition-colors">
                    <div class="flex items-center mb-2">
                        <span class="text-sm text-blue-600 bg-blue-50 px-2 py-1 rounded-full">${item.category}</span>
                        <span class="text-sm text-gray-500 mr-3">
                            ${new Date(item.date).toLocaleDateString('dv-MV')}
                        </span>
                    </div>
                    <h4 class="font-bold text-gray-900">${item.title}</h4>
                </a>
            `).join('');
        } else {
            popularNews.innerHTML = `
                <div class="text-center text-gray-500 py-4">
                    ޚަބަރެއް ނެތް
                </div>
            `;
        }
    }

    // Load individual article
    const articleContent = document.getElementById('article-content');
    if (articleContent) {
        const urlParams = new URLSearchParams(window.location.search);
        const articleId = urlParams.get('id');
        
        if (articleId !== null && news[articleId]) {
            const article = news[articleId];
            articleContent.innerHTML = `
                <div class="mb-6">
                    <div class="flex items-center mb-4">
                        <span class="text-sm text-blue-600 bg-blue-50 px-3 py-1 rounded-full">${article.category}</span>
                        <span class="text-sm text-gray-500 mr-4">
                            <i class="far fa-calendar mr-1"></i>
                            ${new Date(article.date).toLocaleDateString('dv-MV')}
                        </span>
                    </div>
                    <h1 class="text-3xl font-bold mb-6">${article.title}</h1>
                </div>
                ${article.image ? `
                    <div class="mb-6">
                        <img src="${article.image}" alt="${article.title}" class="w-full rounded-lg">
                    </div>
                ` : ''}
                <div class="prose max-w-none">
                    ${article.content.split('\n').map(para => `<p class="mb-4">${para}</p>`).join('')}
                </div>
            `;
        } else {
            articleContent.innerHTML = `
                <div class="text-center py-12">
                    <h2 class="text-2xl font-bold text-gray-600">ޚަބަރު ނުފެނުނު</h2>
                    <a href="index.html" class="inline-block mt-4 text-blue-600 hover:text-blue-800">
                        މައި ސަފްހާއަށް ދިއުން
                        <i class="fas fa-arrow-left mr-1"></i>
                    </a>
                </div>
            `;
        }
    }
});
