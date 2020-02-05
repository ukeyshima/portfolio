import React from 'react';
import Header from './header';
import icon from './assets/img/icon.png';
import style from './style.scss';

export default class About extends React.Component {
  componentDidMount() {
    style.use();
  }
  componentWillUnmount() {
    style.unuse();
  }
  render() {
    return (
      <React.Fragment>
        <Header />
        <div>
          <div
            className='icon'
            style={{
              backgroundImage: `url(${icon})`
            }}
          />
          <div className='profile'>
            <h1>Profile</h1>
            <p>島田 雄輝 (Yuki Shimada)</p>
            <h2>所属</h2>
            <p>
              明治大学 先端数理科学研究科 先端メディアサイエンス専攻 宮下研究室 M1
            </p>
            <h2>研究分野</h2>
            <p>Human-Computer Interaction, Programming Experience, Gaze Interaction</p>
            <h2>発表業績</h2>
            <p>
              島田雄輝，薄羽大樹，宮下芳明．数式の記述方法を選択できるプログラミングインタフェース，第26回インタラクティブシステムとソフトウェアに関するワークショップ
              (WISS2018) 論文集，2018．
            </p>
            <h2>趣味</h2>
            <p>Programming, Computer-Graphics</p>
            <h2>資格</h2>
            <p>CGエンジニア検定 エキスパート, 剣道二段, 居合道二段</p>
            <h2>職歴</h2>
            <p>株式会社 東京個別指導学院 (講師)</p>
            <p>株式会社 TANOsim (エンジニア)</p>
            <p>株式会社 チームラボ (インタラクティブエンジニア)</p>
            <h2>関連リンク</h2>
            <p>
              <a href='https://github.com/ukeyshima'>GitHub</a>
              <a href='https://www.shadertoy.com/user/ukeyshima'>Shadertoy</a>
              <a href='https://qiita.com/ukeyshima'>Qiita</a>
              <a href='https://twitter.com/ukeyshima'>Twitter</a>
            </p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
