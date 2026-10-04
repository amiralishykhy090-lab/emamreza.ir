        
        
        // ===== لودر =====
document.addEventListener('DOMContentLoaded', function() {
    
    const preloader = document.getElementById('preloader');
    
    // بعد از ۳.۵ ثانیه لودر مخفی میشه
    setTimeout(function() {
        preloader.classList.add('hide');
        document.body.style.overflow = 'auto';
    }, 3500);
    
    // جلوگیری از اسکرول در هنگام لودر
    document.body.style.overflow = 'hidden';
});
        // ============================================
        // ===== OPEN MODAL =====
        // ============================================
        document.querySelectorAll('.help-item').forEach(item => {
            item.addEventListener('click', function() {
                const modalId = this.dataset.modal;
                document.getElementById(modalId).classList.add('active');
                document.body.style.overflow = 'hidden';
            });
        });

        // ============================================
        // ===== CLOSE MODAL =====
        // ============================================
        function closeModal(modalId) {
            document.getElementById(modalId).classList.remove('active');
            document.body.style.overflow = '';
            // ریست کردن کارت سه‌بعدی
            if (modalId === 'modal1') {
                document.getElementById('card3d').classList.remove('flipped');
            }
        }

        // بستن مودال با کلیک روی پس‌زمینه
        document.querySelectorAll('.modal').forEach(modal => {
            modal.addEventListener('click', function(e) {
                if (e.target === this) {
                    this.classList.remove('active');
                    document.body.style.overflow = '';
                    if (this.id === 'modal1') {
                        document.getElementById('card3d').classList.remove('flipped');
                    }
                }
            });
        });

        // بستن با کلید ESC
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                document.querySelectorAll('.modal.active').forEach(modal => {
                    modal.classList.remove('active');
                    document.body.style.overflow = '';
                    if (modal.id === 'modal1') {
                        document.getElementById('card3d').classList.remove('flipped');
                    }
                });
            }
        });

        // ============================================
        // ===== FLIP CARD =====
        // ============================================
        let isFlipped = false;

        function flipCard() {
            const card = document.getElementById('card3d');
            const btn = document.querySelector('.flip-btn');
            isFlipped = !isFlipped;
            card.classList.toggle('flipped');
            
            if (isFlipped) {
                btn.innerHTML = '<i class="fas fa-sync-alt"></i> مشاهده روی کارت';
            } else {
                btn.innerHTML = '<i class="fas fa-sync-alt"></i> مشاهده پشت کارت';
            }
        }

        // ============================================
        // ===== COPY CARD NUMBER =====
        // ============================================
        function copyCardNumber() {
            const cardNumber = '6037991712345678';
            navigator.clipboard.writeText(cardNumber).then(() => {
                const btn = document.querySelector('.copy-btn');
                const originalText = btn.innerHTML;
                btn.innerHTML = '<i class="fas fa-check"></i> کپی شد!';
                btn.style.background = '#00c851';
                btn.style.color = 'white';
                setTimeout(() => {
                    btn.innerHTML = originalText;
                    btn.style.background = '';
                    btn.style.color = '';
                }, 2000);
            }).catch(() => {
                // Fallback برای مرورگرهای قدیمی
                const textarea = document.createElement('textarea');
                textarea.value = cardNumber;
                document.body.appendChild(textarea);
                textarea.select();
                document.execCommand('copy');
                document.body.removeChild(textarea);
                const btn = document.querySelector('.copy-btn');
                const originalText = btn.innerHTML;
                btn.innerHTML = '<i class="fas fa-check"></i> کپی شد!';
                btn.style.background = '#00c851';
                btn.style.color = 'white';
                setTimeout(() => {
                    btn.innerHTML = originalText;
                    btn.style.background = '';
                    btn.style.color = '';
                }, 2000);
            });
        }

        // ============================================
        // ===== CARD 3D MOUSE EFFECT =====
        // ============================================
        document.querySelector('.card-3d-wrapper')?.addEventListener('mousemove', function(e) {
            const card = document.getElementById('card3d');
            if (card.classList.contains('flipped')) return;
            
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (y - centerY) / centerY * 10;
            const rotateY = (centerX - x) / centerX * 10;
            
            card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });

        document.querySelector('.card-3d-wrapper')?.addEventListener('mouseleave', function() {
            const card = document.getElementById('card3d');
            if (!card.classList.contains('flipped')) {
                card.style.transform = 'rotateX(0deg) rotateY(0deg)';
            }
        });

        console.log('🕌 بخش کمک مالی مسجد با کارت سه‌بعدی آماده است!');
        console.log('📞 شماره کارت: 6037 9917 1234 5678');




                (function() {
            // ===== HAMBURGER =====
      // ============================================
// ===== هدر و منوی همبرگر =====
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    
    // المنت‌ها
    const hamburger = document.getElementById('hamburgerBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileOverlay = document.getElementById('mobileOverlay');
    const mobileClose = document.getElementById('mobileMenuClose');
    const body = document.body;

    // بررسی وجود المنت‌ها
    if (!hamburger) {
        console.error('❌ دکمه همبرگر پیدا نشد!');
        return;
    }

    if (!mobileMenu) {
        console.error('❌ منوی موبایل پیدا نشد!');
        return;
    }

    // تابع باز کردن منو
    function openMenu() {
        mobileMenu.classList.add('open');
        mobileOverlay.classList.add('active');
        body.style.overflow = 'hidden';
        hamburger.querySelector('i').className = 'fas fa-times';
    }

    // تابع بستن منو
    function closeMenu() {
        mobileMenu.classList.remove('open');
        mobileOverlay.classList.remove('active');
        body.style.overflow = '';
        hamburger.querySelector('i').className = 'fas fa-bars';
    }

    // تابع toggle منو
    function toggleMenu() {
        if (mobileMenu.classList.contains('open')) {
            closeMenu();
        } else {
            openMenu();
        }
    }

    // رویداد کلیک روی همبرگر
    hamburger.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        toggleMenu();
    });

    // رویداد کلیک روی دکمه بستن
    if (mobileClose) {
        mobileClose.addEventListener('click', function(e) {
            e.preventDefault();
            closeMenu();
        });
    }

    // رویداد کلیک روی overlay (پس‌زمینه تیره)
    if (mobileOverlay) {
        mobileOverlay.addEventListener('click', function() {
            closeMenu();
        });
    }

    // رویداد کلید ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && mobileMenu.classList.contains('open')) {
            closeMenu();
        }
    });

    // بستن منو با کلیک روی لینک‌ها
    const menuLinks = mobileMenu.querySelectorAll('a');
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 991) {
                closeMenu();
            }
        });
    });

    // بستن منو با تغییر سایز به دسکتاپ
    let resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            if (window.innerWidth > 991 && mobileMenu.classList.contains('open')) {
                closeMenu();
            }
        }, 300);
    });

    console.log('✅ منوی همبرگر با موفقیت فعال شد!');
    console.log('📱 برای باز کردن منو روی دکمه همبرگر کلیک کنید.');
});

            // ===== HERO SLIDER =====
            let currentSlide = 0;
            const slides = document.querySelectorAll('.slider-slide');
            const dots = document.querySelectorAll('.slider-dots button');
            const sliderContainer = document.getElementById('sliderContainer');
            const sliderPrev = document.getElementById('sliderPrev');
            const sliderNext = document.getElementById('sliderNext');

            if (slides.length > 0) {
                function goToSlide(index) {
                    if (index < 0) index = slides.length - 1;
                    if (index >= slides.length) index = 0;
                    currentSlide = index;
                    sliderContainer.style.transform = `translateX(-${index * 100}%)`;
                    dots.forEach((dot, i) => {
                        dot.classList.toggle('active', i === index);
                    });
                }

                dots.forEach((dot) => {
                    dot.addEventListener('click', function() {
                        goToSlide(parseInt(this.dataset.index));
                    });
                });

                sliderPrev.addEventListener('click', function() {
                    goToSlide(currentSlide - 1);
                });

                sliderNext.addEventListener('click', function() {
                    goToSlide(currentSlide + 1);
                });

                // Auto slide
                let slideInterval = setInterval(() => {
                    goToSlide(currentSlide + 1);
                }, 4000);

                const slider = document.getElementById('heroSlider');
                slider.addEventListener('mouseenter', () => clearInterval(slideInterval));
                slider.addEventListener('mouseleave', () => {
                    slideInterval = setInterval(() => {
                        goToSlide(currentSlide + 1);
                    }, 4000);
                });

                // Pause on touch
                slider.addEventListener('touchstart', () => clearInterval(slideInterval));
                slider.addEventListener('touchend', () => {
                    slideInterval = setInterval(() => {
                        goToSlide(currentSlide + 1);
                    }, 4000);
                });
            }

            // ===== EVENTS SCROLL =====
            const container = document.getElementById('scrollContainer');
            const scrollPrev = document.getElementById('scrollPrev');
            const scrollNext = document.getElementById('scrollNext');

            if (container) {
                function scrollEvents(direction) {
                    let cardWidth = 280 + 25;
                    if (window.innerWidth <= 768) cardWidth = 220 + 25;
                    if (window.innerWidth <= 480) cardWidth = 170 + 25;
                    const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
                    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
                }

                scrollPrev.addEventListener('click', function() {
                    scrollEvents('left');
                });

                scrollNext.addEventListener('click', function() {
                    scrollEvents('right');
                });

                // پشتیبانی از اسکرول با موس و انگشت
                container.addEventListener('wheel', function(e) {
                    e.preventDefault();
                    container.scrollBy({ left: e.deltaY, behavior: 'smooth' });
                }, { passive: false });
            }

            // ===== MODAL =====
            const modal = document.getElementById('eventModal');
            const modalClose = document.getElementById('modalClose');
            const modalTitle = document.getElementById('modalTitle');
            const modalTime = document.getElementById('modalTime');
            const modalLocation = document.getElementById('modalLocation');
            const modalDesc = document.getElementById('modalDesc');
            const modalImage = document.getElementById('modalImage');

            const eventCards = document.querySelectorAll('.event-card');

            eventCards.forEach(card => {
                card.addEventListener('click', function() {
                    const imgSrc = this.querySelector('img') ? this.querySelector('img').src : '';
                    const title = this.dataset.title || this.querySelector('h4').textContent;
                    const time = this.dataset.time || 'زمان مشخص نشده';
                    const location = this.dataset.location || 'مکان مشخص نشده';
                    const desc = this.dataset.desc || 'توضیحات کامل این مراسم به زودی ارائه می‌شود.';

                    modalImage.src = imgSrc;
                    modalTitle.textContent = title;
                    modalTime.textContent = time;
                    modalLocation.textContent = location;
                    modalDesc.textContent = desc;
                    modal.classList.add('active');
                    document.body.style.overflow = 'hidden';
                });
            });

            function closeModal() {
                modal.classList.remove('active');
                document.body.style.overflow = '';
            }

            modalClose.addEventListener('click', closeModal);
            modal.addEventListener('click', function(e) {
                if (e.target === this) closeModal();
            });
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape') closeModal();
            });

            // ===== NAV CLOSE ON LINK CLICK =====
            document.querySelectorAll('.nav-menu ul li a').forEach(link => {
                link.addEventListener('click', function() {
                    if (window.innerWidth <= 768) {
                        toggleMenu();
                    }
                });
            });

        })();







            let currentSlide = 0;
    const slides = document.querySelectorAll('.custom-slide');

    function showSlide(index) {
        // حذف کلاس active از اسلاید فعلی
        slides[currentSlide].classList.remove('active');
        
        // محاسبه اندیس اسلاید بعدی
        currentSlide = (index + slides.length) % slides.length;
        
        // اضافه کردن کلاس active به اسلاید جدید
        slides[currentSlide].classList.add('active');
    }

    function moveSlide(direction) {
        showSlide(currentSlide + direction);
    }

    // (اختیاری) اسلاید خودکار هر 5 ثانیه یکبار
    setInterval(() => {
        moveSlide(1);
    }, 5000);



















    
    // ============================================
// ===== بخش ویدیوها با تگ video =====
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    
    const videoModal = document.getElementById('videoModal');
    const videoPlayer = document.getElementById('videoPlayer');
    const videoModalTitle = document.getElementById('videoModalTitle');
    const videoModalDesc = document.getElementById('videoModalDesc');
    const body = document.body;

    // اطلاعات ویدیوها
    const videosInfo = {
        'video1': { title: 'مراسم دعای کمیل', desc: ' شب‌ها - شبستان امام' },
        'video2': { title: 'شب‌های قدر', desc: 'احیا و نیایش در ماه رمضان' },
        'video3': { title: 'سخنرانی حجت‌الاسلام', desc: 'درس اخلاق - تالار امام' },
        'video4': { title: 'زیارت عاشورا', desc: 'قرائت روزانه - حسینیه مرکزی' }
    };

    // تابع محاسبه مدت زمان ویدیو
    function getVideoDuration(videoId, durationId) {
        const video = document.getElementById(videoId);
        const durationEl = document.getElementById(durationId);
        
        if (video && durationEl) {
            video.addEventListener('loadedmetadata', function() {
                const minutes = Math.floor(video.duration / 60);
                const seconds = Math.floor(video.duration % 60);
                durationEl.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
            });
        }
    }

    // محاسبه مدت زمان همه ویدیوها
    getVideoDuration('video1', 'duration1');
    getVideoDuration('video2', 'duration2');
    getVideoDuration('video3', 'duration3');
    getVideoDuration('video4', 'duration4');

    // تابع توقف همه ویدیوها
    function pauseAllVideos() {
        const allVideos = document.querySelectorAll('video');
        allVideos.forEach(video => {
            if (!video.paused) {
                video.pause();
            }
        });
    }

    // تابع باز کردن مودال و پخش ویدیو
    window.openVideo = function(videoId) {
        const videoElement = document.getElementById(videoId);
        const videoSrc = videoElement.querySelector('source')?.src || '';
        const info = videosInfo[videoId] || { title: 'ویدیو', desc: '' };

        // توقف همه ویدیوها
        pauseAllVideos();

        // تنظیم ویدیو در مودال
        videoPlayer.src = videoSrc;
        videoPlayer.load();
        videoModalTitle.textContent = info.title;
        videoModalDesc.textContent = info.desc;

        // نمایش مودال
        videoModal.classList.add('active');
        body.style.overflow = 'hidden';

        // پخش خودکار با تاخیر
        setTimeout(() => {
            videoPlayer.play().catch(function(error) {
                console.log('⏸️ پخش خودکار ممکن است توسط مرورگر مسدود شده باشد.');
            });
        }, 300);
    };

    // تابع بستن مودال
    window.closeVideoModal = function() {
        // توقف ویدیو
        if (videoPlayer) {
            videoPlayer.pause();
            videoPlayer.currentTime = 0;
        }

        videoModal.classList.remove('active');
        body.style.overflow = '';
    };

    // رویداد کلیک روی پس‌زمینه مودال
    videoModal.addEventListener('click', function(e) {
        if (e.target === this) {
            closeVideoModal();
        }
    });

    // رویداد کلید ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            if (videoModal.classList.contains('active')) {
                closeVideoModal();
            }
            pauseAllVideos();
        }
    });

    // وقتی یک ویدیو شروع به پخش میشه، بقیه رو متوقف کن
    document.addEventListener('play', function(e) {
        if (e.target.tagName === 'VIDEO') {
            const allVideos = document.querySelectorAll('video');
            allVideos.forEach(video => {
                if (video !== e.target && !video.paused) {
                    video.pause();
                }
            });
        }
    }, true);

    console.log('✅ بخش ویدیوها با تگ video با موفقیت فعال شد!');
});






// ============================================
// ===== بخش کامنت‌ها =====
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    
    // بارگذاری کامنت‌ها از localStorage
    loadComments();
});

// دیتابیس کامنت‌ها
let comments = [];
let currentPage = 0;
const COMMENTS_PER_PAGE = 5;

// آدرس ایمیل ادمین (برای تشخیص پاسخ‌ها)
const ADMIN_EMAIL = 'admin@masjed.ir';

// تابع بارگذاری کامنت‌ها از localStorage
function loadComments() {
    const saved = localStorage.getItem('siteComments');
    if (saved) {
        try {
            comments = JSON.parse(saved);
        } catch (e) {
            comments = [];
        }
    } else {
        // کامنت‌های نمونه
        comments = [
            {
                id: Date.now() + 1,
                name: 'علی رضایی',
                email: 'ali@example.com',
                text: 'سلام، برنامه‌های مسجد بسیار عالی بود. خداقوت به همه دست‌اندرکاران!',
                date: new Date(Date.now() - 86400000 * 2).toISOString(),
                reply: null
            },
            {
                id: Date.now() + 2,
                name: 'فاطمه حسینی',
                email: 'fatemeh@example.com',
                text: 'مراسم دعای کمیل واقعاً روح‌بخش بود. امیدوارم همیشه ادامه داشته باشه.',
                date: new Date(Date.now() - 86400000).toISOString(),
                reply: {
                    text: 'سلام فاطمه جان! خوشحالیم که از مراسم راضی بودید. ان‌شاءالله همیشه در خدمت شما هستیم.',
                    date: new Date(Date.now() - 43200000).toISOString()
                }
            }
        ];
        saveComments();
    }
    renderComments();
}

// تابع ذخیره کامنت‌ها در localStorage
function saveComments() {
    localStorage.setItem('siteComments', JSON.stringify(comments));
}

// تابع ارسال کامنت جدید
function submitComment() {
    const nameInput = document.getElementById('commentName');
    const emailInput = document.getElementById('commentEmail');
    const textInput = document.getElementById('commentText');
    
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const text = textInput.value.trim();
    
    if (!name) {
        showToast('لطفاً نام خود را وارد کنید', 'error');
        nameInput.focus();
        return;
    }
    
    if (!text) {
        showToast('لطفاً متن نظر را وارد کنید', 'error');
        textInput.focus();
        return;
    }
    
    if (text.length < 5) {
        showToast('متن نظر باید حداقل ۵ کاراکتر باشد', 'error');
        return;
    }
    
    // ساخت کامنت جدید
    const newComment = {
        id: Date.now(),
        name: name,
        email: email || '',
        text: text,
        date: new Date().toISOString(),
        reply: null
    };
    
    // اضافه کردن به ابتدای لیست
    comments.unshift(newComment);
    saveComments();
    renderComments();
    
    // پاک کردن فرم
    nameInput.value = '';
    emailInput.value = '';
    textInput.value = '';
    
    showToast('نظر شما با موفقیت ثبت شد', 'success');
}

// تابع نمایش کامنت‌ها
function renderComments() {
    const container = document.getElementById('commentsList');
    const showMoreWrapper = document.getElementById('showMoreWrapper');
    
    if (!container) return;
    
    if (comments.length === 0) {
        container.innerHTML = `
            <div class="empty-comments">
                <i class="fas fa-comment-slash"></i>
                <p>هنوز نظری ثبت نشده است</p>
                <p style="font-size: 0.9rem;">اولین نفری باشید که نظر می‌دهید</p>
            </div>
        `;
        if (showMoreWrapper) showMoreWrapper.style.display = 'none';
        return;
    }
    
    // محاسبه تعداد کامنت‌های قابل نمایش
    const start = 0;
    const end = (currentPage + 1) * COMMENTS_PER_PAGE;
    const visibleComments = comments.slice(start, end);
    
    // نمایش کامنت‌ها
    container.innerHTML = visibleComments.map(comment => {
        const isAdmin = comment.email === ADMIN_EMAIL;
        const avatarChar = comment.name.charAt(0);
        const date = new Date(comment.date);
        const dateStr = date.toLocaleDateString('fa-IR') + ' ' + date.toLocaleTimeString('fa-IR', { hour: '2-digit', minute: '2-digit' });
        
        let replyHtml = '';
        if (comment.reply) {
            const replyDate = new Date(comment.reply.date);
            const replyDateStr = replyDate.toLocaleDateString('fa-IR') + ' ' + replyDate.toLocaleTimeString('fa-IR', { hour: '2-digit', minute: '2-digit' });
            replyHtml = `
                <div class="comment-reply">
                    <div class="reply-header">
                        <i class="fas fa-crown"></i>
                        <span>پاسخ ادمین</span>
                        <span style="font-weight: 400; font-size: 0.8rem; color: var(--text-light);">${replyDateStr}</span>
                    </div>
                    <div class="reply-text">${escapeHtml(comment.reply.text)}</div>
                </div>
            `;
        }
        
        return `
            <div class="comment-item ${isAdmin ? 'admin-reply' : ''}" id="comment-${comment.id}">
                <div class="comment-header">
                    <div class="comment-user">
                        <div class="comment-avatar">${escapeHtml(avatarChar)}</div>
                        <div class="comment-user-info">
                            <div class="name">${escapeHtml(comment.name)} ${isAdmin ? '<span class="comment-badge">ادمین</span>' : ''}</div>
                            <div class="date">${dateStr}</div>
                        </div>
                    </div>
                    ${!comment.reply ? `<button class="reply-btn" onclick="showReplyForm(${comment.id})"><i class="fas fa-reply"></i> پاسخ</button>` : ''}
                </div>
                <div class="comment-text">${escapeHtml(comment.text)}</div>
                ${replyHtml}
                <div class="reply-form" id="replyForm-${comment.id}">
                    <textarea id="replyText-${comment.id}" placeholder="متن پاسخ شما..." rows="2"></textarea>
                    <div class="reply-actions">
                        <button class="reply-submit" onclick="submitReply(${comment.id})"><i class="fas fa-check"></i> ارسال پاسخ</button>
                        <button class="reply-cancel" onclick="hideReplyForm(${comment.id})">لغو</button>
                    </div>
                </div>
            </div>
        `;
    }).join('');
    
    // نمایش یا مخفی کردن دکمه "نمایش بیشتر"
    if (comments.length > (currentPage + 1) * COMMENTS_PER_PAGE) {
        if (showMoreWrapper) showMoreWrapper.style.display = 'block';
    } else {
        if (showMoreWrapper) showMoreWrapper.style.display = 'none';
    }
}

// تابع نمایش بیشتر
function showMoreComments() {
    currentPage++;
    renderComments();
    // اسکرول به ابتدای لیست کامنت‌ها
    const container = document.getElementById('commentsList');
    if (container) {
        container.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// تابع نمایش فرم پاسخ
function showReplyForm(commentId) {
    const form = document.getElementById(`replyForm-${commentId}`);
    if (form) {
        form.classList.add('active');
        const textarea = document.getElementById(`replyText-${commentId}`);
        if (textarea) textarea.focus();
    }
}

// تابع مخفی کردن فرم پاسخ
function hideReplyForm(commentId) {
    const form = document.getElementById(`replyForm-${commentId}`);
    if (form) {
        form.classList.remove('active');
        const textarea = document.getElementById(`replyText-${commentId}`);
        if (textarea) textarea.value = '';
    }
}

// تابع ارسال پاسخ ادمین
function submitReply(commentId) {
    const textarea = document.getElementById(`replyText-${commentId}`);
    if (!textarea) return;
    
    const replyText = textarea.value.trim();
    
    if (!replyText) {
        showToast('لطفاً متن پاسخ را وارد کنید', 'error');
        textarea.focus();
        return;
    }
    
    if (replyText.length < 3) {
        showToast('متن پاسخ باید حداقل ۳ کاراکتر باشد', 'error');
        return;
    }
    
    // پیدا کردن کامنت
    const commentIndex = comments.findIndex(c => c.id === commentId);
    if (commentIndex === -1) {
        showToast('کامنت مورد نظر پیدا نشد', 'error');
        return;
    }
    
    // اضافه کردن پاسخ
    comments[commentIndex].reply = {
        text: replyText,
        date: new Date().toISOString()
    };
    
    saveComments();
    renderComments();
    
    showToast('پاسخ شما با موفقیت ثبت شد', 'success');
}

// تابع نمایش پیام (Toast)
function showToast(message, type = 'success') {
    // حذف toast قبلی
    const oldToast = document.querySelector('.custom-toast');
    if (oldToast) oldToast.remove();
    
    const toast = document.createElement('div');
    toast.className = `custom-toast ${type}`;
    toast.innerHTML = `
        <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
        <span>${message}</span>
    `;
    toast.style.cssText = `
        position: fixed;
        bottom: 30px;
        left: 50%;
        transform: translateX(-50%);
        background: ${type === 'success' ? '#0a1a2e' : '#ff4444'};
        color: white;
        padding: 12px 25px;
        border-radius: 12px;
        font-size: 0.95rem;
        font-weight: 500;
        z-index: 9999;
        box-shadow: 0 10px 40px rgba(0,0,0,0.3);
        display: flex;
        align-items: center;
        gap: 10px;
        animation: toastIn 0.4s ease;
        font-family: 'Vazirmatn', sans-serif;
        border-right: 4px solid ${type === 'success' ? '#c9a84c' : '#ff6666'};
    `;
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.style.animation = 'toastOut 0.4s ease';
        setTimeout(() => toast.remove(), 400);
    }, 3000);
}

// اضافه کردن انیمیشن‌های Toast
const toastStyles = document.createElement('style');
toastStyles.textContent = `
    @keyframes toastIn {
        from { opacity: 0; transform: translateX(-50%) translateY(30px); }
        to { opacity: 1; transform: translateX(-50%) translateY(0); }
    }
    @keyframes toastOut {
        from { opacity: 1; transform: translateX(-50%) translateY(0); }
        to { opacity: 0; transform: translateX(-50%) translateY(30px); }
    }
`;
document.head.appendChild(toastStyles);

// تابع escape برای جلوگیری از XSS
function escapeHtml(text) {
    if (!text) return '';
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// تابع ریست کردن صفحه کامنت‌ها (برای نمایش همه)
function resetCommentsPage() {
    currentPage = 0;
    renderComments();
}

// اگه کامنت جدید اضافه شد، صفحه رو ریست کن
const originalSubmit = window.submitComment;
window.submitComment = function() {
    currentPage = 0;
    originalSubmit();
};

console.log('✅ بخش کامنت‌ها با موفقیت فعال شد!');

// ============================================
// ===== اسکرول آرام و دکمه بازگشت =====
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    
    // ===== 1. اسکرول آرام برای بوک‌مارک‌ها =====
    const allLinks = document.querySelectorAll('a[href^="#"]');
    
    allLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            if (targetId === '#' || targetId === '') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                e.preventDefault();
                
                const headerHeight = document.querySelector('.header') ? document.querySelector('.header').offsetHeight : 0;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                if (history.pushState) {
                    history.pushState(null, null, targetId);
                }
            }
        });
    });
    
    // ===== 2. دکمه بازگشت به بالا =====
    const backToTopBtn = document.getElementById('backToTop');
    
    if (backToTopBtn) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 400) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        });
    }
    
    console.log('✅ اسکرول آرام و دکمه بازگشت فعال شد!');
});

// تابع اسکرول به بالا (برای استفاده در onclick)
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}






// ============================================
// ===== بخش آیه روز =====
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    
    // ===== لیست آیات قرآن (۳۰ آیه) =====
    const ayahList = [
        {
            text: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ',
            translation: 'به نام خداوند بخشنده مهربان',
            reference: 'سوره فاتحه، آیه ۱'
        },
        {
            text: 'الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ',
            translation: 'ستایش مخصوص خداوندی است که پروردگار جهانیان است',
            reference: 'سوره فاتحه، آیه ۲'
        },
        {
            text: 'مَالِكِ يَوْمِ الدِّينِ',
            translation: 'خداوند روز جزا و قیامت',
            reference: 'سوره فاتحه، آیه ۴'
        },
        {
            text: 'إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ',
            translation: 'تنها تو را می‌پرستیم و تنها از تو یاری می‌جوییم',
            reference: 'سوره فاتحه، آیه ۵'
        },
        {
            text: 'اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ',
            translation: 'ما را به راه راست هدایت فرما',
            reference: 'سوره فاتحه، آیه ۶'
        },
        {
            text: 'صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ',
            translation: 'راه کسانی که به آنان نعمت دادی',
            reference: 'سوره فاتحه، آیه ۷'
        },
        {
            text: 'إِنَّا أَعْطَيْنَاكَ الْكَوْثَرَ',
            translation: 'ما به تو کوثر (خیر فراوان) عطا کردیم',
            reference: 'سوره کوثر، آیه ۱'
        },
        {
            text: 'فَصَلِّ لِرَبِّكَ وَانْحَرْ',
            translation: 'پس برای پروردگارت نماز بخوان و قربانی کن',
            reference: 'سوره کوثر، آیه ۲'
        },
        {
            text: 'إِنَّ شَانِئَكَ هُوَ الْأَبْتَرُ',
            translation: 'همانا دشمن تو، او بی‌عقب (بی‌نصیب از همه خیر) است',
            reference: 'سوره کوثر، آیه ۳'
        },
        {
            text: 'قُلْ هُوَ اللَّهُ أَحَدٌ',
            translation: 'بگو: او خداوند یکتاست',
            reference: 'سوره اخلاص، آیه ۱'
        },
        {
            text: 'اللَّهُ الصَّمَدُ',
            translation: 'خداوند بی‌نیاز و پناهگاه همگان است',
            reference: 'سوره اخلاص، آیه ۲'
        },
        {
            text: 'لَمْ يَلِدْ وَلَمْ يُولَدْ',
            translation: 'نزاده و زاده نشده است',
            reference: 'سوره اخلاص، آیه ۳'
        },
        {
            text: 'وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ',
            translation: 'و هیچ کس همتا و مانند او نیست',
            reference: 'سوره اخلاص، آیه ۴'
        },
        {
            text: 'إِنَّا أَنزَلْنَاهُ فِي لَيْلَةِ الْقَدْرِ',
            translation: 'ما آن (قرآن) را در شب قدر نازل کردیم',
            reference: 'سوره قدر، آیه ۱'
        },
        {
            text: 'وَمَا أَدْرَاكَ مَا لَيْلَةُ الْقَدْرِ',
            translation: 'و تو چه می‌دانی شب قدر چیست؟',
            reference: 'سوره قدر، آیه ۲'
        },
        {
            text: 'لَيْلَةُ الْقَدْرِ خَيْرٌ مِّنْ أَلْفِ شَهْرٍ',
            translation: 'شب قدر از هزار ماه بهتر است',
            reference: 'سوره قدر، آیه ۳'
        },
        {
            text: 'تَنَزَّلُ الْمَلَائِكَةُ وَالرُّوحُ فِيهَا',
            translation: 'فرشتگان و روح (جبرئیل) در آن شب نازل می‌شوند',
            reference: 'سوره قدر، آیه ۴'
        },
        {
            text: 'سَلَامٌ هِيَ حَتَّىٰ مَطْلَعِ الْفَجْرِ',
            translation: 'آن شب تا طلوع فجر سلام و امنیت است',
            reference: 'سوره قدر، آیه ۵'
        },
        {
            text: 'إِنَّ اللَّهَ مَعَ الصَّابِرِينَ',
            translation: 'همانا خداوند با صابران است',
            reference: 'سوره بقره، آیه ۱۵۳'
        },
        {
            text: 'وَأَن لَّيْسَ لِلْإِنسَانِ إِلَّا مَا سَعَىٰ',
            translation: 'و اینکه برای انسان نیست جز آنچه تلاش کرده است',
            reference: 'سوره نجم، آیه ۳۹'
        },
        {
            text: 'فَاذْكُرُونِي أَذْكُرْكُمْ',
            translation: 'پس مرا یاد کنید تا شما را یاد کنم',
            reference: 'سوره بقره، آیه ۱۵۲'
        },
        {
            text: 'وَأَقِيمُوا الصَّلَاةَ وَآتُوا الزَّكَاةَ',
            translation: 'و نماز را برپا دارید و زکات را بپردازید',
            reference: 'سوره بقره، آیه ۴۳'
        },
        {
            text: 'إِنَّ اللَّهَ يُحِبُّ الْمُحْسِنِينَ',
            translation: 'همانا خداوند نیکوکاران را دوست دارد',
            reference: 'سوره بقره، آیه ۱۹۵'
        },
        {
            text: 'وَلَا تَنَازَعُوا فَتَفْشَلُوا',
            translation: 'و با یکدیگر نزاع نکنید تا سست نشوید',
            reference: 'سوره انفال، آیه ۴۶'
        },
        {
            text: 'إِنَّ اللَّهَ يُحِبُّ الْمُتَوَكِّلِينَ',
            translation: 'همانا خداوند توکل‌کنندگان را دوست دارد',
            reference: 'سوره آل عمران، آیه ۱۵۹'
        },
        {
            text: 'وَمَن يَتَّقِ اللَّهَ يَجْعَل لَّهُ مَخْرَجًا',
            translation: 'و هر کس تقوا پیشه کند، خداوند راه خروجی برای او قرار می‌دهد',
            reference: 'سوره طلاق، آیه ۲'
        },
        {
            text: 'فَإِنَّ مَعَ الْعُسْرِ يُسْرًا',
            translation: 'همانا با سختی، آسانی است',
            reference: 'سوره شرح، آیه ۶'
        },
        {
            text: 'إِنَّ اللَّهَ لَا يُضِيعُ أَجْرَ الْمُحْسِنِينَ',
            translation: 'همانا خداوند پاداش نیکوکاران را هدر نمی‌دهد',
            reference: 'سوره توبه، آیه ۱۲۰'
        },
        {
            text: 'رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا',
            translation: 'پروردگارا، دل‌های ما را پس از آنکه هدایت کردی، منحرف مگردان',
            reference: 'سوره آل عمران، آیه ۸'
        },
        {
            text: 'سُبْحَانَ رَبِّكَ رَبِّ الْعِزَّةِ عَمَّا يَصِفُونَ',
            translation: 'منزه است پروردگار تو، پروردگار عزت، از آنچه توصیف می‌کنند',
            reference: 'سوره صافات، آیه ۱۸۰'
        }
    ];

    // ===== تابع دریافت آیه روز =====
    function getDailyAyah() {
        const today = new Date();
        const todayStr = today.getFullYear() + '-' + 
                        String(today.getMonth() + 1).padStart(2, '0') + '-' + 
                        String(today.getDate()).padStart(2, '0');
        
        const storedDate = localStorage.getItem('ayahDate');
        const storedIndex = localStorage.getItem('ayahIndex');
        
        if (storedDate === todayStr && storedIndex !== null) {
            return parseInt(storedIndex);
        }
        
        const startDate = new Date(2024, 0, 1);
        const diffTime = today - startDate;
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
        
        const index = diffDays % ayahList.length;
        
        localStorage.setItem('ayahDate', todayStr);
        localStorage.setItem('ayahIndex', String(index));
        
        return index;
    }

    // ===== تابع نمایش آیه =====
    function displayAyah() {
        const index = getDailyAyah();
        const ayah = ayahList[index];
        
        document.getElementById('ayahText').textContent = ayah.text;
        document.getElementById('ayahTranslation').textContent = ayah.translation;
        document.getElementById('ayahReference').textContent = '📖 ' + ayah.reference;
        
        const today = new Date();
        const options = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' };
        document.getElementById('ayahDate').textContent = today.toLocaleDateString('fa-IR', options);
    }

    displayAyah();

    console.log('✅ آیه روز با موفقیت فعال شد!');
});












const amSlides = document.querySelectorAll(".am-slider-slide");

const amNext = document.querySelector(".am-slider-next");

const amPrev = document.querySelector(".am-slider-prev");

let amCurrent = 0;

function amShowSlide(index){

    amSlides.forEach(slide=>{

        slide.classList.remove("active");

    });

    amSlides[index].classList.add("active");

}

amNext.addEventListener("click",()=>{

    amCurrent++;

    if(amCurrent>=amSlides.length){

        amCurrent=0;

    }

    amShowSlide(amCurrent);

});

amPrev.addEventListener("click",()=>{

    amCurrent--;

    if(amCurrent<0){

        amCurrent=amSlides.length-1;

    }

    amShowSlide(amCurrent);

});

setInterval(()=>{

    amCurrent++;

    if(amCurrent>=amSlides.length){

        amCurrent=0;

    }

    amShowSlide(amCurrent);

},5000);


