import React from 'react';
import './Manga-content.css';

function MangaContent() {
  return (
    <div className="Manga-Content">
      <div>
        <div className="Pages">
            <div className="dropdown">
              <button className="dropdown-button">Страница 1</button>
                <div className="dropdown-content">
                  <a href='.'>Страница 1</a>
                  <a href='.'>Страница 2</a>
                  <a href='.'>Страница 3</a>
                </div>
            </div>
        </div>
      </div>
      <div className="Manga-Images">
        <div id="1">
          <img className="Manga-Images" alt="screen" src="https://img.remanga.org/images/unbreakable/b27d6d34af0e8e9bd9023b9aaf2309ea/f197c9fbcbfbd803bb621e6da91f0919.jpeg"/>
        </div>
        <div id="2">
          <img className="Manga-Images" alt="screen" src="https://img.remanga.org/images/unbreakable/b27d6d34af0e8e9bd9023b9aaf2309ea/f8764d55505a8e79cafaa764a370f8c6.jpeg"/>
        </div>
        <div id="3">
          <img className="Manga-Images" alt="screen" src="https://img.remanga.org/images/unbreakable/b27d6d34af0e8e9bd9023b9aaf2309ea/e26b91f4eab6909d6f5a2f8e67fb83db.jpeg"/>
        </div>
      </div>
        <div className="Commentary-Box">
          <label htmlFor="">Оставить комментарий</label>
          <textarea name="commentary_box" id="commentary" />
          <button> Отправить </button>
        </div>
        <div className="Commentaries">
          <div className="User-Commentary">
            <label className="User-Name">Пользователь_1</label>
            <img src="https://www.gravatar.com/avatar/46b5428a878306d5af0a87fc7b2db499?s=328&d=identicon&r=PG" alt="" />
            <label className="User-Name">Комментарий: Привет хуй залупа</label>
            <label className="User-Name">-133894</label>
          </div>
          <div className="User-Commentary">
            <label className="User-Name">Пользователь_2</label>
            <img src="https://www.gravatar.com/avatar/46b5428a878306d5af0a87fc7b2db499?s=328&d=identicon&r=PG" alt="" />
            <label className="User-Name">Комментарий: Хаха смешно</label>
            <label className="User-Name">+5</label>
          </div>
          <div className="User-Commentary">
            <label className="User-Name">Пользователь_3</label>
            <img src="https://www.gravatar.com/avatar/46b5428a878306d5af0a87fc7b2db499?s=328&d=identicon&r=PG" alt="" />
            <label className="User-Name">Комментарий: Так его!</label>
            <label className="User-Name">+1</label>
          </div>
          <div className="User-Commentary">
            <label className="User-Name">Пользователь_4</label>
            <img src="https://www.gravatar.com/avatar/46b5428a878306d5af0a87fc7b2db499?s=328&d=identicon&r=PG" alt="" />
            <label className="User-Name">Комментарий: xmm</label>
            <label className="User-Name">-2</label>
          </div>
        </div>
        
    </div>
  );
}

export default MangaContent;
