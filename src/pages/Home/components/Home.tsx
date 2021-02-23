import React  from 'react';

// components
import ImageArea from '../../UI/ImageArea';
import Welcome from './Welcome';
import './Home.scss';

function Home({ state, methods }) {
  const { picURL } = state;
  const { onImageUpload, onStart } = methods;

  // components
  const ButtonUpload = () => (
        <button
          onClick={e => {
            const target = e.target as HTMLButtonElement;
            const input = target.querySelector('input');
            input?.click();
        }}
        className="base-btn">
          사진 업로드
          <input 
          onChange={onImageUpload}
          type="file" accept="image/*"
          style={{ display:"none" }}
          />
        </button>
  );

  const ButtonStart = () => (
        <button onClick={onStart} className="base-btn font-blue">시작</button>
  );

  return (
    <>
      { !picURL && <Welcome /> }

      { picURL &&
        <div className="home-image-wrap">
          <ImageArea picURL={picURL} />
        </div>
      }

      <div className="divider"></div>

      <section className="btn-wrap">
        <ButtonUpload />
        { picURL && <ButtonStart /> }
      </section>
    </>
  );
}

export default Home;