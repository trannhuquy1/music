const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

var openPersion = document.querySelector('.persional');
var btnPersion =document.querySelector('.slibar__menu-item');
var contentSongItem = document.querySelector('.persional__content-song-item-detail');
var btnPlay = document.querySelector('.persional__content-song-item-detail-item-info');
const audiocurent = $('.audiocurent');
const logoSong = document.querySelector('.persional__content-song-item-detail-item-logo');
const btntoggleplay = $('.btn-toggle-play');
const iconplay = $('.icon-play');
const iconpause = $('.icon-pause');
const player__controlleftphotoimg = $('.player__control-left-photo-img');
const player__controlleftcontentname = $('.player__control-left-content-name');
const player__controlleftcontenttacgia = $('.player__control-left-content-tacgia');
const progress = $('.progress');
const btnprev = $('.btn-prev')
const btnnext = $('.btn-next');
const gai = $('.gai');
const persionalcontentsongitemdetailitembao = $('.persional__content-song-item-detail-bao');
const persionalcontentsongitemdetailitem = $('.persional__content-song-item-detail-item')
const btnrandom = $('.btn-random');
const btnrepeat = $('.btn-repeat');

const listSongAPI = 'http://localhost:3000/listSongs';

const app = {
    currentIndex : 0 ,
    isRandom : false,
    isPre : false,
    listSongs : [
        {
            "background": "./Assets/img/top100/tongphu.jpg",
            "name": "Tòng phu",
            "singer":"Green, Đại Mèo Remix",
            "pathSong":"./Assets/listSong/Tòng Phu - Keyo - Bài hát, lyrics.mp3",
            "duration":"04:54"
        },
        {
            "background": "./Assets/img/top100/cochoicochiu.jpg",
            "name": "Có chơi có chịu",
            "singer":"Karik, Only C",
            "pathSong":"./Assets/listSong/Có Chơi Có Chịu - Karik, Only C - Bài hát, lyrics.mp3",
            "duration":"03:44"
        },
        {
            "background": "./Assets/img/top100/antinhsangtrang.jpg",
            "name": "Ân tình sang trang",
            "singer":"Châu Khải Phong, ACV",
            "pathSong":"./Assets/listSong/Ân Tình Sang Trang - Châu Khải Phong, ACV - Bài hát, lyrics.mp3",
            "duration":"05:20"
        },
        {
            "background": "./Assets/img/top100/mono.jpg",
            "name": "Waiting For You",
            "singer":"MONO, Onionn",
            "pathSong":"./Assets/listSong/Waiting For You - MONO, Onionn - Bài hát, lyrics.mp3",
            "duration":"04:26"
        },
        {
            "background": "./Assets/img/top100/thegioitrongem.jpg",
            "name": "Thế giới trong em",
            "singer":"Hương Ly",
            "pathSong":"./Assets/listSong/Thế Giới Trong Em - Hương Ly, LY.M - Bài hát, lyrics.mp3",
            "duration":"03:58"
        },
        {
            "background": "./Assets/img/top100/contimkhongdoithay.jpg",
            "name": "Con tim không đổi thay",
            "singer":"Dee Trần",
            "pathSong":"./Assets/listSong/Con Tim Không Đổi Thay - Dee Trần - Bài hát, lyrics.mp3",
            "duration":"03:33"
        },
        {
            "background": "./Assets/img/top100/noiyeuthuongchilathua.jpg",
            "name": "Nói yêu thương chỉ là thừa",
            "singer":"Dee Trần",
            "pathSong":"./Assets/listSong/Nói Yêu Thương Chỉ Là Thừa - Dee Trần - Bài hát, lyrics.mp3",
            "duration":"04:32"
        }
    ],

    isplaying : true,
    render : function () {
        
// lấy list nhạc cá nhân
                var http = ''; 
                this.listSongs.forEach((element,index) => {
                    http += `<div class="persional__content-song-item-detail-item ${ index === this.currentIndex ? "song__active" : "" }" data-index = "${index}">
                    <div class="persional__content-song-item-detail-item-info">
                        <img src="${element.background}" alt="" class="persional__content-song-item-detail-item-logo">
                        <div class="persional__content-song-item-detail-item-title">
                            <div class="persional__content-song-item-detail-item-title-name">
                                ${element.name}
                            </div>
                            <div class="persional__content-song-item-detail-item-title-author">
                                <a href="" class="persional__content-song-item-detail-item-title-author-link">${element.singer}</a>, 
                                <a href="" class="persional__content-song-item-detail-item-title-author-link">Quý</a>, 
                                <a href="" class="persional__content-song-item-detail-item-title-author-link">Quý</a>
                            </div>
                        </div>
                    </div>
                    <div class="persional__content-song-item-detail-item-time">
                        <p class="persional__content-song-item-detail-item-time-p">
                            ${element.duration}
                        </p>
                    </div>
                    <div class="persional__content-song-item-detail-icon">
                        <div class="persional__content-song-item-detail-icon-type persional__content-song-item-detail-icon-void">
                            <i class="fa-sharp fa-solid fa-microphone"></i>
                        </div>
                        <div class="persional__content-song-item-detail-icon-type persional__content-song-item-detail-icon-heart">
                            <i class="fa-solid fa-heart"></i>
                        </div>
                        <div class="persional__content-song-item-detail-icon-type persional__content-song-item-detail-icon-menu">
                            <i class="fa-solid fa-ellipsis"></i>
                        </div>
                    </div>
                    <audio id="audio" src="${element.pathSong}"></audio>
                </div>`

                logoSong.src = element.background;
            });
            persionalcontentsongitemdetailitembao.innerHTML = http;
    },

    handleEvent : function () { 

        // phát nhạc
        const _this = this;
        btntoggleplay.onclick = function() {
            if(_this.isplaying){
                audiocurent.play();
            }
            else {
                audiocurent.pause();
            }
        }

        audiocurent.onplay = function() {
            _this.isplaying = false;
            iconpause.classList.add('playing');
            iconplay.classList.remove('playing');
            cdquay.play();
            gai.classList.add('gai__bober');
        }

        audiocurent.onpause = function() {
            _this.isplaying = true;
            iconpause.classList.remove('playing');
            iconplay.classList.add('playing');
            cdquay.pause();
        }

        // cái thanh chạy chạy
        audiocurent.ontimeupdate = function() {
            if(audiocurent.duration) {
                progress.value = audiocurent.currentTime / audiocurent.duration *100;
            }
        } 
        
        //tua nhạc
        progress.onchange = function(e) {
            audiocurent.currentTime = audiocurent.duration / 100 * e.target.value ;
        }

        // quay lại
        btnprev.onclick = function() {
            if(_this.isRandom) {
                _this.randomSong();
            }
            else {
                _this.prevSong();
            }
            audiocurent.play();
            cdquay.cancel();
            _this.render();
            _this.scrollactiveSong();
        }

        //next 
        btnnext.onclick = function() {
            if(_this.isRandom) {
                _this.randomSong();
            }
            else {
                _this.nextSong();
            }
            audiocurent.play();
            cdquay.cancel();
            _this.render();
            _this.scrollactiveSong();
        }
        

        //cái hình quay
        const cdquay = gai.animate(
            [
                {
                    transform : 'rotate(360deg)'
                },
            ],
            {
                duration : 10000,
                iterations : Infinity
            }
        )
        cdquay.pause();

        persionalcontentsongitemdetailitembao.onclick = function(e) {
            const SongNode = e.target.closest('.persional__content-song-item-detail-item:not(.song__active)');
            if(SongNode || e.target.closest('.persional__content-song-item-detail-icon')) {
                if(SongNode) {
                    _this.currentIndex = Number(SongNode.getAttribute('data-index'));
                    _this.loadCurentSong();
                    _this.render();
                    audiocurent.play();
                }
            }
        }

        // phát lại 
        btnrepeat.onclick = function() {
            _this.isPre = !_this.isPre
            btnrepeat.classList.toggle('btn-repeat-tongle',_this.isPre);
        }

        // phát ngẫu nhiên
        btnrandom.onclick = function() {
            _this.isRandom = !_this.isRandom
            btnrandom.classList.toggle('btn__random-tongle',_this.isRandom);
        }

        audiocurent.onended = function() {
            if(_this.isPre) {
                audiocurent.play() ;
            }
            else
            {
                btnnext.click();
            }
        }
    },

    //lấy bài đầu tiên
    definePropertys : function () {
        Object.defineProperty(this, 'curentSong', {
            get: function() {
                return this.listSongs[this.currentIndex];
            }
        })
    },

    loadCurentSong : function () {
                player__controlleftphotoimg.src = this.curentSong.background;
                player__controlleftcontentname.textContent = this.curentSong.name;
                player__controlleftcontenttacgia.textContent = this.curentSong.singer;
                audiocurent.src = this.curentSong.pathSong;
                gai.src = this.curentSong.background;
    },

    //quay trở lại
    prevSong : function () {
        this.currentIndex--;
        if(this.currentIndex < 0 ) {
            this.currentIndex = this.listSongs.length -1;
        }
        this.loadCurentSong();
        gai.classList.remove('gai__bober');
    },

    //bài tiếp theo
    nextSong : function () {
        this.currentIndex++;
        if(this.currentIndex >= this.listSongs.length) {
            this.currentIndex = 0;
        }
        this.loadCurentSong();
        gai.classList.remove('gai__bober');
    },
    //hiển thị bài hát khi bị khuất
    scrollactiveSong : function() {
        setTimeout(() => {
            $('.persional__content-song-item-detail-item.song__active').scrollIntoView({
                behavior : 'smooth',
                block : 'nearest'
            })
        }, 100);
    },

    randomSong : function() {
        let newIndex;
        do{
            newIndex = Math.floor(Math.random() * this.listSongs.length)
        }while(newIndex === this.currentIndex)
        this.currentIndex = newIndex;
        this.loadCurentSong();
    },

    start : function () {
        this.render();
        this.definePropertys();
        this.loadCurentSong();
        this.handleEvent();
    }
}

app.start();


    