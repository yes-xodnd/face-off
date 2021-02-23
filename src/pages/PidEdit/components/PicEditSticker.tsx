import React, { useState } from 'react';

function PicEditSticker({ state, methods }) {
  const {
    isAuthed,
    // stickerBase,
    stickerUser,
    selectedStickerIdxBase,
    selectedStickerIdxUser,
    stickerImages,
  } = state;

  const { 
    // fetchStickerBase,
    fetchStickerUser,
    selectSticker,
    // addSticker,
    deleteSticker,
    showMessage,
  } = methods;

  // const fetchStickerBaseRef = useRef(fetchStickerBase);
  // useEffect(() => {
  //   if (!stickerBase.length) fetchStickerBaseRef.current();
  // }, [stickerBase]);

  const typeNames = ['기본 스티커', '내 스티커'];
  const [stickerType, setStickerType] = useState(typeNames[0]);

  // components
  const ButtonAddSticker = () => {
    // const handleImageUpload = async e => { 
    //   addSticker({
    //     uid: sessionStorage.userId,
    //     img: URL.createObjectURL(e.target.files[0])
    //   });
    // };
    function handleImageUpload () {
      alert('데모에서는 지원하지 않는 기능입니다.');
    }

    return (
      <label>
        <input 
          onChange={handleImageUpload} style={{display:"none"}}
          type="file" accept="image/*" />
        <div className="base-face chewy">+</div>
      </label>
    );
  };

  const Sticker = ({ item, index }) => {
    const isUser = stickerType === '내 스티커';
    const selectedIdx = isUser ? selectedStickerIdxUser : selectedStickerIdxBase ;

    return (
      <div 
        onClick={() => {selectSticker(item, index, stickerType)}}
        className={`sticker ${selectedIdx === index ? 'sticker-selected' : ''}`}>
        <img src={item} alt="sticker"/>
        { isUser &&
          <div onClick={() => deleteSticker(item.sid)} className="sticker-delete-btn">
            <div></div>
          </div>
        }
      </div>
  )};

  const StickerBase = () => {
    // const list = stickerBase.map((item, index) => (
    //   <Sticker key={index} item={item} idx={index} />
    // ));
    const StickerList = stickerImages.map((item, index) => (
      <Sticker item={item} index={index} key={index} />
    ));

    return <div className="sticker-grid">{ StickerList }</div>;
  }

  const StickerUser = () => {
    const list = stickerUser.map((item, index) => (
      <Sticker key={index} item={item} index={index} />
    ));
    return <div className="sticker-grid"><ButtonAddSticker />{ list }</div>;
  }

  return (
    <>
      <div className="flex">
        <div 
          onClick={() => setStickerType(typeNames[0])}
          className='sticker-type-btn' >{ typeNames[0] }
        </div>
        <div 
          onClick={() => {
            if (isAuthed) {
              setStickerType(typeNames[1]);
              fetchStickerUser();
            } else {
              showMessage();
            }
          }}
          className='sticker-type-btn' >{ typeNames[1] }
        </div>
      </div>

      { stickerType === typeNames[0] && <StickerBase /> }
      { stickerType === typeNames[1] && <StickerUser /> }

    </>
  )
}

export default PicEditSticker;